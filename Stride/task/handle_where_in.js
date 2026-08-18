var req = {
    "query": {
        "project_id": [
            "9L5MHf1FEqHJ, 9L5MHf1FEXX"
        ],
        "code": [
            "123"
        ]
    }
};

function toStringSafe(value) {
    return (value === null || value === undefined) ? "" : String(value);
}

function splitCommaValues(rawValues) {
    var result = [];
    var seen = {};
    for (var i = 0; i < rawValues.length; i++) {
        var parts = toStringSafe(rawValues[i]).split(",");
        for (var j = 0; j < parts.length; j++) {
            var trimmed = parts[j].trim();
            if (trimmed && !seen[trimmed]) {
                seen[trimmed] = true;
                result.push(trimmed);
            }
        }
    }
    return result;
}

function getQueryArray(query, key) {
    return (query && query[key] && query[key].length > 0) ? query[key] : [];
}

function getQueryValue(query, key) {
    var arr = getQueryArray(query, key);
    return arr.length > 0 ? toStringSafe(arr[0]).trim() : "";
}

var query = (req && req.query) ? req.query : {};

var project_id = splitCommaValues(getQueryArray(query, "project_id"));
var code = getQueryValue(query, "code");

var filter = {
    _filter_version: 2
};

var where = {};
var whereIn = {};

// in-filters: filter field name -> resolved values array
var inFilterMap = {
    project_id_text: project_id
};

for (var inKey in inFilterMap) {
    if (inFilterMap.hasOwnProperty(inKey) && inFilterMap[inKey].length > 0) {
        whereIn[inKey] = inFilterMap[inKey];
    }
}

// eq-filters: filter field name -> resolved value
var eqFilterMap = {
    code: code
};

for (var eqKey in eqFilterMap) {
    if (eqFilterMap.hasOwnProperty(eqKey) && eqFilterMap[eqKey]) {
        where[eqKey] = eqFilterMap[eqKey];
    }
}

// hanya attach where/where_in kalau ada isinya
if (Object.keys(where).length > 0) {
    filter.where_is_and = where;
}

if (Object.keys(whereIn).length > 0) {
    filter.where_in_and = whereIn;
}

console.log({ filter: filter });