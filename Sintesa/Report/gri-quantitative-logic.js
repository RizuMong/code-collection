var data_submission_parent = {
    "company_id": 28364,
    "created_at": 1788336430490,
    "created_by": 0,
    "created_by_project_user": "L5RR6EypnHYg",
    "entity_id": {
        "id": "HZ3kW9nVDtN0",
        "name": "PT Sintesa Argo"
    },
    "flow_status": "draft",
    "id": "0dtr6uKTjtHO",
    "ids": "0dtr6uKTjtHO",
    "period_id": {
        "id": "Xn05TC9biby3",
        "name": "2026"
    },
    "submission_type_id": {
        "id": "gbqpWGmHxJDn",
        "name": "GRI - Quantitative"
    },
    "template_id": {
        "id": "N2jjofazxX7c",
        "name": "Sintesa Group - GRI Quantitative"
    },
    "updated_at": 1788341670679,
    "updated_by": 0,
    "updated_by_project_user": "L5RR6EypnHYg"
};

var submission_items = [
    {
        "category_id": {
            "id": "QRHwbmCAc4qK",
            "name": "Energy"
        },
        "columns": [
            {
                "key": "non_renewable_energy",
                "name": "Non-Renewable Energy",
                "sequence": 1
            },
            {
                "key": "unit",
                "name": "Unit",
                "sequence": 2
            }
        ],
        "company_id": 28364,
        "created_at": 1788336430651,
        "created_by": 0,
        "id": "izEBas0DjufvJ",
        "ids": "izEBas0DjufvJ",
        "gri_code": "271-a",
        "description": "Report the total number of employees",
        "metrics": [
            {
                "input_type": "NUMBER",
                "key": "2026",
                "name": "2026",
                "sequence": 1,
                "unit": null
            }
        ],
        "parent_id": {
            "id": "0dtr6uKTjtHO",
            "name": "Sintesa Group - GRI Quantitative"
        },
        "rows": [
            {
                "labels": {
                    "non_renewable_energy": "Imported Electricity (PLN)",
                    "unit": "kWh"
                },
                "sequence": 1
            },
            {
                "labels": {
                    "non_renewable_energy": "Own Use Electricity from Natural Gas",
                    "unit": "kWh"
                },
                "sequence": 2
            }
        ],
        "updated_at": 1788341670745,
        "updated_by": 0,
        "values": [
            {
                "input_type": "NUMBER",
                "metric_key": "2026",
                "metric_name": "2026",
                "row_key": "row_1",
                "unit": {},
                "value_date": null,
                "value_number": 12,
                "value_text": null
            },
            {
                "input_type": "NUMBER",
                "metric_key": "2026",
                "metric_name": "2026",
                "row_key": "row_2",
                "unit": {},
                "value_date": null,
                "value_number": 12,
                "value_text": null
            }
        ]
    }
];

// Functions
function toNull(val) {
    if (val === undefined) {
        return null;
    }
    return val;
};

function toString(val) {
    if (val === null || val === undefined) {
        return "";
    }

    if (typeof val === "string") {
        return val;
    }

    if (typeof val === "number") {
        if (isNaN(val)) {
            return "";
        }
        return String(val);
    }

    if (typeof val === "boolean") {
        return val ? "true" : "false";
    }

    if (val instanceof Date) {
        if (isNaN(val.getTime())) {
            return "";
        }
        return val.toISOString();
    }

    if (Array.isArray(val)) {
        var parts = [];
        val.forEach(function (v) {
            var s = toString(v);
            if (s !== "") {
                parts.push(s);
            }
        });
        return parts.join(", ");
    }

    if (typeof val === "object") {
        if (Object.keys(val).length === 0) {
            return "";
        }
        if (val.name !== null && val.name !== undefined) {
            return toString(val.name);
        }
        if (val.id !== null && val.id !== undefined) {
            return toString(val.id);
        }
        return "";
    }

    return "";
};

function getString(obj, key) {
    if (!obj) {
        return "";
    }
    return toString(obj[key]);
};

function getPeriod(parent) {
    if (!parent.period_id) {
        return null;
    }
    var name = parent.period_id.name;
    if (name === null || name === undefined || name === "") {
        return null;
    }
    var num = Number(name);
    if (isNaN(num)) {
        return name;
    }
    return num;
};

function getCategoryName(item) {
    if (!item.category_id) {
        return null;
    }
    return toNull(item.category_id.name);
};

function findRowByKey(rows, rowKey) {
    if (!rows || !rowKey) {
        return null;
    }
    var seq = Number(String(rowKey).replace("row_", ""));
    if (isNaN(seq)) {
        return null;
    }
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].sequence === seq) {
            return rows[i];
        }
    }
    return null;
};

function buildRowDescription(item, rowKey) {
    var row = findRowByKey(item.rows, rowKey);
    if (!row || !row.labels) {
        return "";
    }

    var columns = (item.columns || []).slice().sort(function (a, b) {
        return a.sequence - b.sequence;
    });

    var parts = [];
    columns.forEach(function (col) {
        var label = row.labels[col.key];
        if (label !== null && label !== undefined && label !== "") {
            parts.push(label);
        }
    });

    return parts.join(" - ");
};

// Expected Output
// [
//     {
//         "period": 2026,
//         "flow_status": "draft",
//         "parent_id": "0dtr6uKTjtHO",
//         "entity_id": {
//             "id": "HZ3kW9nVDtN0",
//             "name": "PT Sintesa Argo"
//         },
//         "template_id": {
//             "id": "N2jjofazxX7c",
//             "name": "Sintesa Group - GRI Quantitative"
//         },
//         "unit_id": {},
//         "category": "Energy",

//         "code": "", // set string kosong dulu
//         "description": "", // set string kosong dulu

//         "metric_key": "2026",
//         "metric_name": "2026",
//         "input_type": "NUMBER",
//         "value_number": 12,
//         "value_text": null,
//         "value_date": null
//     }
// ]

// Declare
var report_items = [];

submission_items.forEach(function (item) {
    var values = item.values || [];

    values.forEach(function (val) {
        report_items.push({
            "period": getPeriod(data_submission_parent),
            "flow_status": toString(data_submission_parent.flow_status),
            "parent_id": toString(data_submission_parent.id),
            "entity_id": data_submission_parent.entity_id,
            "template_id": data_submission_parent.template_id,
            "unit_id": toNull(val.unit),
            "category": toString(getCategoryName(item)),

            "gri_code": getString(item, "gri_code"),
            "description": getString(item, "description"),

            "metric_key": getString(val, "metric_key"),
            "metric_name": getString(val, "metric_name"),
            "input_type": getString(val, "input_type"),
            "value_number": toNull(val.value_number),
            "value_text": getString(val, "value_text"),
            "value_date": toNull(val.value_date)
        });
    });
});

console.log(report_items);