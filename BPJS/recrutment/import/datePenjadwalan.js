var req = {
  company_id: 27414,
  created_at: 1748247252991,
  created_by: 187474,
  id: "b6c8bHfNg",
  id_import: "b6c8bHfNg",
  import_id: "_qcUxNfNg",
  link: "www.asdasdsa.com",
  nama_jadwal: "Wawancara Psikologis",
  nomor_registrasi: "kAaaHq8Y6irbK44W/aNaNaN/P/REGULAR//190525",
  tanggal_mulai: "28/05/2025",
  tanggal_selesai: "28/05/2025",
  tipe_jadwal: "Interview User",
  updated_at: 1748247252991,
  updated_by: 187474,
  waktu_mulai: "22:20",
  waktu_selesai: "23:00",
};

var body = req;

function convertToTimestampWithTime(
  dateField,
  timeField,
  labelDate,
  labelTime
) {
  var dateValue = body[dateField];
  var timeValue = body[timeField];

  if (dateValue && timeValue) {
    var isValidDateFormat = /^\d{2}\/\d{2}\/\d{4}$/.test(dateValue);
    var isValidTimeFormat = /^\d{2}:\d{2}$/.test(timeValue);

    if (!isValidDateFormat) {
      errors.push("Format " + labelDate + " harus DD/MM/YYYY");
    }
    if (!isValidTimeFormat) {
      errors.push("Format " + labelTime + " harus HH:MM");
    }

    if (isValidDateFormat && isValidTimeFormat) {
      var dateParts = dateValue.split("/");
      var formattedDate =
        dateParts[2] + "-" + dateParts[1] + "-" + dateParts[0]; // YYYY-MM-DD
      var timestamp = new Date(
        formattedDate + "T" + timeValue + ":00"
      ).getTime();
      return timestamp;
    }
  }
  return null;
}

var tsMulai = convertToTimestampWithTime(
  "tanggal_mulai",
  "waktu_mulai",
  "Tanggal Mulai",
  "Waktu Mulai"
);
var tsSelesai = convertToTimestampWithTime(
  "tanggal_selesai",
  "waktu_selesai",
  "Tanggal Selesai",
  "Waktu Selesai"
);

console.log({
  tsMulai: tsMulai,
  tsSelesai: tsSelesai,
});

// buat hasilnya jadi timezone Asia/Jakarta (UTC + 7)