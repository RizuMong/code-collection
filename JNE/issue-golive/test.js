var payload = {
  bank_account_id: "BCA_0848822771",
  branch_id: "SDA",
  company_id: 230,
  created_at: 1723108836229,
  created_by: 2945,
  customer_id: "12043400",
  id_virtual_account: "irwrcXrIR",
  row: 2,
  updated_at: 1723108836229,
  updated_by: 2945,
  virtual_account_name: "MULTI SPUNINDO JAYA TBK PT",
  virtual_account_number: "02493016312043400",
};

// Jika Customer NA
var filterData = {
  virtual_account_number: payload.virtual_account_number,
  "customer_id.name": payload.customer_id,
};


if (payload.customer_id.charAt(0) !== "8") {
  filterData["branch_id.name"] = payload.branch_id;
}

console.log(filterData);

var filter = {
  _filter_version: 2,
  where_is_and: filterData,
};

console.log(filter);

// var sort = { created_at: -1 };
// var idDataManager = "DPPIho74R";
// var page = 1;
// var limit = 1000;
// var filter0perator = "and";

// var findData =
//   _findRecords(idDataManager, page, limit, sort, filter, filter0perator) || [];

// _log(findData);
