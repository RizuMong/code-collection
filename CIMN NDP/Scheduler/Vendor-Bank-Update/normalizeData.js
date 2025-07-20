var readFile = [
  {
    BankAccID: "1",
    BankAccountBranchName: "BRANCH",
    BankAccountCurrency: "840",
    BankAccountHolderName: "Amanda",
    BankAccountNumber: "21586666243",
    BankCountry: "Indonesia",
    BankName: "BANK CIMB Niaga",
    DataOperation: "VENDOR_BANK_UPDATE",
    Date: "1/24/2025",
    FileID: "14",
    GFMSVendorCode: "20332",
    IBAN: "",
    NDPVendorCode: "T3000000014",
    Source: "NDP",
    Status: "Send",
    Target: "SMART",
    Time: "9:10:10",
    UpdateTag: "Y",
    VendorName: "PT Officeless 3 Diupdate DAYAT",
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
      }

      formattedItem[formattedKey] = value;
    });

    formattedItem.content_type = contentType;

    if (index === readFile.length - 1) {
      formattedItem.is_last_record = true;
    }

    return formattedItem;
  });
}

console.log(formattedData[0].file_id);