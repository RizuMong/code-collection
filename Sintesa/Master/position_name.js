var req = {
    "company_id": 28364,
    "created_at": 1787424162526,
    "created_by": 0,
    "created_by_project_user": "GkABdZGUXcJW",
    // "domain": "Sustainability",
    "entity_id": {
        "id": "AeXHY52sg1Db",
        "name": "QA-TEST - Branch Renamed"
    },
    "ids": "yIlxquLrW3sp",
    "role": "EXECUTIVE",
    "status": "Active",
    "updated_at": 1787424162526,
    "updated_by": 0,
    "updated_by_project_user": "GkABdZGUXcJW"
};

// Declare
var position_name = req.role + (req.domain ? " " + req.domain : "") + " - " + req.entity_id.name;

console.log(position_name);