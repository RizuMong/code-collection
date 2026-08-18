var application_lists = [
    {
        "client_id": {
            "id": "N2BGKZNzx3XQM",
            "name": "PT. Bank Victoria"
        },
        "company_id": 28208,
        "created_at": 1778491554112,
        "created_by": 0,
        "description": "Application",
        "id": "Z31ND9rMiUXx",
        "ids": "Z31ND9rMiUXx",
        "name": "Application",
        "project_ids": [
            {
                "id": "n0dx3F3qlfL6",
                "name": "PT. Bank Victoria"
            },
            {
                "id": "XXX1",
                "name": "Pariwisata Indonesia"
            }
        ],
        "updated_at": 1778491554112,
        "updated_by": 0
    },
    {
        "client_id": {},
        "company_id": 28208,
        "created_at": 1778489618702,
        "created_by": 0,
        "description": "Application",
        "id": "UKs478tLCW9",
        "ids": "UKs478tLCW9",
        "name": "Application",
        "project_ids": [
            {
                "id": "izYkP3NDCfz6",
                "name": "Injourney Aviasi Pariwisata Indonesia"
            }
        ],
        "updated_at": 1778489618702,
        "updated_by": 0
    },
];

var project_id = [
    "n0dx3F3qlfL6, izYkP3NDCfz6"
];

var filteredApplications = [];
var projectMap = {};
var normalizedProjectIds = [];
var i, j, k, splitIds, projects;

// normalize project_id
for (i = 0; i < project_id.length; i++) {
    if (typeof project_id[i] === "string") {
        splitIds = project_id[i].split(",");
        for (j = 0; j < splitIds.length; j++) {
            normalizedProjectIds.push(
                splitIds[j].replace(/^\s+|\s+$/g, "")
            );
        }
    }
}

// show all data if empty
if (!normalizedProjectIds.length) {
    filteredApplications = application_lists;
} else {
    // create lookup map
    for (i = 0; i < normalizedProjectIds.length; i++) {
        projectMap[normalizedProjectIds[i]] = true;
    }
    // filter applications
    for (i = 0; i < application_lists.length; i++) {
        projects = application_lists[i].project_ids || [];
        for (k = 0; k < projects.length; k++) {
            if (projectMap[projects[k].id]) {
                filteredApplications.push(application_lists[i]);
                break;
            }
        }
    }
};

console.log(filteredApplications);