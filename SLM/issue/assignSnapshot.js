var wbs_detail = {
    snapshot_tasks: [
        {
            id: '8gXkuIhRa0h7',
            name: 'Task 1',
            code: 'EMX-007',
            actual_start_date: 0,
            actual_end_date: 0,
            estimate_start_date: 0,
            estimate_end_date: 0,
            assigned_by: { id: 'hfGTJvgBCv0g', name: 'Rizki Haddi Prayoga' },
            assigned_at: 1770825853032
        }
    ],
};

var task_detail = {
    "code": "EMX-008",
    actual_start_date: 0,
    actual_end_date: 0,
    "estimate_end_date": 0,
    "estimate_start_date": 0,
    "ids": "123",
    "name": "Task 2"
};

// validate
var snapshot_tasks = wbs_detail.snapshot_tasks || [];
var authenticate = {
    data: {
        "user_id": "hfGTJvgBCv0g",
        "name": "Rizki Haddi Prayoga"
    }
};

var isExist = false;

for (var i = 0; i < snapshot_tasks.length; i++) {
    if (snapshot_tasks[i].id === task_detail.ids) {
        isExist = true;
        break;
    }
}

if (!isExist) {
    snapshot_tasks.push({
        id: task_detail.ids,
        name: task_detail.name,
        code: task_detail.code,
        actual_start_date: task_detail.actual_start_date,
        actual_end_date: task_detail.actual_end_date,
        estimate_start_date: task_detail.estimate_start_date,
        estimate_end_date: task_detail.estimate_end_date,
        assigned_by: {
            id: authenticate.data.user_id,
            name: authenticate.data.name
        },
        assigned_at: Date.now()
    });
}

console.log(snapshot_tasks);