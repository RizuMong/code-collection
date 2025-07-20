var mappingRC = [
  {
    branch: {
      id: "gOalaQRNR",
      name: "BR02",
    },
    // company_code: {
    //   id: "P-58xQgHR",
    //   name: "CoC1",
    // },
    company_id: 25236,
    created_at: 1732086266468,
    created_by: 166467,
    id: "M-Shq4nHg",
    id_mapping_activity: "GJQ3_V7NR",
    id_mapping_rc: "M-Shq4nHg",
    rc_code: {
      id: "XdLBLQRHR",
      name: "RC02",
    },
    seq_id: 0,
    updated_at: 1732086266693,
    updated_by: 166467,
  },
  {
    branch: {
      id: "gOalaQRNR",
      name: "BR02",
    },
    // company_code: {
    //   id: "P-58xQgHR",
    //   name: "CoC1s",
    // },
    company_id: 25236,
    created_at: 1732086266468,
    created_by: 166467,
    id: "M-Shq4nHg",
    id_mapping_activity: "GJQ3_V7NR",
    id_mapping_rc: "M-Shq4nHg",
    rc_code: {
      id: "XdLBLQRHR",
      name: "RC02",
    },
    seq_id: 0,
    updated_at: 1732086266693,
    updated_by: 166467,
  },
];

var payload = {
  data: {
    activity: "Activity Workflow 1",
    amount: 0,
    branch: "BR02",
    company_code: "CoC1s",
    company_id: 25236,
    converted: 3000000,
    created_at: 1732526635498,
    created_by: 167029,
    currency_code: "USD",
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
    rc_code: "RC02",
    reference_number: "20230105PC40567",
    updated_at: 1732526635498,
    updated_by: 167029,
  },
  id_staging_transaction: "1245",
};

// company_code, branch, rc_code

var isMatch = false;

if (mappingRC.length !== 0 && payload.data.company_code && payload.data.branch && payload.data.rc_code) {
  for (var i = 0; i < mappingRC.length; i++) {
    var mapping = mappingRC[i];
    if (
      mapping.company_code && mapping.company_code.name &&
      mapping.branch && mapping.branch.name &&
      mapping.rc_code && mapping.rc_code.name &&
      payload.data.company_code === mapping.company_code.name &&
      payload.data.branch === mapping.branch.name &&
      payload.data.rc_code === mapping.rc_code.name
    ) {
      isMatch = true;
      break;
    }
  }
} 

console.log(isMatch);
