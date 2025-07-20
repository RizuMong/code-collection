var data_duplicate_image = [
  {
    company_id: 25236,
    created_at: 1737133350153,
    created_by: 188247,
    duplicate_transaction_id_key: 103554,
    duplicate_transaction_ids: ["DPAXRUDNR"],
    duplicate_transaction_type: "Direct Payment",
    id: "vHRyFCDHR",
    id_ocr_duplicate_image: "vHRyFCDHR",
    isnative: "0",
    similarity: 100,
    transaction_id: {
      id: "ymZOFjDNR",
      name: "104290",
    },
    transaction_type: "Direct Payment",
    updated_at: 1737133350153,
    updated_by: 188247,
  },
];
var data_duplicate_transaction = [];
var data_detected_blocked_content = [];

var data = {
  cc_ocr_duplicate_image: [],
  cc_ocr_duplicate_transaction: [],
  cc_ocr_detected_blocked_content: [],
  ocr_detected_blocked_content_value: [],
  ocr_duplicate_image_similarity_percentage: [],
  ocr_duplicate_image_suspect_ref_id: [],
  ocr_duplicate_image_transaction_type: [],
  ocr_duplicate_transaction_suspect_ref_id: [],
  ocr_duplicate_transaction_transaction_type: [],
};

data_duplicate_image.forEach(function (item, i) {
  var id_key = String(item.duplicate_transaction_id_key)
  var transaction_type = String(item.duplicate_transaction_type)
  var similarity = (item.similarity || 0).toFixed(2)
  data.ocr_duplicate_image_suspect_ref_id.push(id_key)
  data.ocr_duplicate_image_transaction_type.push(transaction_type)
  data.ocr_duplicate_image_similarity_percentage.push(similarity)
})

data_duplicate_transaction.forEach(function (item, i) {
  var id_key = String(item.duplicate_transaction_id_key)
  var transaction_type = String(item.duplicate_transaction_type)
  data.ocr_duplicate_transaction_suspect_ref_id.push(id_key)
  data.ocr_duplicate_transaction_transaction_type.push(transaction_type)
})

data_detected_blocked_content.forEach(function (item, i) {
  var value = String(item.value)
  transaction.ocr_detected_blocked_content_value.push(value)
});

var dataOCR = {
  "ocr_detected_blocked_content_value_text" : data.ocr_detected_blocked_content_value.join('^'),
  "ocr_duplicate_image_similarity_percentage_text" : data.ocr_duplicate_image_similarity_percentage.join('^'),
  "ocr_duplicate_image_suspect_ref_id_text" : data.ocr_duplicate_image_suspect_ref_id.join('^'),
  "ocr_duplicate_image_transaction_type_text" : data.ocr_duplicate_image_transaction_type.join('^'),
  "ocr_duplicate_transaction_suspect_ref_id_text" : data.ocr_duplicate_transaction_suspect_ref_id.join('^'),
  "ocr_duplicate_transaction_transaction_type_text" : data.ocr_duplicate_transaction_transaction_type.join('^')
};

console.log(dataOCR);