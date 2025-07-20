var req = {
  action: "Promosi",
  approved_by: [187444],
  company_id: 27414,
  created_at: 1744241767013,
  created_by: 187445,
  effective_date: 1744218000000,
  flow_id: 131492405,
  flow_status: "approved",
  golongan_id: {
    id: "",
    name: "",
  },
  grade_jabatan_id: {
    id: "",
    name: "",
  },
  id: "XnD7POv904iDbe6d",
  id_employee_jabatan: "XnD7POv904iDbe6d",
  jabatan_id: {
    id: "",
    name: "",
  },
  level_jabatan_id: {
    id: "",
    name: "",
  },
  level_organisasi_id: {
    id: "",
    name: "",
  },
  note: "acc by aul",
  npk_id: {
    id: "oP8ERNxXpkPTldgp",
    name: "100402525",
  },
  old_company_id: {
    id: "",
    name: "",
  },
  old_golongan_id: {
    id: "",
    name: "",
  },
  old_grade_jabatan_id: {
    id: "9L1sg4IAMft2Fi75",
    name: "III",
  },
  old_jabatan_id: {
    id: "bqPdD29Vh4IsZfCO",
    name: "Penata Keuangan (Kelas 3)",
  },
  old_level_jabatan_id: {
    id: "miA2GrMIFre7xtTQ",
    name: "Staf",
  },
  old_level_organisasi_id: {
    id: "",
    name: "",
  },
  old_position_id: {
    id: "gbo0xwddKORNHDPv",
    name: "Penata Keuangan (Kelas 3) KACAB TERNATE",
  },
  old_rumpun_id: {
    id: "QRrbTEiCRYo7ArqY",
    name: "Perencanaan Strategis",
  },
  old_status_jabatan_id: {
    id: "312tx8a2bEx7WWr8",
    name: "Calon Karyawan",
  },
  old_unit_kerja_id: {
    id: "N2HfAvvPcWDszG2w",
    name: "KACAB TERNATE",
  },
  old_wilayah_id: {
    id: "KstHTe1HOujC5lzt",
    name: "Jakarta Pusat",
  },
  perusahaan_id: {
    id: "Io5PpqUZqUoxvYPM",
    name: "PT. Mid Solusi Nusantara",
  },
  position_id: {
    id: "",
    name: "",
  },
  rejected_at: 1744242024677,
  rejected_by: "faqih@mailinator.com",
  rumpun_id: {
    id: "",
    name: "",
  },
  status_jabatan_id: {
    id: "",
    name: "",
  },
  submitted_at: 1744242024696,
  submitted_by: "faqih@mailinator.com",
  updated_at: 1744242106547,
  updated_by: 187444,
  wilayah_id: {
    id: "",
    name: "",
  },
  workflow_id: "workflow_pengajuan_perubahan_pegawai",
};

var getEmployee = {
  "company_id": 27414,
  "created_at": 1744241335316,
  "created_by": 181238,
  "dob": 1744218000000,
  "email": "fatkur@mailinator.com",
  "first_name": "Fatkur",
  "full_name": "Fatkur",
  "gender": "Pria",
  "grade_jabatan_id": {
      "id": "9L1sg4IAMft2Fi75",
      "name": "III"
  },
  "id": "oP8ERNxXpkPTldgp",
  "id_employee": "oP8ERNxXpkPTldgp",
  "jabatan_id": {
      "id": "bqPdD29Vh4IsZfCO",
      "name": "Penata Keuangan (Kelas 3)"
  },
  "join_date": 1744218000000,
  "last_name": "",
  "level_jabatan_id": {
      "id": "miA2GrMIFre7xtTQ",
      "name": "Staf"
  },
  "level_organization_id": {
      "id": "0dEry0VRMgsnTeHx",
      "name": "Value Added Service"
  },
  "nomor_registrasi": 555,
  "npk": "100402525",
  "organigram_id": 54,
  "perusahaan_id": {
      "id": "HZl0yHfgSam1VF8z",
      "name": "BPJS Ketenagakerjaan"
  },
  "position_id": {
      "id": "gbo0xwddKORNHDPv",
      "name": "Penata Keuangan (Kelas 3) KACAB TERNATE"
  },
  "rumpun_id": {
      "id": "QRrbTEiCRYo7ArqY",
      "name": "Perencanaan Strategis"
  },
  "sequence": 40,
  "status_jabatan_id": {
      "id": "312tx8a2bEx7WWr8",
      "name": "Calon Karyawan"
  },
  "status_pegawai": "Tetap",
  "tmt_golongan": 1744241338295,
  "tmt_grade": 1744241338295,
  "tmt_kelompok_jabatan": 1744241338295,
  "tmt_level_jabatan": 1744241338295,
  "tmt_level_organisasi": 1744241338295,
  "tmt_perusahaan": 1744241338295,
  "tmt_posisi": 1744241338295,
  "tmt_rumpun_jabatan": 1744241338295,
  "tmt_status_jabatan": 1744241338295,
  "tmt_status_pegawai": 1744241338295,
  "tmt_unit_kerja": 1744241338295,
  "tmt_wilayah": 1744241338295,
  "unit_kerja_id": {
      "id": "N2HfAvvPcWDszG2w",
      "name": "KACAB TERNATE"
  },
  "updated_at": 1744241340521,
  "updated_by": 181238,
  "user_company_id": 187444,
  "wilayah_id": {
      "id": "KstHTe1HOujC5lzt",
      "name": "Jakarta Pusat"
  }
};

function isNotEmpty(value) {
  return value !== undefined && value !== null && value !== "";
};

var dataPerubahan = {
  perusahaan_id: getEmployee.perusahaan_id,
  status_jabatan_id: getEmployee.status_jabatan_id,
  level_jabatan_id: getEmployee.level_jabatan_id,
  jabatan_id: getEmployee.jabatan_id,
  golongan_id: getEmployee.golongan_id,
  grade_jabatan_id: getEmployee.grade_jabatan_id,
  level_jabatan_id: getEmployee.level_jabatan_id,
  position_id: getEmployee.position_id,
  unit_kerja_id: getEmployee.unit_kerja_id,
  wilayah_id: getEmployee.wilayah_id,
};

if (req && isNotEmpty(req.perusahaan_id.id)) {
  dataPerubahan.perusahaan_id = req.perusahaan_id;
};

if (req && isNotEmpty(req.status_jabatan_id.id)) {
  dataPerubahan.status_jabatan_id = req.status_jabatan_id;
};

if (req && isNotEmpty(req.level_jabatan_id.id)) {
  dataPerubahan.level_jabatan_id = req.level_jabatan_id;
};

if (req && isNotEmpty(req.jabatan_id.id)) {
  dataPerubahan.jabatan_id = req.jabatan_id;
};

if (req && isNotEmpty(req.golongan_id.id)) {
  dataPerubahan.golongan_id = req.golongan_id;
};

if (req && isNotEmpty(req.grade_jabatan_id.id)) {
  dataPerubahan.grade_jabatan_id = req.grade_jabatan_id;
};

if (req && isNotEmpty(req.level_organisasi_id.id)) {
  dataPerubahan.level_organisasi_id = req.level_organisasi_id;
};

if (req && isNotEmpty(req.position_id.id)) {
  dataPerubahan.position_id = req.position_id;
};

if (req && isNotEmpty(req.unit_kerja_id.id)) {
  dataPerubahan.unit_kerja_id = req.unit_kerja_id;
};

if (req && isNotEmpty(req.wilayah_id.id)) {
  dataPerubahan.wilayah_id = req.wilayah_id;
};

console.log(dataPerubahan);