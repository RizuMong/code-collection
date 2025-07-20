var getData = [
  {
    address: "CIMB Niaga",
    bank_account_holder_name: "Penelope",
    bank_account_number: 980000000000,
    bank_branch_name: "BRANCH",
    bank_name: "PT Bank CIMB Niaga TBK",
    city: "Jakarta Timur",
    company_id: 25236,
    country: "Indonesia",
    created_at: 1722919464291,
    created_by: 166467,
    date_of_birth: "30/09/66",
    direct_supervisor_email: "kissbyglow@mailinator.com",
    direct_supervisor_employee_code: "870002",
    direct_supervisor_name: "Kiss by Glow",
    direct_supervisor_position_name: "870002-Head of PM",
    directorate: "Strategy, Finance & SPAPM ID",
    employee_code: "870001",
    employee_email: "penelope@mailinator.com",
    employee_status: "Active",
    employment_type: "",
    filename: "CIMB_SMART_YODA_202407251514.csv",
    first_name: "",
    gender: "",
    grade: "U10",
    id: "ZFBD8L9Ig",
    id_log_response_yoda: "ZFBD8L9Ig",
    identity_number: "2340000001",
    last_name: "Lope",
    marital_status: "Single",
    nama_file: "CIMB_SMART_YODA_202407251514.csv",
    officebase_location: "Kantor Pusat - Griya Niaga 1",
    place_of_birth: "Sukabumi",
    position_code: "870001-PM",
    position_layer: "D1",
    position_name: "870001-PM",
    post_code: "870001-PM",
    process: "Reactive Employee",
    rc_code: "1-611-470-773-008",
    state: "DKI Jakarta",
    status: "Success",
    tax_identification_number: "",
    tipe_response: "Employee",
    updated_at: 1722919531795,
    updated_by: 166467,
  },
  {
    address: "CIMB Niaga",
    bank_account_holder_name: "Penelope",
    bank_account_number: 980000000000,
    bank_branch_name: "BRANCH",
    bank_name: "PT Bank CIMB Niaga TBK",
    city: "Jakarta Timur",
    company_id: 25236,
    country: "Indonesia",
    created_at: 1722919464291,
    created_by: 166467,
    date_of_birth: "30/09/66",
    direct_supervisor_email: "kissbyglow@mailinator.com",
    direct_supervisor_employee_code: "870002",
    direct_supervisor_name: "Kiss by Glow",
    direct_supervisor_position_name: "870002-Head of PM",
    directorate: "Strategy, Finance & SPAPM ID",
    employee_code: "870001",
    employee_email: "penelope@mailinator.com",
    employee_status: "Active",
    employment_type: "Permanent",
    filename: "CIMB_SMART_YODA_202407251514.csv",
    first_name: "Pene",
    gender: "Female",
    grade: "U10",
    id: "ZFBD8L9Ig",
    id_log_response_yoda: "ZFBD8L9Ig",
    identity_number: "2340000001",
    last_name: "Lope",
    marital_status: "Single",
    nama_file: "CIMB_SMART_YODA_202407251514.csv",
    officebase_location: "Kantor Pusat - Griya Niaga 1",
    place_of_birth: "Sukabumi",
    position_code: "870001-PM",
    position_layer: "D1",
    position_name: "870001-PM",
    post_code: "870001-PM",
    process: "Reactive Employee",
    rc_code: "1-611-470-773-008",
    state: "DKI Jakarta",
    status: "Success",
    tax_identification_number: "24300000001",
    tipe_response: "Employee",
    updated_at: 1722919531795,
    updated_by: 166467,
  }
];

function removeDuplicatesByEmail(data) {
  var emailMap = {};
  var uniqueData = [];
  
  for (var i = 0; i < data.length; i++) {
    var email = data[i].employee_email;
    if (!emailMap[email]) {
      emailMap[email] = true;
      uniqueData.push(data[i]);
    }
  }
  
  return uniqueData;
}

var uniqueData = removeDuplicatesByEmail(getData);
console.log(uniqueData);
