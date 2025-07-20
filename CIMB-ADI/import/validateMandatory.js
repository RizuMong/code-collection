var payload = {
    activity: "Koreksi Bunga manual",
    amount: 4800000,
    branch: "47077",
    company_code: "1611",
    company_id: 25236,
    converted: 4800000,
    created_at: 1733287376460,
    created_by: 174795,
    currency_code: "IDR",
    customer_account_number: "",
    description: "Test SMART ADI",
    dr_cr_option: "CR",
    exchange_rate: 0,
    general_ledger_account: "2722452",
    general_ledger_sub_account: "0000",
    id: "9MT_ydVNg",
    id_import_adi_transaction: "9MT_ydVNg",
    import_id: "RGo_sd4HR",
    line_description: "Test ADI jurnal ADI dari Smart",
    line_number: "2",
    nomor_tiket: "123",
    optional_2: "0000",
    optional_3: "000",
    product: "",
    rc_code: "3005",
    reference_number: "20230105PC40567",
    updated_at: 1733287376460,
    updated_by: 174795,
};

function _log(message) {
  console.log(message);
}

function checkDataNotEmpty(data, columnName) {
  return (
    data[columnName] !== undefined &&
    data[columnName] !== null &&
    data[columnName] !== ""
  );
};

var columnMappings = {
  activity: "Email Address",
  description: "Description",
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

var message = "";
var passMandatory = true;
var mandatoryFields = Object.keys(columnMappings);
var missingFields = [];

mandatoryFields.forEach(function (field) {
  if (!checkDataNotEmpty(payload, field)) {
    missingFields.push(columnMappings[field]);
  }
});

if (missingFields.length === 0) {
  _log("Semua data valid.");
} else {
  passMandatory = false;
  message = "Error: " + missingFields.join(", ") + " column(s) must be filled";
};

_log(passMandatory);
_log(message);