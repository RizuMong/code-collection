function _numberToPercentage(data) {
  if (data === null || data === "" || data === undefined) {
    return "0%";
  } else {
    return data.toFixed(2).toString() + "%";
  };
};

function calculationTotalDPP(eachConnote) {
  return (
    changeNumber(eachConnote.adjusted_amount) +
    changeNumber(eachConnote.surcharge) +
    changeNumber(eachConnote.packing) +
    changeNumber(eachConnote.other_charges)
  );
};

// Calculate Unbilled to Total Revenue
// Total Connote
var outputTotalConnote = 0;
var outputTotalDPP = 0;

// Unbilled Connote
var outputTotalConnoteUnbilled = 0;
var outputTotalDPPUnbilled = 0;

// Billed Connote
var outputTotalConnoteBilled = 0;
var outputTotalDPPBilled = 0;

// Percentage
var outputUnbilledToTotalRevenueRatioConnote = 0;
var outputUnbilledToTotalRevenueRatioAmount = 0;

// Polarisasi
var outputPolarisasi = "";
var outputTarget = "";

// Actual
var outputActual = 0;
var outputActualPercentage = 0;

get_report_unbilled_to_total_revenue.forEach(function (eachConnote) {
  outputTotalConnote += 1;
  outputTotalDPP += calculationTotalDPP(eachConnote);

  // Filter Billed Connote
  if (eachConnote.is_unbilled === false) {
    outputTotalConnoteBilled += 1;
    outputTotalDPPBilled += calculationTotalDPP(eachConnote);
  }

  // Filter Unbilled Connote
  if (eachConnote.is_unbilled === true) {
    outputTotalConnoteUnbilled += 1;
    outputTotalDPPUnbilled += calculationTotalDPP(eachConnote);
  }
});

// Calculate Outside Looping
outputUnbilledToTotalRevenueRatioConnote =
  (outputTotalConnoteUnbilled / outputTotalConnote) * 100;
outputUnbilledToTotalRevenueRatioAmount =
  (outputTotalDPPUnbilled / outputTotalDPP) * 100;

// Hardcode
outputPolarisasi = "Lower is better";
outputTarget = "10%";

// _log("Total Connote");
// _log({
//   outputTotalConnote: outputTotalConnote,
//   outputTotalDPP: outputTotalDPP,
// });

// _log("Unbilled Connote");
// _log({
//   outputTotalConnoteUnbilled: outputTotalConnoteUnbilled,
//   outputTotalDPPUnbilled: outputTotalDPPUnbilled,
// });

// _log("Billed Connote");
// _log({
//   outputTotalConnoteBilled: outputTotalConnoteBilled,
//   outputTotalDPPBilled: outputTotalDPPBilled,
// });

_log("Percentage");
_log({
  outputUnbilledToTotalRevenueRatioConnote:
    outputUnbilledToTotalRevenueRatioConnote,
  outputUnbilledToTotalRevenueRatioAmount:
    outputUnbilledToTotalRevenueRatioAmount,
});

_log("Actual");
_log({
  outputActual: outputActual,
  outputActualPercentage: outputActualPercentage,
});

_log("Achievment");
var unbilled_to_total_revenue_ratio_amount = _numberToPercentage(
  outputUnbilledToTotalRevenueRatioAmount
);
var targetNumber = parseFloat(outputTarget) / 100;
var ratioNumber = parseFloat(unbilled_to_total_revenue_ratio_amount) / 100;

// % Achievement
var outputachievement = (targetNumber / ratioNumber) * 100;
outputachievement = outputachievement.toFixed(2) + "%";

_log(outputachievement);

/* Create Record Dataset Report */
var recordDataset = [
  {
    // Data Customer
    branch_id: get_detail_customer.branch_id.name,
    branch_name: get_detail_customer.branch_name.name,
    customer_type: get_detail_customer.customer_type.name,
    national_parent_id: get_detail_customer.national_parent_id.name,
    national_parent_name: get_detail_customer.national_parent_name.name,
    local_parent_id: get_detail_customer.local_parent_id.name,
    local_parent_name: get_detail_customer.local_parent_name.name,
    customer_id: get_detail_customer.customer_id,
    customer_name: get_detail_customer.customer_name,

    // Total Connote
    total_all_connote: outputTotalConnote,
    total_all_dpp: outputTotalDPP,

    // Unbilled Connote
    total_unbilled_connote: outputTotalConnoteUnbilled,
    total_unbilled_dpp: outputTotalDPPUnbilled,

    // Billed Connote
    total_billed_connote: outputTotalConnoteBilled,
    total_billed_dpp: outputTotalDPPBilled,

    // Percentage
    unbilled_to_total_revenue_ratio_connote:
      outputUnbilledToTotalRevenueRatioConnote,
    unbilled_to_total_revenue_ratio_amount:
      outputUnbilledToTotalRevenueRatioAmount,

    // Polarisasi
    polarisasi: outputPolarisasi,
    target: outputTarget,

    // Actual
    actual: outputActual,
    actual_percentage: outputActualPercentage,

    // % Achievment
    achievement: outputachievement,

    // Parent
    parameter_unbilled_to_total_revenue_ratio_id: payload.id_parent,
  },
];

_log({
  recordDataset: recordDataset,
});

// Convert Number
function changeNumber(total) {
  if (total === "0" || total === "" || total === null || total === undefined) {
    return 0;
  } else {
    return parseFloat(total);
  }
}

/* ====== Calculation Aging/Connote ====== */
/* Rumus per 26 Oktober 2023 */

