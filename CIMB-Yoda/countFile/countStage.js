
var queryEmpCreated = "SELECT COUNT(id_log_response_yoda) AS countEmployeeCreated FROM t_log_response_yoda WHERE process = 'Create Employee' AND filename ='" + payload.filename + "'";
var queryEmpUpdated = "SELECT COUNT(id_log_response_yoda) AS countEmployeeCreated FROM t_log_response_yoda WHERE process = 'Update Employee' AND filename ='" + payload.filename + "'";
var queryEmpDeleted = "SELECT COUNT(id_log_response_yoda) AS countEmployeeCreated FROM t_log_response_yoda WHERE process = 'Delete Employee' AND filename ='" + payload.filename + "'";
var queryEmpReactive = "SELECT COUNT(id_log_response_yoda) AS countEmployeeCreated FROM t_log_response_yoda WHERE process = 'Reactive Employee' AND filename ='" + payload.filename + "'";
var queryPositionCreated = "SELECT COUNT(id_log_response_yoda) AS countEmployeeCreated FROM t_log_response_yoda WHERE process = 'Create Position' AND filename ='" + payload.filename + "'";

var totalEmpCreated = _queryRecord("yoda_integration", queryEmpCreated);
var totalEmpUpdated = _queryRecord("yoda_integration", queryEmpUpdated);
var totalEmpDeleted = _queryRecord("yoda_integration", queryEmpDeleted);
var totalEmpReactive = _queryRecord("yoda_integration", queryEmpReactive);
var totalPositionCreated = _queryRecord("yoda_integration", queryPositionCreated);

_log({
  totalEmpCreated: totalEmpCreated,
  totalEmpUpdated: totalEmpUpdated,
  totalEmpDeleted: totalEmpDeleted,
  totalEmpReactive: totalEmpReactive,
  totalPositionCreated: totalPositionCreated
});

var total = {
    countEmployeeCreated: 0,
    countEmployeeReactive: 0,
    countEmployeeUpdated: 0,
    countEmployeeInactive: 0,
    countPositionCreated: 0,
};

if (totalEmpCreated.length != 0) {
    total.countEmployeeCreated = totalEmpCreated[0].countEmployeeCreated;
};

if (totalEmpUpdated.length != 0) {
  total.countEmployeeUpdated = totalEmpUpdated[0].countEmployeeUpdated;
};

if (totalEmpDeleted.length != 0) {
  total.countEmployeeInactive = totalEmpDeleted[0].countEmployeeInactive;
};

if (totalEmpReactive.length != 0) {
  total.countEmployeeReactive = totalEmpReactive[0].countEmployeeReactive;
};

if (totalPositionCreated.length != 0) {
  total.countPositionCreated = totalPositionCreated[0].countPositionCreated;
};

_log(total);