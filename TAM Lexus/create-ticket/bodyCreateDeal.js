const payloadBody = {
  name: "Deal", // customer id - customer name
  currency: "IDR",
  size: null, // SKIP
  closed_date: null, // SKIP
  creator_id: 185776, // staging pake ini, beda kalau prod
  crm_source_id: null, // SKIP
  crm_source_name: null, // SKIP
  crm_lost_reason_id: null, // SKIP
  crm_lost_reason_name: null, // SKIP
  crm_pipeline_id: 168198, // ambil id pipeline
  crm_pipeline_name: "Sales Pipeline", // name name
  crm_stage_id: 1012394, // stage paling awal/ open
  crm_stage_name: "Open", // stage name
  start_date: null, // timestamp create
  expired_date: null, // SKIP
  crm_priority_id: null, // SKIP
  crm_priority_name: null, // SKIP
  crm_company_id: null, // SKIP
  crm_company_name: null, // SKIP
  crm_lead_ids: [], // SKIPs
  crm_lead_name: [], // SKIP
  product_association_ids: [], // SKIP
  product_association_name: [], // SKIP
  product_association_quantity: [], // SKIP
  product_association_price: [], // SKIP
  product_association_total_price: [], // SKIP
  additional_fields: [
    {
      id: 3800168, // id field
      name: "North Jakarta",
    },
    {
      id: 13562284,
      customer_public_id: "22-CP-0000134",
    },
    {
      id: 14171324, // id field
      name: "Rizki",
    },
    {
      id: 13560722, // id field
      vin: "--",
    },
    {
      id: 14181086, // id field
      plate_no: "--",
    },
    {
      id: 14181431, // id field
      description: "--",
    },
    {
      id: 14181086, // id field
      plate_no: "--",
    },
  ],
};

var payload = {
  city: "KOTA JAKARTA TIMUR",
  company_id: 28001,
  created_at: 1723636604791,
  created_by: 174803,
  customer_name: "Ade Sanjaya",
  customer_receipt_date: "",
  customer_single_id: "22-CP-0000134",
  email: "dsxw7usE7tM@iRnbj.tkN",
  engine_number: "ENG-001",
  last_mileage_date: "ENG-001",
  phone_number: "mk9N1WSkv6OC",
  pipeline: {
    id: "150181",
    name: "Accident",
  },
  plate_number: "B-1988-RLB",
  plate_number_sales: "",
  product_description: "LEXUS RX270 A/T",
  updated_at: 1723706896238,
  updated_by: 174803,
  vin: "VIN0192817394857",
  vin_sales: "",
};

var getPipeline = {
  active: true,
  company_id: 28001,
  created_at: 1723618115628,
  created_at_qontak: 1704954236489,
  created_by: 0,
  id: "150181",
  id_pipeline: "150181",
  id_pipeline_qontak: 150181,
  name: "Accident",
  organization_id: 1,
  slug: "accident",
  team_id: 147097,
  updated_at: 1723618115628,
  updated_at_qontak: 1704954236489,
  updated_by: 0,
};

var additionalFields = [
  {
    "id": 13473277,
    "name": "location",
    "value": "3800168",
    "value_name": "North Jakarta"
  },
  {
    id: 13562284, // id field [Done]
    name: "customer_public_id",
    value: payload.customer_single_id,
    value_name: payload.customer_single_id,
  },
  {
    id: 14171324, // id field [Done]
    name: "nama",
    value: payload.customer_name,
    value_name: payload.customer_name,
  },
  {
    id: 13560722, // id field [Done]
    name: "vin",
    value: payload.vin,
    value_name: payload.vin,
  },
  {
    id: 14181086, // id field [Done]
    name: "plate_no",
    value: payload.plate_number,
    value_name: payload.plate_number,
  },
  {
    id: 14181431, // id field [Done]
    name: "description",
    value: payload.product_description,
    value_name: payload.product_description,
  },
];

var payloadAPI = {
  name: payload.customer_single_id + " - " + payload.customer_name, // customer id - customer name
  currency: "IDR",
  size: null,
  closed_date: null,
  creator_id: 185776, // Akun Staging
  crm_source_id: null,
  crm_source_name: null,
  crm_lost_reason_id: null,
  crm_lost_reason_name: null,
  crm_pipeline_id: 168198, // ambil id pipeline
  crm_pipeline_name: getPipeline.name, // name name
  crm_stage_id: 1012394, // stage paling awal open
  crm_stage_name: "Open", // stage name
  start_date: Date.now(),
  expired_date: null,
  crm_priority_id: null,
  crm_priority_name: null,
  crm_company_id: null,
  crm_company_name: null,
  crm_lead_ids: [],
  crm_lead_name: [],
  product_association_ids: [],
  product_association_name: [],
  product_association_quantity: [],
  product_association_price: [],
  product_association_total_price: [],
  additional_fields: additionalFields,
};

console.log(payloadAPI);