var getDataBeforeUpdate = {
  address: "CIMB Niaga",
  address_2: "",
  address_3: "",
  address_code: "",
  bank_account_branch: "BRANCH",
  bank_account_holder_name: "Andi",
  bank_account_number: "608812212998989",
  bank_name: {
    id: "12345",
    name: "PT Bank CIMB Niaga TBK",
  },
  city: {
    id: "",
    name: "",
  },
  company_id: 25236,
  company_user_id: 25236,
  country: {
    id: "",
    name: "",
  },
  created_at: 1716350394892,
  created_by: 166466,
  date_of_birth: -102754800000,
  dibuat_oleh: "integrasi.yoda@mailinator.com",
  diedit_oleh: "R.DITARUNA@mailinator.com",
  directorate: "Strategy, Finance & SPAPM ID",
  email: "tuwir@mailinator.com",
  employee_code: "700021",
  employee_id: "",
  employee_status: "ACTIVE",
  employment_type: "PERMANENT",
  end_date: null,
  fax_number: "",
  first_name: "Tuwire",
  full_name: "Tuwire Andia",
  gender: "Male",
  grade: "U10",
  grade_policy: {
    id: "",
    name: "",
  },
  id: "50J1e1ESR",
  id_gfms: "",
  id_key: null,
  id_master_employee: "50J1e1ESR",
  identity_number: "712121211121",
  is_secretary_mode: false,
  join_date: null,
  last_name: "Andia",
  marital_status: "MARRIED",
  non_employee_yoda: true,
  officebase_location: "Kantor Pusat - Griya Niaga 1",
  pass_nationality: {
    id: "",
    name: "",
  },
  passport_expired_date: null,
  passport_issuing: {
    id: "",
    name: "",
  },
  passport_issuing_date: null,
  passport_number: "",
  password: "1;6ML8fniAT)",
  phone_number: "",
  photo: "",
  place_of_birth: "Sukabumi",
  position: {
    id: "rntjzEwVg",
    name: "Budget Custody COAG 1",
  },
  post_code: 13720,
  salutation: "",
  secretary_mode_mapping_team: [],
  state: {
    id: "",
    name: "",
  },
  tax_identification_number: "7212121211",
  updated_at: 1716783844165,
  updated_by: 166466,
};

var updateEmployee = {
  address: "CIMB Niaga",
  automation_id: "TXOjy-ySg",
  bank_account_branch: "BRANCH",
  bank_account_holder_name: "Andi",
  bank_account_number: "6088122129",
  bank_name: {
    id: "12345",
    name: "PT Bank CIMB Niaga TBK",
  },
  company_id: 25236,
  country: "Indonesia",
  date_of_birth: -102754800000,
  dibuat_oleh: "integrasi.yoda@mailinator.com",
  diedit_oleh: "integrasi.yoda@mailinator.com",
  directorate: "Strategy, Finance & SPAPM ID",
  employee_code: "700021",
  employee_status: "ACTIVE",
  employment_type: "PERMANENT",
  first_name: "Tuwire",
  full_name: "Tuwire Andia",
  gender: "Male",
  grade: "U10",
  id_master_employee: "50J1e1ESR",
  identity_number: "712121211121",
  last_name: "Andia",
  marital_status: "MARRIED",
  officebase_location: "Kantor Pusat - Griya Niaga 1",
  place_of_birth: "Sukabumi",
  post_code: 13720,
  state: "DKI Jakarta",
  tax_identification_number: "7212121211",
  updated_at: 1717487449402,
  updated_by: 157190,
};

// List Before & After Update
function findDifferences(before, after) {
  var differences = [];

  for (var key in before) {
      if (before.hasOwnProperty(key) && after.hasOwnProperty(key)) {
          if (key === 'updated_at' || key === 'updated_by') {
              continue; // lewat 'updated_at'
          }
          if (typeof before[key] === 'object' && before[key] !== null && !Array.isArray(before[key])) {
              var nestedDifferences = findDifferences(before[key], after[key]);
              for (var i = 0; i < nestedDifferences.length; i++) {
                  differences.push(key + '.' + nestedDifferences[i]);
              }
          } else if (before[key] !== after[key]) {
              differences.push(key + ': "' + before[key] + '" => "' + after[key] + '"');
          }
      }
  }

  return differences;
};



var differences = findDifferences(getDataBeforeUpdate, updateEmployee);
var listUpdate = 'List Update Employee: \n' + differences.join(' \n');

console.log(listUpdate);

// kenapa ada error TypeError: Cannot access member 'hasOwnProperty' of undefined di kondingan tersebut
