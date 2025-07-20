var result = [
  {
    "EMAIL ADDRESS^EMPLOYEE NAME^EMPLOYEE STATUS^TERMINATION DATE^EMPLOYEE CATEGORY^NIP^GRADE^LOCATION^DIRECTORATE^SUBDIRECTORATE^KTP^NPWP^Date of Birth^TOWN OF BIRTH^GENDER^MARITAL STATUS^COUNTRY^PROVINSI^TOWN OR CITY^POSTAL CODE^BANK NAME^BANK ACCOUNT NUMBER^BANK HOLDER NAME^BANK BRANCH NAME^POSITION NAME^POSITION CODE^ORG LEVEL^COST CENTER^DS EMAIL^DS NIP^DS NAME^DS POSITION NAME":
      "integrasi.yoda1@mailinator.com^User EMP Yoda1^Active;;Permanent^501^U4^Kantor Pusat - Menara Sentraya 1^Strategy- Finance & SPAPM ID^Strategic Procurement & Admin Property Management ID;;;1991-01-26;;Male^Married;;;;;PT Bank CIMB Niaga TBK^70501^New 1^BRANCH^501-position U4 - 1^501-position U4 - 1^D1^1611.47077.3015^r.ditaruna@mailinator.com^3030050^R Satria Graha Ditaruna^3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2",
  },
];


/* 
buat code dari js es 5 buat menghasilkan nilai object dibawah ini:
1. kalau ada nilai kosong atau tidak ada maka valuenya null

hasil yang diinginkan
{
  "EMAIL ADDRESS": "integrasi.yoda1@mailinator.com",
  "EMPLOYEE NAME": "User EMP Yoda1",
  "EMPLOYEE STATUS": "Active",
  "TERMINATION DATE": 0, 
  "EMPLOYEE CATEGORY": "Permanent",
  "NIP": 501,
  "GRADE": "U4",
  "LOCATION": "Kantor Pusat - Menara Sentraya 1",
  "DIRECTORATE": "Strategy- Finance & SPAPM ID",
  "SUBDIRECTORATE": "Strategic Procurement & Admin Property Management ID",
  "KTP": "",
  "NPWP": "",
  "Date of Birth": "1991-01-26",
  "TOWN OF BIRTH": "",
  "TOWN OR CITY":  "",
  "GENDER: "Male",
  "MARITAL STATUS": "Married",
  "COUNTRY": "",
  "PROVINSI": "",
  "POSTAL CODE": "",
  "BANK NAME": "PT Bank CIMB Niaga TBK",
  "BANK ACCOUNT NUMBER": "70501",
  "BANK HOLDER NAME": "New 1",
  "BANK BRANCH NAME": "BRANCH",
  "POSITION NAME": "501-position U4 - 1",
  "POSITION CODE": "501-position U4 - 1",
  "ORG LEVEL": "D1",
  "COST CENTER": "1611.47077.3015", // rubah jadi "1611-47077-3015"
  "DS EMAIL": "r.ditaruna@mailinator.com",
  "DS NIP": "3030050",
  "DS NAME": "R Satria Graha Ditaruna",
  "DS POSITION NAME": "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2"
}

*/

function transformData(input) {
  var keyValueStr = Object.keys(input[0])[0];
  var valueStr = input[0][keyValueStr];

  var headers = keyValueStr.split('^');
  var values = valueStr.split('^');

  var transformed = {};

  // Check if the lengths of headers and values arrays match
  if (headers.length === values.length) {
    // Loop through each header and value pair
    for (var i = 0; i < headers.length; i++) {
      var headerValue = headers[i].trim(); // Trim spaces from header names

      // Split header and value by colon (:)
      var headerValuePair = headerValue.split(':');
      var key = headerValuePair[0].trim(); // Extract key
      var value = headerValuePair[1] ? headerValuePair[1].trim() : null; // Extract value, handle missing value

      // Apply transformations based on the key
      switch (key) {
        case 'EMPLOYEE NAME':
          transformed[key] = value || null; // Assign value if available, otherwise null
          break;
        case 'TERMINATION DATE':
          transformed[key] = value === '' ? null : parseInt(value, 10); // Convert to integer if not empty
          break;
        case 'COST CENTER':
          transformed[key] = value === '' ? null : value.replace(/\./g, '-'); // Replace dots with dashes if not empty
          break;
        case 'NIP':
          transformed[key] = value === '' ? null : parseInt(value, 10); // Convert to integer if not empty
          break;
        default:
          transformed[key] = value === '' ? null : value; // Assign value if available, otherwise null
          break;
      }
    }
  } else {
    console.error("Lengths of headers and values arrays don't match.");
  }

  return transformed;
}

var transformedResult = transformData(result);
console.log(transformedResult);
