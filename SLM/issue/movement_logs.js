var task_detail = {
    "properties": {
        "status": "inprogress"
    },
    "movement_logs": [
        {
            "from_status": null,
            "moved_at": 1768985275443,
            "moved_by_user": {
                "id": "hfGTJvgBCv0g",
                "name": "Rizki Haddi Prayoga"
            },
            "to_status": "todo"
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
        "properties": {
            "status": "inprogress"
        },
    }
};

// movement logs
var movement_logs = task_detail.movement_logs;

if (req.body &&
    req.body.properties &&
    task_detail.properties.status !== req.body.properties.status
) {
    movement_logs.push({
        "from_status": task_detail.properties.status,
        // "from_status": task_detail.status_id, // soon
        "moved_by_user": {
            "id": authenticate.data.user_id,
            "name": authenticate.data.name,
        },
        "moved_at": Date.now(),
        "to_status": req.body.properties.status
        // "to_status": status_id // soon
    });
};

console.log(movement_logs);