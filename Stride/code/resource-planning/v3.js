var req = {
    "body": {
        "end_date": 1777654799,
        "sprint_number": 8,
        "sprint_year": 2026,
        "start_date": 1776643200
    }
}

function _log(msg) {
    console.log(msg);
};


var start_date = 0;
var end_date = 0;


// body non mandatory
var sprint_year = (req && req.body && req.body.sprint_year) ? req.body.sprint_year : null;
var sprint_number = (req && req.body && req.body.sprint_number) ? req.body.sprint_number : null;
var job_position_id = (req && req.body && req.body.job_position_id) ? req.body.job_position_id : "";
var user_id = (req && req.body && req.body.user_id) ? req.body.user_id : "";

var hasOtherFilter = (
    sprint_year ||
    sprint_number ||
    job_position_id ||
    user_id
);


// Get Tasks
var filterTask = {
    _filter_version: 2
};

if (!hasOtherFilter && start_date && end_date) {
    filterTask.where_gt_and = {
        estimate_start_date: start_date - 1
    };

    filterTask.where_lt_and = {
        estimate_end_date: end_date
    };
}


var where = {};

if (sprint_number && sprint_year) {
    where["sprint_number"] = sprint_number;
    where["sprint_year"] = sprint_year;
};

// if (job_position_id) {
//   where["job_position_id.id"] = job_position_id;
// };

if (user_id) {
    where["assignee_id.id"] = user_id;
};

if (Object.keys(where).length > 0) {
    filterTask.where_is_and = where;
};

_log(filterTask)