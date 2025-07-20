var payload = {
  data: {
    company_id: 25257,
    created_at: 1734536008360,
    created_by: 0,
    final_array: true,
    has_generate: false,
    id: "NYpPqoSNR1",
    ids: "NYpPqoSNR1",
    limit: 50,
    offset: 17700,
    updated_at: 1734536008360,
    updated_by: 0,
  },
  employee: {
    atasanNama: null,
    atasanNrp: null,
    atasanTitle: null,
    company: "PPA",
    currentGradeDuration: null,
    currentPosisiDuration: null,
    dateOfBirth: null,
    department: "DIR",
    division: "",
    effectiveCurrentGrade: null,
    effectiveCurrentPosition: null,
    email: null,
    equipmentGroup: null,
    gender: "Male",
    grade: null,
    hiringDate: "2010-01-01",
    job_code: null,
    jobsite: "HO",
    jobsiteType: "HO",
    level: "PRESIDENT DIRECTOR",
    name: "CHRISTIANTO",
    nrp: "10010001",
    phone: null,
    placeOfBirth: null,
    status: "Active",
    title: "PRESIDENT DIRECTOR",
    workDuration: 14.92,
  },
};

function _dateFormat(item) {
  var date = new Date(item);
  return date.getTime();
};

var payloadData = {
  nik: payload.employee.nrp,
  fullname: payload.employee.name,
  dob: _dateFormat(payload.employee.dateOfBirth) || null,
  pob: payload.employee.placeOfBirth || "",
  email: payload && payload.employee && payload.employee.email ? payload.employee.email.toLowerCase() : "",
  gender: payload.employee.gender || "",
  date_perubahan_jabatan_terakhir: _dateFormat(payload.employee.effectiveCurrentPosition) || null,
  date_perubahan_grade_terakhir: _dateFormat(payload.employee.effectiveCurrentGrade) || null,
  masa_current_jabatan: payload.employee.currentPosisiDuration || 0,
  masa_current_grade: payload.employee.currentGradeDuration || 0,
  masa_kerja: payload.employee.workDuration || null,
  status: payload.employee.status || "",
  mobile_phone: payload.employee.phone || "",
  hire_date: _dateFormat(payload.employee.hiringDate) || 0,
  type_employee: payload.employee.grade === "Staff" ? "Staff" : "Non-Staff",

  // Object
  tingkat_jabatan_id: {
      id: "",
      name: "",
  },
  jabatan_id: {
      id: "",
      name: "",
  },
  manager_id: {
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

console.log(payloadData);