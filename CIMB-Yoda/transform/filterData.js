var validateStage = [
  {
    bank_account_number: 321312321312,
    company_id: 25236,
    created_at: 1722225007272,
    created_by: 0,
    email: "Ratna.DwiSetiyowati@mailinator.com",
    employee_code: "32167",
    filename: "CIMB_SMART_YODA_202407251514.csv",
    flagging_process: "Ready to Process",
    id: "NYTgizrSg",
    identity_number: "36098462921142",
    ids: "NYTgizrSg",
    stage_status: "Delete Employee",
    updated_at: 1722225007272,
    updated_by: 0,
  },

  {
    bank_account_number: 980000000000,
    company_id: 25236,
    created_at: 1722225006532,
    created_by: 0,
    email: "motherofeart@mailinator.com",
    employee_code: "870003",
    flagging_process: "Ready to Process",
    id: "MqhRmzrIR",
    id_parent: "GhZB3RrIR",
    identity_number: "2340000003",
    ids: "MqhRmzrIR",
    stage_status: "Create Employee",
    staging_employee_id: "GhZB3RrIR",
    updated_at: 1722225006532,
    updated_by: 0,
  },

  {
    bank_account_number: 980000000000,
    company_id: 25236,
    created_at: 1722225006431,
    created_by: 0,
    email: "motherofeart@mailinator.com",
    employee_code: "870003",
    flagging_process: "Ready to Process",
    id: "3_hRik9SR",
    id_parent: "KFhSzkrIg",
    identity_number: "2340000003",
    ids: "3_hRik9SR",
    stage_status: "Create Employee",
    staging_employee_id: "GhZB3RrIR",
    updated_at: 1722225006431,
    updated_by: 0,
  },
  {
    bank_account_number: 980000000000,
    company_id: 25236,
    created_at: 1722225006333,
    created_by: 0,
    email: "motherofeart@mailinator.com",
    employee_code: "870003",
    flagging_process: "Ready to Process",
    id: "js2giz9Ig",
    id_parent: "8vAqkzrSR",
    identity_number: "2340000003",
    ids: "js2giz9Ig",
    stage_status: "Create Employee",
    staging_employee_id: "GhZB3RrIR",
    updated_at: 1722225006333,
    updated_by: 0,
  },
  {
    bank_account_number: 980000000000,
    company_id: 25236,
    created_at: 1722225006333,
    created_by: 0,
    email: "motherofeart@mailinator.com",
    employee_code: "870003",
    flagging_process: "Ready to Process",
    id: "js2giz9Ig",
    id_parent: "8vAqkzrSR",
    identity_number: "2340000003",
    ids: "js2giz9Ig",
    stage_status: "Create Employee",
    staging_employee_id: "GhZB3RrIR",
    updated_at: 1722225006333,
    updated_by: 0,
  },
];

function filterDuplicates(arr) {
  var seenEmails = {};
  return arr.filter(function(item) {
      var key = item.email + "|" + item.stage_status;
      if (seenEmails[key]) {
          return false;
      } else {
          seenEmails[key] = true;
          return true;
      }
  });
}

var filteredValidateStage = filterDuplicates(validateStage);

console.log(filteredValidateStage);
