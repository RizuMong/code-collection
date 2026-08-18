var task_project = {
    child_task: [
        {
            "code": "CCSAFDASDSA"
        }
    ]
}


var sequence = 1;

if (task_project && task_project.child_task && task_project.child_task.length > 0) {
  sequence = task_project.child_task.length + 1;
};

console.log(sequence);
