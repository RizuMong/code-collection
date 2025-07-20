var getAllDataFile = [
  {
    "bank_account_number": "70015015098",
    "bank_branch_name": "BRANCH",
    "bank_holder_name": "New 15098",
    "bank_name": "PT Bank CIMB Niaga TBK",
    "company_id": 25236,
    "cost_center": "1611-47077-3005",
    "country": "",
    "created_at": 1720065758625,
    "created_by": 166467,
    "date_of_birth": "1998-08-26",
    "directorate": "Strategy- Finance & SPAPM ID",
    "ds_email": "integrasi.yoda500@mailinator.com",
    "ds_name": "User EMP Yoda Test500",
    "ds_nip": "5015010",
    "ds_position_name": "5015010-position U5 - 5010",
    "email_address": "testintegrasi.yoda15098@mailinator.com",
    "employee_category": "Permanent",
    "employee_name": "User EMP Yoda Test15098",
    "employee_status": "Active",
    "filename": "CIMB_SMART_YODA_202406260914.csv",
    "flagging_process": "Insert",
    "gender": "Male",
    "grade": "U8",
    "id": "zt2wERlSRz",
    "id_parent": "id-ly6qqjhv-e7gx--CIMB_SMART_YODA_202406260914.csv",
    "ids": "zt2wERlSRz",
    "ktp": "",
    "location": "Kantor Pusat - Synergy Buliding Alam Sutera 15098",
    "marital_status": "Married",
    "nip": "501150198",
    "npwp": "",
    "org_level": "D4",
    "position_code": "501150198-position U8 - 150198",
    "position_name": "501150198-position U8 - 150198",
    "postal_code": "",
    "provinsi": "",
    "subdirectorate": "Strategic Procurement & Admin Property Management ID",
    "termination_date": "",
    "town_of_birth": "",
    "town_or_city": "",
    "updated_at": 1720065758625,
    "updated_by": 166467
}
];

var dataValid = false;
var dataCreate = [];

function checkDataNotEmpty(data, columnName) {
  return (
      data[columnName] !== undefined &&
      data[columnName] !== null &&
      data[columnName] !== ""
  );
};

getAllDataFile.forEach(function (each_data) {
  var fullName = each_data.employee_name;
  var nameParts = fullName.split(" ");
  var firstName = nameParts.slice(0, -1).join(" ");
  var lastName = nameParts.slice(-1).join(" ");

  if (
      checkDataNotEmpty(each_data, "email_address") &&
      checkDataNotEmpty(each_data, "employee_name") &&
      checkDataNotEmpty(each_data, "employee_status") &&
      checkDataNotEmpty(each_data, "nip") &&
      checkDataNotEmpty(each_data, "grade") &&
      checkDataNotEmpty(each_data, "directorate") &&
      checkDataNotEmpty(each_data, "ktp") &&
      checkDataNotEmpty(each_data, "npwp") &&
      checkDataNotEmpty(each_data, "date_of_birth") &&
      checkDataNotEmpty(each_data, "town_of_birth") &&
      checkDataNotEmpty(each_data, "gender") &&
      checkDataNotEmpty(each_data, "marital_status") &&
      checkDataNotEmpty(each_data, "country") &&
      checkDataNotEmpty(each_data, "provinsi") &&
      checkDataNotEmpty(each_data, "town_or_city") &&
      checkDataNotEmpty(each_data, "postal_code") &&
      checkDataNotEmpty(each_data, "bank_name") &&
      checkDataNotEmpty(each_data, "bank_account_number") &&
      checkDataNotEmpty(each_data, "bank_holder_name") &&
      checkDataNotEmpty(each_data, "bank_branch_name") &&
      checkDataNotEmpty(each_data, "position_name") &&
      checkDataNotEmpty(each_data, "position_code") &&
      checkDataNotEmpty(each_data, "org_level") &&
      checkDataNotEmpty(each_data, "cost_center") &&
      checkDataNotEmpty(each_data, "ds_email") &&
      checkDataNotEmpty(each_data, "ds_nip") &&
      checkDataNotEmpty(each_data, "ds_name") &&
      checkDataNotEmpty(each_data, "ds_position_name")
  ) {
      dataValid = true;
  }

  // If Layer D0
  if (each_data.org_level == "D0") {
      if (checkDataNotEmpty(each_data, "email") &&
          checkDataNotEmpty(each_data, "employee_name") &&
          checkDataNotEmpty(each_data, "employee_status") &&
          checkDataNotEmpty(each_data, "employee_category") &&
          checkDataNotEmpty(each_data, "nip") &&
          checkDataNotEmpty(each_data, "grade") &&
          checkDataNotEmpty(each_data, "directorate") &&
          checkDataNotEmpty(each_data, "ktp") &&
          checkDataNotEmpty(each_data, "npwp") &&
          checkDataNotEmpty(each_data, "date_of_birth") &&
          checkDataNotEmpty(each_data, "town_of_birth") &&
          checkDataNotEmpty(each_data, "gender") &&
          checkDataNotEmpty(each_data, "marital_status") &&
          checkDataNotEmpty(each_data, "country") &&
          checkDataNotEmpty(each_data, "provinsi") &&
          checkDataNotEmpty(each_data, "town_or_city") &&
          checkDataNotEmpty(each_data, "postal_code") &&
          checkDataNotEmpty(each_data, "bank_name") &&
          checkDataNotEmpty(each_data, "bank_account_number") &&
          checkDataNotEmpty(each_data, "bank_holder_name") &&
          checkDataNotEmpty(each_data, "bank_branch_name") &&
          checkDataNotEmpty(each_data, "position_name") &&
          checkDataNotEmpty(each_data, "position_code") &&
          checkDataNotEmpty(each_data, "org_level") &&
          checkDataNotEmpty(each_data, "cost_center")) {
          dataValid = true;
      }
  }

  dataCreate.push({
      email: each_data.email_address,
      first_name: firstName,
      last_name: lastName,
      employee_status: each_data.employee_status,
      // end_date: 0, // Diisi oleh SMART
      employment_type: each_data.employee_category,
      employee_code: each_data.nip,
      grade: each_data.grade,
      officebase_location: each_data.location,
      directorate: each_data.directorate,
      sub_directorate: each_data.subdirectorate,
      identity_number: each_data.ktp,
      tax_identification_number: each_data.npwp,
      date_of_birth: each_data.date_of_birth,
      place_of_birth: each_data.town_of_birth,
      gender: each_data.gender,
      marital_status: each_data.marital_status,
      // phone_number: "", // Di input Manual Oleh User
      country: each_data.country,
      state: each_data.provinsi,
      city: each_data.town_or_city,
      post_code: each_data.position_code,
      address: "CIMB Niaga",
      // address_2: "", // Gak ada
      // address_3: "", // Gak ada,
      ids: each_data.ids,
      filename: each_data.filename,
      bank_name: "PT Bank CIMB Niaga TBK",
      bank_account_number: each_data.bank_account_number,
      bank_account_holder_name: each_data.bank_holder_name,
      bank_branch_name: "BRANCH",
      position_name: each_data.position_name,
      position_code: each_data.position_code,
      position_layer: each_data.org_level,
      rc_code: each_data.cost_center,
      direct_supervisor_email: each_data.ds_email,
      direct_supervisor_employee_code: each_data.ds_nip,
      direct_supervisor_name: each_data.ds_name,
      direct_supervisor_position_name: each_data.ds_position_name,
      data_valid: dataValid,
  });
});

if (dataCreate.length > 0) {
  dataCreate[dataCreate.length - 1].finalRecord = true;
};


console.log(dataCreate);