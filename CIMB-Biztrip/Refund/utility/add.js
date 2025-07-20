var getBookingAddOns = {
  data: {
    journeysWithAvailableAddOnsOptions: [
      {
        availableAddOnsOptions: {
          baggageOptions: [
            {
              baggageQuantity: "1",
              baggageType: "KG",
              baggageWeight: "20",
              id: "0",
              netToAgent: {
                amount: "0.00",
                currency: "IDR",
              },
              priceWithCurrency: {
                amount: "0.00",
                currency: "IDR",
              },
            },
          ],
          mealOptions: [],
        },
        segmentsWithAvailableAddOns: [],
      },
    ],
  },
  success: true,
};

var responseData = {
  success: getBookingAddOns.success,
  message: getBookingAddOns.success
    ? "Success retrieved add-ons"
    : "Failed to retrieve add-ons",
  data: {
    journeys: [],
  },
};

if (
  getBookingAddOns.data &&
  getBookingAddOns.data.journeysWithAvailableAddOnsOptions &&
  getBookingAddOns.data.journeysWithAvailableAddOnsOptions.length
) {
  for (
    var i = 0;
    i < getBookingAddOns.data.journeysWithAvailableAddOnsOptions.length;
    i++
  ) {
    var journey = getBookingAddOns.data.journeysWithAvailableAddOnsOptions[i];
    var segments = [];

    if (
      journey.segmentsWithAvailableAddOns &&
      journey.segmentsWithAvailableAddOns.length
    ) {
      for (var j = 0; j < journey.segmentsWithAvailableAddOns.length; j++) {
        var segment = journey.segmentsWithAvailableAddOns[j];
        segments.push({
          addOnOptions: segment.availableAddOnsOptions || {},
        });
      }
    }

    responseData.data.journeys.push({
      segments: segments,
      addOnOptions: journey.availableAddOnsOptions || {},
    });
  }
}

console.log(responseData);
