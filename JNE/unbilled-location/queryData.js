var payload = {
  dataParameter: {
    aging: ["All"],
    cutt_off: 1713891600000,
    destination_branch: [
      {
        id: "pMdNf3fVR",
        name: "BDO",
      },
    ],
    destination_urban_village_name: [
      {
        id: "RGGmT2QVgz",
        name: "ARJASARI",
      },
    ],
    id_parent: "JinamKfSg",
    national_parent: [],
    origin_branch: [
      {
        id: "ReFNB3fVg",
        name: "CGK",
      },
    ],
    origin_urban_village_name: [],
    period_connote_date_from: 1698771600000,
    period_connote_date_to: 1698771600000,
    maxIndex: 48,
  },
  eachHours: {
    end: 1706842799999,
    endInText: "2-Februari-2024 9:59",
    groupDedicated: 1,
    index: 34,
    locket: 34,
    start: 1706839200000,
    startInText: "2-Februari-2024 9:00",
  },
};

// ================ Get Data Connote =================
var filters = "";
var isWithoutAnd = true;

// ==================== national id ==================
if (
  payload.dataParameter.national_parent &&
  payload.dataParameter.national_parent.length > 0
) {
  if (isWithoutAnd) {
    isWithoutAnd = false;
  } else {
    filters += " AND";
  }

  var nationalParentIDs = payload.dataParameter.national_parent.map(
    function (parent) {
      return "'" + parent.name.split(" ")[0] + "'";
    }
  );

  filters += " national_parent_id IN (" + nationalParentIDs.join(", ") + ")";
}

// =========== origin_branch ============
if (payload.dataParameter.origin_branch) {
  if (payload.dataParameter.origin_branch.length > 0) {
    isWithoutAnd ? (isWithoutAnd = false) : (filters += " AND");
    filters += " origin_branch_id IN (";
    for (i in payload.dataParameter.origin_branch) {
      if (i != payload.dataParameter.origin_branch.length - 1) {
        filters +=
          "'" +
          payload.dataParameter.origin_branch[i].name.split(" ")[0] +
          "'" +
          ", ";
      } else {
        filters +=
          "'" +
          payload.dataParameter.origin_branch[i].name.split(" ")[0] +
          "'";
      }
    }
    filters += ")";
  }
}

// =========== origin_urban_village_name ============
if (payload.dataParameter.origin_urban_village_name) {
  if (payload.dataParameter.origin_urban_village_name.length > 0) {
    isWithoutAnd ? (isWithoutAnd = false) : (filters += " AND");
    filters += " origin_urban_village_name IN (";
    for (i in payload.dataParameter.origin_urban_village_name) {
      if (i != payload.dataParameter.origin_urban_village_name.length - 1) {
        filters +=
          "'" +
          payload.dataParameter.origin_urban_village_name[i].name +
          "'" +
          ", ";
      } else {
        filters +=
          "'" +
          payload.dataParameter.origin_urban_village_name[i].name +
          "'";
      }
    }

    filters += ")";
  }
}

// =========== destination_branch ============
if (payload.dataParameter.destination_branch) {
  if (payload.dataParameter.destination_branch.length > 0) {
    isWithoutAnd ? (isWithoutAnd = false) : (filters += " AND");
    filters += " destination_branch_id IN (";
    for (i in payload.dataParameter.destination_branch) {
      if (i != payload.dataParameter.destination_branch.length - 1) {
        filters +=
          "'" +
          payload.dataParameter.destination_branch[i].name.split(" ")[0] +
          "'" +
          ", ";
      } else {
        filters +=
          "'" +
          payload.dataParameter.destination_branch[i].name.split(" ")[0] +
          "'";
      }
    }
    filters += ")";
  }
}

// =========== destination_urban_village_name ============
if (payload.dataParameter.destination_urban_village_name) {
  if (payload.dataParameter.destination_urban_village_name.length > 0) {
    isWithoutAnd ? (isWithoutAnd = false) : (filters += " AND");
    filters += " destination_urban_village_name IN (";
    for (i in payload.dataParameter.destination_urban_village_name) {
      if (
        i !=
        payload.dataParameter.destination_urban_village_name.length - 1
      ) {
        filters +=
          "'" +
          payload.dataParameter.destination_urban_village_name[i].name +
          "'" +
          ", ";
      } else {
        filters +=
          "'" +
          payload.dataParameter.destination_urban_village_name[i].name +
          "'";
      }
    }
    filters += ")";
  }
}

// =========== Bagian Per Tanggal-an ===================
function endDate(ts) {
  var timestamp = parseInt(ts);
  var date = new Date(timestamp);

  // Set ke jam 11:59:59 malam
  date.setHours(23, 59, 59, 999);

  date.setHours(date.getHours());

  return date.getTime();
}

var cutOff = payload.dataParameter.cutt_off;
var connoteFromDate = payload.eachHours.start;
var connoteToDate = payload.eachHours.end;

var statusAll =
  " AND status_connote IN ('Open', 'Ready to be Invoiced', 'Invoiced, FP not Generated', 'Invoiced, FP Generated', 'Received & Sorted')";

var dummyColumnArr = [
  "awb_number",
  "branch_id",
  "customer_id",
  "origin_branch_id",
  "origin_urban_village_name",
  "destination_branch_id",
  "destination_urban_village_name",
  "national_parent_id",
  "original_amount_number",
  "discount_amount_awb_number",
  "adjusted_amount_number",
  "packing_number",
  "surcharge_number",
  "other_charges_number",
  "total_packing_charges_number",
  "original_insurance_admin",
  "original_insurance_premi",
  "adjusted_insurance_admin_number",
  "adjusted_insurance_premi_number",
  "awb_date",
  "invoice_date",
  "status_connote",
];

var columnData = "";
dummyColumnArr.forEach(function (column) {
  columnData += column + ", ";
});

columnData = columnData.slice(0, -2);

//==== Query Get Data =====
var queryGetData =
  "SELECT " +
  columnData +
  " from t_connote_data WHERE " +
  filters +
  statusAll +
  " AND connote_cancel = 'No' AND awb_date BETWEEN " +
  connoteFromDate +
  " AND " +
  connoteToDate
  // +
  // " OR (invoice_date >= " +
  // cutOff +
  // " OR invoice_date = 0)";

console.log({
  queryGetData: queryGetData,
  filters: filters,
});
