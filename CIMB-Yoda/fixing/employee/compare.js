var payload = {
  filename: "CIMB_SMART_YODA_TESTING_20241031_CREATE6.csv",
};

var getDataStaging = [
  {
    _id: "67287e6128dd696ea05c37ca",
    email: "bagassimatupang1@mailinator.com",
  },
  {
    _id: "67287e6128dd696ea05c37ca",
    email: "bagassimatupang2@mailinator.com",
  },
];

var getDataCore = [
  {
    _id: "67287e6128dd696ea05c37ca",
    email: "bagassimatupang2@mailinator.com",
    bank_account_number: "8739121231",
    employee_code: "32141",
    identity_number: "123",
  },
  {
    _id: "67287e6128dd696ea05c37ca",
    email: "bagassimatupang3@mailinator.com",
    bank_account_number: "8739121231",
    employee_code: "32141",
    identity_number: "123",
  },
];


function generateId() {
  var timestamp = Date.now().toString(36);
  var randomNum = Math.floor(Math.random() * 1000000).toString(36);
  var randomStr = Math.random().toString(36).substring(2, 8);
  return 'id-' + timestamp + '-' + randomNum + '-' + randomStr;
};

var stagingEmails = [];
for (var i = 0; i < getDataStaging.length; i++) {
  stagingEmails.push(getDataStaging[i].email);
};

var listResult = [];
for (var j = 0; j < getDataCore.length; j++) {
  var coreData = getDataCore[j];
  console.log(coreData);
  
  if (stagingEmails.indexOf(coreData.email) === -1) {
    listResult.push({
      bank_account_number: coreData.bank_account_number,
      email: coreData.email,
      employee_code: coreData.employee_code,
      filename: payload.filename,
      flagging_process: "Ready to Process",
      identity_number: coreData.identity_number,
      ids: generateId(),
      stage_status: "Delete Employee",
    });
  }
}

console.log(listResult);