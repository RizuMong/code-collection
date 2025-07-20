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
    count_connote: 1
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
    count_connote: 1
  },
  {
    adjusted_amount: 100,
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
    count_connote: 1
  },
];

function changeNumber(total) {
  if (
      total === '0' ||
      total === '' ||
      total === null ||
      total === undefined
  ) {
      return 0;
  } else {
      return parseFloat(total);
  }
};

function calculationTotalDPP(eachConnote) {
  return (
      changeNumber(eachConnote.adjusted_amount) +
      changeNumber(eachConnote.surcharge) +
      changeNumber(eachConnote.packing) +
      changeNumber(eachConnote.other_charges)
  );
};

var groupedData = {};

groupingCustomerId.forEach(function (item) {
    var customerId = item.customer_id;
    var branchId = item.branch_id;

    // kombinasi
    var key = customerId + '-' + branchId;

    // grupping berdasarkan kombinasi
    if (!groupedData[key]) {
        groupedData[key] = {
            customer_id: customerId,
            branch_id: branchId,
            customer_branch: key,
            total_all_connote: 0,
            total_billed_connote: 0,
            total_unbilled_connote: 0,

            // Amount
            total_billed_dpp: 0,
            total_unbilled_dpp: 0,
            total_all_dpp: 0
        };
    }

    var groupedItem = groupedData[key];

    // count total connote billed/unbilled
    groupedItem.total_all_dpp += calculationTotalDPP(item);
    groupedItem.total_all_connote += item.count_connote;

    if (item.is_unbilled) {
      groupedItem.total_unbilled_connote += item.count_connote;
      groupedItem.total_unbilled_dpp += calculationTotalDPP(item);
    };

    if (!item.is_unbilled) {
      groupedItem.total_billed_connote += item.count_connote;
      groupedItem.total_billed_dpp += calculationTotalDPP(item);
    };
});

var resultGroupingCustomerID = [];

for (var key in groupedData) {
    if (groupedData.hasOwnProperty(key)) {
        resultGroupingCustomerID.push(groupedData[key]);
    };
};

console.log(resultGroupingCustomerID);
