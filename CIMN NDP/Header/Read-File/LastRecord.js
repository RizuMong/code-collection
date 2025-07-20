var contentType = "bank_master";

var readFile = [
  {
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
    is_last_record: "true",
    content_type: "bank_master", // data assign
  },
  {
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
    is_last_record: "true",
    content_type: "bank_master", // data assign
  },
];

for (var i = 0; i < readFile.length; i++) {
  readFile[i].content_type = contentType;
};

if (readFile.length > 0) {
  readFile[readFile.length - 1].is_last_record = true;
};

console.log(readFile);