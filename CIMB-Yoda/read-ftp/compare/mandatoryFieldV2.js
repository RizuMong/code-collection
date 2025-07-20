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
}

var columnMappings = {
  "email_address": "Email Address",
  "employee_name": "Employee Name",
  "employee_status": "Employee Status",
  "nip": "NIP",
  "grade": "Grade",
  "directorate": "Directorate",
  "ktp": "KTP",
  "npwp": "NPWP",
  "date_of_birth": "Date of Birth",
  "town_of_birth": "Town Of Birth",
  "gender": "Gender",
  "marital_status": "Marital Status",
  "country": "Country",
  "provinsi": "Province",
  "town_or_city": "Town Or City",
  "bank_name": "Bank Name",
  "bank_account_number": "Bank Account Number",
  "bank_holder_name": "Bank Holder Name",
  "bank_branch_name": "Bank Branch Name",
  "position_name": "Position Name",
  "position_code": "Position Code",
  "org_level": "Org Level",
  "cost_center": "Cost Center",
  "ds_email": "Direct Supervisor Email",
  "ds_nip": "Direct Supervisor NIP",
  "ds_name": "Direct Supervisor Name",
  "ds_position_name": "Direct Supervisor Position Name"
};

getAllDataFile.forEach(function (each_data) {
  var fullName = each_data.employee_name;
  var nameParts = fullName.split(" ");
  var firstName = nameParts.slice(0, -1).join(" ");
  var lastName = nameParts.slice(-1).join(" ");

  var mandatoryFields = Object.keys(columnMappings);

  var missingFields = [];
  dataValid = true;

  mandatoryFields.forEach(function (field) {
    if (!checkDataNotEmpty(each_data, field)) {
      missingFields.push(columnMappings[field]);
      dataValid = false;
    }
  });

  // If Layer D0
  if (each_data.org_level == "D0") {
    var d0Fields = [
      "email", "employee_name", "employee_status", "employee_category", "nip", "grade", "directorate",
      "ktp", "npwp", "date_of_birth", "town_of_birth", "gender", "marital_status", "country",
      "provinsi", "town_or_city", "bank_name", "bank_account_number", "bank_holder_name", 
      "bank_branch_name", "position_name", "position_code", "org_level", "cost_center"
    ];

    d0Fields.forEach(function (field) {
      if (!checkDataNotEmpty(each_data, field)) {
        missingFields.push(columnMappings[field] || field);
        dataValid = false;
      }
    });
  }

  dataCreate.push({
    email: each_data.email_address,
    first_name: firstName,
    last_name: lastName,
    employee_status: each_data.employee_status,
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
    country: each_data.country,
    state: each_data.provinsi,
    city: each_data.town_or_city,
    post_code: each_data.position_code,
    address: "CIMB Niaga",
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
    notes: missingFields.length > 0 ? "Mandatory field needed: " + missingFields.join(", ") : ""
  });
});

if (dataCreate.length > 0) {
  dataCreate[dataCreate.length - 1].finalRecord = true;
};

console.log(dataCreate);
