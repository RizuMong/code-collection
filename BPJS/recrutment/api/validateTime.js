var nowUtc = new Date();
var wibOffset = 7 * 60 * 60 * 1000;
var nowWib = new Date(nowUtc.getTime() + wibOffset);
var wibTimestamp = nowWib.getTime();

var rawData = [
  {
    _id: "680390b1813bb71b98f405c2",
    closed_at: 1746118800000,
    description:
      "Posisi Kepesertaan bertanggung jawab dalam pengelolaan data peserta, mulai dari pengumpulan, analisis, hingga penyusunan data calon peserta. Jabatan ini juga berperan dalam pelaksanaan dan pemantauan kegiatan kepesertaan, menjalin koordinasi dengan mitra serta pihak terkait untuk mendukung perluasan dan kepatuhan peserta. Selain itu, tugasnya mencakup pelayanan administrasi, pengelolaan dokumen, serta menjaga hubungan baik dengan peserta untuk meningkatkan kepuasan. Posisi ini juga terlibat dalam evaluasi kepatuhan peserta dan penyusunan laporan sebagai bentuk pertanggungjawaban atas pelaksanaan tugas.",
    gaji_kotor_maximum: 0,
    gaji_kotor_minimum: 0,
    id_vacancy: "AeC3hGKncJXtsozq",
    jabatan: "KEPESERTAAN",
    period: "Rekrutmen January 2025",
    posted_at: 1743440400000,
    publication_date: 1745064113689,
    show_salary: false,
    tipe_kepegawaian: "KONTRAK",
    tipe_rekrutmen: {
      id: "n0crGgur28orqpH9",
      name: "REGULAR",
    },
  },
  {
    _id: "68039195813bb71b98f497d6",
    closed_at: 1748624400000,
    description:
      "Posisi Pelayanan berperan dalam memberikan layanan prima kepada peserta sesuai ketentuan yang berlaku, termasuk menyampaikan informasi terkait program dan layanan BPJS Ketenagakerjaan. Tugas mencakup penerimaan dan penanganan klaim peserta, verifikasi dokumen, serta memastikan penyelesaian klaim secara akurat dan tepat waktu. Jabatan ini juga menangani keluhan peserta, mengelola dokumen administrasi, dan menyusun laporan kerja sebagai bentuk pertanggungjawaban. Fokus utama dari posisi ini adalah menjaga kualitas pelayanan dan kepuasan peserta.",
    gaji_kotor_maximum: 0,
    gaji_kotor_minimum: 0,
    id_vacancy: "YjM5ScHhb7HfECei",
    jabatan: "PELAYANAN ",
    period: "Rekrutmen January 2025",
    posted_at: 1745946000000,
    publication_date: 1745064341573,
    show_salary: false,
    tipe_kepegawaian: "KONTRAK",
    tipe_rekrutmen: {
      id: "n0crGgur28orqpH9",
      name: "REGULAR",
    },
  },
  {
    _id: "680391f3813bb71b98f4d44a",
    closed_at: 1748624400000,
    description:
      "Posisi Operasional bertanggung jawab dalam mendukung kelancaran aktivitas Unit Kerja melalui pengelolaan anggaran, pencatatan keuangan, dan pelaporan perpajakan. Jabatan ini juga mengelola pembayaran klaim, piutang iuran peserta, serta kebutuhan sarana prasarana, layanan umum, dan infrastruktur TI. Selain itu, peran ini mencakup pengendalian keuangan, pengelolaan dokumen, serta pelaksanaan manajemen risiko dan penanganan krisis untuk memastikan keberlangsungan operasional sesuai ketentuan yang berlaku.",
    gaji_kotor_maximum: 0,
    gaji_kotor_minimum: 0,
    id_vacancy: "Z3NtkbOXRLp7M4eq",
    jabatan: "OPERASIONAL",
    period: "Rekrutmen January 2025",
    posted_at: 1745946000000,
    publication_date: 1745064435289,
    show_salary: false,
    tipe_kepegawaian: "KONTRAK",
    tipe_rekrutmen: {
      id: "n0crGgur28orqpH9",
      name: "REGULAR",
    },
  },
];


var filteredData = [];

for (var i = 0; i < rawData.length; i++) {
  var item = rawData[i];
  if (wibTimestamp >= item.posted_at && wibTimestamp <= item.closed_at) {
    filteredData.push(item);
  };
};

console.log(wibTimestamp);
console.log(filteredData);

// datanya kok gak muncul semua harusnya data KEPESERTAAN muncul karena masih range