function commify(value, prefix, postfix, delimiter, comma) {
  prefix = prefix || ''
  postfix = postfix || ''
  delimiter = delimiter || ','
  comma = comma || '.'

  var arrWhole = ('' + value).split('.')
  var arrTheNumber = arrWhole[0].split('').reverse()
  var newNum = Array()
  for (var i = 0; i < arrTheNumber.length; i++) {
      newNum[newNum.length] = i % 3 === 2 && i < arrTheNumber.length - 1 ? delimiter + arrTheNumber[i] : arrTheNumber[i]
  }
  var returnNum = newNum.reverse().join('')
  if (arrWhole[1]) {
      returnNum += comma + arrWhole[1]
  }
  return prefix + returnNum + postfix
}

function _log(msg) {
  console.log(msg)
}

function autofill_duplicate(obj, transaction_type, id_key) {
  var reference_objs = reference_tables[transaction_type] || {}
  var transaction = reference_objs[Number(id_key)] || {}
  obj.submitted_by = transaction.dibuat_oleh
  obj.submitted_date = transaction.submitted_at
  obj.status = transaction.flow_status
  obj.other_infos = ""
  obj.invoice_attachment = transaction.attachment_receipt
  obj.invoice_number = transaction.invoice_number
  obj.invoice_date = transaction.invoice_date
  obj.currency = transaction.currency
  obj.description = transaction.description
  obj.activity = transaction.activity && transaction.activity.name

  if (transaction.parent && transaction.parent.id_key) {
      obj.duplicate_settlement_id_key = transaction.parent.id_key
  }

  if (transaction_type == "Direct Payment") {
      var total_sof = transaction.total_source_of_fund_currency || {}
      var total_sof_amount = total_sof.origin_amount || 0
      var total_sof_rate = total_sof.rate || 1

      var total_sof_n_tax = transaction.total_source_of_fund_and_tax_currency || {}
      var total_sof_n_tax_amount = total_sof_n_tax.origin_amount || 0
      var total_sof_n_tax_rate = total_sof_n_tax.rate || 1

      obj.other_infos += 'Total SoF: ' + commify(total_sof_amount * total_sof_rate) + '\n'
      obj.other_infos += 'Total SoF & Tax: ' + commify(total_sof_n_tax_amount * total_sof_n_tax_rate) + '\n'
  };
};

var transaction = {
  "act_id": "405",
  "activity": {
      "id": "M0VHIzZIR",
      "name": "R_Parkir Non Berlangganan - [Office based & HySpace]"
  },
  "additional_info": {
      "date_from": 1734973200000,
      "date_to": 1734973200000,
      "no_polisi": "B1236EZO",
      "nominal_sesuai_strukbon": 25000
  },
  "amount": 25000,
  "amount_origin": 25000,
  "approved_at": 1736396794148,
  "approved_by": [
      182221
  ],
  "approved_by_email": [],
  "approved_by_text": "",
  "attachment_receipt": "https://storage.googleapis.com/prod-wtyvmadi/25236/677f4440f1b06-PARKIR-RIDHA---DES-2024.jpg",
  "bank_account_holder_name": "RIDHA RACHMAWATI",
  "bank_account_number": "762843110200",
  "bank_name": "Bank CIMB Niaga",
  "cc_ocr_detected_blocked_content": [],
  "cc_ocr_duplicate_image": [],
  "cc_ocr_duplicate_transaction": [],
  "company_id": 25236,
  "created_at": 1736393877820,
  "created_by": 184312,
  "currency": {
      "convertion_amount": 25000,
      "origin_amount": 25000,
      "origin_currency": "IDR",
      "rate": 1,
      "target_currency": "IDR"
  },
  "description": "PARKIR MOBIL PASARAYA BLOK M DESEMBER 2024",
  "dibuat_oleh": "ridha.rachmawati@cimbniaga.co.id",
  "diedit_oleh": "DODY.WIBISONO@CIMBNIAGA.CO.ID",
  "div_code": "1611-47077-3005",
  "div_name": "COAG-CENTRALIZE OPERATIONAL",
  "document_support_multiple": [],
  "duplicate_image": "Duplicated Detected",
  "duplicate_transaction": "",
  "email_initiator": "RIDHA.RACHMAWATI@CIMBNIAGA.CO.ID",
  "exchange_rate": 1,
  "flag_from_rejected": "false",
  "flow_id": 509266024,
  "flow_status": "payment process",
  "id": "BDZAOSDNR",
  "id_key": 74812,
  "id_reimbursement": "BDZAOSDNR",
  "image_duplicate": [
      "70481-Reimbursement ",
      "73187-Reimbursement ",
      "73207-Reimbursement ",
      "73271-Reimbursement ",
      "73666-Reimbursement ",
      "73978-Reimbursement "
  ],
  "initiator_name": "RIDHA RACHMAWATI ",
  "invoice_date": 1734973200000,
  "invoice_number": "01F3QG4P1D1G",
  "nik": "5377075",
  "note": "ok approve",
  "number_format": "74812/REIMBURSE/2025",
  "ocr_amount_status_tags": {
      "background": "#ff0000",
      "font_color": "#ffffff",
      "name": "Not Match"
  },
  "ocr_amount_value": null,
  "ocr_invoice_date_status_tags": {
      "background": "#00ff11",
      "font_color": "#ffffff",
      "name": "Match"
  },
  "ocr_invoice_date_value": 1734998400000,
  "ocr_invoice_number_status_tags": {
      "background": "#00ff11",
      "font_color": "#ffffff",
      "name": "Match"
  },
  "ocr_invoice_number_value": "01F3QG4P1D1G",
  "ocr_summary_status": "Suspected",
  "origin_currency": "IDR",
  "position": {
      "id": "-eDRm8ZIg",
      "name": "5377075-Fixed Assets Officer"
  },
  "project": {
      "id": "",
      "name": ""
  },
  "rejected_by_text": "",
  "request_for": {
      "id": "",
      "name": ""
  },
  "sharing_cost": "Non-Sharing Cost",
  "sl_desc": "STAFF TRANSPORTATION SUBSIDY",
  "sl_id": "170",
  "staff_tagging": [
      {
          "amount": 0,
          "amount_origin": null,
          "staff": {
              "id": "",
              "name": ""
          }
      }
  ],
  "status_content_blocker": "",
  "subledger": {
      "id": "bbFHFgWSR",
      "name": "5210542-0000-00000"
  },
  "submit_for_approval": false,
  "submitted_at": 1736393894138,
  "target_currency": "IDR",
  "total_amount_staff_tagging": 0,
  "total_amount_staff_tagging_origin": 0,
  "updated_at": 1736413318635,
  "updated_by": 157190
}

