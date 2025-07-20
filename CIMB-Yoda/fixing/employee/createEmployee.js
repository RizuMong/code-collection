var payload = {
  address: "Kantor Pusat - Menara Sentraya 2",
  bank_account_holder_name: "PT Bank CIMB Niaga TBK",
  bank_account_number: 0,
  bank_branch_name: "BRANCH",
  bank_name: "7,00E+06",
  city: "Jakarta",
  company_id: 25236,
  country: "Indonesia",
  created_at: 1730693168521,
  created_by: 157190,
  date_of_birth: "1992-02-26",
  direct_supervisor_email: "r.ditaruna@mailinator.com",
  direct_supervisor_employee_code: "3030050",
  direct_supervisor_name: "R Satria Graha Ditaruna",
  direct_supervisor_position_name:
    "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2",
  directorate: "Strategy- Finance & SPAPM ID",
  email: "testintegrasiuat.yoda04112@mailinator.com",
  employee_code: "5012",
  employee_status: "Active",
  employment_type: "Permanent",
  filename: "CIMB_SMART_YODA_TESTING_20241104_CREATE2.csv",
  first_name: "UATEMP Yoda",
  flagging_process: "Ready to Validate",
  gender: "Male",
  grade: "U4",
  id: "v5N9pjWNg",
  identity_number: "5012",
  ids: "v5N9pjWNg",
  last_name: "Test2",
  marital_status: "Married",
  officebase_location: "Kantor Pusat - Menara Sentraya 2",
  place_of_birth: "Jakarta",
  position_code: "5012-position U4 - 2",
  position_layer: "D1",
  position_name: "CIMB Niaga",
  post_code: 0,
  rc_code: "1611-47077-3015",
  state: "DKI Jakarta",
  tax_identification_number: "5012",
  updated_at: 1730693168521,
  updated_by: 157190,
};

function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;></-=";
  var password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
};

function convertToTimestamp(dateStr) {
  var parts;

  // "YYYY-MM-DD"
  if (dateStr.indexOf('-') !== -1 && dateStr.split('-')[0].length === 4) {
    parts = dateStr.split('-');
    var year = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var day = parseInt(parts[2], 10);
  }
  // "DD-MM-YYYY"
  else if (dateStr.indexOf('-') !== -1 && dateStr.split('-')[2].length === 4) {
    parts = dateStr.split('-');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1;
    var year = parseInt(parts[2], 10);
  } else {
    return null; 
  }

  var date = new Date(year, month, day);
  return date.getTime();
}

var bankName = _hitFunction("func_get_bank_name_yoda", {
  id: payload.ids,
  data: payload.bank_name,
});

var squenceIDKey = _hitFunction("func_get_squence_id_key_yoda", {
  "type": "Employee",
});

// New
var city = _hitFunction("func_get_city_yoda", {
  id: payload.ids,
  data: payload.city,
});

var country = _hitFunction("func_get_country_yoda", {
  id: payload.ids,
  data: payload.country,
});

var state = _hitFunction("func_get_state_yoda", {
  id: payload.ids,
  data: payload.state,
});

// Nanti dinamis berdasarkan t_integration_company_setting
// var diEditOleh = getCompanySetting.encrypted_value;
// var diBuatOleh = getCompanySetting.encrypted_value;

var dateOfBirth = convertToTimestamp(payload.date_of_birth);

var urlNative = "https://gateway-uat.smart-cimb.com/v1/user/employee/create";

// Default 12345
var passwordEmployee = 12345;
var lastName = payload.last_name;

var payloadAPI = {
  email: payload.email,
  password: passwordEmployee,
  first_name: payload.first_name,
  last_name: payload.last_name,
  date_of_birth: payload.date_of_birth,
  user_role: 3
};

console.log(payloadAPI);
console.log(dateOfBirth);
// console.log(bankName);
