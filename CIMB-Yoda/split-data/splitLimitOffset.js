var getDataStaging = [
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

function splitProcess(data, limit) {
  var result = [];
  var totalItems = data.length;
  var offset = 0;

  while (offset < totalItems) {
    var batch = {
      limit: limit,
      offset: offset,
    };
    result.push(batch);
    offset += limit;
  }

  if (result.length > 0) {
    result[result.length - 1].finalArray = true;
  }

  return result;
}

var result = splitProcess(getDataStaging, 1000);

console.log(result);
