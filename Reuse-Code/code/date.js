var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var week = Math.ceil(day / 7);

console.log({
    day: day,
    month: month,
    year: year,
    week: week
});