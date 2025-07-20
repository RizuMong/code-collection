var payload = {
  "counterLocket": 1,
  "dataParameter": {
      "column_type": "Cashless",
      "counterLocket": 1,
      "generateTime": 1725421677015,
      "idLocket": "utTUdg6Sg",
      "idParameter": "hhZ-dgeIR",
      "parameterCreate": {
          "_id": "66d7d86d8e441d23a88763c6",
          "awb_date_end": 1709139600000,
          "awb_date_start": 1706720400000,
          "awb_number": [],
          "branch_id_multi": [],
          "branch_user_created": {
              "id": "ReFNB3fVg",
              "name": "CGK"
          },
          "cod_flag": "",
          "company_id": 230,
          "connote_batching_status": {
              "id": "",
              "name": ""
          },
          "connote_cancel": "",
          "created_at": 1725421677015,
          "created_by": 2170,
          "created_by_email": "bcmssuv.rian@jne.co.id",
          "customer_id": {
              "id": "",
              "name": ""
          },
          "customer_status": "",
          "customer_type": {
              "id": "",
              "name": ""
          },
          "customer_type_name": {
              "id": "",
              "name": ""
          },
          "destination_branch_id": {
              "id": "",
              "name": ""
          },
          "destination_urban_village_name": "",
          "econnote_flag": "",
          "filter_column_type": {
              "id": "ontQmVCIR",
              "name": "Cashless"
          },
          "flagging_stage": "General AWB Date",
          "id": "hhZ-dgeIR",
          "ids": "hhZ-dgeIR",
          "insurance_flag": "",
          "invoice_number": [],
          "invoice_number_cod": [],
          "length_batched": 0,
          "local_parent_id": "",
          "management_fee_id": "",
          "management_fee_name": "",
          "na_principal": {
              "id": "",
              "name": ""
          },
          "national_parent_id": "",
          "origin_branch_id": {
              "id": "",
              "name": ""
          },
          "origin_managing_entity_id": "",
          "origin_urban_village_name": "",
          "outbound_manifest_status": "",
          "payment_trf_date_ccnc_end": null,
          "payment_trf_date_ccnc_start": null,
          "pod_success_status": "",
          "pricing_detail_combination_id": "",
          "proforma_invoice_number": [],
          "progress_status": "0 %",
          "query_general": {
              "awb_date_end": 1709139600000,
              "awb_date_start": 1706720400000
          },
          "query_khusus": {},
          "service_code": [],
          "status_connote": [],
          "status_export": "Ready to Generate",
          "status_report": "Processing",
          "total_connote_process": "20.229.787",
          "total_connote_process_number": 20229787,
          "total_paid_amount": 0,
          "updated_at": 1725421770693,
          "updated_by": 2170
      },
      "periodConnoteFrom": 1706720400000,
      "periodConnoteTo": 1709225999999,
      "total_connote": 20229787
  },
  "eachHours": {
      "end": 1708966799999,
      "endInText": "26-Februari-2024 23:59",
      "groupDedicated": 4,
      "index": 624,
      "locket": 24,
      "start": 1708963200000,
      "startInText": "26-Februari-2024 23:00"
  },
  "temporaryDateGenerateID": "gwqUdgeIRm"
};

var dataConnote = [
  {
    adjusted_amount_number: 6300,
    awb_date: 1708963200000,
    awb_number: "CM21632047663",
    branch_id: "CGK",
    connote_cancel: "No",
    customer_id: "80514305",
    customer_name: "SHOPEE INTERNATIONAL INDONESIA PT",
    destination_sys_code: "DPK10064",
    discount_amount_awb_number: 3700,
    final_connote_pod_created_by: "DPK739",
    final_connote_pod_status_date_time: 1709047187000,
    final_pod_status_code: "D01",
    final_pod_success_status: "Y",
    goods_value: "373680",
    invoice_date: 1714323600000,
    invoice_number: "CGK/GIMFEE/02/2404000180",
    is_cashless: "Yes",
    na_principal: "0",
    origin_sys_code: "CGK10000",
    original_amount_number: 10000,
    other_charges_number: 0,
    packing_number: 0,
    quantity: "1",
    service_type: "REG",
    surcharge_number: 0,
    total_amount_after_discount_charges_dpp: "6300",
    total_packing_charges_number: 0,
    updated_destination_code: "CGK10000",
    updated_origin_code: "CGK10000",
    updated_service_type: "CGK10000",
    updated_weight_kgs: "0.8",
    weight_kg: "0.8",
  }
];

function convertNumbersToStrings(data) {
  var result = [], len = data.length, idParameter = payload.dataParameter.idParameter;

  for (var i = 0; i < len; i++) {
    var item = data[i];
    var newItem = {};
    var awbNumber = item.awb_number;
    
    for (var key in item) {
      if (item.hasOwnProperty(key)) {
        var value = item[key];

        if (typeof value !== 'string') {
          if (key.indexOf('date') !== -1) {
            newItem[key] = value === 0 ? '--' : formatDateInline(value);
          } else {
            newItem[key] = String(value);
          }
        } else {
          newItem[key] = value;
        }

        if (key === 'awb_number' && value[0] !== "'") {
          newItem[key] = "'" + value;
        }
      }
    }

    // Add 
    newItem.part = 0;
    newItem.id_export = awbNumber + '-' + idParameter;
    newItem.grup_parent_id = idParameter;

    result.push(newItem);
  }

  return result;
}

function formatDateInline(timestamp) {
  var date = new Date(timestamp);
  var day = date.getDate().toString().padStart(2, '0');
  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear().toString().slice(-2);
  return day + '-' + month + '-' + year;
}

var convertedConnote = convertNumbersToStrings(dataConnote);

console.log(convertedConnote);
