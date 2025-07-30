// var _field = {
//   effective_end_date: 1749142800000,
//   effective_start_date: 1748797200000,
// };

// var diffDays = 0;

// if (_field.effective_start_date && _field.effective_end_date) {
//     var startDate = new Date(_field.effective_start_date);
//     var endDate = new Date(_field.effective_end_date);
//     var diffMs = endDate - startDate;
//     diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
// };

// // var diffDays = req.diffDays;
// var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
// var result = [];
// var maxDays = diffDays > 7 ? 7 : diffDays;

// for (var i = 0; i < maxDays; i++) {
//     result.push({
//         day: days[i % 7], // putar ulang jika diffDays > 7
//         shift: null,
//         // shift2: shiftList
//     });
// };

// console.log(result);

// var dateAllowance = new Date();
// var day = dateAllowance.getDate();
// var month = dateAllowance.getMonth() + 1;
// var year = dateAllowance.getFullYear();

// console.log({
//   day: day,
//   month: month,
//   year: year
// });

// var employee_id = {
//   id: "9L1wPdbT3q43FmRy",
//   name: "201271799 - Aul Hukum baru",
// };

// var employeeSplits = employee_id.name.split(" - ");

// var npk = employeeSplits[0];
// var full_name = employeeSplits[1];

// console.log({
//     full_name: full_name,
//     npk: npk,
// });

var data = {
  is_allowance_take: "available",
};

var statusTunjangan = {
  available: "Tersedia",
  not_applicable: "Tidak Berlaku",
  taken: "Sudah Diambil",
};

var allowance_status = statusTunjangan[data.is_allowance_take] || "";


console.log(allowance_status);