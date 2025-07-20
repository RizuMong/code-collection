var req = {
  body: {
    additional_fields: [
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
        "id": 14646435,
        "name": "status",
        "value": "4253699",
        "value_name": "Closed"
    }
    ],
    channel_integration_room_id: null,
    closed_date: null,
    created_at: "2024-09-03T09:17:28.546+07:00",
    creator_id: 185776,
    creator_name: "Rizky Pambudi -",
    crm_company_id: null,
    crm_company_name: null,
    crm_lead_ids: [],
    crm_lead_name: [],
    crm_lost_reason_id: null,
    crm_lost_reason_name: null,
    crm_pipeline_id: 151841,
    crm_pipeline_name: "Device Trouble",
    crm_priority_id: null,
    crm_priority_name: null,
    crm_source_id: null,
    crm_source_name: null,
    crm_stage_id: 1017060,
    crm_stage_name: "Closed",
    currency: "IDR",
    expired_date: null,
    external_company_id: 836993,
    id: 55383694,
    name: "22-CP-0000134 - Ade Sanjaya (Test)",
    product_association_ids: [],
    product_association_name: [],
    product_association_price: [],
    product_association_quantity: [],
    product_association_total_price: [],
    size: "0.0",
    slug: "c55d268c-18ca-46a1-89d8-cdb824999d7d",
    start_date: "2024-09-03T09:17:28.000+07:00",
    updated_at: "2024-09-04T17:55:36.759+07:00",
  },
};

var final_payload = {};

var statusMapping = {
  "Open": 1,
  "On Progress": 2,
  "Hold": 3,
  "Closed": 4,
  "New Ticket": 5,
  "Confirmed": 6,
  "Completed": 7,
  "Scheduled": 8,
  "Cancelled": 9
};

var stageName = req.body.crm_stage_name;

function getStatusFromAdditionalFields(fields) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].name === "status") {
      return fields[i].value_name;
    }
  }
  return null;
}

if (stageName === "Closed") {
  var statusFromFields = getStatusFromAdditionalFields(req.body.additional_fields);
  if (statusFromFields && statusMapping.hasOwnProperty(statusFromFields)) {
    final_payload["StatusTicketQontak"] = statusMapping[statusFromFields];
  }
} else if (statusMapping.hasOwnProperty(stageName)) {
  final_payload["StatusTicketQontak"] = statusMapping[stageName];
} else {
  console.log("The stage '" + stageName + "' tidak ada dalam mapping");
  return;
}


console.log({ final_payload: final_payload });