var req = {
  body: {
    query: {
      filter: ['{"attendace_id":"8gI2cuGnZQWGRLDJ","type":"Check In"}'],
      limit: ["1000000"],
      page: ["1"],
    },
  },
};

var addQuery = "";
var filterExport = req.body.query || {};

var typeMap = {
  "Check In": "clock_in",
  "Check Out": "clock_out"
};

var filterObj = {};
if (Array.isArray(filterExport.filter) && filterExport.filter.length > 0) {
  try {
    filterObj = JSON.parse(filterExport.filter[0]);
  } catch (e) {
    console.error("Invalid JSON in filter:", e);
  }
}

if (filterObj.type) {
  addQuery += " AND type = '" + typeMap[filterObj.type] + "'";
};

if (filterObj.attendace_id) {
  addQuery += " AND attendace_id = '" + filterObj.attendace_id + "'";
};

console.log(addQuery);

