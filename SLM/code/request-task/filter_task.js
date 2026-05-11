var project_id = "XXXX";

var user = {
    "company_id": 28208,
    "created_at": 1775043820325,
    "created_by": 0,
    "data_state": "ACTIVE",
    "email": "rizki.haddi@mekari.com",
    "id": "hfGTJvgBCv0g",
    "ids": "hfGTJvgBCv0g",
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
    "squad_name": null,
    "updated_at": 1776941844442,
    "updated_by": 0,
    "updated_by_project_user": "UKA9XRNLQWI"
};

var user_role = {
    "company_id": 28208,
    "created_at": 1776838006024,
    "created_by": 0,
    "created_by_project_user": "UKA9XRNLQWI",
    "data_state": "ACTIVE",
    "description": "Senior SE, SA n QA",
    "id": "FpQnsVBGNXkL",
    "ids": "FpQnsVBGNXkL",
    "is_admin": true,
    "name": "Senior VAS",
    "updated_at": 1776941804507,
    "updated_by": 0,
    "updated_by_project_user": "UKA9XRNLQWI"
};

var user_job_position = {
    "code": "Senior Solution Engineer",
    "company_id": 28208,
    "created_at": 1775043627294,
    "created_by": 0,
    "id": "bq0ujKLZYXnr",
    "ids": "bq0ujKLZYXnr",
    "name": "Senior Solution Engineer",
    "role_id": {
        "id": "FpQnsVBGNXkL",
        "name": "Senior VAS"
    },
    "updated_at": 1776941815523,
    "updated_by": 0,
    "updated_by_project_user": "UKA9XRNLQWI"
};

var user_project_manager = {};

var filter = {
    _filter_version: 2
};

var where = {};

where["requested_by.id"] = user.ids;

if (project_id) {
    where["project_id.id"] = project_id;
};

if (task_id) {
  where["ids"] = task_id;
};

if (assignee_id) {
  where["assignee_id.id"] = assignee_id;
}

if (work_item_id) {
  where["work_item_id.id"] = work_item_id;
}

if (epic_id) {
  where["epic_id.id"] = epic_id;
}

if (story_id) {
  where["story_id.id"] = story_id;
}

var isPM = Object.keys(user_project_manager).length !== 0;
var isAdmin = user_role && user_role.is_admin === true;

var canViewAll = isPM || isAdmin;

if (!canViewAll) {
    filter.where_is_and = where;
} else {
    filter.where_is_and = {
        "project_id.id": project_id
    };
};

console.log(filter);