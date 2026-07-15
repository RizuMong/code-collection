function _log(msg) {
    console.log(msg);
};

var req = {
    body: {
        "assignee_id": {
            "id": "",
            "name": ""
        },
    }
}

var master_wbs = {
    "company_id": 28208,
    "created_at": 1777970352434,
    "created_by": 0,
    "created_by_project_user": "s6Xq9RC8Gj7N",
    "id": "8gbCZDAR7w0sa",
    "ids": "8gbCZDAR7w0sa",
    "milestone_id": {
        "id": "EwG5FeAhyxku",
        "name": "Development"
    },
    "name": "Solution Development",
    "order_number": 4,
    "updated_at": 1777970352434,
    "updated_by": 0,
    "updated_by_project_user": "s6Xq9RC8Gj7N"
};

var project = {
    "actual_mandays": 55.72,
    "actual_manhours": 445.73,
    "address": "Injourney Aviasi Pariwisata Indonesia",
    "client_id": {
        "id": "2BfqpOBYL5PD",
        "name": "PT Aviasi Pariwisata Indonesia"
    },
    "code": "INJO",
    "company_id": 28208,
    "created_at": 1775057030841,
    "created_by": 0,
    "id": "wGk8HrafpvJPd",
    "ids": "wGk8HrafpvJPd",
    "is_deleted": "NO",
    "links_and_attachments": [
        {
            "label": "Google Drive",
            "url": "https://drive.google.com/drive/folders/1RpDd8PXY1e11KbxXklY4QDp6Dx_lyfLn?usp=drive_link"
        }
    ],
    "name": "Injourney Aviasi Pariwisata Indonesia",
    "officeless_version": "2.0",
    "planned_end_date": 1780012800000,
    "planned_mandays": 67.06,
    "planned_manhours": 536.5,
    "planned_start_date": 1770249600000,
    "pm_id": {
        "id": "aCvk8b9tuNRP",
        "name": "Michelle Amara Soekamto"
    },
    "project_type_id": {
        "id": "izY883QDSft",
        "name": "Custom"
    },
    "sow_mandays": 0.25,
    "sow_manhours": 2,
    "status_id": {
        "id": "hfUQG1SBHv0R",
        "name": "Potential to be Delayed"
    },
    "total_project_value": 178055732,
    "updated_at": 1779939212761,
    "updated_by": 0,
    "updated_by_project_user": "UKA9XRNLQWI"
};

var job_position = {
    "code": "Solution Engineer",
    "company_id": 28208,
    "created_at": 1775043627542,
    "created_by": 0,
    "id": "CmlAgW1SCroQ",
    "ids": "CmlAgW1SCroQ",
    "name": "Solution Engineer",
    "role_id": {
        "id": "daCzmPz44wJW",
        "name": "Engineer"
    },
    "updated_at": 1776405492559,
    "updated_by": 0,
    "updated_by_project_user": "UKA9XRNLQWI"
}

var milestones = {
    "company_id": 28208,
    "created_at": 1775011137970,
    "created_by": 0,
    "created_by_project_user": "s6Xq9RC8Gj7N",
    "data_state": "ACTIVE",
    "description": null,
    "id": "EwG5FeAhyxku",
    "ids": "EwG5FeAhyxku",
    "name": "Development",
    "updated_at": 1777970279055,
    "updated_by": 0,
    "updated_by_project_user": "s6Xq9RC8Gj7N"
};

