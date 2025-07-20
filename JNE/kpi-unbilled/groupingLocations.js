[
  {
    "$match": {
      "id_parent": payload.id_parent,
      "index": payload.groupIndex.index
    }
  },
  {
    "$group": {
      "_id": {
        "customer_id": "$customer_id",
        "branch_id": "$branch_id",
        "id_parent": "$id_parent"
      },
      "branchId": { "$first": "$branch_id" },
      "branchName": { "$first": "$branch_name" },
      "customerId": { "$first": "$customer_id" },
      "customerName": { "$first": "$customer_name" },
      "customerType": { "$first": "$customer_type" },
      "customerTypeName": { "$first": "$customer_type_name" },
      "nationalParentId": { "$first": "$national_parent_id" },
      "nationalParentName": { "$first": "$national_parent_name" },
      "localParentID": { "$first": "$local_parent_id" },
      "localParentName": { "$first": "$local_parent_name" },
      // Amount
      // Tambahkan Prosess Sum Billed sama Unbilled Connote
      "totalOriginalAmount": { "$sum": "$original_amount" },
      "totalPacking": { "$sum": "$packing" },
      "totalOtherCharges": { "$sum": "$other_charges" },
      "totalSurcharge": { "$sum": "$surcharge" },
      "totalDiscountAmountAWB": { "$sum": "$discount_amount_awb" },
      "totalConnote": { "$sum": 1 },
      "id_tmp_report_unbilled_to_total_revenue_ratio": { "$push": "$id_tmp_report_unbilled_to_total_revenue_ratio" }  
    }
  },
  {
    "$project": {
      "_id": 0,
      "unique_key": {
        "$concat": [
          "$_id.customer_id", "|",
          "$_id.branch_id", "|",
          "$_id.id_parent"
        ]
      },
      "branch_id": "$branchId",
      "branch_name": "$branchName",
      "customer_id": "$customerId",
      "customer_name": "$customerId",
      "national_parent_id": "$nationalParentId",
      "national_parent_name": "$nationalParentName",
      "local_parent_id": "$localParentID",
      "local_parent_name": "$localParentName",
      // Amount
      "original_amount": "$totalOriginalAmount",
      "packing": "$totalPacking",
      "other_charges": "$totalOtherCharges",
      "surcharge": "$totalSurcharge",
      "discount_amount_awb": "$totalDiscountAmountAWB",
      "total_connote": "$totalConnote",
      "id_tmp_report_unbilled_to_total_revenue_ratio": "$id_tmp_report_unbilled_to_total_revenue_ratio"  
    }
  }
]