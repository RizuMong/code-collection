var eachTrip = {
  combination_itinerary_pnr_code: "2024200000125559",
  company_id: 25236,
  created_at: 1721062800000,
  created_by: 166467,
  departure_date: 0,
  flight_class_obj: {
    id: "",
    name: "",
  },
  flight_class_selection: "",
  flight_from: {},
  flight_from_full_name: "",
  flight_merge_from: {
    id: "",
    name: "",
  },
  flight_merge_to: {
    id: "",
    name: "",
  },
  flight_to: {},
  flight_to_full_name: "",
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
  hotel_booking_id: "12345",
  hotel_check_in: 1721235600000,
  hotel_check_out: 1721347200000,
  hotel_durasi: 1,
  hotel_itinerary_id: "2024200000125559",
  hotel_lokasi: {
    id: "0hGbVmt4R",
    name: "Jakarta Selatan, Jakarta",
  },
  hotel_star_selection: {},
  id: "f9EerelSR",
  id_key: 86,
  id_refund_trip: "f9EerelSR",
  jumlah_kamar: 1,
  kelas_penerbangan: {},
  location_hotel: "Jakarta",
  origin_trip_travel_id: {
    id: "xAIor6_Sg",
    name: "Hotel",
  },
  passenger: [
    {
      passenger_name: {
        id: "OUjjpUQ4R",
        name: "Subandi Subandi",
      },
      position: {
        id: "IPA1J8QVR",
        name: "Business Support & Internal Control Specialist - 2",
      },
    },
  ],
  refund_id: {
    id: "fQEere_SR",
    name: "refund submission 16/03",
  },
  return_date: 0,
  round_trip: false,
  status: "ISSUED",
  status_ticket: "SUBMISSION",
  ticket: "Hotel",
  total_price: 459000,
  travel_type: {
    id: "LpsrGe-VR",
    name: "Domestic",
  },
  trip: "",
  trip_travel_order_id: "xAIor6_Sg",
  updated_at: 1721274406299,
  updated_by: 166467,
};

var itineraryId = eachTrip && eachTrip.hotel_booking_id ? eachTrip.hotel_booking_id : "--";
// var email = _user.email;
var affiliateConfirmationId = null;
var reason = "--";


console.log(itineraryId);

var payloadAPI = {
  itineraryId: "232742379",
  email: "contact@traveloka.com",
  affiliateConfirmationId: null,
  reason: "Don't like the room",
};
