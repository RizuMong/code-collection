var mappingSL = [
  {
    company_id: 25236,
    created_at: 1733392742538,
    created_by: 174794,
    gl_account: {
      id: "cV6nqCWNg",
      name: "GL001",
    },
    gl_sub_account: {
      id: "tWKH3jWHR",
      name: "GLS2",
    },
    id: "OGycrt4NR",
    id_mapping_activity: "eUHO_p4Hg",
    id_mapping_sl: "OGycrt4NR",
    optional_2: {
      id: "lOJ8WTiNR",
      name: "2Op1",
    },
    optional_3: {
      id: "qFOhEt4Ng",
      name: "001",
    },
    product: {
      id: "j6hLZomNR",
      name: "PRD01",
    },
    updated_at: 1733392799464,
    updated_by: 174794,
  },
];

var payload = {
  data: {
    activity: "Activity Workflow 1",
    amount: 0,
    branch: "47077",
    company_code: "1611",
    company_id: 25236,
    converted: 3000000,
    created_at: 1732526635498,
    created_by: 167029,
    currency_code: "USD",
    customer_account_number: "",
    description: "Test SMART ADI",
    dr_cr_option: "DR",
    exchange_rate: 1,
    general_ledger_account: "GL001",
    general_ledger_sub_account: "GLS2",
    id: "DF25if7NR",
    id_import_adi_transaction: "DF25if7NR",
    import_id: "Od2ciB7Ng",
    line_description: "Test ADI jurnal ADI dari Smart",
    line_number: "5",
    nomor_tiket: "123",
    optional_2: "2Op1",
    optional_3: "001",
    product: "PRD01",
    rc_code: "3004",
    reference_number: "20230105PC40567",
    updated_at: 1732526635498,
    updated_by: 167029,
  },
  id_staging_transaction: "1245",
};

function _log(message) {
  console.log(message);
}

var isMatch = false;
if (
  mappingSL.length !== 0 &&
  payload.data.general_ledger_account &&
  payload.data.general_ledger_sub_account &&
  payload.data.optional_2 &&
  payload.data.optional_3 &&
  payload.data.product
) {
  for (var i = 0; i < mappingSL.length; i++) {
    var mapping = mappingSL[i];
    if (
      mapping.gl_account &&
      mapping.gl_account.name &&
      mapping.gl_sub_account &&
      mapping.gl_sub_account.name &&
      mapping.product &&
      mapping.product.name &&
      mapping.optional_2 &&
      mapping.optional_2.name &&
      mapping.optional_3 &&
      mapping.optional_3.name &&
      payload.data.general_ledger_account === mapping.gl_account.name &&
      payload.data.general_ledger_sub_account === mapping.gl_sub_account.name &&
      payload.data.optional_2 === mapping.optional_2.name &&
      payload.data.optional_3 === mapping.optional_3.name &&
      payload.data.product === mapping.product.name
    ) {
      isMatch = true;
      break;
    }
  }
}

_log(isMatch);

// if (!isMatch) {
//   var x = _hitFunction("func_update_status_import_adi", {
//       "code": "issue",
//       "id": payload.data.id_import_adi_transaction,
//       "message": "Validation failed : Set SL data does not match any Mapping SL."
//   });

//   var z = _hitFunction("func_update_status_import_staging_adi", {
//       "is_valid": false,
//       "id": payload.id_staging_transaction,
//       "reference_invalid_jurnal": payload.data.line_number
//   });

//   _log("Validation failed : Set RC data does not match any Mapping RC.");
//   _stopAutomation();
// };
