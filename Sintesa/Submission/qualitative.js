var req = {
    "gri_sdg_ids": [
        {
            "id": "Z31AOCRMLUY2",
            "name": "SDG 17"
        },
        {
            "id": "rvl0NE7CWliy",
            "name": "SDG 16"
        },
                {
            "id": "rvl0NE7CWliy",
            "name": "GRI 11"
        }
    ]
};

var groups = {};
var order = [];

for (var i = 0; i < req.gri_sdg_ids.length; i++) {
    var parts = req.gri_sdg_ids[i].name.match(/^(\D+)\s*(\d+)/);
    if (!parts) continue;

    var prefix = parts[1].trim();
    var number = parts[2];

    if (!groups[prefix]) {
        groups[prefix] = [];
        order.push(prefix);
    }
    groups[prefix].push(number);
}

var codeParts = [];
for (var j = 0; j < order.length; j++) {
    var prefix2 = order[j];
    codeParts.push(prefix2 + " " + groups[prefix2].join(", "));
}

var code = codeParts.join(", ");

console.log(code);

