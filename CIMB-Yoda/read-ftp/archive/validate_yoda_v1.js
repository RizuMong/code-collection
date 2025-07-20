// ====== Validasi Data Yoda =========
var dataCreate = [];
var dataValid = false;

function checkDataNotEmpty(data, columnName) {
    return (
        data[columnName] !== undefined &&
        data[columnName] !== null &&
        data[columnName] !== ""
    );
}

dataYoda.forEach(function (each_data) {
    var fullName = each_data.EmployeeName;
    var nameParts = fullName.split(" ");
    var firstName = nameParts.slice(0, -1).join(" ");
    var lastName = nameParts.slice(-1).join(" ");
    var RcCode = each_data.CostCenter.replace(/\./g, "-");

    // Validate Kolom Mandatory
    if (
        checkDataNotEmpty(each_data, "EmailAddress") &&
        checkDataNotEmpty(each_data, "EmployeeName") &&
        checkDataNotEmpty(each_data, "EmployeeStatus") &&
        checkDataNotEmpty(each_data, "Nip") &&
        checkDataNotEmpty(each_data, "Grade") &&
        checkDataNotEmpty(each_data, "Directorate") &&
        checkDataNotEmpty(each_data, "Ktp") &&
        checkDataNotEmpty(each_data, "Npwp") &&
        checkDataNotEmpty(each_data, "DateOfBirth") &&
        checkDataNotEmpty(each_data, "TownOfBirth") &&
        checkDataNotEmpty(each_data, "Gender") &&
        checkDataNotEmpty(each_data, "MaritialStatus") &&
        checkDataNotEmpty(each_data, "Country") &&
        checkDataNotEmpty(each_data, "Provinsi") &&
        checkDataNotEmpty(each_data, "TownOrCity") &&
        checkDataNotEmpty(each_data, "PostalCode") &&
        checkDataNotEmpty(each_data, "BankName") &&
        checkDataNotEmpty(each_data, "BankAccountNumber") &&
        checkDataNotEmpty(each_data, "BankHolderName") &&
        checkDataNotEmpty(each_data, "BankBranchName") &&
        checkDataNotEmpty(each_data, "PositionName") &&
        checkDataNotEmpty(each_data, "BankAccountNumber") &&
        checkDataNotEmpty(each_data, "PositionCode") &&
        checkDataNotEmpty(each_data, "OrgLevel") &&
        checkDataNotEmpty(each_data, "CostCenter") &&
        checkDataNotEmpty(each_data, "DsEmail") &&
        checkDataNotEmpty(each_data, "DsNip") &&
        checkDataNotEmpty(each_data, "DsName") &&
        checkDataNotEmpty(each_data, "DsPositionName")
    ) {
        dataValid = true;
    }

    dataCreate.push({
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
        data_valid: dataValid,
    });
});

_log(dataCreate);