var get_datas = [
    {
        "actual_end_date": 1779245228328,
        "actual_man_hour": 1,
        "actual_start_date": 1779243886345,
        "asessment_type": "",
        "assignee_id": {
            "id": "hfGTJvgBCv0g",
            "name": "Rizki Haddi Prayoga"
        },
        "assignment_logs": [
            {
                "assigned_at": 1779191342170,
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
        "blocked_by_task_ids": [],
        "code": "PMT3-044",
        "company_id": 28208,
        "created_at": 1779191342236,
        "created_by": 0,
        "description": "https://slm-api.jojonomic.com/api/v1/task-request/index\n\nbisa ditambahin di response API ini supaya bisa di slicing dari FE",
        "epic_id": {
            "id": "",
            "name": ""
        },
        "estimate_end_date": 0,
        "estimate_man_hour": 1,
        "estimate_start_date": 0,
        "id": "58gSSuZQvZCZ",
        "ids": "58gSSuZQvZCZ",
        "is_project": "YES",
        "movement_logs": [
            {
                "from_status": null,
                "moved_at": 1779191342170,
                "moved_by_user": {
                    "id": "aCvk8b9tuNRP",
                    "name": "Michelle Amara Soekamto"
                },
                "to_status": {
                    "id": "tSxNmKcyFJcX",
                    "name": "Backlog"
                }
            },
            {
                "from_status": {
                    "id": "tSxNmKcyFJcX",
                    "name": "Backlog"
                },
                "moved_at": 1779243886345,
                "moved_by_user": {
                    "id": "hfGTJvgBCv0g",
                    "name": "Rizki Haddi Prayoga"
                },
                "to_status": {
                    "id": "wGk8pJAfVJb1",
                    "name": "In Progress"
                }
            },
            {
                "from_status": {
                    "id": "wGk8pJAfVJb1",
                    "name": "In Progress"
                },
                "moved_at": 1779245228328,
                "moved_by_user": {
                    "id": "hfGTJvgBCv0g",
                    "name": "Rizki Haddi Prayoga"
                },
                "to_status": {
                    "id": "bqTJ0EmZYnm1",
                    "name": "Done"
                }
            }
        ],
        "name": "[BE] Tambahin Assignee to di table list request task",
        "project_id": {
            "id": "9L5MHf1FEqHJ",
            "name": "Project Management Tools 3.0"
        },
        "project_id_text": "9L5MHf1FEqHJ",
        "properties": {},
        "sequence": 44,
        "sprint_number": 10,
        "sprint_year": 2026,
        "status": "Done",
        "status_id": {
            "id": "bqTJ0EmZYnm1",
            "name": "Done"
        },
        "story_id": {
            "id": "",
            "name": ""
        },
        "task_billable_type": "",
        "task_category": "",
        "task_proof_attachments": [
            {
                "title": "Screenshot at May 20 09-24-26",
                "url": "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/14/6a0d1b67275bb-Screenshot-at-May-20-09-24-26.png"
            }
        ],
        "task_proof_recording_urls": [],
        "task_type": "PLANNED",
        "updated_at": 1779251969555,
        "updated_by": 0,
        "work_item_id": {
            "id": "",
            "name": ""
        },
        "work_item_id_text": ""
    }
];

var user = {
    "avatar_url": "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/14/6a608e645ef7f-profile-avatar_url-1784712800596.jpeg",
    "banner_url": "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/14/6a608e487f1c4-profile-banner_url-1784712773282.jpeg",
    "bio": "Ordinary People.",
    "company_id": 28208,
    "created_at": 1775043820325,
    "created_by": 0,
    "data_state": "ACTIVE",
    "email": "rizki.haddi@mekari.com",
    "id": "hfGTJvgBCv0g",
    "ids": "hfGTJvgBCv0g",
    "job_level": 2,
    "job_position_id": {
        "group": "Solution Engineer",
        "id": "bq0ujKLZYXnr",
        "level": 2,
        "name": "Senior Solution Engineer"
    },
    "join_date": 1672160400000,
    "name": "Rizki Haddi Prayoga",
    "organization_id": {
        "id": "aCmJwQ5tLN86",
        "name": "Custom"
    },
    "resign_date": null,
    "role_id": {
        "id": "FpQnsVBGNXkL",
        "name": "Senior VAS"
    },
    "squad_name": null,
    "tag": "",
    "updated_at": 1785748822908,
    "updated_by": 0,
    "updated_by_project_user": "UKA9XRNLQWI",
    "username": "rizki.haddi"
};

/*
    Expected Output

    <15% = OVERESTIMATE
    >15% = OVERRUN
    Else WITHIN TARGET
*/
[
    {
        "actual_man_hours": 1,
        "available_man_hours": 10,
        "id": "hfGTJvgBCv0g",
        "job_position_id": {
            "id": "bq0ujKLZYXnr",
            "name": "Solution Engineer"
        },
        "name": "Rizki Haddi Prayoga",
        "variance_percentage": 0,
        "variance_status": "OVERESTIMATE"
    }
]