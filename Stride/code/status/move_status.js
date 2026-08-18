var task_detail = {
    "actual_start_date": 100000000,
    "assignee_id": {
        "id": "HZqNEGSVwt0d",
        "name": "Abdullah Abdullah"
    },
    "assignment_logs": [
        {
            "assigned_at": 1776697679488,
            "assigned_by": {
                "id": "HZqNEGSVwt0d",
                "name": "Abdullah Abdullah"
            },
            "from_assignment": {},
            "to_assignment": {
                "id": "HZqNEGSVwt0d",
                "name": "Abdullah Abdullah"
            }
        }
    ],
    "blocked_by_task_ids": [],
    "child_tasks": [],
    "code": "INJO-001",
    "company_id": 28208,
    "created_at": 1776697679651,
    "created_by": 0,
    "description": "",
    "estimate_man_hour": 12,
    "id": "n0dxEBuqlfL3",
    "ids": "n0dxEBuqlfL3",
    "is_project": "YES",
    "movement_logs": [
        {
            "from_status": null,
            "moved_at": 1776697679488,
            "moved_by_user": {
                "id": "HZqNEGSVwt0d",
                "name": "Abdullah Abdullah"
            },
            "to_status": {
                "id": "VM360LxXrmQI",
                "name": "Backlog"
            }
        }
    ],
    "name": "Test Abun",
    "project_id": {
        "id": "izYkP3NDCfz6",
        "name": "Injourney Aviasi Pariwisata Indonesia"
    },
    "project_id_text": "izYkP3NDCfz6",
    "sequence": 1,
    "status_id": {
        "id": "VM360LxXrmQI",
        "name": "In Progress"
    },
    "task_proof_attachments": [],
    "updated_at": 1776697679651,
    "updated_by": 0
};

var req = {
    "body": {
        "assignee_id": {
            "id": "HZqNEGSVwt0d",
            "name": "Abdullah Abdullah"
        },
        "blocked_by_task_ids": [],
        "description": "",
        "estimate_man_hour": 12,
        "id": "n0dxEBuqlfL3",
        "is_project": "YES",
        "name": "Test Abun",
        "project_id": {
            "id": "izYkP3NDCfz6",
            "name": "Injourney Aviasi Pariwisata Indonesia"
        },
        "status_id": {
            "id": "VM360LxXrmQI",
            "name": "Done"
        },
        "task_proof_attachments": [
            {
                "title": "Title",
                "url": "https://mekari.com"
            }
        ],
        "task_proof_recording_urls": [
            {
                "title": "Title",
                "url": "https://mekari.com"
            }
        ]
    }
};

var actual_start_date = task_detail.actual_start_date ? task_detail.actual_start_date : null;
var actual_end_date = task_detail.actual_end_date ? task_detail.actual_end_date : null;

if (task_detail && req.body && req.body.status_id) {
    var prevStatus = task_detail.status_id.name;
    var newStatus = req.body.status_id.name;

    if (prevStatus !== newStatus) {
        if (newStatus === "In Progress") {
            actual_start_date = Date.now();
        }

        if (newStatus === "Done") {
            actual_end_date = Date.now();
        }
    }
};

console.log({
    actual_start_date: actual_start_date,
    actual_end_date: actual_end_date
});