var payload = {
  bank_account_number: "757383",
  email: "Cobalagiemployee4@mailinator.com",
  employee_code: "6373828",
  identity_number: "",
  ids: "bKojGeKSR",
  status: "Create Data",
};

// Data KTP
var filterKTP = {
  _filter_version: 2,
  where_is_and: {
    identity_number: payload.identity_number,
  },
};

var sort = { created_at: -1 };
var idDataManager = "sLT3HKm4R";
var page = 1;
var limit = 10;
var filterOperator = "and";
var dataKTP =
  _findRecords(idDataManager, page, limit, sort, filterKTP, filterOperator) ||
  [];

// Data NIK / Employee Code
var filterNIK = {
  _filter_version: 2,
  where_is_and: {
    employee_code: payload.employee_code,
  },
};

var sort = { created_at: -1 };
var idDataManager = "sLT3HKm4R";
var page = 1;
var limit = 10;
var filterOperator = "and";
var dataNIK =
  _findRecords(idDataManager, page, limit, sort, filterNIK, filterOperator) ||
  [];

// Data Rekening Bank
var filterBank = {
  _filter_version: 2,
  where_is_and: {
    employee_code: payload.bank_account_number,
  },
};

var sort = { created_at: -1 };
var idDataManager = "sLT3HKm4R";
var page = 1;
var limit = 10;
var filterOperator = "and";
var dataBank =
  _findRecords(idDataManager, page, limit, sort, filterBank, filterOperator) ||
  [];

// ====== Validasi Data ========
if (dataKTP.length > 0 || dataNIK.length > 0 || dataBank.length > 0) {
  response = {
    status: "error",
    message: "Data Duplicate",
    data: {
      ktp: dataKTP,
      nik: dataNIK,
      bank: dataBank,
    },
  };
} else {
  response = {
    status: "success",
    message: "Data Valid",
  };
};


