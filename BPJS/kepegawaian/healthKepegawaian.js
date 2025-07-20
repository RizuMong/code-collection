var req = {
  body: {
    alasan_menjalani_perawatan: "",
    berat_badan: "68.1 KG",
    employee_id: "eVmMKO3iOtJv6M3K",
    golongan_darah: "A",
    id_employee_health: "CmkiJi0gQYVLSpvR",
    kekurangan_fisik: "Ya",
    kondisi_khusus: "",
    tes_kesehatan: "",
    tinggi_badan: "178.5!",
    ukuran_baju: "",
    ukuran_celana: "",
    ukuran_kepala: "",
  },
};

var res = {
  error: false,
  message: "Berhasil Update Kesehatan Karyawan",
  statusCode: 200,
  data: {}
};

var fieldLabel = {
  alasan_menjalani_perawatan: "Alasan Menjalani Perawatan",
  berat_badan: "Berat Badan",
  employee_id: "ID Karyawan",
  golongan_darah: "Golongan Darah",
  id_employee_health: "ID Riwayat Kesehatan",
  kekurangan_fisik: "Kekurangan Fisik",
  kondisi_khusus: "Kondisi Khusus",
  tes_kesehatan: "Tes Kesehatan",
  tinggi_badan: "Tinggi Badan",
  ukuran_baju: "Ukuran Baju",
  ukuran_celana: "Ukuran Celana",
  ukuran_kepala: "Ukuran Kepala"
};


var REGEX = /^[a-zA-Z0-9.,\s]+$/;
var fields = req.body;
var keys = Object.keys(fields);

for (var i = 0; i < keys.length; i++) {
  var key = keys[i];
  if (key !== 'employee_id' && key !== 'id_employee_health') {
    var value = fields[key];
    if (value && !REGEX.test(value)) {
      res.error = true;
      res.message = "Kolom \"" + fieldLabel[key] + "\" mengandung special character";
      break;
    }
  }
}

console.log(res);