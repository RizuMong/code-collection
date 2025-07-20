// One Way
var payload = {
  idTrip: "4ybba0WNg",
  isBookHotel: false,
  isRoundTrip: false,
  isOneWay: true,
  data: {
    summaryOneWay: [
      {
        additional_info: "Refundable",
        baggage_quantity: "20 KG",
        meal_quantity: "1x Nasi Padang", // belum ada
        date_time: 1730221200000,
        date_time_text: "10-31-2024 (07:55 - 09:20)",
        details: "Batik Air",
        info: "On Booking",
        pessenger_name: "Subandi",
        status: "On Booking",
        price: "1111380",
        title: "CGK - SUB (direct)",
        addOns: [
          {
            type: "journey", //baggage
            baggage_type: "KG",
            baggage_quantity: "1",
            bagagge_weight: "20",
            baggage_price: "5000",
            baggage_currency: "IDR",
            meal_quantity: "1",
            meal_display_name: "Nasi Padang",
            meal_price: "5000",
            meal_currency: "IDR",
          },
          {
            type: "journey", // meals
            baggage_type: "",
            baggage_quantity: "",
            bagagge_weight: "",
            baggage_price: "",
            baggage_currency: "",
            meal_quantity: "1",
            meal_display_name: "Nasi Padang",
            meal_price: "5000",
            meal_currency: "IDR",
          },
          {
            type: "segment", // baggage
            baggage_type: "KG",
            baggage_quantity: "1",
            bagagge_weight: "20",
            baggage_price: "5000",
            baggage_currency: "IDR",
            meal_quantity: "1",
            meal_display_name: "Nasi Padang",
            meal_price: "5000",
            meal_currency: "IDR",
          },
          {
            type: "segment", // meals
            baggage_type: "",
            baggage_quantity: "",
            bagagge_weight: "",
            baggage_price: "",
            baggage_currency: "",
            meal_quantity: "1",
            meal_display_name: "Nasi Padang",
            meal_price: "5000",
            meal_currency: "IDR",
          },
        ],
      },
    ],
    selectedOneWay: {
      flightId:
        "FLIGHT_ID_V1_LtjAM-H4sIAAAAAAAA/wEQAe/+BZ76gaapSKUYzu07PP6Npw9dPsa6P7ADG7UGoz14tpQPEdrbET62iSmMQXxWGydUOlZJ+GddQ1hUjk1v4rmu5HAF1hPfUG/L11o+mjoDxnzhyiTLSvs4mq8bc55KYhBFnA7hi7chqAV7OgBi6WN/EbjjZJ/f1hheNNDgHs0BIinE6WbzBNcNYRE/050lOzaHN3/6x03zRnWFuadpJFa8dw27IHxadpQJ2TqNXUDzawRmLATSCPpBDVttM260tnZgvOiDacIrA4loAYOZ203IF1WfeFDV0unMQ/7rPN3f7t0/XtpLUEust42APOSdudReugk4eYtZ1HmSxXcTee0NOUef6/Cj41Xf/he+VLnQW1kwEf1LEAEAAA==-H4sIAAAAAAAA/wFAAb/+u5qlDbVNJq60z3aSdiaTB/+swRi37ixcpwLmAjESf6BvPjo5W5utYRR4NIKfqmDvpF4R6nRO6Shc9K4jOiGL9c3WUXVmOsTFoBNDvNnFNNIVm8lf/PLFGIJq95BHl/CdS7JjsbiTzKtXISK89kx2sP1kGs9TUE+3WY0RN/H12wWZ6Tx5iYTd6dDt3cEOfOiSGc6nNm8/j8S+KCN16QERW02yn8j0bM2D7H72+HQsSOxA17xmuP2vTZZjcRM/A/qsabUKg33TjbPfVafXWgVE9SHlP3NzaieSAM+AmqRzS0NVXkTIU95TjLf9qDyAeKfi6yZooCbxe7eu+yQaKxz57Uu2yPQ3FIRn4Y17cVCt0bbunm4lm2i64H8C+a1+5PKgRQg3aZkpbCafbXV108qLmWdPbi7itVDtrQ7XZbsOrI+E0htiQAEAAA==",
      airlineDetail: [
        {
          logoUrl: "https://www.batikair.com/assets/images/logo.png",
        },
      ],
    },
  },
};

