  var employeeFound= {
    "business_unit_id": {
        "id": "4pCIELHNR",
        "name": "AMM"
    },
    "company_id": 25257,
    "created_at": 1739440070496,
    "created_by": 0,
    "date_perubahan_grade_terakhir": null,
    "date_perubahan_jabatan_terakhir": 1725148800000,
    "default_position_id": 407701,
    "department_id": {
        "id": "709f247b-91d4-11ef-bca4-000c290605f0",
        "name": "PRODUCTION"
    },
    "department_id_text": "709f247b-91d4-11ef-bca4-000c290605f0",
    "division_id": {
        "id": "aef04e39-91d3-11ef-bca4-000c290605f0",
        "name": "PRODUCTION"
    },
    "dob": 573523200000,
    "email": "isnainisetyo.marsito@gmail.com",
    "equipment_group_id": {
        "id": "lTc516VNg",
        "name": "EG4 - PRO"
    },
    "fullname": "ISNAINI SETYO MARSITO",
    "gender": "Male",
    "grade_id": {
        "id": "2ApNEYNHg",
        "name": "1C"
    },
    "grade_id_text": "2ApNEYNHg",
    "hire_date": 1693267200000,
    "id": "RuAxWi5NR",
    "id_employee": "RuAxWi5NR",
    "jabatan_id": {
        "id": "twpJRi5HR",
        "name": "OPERATOR DM 245"
    },
    "jabatan_id_text": "twpJRi5HR",
    "jobsite_id": {
        "id": "fQNMMc5HR",
        "name": "ABP"
    },
    "jobsite_id_text": "fQNMMc5HR",
    "manager_id": {
        "id": "",
        "name": ""
    },
    "masa_current_grade": 0,
    "masa_current_jabatan": 0.5,
    "masa_kerja": 1.58,
    "mobile_phone": "082134169192",
    "nik": "23002994",
    "orrganigram_id": 407701,
    "pob": " SRAGEN",
    "status": "Active",
    "tingkat_jabatan_id": {
        "id": "99771f6b-91d0-11ef-bca4-000c290605f0",
        "name": "OPERATOR"
    },
    "type_employee": "Non-Staff",
    "updated_at": 1741161050255,
    "updated_by": 0,
    "user_company_id": 193347
  };

  // try {
  //   var user = _user
  // }
  // catch (err) {
  //   callError("Token not Valid")
  // }

  var req = {
    "body": {
        "employee_id": {
            "id": "RuAxWi5NR",
            "name": "23002994"
        },
        "flow_status": "draft",
        "id_training_participant": "hU9ObspHR",
        "mds_id": {
            "id": "9Rdm1stNg",
            "name": "TRN36-ABP-HCG-032025"
        },
        "page_id": 38526
    }}

  var list_must_number = ["created_by", "page_id"]
  var list_must_obj = ["jobsite_id", "department_id"]

  for (i in list_must_number) {
    if (!(req[list_must_number[i]] && _.isNumber(req[list_must_number[i]]))) {
        callError("Parameter Not Valid - " + i)
    }
  }

  for (i in list_must_obj) {
    if (!(req[list_must_obj[i]] && _.isObject(req[list_must_obj[i]]))) {
        callError("Parameter Not Valid - " + i)
    }
  }

  function _log(msg) {
    console.log(msg);
  }


  function callError(message) {
    res = {
        "error": true,
        "message": message
    }
    _log("ERROR: ", message)
    _log(message)
    _log(res)
    // _stopAutomation()
  }