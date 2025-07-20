var payloadAPIConfirm = {
    "unique_ticket_id": payload.body.id.toString(),
    "status": "confirmed",
    "pipeline_id": payload.body.crm_pipeline_id.toString(),
    "pipeline_name": payload.body.crm_pipeline_name,
    "stage_id": payload.body.crm_stage_id.toString(),
    "stage_name": payload.body.crm_stage_name,
};

payload.body.additional_fields.forEach(function (item) {
    if (item.name === "variant" && item.value) {
        var type = item.value.toLowerCase();

        switch (type) {
            case "general":
              payloadAPIConfirm.type = 1;
                break;
            case "lfast non-technical":
              payloadAPIConfirm.type = 2;
                break;
            case "lfast technical":
              payloadAPIConfirm.type = 3;
                break;
            default:
              payloadAPIConfirm.type = null;
        }
    }

    if (item.name === "dealer_code" && item.value) {
        var dealerName = item.value.toLowerCase();

        switch (dealerName) {
            case "1. menteng":
              payloadAPIConfirm.dealer_code = 1;
                break;
            case "2. mampang":
              payloadAPIConfirm.dealer_code = 2;
                break;
            case "3. pluit":
              payloadAPIConfirm.dealer_code = 3;
                break;
            case "4. other":
              payloadAPIConfirm.dealer_code = 4;
                break;
            default:
              payloadAPIConfirm.dealer_code = null;
        }
    };

    if (item.name === "ldms_vehicle_id" && item.value != null) {
      payloadAPIConfirm.ldms_vehicle_id = item.value;
    };

    if (item.name === "description" && item.value != null) {
      payloadAPIConfirm.description = item.value;
    }
});

var isUpdateConfirmed = false;

if (Object.keys(getDataExist).length == 0 && payload.body.crm_stage_name == "On Progress") {
    isUpdateConfirmed = true;
};

// Case Confirmed
if (payload.body.crm_stage_name == "On Progress" || isUpdateConfirmed) {
    var hitAPILexus = _hitFunction("func_hit_api_lexus", {
        "endpoint": "/qontak/concierge/status",
        "payload": payloadAPIConfirm,
        "ticket_qontak_id": payload.body.id,
        "deal_name": payload.body.name
    });
};

var isUpdateCompleted = false;

if (Object.keys(getDataExist).length == 0 && payload.body.crm_stage_name == "Closed") {
    isUpdateCompleted = true;
};

// Case Completed
if (payload.body.crm_stage_name == "Closed" || isUpdateCompleted) {
    var payloadAPICompleted = {
        "unique_ticket_id": payload.body.id.toString(),
        "status": "completed",
    };

    if (typeVariant == 3) {
        _log("Only status = confirmed, with type = 'General' / 'LFast non technical' can be updated to completed");
        _stopAutomation();
    };

    var hitAPILexus = _hitFunction("func_hit_api_lexus", {
        "endpoint": "/qontak/concierge/status",
        "payload": payloadAPICompleted,
        "ticket_qontak_id": payload.body.id,
        "deal_name": payload.body.name
    });
};

// Case Move/Update Stage
var payloadAPIQontak = JSON.parse(JSON.stringify(payload.body));

if (payloadAPIQontak.crm_stage_name === "Move to e-Care Preventive") {
    payloadAPIQontak.crm_pipeline_name = "e-Care Preventive";
    payloadAPIQontak.crm_pipeline_id = 151841;
    payloadAPIQontak.crm_stage_id = 914374;
    payloadAPIQontak.crm_stage_name = "Open";
};

if (payloadAPIQontak.crm_stage_name === "Move to LFast Technical") {
    payloadAPIQontak.crm_pipeline_name = "Concierge - LFast Technical";
    payloadAPIQontak.crm_pipeline_id = 173395;
    payloadAPIQontak.crm_stage_id = 1043508;
    payloadAPIQontak.crm_stage_name = "Confirmed";
};

_log(payload.body.crm_stage_name);

if (payload.body.crm_stage_name == "Move to e-Care Preventive" || payload.body.crm_stage_name == "Move to LFast Technical") {
    _log("Case Move/Update Stage")
    var hitAPILexus = _hitFunction("func_hit_api_qontak", {
        "method": "PUT",
        "endpoint": "/deals/" + payload.body.id.toString(),
        "payload": payloadAPIQontak,
        "ticket_qontak_id": payload.body.id,
        "deal_name": payload.body.name
    });
};