var reference_tables = {}

transaction.cc_ocr_duplicate_image = []
transaction.cc_ocr_duplicate_transaction = []
transaction.cc_ocr_detected_blocked_content = []
transaction.ocr_detected_blocked_content_value = []
transaction.ocr_duplicate_image_similarity_percentage = []
transaction.ocr_duplicate_image_suspect_ref_id = []
transaction.ocr_duplicate_image_transaction_type = []
transaction.ocr_duplicate_transaction_suspect_ref_id = []
transaction.ocr_duplicate_transaction_transaction_type = []

var data_duplicate_image = [
  {
    "company_id": 25236,
    "created_at": 1736393939062,
    "created_by": 184312,
    "duplicate_transaction_id_key": 70481,
    "duplicate_transaction_ids": [
        "eZ-g0rVNg"
    ],
    "duplicate_transaction_type": "Reimbursement",
    "id": "EWe1dIvHR",
    "id_ocr_duplicate_image": "EWe1dIvHR",
    "isnative": "0",
    "similarity": 91,
    "transaction_id": {
        "id": "BDZAOSDNR",
        "name": "74812"
    },
    "transaction_type": "Reimbursement",
    "updated_at": 1736393939062,
    "updated_by": 184312
},
{
  "company_id": 25236,
  "created_at": 1736393939611,
  "created_by": 184312,
  "duplicate_transaction_id_key": 73271,
  "duplicate_transaction_ids": [
      "dOuH_LHNR"
  ],
  "duplicate_transaction_type": "Reimbursement",
  "id": "uB6JOIDNg",
  "id_ocr_duplicate_image": "uB6JOIDNg",
  "isnative": "0",
  "similarity": 90,
  "transaction_id": {
      "id": "BDZAOSDNR",
      "name": "74812"
  },
  "transaction_type": "Reimbursement",
  "updated_at": 1736393939611,
  "updated_by": 184312
}
];
var data_duplicate_transaction = [];
var data_detected_blocked_content = [];

// fill up ocr duplicate image custom class
// and its ^ summary
data_duplicate_image.forEach(function (item, i) {
  var id_key = String(item.duplicate_transaction_id_key)
  var transaction_type = String(item.duplicate_transaction_type)
  var similarity = (item.similarity || 0).toFixed(2)
  if (i < 3) {
      var obj = {}
      obj.duplicate_transaction_id_key = id_key
      obj.duplicate_transaction_type = transaction_type
      autofill_duplicate(obj, transaction_type, id_key)
      transaction.cc_ocr_duplicate_image.push(obj)
  }
  transaction.ocr_duplicate_image_suspect_ref_id.push(id_key)
  transaction.ocr_duplicate_image_transaction_type.push(transaction_type)
  transaction.ocr_duplicate_image_similarity_percentage.push(similarity)
})

// fill up ocr transaction custom class
// and its ^ summary
data_duplicate_transaction.forEach(function (item, i) {
  var id_key = String(item.duplicate_transaction_id_key)
  var transaction_type = String(item.duplicate_transaction_type)
  if (i < 3) {
      var obj = {}
      obj.duplicate_transaction_id_key = id_key
      obj.duplicate_transaction_type = transaction_type
      autofill_duplicate(obj, transaction_type, id_key)
      transaction.cc_ocr_duplicate_transaction.push(obj)
  }
  transaction.ocr_duplicate_transaction_suspect_ref_id.push(id_key)
  transaction.ocr_duplicate_transaction_transaction_type.push(transaction_type)
})

// fill up ocr content blocker custom class
// and its ^ summary
data_detected_blocked_content.forEach(function (item, i) {
  var value = String(item.value)
  if (i < 3) {
      var obj = {}
      obj.value = value
      transaction.cc_ocr_detected_blocked_content.push(obj)
  }
  transaction.ocr_detected_blocked_content_value.push(value)
})

transaction.ocr_detected_blocked_content_value_text = transaction.ocr_detected_blocked_content_value.join('^')
transaction.ocr_duplicate_image_similarity_percentage_text = transaction.ocr_duplicate_image_similarity_percentage.join('^')
transaction.ocr_duplicate_image_suspect_ref_id_text = transaction.ocr_duplicate_image_suspect_ref_id.join('^')
transaction.ocr_duplicate_image_transaction_type_text = transaction.ocr_duplicate_image_transaction_type.join('^')
transaction.ocr_duplicate_transaction_suspect_ref_id_text = transaction.ocr_duplicate_transaction_suspect_ref_id.join('^')
transaction.ocr_duplicate_transaction_transaction_type_text = transaction.ocr_duplicate_transaction_transaction_type.join('^')

_log(transaction)