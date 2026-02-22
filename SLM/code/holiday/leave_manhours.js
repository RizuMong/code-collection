var get_datas = [
    {
        "actual_man_hour": 5,
        "assignee_id": {
            "id": "HZqNEGSVwt0d",
            "name": "Abdullah Abdullah"
        },
        "assignment_logs": [
            {
                "assigned_at": 1771485475951,
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
        "company_id": 28208,
        "created_at": 1771485476145,
        "created_by": 0,
        "epic_id": {
            "id": "B9UC5sMjKoQi",
            "name": "New Epic"
        },
        "estimate_end_date": 1772064000000,
        "estimate_man_hour": 3,
        "estimate_start_date": 1771200000000,
        "id": "wGphODdfkJVR",
        "ids": "wGphODdfkJVR",
        "movement_logs": [
            {
                "from_status": null,
                "moved_at": 1771485475951,
                "moved_by_user": {
                    "id": "aCvk8b9tuNRP",
                    "name": "Michelle Amara Soekamto"
                },
                "to_status": {
                    "id": "VM360LxXrmQI",
                    "name": "Backlog"
                }
            }
        ],
        "name": "OTHERS",
        "project_id": {
            "id": "cEj0wwQuXa7e",
            "name": "Project Management Tool"
        },
        "sprint_id": {
            "id": "vlPCsIsmczPl",
            "name": "Sprint 1"
        },
        "status_id": {
            "id": "VM360LxXrmQI",
            "name": "Backlog"
        },
        "updated_at": 1771485757435,
        "updated_by": 0
    },
    {
        "actual_man_hour": 5,
        "assignee_id": {
            "id": "HZqNEGSVwt0d",
            "name": "Abdullah Abdullah"
        },
        "assignment_logs": [
            {
                "assigned_at": 1771485475951,
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
        "company_id": 28208,
        "created_at": 1771485476145,
        "created_by": 0,
        "epic_id": {
            "id": "B9UC5sMjKoQi",
            "name": "New Epic"
        },
        "estimate_end_date": 1772064000000,
        "estimate_man_hour": 3,
        "estimate_start_date": 1771200000000,
        "id": "wGphODdfkJVd",
        "ids": "wGphODdfkJVd",
        "movement_logs": [
            {
                "from_status": null,
                "moved_at": 1771485475951,
                "moved_by_user": {
                    "id": "aCvk8b9tuNRP",
                    "name": "Michelle Amara Soekamto"
                },
                "to_status": {
                    "id": "VM360LxXrmQI",
                    "name": "Backlog"
                }
            }
        ],
        "name": "OTHERS",
        "project_id": {
            "id": "cEj0wwQuXa7e",
            "name": "Project Management Tool"
        },
        "sprint_id": {
            "id": "vlPCsIsmczPl",
            "name": "Sprint 1"
        },
        "status_id": {
            "id": "VM360LxXrmQI",
            "name": "Backlog"
        },
        "updated_at": 1771485757435,
        "updated_by": 0
    }
];


var unique = {};
for (var i = 0; i < get_datas.length; i++) {
    unique[get_datas[i].id] = true;
}

var leave_manhours = Object.keys(unique).length * 8;

console.log(leave_manhours);