var wbs_detail = {
    "code": "INJO-WBS-004",
    "company_id": 28208,
    "created_at": 1779424466389,
    "created_by": 0,
    "estimate_end_date": 1782432000,
    "estimate_man_hour": 208,
    "estimate_start_date": 1780272000,
    "id": "Ks6SI7F59Qbh",
    "ids": "Ks6SI7F59Qbh",
    "job_position_id": {
        "id": "CmlAgW1SCroQ",
        "name": "Solution Engineer"
    },
    "master_wbs_id": {
        "id": "8gbCZDAR7w0sa",
        "name": "Solution Development"
    },
    "milestone_id": {
        "id": "JrvpkhTajELW",
        "name": "Development"
    },
    "project_id": {
        "id": "wGk8HrafpvJPd",
        "name": "Injourney Aviasi Pariwisata Indonesia"
    },
    "sequence": 4,
    "snapshot_tasks": [
        {
            "actual_end_date": null,
            "actual_start_date": null,
            "assigned_at": 1779424496539,
            "assigned_by": {
                "id": "aCvk8b9tuNRP",
                "name": "Michelle Amara Soekamto"
            },
            "code": "INJO-033",
            "estimate_end_date": 1776358800000,
            "estimate_start_date": 1772298000000,
            "id": "2B9AI08Y6c5Qk",
            "name": "Master Category -[Validation Logic] Visual Programming"
        },
        {
            "actual_end_date": null,
            "actual_start_date": null,
            "assigned_at": 1779424501701,
            "assigned_by": {
                "id": "aCvk8b9tuNRP",
                "name": "Michelle Amara Soekamto"
            },
            "code": "INJO-034",
            "estimate_end_date": 1776358800000,
            "estimate_start_date": 1776050363338,
            "id": "AeVTjodsO1j",
            "name": "Master Role\t[Validation Logic] Visual Programming"
        },
        {
            "actual_end_date": null,
            "actual_start_date": null,
            "assigned_at": 1779424506308,
            "assigned_by": {
                "id": "aCvk8b9tuNRP",
                "name": "Michelle Amara Soekamto"
            },
            "code": "INJO-035",
            "estimate_end_date": 1776358800000,
            "estimate_start_date": 1772298000000,
            "id": "rvlE3sjCtNl2z",
            "name": "Organization [Validation Logic] Visual Programming"
        },
        {
            "actual_end_date": null,
            "actual_start_date": null,
            "assigned_at": 1779424510983,
            "assigned_by": {
                "id": "aCvk8b9tuNRP",
                "name": "Michelle Amara Soekamto"
            },
            "code": "INJO-036",
            "estimate_end_date": 1776358800000,
            "estimate_start_date": 1775535528836,
            "id": "cEw5C3suitafI",
            "name": "Employee Management [Backend Logic] Visual Programming & Vaildation"
        },
        {
            "actual_end_date": null,
            "actual_start_date": null,
            "assigned_at": 1779424526578,
            "assigned_by": {
                "id": "aCvk8b9tuNRP",
                "name": "Michelle Amara Soekamto"
            },
            "code": "INJO-038",
            "estimate_end_date": 1776358800000,
            "estimate_start_date": 1775528065592,
            "id": "uhfQSWR2oYxB",
            "name": "Access Management [UI & Backend Logic] Access Management & Validation"
        },
        {
            "actual_end_date": null,
            "actual_start_date": null,
            "assigned_at": 1779424534068,
            "assigned_by": {
                "id": "aCvk8b9tuNRP",
                "name": "Michelle Amara Soekamto"
            },
            "code": "INJO-039",
            "estimate_end_date": 1776358800000,
            "estimate_start_date": 1775473491751,
            "id": "PuhptMQNnDMh5",
            "name": "Master App\t[UI & Backend Logic] App Configuration within the system"
        },
        {
            "actual_end_date": null,
            "actual_start_date": null,
            "assigned_at": 1779424539227,
            "assigned_by": {
                "id": "aCvk8b9tuNRP",
                "name": "Michelle Amara Soekamto"
            },
            "code": "INJO-040",
            "estimate_end_date": 1776358800000,
            "estimate_start_date": 1775449170908,
            "id": "31Om8wDW9pKE",
            "name": "Master Menu\t[UI & Backend Logic] Menu Configuration within the system"
        }
    ],
    "task_name": "Solution Development",
    "updated_at": 1779424539251,
    "updated_by": 0
};

