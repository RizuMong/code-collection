function convertToTimestamp(dateStr) {
  var parts = dateStr.split('/');
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1;
  var year = parseInt(parts[2], 10);
  var date = new Date(year, month, day);
  return date.getTime();
};


var dateOfBirth = convertToTimestamp("1994-04-26");

console.log(dateOfBirth);