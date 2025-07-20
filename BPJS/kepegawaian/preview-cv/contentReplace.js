function _log(msg) {
  console.log(msg);
};

function formatTanggal(timestampInput) {
  if (timestampInput === null) {
    return '';
  }
  
  var date = timestampInput === undefined ? new Date() : new Date(timestampInput);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var formattedDay = ("0" + day).slice(-2);
  var formattedMonth = ("0" + month).slice(-2);

  return formattedDay + "-" + formattedMonth + "-" + year;
};

function getSafeValue(value) {
  return value !== undefined && value !== null ? value : '';
};

var getDetailEmployee = {
  "agama_id": {
      "id": "",
      "name": ""
  },
  "alamat": "",
  "alamat_domisili": "",
  "bangsa_id": {
      "id": "",
      "name": ""
  },
  "beasiswa": "",
  "city_id": {
      "id": "",
      "name": ""
  },
  "company_id": 27414,
  "created_at": 1745156625910,
  "created_by": 187473,
  "dob": 974739600000,
  "email": "ryan.rizwandy@mekari.com",
  "expired_passport": null,
  "first_name": "Ryan",
  "foto_profil": "http://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/6805d1f7e0711-bpjs-ketenagakerjaan-seeklogo.png",
  "full_name": "Ryan Rizky Rizwandy",
  "gender": "Pria",
  "golongan_id": {
      "id": "pQJgCxKz81jikazz",
      "name": "TEST"
  },
  "grade_jabatan_id": {
      "id": "cEXFsL6RjHgpuKC2",
      "name": "1"
  },
  "id": "YjMQQR7ZaNUGEKSN",
  "id_card_image": "http://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/6805d77cd5ef6-Screenshot_390.png",
  "id_employee": "YjMQQR7ZaNUGEKSN",
  "inisial_official": "",
  "jabatan_id": {
      "id": "bqPdD29Vh4IsZfCO",
      "name": "Penata Keuangan (Kelas 3)"
  },
  "jenjang_pendidikan_diakui": "S1/D4",
  "jenjang_pendidikan_terakhir": "",
  "join_date": 1742144400000,
  "jurusan": "",
  "kebangsaan_id": {
      "id": "",
      "name": ""
  },
  "ktp": "",
  "last_name": "Rizky Rizwandy",
  "level_jabatan_id": {
      "id": "miA2GrMIFre7xtTQ",
      "name": "Staf"
  },
  "level_organization_id": {
      "id": "n0cds5EWz1DOqEC2",
      "name": "Level 1"
  },
  "mobile_phone": "+12123123123",
  "nama_ibu_kandung": "",
  "nama_relasi": "",
  "nomor_ktp": "",
  "nomor_npwp": null,
  "nomor_passport": "",
  "npk": "100672500",
  "organigram_id": 93,
  "passport": "",
  "pendidikan_diakui": "Sarjana",
  "pendidikan_terakhir": "",
  "perusahaan_id": {
      "id": "izeYrQe70mhpD7ai",
      "name": "mekari"
  },
  "perusahaan_relasi": "",
  "phone": "+12312312132",
  "pob": "",
  "posisi_relasi": "",
  "position_id": {
      "id": "gbo0xwddKORNHDPv",
      "name": "Penata Keuangan (Kelas 3) KACAB TERNATE"
  },
  "resume": "https://lms-prod-public-bucket.s3.ap-southeast-3.amazonaws.com/25257/68062ced9a0ca-document-pdf-companyID-25257-userCompanyID-175332-mtc0ntiznte3otyyng%3D%3D65494987d3a85e161d0243b7eddde214-1745235179631.pdf",
  "rumpun_id": {
      "id": "MWzOIKjxaPXOnUGI",
      "name": "SDM & PPK"
  },
  "sapaan": "",
  "sequence": 67,
  "status": "",
  "status_jabatan_id": {
      "id": "cEXwvteR4HDnubys",
      "name": "Status 1"
  },
  "status_ketergantungan": "",
  "status_pajak": "",
  "status_pegawai": "Tetap",
  "status_perkawinan": "",
  "subjurusan": "",
  "tanggal_pernikahan": null,
  "tanggal_registrasi_npwp": null,
  "termination_date": null,
  "tmt_golongan": 1745156632013,
  "tmt_grade": 1745156632013,
  "tmt_kelompok_jabatan": 1745156632013,
  "tmt_level_jabatan": 1745156632013,
  "tmt_level_organisasi": 1745156632013,
  "tmt_perusahaan": 1745156632013,
  "tmt_posisi": 1745156632013,
  "tmt_rumpun_jabatan": 1745156632013,
  "tmt_status_jabatan": 1745156632013,
  "tmt_status_pegawai": 1745156632013,
  "tmt_unit_kerja": 1745156632013,
  "tmt_wilayah": 1745156632013,
  "unit_kerja_id": {
      "id": "N2HfAvvPcWDszG2w",
      "name": "KACAB TERNATE"
  },
  "updated_at": 1745235182292,
  "updated_by": 178566,
  "user_company_id": 187475,
  "wilayah_id": {
      "id": "KstHTe1HOujC5lzt",
      "name": "Jakarta Pusat"
  }
};

