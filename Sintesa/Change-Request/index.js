// Declare
var status_alert = "success";
var messages = [];
var message = "";

var report_realization_parent = {
    "company_id": 28364,
    "created_at": 1786595368618,
    "created_by": 0,
    "created_by_project_user": "vlN180vmSzPm",
    "entity_id": {
        "id": "Ks6BgE75YiQ1",
        "name": "Sintesa"
    },
    "flow_status": "sent",
    "id": "XnTnTzfbHGbOj",
    "ids": "XnTnTzfbHGbOj",
    "period_id": {
        "id": "Xn05TC9biby3",
        "name": 2026
    },
    "submission_id": {
        "id": "58gGmahQCLZeM",
        "name": "Sintesa - 2026"
    },
    "submission_type_id": {
        "id": "hfUlpmiB8vOk",
        "name": "SDG - Realization"
    },
    "submitted_at": 1786606955021,
    "submitted_by": "rizki.haddi@mekari.com",
    "updated_at": 1786619097034,
    "updated_by": 0,
    "updated_by_project_user": "vlN180vmSzPm"
};

var action_initiate_items = [];

if (Object.keys(report_realization_parent).length > 0) {
    var statusRealization = report_realization_parent.flow_status;
    if (report_realization_parent.flow_status !== "draft") {
        messages.push("Cannot initiate action plan, report realization is not in draft status (current: " + statusRealization + ")")
    };
};

if (action_initiate_items.length === 0) {
    messages.push("Cannot submit action plan, no items have been added")
}

if (messages.length > 0) {
    message = messages.join(", ");
    status_alert = "error";
};

console.log(message);