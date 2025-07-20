var payload = {
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
  created_at: 1733383935964,
  created_by: 157190,
  currency_code: {
    id: "IDR",
    name: "IDR",
  },
  customer_account_number: "C3323",
  drcr: "DR",
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
  id_adi_jurnal: "9qq6apVNg",
  line_description: "LD01082",
  nomor_tiket: "T10291",
  optional_2: {
    id: "lOJ8WTiNR",
    name: "2Op1",
  },
  optional_3: {
    id: "JLgSAXgHR",
    name: "3O1",
  },
  product: {
    id: "j6hLZomNR",
    name: "PRD01",
  },
  rc_code: {
    id: "K3dBYQgHg",
    name: "RC01",
  },
  reference_number: "Ref1000",
  updated_at: 1733383935964,
  updated_by: 157190,
};

var response = {
  "approver_by": "by_advance_organigram",
  "organigram_ids": listOrganigram,
  "flow_type": flowType,
  "minimum_action": minimumAction,
  "flow_name": flowName
}

var mr_ahead = [
  {
    flow_type: "",
    organigram_id: "",
    minimum_action: "",
    flow_name: ""
  }
]

// [
//   "BC FSAC",
//   "Flow Direct Supervisor",

//   "Flow Direct Supervisor",
//   "BC FSAC"
// ]


// payload && payload.gl_account ? payload.gl_account.id : "--";
// payload && payload.gl_sub_account ? payload.gl_sub_account.id : "--";
// payload && payload.optional_2 ? payload.optional_2.id : "--";
// payload && payload.optional_3 ? payload.optional_3.id : "--";
// payload && payload.product ? payload.product.id : "--";

// getMappingMandatoryReviewer.fk_id_mapping_mandatory_reviewer


// payload.gl_account.id
// payload.gl_sub_account.id
// payload.optional_2.id
// payload.optional_3.id
// payload.product.id