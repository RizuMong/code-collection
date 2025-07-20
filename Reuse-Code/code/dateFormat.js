function formatTanggal(timestampInput) {
  if (timestampInput === null) {
    return "";
  }

  var date =
    timestampInput === undefined ? new Date() : new Date(timestampInput);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var formattedDay = ("0" + day).slice(-2);
  var formattedMonth = ("0" + month).slice(-2);

  return formattedDay + "-" + formattedMonth + "-" + year;
}

// Contoh Penggunaan (opsional, untuk demonstrasi):
// var tanggalSekarang = formatTanggal(null); // Hasil: Tanggal hari ini, misal "22-04-2025"
// var tanggalSpesifik = formatTanggal(new Date(2024, 9, 1)); // Hasil: "01-10-2024"
// var tanggalDariMs = formatTanggal(1727740800000); // Hasil: "01-10-2024" (tergantung TZ)
// var tanggalInvalid = formatTanggal("ini bukan tanggal"); // Hasil: "Invalid Date"

// console.log(tanggalSekarang);

function formatDate(timestamp) {
  var d = new Date(timestamp);
  var day = ("0" + d.getDate()).slice(-2);
  var month = ("0" + (d.getMonth() + 1)).slice(-2);
  var year = ("0" + (d.getFullYear() % 100)).slice(-2);

  return day + month + year;
};

function formatYear(timestamp) {
  var d = new Date(timestamp);
  var year = d.getFullYear(); 
  return year;
};

console.log(formatYear(Date.now()));


