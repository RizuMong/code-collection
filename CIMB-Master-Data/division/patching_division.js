var get_report_divisions = [
    {
        "code": "1611-47077-2008",
        "company_id": 25236,
        "created_at": 1695817173809,
        "created_by": 166887,
        "description": "Head Office-S&D - RETAIL SEGMENT",
        "dibuat_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
        "diedit_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
        "flow_name": "BC Head Office-S&D - RETAIL SEGMENT",
        "flow_type": "MINIMUM 1",
        "id": "NQiEHphvg",
        "id_flow": "KI-VgaWSg",
        "id_key_division": 1338,
        "id_master_division": "JQFJzhZSg",
        "id_report_division": "NQiEHphvg",
        "name": "Head Office-S&D - RETAIL SEGMENT",
        "position_names": "Head Office-S&D - BRANCH MOTIVATION & DEVELOPMENT - Budget Custody 1^bakhtiar.susetyo@cimbniaga.co.id^Head Office-S&D - BRANCH MOTIVATION & DEVELOPMENT - Budget Custody 2^margareta.margareta2@cimbniaga.co.id",
        "positions": [
            "Head Office-S&D - BRANCH MOTIVATION & DEVELOPMENT - Budget Custody 1^bakhtiar.susetyo@cimbniaga.co.id",
            "Head Office-S&D - BRANCH MOTIVATION & DEVELOPMENT - Budget Custody 2^margareta.margareta2@cimbniaga.co.id"
        ],
        "status": "ACTIVE",
        "updated_at": 1776325466314,
        "updated_by": 166886
    },
    {
        "code": "1611-47077-2008",
        "company_id": 25236,
        "created_at": 1695817173809,
        "created_by": 166887,
        "description": "Head Office-S&D - RETAIL SEGMENT",
        "dibuat_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
        "diedit_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
        "flow_name": "BC Head Office-S&D - RETAIL SEGMENT",
        "flow_type": "MINIMUM 1",
        "id": "DUPLICATE1",
        // "id_flow": "KI-VgaWSgXXX",
        "id_key_division": 1338,
        "id_master_division": "JQFJzhZSg",
        "id_report_division": "DUPLICATE1",
        "name": "Head Office-S&D - RETAIL SEGMENT",
        "position_names": "Head Office-S&D - BRANCH MOTIVATION & DEVELOPMENT - Budget Custody 1^margareta.margareta2@cimbniaga.co.id^Head Office-S&D - BRANCH MOTIVATION & DEVELOPMENT - Budget Custody 2^MONICA.SOEPRAPTO@CIMBNIAGA.CO.ID",
        "positions": [
            "Head Office-S&D - BRANCH MOTIVATION & DEVELOPMENT - Budget Custody 1^margareta.margareta2@cimbniaga.co.id",
            "Head Office-S&D - BRANCH MOTIVATION & DEVELOPMENT - Budget Custody 2^MONICA.SOEPRAPTO@CIMBNIAGA.CO.ID"
        ],
        "status": "ACTIVE",
        "updated_at": 1773748958443,
        "updated_by": 0
    }
];

var now = new Date();
var currentYear = now.getFullYear();

// Group by id_key_division
var grouped = {};
var i;
var item;

for (i = 0; i < get_report_divisions.length; i++) {
    item = get_report_divisions[i];

    if (!grouped[item.id_key_division]) {
        grouped[item.id_key_division] = [];
    }

    grouped[item.id_key_division].push(item);
}

var duplicate_current_year = [];
var duplicate_previous_year = [];

for (var key in grouped) {
    var records = grouped[key];

    // Skip non duplicate
    if (records.length <= 1) {
        continue;
    }

    var hasValidRecord = false;

    // Check apakah ada valid duplicate
    for (i = 0; i < records.length; i++) {
        item = records[i];

        if (item.id_flow && item.updated_by !== 0) {
            hasValidRecord = true;
            break;
        }
    }

    // Kalau ada valid duplicate
    // maka invalid duplicate harus dihapus
    if (hasValidRecord) {

        for (i = 0; i < records.length; i++) {
            item = records[i];

            // Invalid duplicate
            if (!item.id_flow || item.updated_by === 0) {

                var year = new Date(item.created_at).getFullYear();

                if (year === currentYear) {
                    duplicate_current_year.push(item);
                } else {
                    duplicate_previous_year.push(item);
                }
            }
        }
    }
}

// Sort paling muda
duplicate_current_year.sort(function (a, b) {
    return b.created_at - a.created_at;
});

duplicate_previous_year.sort(function (a, b) {
    return b.created_at - a.created_at;
});

var result = {
    duplicate_current_year: duplicate_current_year,
    duplicate_previous_year: duplicate_previous_year,
    count_current_year: duplicate_current_year.length,
    count_previous_year: duplicate_previous_year.length
};

console.log(result);