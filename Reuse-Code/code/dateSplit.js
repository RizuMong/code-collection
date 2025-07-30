// function getDatePartsInRange(startTimestamp, endTimestamp) {
//   var result = {
//     day: [],
//     month: [],
//     year: [],
//   };

//   var currentDate = new Date(startTimestamp);
//   var endDate = new Date(endTimestamp);

//   while (currentDate <= endDate) {
//     var day = currentDate.getDate();
//     var month = currentDate.getMonth() + 1;
//     var year = currentDate.getFullYear();

//     if (result.day.indexOf(day) === -1) {
//       result.day.push(day);
//     }
//     if (result.month.indexOf(month) === -1) {
//       result.month.push(month);
//     }
//     if (result.year.indexOf(year) === -1) {
//       result.year.push(year);
//     }

//     currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return result;
// }

// var data = {
//     "query":_query,
//     "param":_paramKey,
//     "params": _paramValue
// }

var req = {
   "query": {
            "filter": [
                "{\"employee_id_text\":\"n0cVZHXnEefIqaIi\",\"date\":{\"$between\":[1753722000000,1753808399999]},\"shift_id.id\":\"s6Sz0JU9AEVJ8E0S\",\"status_cuti\":\"YES\",\"status_holiday\":\"NO\",\"status_overtime\":\"YES\",\"status_permit\":\"YES\",\"delete_status\":\"YES\"}"
            ]
}}

console.log(req.query.filter[0]);
