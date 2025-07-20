var rawData = [
  {
    _id: "6817356e813bb71b9869302f",
    closed_at: 1763830800000,
    description: "buat yg jago javascript, bole banget apply ke sini ya",
    gaji_kotor_maximum: 10000000,
    gaji_kotor_minimum: 6000000,
    id_vacancy: "2BZeMqAbxNkoYNp",
    jabatan: "Solution Engineer 1",
    period: "Rekrutmen Mei 2025",
    posted_at: 1746291600000,
    publication_date: 1746351470385,
    show_salary: true,
    tipe_kepegawaian: "TETAP",
    tipe_rekrutmen: {
      id: "eVm1YKFMg2X46np6",
      name: "PROHIRE",
    },
  },
  {
    _id: "68221e41813bb71b98a041b3",
    closed_at: 1780160400000,
    description: "Solution",
    gaji_kotor_maximum: 10000000,
    gaji_kotor_minimum: 8000000,
    id_vacancy: "W7YcCW9NV4XM0dkz",
    jabatan: "Solution Engineer",
    period: "Rekrutmen Mei 2025",
    posted_at: 1747674000000,
    publication_date: 1747066433768,
    show_salary: false,
    tipe_kepegawaian: "TETAP",
    tipe_rekrutmen: {
      id: "n0crGgur28orqpH9",
      name: "REGULAR",
    },
  },
  {
    _id: "68230fe8813bb71b9859c026",
    closed_at: 1811696400000,
    description:
      "Sebagai Quality Assurance (QA), Anda akan bertanggung jawab untuk memastikan bahwa seluruh proses bisnis, sistem informasi, dan layanan digital di BPJS berjalan sesuai dengan standar mutu yang telah ditetapkan. QA berperan penting dalam menjaga integritas, akurasi, serta keandalan data dan sistem layanan publik, guna mendukung transparansi dan efisiensi operasional.",
    gaji_kotor_maximum: 20000000,
    gaji_kotor_minimum: 10000000,
    id_vacancy: "Fp70JxZjRc7VG25r",
    jabatan: "Solution Quality Assurance",
    period: "Rekrutmen Mei 2025",
    posted_at: 1747069200000,
    publication_date: 1747128296685,
    show_salary: true,
    tipe_kepegawaian: "TETAP",
    tipe_rekrutmen: {
      id: "n0crGgur28orqpH9",
      name: "REGULAR",
    },
  },
];

function _log(msg) {
  console.log(msg);
}

// Current time calculation
var nowUtc = new Date();
var wibOffset = 7 * 60 * 60 * 1000;
var nowWib = new Date(nowUtc.getTime() + wibOffset);
var wibTimestamp = nowWib.getTime();

// FILTER UNTUK DATA YANG SUDAH EXPIRED/TIDAK AKTIF
var filteredData = [];
for (var i = 0; i < rawData.length; i++) {
  var item = rawData[i];
  if (wibTimestamp > item.closed_at) {
    filteredData.push(item);
  }
}

_log(filteredData);
