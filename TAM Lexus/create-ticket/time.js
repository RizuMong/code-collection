var dateNow = new Date();
var day = dateNow.getDate();
var monthNames = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
var month = monthNames[dateNow.getMonth()];
var year = dateNow.getFullYear();

var formattedDate = day + " " + month + " " + year;

console.log(formattedDate);