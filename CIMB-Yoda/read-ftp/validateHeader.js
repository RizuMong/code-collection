var headerFile = [
  "BANK ACCOUNT NUMBER",
  "BANK BRANCH NAME",
  "BANK HOLDER NAME",
  "BANK NAME",
  "COST CENTER",
  "COUNTRY",
  "DIRECTORATE",
  "DS EMAIL",
  "DS NAME",
  "DS NIP",
  "DS POSITION NAME",
  "Date of Birth",
  "EMAIL ADDRESS",
  "EMPLOYEE CATEGORY",
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
  "SUBDIRECTORATE",
  "TERMINATION DATE",
  "TOWN OF BIRTH",
  "TOWN OR CITY"
]

var openFtpYoda =  [{
  "BANK ACCOUNT NUMBER": "7001501",
  "BANK BRANCH NAME": "BRANCH",
  "BANK HOLDER NAME": "New 1",
  "BANK NAME": "PT Bank CIMB Niaga TBK",
  "COST CENTER": "1611.47077.3015",
  "COUNTRY": "Indonesia",
  "DIRECTORATE": "Strategy- Finance & SPAPM ID",
  "DS EMAIL": "r.ditaruna@mailinator.com",
  "DS NAME": "R Satria Graha Ditaruna",
  "DS NIP": "3030050",
  "DS POSITION NAME": "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2",
  "Date of Birth": "1991-01-26",
  "EMAIL ADDRESS": "testintegrasiuat.yoda1@mailinator.com",
  "EMPLOYEE CATEGORY": "Permanent",
  "EMPLOYEE NAME": "UATEMP Yoda Test1",
  "EMPLOYEE STATUS": "Active",
  "GENDER": "Male",
  "GRADE": "U4",
  "KTP": "5011",
  "LOCATION": "Kantor Pusat - Menara Sentraya 1",
  "MARITAL STATUS": "Married",
  "NIP": "5011",
  "NPWP": "5011",
  "ORG LEVEL": "D1",
  "POSITION CODE": "5011-position U4 - 1",
  "POSITION NAME": "5011-position U4 - 1",
  "POSTAL CODE": "",
  "PROVINSI": "DKI Jakarta",
  "SUBDIRECTORATE": "Strategic Procurement & Admin Property Management ID",
  "TERMINATION DATE": "",
  "TOWN OF BIRTH": "Jakarta",
  "TOWN OR CITY": "Jakarta Selatan"
},
]

var data = openFtpYoda[0];
var dataKeys = Object.keys(data);

var isValid = true;
var issue = null; 

if (headerFile.length !== dataKeys.length) {
  isValid = false;
  issue = "Jumlah header tidak cocok";
} else {
  for (var i = 0; i < dataKeys.length; i++) {
    var key = dataKeys[i];

    if (headerFile.indexOf(key) === -1) {
      isValid = false;
      issue = "Ada Header tidak cocok di: " + key;
      break;
    }

    if (data[key] === null || data[key] === undefined) {
      isValid = false;
      issue = "Ada Header kosong di: " + key;
      break;
    }
  }
}

if (isValid) {
  console.log("Validasi Lolos");
} else {
  console.log("Validasi Gagal: " + issue);
}
