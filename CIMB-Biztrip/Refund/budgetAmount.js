var amount = 1000;
var refundAmountPenalty = 0;
var BudgetRemaining = 100000;

var totalData = [
  {
    _id: "668e26cb28dd696ea0422612",
    is_sync: "Sync",
    refund_amount: 30000,
    refund_status: "CLOSED",
  },
  {
    _id: "668f971d28dd696ea09e6a2f",
    is_sync: "False",
    refund_amount: 300000,
    refund_status: "CLOSED",
  },
  {
    _id: "1234",
    is_sync: "False",
    refund_amount: 1000,
    refund_status: "CLOSED",
  },
];

// Kondisi kalau totalData null
if (totalData && totalData.constructor === Array) {
  var totalRefundAmount = 0;
  
  for (var i = 0; i < totalData.length; i++) {
    var data = totalData[i];
    if (data.is_sync == "False") {
      totalRefundAmount += data.refund_amount;
    }
  }
  
  // Check if the total refund amount exceeds the given amount
  if (totalRefundAmount > amount) {
    refundAmountPenalty = totalRefundAmount - amount;
  }

} else {
  console.log("Tidak ada data CLOSED dan belum di Sync");
}

console.log("Amount Penalty:", refundAmountPenalty);
