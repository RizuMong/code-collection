var openFtpYoda = [
  {
    "BANK ACCOUNT NUMBER": "7001501",
    "BANK BRANCH NAME": "BRANCH",
    "BANK HOLDER NAME": "New 1",
    "BANK NAME": "PT Bank CIMB Niaga TBK",
    "COST CENTER": "1611.47077.3015",
    "COUNTRY": "",
    "DIRECTORATE": "Strategy- Finance & SPAPM ID",
    "DS EMAIL": "r.ditaruna@mailinator.com",
    "DS NAME": "R Satria Graha Ditaruna",
    "DS NIP": "3030050",
    "DS POSITION NAME": "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2",
    "Date of Birth": "1991-01-26",
    "EMAIL ADDRESS": "testintegrasi.yoda1@mailinator.com",
    "EMPLOYEE CATEGORY": "Permanent",
    "EMPLOYEE NAME": "User EMP Yoda Test1",
    "EMPLOYEE STATUS": "Active",
    "GENDER": "Male",
    "GRADE": "U4",
    "KTP": "",
    "LOCATION": "Kantor Pusat - Menara Sentraya 1",
    "MARITAL STATUS": "Married",
    "NIP": "5011",
    "NPWP": "",
    "ORG LEVEL": "D1",
    "POSITION CODE": "5011-position U4 - 1",
    "POSITION NAME": "5011-position U4 - 1",
    "POSTAL CODE": "",
    "PROVINSI": "",
    "SUBDIRECTORATE": "Strategic Procurement & Admin Property Management ID",
    "TERMINATION DATE": "",
    "TOWN OF BIRTH": "",
    "TOWN OR CITY": ""
},
{
    "BANK ACCOUNT NUMBER": "7001502",
    "BANK BRANCH NAME": "BRANCH",
    "BANK HOLDER NAME": "New 2",
    "BANK NAME": "PT Bank CIMB Niaga TBK",
    "COST CENTER": "1611.47077.3015",
    "COUNTRY": "",
    "DIRECTORATE": "Strategy- Finance & SPAPM ID",
    "DS EMAIL": "r.ditaruna@mailinator.com",
    "DS NAME": "R Satria Graha Ditaruna",
    "DS NIP": "3030050",
    "DS POSITION NAME": "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2",
    "Date of Birth": "1992-02-26",
    "EMAIL ADDRESS": "testintegrasi.yoda2@mailinator.com",
    "EMPLOYEE CATEGORY": "Permanent",
    "EMPLOYEE NAME": "User EMP Yoda Test2",
    "EMPLOYEE STATUS": "Active",
    "GENDER": "Male",
    "GRADE": "U4",
    "KTP": "",
    "LOCATION": "Kantor Pusat - Menara Sentraya 2",
    "MARITAL STATUS": "Married",
    "NIP": "5012",
    "NPWP": "",
    "ORG LEVEL": "D1",
    "POSITION CODE": "5012-position U4 - 2",
    "POSITION NAME": "5012-position U4 - 2",
    "POSTAL CODE": "",
    "PROVINSI": "",
    "SUBDIRECTORATE": "Strategic Procurement & Admin Property Management ID",
    "TERMINATION DATE": "",
    "TOWN OF BIRTH": "",
    "TOWN OR CITY": ""
},
]


var dataYoda = [];

function generateId() {
  var timestamp = Date.now().toString(36); 
  var randomNum = Math.floor(Math.random() * 1000000).toString(36); 
  var randomStr = Math.random().toString(36).substring(2, 8); 
  return 'id-' + timestamp + '-' + randomNum + '-' + randomStr;
};