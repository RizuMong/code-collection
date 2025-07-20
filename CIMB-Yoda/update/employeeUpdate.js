var getDataBeforeUpdate = {
  "address": "",
  "address_2": "",
  "address_3": "",
  "bank_account_branch": "BRANCH",
  "bank_account_holder_name": "New 3002",
  "bank_account_number": "7001503002",
  "bank_name": {
      "id": "12345",
      "name": "PT Bank CIMB Niaga TBK"
  },
  "city": "Jakarta Selatan",
  "company_id": 25236,
  "company_user_id": 173384,
  "country": "Indonesia",
  "created_at": 1730190438251,
  "created_by": 0,
  "date_of_birth": 0,
  "dibuat_oleh": "integrasi_yoda@mailinator.com",
  "diedit_oleh": "integrasi_yoda@mailinator.com",
  "directorate": "Strategy- Finance & SPAPM ID",
  "email": "testintegrasiuat.yoda3002@mailinator.com",
  "employee_code": "5013002",
  "employee_status": "ACTIVE",
  "employment_type": "PERMANENT",
  "first_name": "UATEMP Yoda",
  "full_name": "UATEMP Yoda Test3002",
  "gender": "Male",
  "grade": "U8",
  "id": "KXM222WHg",
  "id_key": 6638,
  "id_master_employee": "KXM222WHg",
  "identity_number": "5013002",
  "is_employee_yoda": true,
  "last_name": "Test3002",
  "marital_status": "MARRIED",
  "officebase_location": "Kantor Pusat - Synergy Buliding Alam Sutera 3002",
  "password": "12345",
  "place_of_birth": "Jakarta",
  "position": {
      "id": "KXM222WHg",
      "name": "5013002-position U8 - 3002"
  },
  "post_code": 0,
  "state": "DKI Jakarta",
  "tax_identification_number": "5013002",
  "updated_at": 1730279808109,
  "updated_by": 0
};

var detailEmployee = {
    "address": "",
    "address_2": "",
    "address_3": "",
    "bank_account_branch": "BRANCH",
    "bank_account_holder_name": "New 3002",
    "bank_account_number": "7001503002",
    "bank_name.id": "12345",
    "bank_name.name": "PT Bank CIMB Niaga TBK",
    "city": "Jakarta Selatan",
    "country": "Indonesia",
    "date_of_birth": 0,
    "dibuat_oleh": "integrasi_yoda@mailinator.com",
    "diedit_oleh": "integrasi_yoda@mailinator.com",
    "directorate": "Strategy- Finance & SPAPM ID",
    "employee_code": "5013002",
    "employee_status": "ACTIVE",
    "employment_type": "PERMANENT",
    "first_name": "UATEMP Yoda",
    "full_name": "UATEMP Yoda Test3002",
    "gender": "Male",
    "grade": "U8",
    "identity_number": "5013002",
    "last_name": "Test3002",
    "marital_status": "MARRIED",
    "officebase_location": "Kantor Pusat - Synergy Buliding Alam Sutera 3002",
    "place_of_birth": "Jakarta",
    "post_code": 0,
    "state": "DKI Jakarta",
    "tax_identification_number": "5013002",
    "updated_at": 1730290357547
}

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

var changes = findDifferences(getDataBeforeUpdate, detailEmployee, keysToCheck);

var listUpdate = '';

if (changes.length > 0) {
  var listUpdate = 'List Update:\n';

  for (var i = 0; i < changes.length; i++) {
      listUpdate += (i + 1) + '. ' + changes[i] + '\n';
  }
} else {
  listUpdate += 'Tidak ada perubahan data Employee';
};

console.log({
  detailEmployee: detailEmployee,
  listUpdate: listUpdate
});

if (listUpdate == "Tidak ada perubahan data Employee") {
  console.log("Tidak ada Update Data Apapun");
};