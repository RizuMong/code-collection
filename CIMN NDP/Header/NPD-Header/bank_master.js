var req = {
  fileHeader: {
    BankCountry: "ID",
    BankID: "1234567890",
    BankInitial: "",
    BankName: "Bank CIMB Niaga",
    BankNumber: "22",
    BankStatus: "ACTIVE",
    DataOperation: "",
    Date: "17/01/2025",
    FileID: "32",
    Source: "NDP",
    Status: "Send",
    SwiftCode: "CIMBNIAXXX",
    Target: "SMART",
    Time: "09:55:10",
    UpdateTag: "Y",
  },
};

var headers = [
  "FileID",
  "Date",
  "Time",
  "Source",
  "Target",
  "Status",
  "DataOperation",
  "BankID",
  "UpdateTag",
  "BankName",
  "BankInitial",
  "SwiftCode",
  "BankCountry",
  "BankNumber",
  "BankStatus",
];

// var headers = [
//   "file_id",
//   "date",
//   "time",
//   "source",
//   "target",
//   "status",
//   "data_operation",
//   "bank_id",
//   "update_tag",
//   "bank_name",
//   "bank_initial",
//   "swift_code",
//   "bank_country",
//   "bank_number",
//   "bank_status",
// ];

var fileHeader = req.fileHeader;

var fileHeaderValidity = true;

for (var idx = 0; idx < headers.length; idx++) {
  if (fileHeader[headers[idx]] === undefined) {
    fileHeaderValidity = false;
    break;
  }
}

console.log(fileHeaderValidity);
