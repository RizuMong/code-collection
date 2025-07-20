const data = [
  {
    mapping: "RAB",
    project_id: "17061",
    nilai: 5000,
  },
  {
    mapping: "RAB",
    project_id: "17725",
    nilai: 6000,
  },
  {
    mapping: "RAB",
    project_id: "17725",
    project_name: "DKT16-104",
    nilai: 10000,
  },
  {
    mapping: "SAP",
    project_id: "17723",
    project_name: "DKT16-1022",
    nilai: 135000,
  },
];

var summary = [];

// data.forEach(function (item) {
//   var existing = summary.find(function (project) {
//     return project.Mapping === item.mapping;
//   });

//   if (existing) {
//     existing.Total += item.nilai;
//     existing.Total_Project += 1;
//   } else {
//     summary.push({
//       Mapping: item.mapping,
//       Total_Project: 1,
//       Total: item.nilai,
//     });
//   }
// });



console.log(summary);

// Expected Result:
// {
//   “Mapping” : “RAB”,
//   “Total_Project” : 3 ,
//   “Total”: 21000
// },
// {
//   “Mapping” : “SAP”,
//   “Total_Project” : 1 ,
//   “Total”: 135000
// }
