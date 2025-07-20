var getListJurnal = [
  {
    amount: 100000000,
    branch: {
      id: "J7p_-QRNg",
      name: "BR01",
    },
    company_code: {
      id: "P-58xQgHR",
      name: "CoC1",
    },
    company_id: 25236,
    converted_amount: 100000000,
    created_at: 1733418458110,
    created_by: 174795,
    currency_code: {
      id: "NThZBdZSR",
      name: "USD",
    },
    customer_account_number: "C0001",
    drcr: "CR",
    exchange_rate: 1,
    fk_id_adi_transaction: "vbU8QV7Ng",
    gl_account: {
      id: "BaTSZoiHR",
      name: "GLAC-01",
    },
    gl_sub_account: {
      id: "QaU1ZTmHg",
      name: "GLS1",
    },
    id: "36TjBhVNg",
    id_staging_import_adi_jurnal: "36TjBhVNg",
    line_description: "LD0001",
    line_number: "0",
    optional_2: {},
    optional_3: {},
    product: {
      name: "3O1",
    },
    rc_code: {
      name: "RC01",
    },
    reference_number: "Ref0001",
    staging_import_adi_transaction_id: "J_TCBh4Ng",
    updated_at: 1733418458110,
    updated_by: 174795,
  },
];

var jurnalADI = [];

if (getListJurnal.length != 0) {
    getListJurnal.forEach(function (item) {
        // jurnalADI.push(item);

        var payloadJob = {
          "reference_number": item.reference_number,
          "id_adi_jurnal": item.id_staging_import_adi_jurnal,
          "fk_id_adi_transaction": item.fk_id_adi_transaction,
          "gl_account": item.gl_account,
          "gl_sub_account": item.gl_sub_account,
          "optional_2": item.optional_2,
          "optional_2": item.optional_2,
          "optional_3": item.optional_3,
          "product": item.product,
          "converted_amount": item.converted_amount,
      };

        // console.log(item);
        console.log(payloadJob);

        // Next Task (Func yang call job)
        // var x = _hitFunction("func_create_mandatory_reviewer_adi", {
        //     "data": payloadJob
        // });
    });
};