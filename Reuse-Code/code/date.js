var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1; // Months are zero-based
var year = date.getFullYear();

console.log({
    day: day,
    month: month,
    year: year
});