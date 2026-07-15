var detail_request_task = {
    "approval_logs": [
        {
            "job_position_id": {
                "group": "Solution Engineer",
                "id": "bq0ujKLZYXnr",
                "level": 2,
                "name": "Senior Solution Engineer"
            },
            "request_id": "vlN37tzmo0zry",
            "status": "APPROVED",
            "user_id": {
                "id": "jFL7txVwnpZj",
                "name": "Muhammad Rizqy Al Faris"
            }
        }
    ],
    "approval_status": "APPROVED",
    "approved_at": 1782211641845,
    "approved_by_user": {},
    "asessment_type": "",
    "assignee_id": {
        "id": "jFL7txVwnpZj",
        "name": "Muhammad Rizqy Al Faris"
    },
    "assignment_logs": [
        {
            "assigned_at": 1782209740399,
            "assigned_by": {
                "id": "fUKWkv39iWnz",
                "name": "Ridho Bagus Ekasanjaya"
            },
            "from_assignment": {},
            "to_assignment": {
                "id": "jFL7txVwnpZj",
                "name": "Muhammad Rizqy Al Faris"
            }
        }
    ],
    "blocked_by_task_ids": [],
    "child_tasks": [],
    "company_id": 28208,
    "created_at": 1782209740461,
    "created_by": 0,
    "description": "<p>111132208</p><p></p><p>Company: Geodipa</p><p>Modul: Expense Management =&gt; Menu: PJUM<br>﻿Judul: Risk Award<br>﻿Req No: 001PJUM/PST.65/2026<br>﻿Deskripsi: Dear tim expense mohon dibantu untuk case ini , pada barcode ini tercantum P Thariq Purnama sebagai Head of Accounting Division. Kebetulan beliau menjabat untuk 2 posisi sebagai Head of Accounting Division dan PLT Head Of Risk Management DIV . Mau minta tolong untuk barcode ini jabatan diganti ke PLT Head Of Risk Management. Karena PUM&amp;PJUM dari Div Risk Management. Terima kasih</p><p></p><p>field: <span style=\"color: rgb(163, 21, 21);\">card_pjum_attachment</span></p>",
    "epic_id": {
        "id": "",
        "name": ""
    },
    // "estimate_end_date": 1782172800000,
    "estimate_man_hour": 2,
    // "estimate_start_date": 1782172800000,
    "id": "Z31LQ67MEUL",
    "ids": "Z31LQ67MEUL",
    "is_project": "YES",
    "movement_logs": [
        {
            "from_status": null,
            "moved_at": 1782209740399,
            "moved_by_user": {
                "id": "fUKWkv39iWnz",
                "name": "Ridho Bagus Ekasanjaya"
            },
            "to_status": {
                "id": "",
                "name": ""
            }
        }
    ],
    "name": "Geodipa - Patching Data",
    "priority": "P1",
    "project_id": {
        "id": "qT4vs803g1WX",
        "name": "Q2 2026 - Retention Client"
    },
    "requested_by": {
        "id": "fUKWkv39iWnz",
        "name": "Ridho Bagus Ekasanjaya"
    },
    "sprint_number": 12,
    "sprint_year": 2026,
    "status_id": {
        "id": "",
        "name": ""
    },
    "story_id": {
        "id": "",
        "name": ""
    },
    "task_billable_type": "UNBILLABLE",
    "task_category": "NO_CODE",
    "task_type": "FAST_TRACK_RETENTION",
    "updated_at": 1782211642007,
    "updated_by": 0,
    "work_item_id": {
        "id": "",
        "name": ""
    }
};

function secondsToMilliseconds(sec) {
  return sec * 1000;
};

var estimate_end_date = 0;
var estimate_start_date = 0;

var data_sprint = {
    // "company_id": 28208,
    // "created_at": 1775471352704,
    // "created_by": 0,
    // "end_date": 1798217999,
    // "id": "daCiC7g4QbwuP",
    // "ids": "daCiC7g4QbwuP",
    // "name": "SPRINT-2026-25",
    // "sprint_number": 12,
    // "sprint_year": 2026,
    // "start_date": 1797206400,
    // "status": "PLANNED",
    // "updated_at": 1776656769912,
    // "updated_by": 0
};


var estimate_start_date = 0;
var estimate_end_date = 0;

var hasEstimateDate = detail_request_task.estimate_start_date && detail_request_task.estimate_end_date;
var hasSprint = data_sprint && data_sprint.start_date && data_sprint.end_date;

if (hasEstimateDate) {
    // 2. pakai estimate date dari task
    estimate_start_date = detail_request_task.estimate_start_date;
    estimate_end_date = detail_request_task.estimate_end_date;
} else if (hasSprint) {
    // 1. estimate kosong, ambil dari sprint
    estimate_start_date = secondsToMilliseconds(data_sprint.start_date);
    estimate_end_date = secondsToMilliseconds(data_sprint.end_date);
}
// 3. kalau estimate kosong dan sprint kosong, tetap 0

console.log({
    estimate_end_date: estimate_end_date,
    estimate_start_date: estimate_start_date
});


req.body.sprint_number
req.body.sprint_year