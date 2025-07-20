var payload = {
  directPaymentID: 880,
  status: "CLOSED",
};

var totalData = [
  {
    _id: "66a1ea4e28dd696ea07a147e",
    division: {
      id: "pgVgFYQVg",
      name: "FSAC",
    },
    is_sync: "False",
    refund_amount: 100,
    refund_status: "CLOSED",
    transaction_amount: 100,
  },
  {
    _id: "66a1ea4e28dd696ea07a1691",
    division: {
      id: "vk96dYQ4R",
      name: "COAG",
    },
    is_sync: "False",
    refund_amount: 1100,
    refund_status: "CLOSED",
    transaction_amount: 1000,
  }
];

var BudgetRemaining = {
  company_id: 25236,
  created_at: 1720673449314,
  created_by: 166467,
  description: "REFUND AMOUNT MONITORING",
  id: "mFEO_blIR",
  ids: "mFEO_blIR",
  remaining_amount: 5434574,
  updated_at: 1721888151974,
  updated_by: 166467,
};

var result = [];
var isRefund = false;
var totalRefundAmountPenalty = 0;
var totalAmountDirectPayment = 0;
var groupedData = {};

if (totalData && totalData.constructor === Array) {
  for (var i = 0; i < totalData.length; i++) {
    var data = totalData[i];
    if (data.is_sync == "False") {
      var divisionName = data.division.name;
      if (!groupedData[divisionName]) {
        groupedData[divisionName] = {
          division: data.division,
          refundAmountPenalty: 0,
          totalTransaction: 0,
        };
      }
      groupedData[divisionName].refundAmountPenalty += data.refund_amount;
      groupedData[divisionName].totalTransaction += data.transaction_amount;
    }
  }

  // Step 2: Process each division's grouped data
  for (var division in groupedData) {
    if (groupedData.hasOwnProperty(division)) {
      var divisionData = groupedData[division];
      var totalAmountDirectPaymentForDivision = 0;
      var sisaRefund = 0;

      if (divisionData.totalTransaction > divisionData.refundAmountPenalty) {
        totalAmountDirectPaymentForDivision = divisionData.totalTransaction - divisionData.refundAmountPenalty;
      } else {
        sisaRefund = divisionData.refundAmountPenalty - divisionData.totalTransaction;
      }

      
      totalRefundAmountPenalty += divisionData.refundAmountPenalty;
      totalAmountDirectPayment += totalAmountDirectPaymentForDivision;

      
      result.push({
        division: divisionData.division,
        refundAmountPenalty: divisionData.refundAmountPenalty,
        totalTransaction: divisionData.totalTransaction,
        totalAmountDirectPayment: totalAmountDirectPaymentForDivision,
        sisaRefund: sisaRefund,
      });

      
      if (divisionData.refundAmountPenalty != 0) {
        isRefund = true;
      }
    }
  }
} else {
  console.log("Tidak ada data CLOSED dan belum di Sync");
}

console.log(result);
// console.log(isRefund);

var directPaymentID = {
  id: BudgetRemaining.ids,
  name: payload.directPaymentID,
};

var response = {
  success: true,
  total_amount_penalty: totalRefundAmountPenalty,
  total_amount_penalty_currency: "IDR",
  total_amount: totalAmountDirectPayment,
};

// console.log(response);