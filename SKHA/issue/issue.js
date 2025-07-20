var getListBrokenData = [
  {
    amount: 400000,
    email: "rudy.firmansyah@skhaconsulting.com",
    employee_name: "Rudy",
    expense_category: {
      id: "Lpdv9-ZNRZ",
      name: "Project Allowance - Consultant",
    },
    flow_status: "approved",
    id: "a7ywmmHHg",
    ref_number: "2024120208",
  },
    {
    amount: 400000,
    email: "rudy.firmansyah@skhaconsulting.com",
    employee_name: "Rudy",
    expense_category: {
      id: "Lpdv9-ZNRZ",
      name: "Project Allowance - Consultant",
    },
    flow_status: "approved",
    id: "NV__mmNHg",
    ref_number: "2024120208",
  },
  {
    amount: 280000,
    description: "Transport to Client\n",
    email: "rudy.firmansyah@skhaconsulting.com",
    employee_name: "Rudy",
    expense_category: {
      id: "OJbvraZNR",
      name: "Client Meeting",
    },
    flow_status: "approved",
    id: "busQmmHHR",
    ref_number: "2024120208",
  },
  {
    amount: 280000,
    description: "Transport to Client\n",
    email: "rudy.firmansyah@skhaconsulting.com",
    employee_name: "Rudy",
    expense_category: {
      id: "OJbvraZNR",
      name: "Client Meeting",
    },
    flow_status: "approved",
    id: "9uQlimNHg",
    ref_number: "2024120208",
    submitted_date: "2024-12-25 23:31:25",
  }
];

var groupedData = {};

getListBrokenData.forEach(function (item) {
  var key = item.ref_number + "-" + item.expense_category.id + "-" + item.amount;

  if (!groupedData[key]) {
    groupedData[key] = [];
  }

  groupedData[key].push(item);
});

console.log(groupedData);

var processedData = [];

Object.keys(groupedData).forEach(function (key) {
  var group = groupedData[key];
  var amounts = {};

  group.forEach(function (item) {
    amounts[item.amount] = true;
  });

  var amountKeys = Object.keys(amounts);

  if (amountKeys.length === 1) {
    group.forEach(function (item, index) {
      if (index === 0) {
        processedData.push({
          id: item.id,
          ref_number: item.ref_number,
          expense_category: item.expense_category.name,
          amount: item.amount,
          type: "Aman"
        });
      } else {
        processedData.push({
          id: item.id,
          ref_number: item.ref_number,
          expense_category: item.expense_category.name,
          amount: item.amount,
          type: "Deleted"
        });
      }
    });
  } else {
    group.forEach(function (item, index) {
      var prefix = String.fromCharCode(65 + index); // A, B, C, ...
      processedData.push({
        id: item.id,
        ref_number: item.ref_number,
        expense_category: item.expense_category.name,
        type: prefix
      });
    });
  }
});

// console.log(processedData);
