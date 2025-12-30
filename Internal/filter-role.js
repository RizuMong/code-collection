var get_role = {
    // "company_unit": {
    //     "id": "TYa4nMz7g",
    //     "name": "System Analyst"
    // },
    // 
    // "company_unit": {
    //     "id": "VtFfIZeSg",
    //     "name": "Solution Engineer"
    // },
    // "company_unit": {
    //     "id": "-8QdrXmHR",
    //     "name": "UI Solution Engineer"
    // },
    // "company_unit": {
    //     "id": "-8QdrXmHR",
    //     "name": "UI Solution Engineer"
    // },
};

var task_list = [
    {
        name: "Task 1",
        qa_assignment: {},
        dev_assignment: {},
        system_analyst: {
            "company_user_id": 178006,
            "email": "ammar.raihan@mekari.com",
            "name": "ammar raihan",
            "photo": ""

        },
    },
    {
        name: "Task 2",
        qa_assignment: {
            "company_user_id": 178006,
            "email": "ammar.raihan@mekari.com",
            "name": "ammar raihan",
            "photo": ""

        },
        dev_assignment: {},
        system_analyst: {},
    },
    {
        name: "Task 1",
        qa_assignment: {},
        dev_assignment: {},
        system_analyst: {
            "company_user_id": 178006,
            "email": "ammar.raihan@mekari.com",
            "name": "ammar raihan",
            "photo": ""

        },
    },
]

var roleAssignmentMap = {
    "Solution Engineer": "dev_assignment",
    "System Analyst": "system_analyst",
    "Quality Testing": "qa_assignment",
    "UI Solution Engineer": "dev_assignment"
};

var assignmentRoleMap = {
    "dev_assignment": "Solution Engineer",
    "system_analyst": "System Analyst",
    "qa_assignment": "Quality Testing"
};

var roleName = get_role && get_role.company_unit
    ? get_role.company_unit.name
    : "";


var filteredTasks = [];
var assignmentKey = roleAssignmentMap[roleName];

for (var i = 0; i < task_list.length; i++) {
    var task = task_list[i];
    var detectedRoleName = "";

    // ===============================
    // SET role_id (PAKAI NAME)
    // ===============================
    if (roleName) {
        task.role_id = roleName;
    } else {
        for (var key in assignmentRoleMap) {
            if (task[key] && task[key].company_user_id) {
                detectedRoleName = assignmentRoleMap[key];
                break;
            }
        }
        task.role_id = detectedRoleName || "";
    }

    // ===============================
    // FILTER LOGIC
    // ===============================
    if (!roleName) {
        filteredTasks.push(task);
        continue;
    }

    if (!assignmentKey) {
        filteredTasks.push(task);
        continue;
    }

    var assignment = task[assignmentKey];
    if (assignment && assignment.company_user_id) {
        filteredTasks.push(task);
    }
}

console.log(filteredTasks);





// buat kalau semisal role nya solution engineer maka filter task_list yang ada value di dev_assignment