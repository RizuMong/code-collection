var payload = {
  dataParameter: {
    counterLocket: 1,
    generateTime: 1722397004546,
    idLocket: "jW_eI4rSR",
    idParameter: "Qspz4V9Ig",
    parameterCreate: {
      query_general: {
        awb_date_end: 1699808400000,
        awb_date_start: 1698771600000,
        status_connote: [
          {
            id: "N198EK6nR",
            name: "Open",
          },
          {
            id: "AD4QPKenR",
            name: "Received & Sorted",
          },
          {
            id: "ZHTQPK6nR",
            name: "Ready to be Invoiced",
          },
          {
            id: "l78wPKe7R",
            name: "Invoiced, FP not Generated",
          },
          {
            id: "FoR_EK67g",
            name: "Invoiced, FP Generated",
          },
        ],
      },
      query_khusus: {
        service_code: [
          {
            id: "aX3hvpE4g",
            name: "INTL20",
          },
          {
            id: "t3q2vpE4g",
            name: "INTL19",
          },
          {
            id: "GzehDpP4R",
            name: "INTL16",
          },
          {
            id: "aZehDtE4R",
            name: "INTL15",
          },
          {
            id: "pVehDpP4g",
            name: "INTL10",
          },
          {
            id: "RDehvtPVR",
            name: "INTL",
          },
          {
            id: "5hehDpEVR",
            name: "CCINTL",
          },
        ],
      },
      status_export: "Ready to Generate",
      status_report: "Processing",
      total_connote_process: "626.579",
      total_connote_process_number: 626579,
      total_paid_amount: 0,
      updated_at: 1722397071200,
      updated_by: 1922,
    },
    periodConnoteFrom: 1698771600000,
    periodConnoteTo: 1699894799999,
    total_connote: 626579,
  },
  eachHours: {
    end: 1699891199999,
    finalDate: true,
    finalIntervals: true,
    id_date: "Y6WgH4rIR",
    locket: 10,
    start: 1699887600000,
  },
  generateTime: 1722397004546,
  idDate: "Y6WgH4rIR",
  temporaryDateGenerateID: "NRMRHV9SR",
};

var dataConnote = [
  {
    actual_flight_date: "--",
    origin_branch_id: "CGK",
    service_code: "INTL20"
  },
];

function filterDataConnote(payload, dataConnote) {
  var queryKhusus = payload.dataParameter.parameterCreate.query_khusus;

  if (Object.keys(queryKhusus).length > 0) {
    dataConnote = dataConnote.filter(function(item) {
      return Object.keys(queryKhusus).every(function(key) {
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

console.log("Filtered dataConnote:", dataConnote);
console.log("Filtered dataConnote length:", dataConnote.length);

