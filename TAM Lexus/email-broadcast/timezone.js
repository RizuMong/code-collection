var day = 1729765880991;

var monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
var month = monthNames[day.getMonth()];
var year = day.getFullYear();
var formattedDate = day + " " + month + " " + year;

console.log(day);
