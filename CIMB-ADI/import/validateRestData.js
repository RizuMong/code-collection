var payload = {
  data: {
    activity: "Activity Workflow 1",
    amount: 3000000,
    branch: "47077",
    company_code: "1611",
    company_id: 25236,
    converted: 3000000,
    created_at: 1732526635498,
    created_by: 167029,
    currency_code: "IDR",
    customer_account_number: "",
    description: "Test SMART ADI",
    dr_cr_option: "DR",
    exchange_rate: 1,
    general_ledger_account: "2722855",
    general_ledger_sub_account: "0701",
    id: "DF25if7NR",
    id_import_adi_transaction: "DF25if7NR",
    import_id: "Od2ciB7Ng",
    line_description: "Test ADI jurnal ADI dari Smart",
    line_number: "5",
    nomor_tiket: "123",
    optional_2: "0000",
    optional_3: "000",
    product: "00000",
    rc_code: "3004",
    reference_number: "20230105PC40567",
    updated_at: 1732526635498,
    updated_by: 167029,
  },
  id_staging_transaction: "1245",
};

var dataJurnal = {
  amount: payload.amount || 0,
  branch: {},
  company_code: {},
  converted_amount: 0,
  currency_code: {},
  customer_account_number: "",
  description_cc: "",
  drcr: "",
  exchange_rate: 0,
  fk_id_adi_transaction: "", // tambahkan di ujung process
  gl_account: {},
  gl_sub_account: {},
  line_description: "",
  line_number: 0,
  optional_2: {},
  optional_3: {},
  product: {},
  rc_code: {},
  reference_number: "",
};

function _log(message) {
  console.log(message);
}

var isValidData = true;

if (payload.data) {
  if (payload.data.dr_cr_option !== "DR" && payload.data.dr_cr_option !== "CR") {
    isValidData = false;
    // var x = _hitFunction("func_update_status_import_adi", {
    //     "code": "issue",
    //     "id": payload.data.id_import_adi_transaction,
    //     "message": "Validation failed : Invalid data " + payload.data.general_ledger_account
    // });

    _log("Validation failed : Invalid data DR/CR.");
  } else {
    dataJurnal.drcr = payload.data.dr_cr_option;
  }
};

if (payload.data) {
  if (payload.data.amount > 10000000000000) {
    isValidData = false;

    _log("Validation failed : data amount passing the maximum value (10.000.000.000.000).");
  }
};

if (payload.data) {
  if (payload.data.amount > 10000000000000) {
      isValidData = false;
      // var x = _hitFunction("func_update_status_import_adi", {
      //     "code": "issue",
      //     "id": payload.data.id_import_adi_transaction,
      //     "message": "Validation failed : data amount passing the maximum value (10.000.000.000.000)."
      // });

      _log("Validation failed : data amount passing the maximum value (10.000.000.000.000).");
  } else {
      dataJurnal.amount = payload.data.amount;
  }
};

if (payload.data) {
  if (payload.data.currency_code != "IDR" && payload.data.exchange_rate != 1) {
      isValidData = false;
      // var x = _hitFunction("func_update_status_import_adi", {
      //     "code": "issue",
      //     "id": payload.data.id_import_adi_transaction,
      //     "message": "Validation failed : data exchange rate for foreign currency (valas) must be 1."
      // });

      _log("Validation failed : data exchange rate for foreign currency (valas) must be 1.");
  } else {
      dataJurnal.exchange_rate = payload.data.exchange_rate;
  }
};

if (payload.data) {
  if (payload.data.amount * payload.data.exchange_rate !== payload.data.converted) {
      isValidData = false;
      // var x = _hitFunction("func_update_status_import_adi", {
      //     "code": "issue",
      //     "id": payload.data.id_import_adi_transaction,
      //     "message": "Validation failed : data exchange rate for foreign currency (valas) must be 1."
      // });

      _log("Validation failed : data converted does not match with the expected calculation (amount X exchange rate).");
  } else {
      dataJurnal.converted_amount = payload.data.converted;
  }
};


_log(isValidData);
_log(dataJurnal);