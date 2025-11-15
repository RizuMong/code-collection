var body = {
  "date": "31-12-2023"
}

function convertToTimestamp(fieldName, label) {
  var value = body[fieldName];
  if (value) {
      // Validasi format DD-MM-YYYY
      var isValidFormat = /^\d{2}-\d{2}-\d{4}$/.test(value);
      if (!isValidFormat) {
          errors.push("Format " + label + " harus DD-MM-YYYY.");
      } else {
          // Pecah tanggal: DD-MM-YYYY → YYYY-MM-DD
          var parts = value.split("-");
          var formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0]; // YYYY-MM-DD
          return new Date(formattedDate + "T00:00:00").getTime();
      }
  }
  return null;
}

var errors = [];

var date = convertToTimestamp("date", "Date");

console.log({
  date: date,
  errors: errors
});
