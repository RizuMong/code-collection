var findRecord = {
    "accrue_code": "21052026AC2682",
    "activity_id_key": 2308,
    "amount": 1000,
    "amount_penalty": 0,
    "company_id": 25236,
    "created_at": 1780989892718,
    "created_by": 202533,
    "dibuat_oleh": "johannes.setiawan@mekari.com",
    "id": "Q6hxcUbDg",
    "id_import_source_of_fund_direct_payment": "Q6hxcUbDg",
    "import_id": "Dq2b58xDg",
    "invoice_number": "Test-Import-SoF-Accrue-Dp-01",
    "keterangan_record": "",
    "number_row": "3",
    "rc_code": "",
    "ref_id": 919,
    "status_upload": {
        "background": "#c2deec",
        "font_color": "#245e9e",
        "name": "PRODUCTION"
    },
    "tax_formula": "Tax Formula Conventional baru ",
    "updated_at": 1780989913710,
    "updated_by": 202533
};

function _log(msg) {
    console.log(msg);
};

var tax_formula = findRecord.tax_formula;

if (!tax_formula || !tax_formula.trim()) {
    _log("Tax Formula tidak boleh kosong");
    // _stopAutomation();
} else {
    tax_formula = tax_formula.trim();
}

_log({
    tax_formula: tax_formula
});