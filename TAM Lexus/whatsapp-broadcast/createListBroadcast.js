var getDeal = {
    additional_fields: [
      {
        id: 14981716,
        name: "inquiry",
        value: "",
        value_name: null,
      },
      {
        id: 13473277,
        name: "location",
        value: "",
        value_name: null,
      },
      {
        id: 13473278,
        name: "destination",
        value: "",
        value_name: null,
      },
    ],
    created_at: "2024-10-18T11:01:29.846+07:00",
    creator_id: 185776,
    creator_name: "Rizky Pambudi -",
    crm_pipeline_id: 167230,
    crm_pipeline_name: "",
    crm_stage_name: "On Progress",
    external_company_id: 836993,
    id: 57001653,
    name: "22-CP-0000066 - Adi Sumargo Setiawan",
    unique_deal_id: "433MMORRIO",
};

var category = getDeal.crm_pipeline_name === "Sales" ? "Sales" : "After Sales";

function getFieldValue(fields, name) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i].name === name) return fields[i].value;
  }
  return "";
}

var status = "Success";
var notes = "";

if (!getFieldValue(getDeal.additional_fields, "inquiry")) {
  status = "Failed";
  notes += "Inquiry belum di isi di CRM. ";
}
if (!getDeal.unique_deal_id) {
  status = "Failed";
  notes += "Unique deal ID belum di isi di CRM. ";
}
if (!getDeal.crm_stage_name) {
  status = "Failed";
  notes += "CRM stage name belum di isi. ";
}

var payloadFunction = {
  type: "WhatsApp Broadcast",
  data: {
    category: category,
    inquiry: getFieldValue(getDeal.additional_fields, "inquiry"),
    location: getFieldValue(getDeal.additional_fields, "location"),
    destination: getFieldValue(getDeal.additional_fields, "destination"),
    unique_deal_id: getDeal.unique_deal_id || "",
    to_phone_number: "",
    status: status,
    notes: notes.trim() || "",
  },
};

console.log(payloadFunction);
