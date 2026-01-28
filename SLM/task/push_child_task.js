function _log(msg) {
    console.log(msg)
};


var req = {
    body: {
        "description": "",
        "estimate_end_date": 0,
        "estimate_man_hour": 1,
        "estimate_start_date": 0,
        "itemType": "task",
        "name": "Task 1",
        "parent_task_id": "zYByxxWcEwZ3",
        "priority": "medium",
        "project_id": {
            "id": "oPcsR3Slqr7T",
            "name": "Expense Management"
        },
        "sprint_id": {},
        "status": "todo",
        "task_billable_type": "BILLABLE",
        "task_category": "NO_CODE",
        "task_type": "BUG",
        "type": "task"
    }
};

var parent_task = {
    "assignment_logs": [],
    "child_tasks": [
        {
            "actual_end_date": 0,
            "actual_start_date": 0,
            "assignee_id": {},
            "assignment_logs": [],
            "blocked_by_task_ids": [],
            "code": "EMX-001-001",
            "component_ids": [],
            "description": "",
            "estimate_end_date": 0,
            "estimate_start_date": 0,
            "movement_logs": [],
            "parent_task_id": "zYByxxWcEwZ3",
            "project_id": {
                "id": "oPcsR3Slqr7T",
                "name": "Expense Management"
            },
            "properties": {},
            "sequence": 1,
            "sprint_id": {},
            "status_id": {},
            "task_billable_type": "BILLABLE",
            "task_category": "NO_CODE",
            "task_type": "BUG"
        }
    ],
    "code": "EMX-001",
    "company_id": 28208,
    "created_at": 1769063414199,
    "created_by": 0,
    "description": "",
    "estimate_end_date": 0,
    "estimate_man_hour": 1,
    "estimate_start_date": 0,
    "id": "zYByxxWcEwZ3",
    "ids": "zYByxxWcEwZ3",
    "movement_logs": [
        {
            "from_status": null,
            "moved_at": 1769063414044,
            "moved_by_user": {
                "id": "hfGTJvgBCv0g",
                "name": "Rizki Haddi Prayoga"
            },
            "to_status": "todo"
        }
    ],
    "name": "Task 1",
    "project_id": {
        "id": "oPcsR3Slqr7T",
        "name": "Expense Management"
    },
    "properties": {
        "status": "todo"
    },
    "sequence": 1,
    "sprint_id": {},
    "status_id": {},
    "task_billable_type": "BILLABLE",
    "task_category": "NO_CODE",
    "task_type": "BUG",
    "updated_at": 1769069744840,
    "updated_by": 0
};

var task_code = {
    "code": 200,
    "data": {
      "code": "EMX-001-002",
      "sequence": 2
    },
    "error": false,
    "message": "Success"
  }

var parent_task_id = req.body.parent_task_id;
var task_name = req.body.name;
var estimate_end_date = req.body.estimate_end_date;
var estimate_start_date = req.body.estimate_start_date;


var assignee_id = (req && req.body && req.body.assignee_id && req.body.assignee_id) ? req.body.assignee_id : {};
var properties = (req && req.body && req.body.properties && req.body.properties) ? req.body.properties : {};
var description = (req && req.body && req.body.description && req.body.description) ? req.body.description : "";
var blocked_by_task_ids = [];
var component_ids = [];

// assignment logs
var assignment_logs = [];

if (req.body.hasOwnProperty("assignee_id")) {
  assignment_logs = [
    {
      from_assignment: {},
      to_assignment: req.body.assignee_id,
      assigned_by: {
        id: authenticate.data.user_id,
        name: authenticate.data.name,
      },
      assigned_at: Date.now()
    }
  ]
};


// movement logs
var movement_logs = [
  {
    from_status: null,
    to_status: req.body.status,
    // to_status: status_id, // soon
    moved_by_user: {
      id: authenticate.data.user_id,
      name: authenticate.data.name,
    },
    moved_at: Date.now()
  }
];

// build child task - array object
var child_tasks = [];

if (parent_task.hasOwnProperty("child_tasks")) {
    child_tasks = parent_task.child_tasks;
};

_log({ before_child_tasks: child_tasks });

var build_task = {
    "parent_task_id": parent_task_id,
    "name": task_name,
    "description": description,
    "code": task_code.data.code,
    "sequence": task_code.data.sequence,
    "actual_start_date": 0,
    "actual_end_date": 0,
    "estimate_end_date": estimate_end_date,
    "estimate_start_date": estimate_start_date,
    "project_id": parent_task.project_id,
    "sprint_id": parent_task.sprint_id,
    "status_id": parent_task.status_id,
    "story_id": parent_task.story_id,
    "task_billable_type": parent_task.task_billable_type,
    "task_category": parent_task.task_category,
    "task_type": parent_task.task_type,
    "properties": properties,
    "assignee_id": assignee_id,
    "sequence": task_code.data.sequence,
    "sequence": task_code.data.sequence,
    "assignment_logs": assignment_logs,
    "movement_logs": movement_logs,
    "blocked_by_task_ids": blocked_by_task_ids,
    "component_ids": component_ids,
};

child_tasks.push(build_task);

_log({ after_child_task: child_tasks });