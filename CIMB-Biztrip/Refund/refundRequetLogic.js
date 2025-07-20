var hitRefundRequest = {
  data: {
    bookingList: [
      {
        bookingId: "100352868",
        isRefundReimbursement: false,
        refundDetailStatus: null,
        refundId: "43933",
        refundStatus: "OPEN",
        refundSubmissionTime: "1720686551428",
        refundedItem: [
          {
            cancelledPNR: "X_XMREVN",
            cancelledPassenger: [
              {
                eTicketNumber: "2074267477",
                gender: "M",
                name: "Subandi Subandi",
                passengerReason: "DOUBLE_BOOKING",
                type: "ADULT",
              },
            ],
            departureTime: "1720711800000",
            destinationAirport: "DPS",
            operatingAirline: "ID",
            sourceAirport: "CGK",
          },
        ],
        requesterEmail: "subandi@mailinator.com", 
        requesterName: "Subandi Subandi",
      },
    ],
  },
  errorMessage: null,
  success: true,
};
