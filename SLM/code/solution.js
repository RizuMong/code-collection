var task = {
  "assignment_logs": [
    {
      "assigned_at": 1777340861166,
      "assigned_by": {
        "id": "jFL7txVwnpZj",
        "name": "Muhammad Rizqy Al Faris"
      },
      "from_assignment": {},
      "to_assignment": {
        "id": "jFL7txVwnpZj",
        "name": "Muhammad Rizqy Al Faris"
      }
    }
  ],
  "assignee_id": {
    "id": "jFL7txVwnpZj",
    "name": "Muhammad Rizqy Al Faris"
  },
  "blocked_by_task_ids": [],
  "child_tasks": [],
  "code": "TDKMSR-002",
  "company_id": 28208,
  "created_at": 1777723431477,
  "created_by": 0,
  "description": "",
  "estimate_man_hour": 1,
  "id": "IoPpoEivnBsy",
  "ids": "IoPpoEivnBsy",
  "is_project": "YES",
  "movement_logs": [
    {
      "from_status": null,
      "moved_at": 1777723431309,
      "moved_by_user": {
        "id": "hfGTJvgBCv0g",
        "name": "Rizki Haddi Prayoga"
      },
      "to_status": {
        "id": "tSxNmKcyFJcX",
        "name": "Backlog"
      }
    }
  ],
  "name": "dsadasdas",
  "project_id": {
    "id": "aCmE9R3tyNH7",
    "name": "Tadika M"
  },
  "project_id_text": "aCmE9R3tyNH7",
  "sequence": 2,
  "status_id": {
    "id": "tSxNmKcyFJcX",
    "name": "Backlog"
  },
  "task_proof_attachments": [],
  "updated_at": 1777723431477,
  "updated_by": 0
};

var req = {
  "body": {
    "assignee_id": {
      "id": "hfGTJvgBCv0g",
      "name": "Rizki Haddi Prayoga"
    },
    "id": "IoPpoEivnBsy"
  }
}

var authenticate = {
  "code": 200,
  "data": {
    "email": "rizki.haddi@mekari.com",
    "id_token": "aCmwDgCtLNBC",
    "job_position_id": {
      "id": "bq0ujKLZYXnr",
      "name": "Senior Solution Engineer"
    },
    "join_date": 1672160400000,
    "name": "Rizki Haddi Prayoga",
    "organization_id": {
      "id": "tSmKRllyCJgg",
      "name": "Solution Implementation (VAS)"
    },
    "role_id": {
      "id": "FpQnsVBGNXkL",
      "name": "Senior VAS"
    },
    "timestamp": 1777531667945,
    "user_id": "hfGTJvgBCv0g"
  },
  "error": false,
  "message": "Authentication successful."
};

var assignment_logs = task.assignment_logs || [];
var fromAssignment = {};
var is_sent_email = false;

if (
  task.assignee_id &&
  task.assignee_id.id &&
  task.assignee_id.name
) {
  fromAssignment = {
    id: task.assignee_id.id,
    name: task.assignee_id.name
  };
};

if (task.assignment_logs.length === 0) {
  is_sent_email = true;
  assignment_logs.push({
    from_assignment: fromAssignment,
    to_assignment: {
      id: req.body.assignee_id.id,
      name: req.body.assignee_id.name
    },
    assigned_by: {
      id: authenticate.data.user_id,
      name: authenticate.data.name
    },
    assigned_at: Date.now()
  });
} else if (
  req.body &&
  req.body.assignee_id &&
  req.body.assignee_id.id &&
  task.assignee_id.id !== req.body.assignee_id.id
) {
  is_sent_email = true;
  assignment_logs.push({
    from_assignment: fromAssignment,
    to_assignment: {
      id: req.body.assignee_id.id,
      name: req.body.assignee_id.name
    },
    assigned_by: {
      id: authenticate.data.user_id,
      name: authenticate.data.name
    },
    assigned_at: Date.now()
  });
};

console.log(assignment_logs);
console.log(is_sent_email);
