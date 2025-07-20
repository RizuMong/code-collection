// var req = {
//   "sequence": 1,
//   "join_date": 1742178657000,
//   "dob": 1742178657000,
//   "gender": "Pria"
// };

// var genderNumber = {
//     "Pria": 1,
//     "Wanita": 2
// };

// // nomor npk
// // 1 Digit Pertama :  Gender (1 untuk Pria, 2 untuk Wanita)
// // 4 Digit Kedua : no Urut (saat ini : 6278)
// // 2 Digit ketiga : Tahun Join Date (YY)
// // 2 Digit Keempat : Tahun lahir (YY)

// var genderNum = req.gender === "Pria" ? 1 : 2;
// var sequence = ("0000" + req.sequence).slice(-4); // Pastikan 4 digit
// var joinYear = new Date(req.join_date).getFullYear().toString().slice(-2); // Ambil 2 digit terakhir
// var birthYear = new Date(req.dob).getFullYear().toString().slice(-2); // Ambil 2 digit terakhir

// var npk = genderNum + sequence + joinYear + birthYear;

// console.log(npk);

var getSquenceEmployee = [
  {
    "sequence": 10,
  }
];

var sequence = getSquenceEmployee.length && getSquenceEmployee[getSquenceEmployee.length - 1].sequence
    ? getSquenceEmployee[getSquenceEmployee.length - 1].sequence + 1
    : 1;

console.log(sequence);