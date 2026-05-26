var get_lists = [
    {
        "actual_end_date": 0,
        "actual_start_date": 0,
        "asessment_type": "",
        "assignee_id": {
            "id": "HZqNEGSVwt0d",
            "name": "Abdullah Abdullah"
        },
        "assignment_logs": [
            {
                "assigned_at": 1779252910116,
                "assigned_by": {
                    "id": "pQRZAQlkvlI",
                    "name": "Raissa Hana Adara"
                },
                "from_assignment": {},
                "to_assignment": {
                    "id": "HZqNEGSVwt0d",
                    "name": "Abdullah Abdullah"
                }
            }
        ],
        "code": "BZRP-049",
        "company_id": 28208,
        "created_at": 1779252910189,
        "created_by": 0,
        "description": "",
        "epic_id": {
            "id": "",
            "name": ""
        },
        "estimate_end_date": 0,
        "estimate_man_hour": 2,
        "estimate_start_date": 0,
        "id": "4tSGXPGOHljA",
        "ids": "4tSGXPGOHljA",
        "is_project": "YES",
        "movement_logs": [
            {
                "from_status": null,
                "moved_at": 1779252910116,
                "moved_by_user": {
                    "id": "pQRZAQlkvlI",
                    "name": "Raissa Hana Adara"
                },
                "to_status": {
                    "id": "tSxNmKcyFJcX",
                    "name": "Backlog"
                }
            }
        ],
        "name": "[FE] Biztrip Hotel Summary Adjustments",
        "project_id": {
            "id": "yIoYMWMrWC3y4",
            "name": "CIMB - Biztrip"
        },
        "project_id_text": "yIoYMWMrWC3y4",
        "sequence": 49,
        "sprint_number": 10,
        "sprint_year": 2026,
        "status": "Backlog",
        "status_id": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
        },
        "story_id": {
            "id": "",
            "name": ""
        },
        "task_billable_type": "",
        "task_category": "LOW_CODE",
        "task_type": "UAT_FEEDBACK",
        "updated_at": 1779252910189,
        "updated_by": 0,
        "work_item_id": {
            "id": "",
            "name": ""
        },
        "work_item_id_text": ""
    },
];


// cari dari get_lists yang work_item_id nya ada dan work_item_id.id nya ada value nya jangan string kosong, kalau nemu di push di satu array

var filtered_work_items = [];

for (var i = 0; i < get_lists.length; i++) {
    var item = get_lists[i];

    if (
        item.work_item_id &&
        item.work_item_id.id &&
        item.work_item_id.id !== ""
    ) {
        filtered_work_items.push(item);
    }
}

console.log(filtered_work_items);