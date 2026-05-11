var get_datas = [
    {
        "assignee_id": {
            "id": "HZqNEGSVwt0d",
            "name": "Abdullah Abdullah"
        },
        "assignment_logs": [
            {
                "assigned_at": 1777691405518,
                "assigned_by": {
                    "id": "aCvk8b9tuNRP",
                    "name": "Michelle Amara Soekamto"
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
        "code": "EMS-008",
        "company_id": 28208,
        "created_at": 1777691405675,
        "created_by": 0,
        "description": "",
        "estimate_man_hour": 24,
        "id": "N2BRx0YzSX9o",
        "ids": "N2BRx0YzSX9o",
        "is_project": "NO",
        "movement_logs": [
            {
                "from_status": null,
                "moved_at": 1777691405518,
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
        "name": "On Leave",
        "project_id": {
            "id": "CmiwTjlS1roM",
            "name": "Event Management System"
        },
        "project_id_text": "CmiwTjlS1roM",
        "sequence": 8,
        "sprint_number": 9,
        "sprint_year": 2026,
        "status_id": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
        },
        "task_billable_type": "PERSONAL_LEAVE",
        "task_proof_attachments": [],
        "updated_at": 1777691405675,
        "updated_by": 0
    }
];

var leave_manhours = 0;

get_datas.forEach(function (leave) {
    leave_manhours += leave.estimate_man_hour || 0;
});