var get_datas = [
    {
        "assignee_id": {
            "id": "HZqNEGSVwt0d",
            "name": "Abdullah Abdullah"
        },
        "child_tasks": [],
        "code": "PMT-001",
        "company_id": 28208,
        "created_at": 1771569843308,
        "created_by": 0,
        "description": "Task 1",
        "estimate_end_date": 1772236800000,
        "estimate_man_hour": 2,
        "actual_man_hour": 0,
        "estimate_start_date": 1769904000000,
        "id": "AeHKkSisS1jn",
        "ids": "AeHKkSisS1jn",
        "name": "Task 1",
        "project_id": {
            "id": "cEj0wwQuXa7e",
            "name": "Project Management Tool"
        },
        "properties": {},
        "sequence": 1,
        "status_id": {
            "id": "AeHKbXnsg01sM",
            "name": "To do"
        },
        "story_id": {
            "id": "yIxTa8wrj3cM",
            "name": "Story 1"
        },
        "task_billable_type": "BILLABLE",
        "task_category": "NO_CODE",
        "task_type": "PLANNED",
        "updated_at": 1771569843308,
        "updated_by": 0
    },
    {
        "assignee_id": {
            "id": "HZqNEGSVwt0d",
            "name": "Abdullah Abdullah"
        },
        "child_tasks": [],
        "code": "PMT-001",
        "company_id": 28208,
        "created_at": 1771569843308,
        "created_by": 0,
        "description": "Task 1",
        "estimate_end_date": 1772236800000,
        "estimate_man_hour": 3,
        "actual_man_hour": 1,
        "estimate_start_date": 1769904000000,
        "id": "AeHKkSisS1jn",
        "ids": "AeHKkSisS1jn",
        "name": "Task 1",
        "project_id": {
            "id": "cEj0wwQuXa7e",
            "name": "Project Management Tool"
        },
        "properties": {},
        "sequence": 1,
        "status_id": {
            "id": "AeHKbXnsg01sM",
            "name": "To do"
        },
        "story_id": {
            "id": "yIxTa8wrj3cM",
            "name": "Story 1"
        },
        "task_billable_type": "BILLABLE",
        "task_category": "NO_CODE",
        "task_type": "PLANNED",
        "updated_at": 1771569843308,
        "updated_by": 0
    },
    {
        "assignee_id": {
            "id": "",
            "name": ""
        },
        "child_tasks": [],
        "code": "PMT-001",
        "company_id": 28208,
        "created_at": 1771569843308,
        "created_by": 0,
        "description": "Task 1",
        "estimate_end_date": 1772236800000,
        "estimate_man_hour": 3,
        "actual_man_hour": 1,
        "estimate_start_date": 1769904000000,
        "id": "AeHKkSisS1jn",
        "ids": "AeHKkSisS1jn",
        "name": "Task 1",
        "project_id": {
            "id": "cEj0wwQuXa7e",
            "name": "Project Management Tool"
        },
        "properties": {},
        "sequence": 1,
        "status_id": {
            "id": "AeHKbXnsg01sM",
            "name": "To do"
        },
        "story_id": {
            "id": "yIxTa8wrj3cM",
            "name": "Story 1"
        },
        "task_billable_type": "BILLABLE",
        "task_category": "NO_CODE",
        "task_type": "PLANNED",
        "updated_at": 1771569843308,
        "updated_by": 0
    }
];

// expected output, jadi Grouping By Assignee dan calculate manhours
/*
   [
{
  "employee_id": assignee_id,
  "job_position_id": {}, // kosongin dulu
  "capacity_manhours": 0, // kosongin dulu
  "planned_manhours": estimate_man_hour,
  "actual_manhours": actual_man_hour,
  "available_manhours": 0, // kosongin dulu
  "allocation_percentage": 0, // kosongin dulu
  "status": "Underutilized"
}
   ]
*/

var capacity_manhours = 8; // temp harcode
var grouped = {};

for (var i = 0; i < get_datas.length; i++) {
    var item = get_datas[i];

    var isUnassigned = !item.assignee_id || !item.assignee_id.id;

    var assigneeId = isUnassigned
        ? "UNASSIGNED"
        : item.assignee_id.id;

    if (!grouped[assigneeId]) {
        grouped[assigneeId] = {
            employee_id: isUnassigned
                ? { id: "UNASSIGNED", name: "Unassigned Task" }
                : item.assignee_id,
            job_position_id: {},
            capacity_manhours: capacity_manhours,
            planned_manhours: 0,
            actual_manhours: 0,
            available_manhours: 0,
            allocation_percentage: 0,
            status: ""
        };
    }

    grouped[assigneeId].planned_manhours += item.estimate_man_hour || 0;
    grouped[assigneeId].actual_manhours += item.actual_man_hour || 0;
}

var result = [];

for (var key in grouped) {
    if (grouped.hasOwnProperty(key)) {
        var obj = grouped[key];

        obj.available_manhours = obj.capacity_manhours - obj.planned_manhours;

        obj.allocation_percentage = obj.capacity_manhours > 0
            ? (obj.planned_manhours / obj.capacity_manhours) * 100
            : 0;

        if (obj.planned_manhours < obj.capacity_manhours) {
            obj.status = "Underutilized";
        } else if (obj.planned_manhours > obj.capacity_manhours) {
            obj.status = "Overutilized";
        } else {
            obj.status = "Utilized";
        }

        result.push(obj);
    }
}

console.log(result);