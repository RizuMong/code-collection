var statusTask = {
    "company_id": 28208,
    "created_at": 1775012120084,
    "created_by": 0,
    "created_by_project_user": "s6Xq9RC8Gj7N",
    "data_state": "ACTIVE",
    "id": "bqTJ0EmZYnm1",
    "ids": "bqTJ0EmZYnm1",
    "is_done": "YES",
    "name": "Done",
    "status_groups": [
        "Task"
    ],
    "updated_at": 1775012120084,
    "updated_by": 0,
    "updated_by_project_user": "s6Xq9RC8Gj7N"
};

var req = {
    body: {
        "task_proof_attachments": [
            {
                "title": "Coba",
                "url": "https://mekari.com"
            }
        ],
        "task_proof_recording_urls": [],
    }
};


var task_proof_attachments = (req && req.body && req.body.task_proof_attachments) ? req.body.task_proof_attachments : [];
var task_proof_recording_urls = (req && req.body && req.body.task_proof_recording_urls) ? req.body.task_proof_recording_urls : [];

function _log(msg) {
    console.log(msg);
};

if (Object.keys(statusTask).length > 0) {
    if (statusTask.is_done === "YES") {
        var hasAttachment =
            task_proof_attachments &&
            Array.isArray(task_proof_attachments) &&
            task_proof_attachments.length > 0;

        var hasRecording =
            task_proof_recording_urls &&
            Array.isArray(task_proof_recording_urls) &&
            task_proof_recording_urls.length > 0;

        if (!hasAttachment && !hasRecording) {
            res = {
                code: 422,
                error: true,
                data: {},
                message: "Unable to complete the task. Please provide at least one Task Proof (Attachment or Recording URL) before moving the task to a completed status."
            };

            _log(res);
            // _response_status_code = 422;
            // _stop = true;
        }
    }
}