var authenticate = {
    "code": 200,
    "data": {
        "email": "rizki.haddi@mekari.com",
        "id_token": "Z31EQxdM1UwC",
        "job_position_id": {
            "id": "bq0ujKLZYXnr",
            "name": "Senior Solution Engineer"
        },
        "join_date": 1672160400000,
        "name": "Rizki Haddi Prayoga",
        "organization_id": {
            "id": "tSmKRllyCJgg",
            "name": "Solution Implementation (VAS)"
        },
        "role_id": {
            "id": "FpQnsVBGNXkL",
            "name": "Senior VAS"
        },
        "timestamp": 1779937998963,
        "user_id": "hfGTJvgBCv0g"
    },
    "error": false,
    "message": "Authentication successful."
}

// validate if data relation not found
if (Object.keys(project).length === 0) {
    res = {
        "code": 404,
        "error": true,
        "data": {},
        "message": "Project not found"
    };

    _log(res);
    _response_status_code = 400;
    _stop = true;
};

if (Object.keys(master_wbs).length === 0) {
    res = {
        "code": 404,
        "error": true,
        "data": {},
        "message": "Master WBS not found"
    };

    _log(res);
    _response_status_code = 400;
    _stop = true;
};

if (Object.keys(job_position).length === 0) {
    res = {
        "code": 404,
        "error": true,
        "data": {},
        "message": "Job Position not found"
    };

    _log(res);
    _response_status_code = 400;
    _stop = true;
};

if (Object.keys(milestones).length === 0) {
    res = {
        "code": 404,
        "error": true,
        "data": {},
        "message": "Milestones not found"
    };

    _log(res);
    _response_status_code = 400;
    _stop = true;
};

// assignment logs
// var assignment_logs = wbs_detail.assignment_logs;

// if (wbs_detail.assignment_logs.length === 0) {
//     assignment_logs.push({
//         from_assignment: {
//             id: wbs_detail.assignee_id.id,
//             name: wbs_detail.assignee_id.name
//         },
//         to_assignment: {
//             id: req.body.assignee_id.id,
//             name: req.body.assignee_id.name
//         },
//         assigned_by: {
//             id: authenticate.data.user_id,
//             name: authenticate.data.name
//         },
//         assigned_at: Date.now()
//     });
// } else if (
//     req.body &&
//     req.body.assignee_id &&
//     req.body.assignee_id.id &&
//     wbs_detail.assignee_id.id !== req.body.assignee_id.id
// ) {
//     assignment_logs.push({
//         from_assignment: {
//             id: wbs_detail.assignee_id.id,
//             name: wbs_detail.assignee_id.name
//         },
//         to_assignment: {
//             id: req.body.assignee_id.id,
//             name: req.body.assignee_id.name
//         },
//         assigned_by: {
//             id: authenticate.data.user_id,
//             name: authenticate.data.name
//         },
//         assigned_at: Date.now()
//     });
// };

// change logs
var change_logs = wbs_detail.change_logs || [];

var updated_by = {
    id: authenticate.data.user_id,
    name: authenticate.data.name
};

function pushLog(field, from, to, type) {
    change_logs.push({
        field: field,
        movement_type: type,
        from: from,
        to: to,
        updated_by: updated_by,
        updated_at: Date.now()
    });
}

// assignee change
if (
    req.body &&
    req.body.assignee_id &&
    req.body.assignee_id.id &&
    wbs_detail.assignee_id &&
    wbs_detail.assignee_id.id !== req.body.assignee_id.id
) {
    pushLog(
        "assignee_id",
        {
            id: wbs_detail.assignee_id.id,
            name: wbs_detail.assignee_id.name
        },
        req.body.assignee_id,
        "assign"
    );
}

// start date change
if (
    req.body &&
    req.body.estimate_start_date &&
    wbs_detail.estimate_start_date !== req.body.estimate_start_date
) {
    pushLog(
        "estimate_start_date",
        wbs_detail.estimate_start_date,
        req.body.estimate_start_date,
        "change_date"
    );
}

// end date change
if (
    req.body &&
    req.body.estimate_end_date &&
    wbs_detail.estimate_end_date !== req.body.estimate_end_date
) {
    pushLog(
        "estimate_end_date",
        wbs_detail.estimate_end_date,
        req.body.estimate_end_date,
        "change_date"
    );
};

console.log(change_logs);