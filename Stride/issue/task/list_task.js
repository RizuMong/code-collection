var task_list = [
    {
        "actual_end_date": 0,
        "actual_start_date": 0,
        "asessment_type": "",
        "assignee_id": {
            "id": "hfGTJvgBCv0g",
            "name": "Rizki Haddi Prayoga"
        },
        "assignment_logs": [
            {
                "assigned_at": 1779192414735,
                "assigned_by": {
                    "id": "aCvk8b9tuNRP",
                    "name": "Michelle Amara Soekamto"
                },
                "from_assignment": {},
                "to_assignment": {
                    "id": "hfGTJvgBCv0g",
                    "name": "Rizki Haddi Prayoga"
                }
            }
        ],
        "code": "PMT3-048",
        "company_id": 28208,
        "created_at": 1779192414800,
        "created_by": 0,
        "description": "tambahin pagination di api https://slm-api.jojonomic.com/api/v1/task-request/index",
        "epic_id": {
            "id": "",
            "name": ""
        },
        "estimate_end_date": 0,
        "estimate_man_hour": 1,
        "estimate_start_date": 0,
        "id": "rvl55rqCtZliW",
        "ids": "rvl55rqCtZliW",
        "is_project": "YES",
        "movement_logs": [
            {
                "from_status": null,
                "moved_at": 1779192414735,
                "moved_by_user": {
                    "id": "aCvk8b9tuNRP",
                    "name": "Michelle Amara Soekamto"
                },
                "to_status": {
                    "id": "tSxNmKcyFJcX",
                    "name": "Backlog"
                }
            }
        ],
        "name": "[BE] Add Pagination buat di API list Task Request ",
        "project_id": {
            "id": "9L5MHf1FEqHJ",
            "name": "Project Management Tools 3.0"
        },
        "project_id_text": "9L5MHf1FEqHJ",
        "sequence": 48,
        "sprint_number": 10,
        "sprint_year": 2026,
        "status_id": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
        },
        "story_id": {
            "id": "",
            "name": ""
        },
        "task_billable_type": "",
        "task_category": "",
        "task_type": "PLANNED",
        "updated_at": 1779192414800,
        "updated_by": 0,
        "work_item_id": {
            "id": "",
            "name": ""
        },
        "work_item_id_text": ""
    },
];

var statusOrder = {
    "In Progress": 1,
    "Hold": 2,
    "Backlog": 3,
    "Done": 4,
    "Cancel": 5
};

var i = 0;
var j = 0;
var temp = null;
var totalData = task_list.length;

for (i = 0; i < totalData - 1; i++) {
    for (j = i + 1; j < totalData; j++) {

        if (
            (statusOrder[task_list[i].status_id.name] || 999) >
            (statusOrder[task_list[j].status_id.name] || 999)
        ) {
            temp = task_list[i];
            task_list[i] = task_list[j];
            task_list[j] = temp;
        }

    }
}

