var dataListReport = [
  {
    "achievement": "",
    "actual": 0,
    "actual_percentage": 0,
    "id_parent": "BtD4f0lSg",
    "id_report_unbilled_to_total_revenue_ratio": "yLBvfAlIRV",
    "total_all_connote": 100,
    "total_all_dpp": 243,
    "total_billed_connote": 100,
    "total_billed_dpp": 100,
    "total_unbilled_connote": 1,
    "total_unbilled_dpp": 100,
    "unbilled_to_total_revenue_ratio_amount": 0,
    "unbilled_to_total_revenue_ratio_connote": 0,
},
];

function _numberToPercentage(data) {
  if (data === null || data === "" || data === undefined) {
    return "0%";
  } else {
    return data.toFixed(2).toString() + "%";
  };
};

function _numberToString(data) {
  if (data !== null) {
      return data.toString();
  } else {
      return '';
  }
};

var dataPolarisasi = {
  polarisasi: "Lower is better",
  target:  "10%",
};

var listReportKPI = [];

dataListReport.forEach(function (item) {
  // % Achievement
  var unbilled_to_total_revenue_ratio_amount = 0;
  if (item.total_all_dpp !== 0) {
    unbilled_to_total_revenue_ratio_amount = 
    (item.total_unbilled_dpp / item.total_all_dpp) * 100;
  }
  
  var targetNumber = parseFloat(dataPolarisasi.target.replace('%', '')) / 100;
  var ratioNumber = unbilled_to_total_revenue_ratio_amount / 100;
  var outputachievement = 0;
  
  if (ratioNumber !== 0) {
    outputachievement = (targetNumber / ratioNumber) * 100;
  }
  outputachievement = outputachievement.toFixed(2) + "%";

  // Actual
  var actual = 0;
  if (item.total_all_dpp !== 0) {
    actual = (item.total_unbilled_dpp / item.total_all_dpp) * 100 / item.total_all_dpp * 100;
  }
  
  var actual_percentage = 0;
  if (item.total_all_dpp !== 0) {
    actual_percentage = actual + (actual - targetNumber) * 100;
  };

  var RationAmount = 0;

  if (item.total_all_dpp !== 0) {
    RationAmount = (item.total_unbilled_dpp / item.total_all_dpp) * 100;
  };

  var RationConnote = 0;

  if (item.total_all_dpp !== 0) {
    RationConnote = (item.total_unbilled_connote / item.total_all_connote) * 100
  }

  // Percentage
  var unbilledRationAmount = _numberToPercentage(RationAmount);
  var unbilledRationConnote = _numberToPercentage(RationConnote);

  listReportKPI.push({
    ids: item.id_report_unbilled_to_total_revenue_ratio,

    // Percentage
    unbilled_to_total_revenue_ratio_connote: unbilledRationConnote,
    unbilled_to_total_revenue_ratio_amount: unbilledRationAmount,

    // Polarisasi
    polarisasi: dataPolarisasi.polarisasi,
    target:  dataPolarisasi.target,

    // Actual
    actual: actual.toFixed(2) + "%",
    actual_percentage: actual_percentage.toFixed(2) + "%",

    // % Achievment
    achievement: outputachievement,

    // Amount
    total_all_connote: _numberToString(item.total_all_connote),
    total_all_dpp: _numberToString(item.total_all_dpp),
    total_billed_connote: _numberToString(item.total_billed_connote),
    total_billed_dpp: _numberToString(item.total_billed_dpp),
    total_unbilled_connote: _numberToString(item.total_unbilled_connote),
    total_unbilled_dpp: _numberToString(item.total_unbilled_dpp),
  });
});

console.log(listReportKPI);
