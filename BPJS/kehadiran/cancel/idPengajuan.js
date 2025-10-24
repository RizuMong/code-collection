function getDatePartsInRange(startTimestamp, endTimestamp) {
  var result = {
    day: [],
    month: [],
    year: [],
  };

  var currentDate = new Date(startTimestamp);
  var endDate = new Date(endTimestamp);

  while (currentDate <= endDate) {
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();

    if (result.day.indexOf(day) === -1) {
      result.day.push(day);
    }
    if (result.month.indexOf(month) === -1) {
      result.month.push(month);
    }
    if (result.year.indexOf(year) === -1) {
      result.year.push(year);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
}

var item = {
  id: "iz2B3czDjfKs",

  // Belum Lewat (Push ke array)
  start_date: 1761152400000, // Thursday, October 23, 2025
  end_date: 1761670800000, // Wednesday, October 29, 2025

  // Sudah Lewat (Tidak di-push ke array)
  //   start_date: 1760461200000, // Wednesday, October 15, 2025
  //   end_date: 1761066000000, // Wednesday, October 22, 2025
};

var idPengajuans = [];

/*
    Hari ini tanggal 22 Oktober 2025

    1. ambil start_date & end_date
    2. kalau date nya itu belum masuk hari ini atau lewat maka masukkan ke array idPengajuans
    3. kalau sudah lewat hari ini, jangan masukkan ke array idPengajuans
*/

var today = new Date();
var todayDay = today.getDate();
var todayMonth = today.getMonth() + 1;
var todayYear = today.getFullYear();

var date = getDatePartsInRange(item.start_date, item.end_date);

var isTodayInRange =
  date.day.indexOf(todayDay) !== -1 &&
  date.month.indexOf(todayMonth) !== -1 &&
  date.year.indexOf(todayYear) !== -1;

var endDateObj = new Date(item.end_date);
var endDay = endDateObj.getDate();
var endMonth = endDateObj.getMonth() + 1;
var endYear = endDateObj.getFullYear();

var isAfterEndDate =
  todayYear > endYear ||
  (todayYear === endYear && todayMonth > endMonth) ||
  (todayYear === endYear && todayMonth === endMonth && todayDay > endDay);


if (!isTodayInRange && !isAfterEndDate) {
  idPengajuans.push(item.id);
}

console.log("idPengajuans:", idPengajuans);
