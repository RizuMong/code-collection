var readFile = [
  {
    BankCountry: "ID",
    BankID: "TESTBANK1",
    BankInitial: "Bank Testing BM",
    BankName: "Bank Testing BM",
    BankNumber: "",
    BankStatus: "Active",
    DataOperation: "",
    Date: "1/24/2025",
    FileID: "T012",
    Source: "NDP",
    Status: "Send",
    SwiftCode: "Testing BM",
    Target: "SMART",
    Time: "9:10:10",
    UpdateTag: "A",
  },
];

var contentType = "bank_master";

if (readFile && readFile.length > 0) {
  var formattedData = readFile.map(function (item, index) {
    var formattedItem = {};

    Object.keys(item).forEach(function (originalKey) {
      var formattedKey = originalKey
        .replace(/([a-z])([A-Z])/g, "$1_$2")
        .toLowerCase();

      var value = item[originalKey];
      
      if (formattedKey === "date" && /\d{1,2}\/\d{1,2}\/\d{4}/.test(value)) {
        value = value.replace(/\//g, "-");
      };

      formattedItem[formattedKey] = value;
    });

    formattedItem.content_type = contentType;

    if (index === readFile.length - 1) {
      formattedItem.is_last_record = true;
    }

    return formattedItem;
  });
}

console.log(formattedData);
