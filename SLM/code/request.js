var req = {
    "query": {
        "code": [
            "IESR01-005"
        ],
        "project_id": [
            "VMWmRS1XWmGI"
        ]
    }
}


// get params non mandatory
var assignee_id = (req && req.query && req.query.assignee_id && req.query.assignee_id[0]) ? req.query.assignee_id[0] : "";
var work_item_id = (req && req.query && req.query.work_item_id && req.query.work_item_id[0]) ? req.query.work_item_id[0] : "";
var epic_id = (req && req.query && req.query.epic_id && req.query.epic_id[0]) ? req.query.epic_id[0] : "";
var story_id = (req && req.query && req.query.story_id && req.query.story_id[0]) ? req.query.story_id[0] : "";
var task_id = (req && req.query && req.query.id && req.query.id[0]) ? req.query.id[0] : "";
var code = (req && req.query && req.query.code && req.query.code[0]) ? req.query.code[0] : "";
var project_id = (req && req.query && req.query.project_id && req.query.project_id[0]) ? req.query.project_id[0] : "";


var filter = {
    _filter_version: 2
};

var where = {};

// build dynamic where
if (project_id) {
    where["project_id_text"] = project_id;
}

if (task_id) {
    where["ids"] = task_id;
}

if (code) {
    where["code"] = code;
}

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

// hanya attach where kalau ada isinya
if (Object.keys(where).length > 0) {
    filter.where_is_and = where;
}

console.log({ filter: filter });