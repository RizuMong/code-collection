var months = [];

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (var i = 0; i < 12; i++) {
  var year = new Date().getFullYear();
  var month = i; // index bulan (0–11)
  var date = new Date(year, month, 1);
  var workingDays = 0;

  while (date.getMonth() === month) {
    var day = date.getDay(); // 0=Sunday, 6=Saturday
    if (day !== 0 && day !== 6) {
      workingDays++;
    }
    date.setDate(date.getDate() + 1);
  }

  months.push({
    name: monthNames[i],
    working_day: workingDays,
    month_number: i + 1,
  });
};

console.log(months);


/*
    1. buatkan logic untuk generate object bulan dengan format:
    {
        name: "Nama Bulan",
        working_day: jumlah_hari_kerja_dalam_bulan_tersebut,
        month_number: nomor_bulan_tersebut (1-12)
    }
    2. asumsikan hari kerja adalah senin sampai jumat
    3. output harus berupa array of object bulan
    4. gunakan bahasa pemrograman javascript
    5. jangan gunakan library apapun
    6. jangan ubah variable months yang sudah disediakan
*/

// Expected output:
// {
//     name: "January",
//     working_day: 160,
// },
