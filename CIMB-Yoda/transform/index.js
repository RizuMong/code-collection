var openFtpYoda = [
  {
      "EMAIL ADDRESS^EMPLOYEE NAME^EMPLOYEE STATUS^TERMINATION DATE^EMPLOYEE CATEGORY^NIP^GRADE^LOCATION^DIRECTORATE^SUB DIRECTORATE^KTP^NPWP^Date of Birth^TOWN OF BIRTH^GENDER^MARITAL STATUS^COUNTRY^PROVINSI^TOWN OR CITY^POSTAL CODE^BANK NAME^BANK ACCOUNT NUMBER^BANK HOLDER NAME^BANK BRANCH NAME^POSITION NAME^POSITION CODE^ORG LEVEL^COST CENTER^DS EMAIL^DS NIP^DS NAME^DS POSITION NAME": "penelope@mailinator.com^Pene Lope^Active^0^Permanent^870001^U10^Kantor Pusat - Griya Niaga 1^Strategy"
  }
];

var dataYoda = [];

// Assuming eachFile.name is 'exampleFileName.txt' for demonstration
var eachFile = { name: 'exampleFileName.txt' };

function generateId() {
  var timestamp = Date.now().toString(36); 
  var randomNum = Math.floor(Math.random() * 1000000).toString(36); 
  var randomStr = Math.random().toString(36).substring(2, 8); 
  return 'id-' + timestamp + '-' + randomNum + '-' + randomStr;
};

openFtpYoda.forEach(function (input) {
    var keys = Object.keys(input)[0];
    var values = input[keys];

    var header = keys.split("^");
    var data = values.split("^");

    var obj = {};

    for (var i = 0; i < header.length; i++) {
        var key = header[i].toLowerCase().replace(/ /g, '_'); 
        if (data[i] !== undefined) {
            if (key === 'cost_center') {
                obj[key] = data[i].replace(/\./g, '-'); 
            } else {
                obj[key] = data[i];
            }
        } else {
            obj[key] = ""; // or any default value you prefer
        }
    }

    obj['ids'] = generateId() + '-' + eachFile.name;
    obj['id_parent'] = generateId() + '-' + eachFile.name;
    obj['filename'] = eachFile.name;
    obj['flagging_process'] = "Insert";

    dataYoda.push(obj);
});

console.log(dataYoda);