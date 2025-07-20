var getRefundPolicy = {
  data: {
    refundPolicies: [
      {
        refundHalfUsed: null,
        refundPolicy: [
        //   {
        //     endPeriod: {
        //       numHours: "72",
        //       periodType: "BEFORE_DEPARTURE",
        //     },
        //     refundFees: [
        //       {
        //         amountWithCurrency: null,
        //         feeType: "PERCENT_BASE_FARE",
        //         flightRefundFeeLevelType: null,
        //         percentage: "25.0",
        //       },
        //       {
        //         amountWithCurrency: {
        //           amount: "60000.00",
        //           currency: "IDR",
        //         },
        //         feeType: "ADMIN_FEE",
        //         flightRefundFeeLevelType: null,
        //         percentage: null,
        //       },
        //     ],
        //     refundType: "REGULAR",
        //     startPeriod: {
        //       numHours: "0",
        //       periodType: "AFTER_PURCHASE",
        //     },
        //   },
        //   {
        //     endPeriod: {
        //       numHours: "24",
        //       periodType: "BEFORE_DEPARTURE",
        //     },
        //     refundFees: [
        //       {
        //         amountWithCurrency: null,
        //         feeType: "PERCENT_NTA",
        //         flightRefundFeeLevelType: null,
        //         percentage: "50.0",
        //       },
        //     ],
        //     refundType: "REGULAR",
        //     startPeriod: {
        //       numHours: "72",
        //       periodType: "BEFORE_DEPARTURE",
        //     },
        //   },
          {
            endPeriod: {
              numHours: "0",
              periodType: "AFTER_DEPARTURE",
            },
            refundFees: [
              {
                amountWithCurrency: null,
                feeType: "PERCENT_TOTAL_FARE",
                flightRefundFeeLevelType: null,
                percentage: "90.0",
              },
            ],
            refundType: "NO_SHOW",
            startPeriod: {
              numHours: "24",
              periodType: "BEFORE_DEPARTURE",
            },
          },
          {
            endPeriod: {
              numHours: "17532",
              periodType: "AFTER_DEPARTURE",
            },
            refundFees: [
              {
                amountWithCurrency: null,
                feeType: "PERCENT_BASE_FARE",
                flightRefundFeeLevelType: null,
                percentage: "90.0",
              },
            ],
            refundType: "NO_SHOW",
            startPeriod: {
              numHours: "0",
              periodType: "AFTER_DEPARTURE",
            },
          },
        ],
      },
    ],
  },
  errorMessage: null,
  success: true,
};

var getDetailTrip = {
    "booking_time": 1730307600000,
    "departure_date": 1730307600000
}

var foundItem = null;
var bestNumHours = Infinity;
var periodPriority = {
  "BEFORE_DEPARTURE": 1,
  "AFTER_PURCHASE": 2,
  "AFTER_DEPARTURE": 3
};


    getRefundPolicy.data.refundPolicies[0].refundPolicy.forEach(function (item) {
        var currentHours = parseInt(item.endPeriod.numHours, 10);
        var currentPeriodType = item.endPeriod.periodType;
      
        if (currentPeriodType === "BEFORE_DEPARTURE") {
          // Untuk BEFORE_DEPARTURE cari numHours terkecil
          if (foundItem === null || (periodPriority[currentPeriodType] <= periodPriority[foundItem.endPeriod.periodType] && currentHours < bestNumHours)) {
            foundItem = item;
            bestNumHours = currentHours;
          }
        } else {
          // Untuk AFTER_PURCHASE dan AFTER_DEPARTURE cari numHours terbesar
          if (foundItem === null || (periodPriority[currentPeriodType] < periodPriority[foundItem.endPeriod.periodType] || 
              (periodPriority[currentPeriodType] === periodPriority[foundItem.endPeriod.periodType] && currentHours > bestNumHours))) {
            foundItem = item;
            bestNumHours = currentHours;
          }
        }
      });

console.log(foundItem);

var refundType = foundItem.refundType;
var periodType = ""; 
var periodDate = 0;
var millisecondsPerHour = 3600000; 

if (foundItem.endPeriod.periodType === "BEFORE_DEPARTURE") {
  periodType = "sebelum";
  periodDate = new Date(getDetailTrip.departure_date - parseInt(foundItem.endPeriod.numHours) * millisecondsPerHour);
}

if (foundItem.endPeriod.periodType === "AFTER_DEPARTURE") {
    periodType = "setelah";
    periodDate = new Date(getDetailTrip.departure_date + parseInt(foundItem.endPeriod.numHours) * millisecondsPerHour);
}

if (foundItem.endPeriod.periodType === "AFTER_PURCHASE") {
    periodType = "setelah";
    periodDate = new Date(getDetailTrip.booking_time + parseInt(foundItem.endPeriod.numHours) * millisecondsPerHour);
}

function _dateFormat(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    return day + '-' + month + '-' + year + ' 00:00';
};

var refundPolicyDetail = refundType + " refund " + periodType + " " + _dateFormat(periodDate);

console.log(refundPolicyDetail);

