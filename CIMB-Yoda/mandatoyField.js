var getAllDataFile = [
  {
      "bank_account_number": "9.80E+11",
      "bank_branch_name": "BRANCH",
      "bank_holder_name": "Kiss ",
      "bank_name": "PT Bank CIMB Niaga TBK",
      "company_id": 25236,
      "cost_center": "1-611-470-773-009",
      "country": "Indonesia",
      "created_at": 1722224923998,
      "created_by": 0,
      "date_of_birth": "01/10/66",
      "directorate": "Strategy, Finance & SPAPM ID",
      "ds_email": "",
      "ds_name": "",
      "ds_nip": "",
      "ds_position_name": "",
      "email_address": "kissbyglow@mailinator.com",
      "employee_category": "Permanent",
      "employee_name": "Kiss by Glow ",
      "employee_status": "Active",
      "filename": "CIMB_SMART_YODA_202407251514.csv",
      "flagging_process": "Insert",
      "gender": "Female",
      "grade": "U11",
      "id": "qd3Ckz9Sgz",
      "id_parent": "id-lz6g945t-bulo--CIMB_SMART_YODA_202407251514.csv",
      "ids": "qd3Ckz9Sgz",
      "ktp": "2340000002",
      "location": "Kantor Pusat - Griya Niaga 2",
      "marital_status": "Single",
      "nip": "870002",
      "npwp": "24300000002",
      "org_level": "D0",
      "position_code": "870002-Head of PM",
      "position_name": "870002-Head of PM",
      "postal_code": "13721",
      "provinsi": "DKI Jakarta",
      "sub_directorate": "Strategic Procurement & Admin Property Management ID",
      "termination_date": "1",
      "town_of_birth": "Sukabumi",
      "town_or_city": "Jakarta Timur",
      "updated_at": 1722224923998,
      "updated_by": 0
  },
  {
    "bank_account_number": "9.80E+11",
    "bank_branch_name": "BRANCH",
    "bank_holder_name": "Coconi",
    "bank_name": "PT Bank CIMB Niaga TBK",
    "company_id": 25236,
    "cost_center": "1-611-470-773-011",
    "country": "Indonesia",
    "created_at": 1722224923998,
    "created_by": 0,
    "date_of_birth": "03/10/66",
    "directorate": "Strategy, Finance & SPAPM ID",
    "ds_email": "R.ditaruna@mailinator.com",
    "ds_name": "R Satria Graha Ditaruna Ditaruna",
    "ds_nip": "870003",
    "ds_position_name": "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2",
    "email_address": "coconi@mailinator.com",
    "employee_category": "Permanent",
    "employee_name": "Coconi Bath",
    "employee_status": "Active",
    "filename": "CIMB_SMART_YODA_202407251514.csv",
    "flagging_process": "Insert",
    "gender": "Male",
    "grade": "U13",
    "id": "qd3CzzrIRZ",
    "id_parent": "id-lz6g945v-c8zc--CIMB_SMART_YODA_202407251514.csv",
    "ids": "qd3CzzrIRZ",
    "ktp": "2340000004",
    "location": "Kantor Pusat - Griya Niaga 4",
    "marital_status": "Married",
    "nip": "870004",
    "npwp": "24300000004",
    "org_level": "D3",
    "position_code": "870004-ERP",
    "position_name": "870004-ERP",
    "postal_code": "13723",
    "provinsi": "DKI Jakarta",
    "sub_directorate": "Strategic Procurement & Admin Property Management ID",
    "termination_date": "3",
    "town_of_birth": "Sukabumi",
    "town_or_city": "Jakarta Timur",
    "updated_at": 1722224923998,
    "updated_by": 0
  }
]

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
      if (each_data.org_level !== "D0" || (
          each_data.org_level === "D0" &&
          !["ds_email", "ds_nip", "ds_name", "ds_position_name"].includes(field)
      )) {
          if (!checkDataNotEmpty(each_data, field)) {
              missingFields.push(columnMappings[field]);
              dataValid = false;
          }
      }
  });

  // If Layer D0
  if (each_data.org_level == "D0") {
      var d0Fields = [
          "email_address", "employee_name", "employee_status", "employee_category", "nip", "grade", "directorate",
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
      sub_directorate: each_data.sub_directorate,
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
}

console.log(dataCreate);