var transaction = {
    "act_id": "2308",
    "activity": {
        "id": "3LBfCoGHg",
        "name": "DP - Pengiriman Dokumen [NON-IDR]"
    },
    "additional_info": {
        "infobaru": ""
    },
    "address": {
        "id": "V_5dLnXNg",
        "name": "MKR00000003/001 - Jl Mekari"
    },
    "amount": 2200000,
    "amount_after_penalty": 0,
    "amount_after_penalty_currency": {},
    "amount_origin": 2200000,
    "amount_penalty": null,
    "amount_penalty_currency": {
        "convertion_amount": 50000,
        "origin_amount": 50000,
        "origin_currency": "IDR",
        "rate": 1,
        "target_currency": "IDR"
    },
    "approved_by_email": [],
    "approved_by_text": "",
    "attachment_receipt": "sOiMUE7vg",
    "bank_account": {
        "id": "42WWTbivR",
        "name": "123456774 - Amanda - BANK BCA SYARIAH"
    },
    "cc_ocr_detected_blocked_content": [],
    "cc_ocr_duplicate_image": [],
    "cc_ocr_duplicate_transaction": [],
    "company_id": 25236,
    "created_at": 1766976263197,
    "created_by": 188777,
    "currency": {
        "convertion_amount": 2200000,
        "origin_amount": 2200000,
        "origin_currency": "IDR",
        "rate": 1,
        "target_currency": "IDR"
    },
    "description": "Pengiriman dokumen  29 desember 2025",
    "description_lite": "Pengiriman dokumen  29 desember 2025...",
    "dibuat_oleh": "testing.uat2@mailinator.com",
    "diedit_oleh": "testing.uat2@mailinator.com",
    "div_code": "1611-47077-6519",
    "div_name": "Head Office-LDSK",
    "document_support_2": [],
    "duplicate_image": "",
    "duplicate_transaction": "No duplicated Detected",
    "email_initiator": "testing.uat2@mailinator.com",
    "exchange_rate": 1,
    "flag_from_rejected": "false",
    "flow_status": "draft",
    "id": "tR2G8EnDR",
    "id_direct_payment": "tR2G8EnDR",
    "id_key": 278,
    "initiator_name": "Testing UAT2",
    "invoice_date": 1766941200000,
    "invoice_number": "13242-4243544",
    "multiple_activity": [
        {
            "more_activity": {
                "id": "",
                "name": ""
            }
        }
    ],
    "nik": "UAT001",
    "note": "",
    "number_format": "",
    "ocr_amount_status_tags": {
        "background": "#ff0000",
        "font_color": "#ffffff",
        "name": "Not Match"
    },
    "ocr_amount_value": null,
    "ocr_invoice_bank_account_number_status_tags": {
        "background": "#ff0000",
        "font_color": "#ffffff",
        "name": "Not Match"
    },
    "ocr_invoice_bank_account_number_value": "",
    "ocr_invoice_date_status_tags": {
        "background": "#ff0000",
        "font_color": "#ffffff",
        "name": "Not Match"
    },
    "ocr_invoice_date_value": null,
    "ocr_invoice_number_status_tags": {
        "background": "#ff0000",
        "font_color": "#ffffff",
        "name": "Not Match"
    },
    "ocr_invoice_number_value": "",
    "ocr_summary_status": "Not Suspected",
    "origin_currency": "IDR",
    "payment_amount": 2000000,
    "payment_amount_currency": {
        "convertion_amount": 2000000,
        "origin_amount": 2000000,
        "origin_currency": "IDR",
        "rate": 1,
        "target_currency": "IDR"
    },
    "penalty": false,
    "position": {
        "id": "1WJqDZgvR",
        "name": "MR ACCRUE 2"
    },
    "reimbursed_at": null,
    "rejected_by_email": [],
    "rejected_by_text": "",
    "sl_desc": "POSTAGES",
    "sl_id": "225",
    "status_content_blocker": "",
    "sub_ledger": "map[id:mkGvFgZIg name:5512051-0000-00000]",
    "subledger": {
        "id": "mkGvFgZIg",
        "name": "5512051-0000-00000"
    },
    "target_currency": "IDR",
    "tax_field_document": [
        {
            "tax_document": {
                "id": "0_JSiAZSg",
                "name": "Sertifikat Badan Usaha Kualifikasi Menengah/Besar/Spesial"
            }
        }
    ],
    "total_source_of_fund": 2000000,
    "total_source_of_fund_and_tax": 2200000,
    "total_source_of_fund_and_tax_currency": {
        "convertion_amount": 2200000,
        "origin_amount": 2200000,
        "origin_currency": "IDR",
        "rate": 1,
        "target_currency": "IDR"
    },
    "total_source_of_fund_currency": {
        "convertion_amount": 2000000,
        "origin_amount": 2000000,
        "origin_currency": "IDR",
        "rate": 1,
        "target_currency": "IDR"
    },
    "total_source_of_fund_origin": 2000000,
    "transaction_for": {
        "id": "",
        "name": ""
    },
    "type": "Direct Payment",
    "updated_at": 1766994555776,
    "updated_by": 188777,
    "vendor": {
        "id": "kb5dYnuHg",
        "name": "Mapping Division 1"
    },
    "vendor_bank_account": "23456789",
    "vendor_id_key": "3"
};

var req = {
    "id_key": 278,
    "status_content_blocker": "No blocked content Detected"
}

function _log(msg) {
    console.log(msg)
};

var ocr_summary_status = "On Progress"
var total_suspected = 0
var total_non_suspected = 0

var suspected_condition = ["Duplicated Detected", "Blocked Content Detected"]
var non_suspected_condition = ["No duplicated Detected", "No blocked content Detected"]

var ocr_status = [
    req.duplicate_image || transaction.duplicate_image || "",
    req.duplicate_transaction || transaction.duplicate_transaction || "",
    req.status_content_blocker || transaction.status_content_blocker || ""
]

ocr_status.forEach(function (status) {
    if (suspected_condition.indexOf(status) > -1) {
        total_suspected++
    } else if (non_suspected_condition.indexOf(status) > -1) {
        total_non_suspected++
    }
})

if (total_suspected > 0) {
    ocr_summary_status = "Suspected"
} else if (total_non_suspected >= ocr_status.length && total_suspected <= 0) {
    ocr_summary_status = "Not Suspected"
} else if (total_suspected == 0) {
    ocr_summary_status = "Not Suspected"
}

_log({ total_suspected: total_suspected })
_log({ total_non_suspected: total_non_suspected })
_log({ ocr_status: ocr_status })