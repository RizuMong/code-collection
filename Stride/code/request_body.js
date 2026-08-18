var req = {
    "body": {
        "project_id": { // mandatory
            "id": "1",
            "name": "BPJS"
        },
        "collection_status_id": { // mandatory
            "id": "1",
            "name": "BACKLOG"
        },
        "name": "name", // mandatory
        "percentage": 10, // mandatory
        "planned_date": 1732329392932, // mandatory
        "amount": 1 // mandatory
    }
};

try {
    if (!req || !req.body || !req.query.project_id) {
        throw new Error("Require 'project_id'");
    };

    if (!req || !req.body || !req.query.collection_status_id) {
        throw new Error("Require 'collection_status_id'");
    };
    
    if (!req || !req.body || !req.query.name) {
        throw new Error("Require 'name'");
    };
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