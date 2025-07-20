// var data = {
//   "year": payload.year,
//   "month_int": payload.month_int,
//   "date_end_actual": payload.date_end_actual,
//   "date_end_plan": payload.date_end_plan,
//   "date_start_plan": payload.date_start_plan,
//   "cost": payload.cost,
//   "attendance": payload.attendance,
//   "post_test": payload.post_test,
//   "score_praktik": payload.score_praktik,
//   "status_kelulusan": payload.status_kelulusan,
//   "training_hour": payload.training_hour,
//   "id_import": payload.id_import,

//   // Relation
//   "event_code": {},
//   "departement_org": {},
//   "grade": {},
//   "jobsite": {},
//   "jabatan": {},
//   "department": {},
//   "training_site": {},
//   "employee": {},
//   "instructor": {},
//   "equipment_group": {}
// };

// function _dateFormat(dateString) {
//   var parts = dateString.split("/");
//   return parts.length === 3
//     ? new Date(parts[2], parts[1] - 1, parts[0]).getTime()
//     : null;
// };

// console.log(_dateFormat("01/01/2025"));
function getMonthAbbreviation(monthNumber) {
  var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  return months[monthNumber - 1] || "Invalid Month";
}


console.log(getMonthAbbreviation(2)); 


res = {
  "organigram_ids": [
    [
      12345,
      12345
    ],
    [
      12345,
      12345
    ]
  ],
  "flow_name": [
    "Approver Flow 1",
    "Approver Flow 2"
  ],
  "flow_type": [
    "minimum",
    "order"
  ], /// order, minimum 
  "minimum_action": [
    1,
    0
  ],
  "approver_by": "by_advance_organigram",
  "flag_skip": "No"
};


// {
//   "organigram_ids": [], // list organigram users
//   "flow_name": [], // list flow names
//   "flow_type": [], /// order, minimum 
//   "minimum_action": [],
//   "approver_by": "by_advance_organigram", // default
//   "flag_skip": "No" // default
// }