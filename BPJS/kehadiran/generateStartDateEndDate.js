var req = {
  end: 1751216400000,
  start: 1750698000000,
};

function getDatePartsInRange(startTimestamp, endTimestamp) {
  var result = {
    day: [],
    month: [],
    year: []
  };

  var currentDate = new Date(startTimestamp);
  var endDate = new Date(endTimestamp);

  while (currentDate <= endDate) {
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Bulan dimulai dari 0
    var year = currentDate.getFullYear();

    // Tambahkan hanya jika belum ada (agar tidak duplikat)
    if (result.day.indexOf(day) === -1) {
      result.day.push(day);
    }
    if (result.month.indexOf(month) === -1) {
      result.month.push(month);
    }
    if (result.year.indexOf(year) === -1) {
      result.year.push(year);
    }

    // Tambah 1 hari
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
}

var output = getDatePartsInRange(req.start, req.end);
console.log(output);

// Expected output:
// {
//   // from start to end
//   day: [
//     24, 25, 26, 27, 28, 29, 30
//   ],
//   // month from start to end
//   month: [
//     6 // karena bulan 6 (Juni)
//   ],
//   // year from start to end
//   year: [
//     2024 // karena tahun 2024 
//   ]
// }