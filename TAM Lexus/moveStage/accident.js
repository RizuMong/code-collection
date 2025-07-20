var payload = {
  body: {
    additional_fields: [
      {
        id: 13561419,
        name: "variant",
        value: null,
        value_name: null,
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
        value: "X3JHT14561271FR02",
        value_name: "X3JHT14561271FR02",
      },
      {
        id: 13562529,
        name: "ldms_customer_id",
        value: "23-CP-0000048",
        value_name: "23-CP-0000048",
      },
      {
        id: 13560634,
        name: "phone_number",
        value: "k5iFW0IKFzre",
        value_name: "k5iFW0IKFzre",
      },
      {
        id: 13562462,
        name: "concierge_key",
        value: "CRG/20240828/0903",
        value_name: "CRG/20240828/0903",
      },
      {
        id: 13562463,
        name: "message",
        value: "Telematics Emergency - Accident",
        value_name: "Telematics Emergency - Accident",
      },
      {
        id: 13562464,
        name: "l_reach_location",
        value:
          "VOzJ WCRKxhepAUIl 1BOo oeO2HXdq sJ  9AkCrIBm 29mZ qKQ2v NrvB8 SiMAxc",
        value_name:
          "VOzJ WCRKxhepAUIl 1BOo oeO2HXdq sJ  9AkCrIBm 29mZ qKQ2v NrvB8 SiMAxc",
      },
      {
        id: 13562479,
        name: "coordinate",
        value: "[37.4219983,-122.084]",
        value_name: "[37.4219983,-122.084]",
      },
      {
        id: 13562723,
        name: "url_l_reach",
        value: "https://cms.lexus.neo-fusion.com/ServiceConciergeRequest/903",
        value_name:
          "https://cms.lexus.neo-fusion.com/ServiceConciergeRequest/903",
      },
    ],
    channel_integration_room_id: null,
    closed_date: null,
    created_at: "2024-08-28T09:00:41.890+07:00",
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
    crm_stage_id: 904418,
    crm_stage_name: "On Progress",
    currency: "IDR",
    expired_date: null,
    external_company_id: 836993,
    id: 55177748,
    name: "Mick Schumacher",
    product_association_ids: [],
    product_association_name: [],
    product_association_price: [],
    product_association_quantity: [],
    product_association_total_price: [],
    size: "0.0",
    slug: "971c38ef-f539-492d-b66c-ad8ad26d23c2",
    start_date: null,
    updated_at: "2024-08-28T14:33:11.091+07:00",
  },
};

var getDataExist = {
  company_id: 28001,
  created_at: 1724740525283,
  created_by: 0,
  id: "54884283",
  pipeline_name: "e-Care Preventive",
  stage_name: "Open",
  ticket_qontak_id: "54884283",
  updated_at: 1724743990570,
  updated_by: 0,
};

var payloadAPI = {};

var typeVariant = null;
var dealerCode = null;
var ldmsVehicleID = null;
var description = null

payload.body.additional_fields.forEach(function (item) {
  if (item.name == "variant" && item.value !== null) {
    var type = item.value;

    if (type.toLowerCase() == "general") {
      typeVariant = 1;
    }
    if (type.toLowerCase() == "lfast non-technical") {
      typeVariant = 2;
    }
    if (type.toLowerCase() == "lfast technical") {
      typeVariant = 3;
    }
  }

  if (item.name == "dealer_code" && item.value != null) {
    var dealerName = item.value;

    if (dealerName.toLowerCase() == "menteng") {
      dealerCode = 1;
    }
    if (dealerName.toLowerCase() == "mampang") {
      dealerCode = 2;
    }
    if (dealerName.toLowerCase() == "pluit") {
      dealerCode = 3;
    }
    if (dealerName.toLowerCase() == "other") {
      dealerCode = 4;
    }
  }
});

// Case Confirmed
if (payload.body.crm_stage_name == "On Progress") {
  var payloadAPI = {
    "unique_ticket_id": payload.body.id.toString(),
    "status": "confirmed",
    "type": typeVariant,
    "ldms_vehicle_id": ldmsVehicleID,
    "description": description,
    "pipeline_id": payload.body.crm_pipeline_id.toString(),
    "pipeline_name": payload.body.crm_pipeline_name,
    "stage_id": payload.body.crm_stage_id.toString(),
    "stage_name": payload.body.crm_stage_name,
    "dealer_code": dealerCode
  };

  var hitAPILexus = _hitFunction("func_hit_api_lexus", {
    "endpoint": "/qontak/concierge/status",
    "payload": payloadAPI
  });
};

// Case Completed
if (payload.body.crm_stage_name == "Closed") {
  var payloadAPI = {
    "unique_ticket_id": payload.body.id.toString(),
    "status": "completed",
  };

  if (typeVariant == 3) {
    console.log("Only status = confirmed, with type = 'General' / 'LFast non technical' can be updated to completed");
  };

  var hitAPILexus = _hitFunction("func_hit_api_lexus", {
    "endpoint": "/qontak/concierge/status",
    "payload": payloadAPI
  });
};


console.log(payloadAPI);