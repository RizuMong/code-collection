var dataYoda = [
  {
    EmailAddress: "sendmail-test-discard@oracle.com",
    EmployeeName: "WENING HAYU MAKARTI",
    EmployeeStatus: "",
    // TerminationDate: NULL,
    EmployeeCategory: "Permanent",
    Nip: "3004174",
    Grade: "U10",
    Location: "Kantor Pusat - Griya Niaga 1",
    Directorate: "Strategy, Finance & SPAPM ID",
    Subdirectorate: "Strategic Procurement & Admin Property Management ID",
    Ktp: "",
    Npwp: "",
    DateOfBirth: "1978-09-26",
    TownOfBirth: "",
    Gender: "Male",
    MaritialStatus: "Married",
    Country: "",
    Provinsi: "",
    TownOrCity: "",
    PostalCode: "",
    BankName: "PT Bank CIMB Niaga TBK",
    BankAccountNumber: 125303000010,
    BankHolderName: "SUMARYONO",
    BankBranchName: "BRANCH",
    PositionName:
      "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
    PositionCode:
      "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
    OrgLevel: "D4",
    CostCenter: "1611.47077.3008",
    DsEmail: "sendmail-test-discard@oracle.com",
    DsNip: "3008499",
    DsName: "Liyana Abd Majid",
    DsPositionName: "Office Support Head - HO & Branches",
  }
];

// ====== Validasi Data Yoda =========
var dataCSV = [];

dataYoda.forEach(function (each_data) {
  var fullName = each_data.EmployeeName;
  var nameParts = fullName.split(" ");
  var firstName = nameParts.slice(0, -1).join(" ");
  var lastName = nameParts.slice(-1).join(" ");
  var RcCode = each_data.CostCenter.replace(/\./g, "-");

  dataCSV.push({
    email: each_data.EmailAddress,
    fist_name: firstName,
    last_name: lastName,
    employee_status: each_data.EmployeeStatus,
    // end_date: 0, // Diisi oleh SMART
    employment_type: each_data.EmployeeCategory,
    employee_code: each_data.Nip,
    grade: each_data.Grade,
    officebase_location: each_data.Location,
    directorate: each_data.Directorate,
    sub_directorate: each_data.Subdirectorate,
    identity_number: each_data.Ktp,
    tax_identification_number: each_data.Npwp,
    date_of_birth: each_data.DateOfBirth,
    place_of_birth: each_data.TownOfBirth,
    gender: each_data.Gender,
    marital_status: each_data.MaritialStatus,
    // phone_number: "", // Di input Manual Oleh User
    country: each_data.Country,
    state: each_data.Provinsi,
    city: each_data.TownOrCity,
    post_code: each_data.PostalCode,
    address: "CIMB Niaga",
    // address_2: "", // Gak ada
    // address_3: "", // Gak ada
    bank_name: "PT Bank CIMB Niaga TBK",
    bank_account_number: each_data.BankAccountNumber,
    bank_account_holder_name: each_data.BankHolderName,
    bank_branch_name: "BRANCH",
    position_name: each_data.PositionName,
    position_code: each_data.PositionCode,
    position_layer: each_data.OrgLevel,
    rc_code: RcCode,
    direct_supervisor_email: each_data.DsEmail,
    direct_supervisor_employee_code: each_data.DsNip,
    direct_supervisor_name: each_data.DsName,
    direct_supervisor_position_name: each_data.DsPositionName,
  });
});

console.log(dataCSV);
