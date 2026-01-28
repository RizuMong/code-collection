var req = {
    "assignment": "rizki.haddi@mekari.com",
    "detail_requirement": "Import Task",
    "estimate_manhour": "2",
    "ids": "EwFxo6vhYxk4",
    "priority": "High",
    "product_module_id": "PMcjDvR7R",
    "project_id": "GkQczeFUUcIr",
    "related_task_id": "",
    "sprint_id": "SxiTGVXIMsGT",
    "task_category": "Engineer Only",
    "task_name": "Import Task",
    "task_type": "No Code",
    "type_task": "New Task",
    "value_type": "Billable"
};

// function
function validateRequired(value, message, errors) {
    if (value === undefined || value === null || value === "") {
        errors.push(message);
    };
};

function validateEnum(value, allowedValues, fieldName, errors) {
    if (allowedValues.indexOf(value) === -1) {
        errors.push(
            fieldName + " must be one of: " + allowedValues.join(", ")
        );
    }
};

function validateExist(data, errors, message) {
    if (!data || (typeof data === "object" && Object.keys(data).length === 0)) {
        errors.push(message);
    }
}

// Declare
var errors = [];
var import_note = "";
var import_status = "success";


var assignment = (req && req && req.assignment && req.assignment) ? req.assignment : "";
var detail_requirement = (req && req && req.detail_requirement && req.detail_requirement) ? req.detail_requirement : "";
var estimate_manhour = (req && req && req.estimate_manhour && req.estimate_manhour) ? req.estimate_manhour : "";
var priority = (req && req && req.priority && req.priority) ? req.priority : "";
var product_module_id = (req && req && req.product_module_id && req.product_module_id) ? req.product_module_id : "";
var project_id = (req && req && req.project_id && req.project_id) ? req.project_id : "";
var related_task_id = (req && req && req.related_task_id && req.related_task_id) ? req.related_task_id : "";
var sprint_id = (req && req && req.sprint_id && req.sprint_id) ? req.sprint_id : "";
var task_category = (req && req && req.task_category && req.task_category) ? req.task_category : "";
var task_name = (req && req && req.task_name && req.task_name) ? req.task_name : "";
var task_type = (req && req && req.task_type && req.task_type) ? req.task_type : "";
var type_task = (req && req && req.type_task && req.type_task) ? req.type_task : "";
var value_type = (req && req && req.value_type && req.value_type) ? req.value_type : "";

// Validate Value
var task_categories = [
    "System Analyst",
    "QA",
    "PM",
    "CX & Tech Writer",
    "Engineer Only"
];

var priorities = [
    "High",
    "Medium",
    "Low"
];

var task_types = [
    "No Code",
    "Low Code"
];

var type_tasks = [
    "New Task",
    "Feedback",
    "Request",
    "Escalation",
    "Meeting",
    "Bugfix",
    "Retention"
];

var value_types = [
    "Billable",
    "Unbillable",
    "CVTA"
];


// Validate Mandatory
validateRequired(req.task_category, "Task Category", errors);
validateRequired(req.priority, "Priority", errors);
validateRequired(req.sprint_id, "Sprint", errors);

if (req.task_category === "Engineer Only") {
    validateRequired(req.task_type, "Task Type", errors);
};

if (req.task_category === "QA") {
    validateRequired(req.related_task_id, "Related Task", errors);
};

validateRequired(req.type_task, "Type Task", errors);
validateRequired(req.value_type, "Value Type", errors);
validateRequired(req.project_id, "Project", errors);
validateRequired(req.task_name, "Task Name", errors);
validateRequired(req.detail_requirement, "Detail Requirement", errors);
validateRequired(req.estimate_manhour, "Estimate Manhour", errors);
validateRequired(req.assignment, "Assignment (Email)", errors);

// Validate Enum
validateEnum(req.task_category, task_categories, "Task Category", errors);
validateEnum(req.priority, priorities, "Priority", errors);
validateEnum(req.task_type, task_types, "Task Type", errors);
validateEnum(req.type_task, type_tasks, "Type Task", errors);
validateEnum(req.value_type, value_types, "Value Type", errors);

if (errors.length > 0) {
    import_note = errors.join(", ");
    import_status = "failed";
};


console.log(errors);

// Validate Record
validateExist(project, errors, "Project Not Found");