var req = {
    "body": {
        "actual_end_date": 0,
        "actual_start_date": 1787529600,
        "assignee_id": {
            "id": "",
            "name": ""
        },
        "estimate_end_date": 0,
        "estimate_man_hour": 0,
        "estimate_start_date": 1787529600,
        "job_position_id": {
            "id": "HZqNELGVDktc0",
            "name": "Project Manager"
        },
        "master_wbs_id": {
            "id": "zYw28xQc3wP7",
            "name": "Hypercare"
        },
        "milestone_id": {
            "id": "vlNEP9LmFzKR",
            "name": "Implementation"
        },
        "project_id": {
            "id": "9L5MHf1FEqHJ",
            "name": "Project Management Tools 3.0"
        },
        "status_id": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
        },
        "task_name": "Hypercare"
    }
};

// get body non mandatory
var master_wbs_id = (req && req.body && req.body.master_wbs_id && req.body.master_wbs_id.id) ? req.body.master_wbs_id : {};
var status_id = (req && req.body && req.body.status_id && req.body.status_id.id) ? req.body.status_id : {};
var assignee_id = (req && req.body && req.body.assignee_id && req.body.assignee_id.id) ? req.body.assignee_id : {};
var estimate_start_date = (req && req.body && req.body.estimate_start_date && req.body.estimate_start_date) ? req.body.estimate_start_date : 0;
var estimate_end_date = (req && req.body && req.body.estimate_end_date && req.body.estimate_end_date) ? req.body.estimate_end_date : 0;
var actual_start_date = (req && req.body && req.body.actual_start_date && req.body.actual_start_date) ? req.body.actual_start_date : 0;
var actual_end_date = (req && req.body && req.body.actual_end_date && req.body.actual_end_date) ? req.body.actual_end_date : 0;


// validate hypercare date
var hypercare_start_date = 0;
var hypercare_end_date = 0;

if (master_wbs_id.name === "Hypercare") {
    var messages = [];
    var THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

    var start_ms = actual_start_date ? (String(actual_start_date).length <= 10 ? actual_start_date * 1000 : actual_start_date) : 0;
    var end_ms = actual_end_date ? (String(actual_end_date).length <= 10 ? actual_end_date * 1000 : actual_end_date) : 0;

    // actual date mandatory saat status In Progress
    if (status_id.name === "In Progress" && !start_ms) {
        messages.push("Actual start date is required when status is In Progress");
    }

    if (start_ms && end_ms && start_ms > end_ms) {
        messages.push("Actual start date cannot be greater than actual end date");
    }

    if (messages.length > 0) {
        res = {
            error: true,
            code: 422,
            message: messages.join(", "),
            data: {}
        };

        _response_status_code = 422;
        _stop = true;
    }

    hypercare_start_date = start_ms;

    if (end_ms) {
        hypercare_end_date = end_ms;
    } else {
        hypercare_end_date = start_ms + THIRTY_DAYS_MS;
    }
};

console.log({
    hypercare_start_date: hypercare_start_date,
    hypercare_end_date: hypercare_end_date
});