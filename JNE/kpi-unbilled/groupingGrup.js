[
  {
    "$match": {
      "id_parent": payload.id_parent,
      "branch_id": payload.eachData.branch_id,
      "customer_id": payload.eachData.customer_id,
    }
  },
  {
    "$project": {
      "_id": 0,
      "original_amount": { "$ifNull": ["$original_amount", 0] },
      "packing": { "$ifNull": ["$packing", 0] },
      "other_charges": { "$ifNull": ["$other_charges", 0] },
      "surcharge": { "$ifNull": ["$surcharge", 0] },
      "discount_amount_awb": { "$ifNull": ["$discount_amount_awb", 0] },
      "total_connote": { "$ifNull": ["$total_connote", 0] },

      "branch_id": { "$ifNull": ["$branch_id", ""] },
      "branch_name": { "$ifNull": ["$branch_name", ""] },
      "customer_id": { "$ifNull": ["$customer_id", ""] },
      "customer_name": { "$ifNull": ["$customer_name", ""] },
      "customer_type": { "$ifNull": ["$customer_type", ""] },
      "customer_type_name": { "$ifNull": ["$customer_type_name", ""] },
      "local_parent_id": { "$ifNull": ["$local_parent_id", ""] },
      "local_parent_name": { "$ifNull": ["$local_parent_name", ""] },
      "national_parent": { "$ifNull": ["$national_parent_id", ""] },
      "national_parent_name": { "$ifNull": ["$national_parent_name", ""] },
    }
  },
  {
    "$group": {
      "_id": null,
      "totalOriginalAmount": { "$sum": "$original_amount" },
      "totalPacking": { "$sum": "$packing" },
      "totalOtherCharges": { "$sum": "$other_charges" },
      "totalSurcharge": { "$sum": "$surcharge" },
      "totalDiscountAmountAWB": { "$sum": "$discount_amount_awb" },
      "totalConnote": { "$sum": "$total_connote" },

      "branch_id": { "$first": "$branch_id" },
      "branch_name": { "$first": "$branch_name" },
      "customer_id": { "$first": "$customer_id" },
      "customer_name": { "$first": "$customer_name" },
      "national_parent_id": { "$first": "$national_parent_id" },
      "national_parent_name": { "$first": "$national_parent_name" },
      "local_parent_id": { "$first": "$local_parent_id" },
      "local_parent_name": { "$first": "$local_parent_name" },
    }
  }
]