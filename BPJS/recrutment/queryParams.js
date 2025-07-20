// Function to format YYYY-MM-DD
function formatDate(timestamp) {
  var date = new Date(timestamp);
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are 0-indexed
  var day = ('0' + date.getDate()).slice(-2);
  return year + '-' + month + '-' + day;
};

function buildDateRangeQueryParams(startTimestamp, endTimestamp) {
  var startDate = formatDate(startTimestamp);
  var endDate = formatDate(endTimestamp);
  return 'application_date_start=' + startDate + '&application_date_end=' + endDate;
};

var startTimestamp = 1744562200000;
var endTimestamp = 1744562200000;
var dateRangeParams = buildDateRangeQueryParams(startTimestamp, endTimestamp);

console.log(dateRangeParams);