var payload = {
  body: {
    additional_fields: [
      {
        id: 13473277,
        name: "location",
        value: "3800170",
        value_name: "South Jakarta",
      },
      {
        id: 13473278,
        name: "destination",
        value: "3800175",
        value_name: "Lexus Menteng",
      },
      {
        id: 14557520,
        name: 'call_center_telematics_url',
      }
    ],
    created_at: "2024-09-18T10:46:09.090+07:00",
    creator_id: 185776,
    creator_name: "Rizky Pambudi -",
    crm_lead_ids: [],
    crm_lead_name: [],
    crm_pipeline_id: 150179,
    crm_pipeline_name: "Lost Car (SVT)",
    crm_stage_name: "Open",
    currency: "IDR",
    external_company_id: 836993,
    id: 55952925,
    name: "Test Create URL",
    product_association_ids: [],
    product_association_name: [],
    product_association_price: [],
    product_association_quantity: [],
    product_association_total_price: [],
    size: "0.0",
    slug: "28f67442-0a6c-469b-a239-0cd442e94945",
    start_date: null,
    updated_at: "2024-09-18T10:46:09.454+07:00",
  },
};

var payloadAPIQontak = JSON.parse(JSON.stringify(payload.body));

var urlParameter = "https://callcenter.lexustelematics.com/ticket/ticket/BasicInfo?id=" + payload.body.id; // UAT
// var urlParameter = "https://lexus-telematics-cc.toyota.astra.co.id/ticket/ticket/BasicInfo?id=" + payload.body.id; // Prod

var telematicsField = null;
for (var i = 0; i < payloadAPIQontak.additional_fields.length; i++) {
  if (payloadAPIQontak.additional_fields[i].name === "call_center_telematics_url") {
    telematicsField = payloadAPIQontak.additional_fields[i];
    break;
  }
}

if (telematicsField) {
  telematicsField.value = urlParameter;
  telematicsField.value_name = urlParameter;
} else {
  payloadAPIQontak.additional_fields.push({
    id: 14557520,
    name: "call_center_telematics_url",
    value: urlParameter,
    value_name: urlParameter,
  });
}
