var date = "2025-03-18 02:04:44";

function _convertDateToTimestamp(dateString) {
  var replaceDate = dateString.replace(/-/g, '/');
  var date = new Date(replaceDate);
  return date.getTime();
};

console.log(_convertDateToTimestamp(date));