// ==== Variable Data
var dataKaryawan = {
  NAMA_LENGKAP: getSafeValue(getDetailEmployee.full_name),
  TANGGAL_PREVIEW: formatTanggal(),
  NPK_KARYAWAN: getSafeValue(getDetailEmployee.npk),
  FOTO_PROFILE_KARYAWAN: getSafeValue(getDetailEmployee.foto_profil),
  STATUS_KARYAWAN: getSafeValue(getDetailEmployee.status_pegawai),
  TMT_MASUK: formatTanggal(getDetailEmployee.join_date),
  TANGGAL_EFEKTIF: formatTanggal(getDetailEmployee.join_date),
  TANGGAL_BERAKHIR: formatTanggal(getDetailEmployee.termination_date),
  JABATAN_KARYAWAN: getSafeValue(getDetailEmployee.jabatan_id.name),
  UNIT_KERJA_KARYAWAN: getSafeValue(getDetailEmployee.unit_kerja_id.name),
  POSISI_KARYAWAN: getSafeValue(getDetailEmployee.position_id.name),
  KATEGORI_GRADE_KARYAWAN: getSafeValue(getDetailEmployee.grade_jabatan_id.name), // kelompok jabatan based grade
  GRADE: getSafeValue(getDetailEmployee.grade_jabatan_id.name),
  LEVEL_JABATAN: getSafeValue(getDetailEmployee.level_jabatan_id.name),
  GOLONGAN_KARYAWAN: getSafeValue(getDetailEmployee.golongan_id.name),
  BIDANG_GROUP_URUSAN_KARYAWAN: getSafeValue(), // get dari struktur organisasi atasan spv
  ATASAN_SPV_KARYAWAN: getSafeValue(), // get dari struktur organisasi atasan spv
  STATUS_JABATAN_KARYAWAN: getSafeValue(getDetailEmployee.status_jabatan_id.name),
  UNIT_USAHA_KARYAWAN: getSafeValue(), // belum ada kolomnya
  TANGGAL_MPP: getSafeValue(), // gak tau ambil dari yang mana
  TANGGAL_PENSIUN: getSafeValue(), // hitungnya seperti apa
  KEWARGANEGARAAN_KARYAWAN: getSafeValue(getDetailEmployee.kebangsaan_id.name),
  NOMOR_INDUK_KEPENDUDUKAN_KARYAWAN: getSafeValue(getDetailEmployee.ktp),
  TEMPAT_LAHIR_KARYAWAN: getSafeValue(getDetailEmployee.pob),
  TANGGAL_LAHIR_KARYAWAN: formatTanggal(getDetailEmployee.dob),
  JENIS_KELAMIN_KARYAWAN: getSafeValue(getDetailEmployee.gender),
  AGAMA_KARYAWAN: getSafeValue(getDetailEmployee.agama_id.name),
  STATUS_PERKAWINAN_KARYAWAN: getSafeValue(getDetailEmployee.status_perkawinan),
  SAPAAN_KARYAWAN: getSafeValue(getDetailEmployee.sapaan),
  TANGGAL_PERNIKAHAN_KARYAWAN: formatTanggal(getDetailEmployee.tanggal_pernikahan),
  EMAIL_KARYAWAN: getSafeValue(getDetailEmployee.email),
  TEMPAT_PERNIKAHAN_KARYAWAN: getSafeValue(), // belum ada

  // Content dalam table
  DESKRIPSI_KEAHLIAN_PEGAWAI: "",
  DESKRIPSI_DAERAH_YANG_DIAMATI: "",
  DESKRIPSI_JENIS_PEKERJAAN_YANG_DIMINATI: "",
  TINGGI_BADAN_KARYAWAN: "",
  BERAT_KARYAWAN: "",
  KONDISI_KESEHATAN_YANG_HARUS_DIPERHATIKAN_KARYAWAN: "",
  UKURAN_KEMEJA_KARYAWAN: "",
  GOLONGAN_DARAH_KARYAWAN: "",
  ALASAN_HARUS_MENJALANI_PERAWATAN_KARYAWAN: ""
};

