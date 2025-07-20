var req = {
  query: {
    filter: [
      '{"company.id":"MWzh12hcmPRsnObx","supplier_multi.id":["pQJ44iDDJwsxkAXJ"],"department_multi.id":["s6SvgkJ1L7om8Y7G"],"date":{"$between":[1748883600000,1748969999999]},"start_amount":1000,"end_amount":1000}',
    ],
    limit: ["1000000"],
    page: ["1"],
  },
};

// Parse string JSON jadi object
var filterData = {};
if (req.query.filter && req.query.filter[0]) {
  try {
    filterData = JSON.parse(req.query.filter[0]);
  } catch (e) {
    console.error("Invalid JSON in filter:", e);
  }
}

var filter = {
  _filter_version: 2,
};

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

// IN OR (cek apakah salah satu field ada)
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
if (filterData.start_amount !== undefined) {
  filter.where_gt_and = {
    amount: filterData.start_amount,
  };
}

// Less than
if (filterData.end_amount !== undefined) {
  filter.where_lt_and = {
    amount: filterData.end_amount,
  };
}

console.log(JSON.stringify(filter, null, 2));
