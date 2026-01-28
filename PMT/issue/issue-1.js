var task_list_create = {
    "category": "QA",
    "company_id": 14,
    "company_project": {
        "id": "d_-oyBuIg",
        "name": "Project Internal Mekari"
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
    "created_at": 1769500044672,
    "created_by": 194647,
    "created_by_project_user": "",
    "cx_assignment": null,
    "detail_requirement": {
        "blocks": [
            {
                "data": {
                    "text": "https://docs.google.com/spreadsheets/d/1NCmcyvzgoyBPkaRag4PdDw_fMC2PGvZCnJzgk-RUMqw/edit?usp=sharing"
                },
                "id": "uszSsEMbmo",
                "type": "paragraph"
            },
            {
                "data": {
                    "text": "https://drive.google.com/file/d/1JXIuKqzxSkzKUiUeCz5tHSFEnCPORZd5/view?usp=sharing"
                },
                "id": "yZOPwpK9oI",
                "type": "paragraph"
            }
        ],
        "time": 1769500044051,
        "version": "2.26.5"
    },
    "dev_assignment": null,
    "end_date": null,
    "estimate_manhour": null,
    "estimate_manhour_cx": null,
    "estimate_manhour_pm": null,
    "estimate_manhour_sa": null,
    "feature": "DMS Prebuild - Document Approval",
    "id_sprint_task": {
        "id": "Fp5znclG3XHz",
        "name": "2025-SPRINT-2 Project Internal Mekari"
    },
    "id_sprint_task_list": "QRgjwqrAW4uQ",
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
        "company_user_id": 194647,
        "email": "habib.akbar@mekari.com",
        "name": "Habib Akbar Wibowo ",
        "photo": ""
    },
    "qa_estimate_manhour": 10,
    "related_task": [],
    "release_on_version": "New Task",
    "start_date": null,
    "status_string": "",
    "system_analyst": null,
    "task_type": "",
    "updated_at": 1769500044672,
    "updated_by": 194647,
    "updated_by_project_user": "",
    "value_type": "Unbillable"
}

var detail_task = {
    "category": "QA",
    "company_id": 14,
    "company_project": {
        "id": "d_-oyBuIg",
        "name": "Project Internal Mekari"
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
    "created_at": 1769500044672,
    "created_by": 194647,
    "created_by_project_user": "",
    "cx_assignment": null,
    "detail_requirement": {
        "blocks": [
            {
                "data": {
                    "text": "https://docs.google.com/spreadsheets/d/1NCmcyvzgoyBPkaRag4PdDw_fMC2PGvZCnJzgk-RUMqw/edit?usp=sharing"
                },
                "id": "uszSsEMbmo",
                "type": "paragraph"
            },
            {
                "data": {
                    "text": "https://drive.google.com/file/d/1JXIuKqzxSkzKUiUeCz5tHSFEnCPORZd5/view?usp=sharing"
                },
                "id": "yZOPwpK9oI",
                "type": "paragraph"
            }
        ],
        "time": 1769500044051,
        "version": "2.26.5"
    },
    "dev_assignment": null,
    "end_date": null,
    "estimate_manhour": null,
    "estimate_manhour_cx": null,
    "estimate_manhour_pm": null,
    "estimate_manhour_sa": null,
    "feature": "DMS Prebuild - Document Approval",
    "id": "QRgjwqrAW4uQ",
    "id_sprint_task": {
        "id": "Fp5znclG3XHz",
        "name": "2025-SPRINT-2 Project Internal Mekari"
    },
    "id_sprint_task_list": "QRgjwqrAW4uQ",
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
        "company_user_id": 194647,
        "email": "habib.akbar@mekari.com",
        "name": "Habib Akbar Wibowo ",
        "photo": ""
    },
    "qa_estimate_manhour": 10,
    "related_task": [],
    "release_on_version": "New Task",
    "start_date": null,
    "status_string": "",
    "system_analyst": null,
    "task_type": "",
    "updated_at": 1769500044672,
    "updated_by": 194647,
    "updated_by_project_user": "",
    "value_type": "Unbillable"
}

if (task_list_create.category == "QA") {
    var Taskstatus = {
        "background": "#bdb6ec",
        "font_color": "#5748BC",
        "name": "Waiting QA"
    }
} else {
    var Taskstatus = {
        "background": "#e6e6e6",
        "font_color": "#474747",
        "name": "Backlog"
    }
}



function getCurrentTimeMillis() {
    return new Date().getTime();
}

function calculateTotalDuration(intervals) {
    var totalDuration = 0;
    for (var i = 0; i < intervals.length; i++) {
        if (intervals[i] && typeof intervals[i].duration === 'number') {
            totalDuration += intervals[i].duration;
        }
    }
    return totalDuration;
}

var DevPauseTimer;

if (
  detail_task.dev_timer &&
  detail_task.dev_timer.state === "start" &&
  detail_task.dev_timer.log &&
  detail_task.dev_timer.log.length > 0
) {
  var dataTimer = detail_task.dev_timer.log;
  var lastIndex = dataTimer.length - 1;
  var now = getCurrentTimeMillis();

  dataTimer[lastIndex].end_time = now;
  dataTimer[lastIndex].duration =
    dataTimer[lastIndex].end_time - dataTimer[lastIndex].start_time;

  DevPauseTimer = {
    "duration": calculateTotalDuration(dataTimer),
    "log": dataTimer,
    "state": "pause"
  };
} else {
  DevPauseTimer = detail_task.dev_timer || null;
};

console.log(DevPauseTimer);