var payload = {
  "address": "CIMB Niaga",
  "bank_account_holder_name": "SUMARYONO",
  "bank_account_number": 125303000010,
  "bank_branch_name": "BRANCH",
  "bank_name": "PT Bank CIMB Niaga TBK",
  "company_id": 25236,
  "country": "Indonesia",
  "created_at": 1713803459210,
  "created_by": 166467,
  "date_of_birth": "26/09/1978",
  "direct_supervisor_email": "sendmail-test-discard@oracle.com",
  "direct_supervisor_employee_code": "3008499",
  "direct_supervisor_name": "Liyana Abd Majid",
  "direct_supervisor_position_name": "Office Support Head - HO & Branches",
  "directorate": "Strategy, Finance & SPAPM ID",
  "email": "r.subandi@cimbniaga.co.id",
  "employee_code": "3004174",
  "employee_status": "Active",
  "employment_type": "Permanent",
  "filename": "CIMB_SMART_YODA_20230206115123.csv",
  "first_name": "R Satria",
  "gender": "Male",
  "grade": "U10",
  "id": "OfI-m4fIR",
  "identity_number": "12312334324",
  "ids": "OfI-m4fIR",
  "last_name": "Graha",
  "marital_status": "Married",
  "officebase_location": "Kantor Pusat - Griya Niaga 1",
  "place_of_birth": "Sukabumi",
  "position_code": "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
  "position_layer": "D4",
  "position_name": "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
  "post_code": 124434,
  "rc_code": "1-611-470-773-008",
  "state": "Jawa Barat",
  "sub_directorate": "Strategic Procurement & Admin Property Management ID",
  "tax_identification_number": "32133243244",
  "updated_at": 1713803459210,
  "updated_by": 166467
}

var urlNative = "https://gateway-uat.smart-cimb.com/v1/auth-service/employee/create";
var passwordEmployee = 123456789;
var lastName = payload.last_name;

var payloadAPI = {
  "email": payload.email,
  "password": "mutBJxwzDd++UEuI5i3W9VqoGilc/VgP4k/ki9fDELMOJ9cP2OIHPa/vzTMJpBhFx5cDFPEj5A5l643leH7mWnEePPHgxzbUIO6ajTZOmI62QCX7bdOHAAHgYMtqfnuouns9/FHU4L3GtwI59lEI7VP9u7TPJHfBIv2AU0zAaNA/UJ2CngktwyhLLDjXc6oGYVTmgHIYOm+SfpFZ2GD36rcM9EqH1/XvGXCUbyA4mxDAdpKrvIA6kZ5/SLag7Bo3GGUCBJJGhEW6ctm6Tj4jz7LP4VVHNGnKuEZ90JC+ku1S52VuUwhJrLCbKZqT2rx2TDq3YwQRRjOIOBdcbi+P9Q==",
  "first_name": payload.first_name,
  "last_name": payload.last_name,
  "date_of_birth": lastName,
  "user_role": 3
}


function _datetoString(timestamp) {
  var date = new Date(timestamp);

  var mm = date.getMonth() + 1; // getMonth() is zero-based
  var dd = date.getDate();

  return [
      date.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd
  ].join('-');

}

var date_of_birth =
  req.date_of_birth !== null
      ? _datetoString(req.date_of_birth)
      : '';

var random_password = generatePassword(12);

function generatePassword(length) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;></-=";
  var password = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

var userData = {
  email : req.email,
  date_of_birth : date_of_birth,
  first_name : req.first_name,
  last_name : req.last_name,
  password : random_password,
  user_role : 3,
  phone_number : req.phone_number,
  place_of_birth : req.place_of_birth,
  gender : req.gender,
  marital_status : req.marital_status == 'Married' ? req.marital_status : 'Single'
}

_log(userData)
