var wbs_in_progress = {
    "actual_end_date": 0,
    "actual_start_date": 0,
    "change_logs": [],
    "code": "INJO-WBS-001",
    "company_id": 28208,
    "created_at": 1779423689790,
    "created_by": 0,
    "estimate_end_date": 1770249600,
    "estimate_man_hour": 4.8,
    "estimate_start_date": 1770249600,
    "id": "fUK4OAA9i7WX3",
    "ids": "fUK4OAA9i7WX3",
    "job_position_id": {
        "id": "N2hZ0yIzkXQa",
        "name": "System Analyst"
    },
    "mandays": 0.6,
    "master_wbs_id": {
        "id": "lN2sYXoi9G95",
        "name": "Project Kickoff"
    },
    "milestone_id": {
        "id": "oPujcGolBrom",
        "name": "Project Initiation"
    },
    "project_id": {
        "id": "wGk8HrafpvJPd",
        "name": "Injourney Aviasi Pariwisata Indonesia"
    },
    "project_id_text": "wGk8HrafpvJPd",
    "sequence": 1,
    "snapshot_tasks": [],
    "status_id": {
        "id": "bqTJ0EmZYnm1",
        "name": "Done"
    },
    "task_name": "Project Kickoff",
    "updated_at": 1783913085520,
    "updated_by": 0
}



if (Object.keys(wbs_in_progress).length > 0 && wbs_in_progress.status_id.name === "In Progress") {
    var wbs_progress_name = wbs_in_progress.task_name;
    var res = {
        "code": 409,
        "error": true,
        "data": {},
        "message": "Cannot set this WBS to In Progress. WBS '" + wbs_progress_name + "' is still In Progress, please complete it first."
    };

    // _log(res);
    // _response_status_code = 409;
    // _stop = true;
};

console.log(res);