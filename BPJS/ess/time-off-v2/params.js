function safeParse(param, defaultValue) {
    if (param && param.length) {
        var num = Number(param[0]);
        if (!isNaN(num) && num > 0) {
            return num;
        }
    }
    return defaultValue;
}

function _log(msg) {
  console.log(msg);
};

var req = {
     "body": {},
    "query": {
            "data": [
                "[object Object]"
            ],
            "key": [
                "key"
            ],
            "limit": [
                "10"
            ],
            "page": [
                "1"
            ],
            "param": [
                "qTusnhusbj7R3uN3"
            ]
        }
}

var id_data = "";
var limit = 50;
var page = 1;


try {
    id_data = req.query.param[0];
    if (req && req.query) {
        limit = safeParse(req.query.limit, 10);
        page = safeParse(req.query.page, 1);
    }
} catch (err) {
    _log('Failed to parse query params:' + err);
    res = {
        error: true,
        code: 400,
        message: "Require Parameter 'id'",
        data: {},
    };

    // _stopAutomation();
};

console.log(id_data);

/// buat validasi query kalau ada filter aja

var addQuery = "";
var filterExport = (req.body && req.body.query) ? req.body.query : {};
var filterObj = {};
var useQuery = false;

// Validasi hanya jika ada filter di req.body.query.filter
if (
    filterExport &&
    filterExport.filter &&
    Array.isArray(filterExport.filter) &&
    filterExport.filter.length > 0
) {
    try {
        useQuery = true;
        filterObj = JSON.parse(filterExport.filter[0]);
    } catch (e) {
        res = {
            error: true,
            code: 400,
            message: "Invalid JSON in filter",
            data: {},
        };
    }
}

if (useQuery) {
    var typeMap = {
        "Check In": "clock_in",
        "Check Out": "clock_out"
    };

    if (filterObj.type) {
        addQuery += " AND type = '" + typeMap[filterObj.type] + "'";
    }

    if (filterObj.attendace_id) {
        id_data = filterObj.attendace_id;
        addQuery += " AND attendace_id = '" + filterObj.attendace_id + "'";
    }
}

_log(addQuery);