// Round Trip
var payload = {
  idTrip: "4ybba0WNg",
  isBookHotel: false,
  isRoundTrip: true,
  isOneWay: false,
  data: {
    summaryRoundTrip: {
      departure: [
        {
          additional_info: "Refundable",
          baggage_quantity: "20 KG",
          meal_quantity: "1x Nasi Padang", // belum ada
          date_time: 1730221200000,
          details: "Batik Air",
          info: "On Booking",
          pessenger_name: "Subandi",
          status: "On Booking",
          price: "1111380",
          title: "CGK - SUB (direct)",
          addOns: [
            {
              type: "journey", //segment
              baggage_type: "KG",
              baggage_quantity: "1",
              bagagge_weight: "20",
              baggage_price: "5000",
              baggage_currency: "IDR",
              meal_quantity: "1",
              meal_display_name: "Nasi Padang",
              meal_price: "5000",
              meal_currency: "IDR",
            },
            {
              type: "segment",
              baggage_type: "KG",
              baggage_quantity: "1",
              bagagge_weight: "20",
              baggage_price: "5000",
              baggage_currency: "IDR",
              meal_quantity: "1",
              meal_display_name: "Nasi Padang",
              meal_price: "5000",
              meal_currency: "IDR",
            },
          ],
        },
      ],
      return: [
        {
          additional_info: "Refundable",
          baggage_quantity: "20 KG",
          meal_quantity: "1x Nasi Padang", // belum ada
          date_time: 1730221200000,
          details: "Batik Air",
          info: "On Booking",
          pessenger_name: "Subandi",
          status: "On Booking",
          price: "1111380",
          title: "CGK - SUB (direct)",
          addOns: [
            {
              type: "journey", //segment
              baggage_type: "KG",
              baggage_quantity: "1",
              bagagge_weight: "20",
              baggage_price: "5000",
              baggage_currency: "IDR",
              meal_quantity: "1",
              meal_display_name: "Nasi Padang",
              meal_price: "5000",
              meal_currency: "IDR",
            },
            {
              type: "segment",
              baggage_type: "KG",
              baggage_quantity: "1",
              bagagge_weight: "20",
              baggage_price: "5000",
              baggage_currency: "IDR",
              meal_quantity: "1",
              meal_display_name: "Nasi Padang",
              meal_price: "5000",
              meal_currency: "IDR",
            },
          ],
        },
      ],
    },
    selectedRoundTrip: {
      departure: {
        flightId: "FLIGHT_ID_V1_LtjAM-H4sIAAAAAAAA/wEQAe/+BZ76gaapSKUYzu07PP6Npw9dPsa6P7ADG7UGoz14tpQPEdrbET62iSmMQXxWGydUOlZJ+GddQ1hUjk1v4rmu5HAF1hPfUG/L11o+mjoDxnzhyiTLSvs4mq8bc55KYhBFnA7hi7chqAV7OgBi6WN/EbjjZJ/f1hheNNDgHs0BIinE6WbzBNcNYRE/050lOzaHN3/6x03zRnWFuadpJFa8dw27IHxadpQJ2TqNXUDzawRmLATSCPpBDVttM260tnZgvOiDacIrA4loAYOZ203IF1WfeFDV0unMQ/7rPN3f7t0/XtpLUEust42APOSdudReugk4eYtZ1HmSxXcTee0NOUef6/Cj41Xf/he+VLnQW1kwEf1LEAEAAA==-H4sIAAAAAAAA/wFAAb/+u5qlDbVNJq60z3aSdiaTB/+swRi37ixcpwLmAjESf6BvPjo5W5utYRR4NIKfqmDvpF4R6nRO6Shc9K4jOiGL9c3WUXVmOsTFoBNDvNnFNNIVm8lf/PLFGIJq95BHl/CdS7JjsbiTzKtXISK89kx2sP1kGs9TUE+3WY0RN/H12wWZ6Tx5iYTd6dDt3cEOfOiSGc6nNm8/j8S+KCN16QERW02yn8j0bM2D7H72+HQsSOxA17xmuP2vTZZjcRM/A/qsabUKg33TjbPfVafXWgVE9SHlP3NzaieSAM+AmqRzS0NVXkTIU95TjLf9qDyAeKfi6yZooCbxe7eu+yQaKxz57Uu2yPQ3FIRn4Y17cVCt0bbunm4lm2i64H8C+a1+5PKgRQg3aZkpbCafbXV108qLmWdPbi7itVDtrQ7XZbsOrI+E0htiQAEAAA==",
      },
      return: {
        flightId: "FLIGHT_ID_V1_LtjAM-H4sIAAAAAAAA/wEQAe/+BZ76gaapSKUYzu07PP6Npw9dPsa6P7ADG7UGoz14tpQPEdrbET62iSmMQXxWGydUOlZJ+GddQ1hUjk1v4rmu5HAF1hPfUG/L11o+mjoDxnzhyiTLSvs4mq8bc55KYhBFnA7hi7chqAV7OgBi6WN/EbjjZJ/f1hheNNDgHs0BIinE6WbzBNcNYRE/050lOzaHN3/6x03zRnWFuadpJFa8dw27IHxadpQJ2TqNXUDzawRmLATSCPpBDVttM260tnZgvOiDacIrA4loAYOZ203IF1WfeFDV0unMQ/7rPN3f7t0/XtpLUEust42APOSdudReugk4eYtZ1HmSxXcTee0NOUef6/Cj41Xf/he+VLnQW1kwEf1LEAEAAA==-H4sIAAAAAAAA/wFAAb/+u5qlDbVNJq60z3aSdiaTB/+swRi37ixcpwLmAjESf6BvPjo5W5utYRR4NIKfqmDvpF4R6nRO6Shc9K4jOiGL9c3WUXVmOsTFoBNDvNnFNNIVm8lf/PLFGIJq95BHl/CdS7JjsbiTzKtXISK89kx2sP1kGs9TUE+3WY0RN/H12wWZ6Tx5iYTd6dDt3cEOfOiSGc6nNm8/j8S+KCN16QERW02yn8j0bM2D7H72+HQsSOxA17xmuP2vTZZjcRM/A/qsabUKg33TjbPfVafXWgVE9SHlP3NzaieSAM+AmqRzS0NVXkTIU95TjLf9qDyAeKfi6yZooCbxe7eu+yQaKxz57Uu2yPQ3FIRn4Y17cVCt0bbunm4lm2i64H8C+a1+5PKgRQg3aZkpbCafbXV108qLmWdPbi7itVDtrQ7XZbsOrI+E0htiQAEAAA==",
      },
    }
  },
};

