var getData = [
    {
        "activity": {
            "id": "OAWi-FWSR",
            "name": "R_Makan Minum [Nasabah]"
        },
        "additional_info": {
            "alamat": "Ashta SCBD Jakarta",
            "jenis_usaha": "eksplorasi, pengekstraksian, dan produksi emas, perak, tembaga, serta nikel",
            "jumlah_perserta": 6,
            "nama": "Albert Saputro, Mirdal",
            "nama_perusahaan": "PT Merdeka Copper Gold Tbk",
            "nama_tempat": "Nonna Bona",
            "photo_eventkegiatan_wajib_hanya_untuk_consumer__ebb": [],
            "posisi": [
                {
                    "id": "kvATuEiSg",
                    "name": "Direktur Perusahaan"
                }
            ],
            "status_nasabah": {
                "id": "QtqQuPmSR",
                "name": "Nasabah Existing"
            },
            "tujuan_kegiatan_entertaiment": "Discuss on business update and deals "
        },
        "amount": 4455825,
        "amount_origin": 4455825,
        "approved_at_text": "",
        "attachment_receipt": "ql7db2xvg",
        "bank_account_holder_name": "MIRANTY SUPARDI",
        "bank_account_number": "702578046800",
        "bank_name": "Bank CIMB Niaga",
        "cc_ocr_detected_blocked_content": [],
        "cc_ocr_duplicate_image": [],
        "cc_ocr_duplicate_transaction": [],
        "company_code": {
            "id": "1611",
            "name": "1611 - CIMB NIAGA - KONVENSIONAL"
        },
        "company_id": 25236,
        "created_at": 1780660588281,
        "created_at_text": "2026-06-05 18:56",
        "created_by": 177500,
        "currency": {
            "convertion_amount": 4455825,
            "origin_amount": 4455825,
            "origin_currency": "IDR",
            "rate": 1,
            "target_currency": "IDR"
        },
        "description": "Meeting with PT Merdeka Copper Gold Tbk",
        "document_support_multiple": [],
        "duplicate_image": "No duplicated Detected",
        "duplicate_transaction": "No duplicated Detected",
        "email_initiator": "miranty.supardi@cimbniaga.co.id",
        "exchange_rate": 1,
        "flag_from_rejected": "false",
        "flow_id": 1493107253,
        "flow_status": "sent",
        "id": "ds9Abhxvg",
        "id_key": 162236,
        "id_object": {
            "id": "ds9Abhxvg",
            "name": "ds9Abhxvg"
        },
        "id_reimbursement": "ds9Abhxvg",
        "image_duplicate": [],
        "initiator_name": "MIRANTY SUPARDI",
        "invoice_date": 1780419600000,
        "invoice_date_text": "2026-06-03",
        "invoice_number": "ONB202606030023",
        "note": "",
        "ocr_amount_status_tags": {
            "background": "#00ff11",
            "font_color": "#ffffff",
            "name": "Match"
        },
        "ocr_amount_value": 4455825,
        "ocr_detected_blocked_content_value": [],
        "ocr_detected_blocked_content_value_text": "",
        "ocr_duplicate_image_similarity_percentage": [],
        "ocr_duplicate_image_similarity_percentage_text": "",
        "ocr_duplicate_image_suspect_ref_id": [],
        "ocr_duplicate_image_suspect_ref_id_text": "",
        "ocr_duplicate_image_transaction_type": [],
        "ocr_duplicate_image_transaction_type_text": "",
        "ocr_duplicate_transaction_suspect_ref_id": [],
        "ocr_duplicate_transaction_suspect_ref_id_text": "",
        "ocr_duplicate_transaction_transaction_type": [],
        "ocr_duplicate_transaction_transaction_type_text": "",
        "ocr_invoice_date_status_tags": {
            "background": "#00ff11",
            "font_color": "#ffffff",
            "name": "Match"
        },
        "ocr_invoice_date_value": 1780444800000,
        "ocr_invoice_date_value_text": "2026-06-03",
        "ocr_invoice_number_status_tags": {
            "background": "#00ff11",
            "font_color": "#ffffff",
            "name": "Match"
        },
        "ocr_invoice_number_value": "ONB202606030023",
        "ocr_summary_status": "Not Suspected",
        "origin_currency": "IDR",
        "position": {
            "id": "jWgB1LZIR",
            "name": "3026907-Head of Corporate Banking, Investment Banking Coverage, & Loan Syndication"
        },
        "project": {
            "id": "",
            "name": ""
        },
        "reimbursed_at_text": "",
        "rejected_at_text": "",
        "request_for": {
            "id": "",
            "name": ""
        },
        "sharing_cost": "Sharing Cost",
        "sl_desc": "EXISTING CLIENTS / SUPPLIERS",
        "staff_tagging": [
            {
                "amount": 4455825,
                "amount_origin": 4455825,
                "staff": {
                    "id": "pk5BoEWSg",
                    "name": "1611-47008-7511 - 5369238-Corporate & Investment Banking Coverage Head - Team III - novianty.alfian@cimbniaga.co.id"
                }
            }
        ],
        "status_content_blocker": "No blocked content Detected",
        "subledger": {
            "id": "1RXNFRWSg",
            "name": "5410201-0000-00000"
        },
        "submit_for_approval": false,
        "submitted_at": 1780660634209,
        "submitted_at_text": "2026-06-05 18:57",
        "submitted_first_at": 1780660634209,
        "target_currency": "IDR",
        "total_amount_staff_tagging": 4455825,
        "total_amount_staff_tagging_origin": 4455825,
        "updated_at": 1781510353185,
        "updated_by": 187730
    }
];


var mandatory_keys = [
    "div_code", "div_name", "bank_account_number", "email_initiator"]


// loop data di getData nanti cari mandaotry keys nya, kalau semisal ada yang gak ada maka di anggap issye dan kalau semisal ada key nya tapi kosong itu di anggap issue juga

var issues = [];

for (var x = 0; x < getData.length; x++) {
    var item = getData[x];
    var missingFields = [];

    for (var i = 0; i < mandatory_keys.length; i++) {
        var key = mandatory_keys[i];
        var value = item[key];

        if (
            !item.hasOwnProperty(key) ||
            value === null ||
            value === undefined ||
            value === ""
        ) {
            missingFields.push(
                key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, function (c) {
                        return c.toUpperCase();
                    })
            );
        }
    }

    if (missingFields.length > 0) {
        issues.push({
            id_key: item.id_key,
            message: missingFields.join(", ") + " kosong"
        });
    }
}

console.log(issues);

var missingFields = [];

for (var i = 0; i < mandatory_keys.length; i++) {
    var key = mandatory_keys[i];
    if (
        !data.hasOwnProperty(key) ||
        data[key] === null ||
        data[key] === undefined ||
        data[key] === ""
    ) {
        missingFields.push(
            key
                .replace(/_/g, " ")
                .replace(/\b\w/g, function (c) {
                    return c.toUpperCase();
                })
        );
    }
}

var message = "";

if (missingFields.length > 0) {
    message = missingFields.join(", ") + " kosong";
};