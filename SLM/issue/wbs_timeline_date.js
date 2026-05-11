var project_milestone = {
    "actual_end_date": 1780099200,
    "actual_start_date": 1775001600,
    "company_id": 28208,
    "created_at": 1773192258074,
    "created_by": 0,
    "id": "1OyaawG7EL39",
    "ids": "1OyaawG7EL39",
    "master_milestone_id": {
        "id": "SxiCkCpIIss",
        "name": "Training of Trainers"
    },
    "notes": "Training of Trainers",
    "planned_end_date": 1780099200,
    "planned_start_date": 1775001600,
    "project_id": {
        "id": "cEjPlmAuQuaLs",
        "name": "Project Internal Mekari"
    },
    "updated_at": 1773192258074,
    "updated_by": 0
};

var req = {
    "end_date": 1780099200,
    "milestone": {
        "id": "SxiCkCpIIss",
        "name": "Training of Trainers"
    },
    "project": {
        "id": "cEjPlmAuQuaLs",
        "name": "Project Internal Mekari"
    },
    "start_date": 1775001600
};

var is_updated_date = false;

if (
  req.start_date > project_milestone.planned_start_date ||
  req.end_date > project_milestone.planned_end_date
) {
  is_updated_date = true;
}