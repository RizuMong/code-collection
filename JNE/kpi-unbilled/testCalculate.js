var groupingCustomerId = [
  {
    adjusted_amount: 38700,
    awb_date: 1720407708000,
    awb_number: "3557753600003",
    branch_id: "SMD",
    customer_id: "10947400",
    id_parent: "ZMV0V2_Ig",
    id_tmp_report_unbilled_to_total_revenue_ratio: "ZMV0V2_Ig-3557753600003",
    index: 11,
    invoice_date: 0,
    is_unbilled: true,
    other_charges: 0,
    packing: 0,
    status_connote: "Open",
    surcharge: 0,
  },
  {
    adjusted_amount: 45000,
    awb_date: 1720410524000,
    awb_number: "3559183870001",
    branch_id: "SMD",
    customer_id: "10959800",
    id_parent: "ZMV0V2_Ig",
    id_tmp_report_unbilled_to_total_revenue_ratio: "ZMV0V2_Ig-3559183870001",
    index: 11,
    invoice_date: 0,
    is_unbilled: true,
    other_charges: 0,
    packing: 0,
    status_connote: "Open",
    surcharge: 0,
  },
  {
    adjusted_amount: 145000,
    awb_date: 1720407682000,
    awb_number: "510020021808024",
    branch_id: "SMD",
    customer_id: "10535100",
    id_parent: "ZMV0V2_Ig",
    id_tmp_report_unbilled_to_total_revenue_ratio: "ZMV0V2_Ig-510020021808024",
    index: 11,
    invoice_date: 0,
    is_unbilled: true,
    other_charges: 0,
    packing: 0,
    status_connote: "Ready to be Invoiced",
    surcharge: 0,
  },
];

function calculationTotalDPP(eachConnote) {
  return (
    changeNumber(eachConnote.adjusted_amount) +
    changeNumber(eachConnote.surcharge) +
    changeNumber(eachConnote.packing) +
    changeNumber(eachConnote.other_charges)
  );
}

function changeNumber(total) {
  if (total === "0" || total === "" || total === null || total === undefined) {
    return 0;
  } else {
    return parseFloat(total);
  }
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

groupingCustomerId.forEach(function (eachConnote) {
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

/* Create Record Dataset Report */
var recordDataset = {
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
};
