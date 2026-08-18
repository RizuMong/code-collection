function _log(msg) {
    console.log(msg);
};

var req = {
    query: {
        status_id: [
            // "STATUSXX1"
        ]
    }
};

var errors = [];
var client_id = "";
var code = "";
var id_project = "";
var name = "";
var pm_id = "";
var status_id = "";
var workspace_id = "";

// params non mandatory
client_id = (req && req.query && req.query.client_id) ? req.query.client_id[0] : "";
code = (req && req.query && req.query.code) ? req.query.code[0] : "";
id_project = (req && req.query && req.query.id_project) ? req.query.id_project[0] : "";
name = (req && req.query && req.query.name) ? req.query.name[0] : "";
pm_id = (req && req.query && req.query.pm_id) ? req.query.pm_id[0] : "";
status_id = (req && req.query && req.query.status_id) ? req.query.status_id[0] : "";
workspace_id = (req && req.query && req.query.workspace_id) ? req.query.workspace_id[0] : "";

var filter = {
    _filter_version: 2
};

var where = {};
var whereIn = {};

if (id_project) {
    where["ids"] = id_project;
}

if (code) {
    where["code"] = code;
}

if (name) {
    where["name"] = { $regex: name, $options: 'i' };
}

if (client_id) {
    where["client_id.id"] = client_id;
}

if (pm_id) {
    where["pm_id.id"] = pm_id;
}

if (status_id) {
    where["status_id.id"] = status_id;
}

if (workspace_id) {
    where["workspace_id.id"] = workspace_id;
}

where["is_deleted"] = "NO";

var statusActiveProjects = [
    "Backlog",
    "On Track",
    "On Hold Due To Commercial Issue",
    "On Hold Due To Project Dispute",
    "Potential to be Delayed",
    "Delayed",
    "Deploy to Production",
    "Go Live - Hypercare"
];

if (!status_id) {
    whereIn["status_id.name"] = statusActiveProjects;
}

if (Object.keys(where).length > 0) {
    filter.where_is_and = where;
};

if (Object.keys(whereIn).length > 0) {
    filter.where_in_and = whereIn;
};

var idDataManager = "oPcQ2cSldrZN"; // project
var sort = { created_at: -1 };
var page = 1;
var limit = 2000;
var filterOperator = 'and';

_log({ built_filter: filter });