var parent_task = {
    "assignee_id": {
        "id": "HZqNEGSVwt0d",
        "name": "Abdullah Abdullah"
    },
    "code": "PMT-003",
    "ids": "1234XXX",
    "child_tasks": [
        {
            "parent_task_id": "1234XXX",
            "code": "PMT-SUB-001"
        },
        {
            "parent_task_id": "1234XXX",
            "code": "PMT-SUB-002"
        },
        {
            "parent_task_id": "1234XXX",
            "code": "PMT-SUB-003"
        },
    ]
};


var parent_task_id = "1234XXX";
var code = "PMT-SUB-003";

var task = parent_task;
var child_tasks = [];

for (var i = 0; i < task.child_tasks.length; i++) {
  if (task.child_tasks[i].code === code) {
    child_tasks.push(task.child_tasks[i]); 
    task.child_tasks.splice(i, 1);
    break;
  }
};

console.log(task);



// hapus yang ada di parent_task.child_tasks yang code nya sama dengan di var code jadi hasilnya pop satu object
// expected output
// "child_tasks": [
//         {
//             "parent_task_id": "1234XXX",
//             "code": "PMT-SUB-001"
//         },
//         {
//             "parent_task_id": "1234XXX",
//             "code": "PMT-SUB-002"
//         }
// ]