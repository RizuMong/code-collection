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
  // date_of_birth: "1992-02-26",
  date_of_birth: "26-2-1990",
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

var dateOfBirth = convertToTimestamp(payload.date_of_birth);

console.log(dateOfBirth);