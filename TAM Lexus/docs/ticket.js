function getStartDate(param_date) {
  var date = new Date(param_date);
  var timeZoneOffset = "+07:00";

  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);

  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  var seconds = ("0" + date.getSeconds()).slice(-2);

  var startDate =
    year +
    "-" +
    month +
    "-" +
    day +
    "T" +
    hours +
    ":" +
    minutes +
    ":" +
    seconds +
    ".000" +
    timeZoneOffset;
  return startDate;
}

var token = "Bearer " + getToken.token;
var baseUrl = "https://app.qontak.com/api/v3.1";
var urlCreateDeal = baseUrl + "/deals";

var additionalFields = [
  {
    id: 13473277, // ID Field name: "location",
    value: getDetailCity.id_field,
    value_name: getDetailCity.name,
  },
  {
    id: 13562284,
    name: "customer_public_id",
    value: payload.customer_single_id,
    value_name: payload.customer_single_id,
  },
  {
    id: 14171324,
    name: "nama",
    value: payload.customer_name,
    value_name: payload.customer_name,
  },
  {
    id: 13560722,
    name: "vin",
    value: payload.vin.name,
    value_name: payload.vin.name,
  },
  {
    id: 14181086,
    name: "plate_no",
    value: payload.plate_number.name,
    value_name: payload.plate_number.name,
  },
  {
    id: 14181431,
    name: "description",
    value: payload.product_description,
    value_name: payload.product_description,
  },
  // Default True
  {
    id: 13562194,
    name: "interface_ticket_qontak",
    value: "3837580",
    value_name: "True",
  },
  // Phone Number/Email
  {
    id: 13560634,
    name: "phone_number",
    value: payload.phone_number || "",
    value_name: payload.phone_number || "",
  },
];

var payloadAPI = {
  name: payload.customer_single_id + " - " + payload.customer_name, // Customer ID - Customer Name currency: "IDR",
  size: null,
  closed_date: null,
  creator_id: getCreatorID.creator_id, // Akun Sandbox crm_source_id: null,
  crm_source_name: null,
  crm_lost_reason_id: null,
  crm_lost_reason_name: null,
  crm_pipeline_id: getPipeline.id_pipeline_qontak,
  crm_pipeline_name: getPipeline.name,
  crm_stage_id: getStagePipeline.id_stage_qontak, // stage order pertama crm_stage_name: getStagePipeline.name, // stage name
  start_date: getStartDate(Date.now()),
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

_log(payloadAPI);
