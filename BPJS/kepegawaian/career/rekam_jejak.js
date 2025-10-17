var req = {
  agama_id: {
    id: "RHvZyk4G0g68eJaw",
    name: "Islam",
  },
  code_user: "121212121",
  company_id: 27414,
  created_at: 1760415843868,
  created_by: 178566,
  dob: 971456400000,
  email: "rizki.galon@mailinator.com",
  first_name: "Rizki",
  full_name: "Rizki Galon",
  gender: "Laki-Laki",
  golongan_id: {
    id: "",
    name: "",
  },
  grade_jabatan_id: {
    id: "izulQIvDjf7f",
  },
  id: "cEj9ClfuQa9y",
  id_employee: "cEj9ClfuQa9y",
  jabatan_id: {
    id: "FpK9hnBGaXkE",
  },
  jenis_golongan: "Struktural",
  jenjang_pendidikan_diakui: "D4/S1",
  join_date: 1760374800000,
  last_name: "Galon",
  level_jabatan_id: {
    id: "izulQIvDjf7f",
  },
  nomor_ktp: "32012733938383838",
  npk: "21121212",
  organigram_id: 932,
  pendidikan_diakui_id: {
    id: "Sx5vOHzlsHEBIfJU",
    name: "Bina Nusantara",
  },
  perusahaan_id: {
    id: "rvxyot4CtlnE",
  },
  pob: "Sukabumi",
  position_id: {
    id: "Z3T341oMdUCw",
    name: "Kepala Bidang Pelayanan (Kelas 3) Kacab Binjai",
  },
  quota_cdt: 2,
  rumpun_id: {
    id: "yIxI01srP3X4",
  },
  sequence: 200,
  status_pegawai: "Tetap",
  tipe_jabatan: "Stuktural",
  tmt_golongan: 1760415846083,
  tmt_grade: 1760415846083,
  tmt_kelompok_jabatan: 1760415846083,
  tmt_level_jabatan: 1760415846083,
  tmt_level_organisasi: 1760415846083,
  tmt_perusahaan: 1760415846083,
  tmt_posisi: 1760415846083,
  tmt_rumpun_jabatan: 1760415846083,
  tmt_status_jabatan: 1760415846083,
  tmt_status_pegawai: 1760415846083,
  tmt_unit_kerja: 1760415846083,
  tmt_wilayah: 1760415846083,
  unit_kerja_core_id: {
    id: "VMqVbCbX1mGk",
    name: "Kantor Cabang Binjai",
  },
  unit_kerja_id: {
    id: "GkQkR5mUUcFd",
    name: "Bidang Pelayanan Kantor Cabang Binjai",
  },
  updated_at: 1760415846828,
  updated_by: 178566,
  user_company_id: 187937,
  zona_wilayah_id: {
    id: "VMqHmE7XFmft",
    name: "3",
  },
};

/*
    NOMOR SURAT → Kosong dari Career
    TIPE SK → Kosong dari Career
    TANGGAL SURAT → Kosong dari Career
    POSISI -> posisi_id
    TANGGAL EFEKTIF → created_at
    BIDANG/GROUP/URUSAN → unit_kerja_bidang
    GRADE PEGAWAI → Grade Jabatan
    GOLONGAN → Golongan
    STATUS PEGAWAI → Status Kepegawaian (Tetap/Kontrak)
    STATUS JABATAN → Status Jabatan
    LEVEL JABATAN → Level Jabatan
    TAMPILAN CETAK SK → Kosong dari Career
    TAMPILAN CETAK LAMPIRAN → Kosong dari Career

    Table → t_employee_career_record
*/

var getPosition = {
  approval_parent_id: {
    id: "tSmSlJLyvJMw",
    name: "KKC_K3_KCB_Kepala Kantor Cabang (Kelas 3) Kacab Binjai",
  },
  company_id: 27414,
  created_at: 1758909646473,
  created_by: 178566,
  id: "Z3T341oMdUCw",
  id_posisi: "Z3T341oMdUCw",
  jabatan_id: {
    id: "FpK9hnBGaXkE",
  },
  job_grade_id: {
    id: "izulQIvDjf7f",
    name: "STR1",
  },
  kode: "B09110000",
  kode_updated: "KBP_K3_BPOKCB",
  nama: "Kepala Bidang Pelayanan (Kelas 3) Kacab Binjai",
  status: "Active",
  unit_kerja_bidang_id: {
    id: "GkQkR5mUUcFd",
    name: "Bidang Pelayanan Kantor Cabang Binjai",
  },
  update_kode_manually: true,
  updated_at: 1759340116357,
  updated_by: 178566,
};

