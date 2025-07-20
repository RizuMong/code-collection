// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// function getMonthTimestamps(monthName) {
//     var year = new Date().getFullYear();
//     var monthIndex = months.indexOf(monthName);

//     if (monthIndex === -1) {
//         _log("Invalid month name");
//         return null;
//     }

//     var startOfMonth = new Date(year, monthIndex, 1, 0, 0, 0);
//     var start = startOfMonth.getTime();
//     var endOfMonth = new Date(year, monthIndex + 1, 0, 23, 59, 59);
//     var end = endOfMonth.getTime();

//     return {
//         year: year,
//         start: start,
//         end: end
//     };
// };

// var listMonth = [];

// months.forEach(function (month, index) {
//     var monthTimestamp = getMonthTimestamps(month);
//     var monthInt = index + 1;

//     listMonth.push({
//         month_text: month,
//         monthInt: monthInt,
//         date: monthTimestamp
//     });
// });

// console.log(listMonth);

function _getMonthTimestamps() {
    var now = new Date();
    var startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
    var endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    return {
        monthInt: startOfMonth.getMonth() + 1,
        startOfMonth: startOfMonth.getTime(),
        endOfMonth: endOfMonth.getTime()
    };
};

var timestamps = _getMonthTimestamps();

console.log(timestamps);