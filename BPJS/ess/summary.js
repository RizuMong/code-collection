// // var req = {
// //   company_id: 27414,
// //   created_at: 1748595345619,
// //   created_by: 178566,
// //   effective_end_date: 1751043600000,
// //   effective_start_date: 1750006800000,
// //   employee_ids: [
// //     {
// //       id: "yIL5niZPnRydrMyS",
// //       name: "200272503",
// //     },
// //     {
// //       id: "Oy9LYuh9nZkBJ7kO",
// //       name: "100252500",
// //     },
// //   ],
// //   id_shift_employee: "bqP24zDvvqN2ZTSI",
// //   repeat_shift_enabled: true,
// //   shift_friday: {
// //     id: "Z3N9lviPgACCMdBV",
// //     name: "Shift Weekday",
// //   },
// //   shift_monday: {
// //     id: "Z3N9lviPgACCMdBV",
// //     name: "Shift Weekday",
// //   },
// //   shift_saturday: {
// //     id: "QRrNJdhK4t2hANsX",
// //     name: "Shift Libur",
// //   },
// //   shift_sunday: {
// //     id: "QRrNJdhK4t2hANsX",
// //     name: "Shift Libur",
// //   },
// //   shift_thursday: {
// //     id: "Z3N9lviPgACCMdBV",
// //     name: "Shift Weekday",
// //   },
// //   shift_tuesday: {
// //     id: "Z3N9lviPgACCMdBV",
// //     name: "Shift Weekday",
// //   },
// //   shift_wednesday: {
// //     id: "Z3N9lviPgACCMdBV",
// //     name: "Shift Weekday",
// //   },
// //   updated_at: 1748595345619,
// //   updated_by: 178566,
// // };

// // // Optimized ES5 version
// // var summaryShifts = [];
// // var start = new Date(req.effective_start_date);
// // var end = new Date(req.effective_end_date);
// // var currentDate = new Date(start);

// // // Pre-define shift keys array untuk menghindari pembuatan array berulang
// // var shiftKeys = [
// //   "shift_sunday",
// //   "shift_monday",
// //   "shift_tuesday",
// //   "shift_wednesday",
// //   "shift_thursday",
// //   "shift_friday",
// //   "shift_saturday"
// // ];

// // // Pre-define day names array
// // var dayNames = [
// //   "Minggu",
// //   "Senin",
// //   "Selasa",
// //   "Rabu",
// //   "Kamis",
// //   "Jumat",
// //   "Sabtu"
// // ];

// // // Loop yang lebih efisien dengan while
// // while (currentDate <= end) {
// //   var dayIndex = currentDate.getDay();
// //   var shiftKey = shiftKeys[dayIndex];
// //   var shift = req[shiftKey];

// //   if (shift) {
// //     summaryShifts.push({
// //       shift_id: shift,
// //       date: currentDate.getTime(),
// //       year_shift: currentDate.getFullYear(),
// //       month_shift: currentDate.getMonth() + 1,
// //       day_shift: currentDate.getDate(),
// //       day_name: dayNames[dayIndex]
// //     });
// //   }

// //   // Increment date dengan cara yang lebih efisien
// //   currentDate.setDate(currentDate.getDate() + 1);
// // }

// // console.log(summaryShifts);

// // // buatkan logic untuk membuat data dibawah:
// // // 1. get range dari effective_start_date dan effective_end_date
// // // 2. untuk setiap tanggal or hari dari range tersebut buatkan sesuai dengan data shift_monday, shift_tuesday, dst
// // // 3. semisal range pertama hari senin maka shift id nya ambil dari situ
// // // 5. buat loop sampai range effective_end_date berakhir

// // // expected summaryShifts
// // // [
// // //   {
// // //   shift_id: {
// // //     id: "Z3N9lviPgACCMdBV",
// // //     name: "Shift Weekday",
// // //   },
// // //   date: timestamp,
// // //   year_shift: 2025,
// // //   month_shift: 6,
// // //   day_shift: 16,
// // //   }
// // // next data
// // // ]

// function convertToTimestamps(start_date, end_date) {
//   // Start date at 00:00
//   var startParts = start_date.split("-");
//   var startTimestamp = new Date(
//       parseInt(startParts[0], 10),
//       parseInt(startParts[1], 10) - 1,
//       parseInt(startParts[2], 10),
//       0, 0, 0, 0
//   ).getTime();

//   // End date at 23:59
//   var endParts = end_date.split("-");
//   var endTimestamp = new Date(
//       parseInt(endParts[0], 10),
//       parseInt(endParts[1], 10) - 1,
//       parseInt(endParts[2], 10),
//       23, 59, 0, 0
//   ).getTime();

//   return {
//       start_timestamp: startTimestamp,
//       end_timestamp: endTimestamp
//   };
// };

// var start_date = "2025-06-26";
// var end_date = "2025-06-27";

// var result = convertToTimestamps(start_date, end_date);
// console.log(result);

// certificate_number: String,
// created_at: timestamp,
// date: timestamp
// date_release: timestamp
// employee_id: Object
// event_id: Object
// event_name: String
// file: String
// id_external_development_history: String
// is_upload: Boolean
// nik: String
// organizer: String
// type: String
// year: String

var req = {
  query: {
    limit: ["1"],
    status: ["sent"],
  },
};

var status = req.query && req.query.status ? req.query.status[0] : null;

console.log(status);
