var task_list = [
    {
        "approval_logs": [
            {
                "job_position_id": {
                    "id": "SxisH0qIYsMO",
                    "name": "Custom Implementation Lead"
                },
                "request_id": "OyIUH1bJOLnv",
                "status": "WAITING_APPROVAL",
                "user_id": {
                    "email": "surbapi.surbapi@mekari.com",
                    "id": "xDz6Z1UoKCjb",
                    "name": "Surbapi"
                }
            },
            {
                "job_position_id": {
                    "id": "UKAtvclLMWiS",
                    "name": "Head of Technical Program Manager"
                },
                "request_id": "OyIUH1bJOLnv",
                "status": "WAITING_APPROVAL",
                "user_id": {
                    "email": "ringga.tiara@mekari.com",
                    "id": "IoD8VWwvcCBc",
                    "name": "Ringga Tiara Tanjung"
                }
            }
        ],
        "approval_status": "REQUESTED",
        "asessment_type": "",
        "assignee_id": {
            "id": "iz2Vq48D7rfX6",
            "name": "Gabriel Zebaoth Krisopras Putra"
        },
        "assignment_logs": [
            {
                "assigned_at": 1779244265200,
                "assigned_by": {
                    "id": "iz2Vq48D7rfX6",
                    "name": "Gabriel Zebaoth Krisopras Putra"
                },
                "from_assignment": {},
                "to_assignment": {
                    "id": "iz2Vq48D7rfX6",
                    "name": "Gabriel Zebaoth Krisopras Putra"
                }
            }
        ],
        "child_tasks": [],
        "company_id": 28208,
        "created_at": 1779244265293,
        "created_by": 0,
        "description": "Travel dari rumah (depok) ke kantor Geodipa di pejaten",
        "epic_id": {
            "id": "",
            "name": ""
        },
        "estimate_end_date": 1780012800000,
        "estimate_man_hour": 1.5,
        "estimate_start_date": 1778457600000,
        "id": "OyIUH1bJOLnv",
        "ids": "OyIUH1bJOLnv",
        "is_project": "NO",
        "movement_logs": [
            {
                "from_status": null,
                "moved_at": 1779244265200,
                "moved_by_user": {
                    "id": "iz2Vq48D7rfX6",
                    "name": "Gabriel Zebaoth Krisopras Putra"
                },
                "to_status": {
                    "id": "",
                    "name": ""
                }
            }
        ],
        "name": "Travel to Geodipa For Gathering Requirement",
        "project_id": {
            "id": "4tSlzA5OxlhC",
            "name": "CVTA (Internal Activities)"
        },
        "requested_by": {
            "id": "iz2Vq48D7rfX6",
            "name": "Gabriel Zebaoth Krisopras Putra"
        },
        "sprint_number": 10,
        "sprint_year": 2026,
        "status_id": {
            "id": "",
            "name": ""
        },
        "story_id": {
            "id": "",
            "name": ""
        },
        "task_billable_type": "MOBILIZATION",
        "task_category": "",
        "task_type": "",
        "updated_at": 1779244265491,
        "updated_by": 0,
        "work_item_id": {
            "id": "",
            "name": ""
        }
    }
]

var filtered_task_list = [];

for (var i = 0, len = task_list.length; i < len; i++) {
    var task = task_list[i];

    if (task.approval_logs && task.approval_logs.length > 0) {
        filtered_task_list.push(task);
    }
}

// Buat sorting list request task dengan menggunakan approval_status sebagai parameter sebagai berikut:
// 1. REQUESTED
// 2. APPROVED
// 3. REJECTED