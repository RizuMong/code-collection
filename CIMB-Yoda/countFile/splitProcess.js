var employeeProcess = [
  {
    bank_account_number: 50321456,
    company_id: 25236,
    created_at: 1730191742410,
    created_by: 0,
    email: "testemployeebaru@mailinator.com",
    employee_code: "50321456",
    filename: "CIMB_SMART_YODA_202410291045.csv",
    flagging_process: "Ready to Process",
    id: "d23LT2ZHg",
    identity_number: " ",
    ids: "d23LT2ZHg",
    stage_status: "Delete Employee",
    updated_at: 1730191742410,
    updated_by: 0,
  },
  {
    bank_account_number: 50321456,
    company_id: 25236,
    created_at: 1730191742410,
    created_by: 0,
    email: "testemployeebaru@mailinator.com",
    employee_code: "50321456",
    filename: "CIMB_SMART_YODA_202410291045.csv",
    flagging_process: "Ready to Process",
    id: "d23LT2ZHg",
    identity_number: " ",
    ids: "d23LT2ZHg",
    stage_status: "Delete Employee",
    updated_at: 1730191742410,
    updated_by: 0,
  },
  {
    bank_account_number: 50321456,
    company_id: 25236,
    created_at: 1730191742410,
    created_by: 0,
    email: "testemployeebaru@mailinator.com",
    employee_code: "50321456",
    filename: "CIMB_SMART_YODA_202410291045.csv",
    flagging_process: "Ready to Process",
    id: "d23LT2ZHg",
    identity_number: " ",
    ids: "d23LT2ZHg",
    stage_status: "Delete Employee",
    updated_at: 1730191742410,
    updated_by: 0,
  },
];

var payload = {
  filename: "CIMB_SMART_YODA_202410291045.csv",
  flagging_process: "Ready to Process",
};

function splitProcess(data, limit, filename, maxJob) {
  var result = [];
  var totalItems = data.length;
  var offset = 0;
  var jobCounter = 1;

  while (offset < totalItems) {
    var batch = {
      limit: limit,
      offset: offset,
      filename: filename,
      flagging_process: payload.flagging_process,
      job: jobCounter,
    };
    result.push(batch);
    offset += limit;

    jobCounter = jobCounter < maxJob ? jobCounter + 1 : 1;
  }

  if (result.length > 0) {
    result[result.length - 1].finalArray = true;
  }

  return result;
}

var limitOffsetData = splitProcess(employeeProcess, 25, payload.filename, 1);

console.log(limitOffsetData);