// Table Data
var TABLE_INFORMASI_TEMPAT_TINGGAL_DAN_TELEPON = "";
var TABLE_INFORMASI_KONTAK_DARURAT = "";
var TABLE_INFORMASI_KELUARGA_DAN_TANGGUNGAN = "";
var TABLE_INFORMASI_RELASI = "";
var TABLE_INFORMASI_KEAHLIAN_DAN_MINAT = "";
var TABLE_PENDIDIKAN = "";
var TABLE_PERUBAHAN_JABATAN_GRADE_SEBELUM_HCIS = "";
var TABLE_PEMBERHENTIAN_SEBELUM_HCIS = "";
var TABLE_CATATAN_KARIR = "";
var TABLE_CATATAN_PENGHARGAAN = "";
var TABLE_CATATAN_PELANGGARAN = "";
var TABLE_INFORMASI_ASURANSI = "";
var TABLE_INFORMASI_REKENING_BANK = "";
var TABLE_IKATAN_DINAS = "";
var TABLE_PROFIL_PSIKOLOGI = "";
var TABLE_INFORMASI_KESAHATAN = "";
var TABLE_INFORMASI_KURSUS = "";
var TABLE_INFORMASI_SERTIFIKAT = "";
var TABLE_CATATAN_PENGALAMAN_KERJA = "";
var TABLE_INFORMASI_AKTIVITAS_ORGANISASI = "";
var TABLE_DOKUMEN_YANG_HABIS_MASA_BERLAKUNYA = "";
var TABLE_INFORMASI_LAINNYA = "";
var TABLE_INFORMASI_FASILITAS = "";
var TABLE_INFORMASI_PELATIHAN = "";

