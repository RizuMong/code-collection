function _log(msg) {
    console.log(msg);
};

var masterPosition = {
    "code": " 5600589-Card Collection Staff XVII - Field Collector - West Outregion II - Bandung",
    "company_id": 25236,
    "created_at": 1765336811696,
    "created_by": 166885,
    "division": {
        "id": "Ttp1zhZIg",
        "name": "1611-47077-2901 - CREDIT CARD COLLECTION"
    },
    "employee_email": {
        "id": "ztV-9nMDR",
        "name": "ilham.adiguna@cimbniaga.co.id"
    },
    "employee_email_temp": {
        "id": "",
        "name": ""
    },
    "end_date": null,
    "id_master_position": "47Ffr7MDg",
    "is_position_yoda": true,
    "layer": {
        "id": "napULhiIR",
        "name": "D-6"
    },
    "name": " 5600589-Card Collection Staff XVII - Field Collector - West Outregion II - Bandung",
    "organigram_id": 68827,
    "parent_position": {
        "id": "KzJ5duZSR",
        "name": "3019202-Unsecured Collection Team Leader - Field Collector - Jawa Barat I"
    },
    "start_date": null,
    "updated_at": 1776997012493,
    "updated_by": 187743
};

var detailPosition = {
    "data": {
        "code": "5600589-Card Collection Staff XVIII - Field Collector - West Outregion II - Bandung",
        "created_by": {
            "email": "",
            "id": 0
        },
        "created_date": "2025-12-10 10:20:13",
        "description": "",
        "divisions": [],
        "id": 68827,
        "is_claimer": false,
        "location": "",
        "name": "5600589-Card Collection Staff XVIII - Field Collector - West Outregion II - Bandung",
        "need_update": false,
        "organigram_head_id": 0,
        "organigram_head_name": "",
        "position_layer": "",
        "temporary": {},
        "updated_by": {
            "email": "",
            "id": 0
        },
        "updated_date": "2025-12-10 10:20:13",
        "user": {
            "email": "ilham.adiguna@cimbniaga.co.id",
            "first_name": "ILHAM ADIGUNA",
            "id": 189293,
            "last_name": "",
            "photo_url": ""
        }
    },
    "error": false,
    "message": "Successfully detail organigram with ID #68827"
}

// var sqlUpdateOrganigramMember = "update jojoflow_db.organigram_member set state = 4, updated_date = CURRENT_TIMESTAMP, updated_by = 0 where state = 1 and  organigram_id = " + masterPosition.organigram_id + " and user_company_id=" + detailPosition.data.user.profile.user_company_id;
var sqlUpdateOrganigramMember = "update jojoflow_db.organigram_member set state = 4, updated_date = CURRENT_TIMESTAMP, updated_by = 0 where state = 1 and  organigram_id = " + masterPosition.organigram_id + " and user_company_id =" + detailPosition.data.user.id;

_log(sqlUpdateOrganigramMember)