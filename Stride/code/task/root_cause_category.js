


var task_type = "MISSING_REQUIREMENTS";
var root_cause_category = "MISSED_PLANNED";

var validRootCauseMap = {
    "MISSING_REQUIREMENTS": ["MISSING_REQUIREMENT", "MISSED_PLANNED"],
    "BUG": ["LOGIC_FUNCTION_ISSUE", "INFRA_ISSUE", "PRODUCT_CONSTRAINT"]
};

var allowedValues = validRootCauseMap[task_type];

if (allowedValues) {
    if (!root_cause_category) {
        res = {
            "code": 400,
            "error": true,
            "data": {},
            "message": "Root Cause Category is required for Task Type " + task_type
        };

        _log(res);
        _response_status_code = 400;
        _stop = true;
    } else if (!_.contains(allowedValues, root_cause_category)) {
        var label = toTitleCase(root_cause_category);

        res = {
            "code": 400,
            "error": true,
            "data": {},
            "message": "Invalid Root Cause Category '" + label + "' for Task Type " + task_type
        };

        _log(res);
        _response_status_code = 400;
        _stop = true;
    }
}

function _log(msg) {
    console.log(msg);
};

function toTitleCase(str) {
    var words = str.split("_");
    var result = "";
    for (var i = 0; i < words.length; i++) {
        var word = words[i].toLowerCase();
        result += word.charAt(0).toUpperCase() + word.slice(1);
        if (i < words.length - 1) {
            result += " ";
        }
    }
    return result;
}