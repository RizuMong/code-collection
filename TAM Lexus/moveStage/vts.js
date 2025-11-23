var payload = {
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
        id: 17913786,
        name: "has_customer_been_responded_to",
        value: "5857385",
        value_name: "Yes",
      },
      {
        id: 17913788,
        name: "is_service_completed",
        value: "",
        value_name: "Yes",
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
    crm_stage_id: 1234,
    id: 73741200,
    name: "Webhook Create",
  },
};

function _log(message) {
  console.log(message);
}

var payloadAPIQontak = JSON.parse(JSON.stringify(payload.body));

var isMoveStageProgress = false; 
var isMoveStageClosed = false;
var notesCustomerResponse = "";
var isServiceCompleted = "";

var currentStage = payload.body.crm_stage_name;

for (var i = 0; i < payloadAPIQontak.additional_fields.length; i++) {
  var field = payloadAPIQontak.additional_fields[i];
  var fname = field.name;
  var fvalname = field.value_name;

  // Move On Progress
  if (currentStage === "Open" && fname === "has_customer_been_responded_to") {
    notesCustomerResponse = fvalname || "";
    if (notesCustomerResponse === "Yes") {
      isMoveStageProgress = true;
      payloadAPIQontak.crm_stage_id = 1301442;
      payloadAPIQontak.crm_stage_name = "On Progress";
    }
  }

  // Move Closed
  if (currentStage !== "Closed" && fname === "is_service_completed") {
    isServiceCompleted = fvalname || "";
    if (isServiceCompleted === "Yes") {
      isMoveStageClosed = true;
      payloadAPIQontak.crm_stage_id = 1301445;
      payloadAPIQontak.crm_stage_name = "Closed";
    }
  }

  // Delete Confidential Fields when the deal is already Closed
  if (currentStage === "Closed") {
    if (fname === "cc_phone_number" || fname === "phone_number" || fname === "cc_email" || fname === "lexus_reach_phone_number") {
      field.value = "";
      field.value_name = "";
    }
  }
}

_log({
  notesCustomerResponse: notesCustomerResponse,
  isMoveStageProgress: isMoveStageProgress,
  isServiceCompleted: isServiceCompleted,
  isMoveStageClosed: isMoveStageClosed
});

_log(payloadAPIQontak);
