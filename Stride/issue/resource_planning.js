// var query = "SELECT assignee_id, sprint_id, estimate_man_hour, actual_man_hour" +
//   " FROM task" +
//   " WHERE estimate_start_date <= " + start_date + " AND estimate_end_date >= " + end_date 
//   // " GROUP BY assignee_id";

// var queryData = _queryRecord("solution_lifecycle_mgr", query)
// var dataPlanning = queryData.length > 0 ? queryData : [];

// // build data
// if (dataPlanning.length > 0) {

// };

// var filter = {
//   _filter_version: 2,
//   where_between_and: {
//     "estimate_start_date": [start_date, end_date]
//   }
// };