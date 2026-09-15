var start_date = 1788714000000;
var end_date = 1789750799999;


var get_sprints = [
    {
        "company_id": 28208,
        "created_at": 1775471352704,
        "created_by": 0,
        "end_date": 1789750799999,
        "id": "daCiC7g4QRwJt",
        "ids": "daCiC7g4QRwJt",
        "movement_logs": [
            {
                "from_status": "ACTIVE",
                "moved_at": 1788991206727,
                "moved_by_user": {
                    "id": "XXX",
                    "name": "Scheduler PMT"
                },
                "to_status": "ACTIVE"
            }
        ],
        "name": "SPRINT-2026-18",
        "sprint_number": 18,
        "sprint_year": 2026,
        "start_date": 1788714000000,
        "status": "ACTIVE",
        "updated_at": 1789035175795,
        "updated_by": 0
    },
    {
        "company_id": 28208,
        "created_at": 1775471352704,
        "created_by": 0,
        "end_date": 1798217999999,
        "id": "daCiC7g4QbwuP",
        "ids": "daCiC7g4QbwuP",
        "name": "SPRINT-2026-25",
        "sprint_number": 25,
        "sprint_year": 2026,
        "start_date": 1797181200000,
        "status": "PLANNED",
        "updated_at": 1789035175971,
        "updated_by": 0
    },
];

// Filter get_sprints by start_date & end_date
function filterSprints(sprints, start_date, end_date) {
    return sprints.filter(function (s) {
        return s.start_date <= end_date && s.end_date >= start_date;
    });
}

var filtered_sprints = filterSprints(get_sprints, start_date, end_date);
console.log(filtered_sprints);