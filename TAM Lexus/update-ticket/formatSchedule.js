var payload = {
  body: {
    additional_fields: [
      {
        id: 13562375,
        name: "schedule",
        value: "2024-09-28T04:00:00",
        value_name: "2024-09-28T04:00:00",
      },
      {
        "id": 14620818,
        "name": "schedule_confirmed",
        "value": "03/10/2024",
        "value_name": "03/10/2024"
    },
      {
        "id": 14709237,
        "name": "jam_service",
        "value": "4357741",
        "value_name": "10:00"
    },
    {
      "id": 14589501,
      "name": "ldms_reservation_id",
      "value": "200-A-2410-000004",
      "value_name": "200-A-2410-000004"
  }
    ],
    channel_integration_room_id: null,
    closed_date: null,
    created_at: "2024-09-24T10:34:52.180+07:00",
    creator_id: 185776,
    creator_name: "Rizky Pambudi -",
    crm_company_id: null,
    crm_company_name: null,
    crm_lead_ids: [],
    crm_lead_name: [],
    crm_lost_reason_id: null,
    crm_lost_reason_name: null,
    crm_pipeline_id: 151845,
    crm_pipeline_name: "e-Care Periodic",
    crm_priority_id: null,
    crm_priority_name: null,
    crm_source_id: null,
    crm_source_name: null,
    crm_stage_id: 914396,
    crm_stage_name: "Scheduled",
    currency: "IDR",
    expired_date: null,
    external_company_id: 836993,
    id: 56153936,
    name: "Mick Schumacher",
    product_association_ids: [],
    product_association_name: [],
    product_association_price: [],
    product_association_quantity: [],
    product_association_total_price: [],
    size: null,
    slug: "ca05efbd-a2c9-4d02-9c04-ed3f7af76878",
    start_date: null,
    updated_at: "2024-09-30T14:06:24.273+07:00",
  },
};

function convertToISODate(schedule, jamService) {
  if (!isNaN(Date.parse(schedule))) {
    return schedule;
  }

  var parts = schedule.split("/");
  if (parts.length === 3) {
    var day = parts[0];
    var month = parts[1] - 1;
    var year = parts[2];
    var date = new Date(year, month, day);
    var timeParts = jamService.split(":");
    var hour = parseInt(timeParts[0], 10);
    var minute = parseInt(timeParts[1], 10);
    date.setHours(hour, minute, 0, 0); 

    var gmt7Time = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    var isoString = gmt7Time.toISOString().replace("T", " ").replace("Z", " +0700");

    return isoString;
  }
}


var statusMapping = {
  "1. Menteng": 1,
  "2. Mampang": 2,
  "3. Pluit": 3,
  "4. Other": 3,
};

var payloadAPI = {
  unique_ticket_id: payload.body.id
};

var jamService = null;
var schedule = "";

payload.body.additional_fields.forEach(function (item) {
  if (item.name === "jam_service" && item.value_name != null) {
      jamService = item.value_name;
  }
});

payload.body.additional_fields.forEach(function (item) {
  if (item.name == "schedule_confirmed" && item.value != null) {
      payloadAPI.schedule = convertToISODate(item.value, jamService);
      schedule = convertToISODate(item.value, jamService);
  };

  if (item.name == "ldms_wo_id" && item.value != null && item.value !== "") {
      payloadAPI.ldms_wo_id = item.value;
  };

  if (item.name == "ldms_reservation_id" && item.value != null && item.value !== "") {
      payloadAPI.ldms_reservation_id = item.value;
  };

  if (item.name == "dealer_code" && item.value != null) {
      if (statusMapping.hasOwnProperty(item.value_name)) {
          payloadAPI.dealer_code = statusMapping[item.value_name];
      }
  }
});


console.log(convertToISODate(schedule, jamService));

console.log(payloadAPI);
console.log(schedule);
console.log(jamService)