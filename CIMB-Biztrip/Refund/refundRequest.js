function getFromToDate() {
  var now = new Date();
  var timezoneOffset = 7 * 60; // GMT+7 

  // Set 00:00
  var fromDate = new Date(now.getTime());
  fromDate.setUTCHours(0, 0, 0, 0); // Set to 00:00 UTC
  fromDate.setMinutes(fromDate.getMinutes() + timezoneOffset); // GMT+7

  // Set 23:59
  var toDate = new Date(now.getTime());
  toDate.setUTCHours(23, 59, 0, 0); // Set to 23:59 UTC
  toDate.setMinutes(toDate.getMinutes() + timezoneOffset); // GMT+7

  return {
    from: fromDate.getTime().toString(),
    to: toDate.getTime().toString(),
  };
}

var fromToDate = getFromToDate();
console.log(fromToDate);
