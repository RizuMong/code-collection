var getListAddOns = [
{
    "add_ons_id": "5",
    "bagagge_weight": 60,
    "baggage_currency": "IDR",
    "baggage_price": 427000,
    "baggage_quantity": 1,
    "baggage_type": "KG",
    "company_id": 25236,
    "created_at": 1739168862262,
    "created_by": 0,
    "id": "EkjCg_FNR",
    "id_addons_trip": "EkjCg_FNR",
    "marketing_airline": "IP",
    "meal_currency": "",
    "meal_display_name": "",
    "meal_price": 0,
    "meal_quantity": 0,
    "operating_airline": "IP",
    "trip_travel_order_id": "F8BljQKNR",
    "type": "segment",
    "updated_at": 1739168862262,
    "updated_by": 0
}
];

// var tripTravelOrder = payload.findTripRecord;
var tripTravelOrder = {
  "_id": "67a47ecb28dd696ea01c5017",
  "combination_trip_location": "CGK - SUB (direct)",
  "company_id": 25236,
  "created_at": 1738833611607,
  "created_by": 166467,
  "departure_date": 1738774800000,
  "flagging_issued_origin": false,
  "flight_class_obj": {
      "id": "06-nJvpVR",
      "name": "Economy"
  },
  "flight_class_selection": "",
  "flight_from": {},
  "flight_from_full_name": "",
  "flight_merge_from": {
      "id": "n5Iflec4R",
      "name": "Soekarno Hatta (Jakarta - CGK)"
  },
  "flight_merge_to": {
      "id": "AqrWXe5Vg",
      "name": "Juanda (Surabaya - SUB)"
  },
  "flight_to": {},
  "flight_to_full_name": "",
  "guest": [
      {
          "charge_bearer": true,
          "guest_name": {
              "id": "OUjjpUQ4R",
              "name": "Subandi Subandi"
          },
          "position": {
              "id": "IPA1J8QVR",
              "name": "Business Support & Internal Control Specialist - 2"
          }
      }
  ],
  "hotel_check_in": 0,
  "hotel_check_out": 0,
  "hotel_durasi": 0,
  "hotel_lokasi": {
      "id": "",
      "name": ""
  },
  "hotel_star_selection": {},
  "hotel_star_selection_multiple": [],
  "id": "4_X4z0FHg",
  "id_trip_travel_order": "4_X4z0FHg",
  "jumlah_kamar": 0,
  "kelas_penerbangan": {},
  "location_hotel": "",
  "logo_trip_mobile": "https://storage.googleapis.com/uat-pvza0ssj/25236/64e5c42853efd-icons8-airplane-50.png",
  "obj_relasi": {
      "id": "xN5UlTKNg",
      "name": "Testing - 06/02/2025 - Domestic"
  },
  "passenger": [
      {
          "passenger_name": {
              "id": "OUjjpUQ4R",
              "name": "Subandi Subandi"
          },
          "position": {
              "id": "IPA1J8QVR",
              "name": "Business Support & Internal Control Specialist - 2"
          }
      }
  ],
  "payment_expiration_time": null,
  "payment_expiration_time_tags": null,
  "return_date": 0,
  "round_trip": false,
  "smart_combo": false,
  "status": {},
  "status_ticket": "ON BOOKING",
  "ticket": "Flight",
  "total_price": 670280,
  "travel_type": {
      "id": "LpsrGe-VR",
      "name": "Domestic"
  },
  "trip": "CGK - SUB (direct)",
  "updated_at": 1738833661151,
  "updated_by": 0,
  "url_path": "https://app-uat.smart-cimb.com/app/SMART-Biztrip/3260/REQUESTOR/32907/detail-multiple/IuF0Q6-VR/4_X4z0FHg/Search-Flight-&-Hotel?queryParamsParent=eyJmaWx0ZXJBcHAiOiJ7fSIsImZpbHRlclNldHVwIjoie30iLCJmaWx0ZXJEZWZhdWx0Ijoie30iLCJmaWx0ZXJTZWFyY2hPcHRpb25zIjoie30iLCJvcmlnaW5hbENvbXBvbmVudCI6Int9IiwiYnJlYWRjcnVtYnNQYXJlbnQiOiJ7XCJsYXllclwiOjIsXCJwYXRoTGF5ZXJfMlwiOlwiL2FwcC9TTUFSVC1CaXp0cmlwLzMyNjAvUkVRVUVTVE9SLzMyOTA3L2RldGFpbC1tdWx0aXBsZS8yMDhkOWUtNGcveE41VWxUS05nL0RldGFpbC1UcmF2ZWwtUmVxdWVzdC9kcmFmdC9yZXF1ZXN0ZXJcIixcImRhdGFXb3JrZmxvd0xheWVyXzJcIjp7XCJzdGF0dXNcIjpcIlwiLFwibW9kZVwiOlwiXCJ9fSIsImxheWVyIjoyLCJwYWdlIjoxLCJzdGF0dXMiOiIifQ%3D%3D&queryParams"
};

function formatDate(timestamp) {
    var date = new Date(timestamp);
    var day = date.getDate();
    var month = date.getMonth() + 1;
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
};

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

        // console.log(item);
        console.log(hasValidBaggage);
        console.log(hasValidMeals);
        
        // "journey"
        if (item.type === "journey" && (hasValidBaggage || hasValidMeals)) {
            if (hasValidBaggage) {
                addOns[0].availableAddOnsOptions.baggageOptions.push({
                    id: item.add_ons_id,
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
                    id: item.add_ons_id,
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
                        id: item.add_ons_id,
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
                        id: item.add_ons_id,
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
                    marketingAirline: item.marketing_airline,
                    operatingAirline: item.operating_airline,
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
};

console.log(addOns);


{
    "addOns": [
        {
            "bagagge_weight": "20",
            "baggage_add_ons_id": "0",
            "baggage_currency": "IDR",
            "baggage_price": "0.00",
            "baggage_quantity": "1",
            "baggage_type": "KG",
            "destinationAirport": "DPS",
            "marketing_airline": "IP",
            "meal_add_ons_id": "",
            "meal_currency": "",
            "meal_display_name": "",
            "meal_price": "",
            "meal_quantity": "",
            "operating_airline": "IP",
            "sourceAirport": "CGK",
            "type": "journey"
        }
    ],
    "meal_quantity": "1x Nasi Padang",
    "baggage_quantity": "20 KG",
    "additional_info": "Non-Refundable",
    "date_time": "02-10-2025 (16:30 - 18:00)",
    "details": "Pelita  Air",
    "info": "On Booking",
    "pessenger_name": "Subandi Subandi",
    "price": 720280,
    "rc_code": "-",
    "status": "On Booking",
    "subtotal": 720280,
    "title": "CGK - DPS (direct)"
}