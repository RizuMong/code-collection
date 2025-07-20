if (payload.hasOwnProperty("column_type")) {
  if (payload.column_type == "Cashless") {
      listColumnGet = {
          "branch_id": 1,
          "branch_name": 1,
          "branch_type": 1,
          "awb_number": 1,
          "awb_date": 1,
          "customer_id": 1,
          "customer_name": 1,
          "local_parent_id": 1,
          "local_parent_name": 1,
          "national_parent_id": 1,
          "national_parent_name": 1,
          "customer_type": 1,
          "customer_type_name": 1,
          "na_principal": 1,
          "is_cashless": 1,
          "origin_sys_code": 1,
          "updated_origin_code": 1,
          "destination_sys_code": 1,
          "updated_destination_code": 1,
          "service_type": 1,
          "updated_service_type": 1,
          "quantity": 1,
          "weight_kg": 1,
          "updated_weight_kgs": 1,
          "goods_value": 1,
          "original_amount_number": {
            "$cond": {
              "if": { "$eq": ["$original_amount_number", null] },
              "then": "0",
              "else": { "$toString": "$original_amount_number" }
            }
          },
          "discount_amount_awb_number": {
            "$cond": {
              "if": { "$eq": ["$discount_amount_awb_number", null] },
              "then": "0",
              "else": { "$toString": "$discount_amount_awb_number" }
            }
          },
         "adjusted_amount_number": {
        "$cond": {
          "if": { "$eq": ["$adjusted_amount_number", null] },
          "then": "0",
          "else": { "$toString": "$adjusted_amount_number" }
        }
      },
          "packing_number": {
            "$cond": {
              "if": { "$eq": ["$packing_number", null] },
              "then": "0",
              "else": { "$toString": "$packing_number" }
            }
          },
          "surcharge_number": {
            "$cond": {
              "if": { "$eq": ["$surcharge_number", null] },
              "then": "0",
              "else": { "$toString": "$surcharge_number" }
            }
          },
          "other_charges_number": {
            "$cond": {
              "if": { "$eq": ["$other_charges_number", null] },
              "then": "0",
              "else": { "$toString": "$other_charges_number" }
            }
          },
          "total_packing_charges_number": {
            "$cond": {
              "if": { "$eq": ["$total_packing_charges_number", null] },
              "then": "0",
              "else": { "$toString": "$total_packing_charges_number" }
            }
          },
          "total_amount_after_discount_charges_dpp": 1,
          "final_connote_pod_status_date_time": 1,
          "final_connote_pod_created_by": 1,
          "final_pod_status_code": 1,
          "final_pod_success_status": 1,
          "status_connote": 1,
          "invoice_number": 1,
          "invoice_date": 1,
          "origin_entity_type": 1,
          "origin_managing_entity_id": 1,
          "origin_managing_entity_name": 1,
          "fee_rate_na_cashless": 1,
          "commission_type_na_cashless": 1,
          "ho_no": 1,
          "connote_cancel": 1,
          "date_time_discount_calculation": 1,
          "flagging_discount_calculation": 1
      }
  };
}
