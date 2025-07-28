// function getDatePartsInRange(startTimestamp, endTimestamp) {
//     var result = {
//         day: [],
//         month: [],
//         year: []
//     };

//     var currentDate = new Date(startTimestamp);
//     var endDate = new Date(endTimestamp);

//     while (currentDate <= endDate) {
//         var day = currentDate.getDate();
//         var month = currentDate.getMonth() + 1;
//         var year = currentDate.getFullYear();

//         if (result.day.indexOf(day) === -1) {
//             result.day.push(day);
//         }
//         if (result.month.indexOf(month) === -1) {
//             result.month.push(month);
//         }
//         if (result.year.indexOf(year) === -1) {
//             result.year.push(year);
//         }

//         currentDate.setDate(currentDate.getDate() + 1);
//     }

//     return result;
// };

var getParameter = {
  attendance_status: ["ABSEN", "TIDAK ABSEN"],
};

var query  = "";

if (getParameter.attendance_status.length != 0) {
  
}