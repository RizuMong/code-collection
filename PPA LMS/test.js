var getDetailEmployee = {
  business_unit_id: {
    id: "inY01s4Ng",
    name: "PPA",
  },
  company_id: 25257,
  created_at: 1734319326979,
  created_by: 0,
  date_perubahan_grade_terakhir: null,
  date_perubahan_jabatan_terakhir: null,
  default_position_id: 43325,
  department_id: {
    id: "K1T1Jy4Ng",
    name: "PRODUCTION",
  },
  department_id_text: "K1T1Jy4Ng",
  digital_signature:
    "https://lms-dev-public-bucket.s3.ap-southeast-3.amazonaws.com/25257/675fabd4b634f-TTD.png",
  division_id: {
    id: "89V1Js4NR",
    name: "OPERATION",
  },
  dob: 106938000000,
  email: "HERRYPURWOTO@GMAIL.COM",
  equipment_group_id: {
    id: "b1OmbvSNR",
    name: "6 - PRO",
  },
  fullname: "MUNARI WIDODO",
  gender: "Male",
  grade_id: {
    id: "P_EzeyVHg",
    name: "1D",
  },
  grade_id_text: "P_EzeyVHg",
  hire_date: 1362589200000,
  id: "ZU_z0DSNg",
  id_employee: "ZU_z0DSNg",
  jabatan_id: {
    id: "0Z2tmDSNg",
    name: "OPERATOR HD785",
  },
  jabatan_id_text: "0Z2tmDSNg",
  jobsite_id: {
    id: "SIuAJyVNg",
    name: "BA",
  },
  jobsite_id_text: "SIuAJyVNg",
  manager_id: {
    id: "vvzfYeVHR",
    name: "John Doe",
  },
  masa_current_grade: 0,
  masa_current_jabatan: 0,
  masa_kerja: 11.75,
  mobile_phone: "081330362332",
  nik: "13030404",
  orrganigram_id: 43326,
  pob: "MALANG",
  role_id: {},
  status: "",
  tingkat_jabatan_id: {
    id: "f2b9ODINR",
    name: "OPERATOR DUMP TRUCK",
  },
  type_employee: "NON-STAFF",
  updated_at: 1734343681850,
  updated_by: 175332,
  user_company_id: 180562,
};

var currentDate = new Date();
var hireDate = new Date(getDetailEmployee.hire_date);

var monthsDifference =
  (currentDate.getFullYear() - hireDate.getFullYear()) * 12 +
  (currentDate.getMonth() - hireDate.getMonth());

if (monthsDifference > 6) {
  console.log("Issue: More than 6 months since hire date.");
} else {
  console.log("No issue: Less than or equal to 6 months since hire date.");
};
