// var req = {
//   body: {
//     data: {
//       amount: 100000000,
//       branch: {
//         id: "J7p_-QRNg",
//         name: "BR01",
//       },
//       company_code: {
//         id: "P-58xQgHR",
//         name: "CoC1",
//       },
//       converted_amount: 100000000,
//       currency_code: {
//         id: "IDR",
//         name: "IDR",
//       },
//       customer_account_number: "C3323",
//       drcr: "DR",
//       exchange_rate: 1,
//       fk_id_adi_transaction: "vbU8QV7Ng",
//       gl_account: {
//         id: "BaTSZoiHR",
//         name: "GLAC-01",
//       },
//       gl_sub_account: {
//         id: "QaU1ZTmHg",
//         name: "GLS1",
//       },
//       line_description: "LD01082",
//       nomor_tiket: "T10291",
//       optional_2: {
//         id: "lOJ8WTiNR",
//         name: "2Op1",
//       },
//       optional_3: {
//         id: "JLgSAXgHR",
//         name: "3O1",
//       },
//       product: {
//         id: "j6hLZomNR",
//         name: "PRD01",
//       },
//       rc_code: {
//         id: "K3dBYQgHg",
//         name: "RC01",
//       },
//       reference_number: "Re@f1000",
//     },
//   },
// };

var payload ={
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

function validateInput(value) {
  var allowedCharacters = /^[a-zA-Z0-9-_\/#.]*$/;

  if (!allowedCharacters.test(value)) {
    return {
      isValid: false,
      message: "Input tidak valid: simbol yang diizinkan -_ / # .",
    };
  }

  return { isValid: true, message: "" };
}

function formatReference(text) {
  return text.replace(/_/g, " ").replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
};

function _log(message) {
  console.log(message);
}

var data = payload.data;

for (var key in data) {
  if (typeof data[key] == "string" && data[key] != "id_import_adi_transaction" && data[key] != "import_id") {
    if (!validateInput(data[key]).isValid) {
      _log("Validation failed : Invalid data " + formatReference(key) + ". Contains forbidden symbols")

      break;
    } else {
      console.log("success");
    }
  }
}