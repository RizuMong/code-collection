var project = {
    "actual_mandays": 67.6,
    "actual_manhours": 540.77,
    "actual_start_date": 1779235200000,
    "address": "Geodipa : Enhacement Proposal",
    "classification_id": {
        "id": "Ks6JJof5sQ9r",
        "name": "Change Request"
    },
    "client_id": {
        "id": "izYfLVSDTfKt",
        "name": "PT Geo Dipa Energi (Persero)"
    },
    "code": "PROP",
    "collection_type": "MONETARY",
    "company_id": 28208,
    "created_at": 1775057033886,
    "created_by": 0,
    "current_milestone_id": {},
    "id": "lN2wUqqiKKG96",
    "ids": "lN2wUqqiKKG96",
    "is_deleted": "NO",
    "name": "Geodipa : CR Expense Management",
    "officeless_version": "1.0",
    "planned_end_date": 1784246400000,
    "planned_mandays": 89.12,
    "planned_manhours": 713,
    "planned_start_date": 1779235200000,
    "pm_id": {
        "id": "fUk4rlb9zzWXm",
        "name": "Muhammad Daffa Addien"
    },
    "project_type_id": {
        "id": "izY883QDSft",
        "name": "Custom"
    },
    "sow_mandays": 0,
    "sow_manhours": 0,
    "status_id": {
        "id": "OyIiSktJkLem",
        "name": "Dropped"
    },
    "total_project_value": 46500000,
    "updated_at": 1783590025658,
    "updated_by": 0,
    "updated_by_project_user": "UKA9XRNLQWI"
};

var statusActiveProjects = [
    "Backlog",
    "On Track",
    "On Hold Due To Commercial Issue",
    "On Hold Due To Project Dispute",
    "Potential to be Delayed",
    "Delayed",
    "Post-Deployment Testing",
    "Deploy to Production",
    "Go Live - Hypercare"
];


if (Object.keys(project).length > 0) {
    var status_name = project.status_id.name;
    var isActive = statusActiveProjects.indexOf(status_name) !== -1;

    var res = {
        "code": isActive ? 200 : 404,
        "error": !isActive,
        "data": isActive ? project : {},
        "message": isActive
            ? "Task can be created. Project status is '" + status_name + "'."
            : "Task cannot be created. Project status is '" + status_name + "', which is not an active project status."
    };
}

console.log(res);
