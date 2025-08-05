var listWorkOrderIds =  "'EwME8Bvu9Nxyhlat', 'dajdPOXagPvb46hl', 'bqDbrMQTo2duZq8A'"
var queryData = "SELECT request_number FROM t_work_order WHERE id_work_order IN (" + listWorkOrderIds + ")";

var cols = [
  "column_1",
  "column_2",
  "column_3",
];

var columns = cols.join(", ");

var query = "SELECT " + columns + "  FROM table_name";
var queryData = _queryRecord("table_group", query)
var data = queryData.length > 0 ? queryData : [];

console.log(queryData);
