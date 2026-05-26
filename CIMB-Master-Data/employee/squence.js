function _log(msg) {
    console.log(msg);
};

var records = [
    {
        "address": "Kantor Fungsional Non Operasional - Pondok Indah Ic",
        "address_2": "on",
        "address_3": "",
        "address_code": "SM15979|000",
        "bank_account_branch": "BRANCH",
        "bank_account_holder_name": "JUZMA FAWWAZA ROSADI",
        "bank_account_number": "764134138400",
        "bank_name": {
            "id": "ODoOOciIg",
            "name": "Bank CIMB Niaga"
        },
        "city": {
            "id": "6T3J3atDgu",
            "name": "JAKARTA SELATAN"
        },
        "company_id": 25236,
        "company_user_id": 190308,
        "country": {
            "id": "FJWsggZ4R",
            "name": "Indonesia"
        },
        "created_at": 1775226596109,
        "created_by": 166889,
        "date_of_birth": 1043600400000,
        "dibuat_oleh": "integrasi_arjuna@cimbniaga.co.id",
        "diedit_oleh": "integrasi_arjuna@cimbniaga.co.id",
        "directorate": "Human Resources",
        "email": "juzma.rosadi@cimbniaga.co.id",
        "employee_code": "5601159",
        "employee_status": "ACTIVE",
        "employment_type": "DP",
        "first_name": "JUZMA FAWWAZA",
        "full_name": "JUZMA FAWWAZA ROSADI",
        "gender": "Male",
        "id": "t8-Hf5tDR",
        "id_gfms": "47622",
        "id_key": 15979,
        "id_master_employee": "t8-Hf5tDR",
        "identity_number": "3273282701030003",
        "is_employee_yoda": true,
        "last_name": "ROSADI",
        "marital_status": "SINGLE",
        "officebase_location": "Kantor Fungsional Non Operasional - Pondok Indah Icon",
        "password": "12345",
        "place_of_birth": "Kota Balikpapan",
        "position": {
            "id": "rJNlIctDg8",
            "name": "5601159-Trainee - CIPTA IT - Developer"
        },
        "post_code": 12310,
        "state": {
            "id": "Wm8BP72Vg",
            "name": "DKI JAKARTA"
        },
        "tax_identification_number": "3273282701030003",
        "updated_at": 1779382387110,
        "updated_by": 0
    }
];


var lastId = 0;

if (records.length > 0) {
    if (records[0].id_key != null || records[0].id_key != "") {
        lastId = records[0].id_key;
    }
};

newSequence = lastId + 1;

console.log(newSequence);