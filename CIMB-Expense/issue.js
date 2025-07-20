var payload = {
  "data": {
      "company_id": 27414,
      "created_at": 1735193384104,
      "created_by": 0,
      "has_generate": false,
      "id": "Nn3-JWNNgH",
      "ids": "Nn3-JWNNgH",
      "limit": 1,
      "page": 102,
      "updated_at": 1735193384104,
      "updated_by": 0
  },
  "employee": {
      "address": "",
      "avatar": "https://talenta.oss-ap-southeast-5.aliyuncs.com/avatar/blank.jpg",
      "barcode": "",
      "birth_date": "1976-12-04",
      "birth_place": "Pontianak",
      "blood_type": "",
      "branch": "KCP TRENGGALEK SOEKARNO HATTA",
      "branch_id": 74762,
      "class": "23270",
      "company_id": 37428,
      "created_at": "2024-12-02 01:25:45",
      "email": "adhie.wibowo@bpjsketenagakerjaan.go.id",
      "employee_id": "136180276",
      "employment_status": "Karyawan Tetap",
      "end_date": "",
      "final_record": true,
      "first_name": "Adhie Wibowo",
      "gender": "Male",
      "grade": "27048",
      "identity_number": "6171060412760001",
      "identity_type": "KTP",
      "job_position_id": 973146,
      "join_date": "2002-04-01",
      "last_name": "",
      "marital_status": "Married",
      "mobile_phone": "6281254609309",
      "nationality_code": "",
      "organization_id": 341294,
      "organization_name": "KCP TRENGGALEK SOEKARNO HATTA",
      "phone": "82225141721",
      "postal_code": "65143",
      "religion": "Islam",
      "resign_date": "",
      "role_name": "Employee",
      "sso_id": "",
      "submit_resign_date": "",
      "updated_at": "2024-12-10 16:26:36",
      "user_id": 3225667
  }
}

function _dateFormat(item) {
  var date = new Date(item);
  return date.getTime();
};

function _dateFormatISO(item) {
  if (!item) return null;
  var formattedItem = item.replace(' ', 'T');
  var date = new Date(formattedItem);
  if (isNaN(date.getTime())) {
    return null;
  }
  return date.getTime();
}


var payloadData = {
  "created_at": _dateFormatISO(payload.employee.created_at) || null,
  "updated_at": _dateFormatISO(payload.employee.updated_at) || null,
};

console.log(payloadData);
