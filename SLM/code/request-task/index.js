function _log(msg) {
    console.log(msg);
};

var req = {
    "query": {
        "assignee_id": [
            "HZqNEGSVwt0d"
        ]
    }
}

var user_project_manager = {};
var user_role = {
    "company_id": 28208,
    "created_at": 1763867257351,
    "created_by": 0,
    "data_state": "ACTIVE",
    "description": "All Access Allowed",
    "id": "jFLMj3Sw8pDE",
    "ids": "jFLMj3Sw8pDE",
    "is_admin": true,
    "name": "Admin",
    "updated_at": 1772553202570,
    "updated_by": 0,
    "updated_by_project_user": "7Jy9G9DdwDi"

    // "company_id": 28208,
    // "created_at": 1763867257351,
    // "created_by": 0,
    // "data_state": "ACTIVE",
    // "description": "Engineer",
    // "id": "jFLMj3Sw8pDE",
    // "ids": "jFLMj3Sw8pDE",
    // "is_admin": false,
    // "name": "Engineer",
    // "updated_at": 1772553202570,
    // "updated_by": 0,
    // "updated_by_project_user": "7Jy9G9DdwDi"
};

var user = {
    "company_id": 28208,
    "created_at": 1765598661545,
    "created_by": 0,
    "data_state": "ACTIVE",
    "email": "abdul.abdullah@mekari.com",
    "id": "HZqNEGSVwt0d",
    "ids": "HZqNEGSVwt0d",
    "job_position_id": {
        "id": "qTdhFs83O1AF",
        "name": "UI Solution Engineer 1"
    },
    "join_date": 1729443600000,
    "name": "Abdullah Abdullah",
    "organization_id": {
        "id": "tSmKRllyCJgg",
        "name": "Solution Implementation (VAS)"
    },
    "role_id": null,
    "squad_name": null,
    "updated_at": 1773654860495,
    "updated_by": 0,
    "updated_by_project_user": "7Jy9G9DdwDi"
}

// get params non mandatory
var assignee_id = (req && req.query && req.query.assignee_id && req.query.assignee_id[0]) ? req.query.assignee_id[0] : "";
var work_item_id = (req && req.query && req.query.work_item_id && req.query.work_item_id[0]) ? req.query.work_item_id[0] : "";
var epic_id = (req && req.query && req.query.epic_id && req.query.epic_id[0]) ? req.query.epic_id[0] : "";
var story_id = (req && req.query && req.query.story_id && req.query.story_id[0]) ? req.query.story_id[0] : "";
var task_id = (req && req.query && req.query.id && req.query.id[0]) ? req.query.id[0] : "";
var project_id = (req && req.query && req.query.project_id && req.query.project_id[0]) ? req.query.project_id[0] : "";

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
    filter.where_is_or = where;
} else if (project_id) {
    filter.where_is_and = {
        "project_id.id": project_id
    };
};

_log({ filter: filter });