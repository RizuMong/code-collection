var task_detail = {
    "assignee_id": {
        "id": "HZqNEGSVwt0d",
        "name": "Abdullah Abdullah"
    },
    "assignment_logs": [
        {
            "assigned_at": 1768985275443,
            "assigned_by": {
                "id": "hfGTJvgBCv0g",
                "name": "Rizki Haddi Prayoga"
            },
            "from_assignment": {},
            "to_assignment": {
                "id": "HZqNEGSVwt0d",
                "name": "Abdullah Abdullah"
            }
        }
    ]
};

var authenticate = {
    "data": {
        user_id: 1,
        name: "Rizki Haddi Prayoga"
    }
};

var req = {
    body: {
        "assignee": {
            "id": "HZqNEGSVwt0d",
            "name": "Abdullah Abdullah"
        },
        "assignee_id": {
            "id": "1Ot9kez7ULyp",
            "name": "Alexander William"
        },
    }
};

// assignment
var assignment_logs = task_detail.assignment_logs;

if (
    req.body &&
    req.body.assignee_id &&
    req.body.assignee_id.id &&
    task_detail.assignee_id.id !== req.body.assignee_id.id
) {
    assignment_logs.push({
        from_assignment: {
            id: task_detail.assignee_id.id,
            name: task_detail.assignee_id.name
        },
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