var getUnitKerja = {
  cabang_konsolidasi_id: {
    id: "MW104sWnoynh",
    name: "Grup Konsolidasi Kantor Cabang Binjai",
  },
  company_id: 27414,
  created_at: 1758909541593,
  created_by: 178566,
  email: "kcbb@mailinator.com",
  id: "GkQkR5mUUcFd",
  id_unit_kerja: "GkQkR5mUUcFd",
  is_parent: false,
  is_root: false,
  is_supervise: false,
  kode: "BPKCB",
  level_access_id: {
    id: "FpK93KzGNXHp",
    name: "Kantor Cabang",
  },
  level_organisasi_id: {
    id: "RHX8MVzeyN4V",
    name: "Kantor Cabang Kelas 3",
  },
  nama: "Bidang Pelayanan Kantor Cabang Binjai",
  parent_id: {
    id: "uhjuY8t21YpT",
    name: "KCB_Kantor Cabang Binjai",
  },
  perusahaan_id: {
    id: "rvxyot4CtlnE",
    name: "BPJS Ketenagakerjaan",
  },
  provinsi_id: {
    id: "QR65CL3Ac42t",
    name: "Sumatera Utara",
  },
  status: "Active",
  status_unit_kerja: "Internal",
  unit_kerja_core_id: {
    id: "VMqVbCbX1mGk",
    name: "Kantor Cabang Binjai",
  },
  updated_at: 1760387877672,
  updated_by: 187916,
  wilayah_konsolidasi_id: {
    id: "eVbRCYg6wlXN",
    name: "Grup Konsolidasi Kantor WIlayah Sumatera Bagian Utara",
  },
  zona_wilayah_remunerasi_id: {
    id: "VMqHmE7XFmft",
    name: "3",
  },
};

var getGrade = {
  company_id: 27414,
  created_at: 1758053056745,
  created_by: 187672,
  id: "izulQIvDjf7f",
  id_grade: "izulQIvDjf7f",
  job_grade: "14",
  kelompok_jabatan: "II",
  kode: "STR1",
  level_jabatan: "Senior Manager",
  status: "Active",
  tipe_jabatan: "Stuktural",
  updated_at: 1758053056745,
  updated_by: 187672,
};

function safeGet(obj, path, fallback) {
  var keys = path.split(".");
  for (var i = 0; i < keys.length; i++) {
    if (!obj || typeof obj !== "object") return fallback;
    obj = obj[keys[i]];
  }
  return obj == null || obj === "" ? fallback : obj;
}

var careerData = {
  nomor_surat: "", // dari Career
  tipe_sk: "", // dari Career
  tanggal_surat: null,
  tanggal_efektif: safeGet(req, "created_at", null),
  posisi_id:
    getPosition && getPosition.id
      ? { id: getPosition.id, name: safeGet(getPosition, "nama", "--") }
      : { id: "--", name: "--" },
  employee_id:
    req && req.id
      ? { id: req.id, name: safeGet(req, "email", "--") }
      : { id: "--", name: "--" },
  unit_kerja_bidang_id:
    getUnitKerja && getUnitKerja.id
      ? { id: getUnitKerja.id, name: safeGet(getUnitKerja, "nama", "--") }
      : { id: "--", name: "--" },
  grade_pegawai_id:
    getGrade && getGrade.id
      ? { id: getGrade.id, name: safeGet(getGrade, "job_grade", "--") }
      : { id: "--", name: "--" },
  golongan_id: safeGet(req, "golongan_id.id", "")
    ? req.golongan_id
    : { id: "--", name: "--" },
  level_jabatan: safeGet(getGrade, "level_jabatan", "--"),
  status_pegawai: safeGet(req, "status_pegawai", "--"),
  status_jabatan: safeGet(req, "tipe_jabatan", "--"),
  tampilan_cetak_sk: "", // dari Career
  tampilan_cetak_lampiran: "", // dari Career
};

console.log(careerData);
