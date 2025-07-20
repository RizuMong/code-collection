var getEmployee = [
  {
    address: "",
    avatar: "https://talenta.oss-ap-southeast-5.aliyuncs.com/avatar/blank.jpg",
    barcode: "",
    birth_date: -102556800000,
    birth_place: "Madiun",
    blood_type: "",
    branch_id: {
      id: "74956",
      name: "KOMITE ANGGARAN AUDIT DAN AKTUARIA",
    },
    class: "23373",
    company_id: 27414,
    created_at: 1733115339000,
    created_by: 0,
    email: "kushari.suprianto@bpjsketenagakerjaan.go.id",
    employee_id: "120162166",
    employment_status: "Karyawan Kontrak",
    end_date: null,
    first_name: "Kushari Suprianto",
    gender: "Male",
    grade: "27054",
    id: "iPVuaWNNR",
    id_employee: "iPVuaWNNR",
    identity_number: "",
    identity_type: "KTP",
    job_position_id: "962747",
    join_date: 1710288000000,
    last_name: "",
    marital_status: "Single",
    mobile_phone: "",
    nationality_code: "",
    organization_id: {
      id: "341085",
      name: "KOMITE ANGGARAN AUDIT DAN AKTUARIA",
    },
    phone: "",
    postal_code: "",
    religion: "Islam",
    resign_date: null,
    sso_id: "",
    submit_resign_date: null,
    updated_at: 1735195719362,
    updated_by: 0,
    user_id: 3230292,
  },
  {
    address: "",
    avatar: "https://talenta.oss-ap-southeast-5.aliyuncs.com/avatar/blank.jpg",
    barcode: "",
    birth_date: -131932800000,
    birth_place: "BREBES",
    blood_type: "",
    branch_id: {
      id: "74956",
      name: "KOMITE ANGGARAN AUDIT DAN AKTUARIA",
    },
    class: "23373",
    company_id: 27414,
    created_at: 1733115339000,
    created_by: 0,
    email: "iman.nuril@bpjsketenagakerjaan.go.id1",
    employee_id: "120132165",
    employment_status: "Karyawan Kontrak",
    end_date: null,
    first_name: "Muhammad Iman Nuril",
    gender: "Male",
    grade: "27054",
    id: "UOX9-ZHNR",
    id_employee: "UOX9-ZHNR",
    identity_number: "",
    identity_type: "KTP",
    job_position_id: "962750",
    join_date: 1710288000000,
    last_name: "",
    marital_status: "Single",
    mobile_phone: "",
    nationality_code: "",
    organization_id: {
      id: "341085",
      name: "KOMITE ANGGARAN AUDIT DAN AKTUARIA",
    },
    phone: "",
    postal_code: "",
    religion: "Islam",
    resign_date: null,
    sso_id: "",
    submit_resign_date: null,
    updated_at: 1735195773272,
    updated_by: 0,
    user_id: 3230290,
  },
  {
    address: "",
    avatar: "https://talenta.oss-ap-southeast-5.aliyuncs.com/avatar/blank.jpg",
    barcode: "",
    birth_date: 631411200000,
    birth_place: "JAKARTA",
    blood_type: "",
    branch_id: {
      id: "74956",
      name: "KOMITE ANGGARAN AUDIT DAN AKTUARIA",
    },
    class: "23066",
    company_id: 27414,
    created_at: 1733115354000,
    created_by: 0,
    email: "rizka.komite@bpjsketenagakerjaan.go.id",
    employee_id: "211012390",
    employment_status: "Karyawan Kontrak",
    end_date: null,
    first_name: "Rizka Mukhlisa",
    gender: "Female",
    grade: "27036",
    id: "-mQe-ZNHR",
    id_employee: "-mQe-ZNHR",
    identity_number: "",
    identity_type: "KTP",
    job_position_id: "976152",
    join_date: 1704067200000,
    last_name: "",
    marital_status: "Single",
    mobile_phone: "",
    nationality_code: "",
    organization_id: {
      id: "341085",
      name: "KOMITE ANGGARAN AUDIT DAN AKTUARIA",
    },
    phone: "",
    postal_code: "",
    religion: "Islam",
    resign_date: null,
    sso_id: "",
    submit_resign_date: null,
    updated_at: 1735195869267,
    updated_by: 0,
    user_id: 3230673,
  },
  {
    address: "",
    avatar: "https://talenta.oss-ap-southeast-5.aliyuncs.com/avatar/blank.jpg",
    barcode: "",
    birth_date: 631152000000,
    birth_place: "JAKARTA",
    blood_type: "",
    branch_id: {
      id: "74956",
      name: "KOMITE ANGGARAN AUDIT DAN AKTUARIA",
    },
    class: "23066",
    company_id: 27414,
    created_at: 1733115354000,
    created_by: 0,
    email: "tedy.komite@bpjsketenagakerjaan.go.id",
    employee_id: "111012290",
    employment_status: "Karyawan Kontrak",
    end_date: null,
    first_name: "Tedy Herdyanto",
    gender: "Male",
    grade: "27036",
    id: "70tzfWNHg",
    id_employee: "70tzfWNHg",
    identity_number: "",
    identity_type: "KTP",
    job_position_id: "976152",
    join_date: 1704067200000,
    last_name: "",
    marital_status: "Single",
    mobile_phone: "",
    nationality_code: "",
    organization_id: {
      id: "341085",
      name: "KOMITE ANGGARAN AUDIT DAN AKTUARIA",
    },
    phone: "",
    postal_code: "",
    religion: "Islam",
    resign_date: null,
    sso_id: "",
    submit_resign_date: null,
    updated_at: 1735195922949,
    updated_by: 0,
    user_id: 3230672,
  },
];

var result = [];
var branchGroups = {};

// Group employees by branch
for (var i = 0; i < getEmployee.length; i++) {
  var emp = getEmployee[i];
  var branchName = emp.branch_id.name;

  if (!branchGroups[branchName]) {
    branchGroups[branchName] = {
      employees: [],
      positions: [],
    };
  }

  branchGroups[branchName].employees.push(emp);

  // Add position if not already exists
  if (branchGroups[branchName].positions.indexOf(emp.job_position_id) === -1) {
    branchGroups[branchName].positions.push(emp.job_position_id);
  }
}

// Transform branch groups into required format
for (var branch in branchGroups) {
  if (branchGroups.hasOwnProperty(branch)) {
    var branchData = branchGroups[branch];
    var personnel_in = 0;
    var personnel_out = 0;

    // Count in and out personnel
    for (var j = 0; j < branchData.employees.length; j++) {
      if (branchData.employees[j].resign_date === null) {
        personnel_in++;
      } else {
        personnel_out++;
      }
    }

    // Calculate gap
    var gap = personnel_in - personnel_out;
    var gapString = gap >= 0 ? "+" + gap : String(gap);

    // Create branch result object
    var branchResult = {
      branch: branch,
      job_position: branchData.employees[0]
        ? branchData.employees[0].job_position_id
        : "",
      personnel_in: personnel_in,
      personnel_out: personnel_out,
      gap_in_out: gapString,
      gap_mp: "0",
    };

    result.push(branchResult);
  }
}

console.log(result);
