var payload = {
  eachHours: {
    end: 1717192799999,
    endInText: "1-Juni-2024 4:59",
    groupDedicated: 5,
    index: 5,
    indexLocket: 5,
    start: 1717189200000,
    startInText: "1-Juni-2024 4:00",
  },
  idParameter: "BJqYgTmHR",
  queryData: {
    query_general: {
      awb_date_end: 1718384400000,
      awb_date_start: 1717174800000,
      branch_id_multi: [
        {
          id: "CGK",
          name: "CGK",
        },
      ],
    },
    query_khusus: {
      econnote_flag: "N",
    },
  },
  stage: "General AWB Date",
  temporaryDateGenerateID: "tLMPgTiHR",
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2pvbm9taWMtand0LXNlcnZpY2UiLCJpYXQiOjE3MTk3NjY4MDUsImV4cCI6MTc1MTMwMjgwNSwic3ViIjoyOTcyLCJzZXNzX2lkIjozMjY5NywidXNlciI6eyJpZCI6Mjk3MiwiZW1haWwiOiJpa2FzdXBlcnRlc3RAZ21haWwuY29tIiwiY29tcGFueV9pZCI6MjMwLCJ1c2VyX2NvbXBhbnlfaWQiOjMwNTIsInVzZXJfcm9sZSI6MSwidXNlcl9yb2xlX25hbWUiOiJhZG1pbiJ9LCJsYW5nIjoiZW5fVVMiLCJzZXNzaW9uX3NldHRpbmciOjF9.DxXquRGhnN4pHrH_ZOJ1SwElAd5E6osiql8mhfpGrQk",
};

function generateQueryObject(payload) {
  var result = {};
  var stage = payload.stage;
  var eachHours = payload.eachHours;
  var queryData = payload.queryData;

  var dateKey =
    stage === "General Payment TRF Date" ? "payment_trf_date_ccnc" : "awb_date";

  if (eachHours && eachHours.start && eachHours.end) {
    result.where_between_and = {};
    result.where_between_and[dateKey] = [eachHours.start, eachHours.end];
  }

  var whereIsAnd = {};
  var whereInAnd = {};
  var whereInOr = {};

  function processQuery(query) {
    for (var key in query) {
      if (query.hasOwnProperty(key)) {
        var value = query[key];
        if (typeof value === "string") {
          if (key === "econnote_flag" && value === "N") {
            whereInOr[key] = ["N", ""];
          } else {
            whereIsAnd[key] = value;
          }
        } else if (typeof value === "object" && !Array.isArray(value)) {
          whereIsAnd[key] = value.name;
        } else if (Array.isArray(value)) {
          if (key === "branch_id_multi") {
            whereInAnd["branch_id"] = value.map(function (v) {
              return v.name;
            });
          } else if (key === "status_connote" || key === "service_code") {
            whereInAnd[key] = value.map(function (v) {
              return v.name;
            });
          } else {
            whereIsAnd[key] = value.map(function (v) {
              return v.name;
            });
          }
        }
      }
    }
  }

  // Process query_general and query_khusus
  processQuery(queryData.query_general);
  processQuery(queryData.query_khusus);

  if (Object.keys(whereIsAnd).length > 0) {
    result.where_is_and = whereIsAnd;
  }

  if (Object.keys(whereInAnd).length > 0) {
    result.where_in_and = whereInAnd;
  }

  if (Object.keys(whereInOr).length > 0) {
    result.where_in_or = whereInOr;
  }

  return result;
}

var filterKhusus = generateQueryObject(payload, payload.stage);

console.log(filterKhusus);

var apiCount =
  "https://gateway-raise-pro.jne.co.id/v1/nocode/joana/dataset/record/fetch-v2-public?count=true";

var payloadAPI = {
  page: 1,
  limit: 10,
  dataset_id: "3j3EXIV4R", // t_connote_data
  filter: filterKhusus,
};
