var req = {
    "data": {
        "actual_end_date": 0,
        "actual_man_hour": 0,
        "actual_start_date": 0,
        "ai_tooling_usage": "",
        "assignee": "sisy.agnia@mekari.com",
        "company_id": 28208,
        "created_at": 1788146617096,
        "created_by": 0,
        "description": "External demo with client",
        "estimate_end_date": 0,
        "estimate_man_hour": 1,
        "estimate_start_date": 0,
        "feature": "",
        "id": "pQe6U7Lk5lVW",
        "ids": "pQe6U7Lk5lVW",
        "is_project": "YES",
        "name": "[POST-DEV] External Demo",
        "priority": "P2",
        "project": "Tasen - Integration talenta attendance with qontak live tracking",
        "sprint_number": 17,
        "sprint_year": 2026,
        "status": "Backlog",
        "task_billable_type": "",
        "task_category": "CATEGORY",
        "task_type": "Bug ",
        "updated_at": 1788146617096,
        "updated_by": 0,
        "work_item": ""
    },
};

function normalizeEnum(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value)
        .replace(/[\s\u00A0\u200B\uFEFF]+/g, "")
        .toUpperCase();
};

console.log({
    "task_type": normalizeEnum(req.data.task_type),
    "task_category": normalizeEnum(req.data.task_category)
});
