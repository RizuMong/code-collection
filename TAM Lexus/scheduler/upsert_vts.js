var req = {
  body: {
    additional_fields: [
      {
        id: 17913386,
        name: "vin",
        value: "1234567890ABCDEFG",
        value_name: "",
      },
      {
        id: 17913388,
        name: "cc_phone_number",
        value: "",
        value_name: "",
      },
      {
        id: 17913674,
        name: "timestamp",
        value: "2025-11-13 14:27:04 +0700",
        value_name: "",
      },
      {
        id: 17960493,
        name: "cc_additional_information",
        value: "Description of the product",
        value_name: "",
      },
      {
        id: 17913687,
        name: "gps",
        value: "-6.200000, 106.816666",
        value_name: "",
      },
      {
        id: 17946871,
        name: "phone_number",
        value: "081234567890",
        value_name: "",
      },
      {
        id: 17947072,
        name: "nama",
        value: "Rizki Haddi",
        value_name: "",
      },
      {
        id: 17955908,
        name: "lexus_reach_phone_number",
        value: "123",
        value_name: "",
      },
    ],
    eventType: "qontak.crm.deal.update",
    expired_date: null,
    external_company_id: 207873,
    crm_stage_name: "Open",
    id: 73741200,
    name: "Webhook Create",
  },
};

var fields = req.body.additional_fields;
var idQontak = req.body.id;
var stage_name = req.body.crm_stage_name;
var pipeline_name = req.body.crm_pipeline_name;

var customer_name = "";
var vin = "";
var phone_number = "";
var gps = "";
var product_description = "";
var timestamp = "";

fields.forEach(function (field) {
  if (field.name === "nama") customer_name = field.value;
  if (field.name === "vin") vin = field.value;

  if (!phone_number && field.name === "phone_number") phone_number = field.value;
  if (!phone_number && field.name === "cc_phone_number") phone_number = field.value;
  if (!phone_number && field.name === "lexus_reach_phone_number") phone_number = field.value;

  if (field.name === "gps") gps = field.value;

  if (!product_description && field.name === "cc_additional_information") product_description = field.value;
  if (!product_description && field.name === "description") product_description = field.value;

  if (field.name === "timestamp") timestamp = field.value;
});

var data = {
  customer_name: customer_name,
  ticket_qontak_id: idQontak,
  vin: {
    id: idQontak,
    name: vin,
  },
  phone_number: phone_number,
  stage_name: stage_name,
  pipeline_name: pipeline_name,
  gps: gps,
  product_description: product_description,
  timestamp: timestamp,
};

console.log(data);