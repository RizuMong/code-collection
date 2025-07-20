var req = {
  body: {
    filter: {
      "company.id": "T4hFajb5uWIh12wA",
      date: {
        $between: [1748883600000, 1749142799999],
      },
      "department_multi.id": ["s6SvgkJ1L7om8Y7G"],
      end_amount: 2000,
      start_amount: 1000,
      "supplier_multi.id": ["oP8eNahBncYVldtV"],
    },
    filter_operator: "and",
    form_data_id: "",
    limit: 10000,
    page: 0,
    sort: {
      created_at: -1,
    },
  },
};

var filterData = req.body.filter || {};

var filter = {
    _filter_version: 2,
};

// console.log(filterData);

// AND
if (filterData["company.id"]) {
  filter.where_is_and = {
    "company.id": filterData["company.id"],
  };
}

if (filterData.date && filterData.date.$between) {
  filter.where_between_and = {
    date: [filterData.date.$between[0], filterData.date.$between[1]],
  };
}

// IN OR
if (filterData["department_multi.id"] || filterData["supplier_multi.id"]) {
  filter.where_in_or = {};

  if (filterData["department_multi.id"]) {
    filter.where_in_or["department.id"] = filterData["department_multi.id"];
  }

  if (filterData["supplier_multi.id"]) {
    filter.where_in_or["supplier.id"] = filterData["supplier_multi.id"];
  }
}

// Greater than
if (filterData.start_amount) {
  filter.where_gt_and = {
    amount: filterData.start_amount,
  };
}

// Less than
if (filterData.end_amount) {
  filter.where_lt_and = {
    amount: filterData.end_amount,
  };
}

console.log(filter);


//   where_is_and: {
//     company.id: filterData["company.id"],
//   },

// "where_in_or": {
//     "department_multi.id": fileterData["department_multi.id"],
//     "supplier_multi.id": fileterData["supplier_multi.id"]
// },

//   "where_between_and": {
//     "date": [filterData.date.$between[0], filterData.date.$between[1]],
// }

// "where_gt_and": {
//     "amount": filterData.start_amount,
// },

// "where_lt_and": {
//     "amount": fileterData.end_amount,
// },
