var getListAddOns = [
  {
    add_ons_id: "0",
    bagagge_weight: 20,
    baggage_currency: "IDR",
    baggage_price: 123333,
    baggage_quantity: 1,
    baggage_type: "KG",
    company_id: 25236,
    created_at: 1738833660607,
    created_by: 0,
    id: "6LKHzAKHg",
    id_addons_trip: "6LKHzAKHg",
    marketing_airline: "IP",
    meal_currency: "",
    meal_display_name: "",
    meal_price: 0,
    meal_quantity: 0,
    operating_airline: "IP",
    trip_travel_order_id: "4_X4z0FHg",
    type: "journey",
    updated_at: 1738833660607,
    updated_by: 0,
  },
];

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

        console.log(hasValidBaggage);
        console.log(hasValidMeals);
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