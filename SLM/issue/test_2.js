var req = {
    body: {
        status_id: {
            "id": "",
            "name": ""
        }
    }
}

var default_task = {
    ids: 123,
    name: "task"
}

var status_id = req.body.status_id;

if (!status_id || !status_id.name) {
  status_id = {
    id: default_task.ids,
    name: default_task.name
  };
}


console.log(status_id);
