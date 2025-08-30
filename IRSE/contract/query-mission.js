// // var columns = [
// //     "mission_id",
// //     "point",
// //     "status",
// //     "created_at as start_date",
// //     "updated_at as end_date"
// // ];

// // var cols = columns.join(", ");

// // var user_id = "123"; // Replace with actual user ID
// // var event_id = "123"; // Replace with actual event ID

// // var query = "SELECT " + cols + " FROM t_participant_activity WHERE user_id = '" + user_id + "' AND event_id_text = '" + event_id + "'";

// // console.log(query);

// var getMissionByActivities = [
//   {
//     id_mission: "UKQDvSZL7WjD",
//     name: "Survey Form",
//     status: "COMPLETED",
//   },
//   {
//     id_mission: "23434324",
//     name: "Survey Form",
//     status: "COMPLETED",
//   },
//   {
//     id_mission: "342432",
//     name: "Survey Form",
//     status: "COMPLETED",
//   },
// ];

// var missionIds = getMissionByActivities.map(function (activity) {
//   return "'" + activity.id_mission + "'";
// }).join(", ");

// console.log(missionIds);

var missions = [
  {
    id: "0dOAUjzTmtQx",
    name: "LOGIN EVENT",
    point: 2,
    status: "COMPLETED",
  },
  {
    id: "0dOAUjzTmtQx",
    name: "LOGIN EVENT",
    point: 2,
    status: "INCOMPLETE",
  },
];

var statusMission = "INCOMPLETE";
if (missions.length > 0) {
  statusMission = "COMPLETED";
  for (var i = 0; i < missions.length; i++) {
    if (missions[i].status !== "COMPLETED") {
      statusMission = "INCOMPLETE";
      break;
    }
  }
}

console.log(statusMission);
