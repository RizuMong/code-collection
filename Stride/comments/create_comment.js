var task_detail = {
    "assignee_id": {
        "id": "hfGTJvgBCv0g",
        "name": "Rizki Haddi Prayoga"
    },
    "assignment_logs": [
        {
            "assigned_at": 1788598521122,
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
    "child_tasks": [],
    "code": "MEKA-490",
    "company_id": 28208,
    "created_at": 1788598521214,
    "created_by": 0,
    "description": "",
    "estimate_end_date": 1789750799000,
    "estimate_man_hour": 24,
    "estimate_start_date": 1788739200000,
    "id": "6Xq08kdgbnxZx",
    "ids": "6Xq08kdgbnxZx",
    "is_project": "YES",
    "movement_logs": [
        {
            "from_status": null,
            "moved_at": 1788598521122,
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
    "name": "Mekari Conference - Development",
    "priority": "P2",
    "project_id": {
        "id": "N2BGKTVzxFXQW",
        "name": "Project Internal Mekari"
    },
    "project_id_text": "N2BGKTVzxFXQW",
    "sequence": 490,
    "sprint_number": 18,
    "sprint_year": 2026,
    "status": "Backlog",
    "status_id": {
        "id": "tSxNmKcyFJcX",
        "name": "Backlog"
    },
    "task_billable_type": "UNBILLABLE_WITH_APPROVAL",
    "task_category": "NO_CODE",
    "task_proof_attachments": [],
    "task_type": "PLANNED",
    "updated_at": 1788598521214,
    "updated_by": 0
};

var get_user = {
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

var req = {
    "body": {
        "content": "<p>Hai <span class=\"mention\" data-user-id=\"64a1b2c3d4e5f6a7b8c9d001\">@Budi Santoso</span>, tolong cek payload resource-planning ini</p>",
        "mentions": [
            {
                "email": "rizki.haddi@mekari.com",
                "user_id": "hfGTJvgBCv0g"
            }
        ],
        "task_id": "6Xq08kdgbnxZx"
    }
};

var authenticate = {
    "data": {
        "email": "rizki.haddi@mekari.com",
        "id_token": "lNYj1CmiRGoD",
        "job_position_id": {
            "id": "bq0ujKLZYXnr",
            "name": "Senior Solution Engineer"
        },
        "name": "Rizki Haddi Prayoga",
        "timestamp": 1788773597426,
        "user_id": "hfGTJvgBCv0g"
    }
};