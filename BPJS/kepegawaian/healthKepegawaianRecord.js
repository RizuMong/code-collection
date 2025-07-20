var req = {
  body: {
    biaya: 10000,
    catatan_lab: "",
    employee_id: {
      id: "eVmMKO3iOtJv6M3K",
      name: "ASASGATESTING TESTING",
    },
    id_employee_health_record: "qTu4XtDmBGsV3n8o",
    konsekuensi: "",
    nama_dokter: "Rizki Haddi",
    penyakit: "Radang",
    rumah_sakit: "Siloam",
    tanggal: 1743699600000,
  },
};

var res = {
  error: false,
  message: "Berhasil Riwayat Kesehatan Karyawan",
  statusCode: 200,
  data: {}
};

var REGEX = /[^a-zA-Z0-9\s]/;
var skipKeys = ["employee_id", "id_employee_health_record", "biaya"];


var fieldUI = {
  catatan_lab: "Catatan Lab",
  konsekuensi: "Konsekuensi",
  nama_dokter: "Nama Dokter",
  penyakit: "Penyakit",
  rumah_sakit: "Rumah Sakit",
  tanggal: "Tanggal Pemeriksaan"
};

var fields = req.body;
var keys = Object.keys(fields);
var message = [];

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  if (skipKeys.indexOf(key) === -1) {
    var value = fields[key];

    if (typeof value === "string" && REGEX.test(value)) {
      var label = fieldUI[key] || key;
      message.push("Kolom \"" + label + "\" mengandung special character");
    }
  }
}

if (message.length > 0) {
  res.error = true;
  res.statusCode = 401;
  res.message = message.join(", ");
};

console.log(res);