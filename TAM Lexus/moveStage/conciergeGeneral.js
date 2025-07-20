var req = {
  body: {
    additional_fields: [
      {
        id: 13473277,
        name: "location",
        value: "3800171",
        value_name: "East Jakarta",
      },
      {
        id: 13562284,
        name: "customer_public_id",
        value: "22-CP-0000134",
        value_name: "22-CP-0000134",
      },
      {
        id: 14171324,
        name: "nama",
        value: "Ade Sanjaya",
        value_name: "Ade Sanjaya",
      },
      {
        id: 13806663,
        name: "temporary_customer_id",
        value: null,
        value_name: null,
      },
      {
        id: 13560722,
        name: "vin",
        value: "1234123456",
        value_name: "1234123456",
      },
      {
        id: 14181086,
        name: "plate_no",
        value: "B-908-RS",
        value_name: "B-908-RS",
      },
      {
        id: 14436972,
        name: "status_ticket_qontak",
        value: "4177446",
        value_name: "Open",
      },
    ],
    channel_integration_room_id: null,
    closed_date: null,
    created_at: "2024-08-19T13:53:32.625+07:00",
    creator_id: 185776,
    creator_name: "Rizky Pambudi -",
    crm_company_id: null,
    crm_company_name: null,
    crm_lead_ids: [],
    crm_lead_name: [],
    crm_lost_reason_id: null,
    crm_lost_reason_name: null,
    crm_pipeline_id: 150181,
    crm_pipeline_name: "Accident",
    crm_priority_id: null,
    crm_priority_name: null,
    crm_source_id: null,
    crm_source_name: null,
    crm_stage_id: 904419,
    crm_stage_name: "Move to e-Care Preventive",
    currency: "IDR",
    expired_date: null,
    external_company_id: 836993,
    id: 54884283,
    name: "22-CP-0000134 - Ade Sanjaya",
    product_association_ids: [],
    product_association_name: [],
    product_association_price: [],
    product_association_quantity: [],
    product_association_total_price: [],
    size: "0.0",
    slug: "4ba1692c-4400-4168-bf65-cd8c5ccdf693",
    start_date: "2024-08-20T00:00:00.000+07:00",
    updated_at: "2024-08-27T13:48:07.160+07:00",
  },
};

var idQontak = req.body.id;

// Case Accident, Device Trouble, SVT &  Move to LFast Technical
var payloadAPIQontak = JSON.parse(JSON.stringify(req.body));

if (payloadAPIQontak.crm_stage_name === "Move to Accident") {
  payloadAPIQontak.crm_pipeline_name = "Accident";
  payloadAPIQontak.crm_pipeline_id = 150181;
  payloadAPIQontak.crm_stage_id = 904417;
  payloadAPIQontak.crm_stage_name = "Open";
}

if (payloadAPIQontak.crm_stage_name === "Move to Device Trouble") {
  payloadAPIQontak.crm_pipeline_name = "Device Trouble";
  payloadAPIQontak.crm_pipeline_id = 150145;
  payloadAPIQontak.crm_stage_id = 904207;
  payloadAPIQontak.crm_stage_name = "Open";
}

if (payloadAPIQontak.crm_stage_name === "Move to SVT") {
  payloadAPIQontak.crm_pipeline_name = "Lost Car (SVT)";
  payloadAPIQontak.crm_pipeline_id = 150179;
  payloadAPIQontak.crm_stage_id = 904407;
  payloadAPIQontak.crm_stage_name = "Open";
}

if (payloadAPIQontak.crm_stage_name === "Move to L-Fast Technical") {
  payloadAPIQontak.crm_pipeline_name = "Concierge - LFast Technical";
  payloadAPIQontak.crm_pipeline_id = 173395;
  payloadAPIQontak.crm_stage_id = 1043508;
  payloadAPIQontak.crm_stage_name = "Confirmed";
}

if (
  req.body.crm_stage_name == "Move to Accident" ||
  req.body.crm_stage_name == "Move to Device Trouble" ||
  req.body.crm_stage_name == "Move to SVT" ||
  req.body.crm_stage_name == "Move to L-Fast Technical"
) {
  _log("Case Move/Update Stage");
  var hitAPILexus = _hitFunction("func_hit_api_qontak", {
    method: "PUT",
    endpoint: "/deals/" + idQontak,
    payload: payloadAPIQontak,
  });
}
