var req = {
  alamat_domisili: "daadsdas",
  alamat_ktp: "sadasdasd",
  beasiswa: "TIDAK",
  email: "rizki.ganteng@mekari.id",
  full_name: "Rizki Haddi", // mandatory, duplicate check, regex
  jenis_kelamin: "Pria",
  jenjang_pendidikan_diakui: "ASDASD",
  jenjang_pendidikan_terakhir: "S1",
  jurusan: "TEKNIK",
  kadaluarsa_passport: "09/10/2000",
  kode_agama: "ISM",
  kode_golongan: "A1",
  kode_grade_jabatan: "111",
  kode_jabatan: "asdsad3",
  kode_kelompok_jabatan: "111IIIas",
  kode_kota: "BOO",
  kode_level_jabatan: "TESTI NG010116",
  kode_level_organisasi: "A1",
  kode_negara: "IND",
  kode_perusahaan: "abc",
  kode_posisi: "a_CSM001 5",
  kode_rumpun_jabatan: "Rumpun A1",
  kode_status_jabatan: "Definitif",
  kode_suku: "JAW",
  kode_unit_kerja: "AABC",
  kode_wilayah: "JKT010",
  nama_ibu_kandung: "Puteri",
  nama_relasi: "",
  nomor_handphone: "085787875484",
  nomor_ktp: "54545478787",
  nomor_passport: "55444545",
  nomor_registrasi: "3213123",
  nomor_telepon: "02154548787",
  npk: "32132141324", // mandatory, duplicate check, regex must number
  pelanggaran: "",
  pendidikan_diakui: "SMA",
  pendidikan_terakhir: "S1",
  perusahaan_relasi: "",
  posisi_relasi: "",
  status_ketergantungan: "",
  status_pajak: "",
  status_pegawai: "Tetap",
  sub_jurusan: "TEKNIK",
  tanggal_bergabung: "09/10/2000",
  tanggal_lahir: "09/10/2000",
  tanggal_mulai_perusahaan: "09/10/2000",
  tanggal_mulai_terhitung_golongan: "09/10/2000",
  tanggal_mulai_terhitung_grade_jabatan: "09/10/2000",
  tanggal_mulai_terhitung_kelompok_jabatan: "09/10/2000",
  tanggal_mulai_terhitung_level_jabatan: "09/10/2000",
  tanggal_mulai_terhitung_level_organisasi: "09/10/2000",
  tanggal_mulai_terhitung_posisi: "09/10/2000",
  tanggal_mulai_terhitung_rumpun_jabatan: "09/10/2000",
  tanggal_mulai_terhitung_status_jabatan: "09/10/2000",
  tanggal_mulai_terhitung_status_pegawai: "09/10/2000",
  tanggal_mulai_wilayah: "09/10/2000",
  tanggal_pengakhiran: "09/10/2000",
  tempat_lahir: "Sukabumi",
  tipe_penghargaan: "",
};

// Mandatory columns
var mandatoryFields = [
  { key: "full_name", label: "Nama Lengkap" },
  { key: "tipe_organisasi", label: "Tipe Organisasi" },
  { key: "jabatan", label: "Jabatan" },
  { key: "periode_awal_text", label: "Periode Awal" },
  { key: "periode_akhir_text", label: "Periode Akhir" }
];

for (var i = 0; i < mandatoryFields.length; i++) {
  var field = mandatoryFields[i];
  if (!body[field.key]) {
      errors.push(field.label + " wajib diisi.");
  }
}

// Regex

// Options validation

// Date Format

// Duplicate use filter NPK

// Master data validation