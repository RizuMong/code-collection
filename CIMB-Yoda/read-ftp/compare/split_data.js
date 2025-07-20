var employeeCore =  [
  {
      "address": "CIMB Niaga",
      "bank_account_holder_name": "SUMARYONO",
      "bank_account_number": 125303000010,
      "bank_branch_name": "BRANCH",
      "bank_name": "PT Bank CIMB Niaga TBK"
    },
    {
        "address": "CIMB Niaga",
        "bank_account_holder_name": "SUMARYONO",
        "bank_account_number": 125303000010,
        "bank_branch_name": "BRANCH",
        "bank_name": "PT Bank CIMB Niaga TBK"
      },
];


var length_data = employeeCore.length;
var limit = 1;
var job_frequency = 5;
var hit_frequency = Math.floor(length_data / limit);
var modData = length_data % limit;

var finalArray = [];

for (var i = 0; i < hit_frequency; i += job_frequency) {
    var arrayTemp = {};
    for (var j = 0; j < job_frequency; j += 1) {
        if ((i + j + 1) * limit <= hit_frequency * limit) {
            arrayTemp["batch_" + (j + 1)] = {
                data: employeeCore.slice((i + j) * limit, (i + j + 1) * limit),
                valid: true,
            };
        } else if ((i + j) * limit <= length_data) {
            arrayTemp["batch_" + (j + 1)] = {
                data: employeeCore.slice((i + j) * limit, length_data),
                valid: true,
            };
            if (i + j === hit_frequency - 1) {
                arrayTemp["batch_" + (j + 1)].final_batch = true; // Add final_batch flag
            }
        } else {
            arrayTemp["batch_" + (j + 1)] = {
                data: [],
                valid: false,
            };
        }
    }
    finalArray.push(arrayTemp);
}

if (length_data <= limit) {
    finalArray = [
        {
            batch_1: {
                data: employeeCore,
                valid: true,
                final_batch: true,
            },
            batch_2: { data: [], valid: false },
            batch_3: { data: [], valid: false },
            batch_4: { data: [], valid: false },
            batch_5: { data: [], valid: false },
        },
    ];
} else {
    finalArray[finalArray.length - 1]["batch_" + job_frequency].final_batch = true;
}

console.log(finalArray);