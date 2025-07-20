var payload = {
  awb_date_end: 1715274000000,
  awb_date_start: 1714496400000,
  awb_number: "3543232355",
  branch_id: {
    id: "CGK",
    name: "CGK",
  },
  branch_name: {
    id: "JNE JAKARTA",
    name: "JNE JAKARTA",
  },
  cod_flag: "Yes",
  company_id: 230,
  connote_batching_status: {
    id: "Draft",
    name: "Draft",
  },
  connote_bms_status: [
    {
      id: "N198EK6nR",
      name: "Open",
    },
    {
      id: "AD4QPKenR",
      name: "Received & Sorted",
    },
    {
      id: "ZHTQPK6nR",
      name: "Ready to be Invoiced",
    },
  ],
  connote_cancel: "Yes",
  created_at: 1715326762250,
  created_by: 1922,
  customer_id: {
    id: "80958213",
    name: "80958213 - BI-ENSI FESYENINDO CV / PRODUCT DEVELOPMENT",
  },
  customer_status: "Active",
  customer_type: {
    id: "8xsM8KbVg",
    name: "CORPORATE",
  },
  customer_type_name: {
    id: "RRId8Fx4g",
    name: "SUB AGEN (NON COST TO COST)",
  },
  destination_branch: {
    id: "T3BHf3fVR",
    name: "TRK",
  },
  destination_urban_village_name: "SURADE",
  econnote_flag: "Y",
  ids: "kH8Oo-YSR",
  insurance_flag: "Yes",
  invoice_number: [
    {
      id: "JOG/STD/03/2405001571",
      name: "JOG/STD/03/2405001571",
    },
  ],
  invoice_number_cod: [
    {
      id: "JOG/CFNCC/03/2311000003",
      name: "JOG/CFNCC/03/2311000003",
    },
  ],
  length_batched: 0,
  local_parent_id: "CGK0000122213444",
  management_fee_id: "MANAGEMENT FEE ID",
  management_fee_name: "MANAGEMENT FEE NAME",
  na_principal: {
    id: "pDDNfqB4R",
    name: "AMI",
  },
  national_parent_id: "JNE1000003222",
  origin_branch_id: {
    id: "1MYHf3BVR",
    name: "TSM",
  },
  origin_urban_village_name: "TERNATE",
  outbound_manifest_status: "NO",
  payment_trf_date_ccnc_end: null,
  payment_trf_date_ccnc_start: null,
  pod_success_status: "Y",
  pricing_detail_combination_id: "PRICING COMBINATIO",
  proforma_invoice_number: [
    {
      id: "CGK/PROTR/03/2401000009",
      name: "CGK/PROTR/03/2401000009",
    },
  ],
  progress_status: "0 %",
  service_code: [
    {
      id: "pd-wEx9Vg",
      name: "YES23",
    },
    {
      id: "7Je2DtP4g",
      name: "YES19",
    },
    {
      id: "raehDtP4g",
      name: "YES15",
    },
  ],
  status_report: "Processing",
  total_connote_process: "Counting",
  total_paid_amount: 0,
  updated_at: 1715326762250,
  updated_by: 1922,
};

// Parameter Ketika Create
var periodConnoteFrom = payload.awb_date_start || payload.payment_trf_date_ccnc_start;
var periodConnoteTo =  new Date(payload.awb_date_end).setHours(23, 59, 59, 999) || new Date(payload.payment_trf_date_ccnc_end).setHours(23, 59, 59, 999);

if (periodConnoteFrom == null) {
  // Tanggal 01 January 2020
  periodConnoteFrom = 1577836800000;
};

if (periodConnoteTo == null) {
  periodConnoteTo = new Date().setHours(23, 59, 59, 999);
};

console.log(periodConnoteFrom);
console.log(periodConnoteTo);