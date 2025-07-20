var getRefundPolicy = {
  totalItineraries: 1,
  itineraries: [
    {
      itineraryId: "2001210010720",
      bookingId: "446217560",
      affiliateConfirmationId: "261167898",
      issuerName: "Traveloka",
      cid: "4vz7l4",
      propertyId: "3000020002467",
      creationTime: "1508922320239",
      checkInDate: "2019-04-18",
      checkOutDate: "2019-12-03",
      userContact: {
        phones: ["0812123456"],
        email: "john.smith@traveloka.com",
        title: "MR",
        firstName: "John",
        lastName: "Smith",
      },
      currencyCode: "THB",
      checkInInstruction: null,
      importantNotice: null,
      rooms: [
        {
          roomId: "10460105",
          rateType: "PAY_NOW",
          numOfAdults: "2",
          guests: [
            {
              title: "MR",
              firstName: "John",
              lastName: "Smith",
            },
          ],
          wifiIncluded: false,
          breakfastIncluded: false,
          roomStatus: "CANCELLED",
          roomTypeName: "Executive Room",
        },
      ],
      cancellationPolicies: [
        {
          currencyCode: "THB",
          timeZoneDisplay: "GMT+7:00",
          cancelDateTime: "2019-11-30 13:00",
          fees: "0",
          isAfter: false,
        },
      ],
      cancellationPolicyDisplay: "Free cancellation until 30-Nov-2019",
      totalChargeableRate: {
        currencyCode: "THB",
        amount: "1243.47",
      },
      chargeableRateInfo: null,
      convertedTotalChargeableRate: {
        currencyCode: "THB",
        amount: "1243.47",
      },
      additionalRate: [
        {
          type: "MANDATORY_FEE",
          rate: {
            currencyCode: "THB",
            amount: "1243.47",
          },
        },
      ],
      specialRequest: "non smoking room",
      status: "ISSUED",
    },
  ],
};

var refundPolicyDetail = "";

if (typeof getRefundPolicy === "object" && getRefundPolicy !== null) {
  if (Array.isArray(getRefundPolicy.itineraries) && getRefundPolicy.itineraries.length > 0) {
    var itinerary = getRefundPolicy.itineraries[0];
    if (itinerary.cancellationPolicyDisplay) {
      refundPolicyDetail = itinerary.cancellationPolicyDisplay;
    }
  }
}

console.log(refundPolicyDetail);