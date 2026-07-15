var req = {
    "body": {
        "amount": 193740000,
        "id": "58gDOdiQ6Zet",
        "planned_invoicing_month": 6,
        "planned_invoicing_week": 26,
        "planned_invoicing_year": 2026,
        "planned_sign_off_month": 6,
        "planned_sign_off_week": 25,
        "planned_sign_off_year": 2026,
        "remarks": "",
        "status_invoicing_id": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
        },
        "status_sign_off_id": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
        },
        "term_of_payment": "GO_LIVE"
    }
};

var authenticate = {
    "code": 200,
    "data": {
        "email": "rizki.haddi@mekari.com",
        "id_token": "hfUan0gBevje",
        "job_position_id": {
            "id": "bq0ujKLZYXnr",
            "name": "Solution Engineer"
        },
        "join_date": 1672160400000,
        "name": "Rizki Haddi Prayoga",
        "organization_id": {
            "id": "tSmKRllyCJgg",
            "name": "Solution Implementation (VAS)"
        },
        "role_id": {
            "id": "FpQnsVBGNXkL",
            "name": "Senior VAS"
        },
        "timestamp": 1780992857267,
        "user_id": "hfGTJvgBCv0g"
    },
    "error": false,
    "message": "Authentication successful."
}

var get_data_project = {
    "amount": 193740000,
    "company_id": 28208,
    "created_at": 1780979827906,
    "created_by": 0,
    "id": "58gDOdiQ6Zet",
    "ids": "58gDOdiQ6Zet",
    "planned_invoicing_month": 6,
    "planned_invoicing_week": 26,
    "planned_invoicing_year": 2026,
    "planned_sign_off_month": 6,
    "planned_sign_off_week": 25,
    "planned_sign_off_year": 2026,
    "project_id": {
        "actual_end_date": 1781222400000,
        "actual_mandays": 75.81,
        "actual_manhours": 606.5,
        "actual_start_date": 1769731200000,
        "address": null,
        "classification_id": {
            "id": "RHZSSzYerNH2",
            "name": "Retention"
        },
        "client_id": {
            "id": "cEwLQnDuQZaa8",
            "name": "PT CIMB Niaga "
        },
        "code": "BZRP",
        "collection_type": "MONETARY",
        "company_id": 28208,
        "created_at": 1776069823887,
        "created_by": 0,
        "id": "yIoYMWMrWC3y4",
        "ids": "yIoYMWMrWC3y4",
        "is_deleted": "NO",
        "name": "CIMB - Biztrip",
        "officeless_version": "1.0",
        "planned_end_date": 1769644800000,
        "planned_mandays": 90.31,
        "planned_manhours": 722.5,
        "pm_id": {
            "id": "pQRZAQlkvlI",
            "name": "Raissa Hana Adara"
        },
        "project_type_id": {
            "id": "izY883QDSft",
            "name": "Custom"
        },
        "sow_mandays": 0,
        "sow_manhours": 0,
        "status_id": {
            "id": "1OymtFM79LpV",
            "name": "Delayed"
        },
        "total_project_value": 193740000,
        "updated_at": 1780977881701,
        "updated_by": 0,
        "updated_by_project_user": "UKA9XRNLQWI",
        "zoho_url": null
    },
    "project_id_text": "yIoYMWMrWC3y4",
    "remarks": "",
    "status_invoicing_id": {
        "id": "tSxNmKcyFJcX",
        "name": "Backlog"
    },
    "status_sign_off_id": {
        "id": "tSxNmKcyFJcX",
        "name": "Backlog"
    },
    "term_of_payment": "CHANGE_REQUEST",
    "updated_at": 1780979827906,
    "updated_by": 0
};

// buatkan logic untuk liat perubahan data per field, nanti datanya bakal kayak gini:
/*
    {
    action: "UPDATE",
    property_name: "term_of_payment",
    previous_value: "GO_LIVE",
    new_value: "CHANGE_REQUEST",
    remarks: "",
    updated_by: {
      id: 187743,
      name: "Rizki Haddi Prayoga"
    },
    updated_at: 1780989123456
  }
*/

var body = req.body;
var current_data = get_data_project;

var tracked_fields = [
    "amount",
    "planned_invoicing_month",
    "planned_invoicing_week",
    "planned_invoicing_year",
    "planned_sign_off_month",
    "planned_sign_off_week",
    "planned_sign_off_year",
    "status_invoicing_id",
    "status_sign_off_id",
    "term_of_payment",
    "remarks"
];

var change_logs = Array.isArray(get_data_project.change_logs) ? get_data_project.change_logs : [];
var i;
var field;
var old_value;
var new_value;

for (i = 0; i < tracked_fields.length; i++) {
    field = tracked_fields[i];

    old_value = current_data[field];
    new_value = body[field];

    // skip jika field tidak dikirim
    if (typeof new_value === "undefined") {
        continue;
    }

    // skip jika tidak ada perubahan
    if (JSON.stringify(old_value) === JSON.stringify(new_value)) {
        continue;
    }

    change_logs.push({
        action: "UPDATE",
        property_name: field,
        previous_value: old_value,
        new_value: new_value,
        remarks: "",
        updated_by: {
            id: authenticate.data.user_id,
            name: authenticate.data.name
        },
        updated_at: authenticate.data.timestamp
    });
}

console.log(change_logs);