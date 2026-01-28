var task = parent_task;
var child_tasks = [];

if (!task.hasOwnProperty("child_tasks")) {
  res = {
    "code": 404,
    "error": true,
    "message": "Child task not found",
  }

  _response_status_code = 404;
  _stop = true;
};

if (task.hasOwnProperty("child_tasks")) {
  for (var i = 0; i < task.child_tasks.length; i++) {
    if (task.child_tasks[i].code === code) {
      child_tasks.push(task.child_tasks[i]);
      task.child_tasks.splice(i, 1);
      break;
    }
  };
};