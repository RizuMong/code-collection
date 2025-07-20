var req = {
  body: {
    filter: {
      date: [1751302800000, 1753981199999],
    },
    key: "ids",
    param: "QRrPQSHnu46sA07d",
  },
};

var filterData = req.body.filter || {};
var date = null;

function getDatePartsInRange(startTimestamp, endTimestamp) {
  var result = {
      day: [],
      month: [],
      year: []
  };

  var currentDate = new Date(startTimestamp);
  var endDate = new Date(endTimestamp);

  while (currentDate <= endDate) {
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();

      if (result.day.indexOf(day) === -1) {
          result.day.push(day);
      }
      if (result.month.indexOf(month) === -1) {
          result.month.push(month);
      }
      if (result.year.indexOf(year) === -1) {
          result.year.push(year);
      }

      currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
};

if (filterData.hasOwnProperty("date")) {
  date = getDatePartsInRange(filterData.date[0], filterData.date[1]);
};

if (!date) {
  var now = new Date();
  var startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
  var endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
  date = getDatePartsInRange(startOfMonth.getTime(), endOfMonth.getTime());
};

console.log(filterData);
console.log(date);