// var listWorkOrderIds =  "'EwME8Bvu9Nxyhlat', 'dajdPOXagPvb46hl', 'bqDbrMQTo2duZq8A'"
// var queryData = "SELECT request_number FROM t_work_order WHERE id_work_order IN (" + listWorkOrderIds + ")";

// var cols = [
//   "column_1",
//   "column_2",
//   "column_3",
// ];

// var columns = cols.join(", ");

// var query = "SELECT " + columns + "  FROM table_name";
// var queryData = _queryRecord("table_group", query)
// var data = queryData.length > 0 ? queryData : [];

// console.log(queryData);

var data = [
 {
                "_id": "6847b2e6813bb71b98774870",
                "email": "fatkur.rizal@mekari.com",
                "full_name": "fatkur rizal rochmadian putra",
                "id_employee": "7JjKJAQqyvV5dgd7",
                "npk": "100462510"
            }
]

var userIds = [];

function getValue(val) {
  return (val !== undefined && val !== null) ? val : "--";
};

var employee = (data && data.length > 0) ? data[0] : {};

userIds.push({
  "user_id": getValue(employee.talenta_user_id),
  "email": getValue(employee.email),
  "employee_name": getValue(employee.full_name),
  "employee_id": getValue(employee.id_employee),
  "npk": getValue(employee.npk)
});

console.log(userIds);