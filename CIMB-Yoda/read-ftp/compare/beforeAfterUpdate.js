var getDataBeforeUpdate = {
  "address": "CIMB Niaga",
  "address_2": "",
  "address_3": "",
  "address_code": "",
  "bank_account_branch": "BRANCH",
  "bank_account_holder_name": "Rizki",
  "bank_account_number": "6088122129",
  "bank_name": {
      "id": "12345",
      "name": "PT Bank CIMB Niaga TBK"
  },
  "city": {
      "id": "",
      "name": ""
  },
  "company_id": 25236,
  "company_user_id": 25236,
  "country": "Indonesia",
  "created_at": 1717497168484,
  "created_by": 166468,
  "date_of_birth": 1064854800000,
  "dibuat_oleh": "integrasi.yoda@mailinator.com",
  "diedit_oleh": "integrasi.yoda@mailinator.com",
  "directorate": "Finance & SPAPM ID",
  "email": "rizkuy12345@mailinator.com",
  "employee_code": "70001330",
  "employee_id": "",
  "employee_status": "ACTIVE",
  "employment_type": "PERMANENT",
  "end_date": null,
  "fax_number": "",
  "first_name": "Rizki Haddi",
  "full_name": "Rizki Haddi Prayoga",
  "gender": "Male",
  "grade": "U10",
  "grade_policy": {
      "id": "",
      "name": ""
  },
  "id": "G-D4nfyIg",
  "id_gfms": "",
  "id_key": 271,
  "id_master_employee": "G-D4nfyIg",
  "identity_number": "3175000125",
  "is_secretary_mode": false,
  "join_date": null,
  "last_name": "Prayoga",
  "marital_status": "MARRIED",
  "non_employee_yoda": false,
  "officebase_location": "Talavera Office Park",
  "pass_nationality": {
      "id": "",
      "name": ""
  },
  "passport_expired_date": null,
  "passport_issuing": {
      "id": "",
      "name": ""
  },
  "passport_issuing_date": null,
  "passport_number": "",
  "password": "sHBPyz7trFY`",
  "phone_number": "",
  "photo": "",
  "place_of_birth": "Bogor",
  "position": {
      "id": "",
      "name": ""
  },
  "post_code": 13720,
  "salutation": "",
  "secretary_mode_mapping_team": [],
  "state": "Jawa Barat",
  "sub_directorate": "Strategic Procurement & Admin Property Management ID",
  "tax_identification_number": "34002121211",
  "updated_at": 1717499692015,
  "updated_by": 166468
}

var updateEmployee = {
  "address": "CIMB Niaga",
  "automation_id": "TJkYN1bSg",
  "bank_account_branch": "BRANCH",
  "bank_account_holder_name": "Rizki Haddi",
  "bank_account_number": "6088122129",
  "bank_name": {
      "id": "12345",
      "name": "PT Bank CIMB Niaga TBK"
  },
  "company_id": 25236,
  "country": "Indonesia",
  "date_of_birth": 1064854800000,
  "dibuat_oleh": "integrasi.yoda@mailinator.com",
  "diedit_oleh": "integrasi.yoda@mailinator.com",
  "directorate": "Finance & SPAPM ID",
  "employee_code": "70001330",
  "employee_status": "ACTIVE",
  "employment_type": "PERMANENT",
  "first_name": "Rizki Haddi",
  "full_name": "Rizki Haddi Prayoga",
  "gender": "Male",
  "grade": "U10",
  "id_master_employee": "G-D4nfyIg",
  "identity_number": "3175000125",
  "last_name": "Prayoga",
  "marital_status": "MARRIED",
  "officebase_location": "Talavera Office Park",
  "place_of_birth": "Bogor",
  "post_code": 13720,
  "state": "Jawa Barat",
  "tax_identification_number": "34002121211",
  "updated_at": 1717499719649,
  "updated_by": 166468
}

// Buat kodingan untuk cek apa saja yang berbeda dari beforeUpdate ke afterUpdate untuk mendefine apa saja berubahaannya menggunakan js es5
// Output yang diharapkan:
/*

List Update:
1. Bank Account Holder Name : Rizki => Rizki 123
2. City : -- => Sukabumi
*/

function findDifferences(before, after, keysToCheck) {
  var differences = [];
  var ignoreKeys = ['automation_id', 'updated_at', 'created_at', 'created_by', 'updated_by', 'address_3', 'address_2', 'address_code', 'dibuat_oleh', 'diedit_oleh'];

  for (var key in before) {
    if (ignoreKeys.indexOf(key) !== -1) continue;
    if (keysToCheck.indexOf(key) === -1) continue;

    if (!after.hasOwnProperty(key)) continue;

    if (typeof before[key] === 'object' && before[key] !== null) {
      if (JSON.stringify(before[key]) !== JSON.stringify(after[key])) {
        if (before[key].name || (after[key] && after[key].name)) {
          differences.push(key.toUpperCase().replace(/_/g, ' ') + ' : ' + (before[key].name || '--') + ' => ' + ((after[key] && after[key].name) || '--'));
        } else if (before[key].id || (after[key] && after[key].id)) {
          differences.push(key.toUpperCase().replace(/_/g, ' ') + ' : ' + (before[key].id || '--') + ' => ' + ((after[key] && after[key].id) || '--'));
        }
      }
    } else if (before[key] !== after[key]) {
      differences.push(key.toUpperCase().replace(/_/g, ' ') + ' : ' + (before[key] || '--') + ' => ' + (after[key] || '--'));
    }
  }

  for (var key in after) {
    if (!before.hasOwnProperty(key) && ignoreKeys.indexOf(key) === -1 && keysToCheck.indexOf(key) !== -1) {
      if (after[key] !== null && after[key] !== undefined && after[key] !== '') {
        differences.push(key.toUpperCase().replace(/_/g, ' ') + ' : -- => ' + (after[key].name || after[key].id || after[key]));
      }
    }
  }

  return differences;
}

// Kolom Update Employee
var keysToCheck = [
  "full_name",
  "employee_status",
  "employment_type",
  "employee_code",
  "grade",
  "officebase_location",
  "directorate",
  "sub_directorate",
  "identity_number",
  "tax_identification_number",
  "date_of_birth",
  "city",
  "gender",
  "marital_status",
  "country",
  "state",
  "place_of_birth",
  "bank_account_number",
  "bank_account_holder_name",
  "bank_account_branch"
];

var changes = findDifferences(getDataBeforeUpdate, updateEmployee, keysToCheck);

var listUpdate = '';

if (changes.length > 0) {
  var listUpdate = 'List Update:\n';

  for (var i = 0; i < changes.length; i++) {
    listUpdate += (i + 1) + '. ' + changes[i] + '\n';
  }
} else {
  listUpdate += 'Tidak ada perubahan data Employee';
};


console.log(listUpdate);
