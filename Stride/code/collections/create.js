var workflow_submission = [
    {
        "flow_name": "Stage 1",
        "flow_type": "no_order",
        "minimum_action": "1",
        "position_codes": [
            "IoPrilJvcBpj | rizkihaddiprayoga@gmail.com"
        ]
    }
]

var workflow_submission = {
    "data": [
        "IoPrilJvcBpj | rizkihaddiprayoga@gmail.com"
    ],
    "error": true,
    "message": "Entity MEPPO: Meppo-Gen is not mapped in the workflow"
};

var submission_window = {
    "company_id": 28364,
    "created_at": 1784651181241,
    "created_by": 0,
    "created_by_project_user": "vlN180vmSzPm",
    "end_date": null,
    "id": "cEwlW2yuYajt",
    "ids": "cEwlW2yuYajt",
    "is_open": true,
    "start_date": null,
    "submission_type_id": {
        "id": "B9LikxdjMo0k",
        "name": "GRI - Qualitative"
    },
    "updated_at": 1784651181241,
    "updated_by": 0,
    "updated_by_project_user": "vlN180vmSzPm"
};

// Function
function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]';
}

function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}

// Declare
var status_alert = "success";
var messages = [];
var message = "";
var submission_type_name = submission_window.submission_type_id.name;

// Submission Window
if (!submission_window.is_open) {
     messages.push("Submission " + submission_type_name + " Belum Dibuka");
};

if (submission_window.is_open) {
    // code here
};

// Workflow Submission
if (isObject(workflow_submission) && workflow_submission.error === true) {
    messages.push(workflow_submission.message || "Workflow submission gagal");
}

if (messages.length > 0) {
    message = messages.join(", ");
    status_alert = "error";
}