var openFtpYoda = [
  {
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
}
];

var eachFile = { name: 'CIMB_SMART_YODA12345678.csv' };


var dataYoda = [];

function generateId() {
  var timestamp = Date.now().toString(36); 
  var randomNum = Math.floor(Math.random() * 1000000).toString(36); 
  var randomStr = Math.random().toString(36).substring(2, 8); 
  return 'id-' + timestamp + '-' + randomNum + '-' + randomStr;
};

openFtpYoda.forEach(function(item) {
  var newItem = {};
  for (var key in item) {
    if (item.hasOwnProperty(key)) {
      var newKey = key.toLowerCase().replace(/ /g, '_');
      newItem[newKey] = item[key];
    }
  }
  newItem['cost_center'] = newItem['cost_center'].replace(/\./g, '-');
  newItem['ids'] = generateId() + '-' + eachFile.name;
  newItem['id_parent'] = generateId() + '-' + eachFile.name;
  newItem['filename'] = eachFile.name;
  newItem['flagging_process'] = 'Insert';
  dataYoda.push(newItem);
});

console.log(dataYoda);