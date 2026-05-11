var status_lists = [{
    "company_id": 28208,
    "created_at": 0,
    "created_by": 193502,
    "created_by_project_user": "7Jy9G9DdwDi",
    "data_state": "ACTIVE",
    "flow_status": "",
    "id": "AeHKX2dsg1p7",
    "ids": "AeHKX2dsg1p7",
    "is_done": "NO",
    "name": "On Hold Due To Commercial Issue",
    "status_groups": [
        "Project"
    ],
    "updated_at": 1771771400943,
    "updated_by": 0,
    "updated_by_project_user": "7Jy9G9DdwDi"
},
{
    "company_id": 28208,
    "created_at": 0,
    "created_by": 193502,
    "created_by_project_user": "7Jy9G9DdwDi",
    "data_state": "ACTIVE",
    "flow_status": "",
    "id": "VM360LxXrmQI",
    "ids": "VM360LxXrmQI",
    "is_done": "NO",
    "name": "Backlog",
    "status_groups": [
        "Project",
        "Task"
    ],
    "updated_at": 1771778611341,
    "updated_by": 0,
    "updated_by_project_user": "7Jy9G9DdwDi"
}]

var status_group = [
    "Task",
    "Project"
];

var filtered_status = [];
var i, j;


var filtered_status = [];
var i, j;

if (!status_group || status_group.length === 0) {
    filtered_status = status_lists.slice();
} else {

    for (i = 0; i < status_lists.length; i++) {
        var groups = status_lists[i].status_groups || [];
        var is_match = true;

        for (j = 0; j < status_group.length; j++) {
            if (groups.indexOf(status_group[j]) === -1) {
                is_match = false;
            }
        }

        if (is_match) {
            filtered_status.push(status_lists[i]);
        }
    }
}

console.log(filtered_status);


// filter data yang di result or final itu based on status group yang ada di status_lists.status_groups