var item = {
  bookingId: "100352868",
  isRefundReimbursement: false,
  refundDetailStatus: null,
  refundId: "43933",
  refundStatus: "OPEN",
  refundSubmissionTime: "1720686551428",
};

var hitRefundPayment = {
  success: true,
  errorMessage: null,
  data: {
    paymentList: [
      {
        bookingId: "12345",
        referenceId: "string",
        referenceType: "RESCHEDULE",
        amountWithCurrency: {
          amount: "5000",
          currency: "IDR",
        },
        bankName: "string",
        branchName: "string",
        accountName: "string",
        accountNumber: "string",
        isRefundReimbursement: true,
      },
      {
        bookingId: "100352868",
        referenceId: "string",
        referenceType: "RESCHEDULE",
        amountWithCurrency: {
          amount: "5000",
          currency: "IDR",
        },
        bankName: "string",
        branchName: "string",
        accountName: "string",
        accountNumber: "string",
        isRefundReimbursement: true,
      },
    ],
  },
};

var matchedPayment = null;

for (var i = 0; i < hitRefundPayment.data.paymentList.length; i++) {
  if (hitRefundPayment.data.paymentList[i].bookingId === item.bookingId) {
    matchedPayment = hitRefundPayment.data.paymentList[i];
    break;
  }
}

if (matchedPayment) {
  var result = {
    bookingId: matchedPayment.bookingId,
    referenceId: matchedPayment.referenceId,
    referenceType: matchedPayment.referenceType,
    amountWithCurrency: matchedPayment.amountWithCurrency,
  };
};

console.log(result);
