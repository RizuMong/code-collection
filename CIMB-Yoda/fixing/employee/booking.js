// var payload = {
//   data: {
//     flag_mobile: false,
//     round_trip: false,
//     smart_combo: false,
//     status_ticket: "NONE",
//     obj_relasi: {
//       id: "4ybba0WNg",
//       name: "Yoda",
//     },
//   },
// };

var tripTravelOrder = {
  combination_trip_location: "CGK - SUB (direct), SUB - CGK (direct)",
  departure_date: 1730307600000,
  flagging_issued_origin: false,
  flight_class_obj: {
    id: "06-nJvpVR",
    name: "Economy",
  },
  flight_merge_from: {
    id: "n5Iflec4R",
    name: "Soekarno Hatta (Jakarta - CGK)",
  },
  flight_merge_to: {
    id: "AqrWXe5Vg",
    name: "Juanda (Surabaya - SUB)",
  },
  guest: [
    {
      charge_bearer: true,
      guest_name: {
        id: "OUjjpUQ4R",
        name: "Subandi Subandi",
      },
      position: {
        id: "IPA1J8QVR",
        name: "Business Support & Internal Control Specialist - 2",
      },
    },
  ],
  id_trip_travel_order: "Ud7o85mHg",
  jumlah_kamar: 0,
  obj_relasi: {
    id: "chYh85mNg",
    name: "testing",
  },
  return_date: 1730394000000,
  round_trip: false,
  smart_combo: false,
  status_ticket: "ON BOOKING",
  ticket: "Flight",
  travel_type: {
    id: "LpsrGe-VR",
    name: "Domestic",
  },
};

var getListAddOns = [
  {
    bagagge_weight: 20,
    baggage_currency: "IDR",
    baggage_price: 5000,
    baggage_quantity: 1,
    baggage_type: "KG",
    company_id: 25236,
    created_at: 1732188269925,
    created_by: 0,
    id: "nKGseD7Hg",
    id_items_trip: "nKGseD7Hg",
    meal_currency: "",
    meal_display_name: "",
    meal_price: 0,
    meal_quantity: 0,
    trip_travel_order_id: "4ybba0WNg",
    type: "journey",
    updated_at: 1732189295202,
    updated_by: 174795,
  },
  {
    bagagge_weight: 0,
    baggage_currency: "",
    baggage_price: "",
    baggage_quantity: 0,
    baggage_type: "",
    company_id: 25236,
    created_at: 1732188269925,
    created_by: 0,
    id: "nFGsev7NRz",
    id_items_trip: "nFGsev7NRz",
    meal_currency: "IDR",
    meal_display_name: "Nasi Padang",
    meal_price: 5000,
    meal_quantity: 1,
    trip_travel_order_id: "4ybba0WNg",
    type: "segment",
    updated_at: 1732189301567,
    updated_by: 174795,
  },
];

function formatDate(timestamp) {
  var date = new Date(timestamp);
  var day = date.getDate();
  var month = date.getMonth() + 1; // Bulan dimulai dari 0
  var year = date.getFullYear();
  return (
    (day < 10 ? "0" + day : day) +
    "-" +
    (month < 10 ? "0" + month : month) +
    "-" +
    year
  );
}

function extractAirportCode(fullName) {
  var parts = fullName.split("-");
  if (parts.length > 1) {
    var airportCode = parts[1].trim();
    return airportCode.replace(")", "").trim();
  }
  return "";
}

// var addOns = [];

var addOns = [
  {
    segmentsWithAvailableAddOns: [],
    availableAddOnsOptions: {
      baggageOptions: [],
      mealOptions: [],
    },
  },
];

if (getListAddOns.length > 0) {
  for (var i = 0; i < getListAddOns.length; i++) {
    var item = getListAddOns[i];

    var hasValidBaggage =
      item.bagagge_weight > 0 &&
      item.baggage_quantity > 0 &&
      item.baggage_price > 0;

    var hasValidMeals =
      item.meal_quantity > 0 &&
      item.meal_price > 0 &&
      item.meal_display_name !== "";

    // "journey"
    if (item.type === "journey" && (hasValidBaggage || hasValidMeals)) {
      if (hasValidBaggage) {
        addOns[0].availableAddOnsOptions.baggageOptions.push({
          id: "0",
          baggageType: item.baggage_type,
          baggageQuantity: String(item.baggage_quantity),
          baggageWeight: String(item.bagagge_weight),
          priceWithCurrency: {
            amount: String(item.baggage_price),
            currency: item.baggage_currency,
          },
        });
      }

      if (hasValidMeals) {
        result[0].availableAddOnsOptions.mealOptions.push({
          id: "0",
          quantity: String(item.meal_quantity),
          displayName: item.meal_display_name,
          priceWithCurrency: {
            amount: String(item.meal_price),
            currency: item.meal_currency,
          },
        });
      }
    }

    // "segment"
    if (item.type === "segment") {
      var baggageOptions = hasValidBaggage
        ? [
            {
              id: "0",
              baggageType: item.baggage_type,
              baggageQuantity: String(item.baggage_quantity),
              baggageWeight: String(item.bagagge_weight),
              priceWithCurrency: {
                amount: String(item.baggage_price),
                currency: item.baggage_currency,
              },
            },
          ]
        : [];

      var mealOptions = hasValidMeals
        ? [
            {
              id: "0",
              quantity: String(item.meal_quantity),
              displayName: item.meal_display_name,
              priceWithCurrency: {
                amount: String(item.meal_price),
                currency: item.meal_currency,
              },
            },
          ]
        : [];

        addOns[0].segmentsWithAvailableAddOns.push({
        segment: {
          sourceAirport: extractAirportCode(tripTravelOrder.flight_merge_from.name),
          destinationAirport:
            extractAirportCode(tripTravelOrder.flight_merge_to.name),
          departureDate: formatDate(tripTravelOrder.departure_date),
          marketingAirline: "GA",
          operatingAirline: "GA", 
          seatClass: tripTravelOrder.flight_class_obj.name.toUpperCase(),
        },
        availableAddOnsOptions: {
          baggageOptions: baggageOptions,
          mealOptions: mealOptions,
        },
      });
    }
  }
};

if (
  addOns[0].segmentsWithAvailableAddOns.length === 0 &&
  addOns[0].availableAddOnsOptions.baggageOptions.length === 0 &&
  addOns[0].availableAddOnsOptions.mealOptions.length === 0
) {
  addOns = [];
}

console.log(addOns);
