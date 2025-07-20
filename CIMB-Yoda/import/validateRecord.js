var dataYoda = [
  {
    bank_account_number: 125303000010,
    bank_branch_name: "BRANCH",
    bank_holder_name: "SUMARYONO",
    bank_name: "PT Bank CIMB Niaga TBK",
    company_id: 25236,
    cost_center: "1.611.470.773.008",
    country: "",
    created_at: 1713774228185,
    created_by: 166467,
    date_of_birth: "26/09/1978",
    directorate: "Strategy, Finance & SPAPM ID",
    ds_email: "sendmail-test-discard@oracle.com",
    ds_name: "Liyana Abd Majid",
    ds_nip: "3008499",
    ds_position_name: "Office Support Head - HO & Branches",
    email: "r.ditaruna@cimbniaga.co.id",
    employee_category: "Permanent",
    employee_name: "R Satria Graha",
    employee_status: "Active",
    filename: "CIMB_SMART_CORE_20230206115123",
    gender: "Male",
    grade: "U10",
    id: "MYns47BSg",
    ids: "MYns47BSg",
    import_id: "Of7s47fIg",
    ktp: "",
    location: "Kantor Pusat - Griya Niaga 1",
    marital_status: "Married",
    nip: 3004174,
    npwp: "",
    org_level: "D4",
    position_code:
      "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
    position_name:
      "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
    postal_code: "",
    provinsi: "",
    status_process: "pending",
    sub_directorate: "Strategic Procurement & Admin Property Management ID",
    termination_date: 0,
    town_of_birth: "",
    town_or_city: "",
    updated_at: 1713774228185,
    updated_by: 166467,
  },
];

// ======= Function ========
function checkDataNotEmpty(data, columnName) {
  return data[columnName] !== undefined && data[columnName] !== "";
}

var dataStaging = [];

dataYoda.forEach(function (each_data) {
  var dataValid = false;
  var fullName = each_data.employee_name;
  var nameParts = fullName.split(" ");
  var firstName = nameParts.slice(0, -1).join(" ");
  var lastName = nameParts.slice(-1).join(" ");
  var RcCode = each_data.cost_center.replace(/\./g, "-");

  // Validate Kolom Mandatory
  if (
    checkDataNotEmpty(each_data, "email") &&
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
    checkDataNotEmpty(each_data, "cost_center") &&
    checkDataNotEmpty(each_data, "ds_email") &&
    checkDataNotEmpty(each_data, "ds_nip") &&
    checkDataNotEmpty(each_data, "ds_name") &&
    checkDataNotEmpty(each_data, "ds_position_name")
  ) {
    dataValid = true;
  }

  dataStaging.push({
    email: each_data.email,
    first_name: firstName,
    last_name: lastName,
    employee_status: each_data.employee_status,
    // end_date: 0, // Diisi oleh SMART
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
    // phone_number: "", // Di input Manual Oleh User
    country: each_data.country,
    state: each_data.provinsi,
    city: each_data.city,
    post_code: each_data.postal_code,
    address: "CIMB Niaga",
    // address_2: "", // Gak ada
    // address_3: "", // Gak ada
    bank_name: "PT Bank CIMB Niaga TBK",
    bank_account_number: each_data.bank_account_number,
    bank_account_holder_name: each_data.bank_holder_name,
    bank_branch_name: "BRANCH",
    position_name: each_data.position_name,
    position_code: each_data.position_code,
    position_layer: each_data.org_level,
    rc_code: RcCode,
    direct_supervisor_email: each_data.ds_email,
    direct_supervisor_employee_code: each_data.ds_nip,
    direct_supervisor_name: each_data.ds_name,
    direct_supervisor_position_name: each_data.ds_position_name,
    data_valid: dataValid,
  });
});

console.log(dataStaging);
