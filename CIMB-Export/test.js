var employeeProcess = [
  {
    "employee_id": "1",
  },
  {
    "employee_id": "1",
  },
  {
    "employee_id": "1",
  }
]

var payload = {
  "filename": "test.csv",
}

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
};

var maxJob = 2;
var limitData = 1;
var limitOffsetData = splitProcess(employeeProcess, limitData, payload.filename, maxJob);

console.log(limitOffsetData);