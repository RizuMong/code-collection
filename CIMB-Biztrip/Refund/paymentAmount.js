var totalAmount = 100;
var remainingAmount = 50;
var paymentAmount = 0;
var remainingAmountPaid = 0;

var resultRemainingAmount = remainingAmount - totalAmount;

if (resultRemainingAmount >= 0) {
  remainingAmountPaid = totalAmount;
  remainingAmount = resultRemainingAmount;
  paymentAmount = 0;
} else {
  remainingAmountPaid = remainingAmount;
  paymentAmount = remainingAmount;
  remainingAmount = 0;
};

var result = {
  remaining_amount: remainingAmount,
  payment_amount: paymentAmount,
  remaining_amount_paid: remainingAmountPaid,
};

console.log(result);