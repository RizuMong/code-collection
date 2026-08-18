// var req = {
//     body: {
//         "status_id": {},
//         "estimate_end_date": 1782432000,
//         "estimate_man_hour": 204,
//         "estimate_start_date": 1780272000,
//     }
// };

// var status_id = (req && req.body && req.body.status_id && req.body.status_id.id) ? req.body.status_id : {};
// var estimate_end_date = (req && req.body && req.body.estimate_end_date) ? req.body.estimate_end_date : 0;

// if (!status_id.id) {
//     var today = new Date();
//     today.setHours(0, 0, 0, 0);
//     var endDate = new Date(estimate_end_date * 1000);
//     endDate.setHours(0, 0, 0, 0);

//     status_id = (endDate >= today)
//         ? {
//             id: "XXI",
//             name: "On Track"
//         }
//         : {
//             id: "XXD",
//             name: "Delayed"
//         };
// };

// console.log(status_id);

// // kalau gak ada datanya dan end_date nya masih masuk hari ini gak lebih maka status nya On Track
// // jika status nya kosong dan end date nya udah lewat hari ini maka Delayed

// // kalau status_id ada datanya dari req maka langsung lempar aja status nya jangan ada validasi


var estimate_man_hour = 264;
var mandays = estimate_man_hour / 8;

mandays = Number(mandays.toFixed(2));

console.log(mandays);