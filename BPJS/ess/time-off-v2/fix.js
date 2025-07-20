var req = {
  company_id: 27414,
  created_at: 1752592552979,
  created_by: 178566,
  dob: 395514000000,
  email: "rizki.access@mailinator.com",
  first_name: "Rizki",
  full_name: "Rizki Access",
  gender: "Pria",
  golongan_id: {
    id: "",
    name: "",
  },
  grade_jabatan_id: {
    id: "GkdRng35TEecU3TC",
  },
  id: "58yFs4aTnCMWQRv4",
  id_employee: "58yFs4aTnCMWQRv4",
  jabatan_id: {},
  jenis_golongan: "Struktural",
  jenjang_pendidikan_diakui: "S2",
  join_date: 1751302800000,
  kepemilikan_rumah_dinas: "Kepemilikan BPJS Ketenagakerjaan",
  last_name: "Access",
  level_jabatan_id: {
    id: "Pugw5xqR3rnuNTae",
    name: "Junior Associate",
  },
  level_organization_id: {
    id: "0dEry0VRMgsnTeHx",
    name: "Value Added Service",
  },
  npk: "101072582",
  organigram_id: 404,
  pendidikan_diakui: "SMA",
  perusahaan_id: {
    id: "GkdXB38F6dBRU7yY",
    name: "duplicate10",
  },
  position_id: {
    id: "n0coiahSwSpHqpMx",
    name: "RUMPUN JABATAN VP TRIGGER 11 sadasd",
  },
  provinsi_id: {
    id: "fUTWiJV1ACCf95Fv",
    name: "test provinsi",
  },
  role_id: {
    id: "Z3NF8qRi9bF4MB7N",
    name: "Admin",
  },
  rumpun_id: {
    id: "rvpPhnRbDYhECzbL",
  },
  sequence: 107,
  status_jabatan_id: {
    id: "0dErleyOc3yxTGU9",
  },
  status_pegawai: "Tetap",
  tgl_mulai_sewa: null,
  tgl_selesai_sewa: null,
  tmt_golongan: 1752592555136,
  tmt_grade: 1752592555136,
  tmt_kelompok_jabatan: 1752592555136,
  tmt_level_jabatan: 1752592555136,
  tmt_level_organisasi: 1752592555136,
  tmt_perusahaan: 1752592555136,
  tmt_posisi: 1752592555136,
  tmt_rumpun_jabatan: 1752592555136,
  tmt_status_jabatan: 1752592555136,
  tmt_status_pegawai: 1752592555136,
  tmt_unit_kerja: 1752592555136,
  tmt_wilayah: 1752592555136,
  unit_kerja_id: {
    id: "2BZRaOMQluLXY0Mz",
    name: "sadasd",
  },
  updated_at: 1752592557010,
  updated_by: 178566,
  user_company_id: 187665,
  wilayah_id: {
    id: "uhbVC3zg753T2fJx",
    name: "testing wilayah",
  },
  zona_wilayah_id: {
    id: "GkdWlGE6h6aQU52s",
    name: "Maluku",
  },
};

function _log(msg) {
  console.log(msg);
}

function _isEmpty(object) {
  return !object || Object.keys(object).length === 0;
};

if (!req) {
  _log("payload kosong");
  // _stopAutomation();
}

if (req && _isEmpty(req.role_id)) {
  _log("role kosong");
  // _stopAutomation();
}

if (req && !req.organigram_id) {
  _log("organigram kosong");
  // _stopAutomation();
}

var roleID = req && req.role_id ? req.role_id.id : null;
_log(roleID);
