var payload = {
  body: {
    additional_fields: [
      {
        id: 13562375,
        name: "schedule",
        value: null,
        value_name: null,
      },
      // {
      //   id: 13562375,
      //   name: "schedule",
      //   value: "2024-08-31T02:00:00",
      //   value_name: "2024-08-31T02:00:00",
      // },
      {
        id: 14168845,
        name: "ldms_wo_id",
        value: null,
        value_name: null,
      },
    ],
  },
};

var ticketData = {
  company_id: 28001,
  created_at: 1724644526393,
  created_by: 0,
  id: "54983053",
  pipeline_name: "Accident",
  stage_name: "On Progress",
  ticket_qontak_id: "54983053",
  updated_at: 1724644526393,
  updated_by: 0,
};

var schedule = null;
var ldmsWOID = null;

payload.body.additional_fields.forEach(function (item) {
  if (item.name == "schedule") {
    schedule = item.value;
  }

  if (item.name == "ldms_wo_id") {
    ldmsWOID = item.value;
  }
});

var payloadAPI = {
  unique_ticket_id: ticketData.ticket_qontak_id,
  schedule: schedule,
  ldms_wo_id: ldmsWOID,
};

console.log(payloadAPI);
