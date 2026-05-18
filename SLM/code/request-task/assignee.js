var req = {
    "body": {
        // "assignee_id": null,
    }
}

var authenticate = {
    "code": 200,
    "data": {
        "email": "keannen.renaldo@mekari.com",
        "id_token": "JrvfqD2aKEjc",
        "job_position_id": {
            "id": "CmlAgW1SCroQ",
            "name": "Solution Engineer"
        },
        "join_date": 1762707600000,
        "name": "Keannen Renaldo Halim",
        "organization_id": {
            "id": "tSmKRllyCJgg",
            "name": "Solution Implementation (VAS)"
        },
        "timestamp": 1778128984277,
        "user_id": "cEjn1y3uQQah"
    },
    "error": false,
    "message": "Authentication successful."
}

// assignment logs
var assignee_id = {
    "id": authenticate.data.user_id,
    "name": authenticate.data.name,
};

var assignment_logs = [];

if (req.body.assignee_id) {
    assignee_id = req.body.assignee_id;
    assignment_logs.push({
        from_assignment: {},
        to_assignment: req.body.assignee_id,
        assigned_by: {
            id: authenticate.data.user_id,
            name: authenticate.data.name
        },
        assigned_at: Date.now()
    });
};

console.log(assignee_id);