var req = {
  body: {
    additional_fields: [
      {
        id: 13560722,
        name: "vin",
        value: "JHT14561271FR",
        value_name: "JHT14561271FR",
      },
      {
        id: 13562529,
        name: "ldms_customer_id",
        value: "19-CP-0000054",
        value_name: "19-CP-0000054",
      },
      {
        id: 14589501,
        name: "ldms_reservation_id",
        value: "200-A-2409-000001",
        value_name: "200-A-2409-000001",
      },
      {
        id: 14171237,
        name: "service_type",
        value: "4070778",
        value_name: "Regular Check (RC)",
      },
      {
        id: 13560634,
        name: "phone_number",
        value: "EnXghkAZCR",
        value_name: "EnXghkAZCR",
      },
      {
        id: 13562375,
        name: "schedule",
        value: "2024-09-16T04:00:00",
        value_name: "2024-09-16T04:00:00",
      },
      {
        id: 14620818,
        name: "schedule_confirmed",
        value: "27/09/2024",
        value_name: "27/09/2024",
      },
      {
        id: 13616061,
        name: "dealer_name",
        value: "LEXUS MAMPANG GALLERY",
        value_name: "LEXUS MAMPANG GALLERY",
      },
      {
        id: 14709237,
        name: "jam_service",
        value: "11:00",
        value_name: "11:00",
      },
    ],
    created_at: "2024-09-13T08:42:05.841+07:00",
    creator_id: 185776,
    creator_name: "Rizky Pambudi -",
    crm_pipeline_id: 151845,
    crm_pipeline_name: "Sales",
    crm_stage_id: 914396,
    crm_stage_name: "On Progress",
    currency: "IDR",
    external_company_id: 836993,
    id: 55801139,
    name: "Mick Schumacher",
    size: "0.0",
    slug: "17974566-8ebf-42ec-9e06-b6443d0918fe",
    updated_at: "2024-09-25T09:03:08.981+07:00",
  },
};

var listMappingPipeline = {
  "Sales": true,
  "After Sales": true,
  "Complaint": true,
  "e-Care Periodic": true,
  "Accident": true,
  "Device Trouble": true,
  "Lost Car (SVT)": true,
  "LMCS": true,
};

if (listMappingPipeline[req.body.crm_pipeline_name] &&
  (req.body.crm_stage_name == "On Progress" || req.body.crm_stage_name == "Closed")) {
  var callEmailBroadcastCustomer = _hitFunction("func_call_job_email_broadcast_customer", req);
};