var dateTime = "2025-05-27T17:57:15+07:00";

var datePart = dateTime.split('T')[0];
var datePieces = datePart.split('-');

var year = datePieces[0];
var month = datePieces[1];
var day = datePieces[2];

console.log('Year:', year);
console.log('Month:', month);
console.log('Day:', day);