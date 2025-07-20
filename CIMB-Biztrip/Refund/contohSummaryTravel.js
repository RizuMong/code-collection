const payload = {
  data: {
    summaryRoundTrip: roundTripData,
    summaryOneWay: notRoundTripData,
    summaryHotel: hotelData,

    selectedOneWay: selectedFlight,
    selectedRoundTrip: {
      departure: selectedDepartureFlight,
      return: selectedReturnFlight,
    },
    selectedHotel,
  },
  isBookHotel: tickets?.isBookHotel,
  isOneWay: tickets?.isFlightNotRoundTrip,
  isRoundTrip: tickets?.isFlightRoundTrip,
  idTrip: searchParams.get("id"),
  total: handleCalculateTotalPrice(),
};

const payloadNew = {
  data: {
    summaryRoundTrip: roundTripData,
    summaryOneWay: notRoundTripData,
    summaryHotel: hotelData,
    summaryPackageRoundTrip: smartComboData, // summary data smart combo

    selectedOneWay: selectedFlight,
    selectedRoundTrip: {
      departure: selectedDepartureFlight,
      return: selectedReturnFlight,
    },
    selectedPackageRoundTrip: {
      // selected data smart combo
      departure: selectedDepartureFlight,
      return: selectedReturnFlight,
    },
    selectedHotel,
  },
  isBookHotel: tickets?.isBookHotel,
  isOneWay: tickets?.isFlightNotRoundTrip, // diganti bookingFlightType
  isRoundTrip: tickets?.isFlightRoundTrip, // diganti bookingFlightType
  idTrip: searchParams.get("id"),
  total: handleCalculateTotalPrice(),
};

// Contoh Summary On Way With 
const summaryOneWay = [
  {
    additional_info: "Refundable",
    baggage_quantity: "20 KG",
    date_time: 1730221200000,
    date_time: "10-31-2024 (07:55 - 09:20)",
    details: "Batik Air",
    info: "On Booking",
    pessenger_name: "Subandi",
    status: "On Booking",
    price: "1111380",
    title: "CGK - SUB (direct)",
    // tambahan
    meal_quantity: "1x Nasi Padang",
    marketing_airline: "GA",
    operating_airline: "GA",
    addOns: [
      {
        type: "journey", //segment
        baggage_type: "KG",
        baggage_quantity: "1",
        bagagge_weight: "20",
        baggage_price: "5000",
        baggage_currency: "IDR",
        meal_quantity: "",
        meal_display_name: "",
        meal_price: "",
        meal_currency: "",
        add_ons_id: "0", 
      },
      {
        type: "segment",
        baggage_type: "",
        baggage_quantity: "",
        bagagge_weight: "",
        baggage_price: "",
        baggage_currency: "",
        meal_quantity: "1",
        meal_display_name: "Nasi Padang",
        meal_price: "5000",
        meal_currency: "IDR",
        add_ons_id: "0", 
      },
    ],
  },
];