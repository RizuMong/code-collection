var employeeCore = [
  {
    address: "1239090001_2",
    address_2: "1239090002_2",
    address_3: "1239090003_2",
    address_code: "SM166924/000",
    bank_account_branch: "BRANCH2",
    bank_account_holder_name: "satu2",
    bank_account_number: "7012390900012",
    bank_name: {
      id: "llZXdYwVg",
      name: "Bank CIMB Niaga",
    },
    city: {
      id: "anluG_oVg",
      name: "KOTA ADM. JAKARTA SELATAN",
    },
    company_id: 25236,
    company_user_id: 166924,
    country: {
      id: "FJWsggZ4R",
      name: "Indonesia",
    },
    created_at: 1704965727626,
    created_by: 166467,
    date_of_birth: 1704906000000,
    dibuat_oleh: "SUBANDI@mailinator.com",
    diedit_oleh: "SUBANDI@mailinator.com",
    email: "intgrasi.employee@mailinator.com",
    employee_code: "9090001",
    employee_id: "9090001",
    employee_status: "ACTIVE",
    employment_type: "PERMANENT",
    end_date: null,
    fax_number: "321432535_2",
    first_name: "integrasi 000",
    full_name: "integrasi 000 Satu 000",
    gender: "Male",
    grade_policy: {
      id: "",
      name: "",
    },
    id: "9KiDPqKSg",
    id_gfms: "",
    id_key: 259,
    id_master_employee: "9KiDPqKSg",
    identity_number: "1239090001",
    is_secretary_mode: false,
    join_date: 1704906000000,
    last_name: "Satu 000",
    marital_status: "MARRIED",
    non_employee_yoda: false,
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
    password: "",
    phone_number: "0919123921313001_2",
    photo: "",
    place_of_birth: "",
    position: {
      id: "",
      name: "",
    },
    post_code: 1239092212,
    salutation: "",
    secretary_mode_mapping_team: [],
    state: {
      id: "Wm8BP72Vg",
      name: "DKI JAKARTA",
    },
    tax_identification_number: "1239090001.000",
    updated_at: 1711941643324,
    updated_by: 157190,
    user_native: false,
  },
];

var employeeStaging = [
  {
    address: "CIMB Niaga",
    bank_account_holder_name: "SUMARYONO",
    bank_account_number: 125303000010,
    bank_branch_name: "BRANCH",
    bank_name: "PT Bank CIMB Niaga TBK",
    city: "",
    company_id: 25236,
    country: "",
    created_at: 1711353959784,
    created_by: 157190,
    date_of_birth: "1978-09-26",
    direct_supervisor_email: "sendmail-test-discard@oracle.com",
    direct_supervisor_employee_code: "3008499",
    direct_supervisor_name: "Liyana Abd Majid",
    direct_supervisor_position_name: "Office Support Head - HO & Branches",
    directorate: "Strategy, Finance & SPAPM ID",
    email: "sendmail-test-discard@oracle.com",
    employee_code: "3004174",
    employee_status: "Active",
    employment_type: "Permanent",
    end_date: 0,
    first_name: "WENING HAYU",
    flagging_process: "Ready to Compare",
    grade: "U10",
    id: "NF2xmj1Sg",
    identity_number: "",
    ids: "NF2xmj1Sg",
    last_name: "MAKARTI",
    marital_status: "Married",
    officebase_location: "Kantor Pusat - Griya Niaga 1",
    place_of_birth: "",
    position_code:
      "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
    position_layer: "D4",
    position_name:
      "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
    rc_code: "1611-47077-3008",
    state: "",
    sub_directorate: "Strategic Procurement & Admin Property Management ID",
    tax_identification_number: "",
    updated_at: 1711353959784,
    updated_by: 157190,
  },
];

var validateResultEmployee = [];

// ==== Validate Employee
employeeCore.forEach(function (each_data) {
  employeeStaging.forEach(function (each_staging) {
    // Kondisi Delete Data
    if (each_data.email === each_staging.email) {
      if (each_data.non_employee_yoda == true) {
        validateResultEmployee.push({
          email: each_data.email,
          ids: each_data.id_master_employee,
          identity_number: each_data.identity_number,
          employee_code: each_data.employee_code,
          bank_account_number: each_data.bank_account_number,
          status: "Don't Delete Data",
        });
      } else {
        validateResultEmployee.push({
          email: each_data.email,
          ids: each_data.id_master_employee,
          identity_number: each_data.identity_number,
          employee_code: each_data.employee_code,
          bank_account_number: each_data.bank_account_number,
          status: "Delete Data",
        });
      }
    }

    // Kondisi Create Data
    var foundInStaging = employeeStaging.some(function (stagingEmployee) {
      console.log({
        stagingEmployee: stagingEmployee.email,
        emailCore: each_data.email,
      });
      return stagingEmployee.email === each_data.email;
    });

    console.log({
      foundInStaging: foundInStaging,
    });

    if (!foundInStaging) {
      validateResultEmployee.push({
        email: each_data.email,
        ids: each_data.id_master_employee,
        identity_number: each_data.identity_number,
        employee_code: each_data.employee_code,
        bank_account_number: each_data.bank_account_number,
        status: "Create Data",
      });
    }
  });
});

console.log(validateResultEmployee);
