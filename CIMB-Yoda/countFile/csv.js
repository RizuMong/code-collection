function _dateFormat(timestamp) {
  if (!timestamp) {
    return "";
  }
  var date = new Date(timestamp);
  var months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  var formatted_date =
    date.getDate() +
    " " +
    months[date.getMonth()] +
    " " +
    date.getFullYear() +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes();
  return formatted_date;
}

//  ======== Setup Data Buat CSV ===========
var nameFile = payload.filename + _dateFormat(Date.now());
var extension = "csv";
var path = "yoda/archive";
var fullPath = path + "/" + nameFile + ".csv";

var reportFinish = Date.now();
var reportFinishText = _dateFormat(Date.now());

var datas = [];

if (getData.length != 0) {
  for (i in getData) {
    var data = {
      "BANK BRANCH NAME": getData[i].bank_branch_name,
      "BANK HOLDER NAME": getData[i].bank_holder_name,
      "BANK ACCOUNT NUMBER": getData[i].bank_account_number,
      "BANK NAME": getData[i].bank_name,
      "COST CENTER": getData[i].cost_center,
      "COUNTRY": getData[i].country,
      "DATE OF BIRTH": getData[i].date_of_birth,
      "DIRECTORATE": getData[i].directorate,
      "DS EMAIL": getData[i].ds_email,
      "DS NAME": getData[i].ds_name,
      "DS NIP": getData[i].ds_nip,
      "DS POSITION NAME": getData[i].ds_position_name,
      "EMPLOYEE CATEGORY": getData[i].employee_category,
      "EMAIL ADDRESS": getData[i].employee_email,
      "EMPLOYEE NAME": getData[i].employee_name,
      "EMPLOYEE STATUS": getData[i].employee_status,
      "GENDER": getData[i].gender,
      "GRADE": getData[i].grade,
      "KTP": getData[i].ktp,
      "LOCATION": getData[i].location,
      "MARITAL STATUS": getData[i].marital_status,
      "NIP": getData[i].nip,
      "NPWP": getData[i].npwp,
      "ORG LEVEL": getData[i].org_level,
      "POSITION CODE": getData[i].position_code,
      "POSITION NAME": getData[i].position_name,
      "POSTAL CODE": getData[i].postal_code,
      "PROVINSI": getData[i].provinsi,
      "STATUS": getData[i].status,
      "SUB DIRECTORACE": getData[i].sub_directorate,
      "TOWN OF BIRTH": getData[i].town_of_birth,
      "TOWN OR CITY": getData[i].town_or_city,
      "TERMINATION DATE": 0,
    };
    datas.push(data);
  }
}

var headers = [
  "BANK BRANCH NAME",
  "BANK HOLDER NAME",
  "BANK ACCOUNT NUMBER",
  "BANK NAME",
  "COST CENTER",
  "COUNTRY",
  "DATE OF BIRTH",
  "DIRECTORATE",
  "DS EMAIL",
  "DS NAME",
  "DS NIP",
  "DS POSITION NAME",
  "EMPLOYEE CATEGORY",
  "EMAIL ADDRESS",
  "EMPLOYEE NAME",
  "EMPLOYEE STATUS",
  "GENDER",
  "GRADE",
  "KTP",
  "LOCATION",
  "MARITAL STATUS",
  "NIP",
  "NPWP",
  "ORG LEVEL",
  "POSITION CODE",
  "POSITION NAME",
  "POSTAL CODE",
  "PROVINSI",
  "STATUS",
  "SUB DIRECTORACE",
  "TOWN OF BIRTH",
  "TOWN OR CITY",
  "TERMINATION DATE",
];
