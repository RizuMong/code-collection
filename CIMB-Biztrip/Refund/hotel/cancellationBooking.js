var hitCancelBooking = {
  // Validasi Error
  category: "DATA_VALIDATION",
  data: null,
  errorCode: "177",
  handling: "RECOVERABLE",
  message: "The booking with given id is not refundable",
  serverTimestamp: "1721359744664",
  verboseMessage: "The booking with given id is not refundable",

  // Validasi Sukses
  // cancellationId: "76665778",
  // refundedAmount: "800000",
  // currency: "IDR",
  // cancelBookingStatus: "OK",
};


function checkBookingStatus(booking) {
  if (booking.errorCode) {
    booking.flagging = "NON REFUNDABLE";
  } else if (booking.cancelBookingStatus === "OK") {
    booking.flagging = "ON PROGRESS REFUND";
  }
};

checkBookingStatus(hitCancelBooking);
console.log(hitCancelBooking);