var dataReplaces = [
  { string_before: "NAMA_LENGKAP", string_after: dataKaryawan.NAMA_LENGKAP },
  { string_before: "TANGGAL_PREVIEW", string_after: dataKaryawan.TANGGAL_PREVIEW },
  { string_before: "NPK_KARYAWAN", string_after: dataKaryawan.NPK_KARYAWAN },
  { string_before: "FOTO_PROFILE_KARYAWAN", string_after: dataKaryawan.FOTO_PROFILE_KARYAWAN },
  { string_before: "STATUS_KARYAWAN", string_after: dataKaryawan.STATUS_KARYAWAN },
  { string_before: "TMT_MASUK", string_after: dataKaryawan.TMT_MASUK },
  { string_before: "TANGGAL_EFEKTIF", string_after: dataKaryawan.TANGGAL_EFEKTIF },
  { string_before: "TANGGAL_BERAKHIR", string_after: dataKaryawan.TANGGAL_BERAKHIR },
  { string_before: "JABATAN_KARYAWAN", string_after: dataKaryawan.JABATAN_KARYAWAN },
  { string_before: "UNIT_KERJA_KARYAWAN", string_after: dataKaryawan.UNIT_KERJA_KARYAWAN },
  { string_before: "POSISI_KARYAWAN", string_after: dataKaryawan.POSISI_KARYAWAN },
  { string_before: "KATEGORI_GRADE_KARYAWAN", string_after: dataKaryawan.KATEGORI_GRADE_KARYAWAN },
  { string_before: "GRADE", string_after: dataKaryawan.GRADE },
  { string_before: "LEVEL_JABATAN", string_after: dataKaryawan.LEVEL_JABATAN },
  { string_before: "GOLONGAN_KARYAWAN", string_after: dataKaryawan.GOLONGAN_KARYAWAN },
  { string_before: "BIDANG_GROUP_URUSAN_KARYAWAN", string_after: dataKaryawan.BIDANG_GROUP_URUSAN_KARYAWAN },
  { string_before: "ATASAN_SPV_KARYAWAN", string_after: dataKaryawan.ATASAN_SPV_KARYAWAN },
  { string_before: "STATUS_JABATAN", string_after: dataKaryawan.STATUS_JABATAN_KARYAWAN },
  { string_before: "UNIT_USAHA_KARYAWAN", string_after: dataKaryawan.UNIT_USAHA_KARYAWAN },
  { string_before: "TANGGAL_MPP", string_after: dataKaryawan.TANGGAL_MPP },
  { string_before: "TANGGAL_PENSIUN", string_after: dataKaryawan.TANGGAL_PENSIUN },
  { string_before: "KEWARGANEGARAAN_KARYAWAN", string_after: dataKaryawan.KEWARGANEGARAAN_KARYAWAN },
  { string_before: "NOMOR_INDUK_KEPENDUDUKAN_KARYAWAN", string_after: dataKaryawan.NOMOR_INDUK_KEPENDUDUKAN_KARYAWAN },
  { string_before: "TEMPAT_LAHIR_KARYAWAN", string_after: dataKaryawan.TEMPAT_LAHIR_KARYAWAN },
  { string_before: "TANGGAL_LAHIR_KARYAWAN", string_after: dataKaryawan.TANGGAL_LAHIR_KARYAWAN },
  { string_before: "JENIS_KELAMIN_KARYAWAN", string_after: dataKaryawan.JENIS_KELAMIN_KARYAWAN },
  { string_before: "AGAMA_KARYAWAN", string_after: dataKaryawan.AGAMA_KARYAWAN },
  { string_before: "STATUS_PERKAWINAN_KARYAWAN", string_after: dataKaryawan.STATUS_PERKAWINAN_KARYAWAN },
  { string_before: "SAPAAN_KARYAWAN", string_after: dataKaryawan.SAPAAN_KARYAWAN },
  { string_before: "TANGGAL_PERNIKAHAN_KARYAWAN", string_after: dataKaryawan.TANGGAL_PERNIKAHAN_KARYAWAN },
  { string_before: "EMAIL_KARYAWAN", string_after: dataKaryawan.EMAIL_KARYAWAN },
  { string_before: "TEMPAT_PERNIKAHAN_KARYAWAN", string_after: dataKaryawan.TEMPAT_PERNIKAHAN_KARYAWAN },
  
  // Table
  { string_before: "TABEL_INFORMASI_KELUARGA_DAN_TANGGUNGAN", string_after: dataTable.TABEL_INFORMASI_KELUARGA_DAN_TANGGUNGAN },
  { string_before: "TABLE_INFORMASI_RELASI", string_after: dataTable.TABLE_INFORMASI_RELASI },
  { string_before: "TABLE_INFORMASI_KEAHLIAN_DAN_MINAT", string_after: dataTable.TABLE_INFORMASI_KEAHLIAN_DAN_MINAT },
  { string_before: "TABLE_PENDIDIKAN", string_after: dataTable.TABLE_PENDIDIKAN },
  { string_before: "TABLE_PERUBAHAN_JABATAN_GRADE_SEBELUM_HCIS", string_after: dataTable.TABLE_PERUBAHAN_JABATAN_GRADE_SEBELUM_HCIS },
  { string_before: "TABLE_PEMBERHENTIAN_SEBELUM_HCIS", string_after: dataTable.TABLE_PEMBERHENTIAN_SEBELUM_HCIS },
  { string_before: "TABLE_CATATAN_KARIR", string_after: dataTable.TABLE_CATATAN_KARIR },
  { string_before: "TABLE_CATATAN_PENGHARGAAN", string_after: dataTable.TABLE_CATATAN_PENGHARGAAN },
  { string_before: "TABLE_CATATAN_PELANGGARAN", string_after: dataTable.TABLE_CATATAN_PELANGgaran },
  { string_before: "TABLE_INFORMASI_ASURANSI", string_after: dataTable.TABLE_INFORMASI_ASURANSI },
  { string_before: "TABLE_INFORMASI_REKENING_BANK", string_after: dataTable.TABLE_INFORMASI_REKENING_BANK },
  { string_before: "TABLE_IKATAN_DINAS", string_after: dataTable.TABLE_IKATAN_DINAS },
  { string_before: "TABLE_PROFIL_PSIKOLOGI", string_after: dataTable.TABLE_PROFIL_PSIKOLOGI },
  { string_before: "TABLE_INFORMASI_KESAHATAN", string_after: dataTable.TABLE_INFORMASI_KESAHATAN },
  { string_before: "TABLE_INFORMASI_KURSUS", string_after: dataTable.TABLE_INFORMASI_KURSUS },
  { string_before: "TABLE_INFORMASI_SERTIFIKAT", string_after: dataTable.TABLE_INFORMASI_SERTIFIKAT },
  { string_before: "TABLE_CATATAN_PENGALAMAN_KERJA", string_after: dataTable.TABLE_CATATAN_PENGALAMAN_KERJA },
  { string_before: "TABLE_INFORMASI_AKTIVITAS_ORGANISASI", string_after: dataTable.TABLE_INFORMASI_AKTIVITAS_ORGANISASI },
  { string_before: "TABLE_DOKUMEN_YANG_HABIS_MASA_BERLAKUNYA", string_after: dataTable.TABLE_DOKUMEN_YANG_HABIS_MASA_BERLAKUNYA },
  { string_before: "TABLE_INFORMASI_LAINNYA", string_after: dataTable.TABLE_INFORMASI_LAINNYA },
  { string_before: "TABLE_INFORMASI_FASILITAS", string_after: dataTable.TABLE_INFORMASI_FASILITAS },
  { string_before: "TABLE_INFORMASI_PELATIHAN", string_after: dataTable.TABLE_INFORMASI_PELATIHAN },
  { string_before: "TANGGAL_PREVIEW", string_after: dataKaryawan.TANGGAL_PREVIEW },
  
  // Content In Table
  { string_before: "DESKRIPSI_KEAHLIAN_PEGAWAI", string_after: dataKaryawan.DESKRIPSI_KEAHLIAN_PEGAWAI },
  { string_before: "DESKRIPSI_DAERAH_YANG_DIAMATI", string_after: dataKaryawan.DESKRIPSI_DAERAH_YANG_DIAMATI },
  { string_before: "DESKRIPSI_JENIS_PEKERJAAN_YANG_DIMINATI", string_after: dataKaryawan.DESKRIPSI_JENIS_PEKERJAAN_YANG_DIMINATI },
  { string_before: "TINGGI_BADAN_KARYAWAN", string_after: dataKaryawan.TINGGI_BADAN_KARYAWAN },
  { string_before: "BERAT_KARYAWAN", string_after: dataKaryawan.BERAT_KARYAWAN },
  { string_before: "KONDISI_KESEHATAN_YANG_HARUS_DIPERHATIKAN_KARYAWAN", string_after: dataKaryawan.KONDISI_KESEHATAN_YANG_HARUS_DIPERHATIKAN_KARYAWAN },
  { string_before: "UKURAN_KEMEJA_KARYAWAN", string_after: dataKaryawan.UKURAN_KEMEJA_KARYAWAN },
  { string_before: "GOLONGAN_DARAH_KARYAWAN", string_after: dataKaryawan.GOLONGAN_DARAH_KARYAWAN },
  { string_before: "ALASAN_HARUS_MENJALANI_PERAWATAN_KARYAWAN", string_after: dataKaryawan.ALASAN_HARUS_MENJALANI_PERAWATAN_KARYAWAN }
];


for (i in dataReplaces) {
  _log(dataReplaces[i].string_before + " -> " + dataReplaces[i].string_after);
}
