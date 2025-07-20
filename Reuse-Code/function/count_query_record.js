var query = "SELECT COUNT(1) as count FROM temp_candidate"; // query
var countData = _queryRecord("table_group", query);

console.log(countData[0].count);