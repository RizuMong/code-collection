[
  {
    "$match": {
      "awb_date": {
        "$gte": 1725231600000,
        "$lte": 1725235199999
      },
      "branch_id": {
        "$in": ["AMI", "AMQ", "BDJ", "BDO"]
      }
    }
  },
  {
    "$project": {
      "awb_date": 1,
      "awb_number": 1,
      "branch_id": 1,
      "branch_name": 1,
      "branch_type": 1,
      "commission_type_na_cashless": 1,
      "connote_cancel": 1,
      "customer_id": 1,
      "customer_name": 1,
      "customer_type": 1,
      "customer_type_name": 1,
      "date_time_discount_calculation": 1,
      "destination_sys_code": 1,
      "adjusted_amount_number": {
        "$cond": {
          "if": { "$eq": ["$discount_amount_awb_number", null] },
          "then": "0",
          "else": { "$toString": "$discount_amount_awb_number" }
        }
      },
      "discount_amount_awb_number": {
        "$cond": {
          "if": { "$eq": ["$discount_amount_awb_number", null] },
          "then": "0",
          "else": { "$toString": "$discount_amount_awb_number" }
        }
      },
      "fee_rate_na_cashless": 1,
      "final_connote_pod_created_by": 1,
      "final_connote_pod_status_date_time": 1,
      "final_pod_status_code": 1,
      "final_pod_success_status": 1,
      "flagging_discount_calculation": 1,
      "goods_value": 1,
      "ho_no": 1,
      "invoice_date": 1,
      "invoice_number": 1,
      "is_cashless": 1,
      "local_parent_id": 1,
      "local_parent_name": 1,
      "na_principal": 1,
      "national_parent_id": 1,
      "national_parent_name": 1,
      "origin_entity_type": 1,
      "origin_managing_entity_id": 1,
      "origin_managing_entity_name": 1,
      "origin_sys_code": 1,
      "original_amount_number": {
        "$cond": {
          "if": { "$eq": ["$original_amount_number", null] },
          "then": "0",
          "else": { "$toString": "$original_amount_number" }
        }
      },
      "other_charges_number": {
        "$cond": {
          "if": { "$eq": ["$other_charges_number", null] },
          "then": "0",
          "else": { "$toString": "$other_charges_number" }
        }
      },
      "packing_number": {
        "$cond": {
          "if": { "$eq": ["$packing_number", null] },
          "then": "0",
          "else": { "$toString": "$packing_number" }
        }
      },
      "quantity": 1,
      "service_type": 1,
      "status_connote": 1,
      "surcharge_number": {
        "$cond": {
          "if": { "$eq": ["$surcharge_number", null] },
          "then": "0",
          "else": { "$toString": "$surcharge_number" }
        }
      },
      "total_amount_after_discount_charges_dpp": 1,
      "total_packing_charges_number": {
        "$cond": {
          "if": { "$eq": ["$total_packing_charges_number", null] },
          "then": "0",
          "else": { "$toString": "$total_packing_charges_number" }
        }
      },
      "updated_destination_code": 1,
      "updated_origin_code": 1,
      "updated_service_type": 1,
      "updated_weight_kgs": 1,
      "weight_kg": 1
    }
  },
  {
    "$addFields": {
      "awb_date": {
        "$cond": [
          { "$eq": ["$awb_date", 0] },
          "--",
          {
            "$concat": [
              { "$toString": { "$dayOfMonth": { "$toDate": "$awb_date" } } },
              "-",
              {
                "$switch": {
                  "branches": [
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 1] }, "then": "Jan" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 2] }, "then": "Feb" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 3] }, "then": "Mar" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 4] }, "then": "Apr" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 5] }, "then": "May" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 6] }, "then": "Jun" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 7] }, "then": "Jul" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 8] }, "then": "Aug" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 9] }, "then": "Sep" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 10] }, "then": "Oct" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 11] }, "then": "Nov" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$awb_date" } }, 12] }, "then": "Dec" }
                  ],
                  "default": "--"
                }
              },
              "-",
              { "$substr": [{ "$toString": { "$year": { "$toDate": "$awb_date" } } }, 2, 2] }
            ]
          }
        ]
      },
      "date_time_discount_calculation": {
        "$cond": [
          { "$eq": ["$date_time_discount_calculation", 0] },
          "--",
          {
            "$concat": [
              { "$toString": { "$dayOfMonth": { "$toDate": "$date_time_discount_calculation" } } },
              "-",
              {
                "$switch": {
                  "branches": [
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 1] }, "then": "Jan" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 2] }, "then": "Feb" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 3] }, "then": "Mar" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 4] }, "then": "Apr" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 5] }, "then": "May" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 6] }, "then": "Jun" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 7] }, "then": "Jul" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 8] }, "then": "Aug" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 9] }, "then": "Sep" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 10] }, "then": "Oct" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 11] }, "then": "Nov" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$date_time_discount_calculation" } }, 12] }, "then": "Dec" }
                  ],
                  "default": "--"
                }
              },
              "-",
              { "$substr": [{ "$toString": { "$year": { "$toDate": "$date_time_discount_calculation" } } }, 2, 2] }
            ]
          }
        ]
      },
      "final_connote_pod_status_date_time": {
        "$cond": [
          { "$eq": ["$final_connote_pod_status_date_time", 0] },
          "--",
          {
            "$concat": [
              { "$toString": { "$dayOfMonth": { "$toDate": "$final_connote_pod_status_date_time" } } },
              "-",
              {
                "$switch": {
                  "branches": [
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 1] }, "then": "Jan" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 2] }, "then": "Feb" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 3] }, "then": "Mar" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 4] }, "then": "Apr" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 5] }, "then": "May" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 6] }, "then": "Jun" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 7] }, "then": "Jul" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 8] }, "then": "Aug" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 9] }, "then": "Sep" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 10] }, "then": "Oct" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 11] }, "then": "Nov" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$final_connote_pod_status_date_time" } }, 12] }, "then": "Dec" }
                  ],
                  "default": "--"
                }
              },
              "-",
              { "$substr": [{ "$toString": { "$year": { "$toDate": "$final_connote_pod_status_date_time" } } }, 2, 2] }
            ]
          }
        ]
      },
      "invoice_date": {
        "$cond": [
          { "$eq": ["$invoice_date", 0] },
          "--",
          {
            "$concat": [
              { "$toString": { "$dayOfMonth": { "$toDate": "$invoice_date" } } },
              "-",
              {
                "$switch": {
                  "branches": [
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 1] }, "then": "Jan" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 2] }, "then": "Feb" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 3] }, "then": "Mar" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 4] }, "then": "Apr" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 5] }, "then": "May" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 6] }, "then": "Jun" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 7] }, "then": "Jul" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 8] }, "then": "Aug" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 9] }, "then": "Sep" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 10] }, "then": "Oct" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 11] }, "then": "Nov" },
                    { "case": { "$eq": [{ "$month": { "$toDate": "$invoice_date" } }, 12] }, "then": "Dec" }
                  ],
                  "default": "--"
                }
              },
              "-",
              { "$substr": [{ "$toString": { "$year": { "$toDate": "$invoice_date" } } }, 2, 2] }
            ]
          }
        ]
      },
      "awb_number": { "$concat": ["'", { "$toString": "$awb_number" }] },
      "grup_parent_id": { "$literal": payload.dataParameter.idParameter },
      "id_export": {
        "$concat": [
          { "$toString": "$awb_number" },
          "-",
          payload.dataParameter.idParameter
        ]
      },
      "part": { "$literal": 0 }
    }
  }
]