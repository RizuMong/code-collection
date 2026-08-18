var task_sprints = [
    {
        "actual_manhour": 0,
        "asessment_type": "Based on SOW",
        "assignee_email": "keannen.renaldo.halim@mekari.com",
        "category": "CX & Tech Writer",
        "company_id": 14,
        "priority": "Medium",
        "company_project": {
            "id": "miNnWRLxO3KL",
            "name": "Injourney Aviasi Pariwisata Indonesia"
        },
        "created_at": 1774198800000,
        "updated_at": 1774198800000,
        "company_sprint": {
            "id": "pQ8ExqMkjlev",
            "name": "2026-SPRINT-6"
        },
        "company_unit": {
            "id": "xDAC1CeB7Qj4ovHY",
            "name": "Technical Writer"
        },
        "company_unit_member": {
            "id": "",
            "name": ""
        },
        "end_date": 1775149200000,
        "estimate_manhour": 16,
        "feature": "Manual Book - Injourney - CX Management System",
        "full_name": "Anggreini Intan",
        "id": "n07ecf1qhfdv",
        "release_on_version": "New Task",
        "sprint_company": {
            "id": "pQ8ExqMkjlev",
            "name": "2026-SPRINT-6"
        },
        "start_date": 1774198800000,
        "status": {
            "background": "#a5095c",
            "font_color": "#ffffff",
            "name": "Waiting QA"
        },
        "status_string": "Waiting QA", // Waiting QA, QA Testing
        "task_type": "",
        "updated_by_project_user": "",
        "value_type": "CVTA (Customer Value Task / Activities)"
    }
]

// expected result
// var results = [{
//     "actual_manhour": actual_manhour,
//     "estimate_manhour": estimate_manhour,
//     "sprint_number": company_sprint, // get number "6"
//     "sprint_year": company_sprint, // get year "2026"
//     "assignee_email": assignee_email,
//     "full_name": full_name,
//     "project_id": company_project,
//     "job_position": company_unit,
//     "estimate_start_date": start_date,  
//     "estimate_end_date": end_date,  
//     "name": feature,
//     "status": status,
//     "task_type": release_on_version, // uppercase dan spasi di ganti underscore
//     "task_billable_type": task_type, // uppercase dan spasi di ganti underscore
//     "value_type": value_type, // uppercase
//     "created_at": created_at,
//     "updated_at": updated_at,
// }]

var results = [];

var EMAIL_MAP = {
    "rizqy@jojonomic.com": "rizqy.faris@mekari.com",
    "fitria@jojonomic.com": "fitria.hasheena@mekari.com",
    "surbapi@jojonomic.com": "surbapi.surbapi@mekari.com",
    "rizki@jojonomic.com": "rizki.haddi@mekari.com",
    "keannen.renaldo.halim@mekari.com": "keannen.renaldo@mekari.com",
};

function normalizeEmail(email) {
    if (!email) return "";
    return EMAIL_MAP[email] || email;
}

function formatText(val) {
    if (!val) return "";
    return val.toUpperCase().replace(/\s+/g, "_");
}

function normalizeStatus(status) {
    if (!status) return "";

    if (status === "Waiting QA" || status === "QA Testing") {
        return "Done";
    }

    return status;
}

function normalizeValueType(val) {
    if (!val) return "";

    if (val === "CVTA (Customer Value Task / Activities)") {
        return "CUSTOMER VALUE";
    }

    return val.toUpperCase();
}

for (var i = 0; i < task_sprints.length; i++) {
    var item = task_sprints[i];

    // default safe access
    var sprint_name = item.company_sprint && item.company_sprint.name || "";

    var sprint_year = "";
    var sprint_number = "";

    if (sprint_name) {
        // format: 2026-SPRINT-6
        var parts = sprint_name.split("-");
        if (parts.length === 3) {
            sprint_year = parts[0];
            sprint_number = parts[2];
        }
    }

    var raw_status = item.status && item.status.name || "";
    var final_status = normalizeStatus(raw_status);

    var raw_value_type = normalizeValueType(item.value_type);
    var final_value_type = formatText(raw_value_type);

    var final_email = normalizeEmail(item.assignee_email);
    var final_priority = formatText(item.priority);

    results.push({
        actual_manhour: item.actual_manhour || 0,
        estimate_manhour: item.estimate_manhour || 0,
        sprint_number: parseInt(sprint_number),
        sprint_year: parseInt(sprint_year),
        assignee_email: final_email,
        full_name: item.full_name || "",
        project_name: item.company_project && item.company_project.name || "",
        job_position: item.company_unit && item.company_unit.name || "",
        estimate_start_date: item.start_date || null,
        estimate_end_date: item.end_date || null,
        name: item.feature || "",
        status: final_status,
        final_priority: final_priority,
        task_type: formatText(item.release_on_version), // uppercase + underscore
        task_type: formatText(item.task_type), // uppercase + underscore
        task_billable_type: final_value_type,
        created_at: item.created_at || null,
        updated_at: item.updated_at || null
    });
}

console.log(results);
