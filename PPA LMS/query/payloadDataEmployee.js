var payload = {
  atasanNama: null,
  atasanNrp: null,
  atasanTitle: null,
  company: "PPA",
  currentGradeDuration: null,
  currentPosisiDuration: null,
  dateOfBirth: null,
  department: "PRO",
  division: null,
  effectiveCurrentGrade: null,
  effectiveCurrentPosition: null,
  email: null,
  equipmentGroup: 6,
  gender: "Male",
  grade: "",
  hiringDate: "2010-01-01",
  job_code: "HOPDA01001",
  jobsite: "HO",
  jobsiteType: "HO",
  level: "PRESIDENT DIRECTOR",
  name: "CHRISTIANTO",
  nrp: "10010001",
  phone: null,
  placeOfBirth: null,
  title: "PRESIDENT DIRECTOR",
  workDuration: 14.83,
};

var payloadData = {
  nik: payload.nrp,
  fullname: payload.name,
  dob: payload.dateOfBirth,
  pob: payload.placeOfBirth || "",
  email: payload.email || "",
  gender: payload.gender || "",
  date_perubahan_jabatan_terakhir: payload.effectiveCurrentPosition || null,
  date_perubahan_grade_terakhir: payload.effectiveCurrentGrade || null,
  masa_current_jabatan: payload.currentPosisiDuration || null,
  masa_current_grade: payload.currentGradeDuration || null,
  masa_kerja: payload.workDuration || null,
  mobile_phone: payload.phone || "",
  hire_date: payload.hiringDate || "",
  type_employee: payload.grade === "Staff" ? "Staff" : "Non-Staff",

  // Relasi
  tingkat_jabatan_id: {
    id: "",
    name: "",
  },
  jabatan_id: {
    id: "",
    name: "",
  },
  grade_id: {
    id: "",
    name: "",
  },
  division_id: {
    id: "",
    name: "",
  },
  department_id: {
    id: "",
    name: "",
  },
  business_unit_id: {
    id: "",
    name: "",
  },
  jobsite_id: {
    id: "",
    name: "",
  },
  equipment_group_id: {
    id: "",
    name: "",
  }
};

var getDataExist = {};
var getTingkatJabatan = {};
var getJabatan = {};
var getDivision = {};
var getDepartement = {};
var getBusinessUnit = {
  address: "",
  code_business_unit: "PPA",
  company_id: 25257,
  created_at: 1726198954686,
  created_by: 175332,
  footer:
    "https://jojo-receipt-new.s3.ap-southeast-1.amazonaws.com/25257/671b03453f290-Footer.png",
  header:
    "https://jojo-receipt-new.s3.ap-southeast-1.amazonaws.com/25257/671b034174f0e-Header.png",
  id: "3YyXoseSRz",
  id_business_unit: "3YyXoseSRz",
  name: "PPA",
  updated_at: 1729823560388,
  updated_by: 175332,
};
var getJobsite = {
  "bussiness_unit_id": {
      "id": "3YyXoseSRz",
      "name": "PPA"
  },
  "code": "HO",
  "company_id": 25257,
  "created_at": 1732517154979,
  "created_by": 0,
  "description": "Head Office",
  "id": "Z7CKwanHR",
  "id_job_site": "Z7CKwanHR",
  "name": "HO",
  "type_site": "HO",
  "updated_at": 1732532359317,
  "updated_by": 0
};

// With Relasi Or Logic
if (Object.keys(getTingkatJabatan).length != 0) {
  payloadData.tingkat_jabatan_id = {
    id: getTingkatJabatan.id_tingkat_jabatan,
    name: getTingkatJabatan.name,
  };
}

if (Object.keys(getJabatan).length != 0) {
  payloadData.jabatan_id = {
    id: getJabatan.id_jabatan,
    name: getJabatan.nama_jabatan,
  };
}

if (Object.keys(getDivision).length != 0) {
  payloadData.division_id = {
    id: getDivision.id_division,
    name: getDivision.name,
  };
}

if (Object.keys(getDepartement).length != 0) {
  payloadData.department_id = {
    id: getDepartement.id_division,
    name: getDepartement.name,
  };
}

if (Object.keys(getBusinessUnit).length != 0) {
  payloadData.business_unit_id = {
    id: getBusinessUnit.id_business_unit,
    name: getBusinessUnit.name,
  };
}

if (Object.keys(getJobsite).length != 0) {
  payloadData.jobsite_id = {
    id: getJobsite.id_job_site,
    name: getJobsite.name,
  };
};

if (!payload.grade) {
  // payloadData.grade_id = _hitFunction("func_upsert_grade_id", {
  //   data: payload.grade,
  // });
};

// Atasan
if (!payload.atasanNama && !payload.atasanNrp) {
  // payloadData.manager_id = _hitFunction("func_get_manager_id", {
  //   nrp: payload.atasanNrp,
  //   nama: payload.atasanNama
  // });
}

// Equipment Group
if (
  typeof payload.equipmentGroup === "number" &&
  !isNaN(payload.equipmentGroup) &&
  (payload.department === "PLT" || payload.department === "PRO" || payload.department === "FLO")
) {
  var nameEquipmentGroup = "EG-" + (payload.department === "FLO" ? "PRO" : payload.equipmentGroup);
  var codeEquipmentGroup = "EG-" + (payload.department === "FLO" ? "PRO" : payload.equipmentGroup) + "-" + payload.department;

  payloadData.equipment_group_id = _hitFunction("func_equipment_group_id", {
    code: codeEquipmentGroup,
    name: nameEquipmentGroup
  });
};



console.log(payloadData);
