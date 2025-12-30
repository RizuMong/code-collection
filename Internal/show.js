var task_list = [
    {
        "category": "Engineer Only",
        "company_id": 14,
        "company_project": {
            "id": "pQsfrrPkelFw",
            "name": "Coca Cola Europacific Partners PIP Project"
        },
        "company_sprint": {
            "id": "OySpY6uJNLDx",
            "name": "2025-SPRINT-26"
        },
        "company_unit": {
            "id": "VtFfIZeSg",
            "name": "Solution Engineer"
        },
        "company_unit_member": {
            "id": "n3NzxWeSg",
            "name": "Ismail  Faizal"
        },
        "count": 1,
        "created_at": 1766412423236,
        "created_by": 187373,
        "created_by_project_user": "",
        "cx_assignment": null,
        "de_timer_log": [
            {
                "duration": 4891608,
                "end_time": 1766489405731,
                "start_time": 1766484514123
            },
            {
                "duration": 1875102,
                "end_time": 1766498680175,
                "start_time": 1766496805073
            },
            {
                "duration": 4615587,
                "end_time": 1766547882612,
                "start_time": 1766543267025
            }
        ],
        "detail_requirement": {
            "blocks": [
                {
                    "data": {
                        "text": "Bug Fixing"
                    },
                    "id": "0001",
                    "type": "paragraph"
                }
            ],
            "time": 1766412422265,
            "version": "2.26.5"
        },
        "dev_assignment": {
            "company_user_id": 177684,
            "email": "ismail.faizal@mekari.com",
            "name": "Ismail  Faizal",
            "photo": ""
        },
        "dev_timer": {
            "duration": 11382297,
            "log": [
                {
                    "duration": 4891608,
                    "end_time": 1766489405731,
                    "start_time": 1766484514123
                },
                {
                    "duration": 1875102,
                    "end_time": 1766498680175,
                    "start_time": 1766496805073
                },
                {
                    "duration": 4615587,
                    "end_time": 1766547882612,
                    "start_time": 1766543267025
                }
            ],
            "state": "pause"
        },
        "dev_timer_start": 1766484514123,
        "end_date": 1766682000000,
        "estimate_manhour": 8,
        "estimate_manhour_cx": null,
        "estimate_manhour_pm": null,
        "estimate_manhour_qa": 1.6,
        "estimate_manhour_sa": null,
        "feature": "Bug Fixing",
        "id": "oPcbjsTlqr5Y",
        "id_sprint_task": {
            "id": "wGp4bPufpJcY",
            "name": "2025-SPRINT-26 Coca Cola Europacific Partners PIP Project"
        },
        "id_sprint_task_list": "oPcbjsTlqr5Y",
        "is_activity": false,
        "pm_assignment": null,
        "priority": "Medium",
        "product_module": {
            "id": "",
            "name": ""
        },
        "project_milestone": {
            "id": "",
            "name": ""
        },
        "qa_assignment": null,
        "qa_estimate_manhour": 1.6,
        "related_task": [],
        "release_on_version": "New Task",
        "sprint_company": {
            "id": "OySpY6uJNLDx",
            "name": "2025-SPRINT-26"
        },
        "start_date": 1765731600000,
        "status": {
            "background": "#e6e6e6",
            "font_color": "#474747",
            "name": "Backlog"
        },
        "status_sla": {
            "background": "#56cd58",
            "font_color": "#145502",
            "name": "MEET"
        },
        "status_sla_string": "MEET",
        "status_string": "Backlog",
        "system_analyst": null,
        "updated_at": 1766547885960,
        "updated_by": 177684,
        "updated_by_project_user": ""
    }
];

var year = "2025";
var employee_id = "n3NzxWeSg";
var project_id = "";
var role_id = "";
var get_role = {}

var company_unit_member = {
            "employee": {
            "company_user_id": 177684,
            "email": "ismail.faizal@mekari.com",
            "name": "Ismail  Faizal",
            "photo": ""
        },
        "employee_email": "ismail.faizal@mekari.com",
        "employee_name": "Ismail  Faizal",
};

var getPlanning = {
    "company_id": 14,
        "created_at": 1762415845379,
        "created_by": 163708,
        "created_by_project_user": "",
        "id": "rvoheFvCFli",
        "ids": "rvoheFvCFli",
        "name": "Planning 2025",
        "total_capacity": 925,
        "total_plan": 890,
        "updated_at": 1765263990566,
        "updated_by": 190907,
        "updated_by_project_user": "",
        "year": 2025,
        "year_id": {
            "id": "darNKu646wJD",
            "name": 2025
        }
}


var yearNumber = Number(year)

    // Hitung timestamp untuk start of year (tanggal 1 bulan 1)
    // dan timestamp untuk end year (tanggal 1 bulan 1 tahun selanjutnya)
    var startYearTimestamp = new Date(yearNumber, 0, 1).getTime()
    var endYearTimestamp = new Date(yearNumber + 1, 0, 1).getTime();

