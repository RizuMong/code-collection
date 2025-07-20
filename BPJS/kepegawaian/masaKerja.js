var _field = {
  "masa_kerja": "",
  "join_date": 1585888047000, // 3 April 2020
};

var now = new Date();
var joinDate = new Date(_field.join_date);

// Menghitung tahun
var yearsDiakui = now.getFullYear() - joinDate.getFullYear();

// Menghitung bulan
var monthsDiakui = now.getMonth() - joinDate.getMonth();
console.log();


// Menghitung hari
var daysDiakui = now.getDate() - joinDate.getDate();

// Mengoreksi hari jika lebih kecil
if (daysDiakui < 0) {
  monthsDiakui -= 1;
  var lastMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  daysDiakui += lastMonthDays;
}

// Mengoreksi bulan jika lebih kecil
if (monthsDiakui < 0) {
  yearsDiakui -= 1;
  monthsDiakui += 12;
}

// Menampilkan hasil
_field.masa_kerja = yearsDiakui + " Tahun, " + monthsDiakui + " Bulan, " + daysDiakui + " Hari";

console.log(_field.masa_kerja);
