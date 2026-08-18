// function
function safeDate(arr, field) {
    return arr.length && arr[0][field] ? arr[0][field] : 0;
};

function getName(obj) {
    return obj && obj.name != null ? obj.name : "";
};

function safeTimestamp(value) {
    if (typeof value === "undefined" || value === null) {
        return 0;
    }
    return value;
};

var timelines = [];

var get_datas = [
    {
        "actual_end_date": 1780099200,
        "actual_start_date": 1780012800,
        "company_id": 28208,
        "created_at": 1780025544968,
        "created_by": 0,
        "id": "s6Xinpz8FjON",
        "ids": "s6Xinpz8FjON",
        "master_milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "notes": "Development",
        "planned_end_date": 1780099200,
        "planned_start_date": 1780012800,
        "project_id": {
            "id": "9L5MHf1FEqHJ",
            "name": "Project Management Tools 3.0"
        },
        "status_id": {
            "id": "XXI",
            "name": "On Track"
        },
        "updated_at": 1780025544968,
        "updated_by": 0
    },
    {
        "actual_end_date": 1782777600,
        "actual_start_date": 1780012800,
        "company_id": 28208,
        "created_at": 1779355475045,
        "created_by": 0,
        "id": "1Oy9xVn71LsW",
        "ids": "1Oy9xVn71LsW",
        "master_milestone_id": {
            "id": "cEwLjAfuQag",
            "name": "Requirement Detailing & Design"
        },
        "notes": "Requirement Detailing & Design",
        "planned_end_date": 1782777600,
        "planned_start_date": 1780012800,
        "project_id": {
            "id": "9L5MHf1FEqHJ",
            "name": "Project Management Tools 3.0"
        },
        "status_id": {},
        "updated_at": 1780025409970,
        "updated_by": 0
    },
    {
        "actual_end_date": 1780185600,
        "actual_start_date": 1777593600,
        "company_id": 28208,
        "created_at": 1778224701801,
        "created_by": 0,
        "id": "bqTDtgjZsn87",
        "ids": "bqTDtgjZsn87",
        "master_milestone_id": {
            "id": "oPujcGolBrom",
            "name": "Project Initiation"
        },
        "notes": "Project Initiation",
        "planned_end_date": 1780185600,
        "planned_start_date": 1777593600,
        "project_id": {
            "id": "9L5MHf1FEqHJ",
            "name": "Project Management Tools 3.0"
        },
        "status_id": {},
        "updated_at": 1779355375937,
        "updated_by": 0
    }
]

var order_wbs = [
    {
        "company_id": 28208,
        "created_at": 1777970292297,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "lN2sYXoi9G95",
        "ids": "lN2sYXoi9G95",
        "milestone_id": {
            "id": "oPujcGolBrom",
            "name": "Project Initiation"
        },
        "name": "Project Kickoff",
        "order_number": 1,
        "updated_at": 1777970292297,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970301781,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "OyIwvKvJFL1d",
        "ids": "OyIwvKvJFL1d",
        "milestone_id": {
            "id": "cEwLjAfuQag",
            "name": "Requirement Detailing & Design"
        },
        "name": "Discovery & Project Planning",
        "order_number": 2,
        "updated_at": 1777970339854,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970314198,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "UKs78C3LgWli",
        "ids": "UKs78C3LgWli",
        "milestone_id": {
            "id": "cEwLjAfuQag",
            "name": "Requirement Detailing & Design"
        },
        "name": "FSD Creation",
        "order_number": 3,
        "updated_at": 1777970343690,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970352434,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "8gbCZDAR7w0sa",
        "ids": "8gbCZDAR7w0sa",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "Solution Development",
        "order_number": 4,
        "updated_at": 1777970352434,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970413664,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "W7JuaFq0YrLa",
        "ids": "W7JuaFq0YrLa",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "System Integration Test (SIT)",
        "order_number": 5,
        "updated_at": 1777970413664,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970420818,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "EwGZU49h9exkU",
        "ids": "EwGZU49h9exkU",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "User Acceptance Test (UAT)",
        "order_number": 6,
        "updated_at": 1777970420818,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970429543,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "xDcQubjoePCr",
        "ids": "xDcQubjoePCr",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "Penetration Test",
        "order_number": 7,
        "updated_at": 1777970429543,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970438071,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "DcERhqAPbsg",
        "ids": "DcERhqAPbsg",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "Performance Test",
        "order_number": 8,
        "updated_at": 1777970438071,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970445558,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "tSxFo8pyrJim",
        "ids": "tSxFo8pyrJim",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "User Guide Creation",
        "order_number": 9,
        "updated_at": 1777970445558,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970455600,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "MW7PdwFnoSynS",
        "ids": "MW7PdwFnoSynS",
        "milestone_id": {
            "id": "EwG5FeAhyxku",
            "name": "Development"
        },
        "name": "Deployment",
        "order_number": 10,
        "updated_at": 1777970455600,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970462543,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "uhfV91C21qYCN",
        "ids": "uhfV91C21qYCN",
        "milestone_id": {
            "id": "vlNEP9LmFzKR",
            "name": "Implementation"
        },
        "name": "Change Management",
        "order_number": 11,
        "updated_at": 1777970462543,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970470142,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "MW7PdwgnUyu",
        "ids": "MW7PdwgnUyu",
        "milestone_id": {
            "id": "vlNEP9LmFzKR",
            "name": "Implementation"
        },
        "name": "Data Migration",
        "order_number": 12,
        "updated_at": 1777970470142,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970477672,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "6Xnvq2HgnxAX",
        "ids": "6Xnvq2HgnxAX",
        "milestone_id": {
            "id": "vlNEP9LmFzKR",
            "name": "Implementation"
        },
        "name": "End User Training",
        "order_number": 13,
        "updated_at": 1777970477672,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    },
    {
        "company_id": 28208,
        "created_at": 1777970484984,
        "created_by": 0,
        "created_by_project_user": "s6Xq9RC8Gj7N",
        "id": "8gbCZzZR7t0VQ",
        "ids": "8gbCZzZR7t0VQ",
        "milestone_id": {
            "id": "vlNEP9LmFzKR",
            "name": "Implementation"
        },
        "name": "Training of Trainers",
        "order_number": 14,
        "updated_at": 1777970484984,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    }
];

var sortedDatas = [];
var processed = {};

for (var i = 0; i < order_wbs.length; i++) {
    var milestoneId = order_wbs[i].milestone_id.id;
    if (processed[milestoneId]) {
        continue;
    };

    processed[milestoneId] = true;
    for (var j = 0; j < get_datas.length; j++) {
        if (
            get_datas[j].master_milestone_id &&
            get_datas[j].master_milestone_id.id === milestoneId
        ) {
            sortedDatas.push(get_datas[j]);
        };
    };
};

if (sortedDatas.length > 0) {
    for (var i = 0; i < sortedDatas.length; i++) {
        timelines.push({
            "actual_start_date": safeTimestamp(sortedDatas[i].actual_start_date),
            "actual_end_date": safeTimestamp(sortedDatas[i].actual_end_date),
            "planned_start_date": safeTimestamp(sortedDatas[i].planned_start_date),
            "planned_start_date": safeTimestamp(sortedDatas[i].planned_start_date),
            "planned_end_date": safeTimestamp(sortedDatas[i].planned_end_date),
            "name": getName(sortedDatas[i].master_milestone_id),
            "id": sortedDatas[i].ids,
            "status": getName(sortedDatas[i].status_id),
            // "has_child": childCheck.length > 0
        });
    };
};

console.log(timelines);