var columnHeader = {
  columnGet: {
    adjusted_amount_number: 1,
    awb_date: 1,
    awb_number: 1,
    branch_id: 1,
    branch_name: 1,
    branch_type: 1,
    commission_type_na_cashless: 1,
    connote_cancel: 1,
    customer_id: 1,
    customer_name: 1,
    customer_type: 1,
    customer_type_name: 1,
    date_time_discount_calculation: 1,
    destination_sys_code: 1,
    discount_amount_awb_number: 1,
    fee_rate_na_cashless: 1,
    final_connote_pod_created_by: 1,
    final_connote_pod_status_date_time: 1,
    final_pod_status_code: 1,
    final_pod_success_status: 1,
    flagging_discount_calculation: 1,
    goods_value: 1,
    ho_no: 1,
    invoice_date: 1,
    invoice_number: 1,
    is_cashless: 1,
    local_parent_id: 1,
    local_parent_name: 1,
    na_principal: 1,
    national_parent_id: 1,
    national_parent_name: 1,
    origin_entity_type: 1,
    origin_managing_entity_id: 1,
    origin_managing_entity_name: 1,
    origin_sys_code: 1,
    original_amount_number: 1,
    other_charges_number: 1,
    packing_number: 1,
    quantity: 1,
    service_type: 1,
    status_connote: 1,
    surcharge_number: 1,
    total_amount_after_discount_charges_dpp: 1,
    total_packing_charges_number: 1,
    updated_destination_code: 1,
    updated_origin_code: 1,
    updated_service_type: 1,
    updated_weight_kgs: 1,
    weight_kg: 1,
  },
};

var payload = {
  dataParameter: {
    idParameter: "81bzxsRHRz"
  }
};

var listColumnDate = [
  "awb_date",
  "date_time_discount_calculation",
  "final_connote_pod_status_date_time",
  "invoice_date"
]


function createDateTransformations(columnHeader) {
  var dateFields = {};
  for (var key in columnHeader.columnGet) {
    if (key.indexOf('date') !== -1) {
      dateFields[key] = {
        "$cond": [
          { "$eq": ["$" + key, 0] },
          "--",
          {
            "$concat": [
              { "$toString": { "$dayOfMonth": { "$toDate": "$" + key } } },
              "-",
              {
                "$switch": {
                  "branches": [
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 1] }, "then": "Jan" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 2] }, "then": "Feb" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 3] }, "then": "Mar" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 4] }, "then": "Apr" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 5] }, "then": "May" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 6] }, "then": "Jun" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 7] }, "then": "Jul" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 8] }, "then": "Aug" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 9] }, "then": "Sep" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 10] }, "then": "Oct" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 11] }, "then": "Nov" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$" + key } }, 12] }, "then": "Dec" }
                  ],
                  "default": "--"
                }
              },
              "-",
              { "$substr": [{ "$toString": { "$year": { "$toDate": "$" + key } } }, 2, 2] }
            ]
          }
        ]
      };
    }
  }
  return dateFields;
}

var dateTransformations = createDateTransformations(columnHeader);

console.log(dateTransformations);

var fields = dateTransformations;
fields.awb_number = { $concat: ["'", { $toString: "$awb_number" }] };
fields.grup_parent_id = { $literal: payload.dataParameter.idParameter };
fields.id_export = {
  $concat: [
    { $toString: "$awb_number" },
    "-",
    payload.dataParameter.idParameter
  ]
};
fields.part = { $literal: 0 };

// Query lengkap
var query = [
  {
    $addFields: fields
  }
];

console.log(JSON.stringify(query, null, 2));
