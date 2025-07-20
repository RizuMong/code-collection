var payload = {
  counterLocket: 1,
  dataParameter: {
    column_type: "Cashless",
    counterLocket: 1,
    generateTime: 1726545757325,
    idLocket: "alJa_kgHg",
    idParameter: "MGda_kgHg",
    parameterCreate: {
      _id: "66e8ff5d8e441d23a83b9b30",
      awb_date_end: 1726333200000,
      awb_date_start: 1726246800000,
      awb_number: [],
      branch_id_multi: [
        {
          id: "CGK",
          name: "CGK",
        },
      ],
      branch_user_created: {
        id: "ReFNB3fVg",
        name: "CGK",
      },
      cod_flag: "",
      company_id: 230,
      connote_batching_status: {
        id: "",
        name: "",
      },
      connote_cancel: "",
      created_at: 1726545757325,
      created_by: 873,
      created_by_email: "bcmssuv.riyan@jne.co.id",
      customer_id: {
        id: "",
        name: "",
      },
      customer_status: "",
      customer_type: {
        id: "",
        name: "",
      },
      customer_type_name: {
        id: "",
        name: "",
      },
      destination_branch_id: {
        id: "",
        name: "",
      },
      destination_urban_village_name: "",
      econnote_flag: "",
      filter_column_type: {
        id: "ontQmVCIR",
        name: "Cashless",
      },
      flagging_stage: "General AWB Date",
      id: "MGda_kgHg",
      ids: "MGda_kgHg",
      insurance_flag: "",
      invoice_number: [],
      invoice_number_cod: [],
      length_batched: 0,
      local_parent_id: "",
      management_fee_id: "",
      management_fee_name: "",
      na_principal: {
        id: "",
        name: "",
      },
      national_parent_id: "",
      origin_branch_id: {
        id: "",
        name: "",
      },
      origin_managing_entity_id: "",
      origin_urban_village_name: "",
      outbound_manifest_status: "",
      payment_trf_date_ccnc_end: null,
      payment_trf_date_ccnc_start: null,
      pod_success_status: "",
      pricing_detail_combination_id: "",
      proforma_invoice_number: [],
      progress_status: "0 %",
      query_general: {
        awb_date_end: 1726333200000,
        awb_date_start: 1726246800000,
        branch_id_multi: [
          {
            id: "CGK",
            name: "CGK",
          },
        ],
      },
      query_khusus: {},
      service_code: [],
      status_connote: [],
      status_export: "Ready to Generate",
      status_report: "Processing",
      total_connote_process: "245.082",
      total_connote_process_number: 245082,
      total_paid_amount: 0,
      updated_at: 1726545758376,
      updated_by: 873,
    },
    periodConnoteFrom: 1726246800000,
    periodConnoteTo: 1726419599999,
    total_connote: 245082,
  },
  eachHours: {
    end: 1726358399999,
    endInText: "15-September-2024 6:59",
    groupDedicated: 1,
    index: 31,
    locket: 31,
    start: 1726354800000,
    startInText: "15-September-2024 6:00",
  },
  temporaryDateGenerateID: "kewalkRNgz",
};

var counterLocket = payload.counterLocket;
var match = {};

var queryGeneral = payload.dataParameter.parameterCreate.query_general;

for (var key in queryGeneral) {
    if (queryGeneral.hasOwnProperty(key)) {
        if (key === "branch_id_multi" && Array.isArray(queryGeneral[key])) {
            match.branch_id = {
                $in: queryGeneral[key].map(function (branch) {
                    return branch.name;
                }),
            };
        } else if (
            typeof queryGeneral[key] === "object" &&
            queryGeneral[key] !== null &&
            queryGeneral[key].id
        ) {
            match[key] = queryGeneral[key].id;
        } else if (
            key === "payment_trf_date_ccnc_start" ||
            key === "payment_trf_date_ccnc_end"
        ) {
            match.payment_trf_date_ccnc = match.payment_trf_date_ccnc || {};
            if (key === "payment_trf_date_ccnc_start") {
                match.payment_trf_date_ccnc.$gte = payload.eachHours.start;
            } else if (key === "payment_trf_date_ccnc_end") {
                match.payment_trf_date_ccnc.$lte = payload.eachHours.end;
            }
        } else if (key === "awb_date_start" || key === "awb_date_end") {
            match.awb_date = match.awb_date || {};
            if (key === "awb_date_start") {
                match.awb_date.$gte = payload.eachHours.start;
            } else if (key === "awb_date_end") {
                match.awb_date.$lte = payload.eachHours.end;
            }
        } else if (key === "status_connote" && Array.isArray(queryGeneral[key])) {
            match.status_connote = {
                $in: queryGeneral[key].map(function (status) {
                    return status.name;
                }),
            };
        }
    }
}

var query = [
    {
        $match: match
    },
    // {
    //     $project: columnHeader.columnGet
    // },
    {
        $project: { _id: 0 }
    }
];

console.log(query);
console.log(match);