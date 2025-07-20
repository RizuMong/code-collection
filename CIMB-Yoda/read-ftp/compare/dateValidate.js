var date_of_birth = "21/05/2024";

// buat function di js es5 untuk rubah data date diatas menjadi timestamp 

function convertToTimestamp(dateStr) {
  var parts = dateStr.split('/');
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1;
  var year = parseInt(parts[2], 10);
  var date = new Date(year, month, day);
  return date.getTime();
};

var timestamp = convertToTimestamp(date_of_birth);
console.log(timestamp);