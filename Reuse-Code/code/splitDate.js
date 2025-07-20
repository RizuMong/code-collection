var req = {
  body: {
    datetime: "01/07/2025",
    datetime2: 1751709115000
  },
};

// Example from text
var dateTime = req.body.datetime;
var datePart = dateTime.split("T")[0];
var datePieces = datePart.split("/");

var day = parseInt(datePieces[0], 10);
var month = parseInt(datePieces[1], 10);
var year = parseInt(datePieces[2], 10);

// Example from timestamp
var date = new Date(req.body.datetime2);
var day = date.getDate();
var month = date.getMonth() + 1; // Months are zero-based in JavaScript
var year = date.getFullYear();

console.log({
  year: year,
  month: month,
  day: day,
});
