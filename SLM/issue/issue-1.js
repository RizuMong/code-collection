var task_detail = {
    "movement_logs": [
        {
            "from_status": "--",
            "moved_by_user": {
                "email": "rizki.haddi@mekari.com",
                "name": "Rizki Haddi Prayoga"
            },
            "movement_date": 1768815234238,
            "to_status": "todo"
        },
    ]
};

var movements = {
    "from_status": "inprogress",
    "moved_by_user": {
        "email": "rizki.haddi@mekari.com",
        "name": "Rizki Haddi Prayoga"
    },
    "movement_date": 1768815302501,
    "to_status": "done"
};


var movement_logs = task_detail.movement_logs;
movement_logs.push(movements);

console.log({
    movement_logs: movement_logs,
    movements: movements,
})

(task_detail && task_detail.story_id && task_detail.story_id.id) ? task_detail.story_id.id : ""