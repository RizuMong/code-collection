
var req = {
    body: {
        "category_layer": {
            "company_id": 25236,
            "created_at": 1695038667763,
            "created_by": 166886,
            "dibuat_oleh": "MUHAMAD.SALTONI@CIMBNIAGA.CO.ID",
            "diedit_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
            "id": "aeIZXEmSR",
            "id_key": 5,
            "id_master_category_layer": "aeIZXEmSR",
            "label": "Activity",
            "name": "Activity",
            "updated_at": 1695805259407,
            "updated_by": 166887
        },
        "params": {
            "advanced_option": null,
            "attribute": null,
            "category_layer": {
                "company_id": 25236,
                "created_at": 1695038667763,
                "created_by": 166886,
                "dibuat_oleh": "MUHAMAD.SALTONI@CIMBNIAGA.CO.ID",
                "diedit_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
                "id": "aeIZXEmSR",
                "id_key": 5,
                "id_master_category_layer": "aeIZXEmSR",
                "label": "Activity",
                "name": "Activity",
                "updated_at": 1695805259407,
                "updated_by": 166887
            },
            "check_grade": false,
            "default_category": false,
            "description": null,
            "expense_type": null,
            "finance": null,
            "flow": null,
            "general": null,
            "jenis_pph": null,
            "layer_category": null,
            "mandatory_ocr": false,
            "mandatory_ocr_amount": false,
            "mandatory_ocr_bank_account": false,
            "mandatory_ocr_date": false,
            "mandatory_ocr_number": false,
            "mandatory_receipt": false,
            "mandatory_smartform": false,
            "max_amount_smartform": null,
            "max_amount_transaction": null,
            "name": null,
            "nominative": "No Tax Nominative",
            "option": null,
            "parent_category": null,
            "sl_amortisasi": null,
            "sl_expense_activity": null,
            "sl_penampung": null,
            "specific_finance": false,
            "status": "Active"
        }
    }
}

function _log(msg) {
    console.log(msg);
};

var expenseType = req.body.params.expense_type;
var typeNameReq = "";

if (expenseType && expenseType.name) {
    typeNameReq = expenseType.name;
}

if (expenseType && !typeNameReq && expenseType.label) {
    typeNameReq = expenseType.label;
};

var text = typeNameReq ? typeNameReq.toLowerCase() : "";

if (text.indexOf("settlement") !== -1) {
    var lastIndexOfSpace = typeName.lastIndexOf(' ')
    if (lastIndexOfSpace !== -1) {
        typeName = typeNameReq.substring(0, lastIndexOfSpace)
    }
}

var typeNameArray = ["General", typeName]

var advance_filter = {
    _filter_version: 2,
    "where_is_and": {
        "category_layer.id": parentCategoryLayer.id_master_category_layer,
    },
    "where_in_and": {
        "expense_type.name": typeNameArray
    }
}

_log(advance_filter);

var sort = {
    "name": 1
};

// var parentCategories = _findRecords('fb12ZhzVR', 1, 1000, sort, advance_filter, 'and');

res = {
    "data": parentCategories
}
_log(parentCategories);