var flightId = [];

if (!!payload.data.selectedRoundTrip.departure.flightId &&
  !!payload.data.selectedRoundTrip.return.flightId) {
  console.log("flight id ada")
  flightId.push(payload.data.selectedRoundTrip.departure.flightId);
  flightId.push(payload.data.selectedRoundTrip.return.flightId);
};

console.log(flightId);

// Kata kata
var loop = {
  addOns: [
    {
      type: "segment", // baggage
      baggage_type: "KG",
      baggage_quantity: "1",
      bagagge_weight: "20",
      baggage_price: "5000",
      baggage_currency: "IDR",
      meal_quantity: "",
      meal_display_name: "",
      meal_price: "",
      meal_currency: "",
    },
    {
      type: "segment", // baggage
      baggage_type: "KG",
      baggage_quantity: "1",
      bagagge_weight: "10",
      baggage_price: "5000",
      baggage_currency: "IDR",
      meal_quantity: "",
      meal_display_name: "",
      meal_price: "",
      meal_currency: "",
    },
    {
      type: "segment", // meals
      baggage_type: "",
      baggage_quantity: "",
      bagagge_weight: "",
      baggage_price: "",
      baggage_currency: "",
      meal_quantity: "1",
      meal_display_name: "Nasi Padang",
      meal_price: "5000",
      meal_currency: "IDR",
    },
    {
      type: "segment", // meals
      baggage_type: "",
      baggage_quantity: "",
      bagagge_weight: "",
      baggage_price: "",
      baggage_currency: "",
      meal_quantity: "1",
      meal_display_name: "Nasi Padang",
      meal_price: "5000",
      meal_currency: "IDR",
    },
  ],
  additional_info: "Refundable",
  baggage_quantity: "20 KG",
  date_time: "10-31-2024 (07:55 - 09:20)",
  details: "Batik Air",
  info: "On Booking",
  meal_quantity: "1x Nasi Padang",
  pessenger_name: "Subandi",
  price: "1111380",
  status: "On Booking",
  title: "CGK - SUB (direct)",
};

var totalPriceBagagge = 0,
  totalPriceMeal = 0,
  storeDataAddOns = [],
  totalPrice = 0,
  mealDetails = {},
  baggageDetails = {};

if (loop.addOns.length != 0) {
  for (var i = 0, len = loop.addOns.length; i < len; i++) {
    var item = loop.addOns[i];

    var baggagePrice = parseFloat(item.baggage_price) || 0;
    var mealPrice = parseFloat(item.meal_price) || 0;

    totalPriceBagagge += baggagePrice;
    totalPriceMeal += mealPrice;

    if (item.meal_display_name) {
      var mealKey = item.meal_display_name;
      if (!mealDetails[mealKey]) {
        mealDetails[mealKey] = 0;
      }
      mealDetails[mealKey] += parseFloat(item.meal_quantity) || 0;
    };

    if (item.baggage_type && item.bagagge_weight) {
      var baggageKey = item.bagagge_weight + " " + item.baggage_type;
      if (!baggageDetails[baggageKey]) {
        baggageDetails[baggageKey] = 0;
      }
      baggageDetails[baggageKey] += parseFloat(item.baggage_quantity) || 0;
    } 

    storeDataAddOns.push({
      bagagge_weight: parseFloat(item.bagagge_weight) || 0,
      baggage_currency: item.baggage_currency || "",
      baggage_price: baggagePrice || "",
      baggage_quantity: parseFloat(item.baggage_quantity) || 0,
      baggage_type: item.baggage_type || "",
      meal_currency: item.meal_currency || "",
      meal_display_name: item.meal_display_name || "",
      meal_price: mealPrice || "",
      meal_quantity: parseFloat(item.meal_quantity) || 0,
      type: item.type || "",
    });
  }
}

var mealOutput = Object.keys(mealDetails)
  .map(function (key) {
    return mealDetails[key] + "x " + key;
  })
  .join(", ");

var baggageOutput = Object.keys(baggageDetails)
  .map(function (key) {
    return "Baggage " + key + " (" + baggageDetails[key] + "x)";
  })
  .join(", ");

totalPrice = parseFloat(loop.price) + totalPriceBagagge + totalPriceMeal;

// console.log("Meal Details:", mealOutput);
// console.log("Baggage Details:", baggageOutput);
// console.log(storeDataAddOns);
// console.log(totalPriceBagagge);
// console.log(totalPriceMeal);
// console.log(loop.price);
// console.log(totalPrice);
