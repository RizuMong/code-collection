var dataConnote = [
  {
    "_id": [
        103,
        103,
        2,
        75,
        140,
        174,
        60,
        105,
        85,
        9,
        139,
        32
    ],
    "actual_weight": "1",
    "adjusted_amount_number": "78000",
    "awb_date": "21-Dec-24",
    "awb_number": "'PKUEC06572291624",
    "branch_id": "PKU",
    "branch_name": "JNE PEKANBARU",
    "branch_type": "CABANG UTAMA MITRA",
    "commission_type_na_cashless": "PERCENTAGE",
    "connote_cancel": "No",
    "customer_id": "10957900",
    "customer_name": "PT. SEPAKAT JAYA PERTAMA",
    "customer_type": "CORPORATE",
    "customer_type_name": "NON NA STANDAR",
    "date_time_discount_calculation": "25-Dec-24",
    "destination_sys_code": "PLM10017",
    "discount_amount_awb_number": "0",
    "fee_rate_na_cashless": 0,
    "final_connote_pod_created_by": "PLM244",
    "final_connote_pod_status_date_time": "22-Dec-24",
    "final_pod_status_code": "D01",
    "final_pod_success_status": "Y",
    "flagging_discount_calculation": "NOT_FOUND",
    "goods_value": "",
    "grup_parent_id": "aGRIGbDNR",
    "ho_no": "",
    "id_export": "PKUEC06572291624-aGRIGbDNR",
    "invoice_date": "26-Dec-24",
    "invoice_number": "PKU/STD/03/2412001102",
    "is_cashless": "No",
    "local_parent_id": "--",
    "local_parent_name": "--",
    "na_principal": "0",
    "national_parent_id": "--",
    "national_parent_name": "--",
    "origin_entity_type": "",
    "origin_managing_entity_id": "",
    "origin_managing_entity_name": "",
    "origin_sys_code": "PKU10000",
    "original_amount_number": "78000",
    "other_charges_number": "0",
    "packing_number": "0",
    "part": 0,
    "quantity": "1",
    "service_code": "YES23",
    "service_type": "YES",
    "status_connote": "Invoiced, Delivered to Customer",
    "surcharge_number": "0",
    "total_amount_after_discount_charges_dpp": "78000",
    "total_packing_charges_number": "0",
    "updated_destination_code": "PLM10017",
    "updated_origin_code": "PKU10000",
    "updated_service_type": "YES23",
    "updated_weight_kgs": "1",
    "weight_kg": "1"
},
]

function filterDataConnote(payload, dataConnote) {
  var queryKhusus = payload.dataParameter.parameterCreate.query_khusus;

  if (Object.keys(queryKhusus).length > 0) {
      dataConnote = dataConnote.filter(function (item) {
          return Object.keys(queryKhusus).every(function (key) {
              var queryValue = queryKhusus[key];
              if (Array.isArray(queryValue)) {
                  for (var i = 0; i < queryValue.length; i++) {
                      if (item[key] === queryValue[i].name) {
                          return true;
                      }
                  }
                  return false;
              } else if (typeof queryValue === "object" && queryValue !== null) {
                  return item[key] === queryValue.name;
              } else {
                  return item[key] === queryValue;
              }
          });
      });
  }

  return dataConnote;
}

dataConnote = filterDataConnote(payload, dataConnote);

_log(dataConnote[0]);
_log(dataConnote.length);