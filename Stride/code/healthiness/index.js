// declare
var list_task_types = [
    "BUG"
];

var list_value_types = [
    "UNBILLABLE",
    "UNBILLABLE_WITH_APPROVAL",
    "BILLABLE"
];

var project_lists = [
    {
        "actual_mandays": 55.72,
        "actual_manhours": 445.73,
        "address": "Injourney Aviasi Pariwisata Indonesia",
        "client_id": {
            "id": "2BfqpOBYL5PD",
            "name": "PT Aviasi Pariwisata Indonesia"
        },
        "code": "INJO",
        "company_id": 28208,
        "created_at": 1775057030841,
        "created_by": 0,
        "id": "wGk8HrafpvJPd",
        "ids": "wGk8HrafpvJPd",
        "is_deleted": "NO",
        "links_and_attachments": [
            {
                "label": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1RpDd8PXY1e11KbxXklY4QDp6Dx_lyfLn?usp=drive_link"
            }
        ],
        "name": "Injourney Aviasi Pariwisata Indonesia",
        "officeless_version": "2.0",
        "planned_end_date": 1780012800000,
        "planned_mandays": 66.56,
        "planned_manhours": 532.5,
        "planned_start_date": 1770249600000,
        "pm_id": {
            "id": "aCvk8b9tuNRP",
            "name": "Michelle Amara Soekamto"
        },
        "project_type_id": {
            "id": "izY883QDSft",
            "name": "Custom"
        },
        "sow_mandays": 0.25,
        "sow_manhours": 2,
        "status_id": {
            "id": "hfUQG1SBHv0R",
            "name": "Potential to be Delayed"
        },
        "total_project_value": 178055732,
        "updated_at": 1779440939816,
        "updated_by": 0,
        "updated_by_project_user": "UKA9XRNLQWI"
    }
];

var result = [];

project_lists.forEach(function (item) {
    var task_types = [];
    var value_types = [];

    // task types
    list_task_types.forEach(function (task_type) {
        var queryTaskType = ""
            + "SELECT COUNT(ids) AS total_task "
            + "FROM projects "
            + "WHERE project_id_text = '" + item.ids + "' "
            + "AND task_type = '" + task_type + "'";

        var dataTotalTaskType = _queryRecord("solution_lifecycle_mgr", queryTaskType) || [];

        var total_task = 0;

        if (dataTotalTaskType.length > 0) {
            total_task = Number(dataTotalTaskType[0].total_task || 0);
        }

        task_types.push({
            "task_type": task_type,
            "total_task": total_task
        });
    });

    // value types
    list_value_types.forEach(function (value_type) {
        var queryValueType = ""
            + "SELECT "
            + "COUNT(ids) AS total_task, "
            + "SUM(estimate_man_hour) AS total_manhour "
            + "FROM projects "
            + "WHERE project_id_text = '" + item.ids + "' "
            + "AND value_type = '" + value_type + "'";

        var dataTotalValueType = _queryRecord("solution_lifecycle_mgr", queryValueType) || [];

        var total_task = 0;
        var total_manhour = 0;
        var total_mandays = 0;

        if (dataTotalValueType.length > 0) {
            total_task = Number(dataTotalValueType[0].total_task || 0);
            total_manhour = Number(dataTotalValueType[0].total_manhour || 0);

            // 1 manday = 8 manhours
            total_mandays = Number((total_manhour / 8).toFixed(2));
        }

        value_types.push({
            "value_type": value_type,
            "total_task": total_task,
            "total_manhours": total_manhour,
            "total_mandays": total_mandays
        });
    });

    result.push({
        "client_id": item.client_id || {},
        "project_id": {
            "id": item.id || "",
            "name": item.name || ""
        },
        "task_types": task_types,
        "value_types": value_types,
        "work_items": item.project_milestones || []
    });
});

console.log(result);