var urlPosition = "https://lms-gateway.ppa.co.id/v1/jojoflow/organigram/create";
var urlUser = "https://lms-gateway.ppa.co.id/v1/user/employee/create";

var payloadAPIUser = {
  "email": request.email,
  "password": "Ppa123@!",
  "first_name": request.fullname,
  "last_name": "",
  "user_role": 3,
  "phone_number": request.mobile_phone,
  "employee_status": 1,
  "secretary_mode": false
};

var payloadAPIPosition = {
  "name": request.nik + " - " + request.fullname,
  "code": code,
  "description": "",
  "user_company_id": userCompanyID,
  "default_rule": false,
  "mapping_timesheet_rule": null
};