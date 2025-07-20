var payload = {
  // activity: "Koreksi Bunga manual",
  // amount: 0,
  // branch: "47077",
  // company_code: "1611",
  // company_id: 25236,
  // converted: 0,
  // created_at: 1733287436496,
  // created_by: 174795,
  // currency_code: "IDR",
  // customer_account_number: "",
  // description: "Test SMART ADI",
  // dr_cr_option: "CR",
  // exchange_rate: 0,
  // general_ledger_account: "2722452",
  // general_ledger_sub_account: "0",
  // id: "7N2Cyd4Ng",
  // id_import_adi_transaction: "7N2Cyd4Ng",
  // import_id: "zIhjyd4Ng",
  // line_description: "Test ADI jurnal ADI dari Smart",
  // line_number: "2",
  // nomor_tiket: "123",
  // optional_2: "0",
  // optional_3: "0",
  // product: "0",
  // rc_code: "3005",
  // reference_number: "20230105PC40567",
  // updated_at: 1733287436496,
  // updated_by: 174795,
  
  // amount: 0,
  // branch: "BRANCH",
  // company_code: "1611",
  // company_id: 25236,
  // converted: 1,
  // created_at: 0,
  // created_by: 174795,
  // currency_code: "IDR",
  // customer_account_number: "1035478",
  // dr_cr_option: "CR",
  // exchange_rate: 1,
  // flow_status: "",
  // general_ledger_account: "RIZKI",
  // general_ledger_sub_account: "CAROL",
  // id: "N42QWtVNR",
  // id_staging_import_adi_jurnal: "N42QWtVNR",
  // import_adi_transaction_id: "123",
  // line_description: "LINE DESCRIPTION",
  // line_number: "K1234533",
  // optional_2: "",
  // optional_3: "",
  // product: "PRODUCT",
  // rc_code: "1233.3233",
  // reference_number: "23333",
  // staging_import_adi_transaction_id: "",
  // updated_at: 0,
  // updated_by: 174795,
};

var columnMappings = {
  line_number: "Line Number",
  currency_code: "Currency Code",
  company_code: "Company Code",
  branch: "Branch",
  rc_code: "RC Code",
  general_ledger_account: "General Ledger Account",
  general_ledger_sub_account: "General Ledger Sub-Account",
  product: "Product",
  optional_2: "Optional 2",
  optional_3: "Optional 3",
  dr_cr_option: "DR/CR",
  amount: "Amount",
  converted: "Converted Amount",
  reference_number: "Reference Number",
  nomor_tiket: "Nomor Tiket",
  line_description: "Line Description",
};


var getStagingJurnal = [
  {
    amount: 0,
    branch: "BRANCH",
    company_code: "1611",
    company_id: 25236,
    converted: 1,
    created_at: 0,
    created_by: 174795,
    currency_code: "IDR",
    customer_account_number: "1035478",
    dr_cr_option: "CR",
    exchange_rate: 1,
    flow_status: "",
    general_ledger_account: "RIZKI",
    general_ledger_sub_account: "CAROL",
    id: "N42QWtVNR",
    id_staging_import_adi_jurnal: "N42QWtVNR",
    import_adi_transaction_id: "123",
    line_description: "LINE DESCRIPTION",
    line_number: "K1234533",
    optional_2: "",
    optional_3: "",
    product: "PRODUCT",
    rc_code: "1233.3233",
    reference_number: "23333",
    staging_import_adi_transaction_id: "",
    updated_at: 0,
    updated_by: 174795,
  },
];


function _log(message) {
  console.log(message);
};

function getKeyCombination(data, keys) {
  return keys
    .map(function (key) {
      return data[key] || "";
    })
    .join("|");
}


var columnKeys = Object.keys(columnMappings);
var payloadKeyCombination = getKeyCombination(payload, columnKeys);
var stagingKeyCombinations = getStagingJurnal.map(function (stagingData) {
  return getKeyCombination(stagingData, columnKeys);
});
var isDuplicate = stagingKeyCombinations.indexOf(payloadKeyCombination) !== -1;

if (isDuplicate) {
  response = {
    "error": true,
    "message": "Data Jurnal Duplicate"
  };
};