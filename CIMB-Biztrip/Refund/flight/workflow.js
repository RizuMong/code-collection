function _log(message) {
  console.log(message);
}

var parentMasterPosition = {
  code: "Payment & Accounting Support Head",
  company_id: 25236,
  core_flow_id: 4369,
  created_at: 1685430165096,
  created_by: 166448,
  dibuat_oleh: "cimbsmartoosuat@mailnator.com",
  diedit_oleh: "SUBANDI@mailinator.com",
  division: {
    id: "vk96dYQ4R",
    name: "COAG - 1611-47077-3005",
  },
  division_code: "1611-47077-3005",
  employee_email: {
    id: "6RFrp8Q4g",
    name: "R.DITARUNA@mailinator.com",
  },
  // employee_email_temp: {
  //   id: "MA6Iu4nHR",
  //   name: "testing.cimb@mailinator.com",
  // },
  employee_email_temp: {
    id: "",
    name: "",
  },
  employee_name: "R Satria Graha Ditaruna Ditaruna",
  end_date: 1735664400000,
  flag_temp: false,
  id: "CbRyT8QVRz",
  id_master_position: "CbRyT8QVRz",
  is_position_yoda: false,
  layer: {
    id: "2MyjOLQVR",
    name: "D-3",
  },
  layer_new: {
    id: "2MyjOLQVR",
    name: "D-3",
  },
  layer_old: {
    id: "2MyjOLQVR",
    name: "D-3",
  },
  name: "Payment & Accounting Support Head",
  old_employee_email: {
    id: "6RFrp8Q4g",
    name: "R.DITARUNA@mailinator.com",
  },
  old_parent: {
    id: "dKmJT8wVg",
    name: "COAG Head - COAG Head",
  },
  organigram_id: 30586,
  parent_position: {
    id: "dKmJT8wVg",
    name: "COAG Head",
  },
  start_date: 1735491600000,
  updated_at: 1735636749788,
  updated_by: 166467,
};

var requestorPositionId = {
  code: "Business Support & Internal Control Specialist - 2",
  company_id: 25236,
  core_flow_id: 4389,
  created_at: 1685432082131,
  created_by: 166448,
  dibuat_oleh: "cimbsmartoosuat@mailnator.com",
  diedit_oleh: "SUBANDI@mailinator.com",
  division: {
    id: "pgVgFYQVg",
    name: "FSAC - 1611-47077-3013",
  },
  division_code: "1611-47077-3013",
  employee_email: {
    id: "OUjjpUQ4R",
    name: "SUBANDI@mailinator.com",
  },
  employee_email_temp: {
    id: "",
    name: "",
  },
  employee_name: "Subandi Subandi",
  end_date: null,
  flag_temp: false,
  id: "IPA1J8QVR",
  id_master_position: "IPA1J8QVR",
  is_position_yoda: false,
  layer: {
    id: "oaJCdLQ4g",
    name: "D-4",
  },
  layer_new: {
    id: "oaJCdLQ4g",
    name: "D-4",
  },
  layer_old: {
    id: "oaJCdLQ4g",
    name: "D-4",
  },
  name: "Business Support & Internal Control Specialist - 2",
  old_employee_email: {
    id: "OUjjpUQ4R",
    name: "SUBANDI@mailinator.com",
  },
  old_parent: {
    id: "YWKXTUQVg",
    name: "System Reconciliation Head - System Reconciliation Head",
  },
  organigram_id: 30611,
  parent_position: {
    id: "CbRyT8QVRz",
    name: "Payment & Accounting Support Head",
  },
  start_date: null,
  updated_at: 1735616119313,
  updated_by: 166467,
};

var listAmountPolicy = [
  {
    company_id: 25236,
  },
];

var pushParent = true;

var tanggalSekarang = new Date();
var currentDate = tanggalSekarang.getTime();

if (listAmountPolicy.length > 0) {
  var sameEmail = false;
  var useTemporaryPosition = false;

  if (pushParent == true) {
    if (
      !!parentMasterPosition.employee_email_temp &&
      !!parentMasterPosition.employee_email_temp.name
    ) {
      _log("ada temporary");
      if (
        parentMasterPosition.employee_email_temp.name.toLowerCase() ==
          requestorPositionId.employee_email.name.toLowerCase() &&
        (!parentMasterPosition.start_date ||
          parentMasterPosition.start_date < currentDate) &&
        (!parentMasterPosition.end_date ||
          currentDate < parentMasterPosition.end_date)
      ) {
        _log("temporary masuk");
        sameEmail = true;
      } else if (
        requestorPositionId.employee_email.name.toLowerCase() ==
        parentMasterPosition.employee_email.name.toLowerCase()
      ) {
        _log("email sama ada temporary");
        sameEmail = true;
      }
    } else if (
      requestorPositionId.employee_email.name.toLowerCase() ==
      parentMasterPosition.employee_email.name.toLowerCase()
    ) {
      _log("email sama");
      sameEmail = true;
    }

    // Case Temporary
    if (
      !!parentMasterPosition.employee_email_temp &&
      !!parentMasterPosition.employee_email_temp.name
    ) {
      if (
        (!parentMasterPosition.start_date ||
          parentMasterPosition.start_date < currentDate) &&
        (!parentMasterPosition.end_date ||
          currentDate < parentMasterPosition.end_date)
      ) {
        _log("Masuk Case Temporary");
        useTemporaryPosition = true;

        // var getPositionTemporary = _hitFunction("func_get_position_temporary", parentMasterPosition);
        // flowDirectSupervisorList.push(getPositionTemporary)
      }
    }

    _log(useTemporaryPosition);

    if (!sameEmail && !useTemporaryPosition) {
      _log("masuk approval");
      // flowDirectSupervisorList.push(parentMasterPosition.core_flow_id);
    }
  }
}
