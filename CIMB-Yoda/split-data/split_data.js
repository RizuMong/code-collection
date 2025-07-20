var employeeCore = [
  {
    bank_account_number: "70509570",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 9570",
  },
  {
    bank_account_number: "70509570",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 9570",
  },
  {
    bank_account_number: "70509570",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 9570",
  },
  {
    bank_account_number: "70509570",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 9570",
  },
  {
    bank_account_number: "70509570",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 9570",
  },
  {
    bank_account_number: "70509570",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 9570",
  },
];

// var batchLimit = 500; 
// var finalArray = []; 

// for (var i = 0; i < employeeCore.length; i += batchLimit) {
//   var batch = {
//     data: [],
//     final_batch: (i + batchLimit >= employeeCore.length) 
//   };

//   for (var j = 0; j < batchLimit && (i + j) < employeeCore.length; j++) {
//     var record = {};
//     for (var key in employeeCore[i + j]) {
//       if (employeeCore[i + j].hasOwnProperty(key)) {
//         record[key] = employeeCore[i + j][key]; 
//       }
//     }
//     record.final_record = (i + j === employeeCore.length - 1); 
//     batch.data.push(record);
//   }

//   finalArray.push({ batch: batch }); 
// }

var finalArray = []; // Initialize the final array

// Process each employee record directly into finalArray
for (var i = 0; i < employeeCore.length; i++) {
  var record = {};
  
  // Copy each property from the current employee record
  for (var key in employeeCore[i]) {
    if (employeeCore[i].hasOwnProperty(key)) {
      record[key] = employeeCore[i][key];
    }
  }
  
  // Add the final_record property to the last record
  record.final_record = (i === employeeCore.length - 1);
  
  // Push the record into the final array
  finalArray.push(record);
}

console.log(finalArray);

console.log(finalArray);