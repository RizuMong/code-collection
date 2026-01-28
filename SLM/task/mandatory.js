var req = {
    body: {
        // estimate_man_hour: 1,
        // name: "Task",
        task_category: "LOW_CODE"
    }
};

function validateRequired(value, message, errors) {
    if (value === undefined || value === null || value === "") {
        errors.push(message);
    }
}

function validateEnum(value, allowedValues, fieldName, errors) {
    if (allowedValues.indexOf(value) === -1) {
        errors.push(
            fieldName + " must be one of: " + allowedValues.join(", ")
        );
    }
}

var master_task_categories = [
    "LOW_CODE",
    "NO_CODE"
];

var errors = [];
var res = {};
var email = "";
var task_name = "";
var task_category = "";


try {
    if (!req || !req.body) {
        errors.push("Invalid request body");
    };

    validateRequired(req.body.estimate_man_hour, "Require Estimate Manhour", errors);
    validateRequired(req.body.name, "Require Title", errors);
    validateRequired(req.body.task_category, "Require Task Category", errors);

    validateEnum(
        req.body.task_category,
        master_task_categories,
        "Task Category",
        errors
    );


    if (errors.length > 0) {
        throw new Error(errors.join(", "));
    }

    estimate_man_hour = req.body.estimate_man_hour;
    task_name = req.body.name;
    task_category = req.body.task_category;
} catch (err) {
    res = {
        error: true,
        code: 400,
        message: err.message || "Unknown error",
        data: {}
    };

    //   _response_status_code = 400;
    //   _stopAutomation();
    //   _log(res);
};

console.log(res);