// ===============================
// INPUT CONTEXT
// ===============================
var employeeEmail = company_unit_member &&
    company_unit_member.employee_email
    ? company_unit_member.employee_email
    : "";

var roleName = get_role && get_role.company_unit
    ? get_role.company_unit.name
    : "";


// ===============================
// ROLE → ASSIGNMENT MAP
// ===============================
var roleAssignmentMap = {
    "Solution Engineer": "dev_assignment",
    "UI Solution Engineer": "dev_assignment",
    "System Analyst": "system_analyst",
    "Quality Testing": "qa_assignment"
};


// ===============================
// EMPLOYEE VALIDATION (EMAIL BASED)
// ===============================
function isSameEmployee(assignment, employeeEmail) {
    if (!employeeEmail) return true; // no filter
    if (!assignment || !assignment.email) return false;
    return assignment.email === employeeEmail;
}


// ===============================
// MAIN FUNCTION
// ===============================
function calculatePlanAndActual(
    tasksArray,
    startYearTimestamp,
    endYearTimestamp,
    project_id
) {
    project_id = project_id || "";

    var monthlyData = [];
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    // init 12 months
    for (var i = 0; i < 12; i++) {
        monthlyData.push({
            name: monthNames[i],
            month: i,
            estimatedManhours: 0,
            actualManhours: 0,
            plan: 0,
            actual: 0,
            planningId: getPlanning.ids
        });
    }

    var assignmentKey = roleAssignmentMap[roleName];

    // ===============================
    // PROCESS TASKS
    // ===============================
    for (var i = 0; i < tasksArray.length; i++) {
        var task = tasksArray[i];
        var createdAt = task.created_at;

        if (!createdAt || createdAt < startYearTimestamp || createdAt >= endYearTimestamp) {
            continue;
        }

        // PROJECT FILTER
        if (project_id) {
            var projectId = task.company_project ? task.company_project.id : "";
            if (projectId !== project_id) continue;
        }

        var taskDate = new Date(createdAt);
        var month = taskDate.getMonth();

        var totalEstimatedHours = 0;
        var totalActualHours = 0;

        // ===============================
        // ESTIMATED HOURS
        // ===============================

        // DEV
        if (typeof task.estimate_manhour === "number") {
            if (
                (!roleName || assignmentKey === "dev_assignment") &&
                isSameEmployee(task.dev_assignment, employeeEmail)
            ) {
                totalEstimatedHours += task.estimate_manhour;
            }
        }

        // SYSTEM ANALYST
        if (typeof task.estimate_manhour_sa === "number") {
            if (
                (!roleName || assignmentKey === "system_analyst") &&
                isSameEmployee(task.system_analyst, employeeEmail)
            ) {
                totalEstimatedHours += task.estimate_manhour_sa;
            }
        }

        // QA
        if (typeof task.estimate_manhour_qa === "number") {
            if (
                (!roleName || assignmentKey === "qa_assignment") &&
                isSameEmployee(task.qa_assignment, employeeEmail)
            ) {
                totalEstimatedHours += task.estimate_manhour_qa;
            }
        }

        // CX (kalau ada)
        if (typeof task.estimate_manhour_cx === "number") {
            if (
                (!roleName || assignmentKey === "cx_assignment") &&
                isSameEmployee(task.cx_assignment, employeeEmail)
            ) {
                totalEstimatedHours += task.estimate_manhour_cx;
            }
        }

        // ===============================
        // ACTUAL HOURS
        // ===============================

        if (
            task.dev_timer &&
            typeof task.dev_timer.duration === "number" &&
            (!roleName || assignmentKey === "dev_assignment") &&
            isSameEmployee(task.dev_assignment, employeeEmail)
        ) {
            totalActualHours += task.dev_timer.duration / 3600000;
        }

        if (
            task.sa_timer &&
            typeof task.sa_timer.duration === "number" &&
            (!roleName || assignmentKey === "system_analyst") &&
            isSameEmployee(task.system_analyst, employeeEmail)
        ) {
            totalActualHours += task.sa_timer.duration / 3600000;
        }

        if (
            task.qa_timer &&
            typeof task.qa_timer.duration === "number" &&
            (!roleName || assignmentKey === "qa_assignment") &&
            isSameEmployee(task.qa_assignment, employeeEmail)
        ) {
            totalActualHours += task.qa_timer.duration / 3600000;
        }

        monthlyData[month].estimatedManhours += totalEstimatedHours;
        monthlyData[month].actualManhours += totalActualHours;
    }

    // ===============================
    // CONVERT TO MANDAYS
    // ===============================
    function round2(num) {
        return Math.round(num * 100) / 100;
    }

    for (var i = 0; i < 12; i++) {
        monthlyData[i].plan = round2(monthlyData[i].estimatedManhours / 8);
        monthlyData[i].actual = round2(monthlyData[i].actualManhours / 8);
    }

    return monthlyData;
}


var plan_actual_by_month = calculatePlanAndActual(
    task_list,
    startYearTimestamp,
    endYearTimestamp,
    project_id || null,
    employeeEmail || null,
    roleName || null
);

console.log(plan_actual_by_month);