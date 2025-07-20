var readFile = [
  {
    BankCountry: "ID",
    BankID: "3",
    BankInitial: "CIMB Niaga - tidak jadi pakai",
    BankName: "CIMB Niaga - not used",
    BankNumber: "",
    BankStatus: "Active",
    DataOperation: "",
    Date: "1/24/2025",
    FileID: "31",
    Source: "NDP",
    Status: "Send",
    SwiftCode: "CIMB Niaga",
    Target: "SMART",
    Time: "9:10:10",
    UpdateTag: "Z",
    content_type: "bank_master",
  },
  {
    BankCountry: "INDO",
    BankID: "8",
    BankInitial: "BANK TEST update",
    BankName: "BANK TEST update",
    BankNumber: "",
    BankStatus: "Active",
    DataOperation: "",
    Date: "1/24/2025",
    FileID: "31",
    Source: "NDP",
    Status: "Send",
    SwiftCode: "BANK TEST update 2",
    Target: "SMART",
    Time: "9:10:10",
    UpdateTag: "R",
    content_type: "bank_master",
    is_last_record: "true",
  },
];

// buat hasil dari readFile jadi seperti ini:
// {
//   "bank_country": "ID",
//   "bank_id": "3",
//   "bank_initial": "CIMB Niaga - tidak jadi pakai",
//   "bank_name": "CIMB Niaga - not used",
//   "bank_number": "",
//   "bank_status": "Active",
//   "data_operation": "",
//   "date": "1/24/2025",
//   "file_id": "31",
//   "source": "NDP",
//   "status": "Send",
//   "swift_code": "CIMB Niaga",
//   "target": "SMART",
//   "time": "9:10:10",
//   "update_tag": "Z",
//   "content_type": "bank_master"
// }

var formattedData = readFile.map(function (item) {
  var formattedItem = {};

  Object.keys(item).forEach(function (originalKey) {
    var formattedKey = originalKey
      .replace(/([a-z])([A-Z])/g, "$1_$2")
      .toLowerCase();
    formattedItem[formattedKey] = item[originalKey];
  });

  return formattedItem;
});

console.log(formattedData);