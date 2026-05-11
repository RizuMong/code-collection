// var auth_id = "";
// var type = "";

// try {
//   if (!req || !req.query || !req.query.auth) {
//     throw new Error("Require 'auth'");
//   }

//   if (!req || !req.query || !req.query.type) {
//     throw new Error("Require 'type'");
//   }

//   auth_id = req.query.auth[0];
//   type = req.query.type[0];
    
//   if (type !== "access_token" && type !== "refresh_token") {
//     throw new Error("Invalid 'type' value");
//   }
// } catch (err) {
//   res = {
//     error: true,
//     code: 400,
//     message: err.message || "Unknown error",
//     data: {}
//   };

//   _response_status_code = 400;
// //   _stopAutomation();
// //   _log(res);
// };

var task = {
            "actual_manhour": 0,
            "category": "QA",
            "company_id": 14,
            "company_project": {
                "id": "pQsfrrPkelFw",
                "name": "Coca Cola Europacific Partners PIP Project"
            },
            "company_sprint": {
                "id": "AeHfvK9sG1j2",
                "name": "2026-SPRINT-3"
            },
            "company_unit": {
                "id": "",
                "name": ""
            },
            "company_unit_member": {
                "id": "",
                "name": ""
            },
            "count": 1,
            "created_at": 1769743524456,
            "created_by": 187373,
            "created_by_project_user": "",
            "cx_assignment": null,
            "detail_requirement": {
                "blocks": [
                    {
                        "data": {
                            "text": "Testing Bugs and Adjustment"
                        },
                        "id": "fePwm7Q6uD",
                        "type": "paragraph"
                    }
                ],
                "time": 1769743524160,
                "version": "2.26.5"
            },
            "dev_assignment": {},
            "end_date": 1771520400000,
            "estimate_manhour": 0,
            "estimate_manhour_cx": null,
            "estimate_manhour_pm": null,
            "estimate_manhour_qa": 40,
            "estimate_manhour_sa": null,
            "feature": "Retesting Bugs and Adjustment",
            "id": "B9Uizy2jMo1K",
            "id_sprint_task": {
                "id": "oPcJWO8ldroh",
                "name": "2025-SPRINT-3 Coca Cola Europacific Partners PIP Project"
            },
            "id_sprint_task_list": "B9Uizy2jMo1K",
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
            "qa_assignment": {
                "company_user_id": 180388,
                "email": "amanda.putridana@mekari.com",
                "name": "Amanda Putridana ",
                "photo": ""
            },
            "qa_estimate_manhour": 40,
            "qa_timer": {
                "duration": 113793305,
                "log": [
                    {
                        "duration": 35113761,
                        "end_time": 1770809404781,
                        "start_time": 1770774291020
                    },
                    {
                        "duration": 17117399,
                        "end_time": 1770827404117,
                        "start_time": 1770810286718
                    },
                    {
                        "duration": 35109335,
                        "end_time": 1770895804475,
                        "start_time": 1770860695140
                    },
                    {
                        "duration": 26436523,
                        "end_time": 1771235353678,
                        "start_time": 1771208917155
                    },
                    {
                        "duration": 16287,
                        "end_time": 1771902169193,
                        "start_time": 1771902152906
                    }
                ],
                "state": "stop"
            },
            "related_task": [],
            "release_on_version": "New Task",
            "sprint_company": {
                "id": "AeHfvK9sG1j2",
                "name": "2026-SPRINT-3"
            },
            "start_date": 1770774291020,
            "status": {
                "background": "#76f9ad",
                "font_color": "#00B64B",
                "name": "Done"
            },
            "status_sla": {
                "background": "#d86f6f",
                "font_color": "#550202",
                "name": "NOT MEET"
            },
            "status_sla_string": "NOT MEET",
            "status_string": "Done",
            "system_analyst": null,
            "task_type": "",
            "updated_at": 1772443273784,
            "updated_by": 0,
            "updated_by_project_user": "",
            "value_type": "Billable"
        }

var assignee_email = "";
var timer = 0;
var estimate_manhour = 0;

// QA
if (task.qa_assignment) {
    assignee_email = task.qa_assignment.email;
    timer = (task.qa_timer && task.qa_timer.duration) ? task.qa_timer.duration : 0;
    estimate_manhour = task.estimate_manhour_qa || 0;
};

console.log(assignee_email)