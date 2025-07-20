var payload = {
  count: "Failed Validate",
  created_at: 1730269097270,
  filename: "CIMB_SMART_YODA_TEST.csv",
  type: "staging",
};

var getCountLatest = {
  company_id: 25236,
  count_emp_create: 0,
  count_emp_inactive: 0,
  count_emp_reactive: 0,
  count_emp_update: 0,
  count_position_create: 0,
  created_at: 1730269097270,
  created_by: 166467,
  data_failed: 0,
  data_success: 12,
  id: "FDB2QAWHR",
  id_log_file_yoda: "FDB2QAWHR",
  is_encrypted: false,
  nama_file: "CIMB_SMART_YODA_TEST.csv",
  status_file: "Failed",
  total_data: 0,
  updated_at: 1730269450719,
  updated_by: 157190,
};

var countTypes = {
  "Data Success": "data_success",
  "Failed Validate": "data_failed",
  "Employee Created": "count_emp_create",
  "Employee Updated": "count_emp_update",
  "Employee Reactive": "count_emp_reactive",
  "Employee Inactive": "count_emp_inactive",
  "Position Created": "count_position_create",
};

var result = {};

for (var key in countTypes) {
  if (countTypes.hasOwnProperty(key)) {
    var field = countTypes[key];
    result[field] = getCountLatest[field] !== undefined ? getCountLatest[field] : 0;
    if (payload.count === key) {
      result[field] += 1;
    }
  }
}

console.log({
  countSuccess: result.data_success,
  countRejected: result.data_failed,
  countEmpCreated: result.count_emp_create,
  countEmpUpdated: result.count_emp_update,
  countEmpReactive: result.count_emp_reactive,
  countEmpInactive: result.count_emp_inactive,
  countPositionCreated: result.count_position_create,
});
