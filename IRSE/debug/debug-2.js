// var getMission = {
//     "snapshot_point": 75,
// }

// var totalMission = 10;
// var totalLuckyDraw = 0;
// var missionProgress = 1;
// var totalPoint = getMission && getMission.snapshot_point ? getMission.snapshot_point : 0;

// if (totalPoint >= 50 && totalPoint <= 74) {
//     totalLuckyDraw = 1;
// };

// if (totalPoint >= 75 && totalPoint <= 99) {
//     totalLuckyDraw = 2;
// };

// if (totalPoint >= 100) {
//     totalLuckyDraw = 3;
// };

// var dataProgres = {
//     "total_point": getMission && getMission.snapshot_point ? getMission.snapshot_point : 0,
//     "total_lucky_draw_ticket": totalLuckyDraw,
//     "mission_progress": missionProgress,
//     "total_mission": totalMission
// };

// console.log(dataProgres);

var getData = [
  {
    event_id: "N2E1Q5jzxXG0",
    id_conference: "eVbYscI6plmZ",
    name: "",
  },
  {
    event_id: "xDNqungoKCH",
    id_conference: "QR6zVznAN46y",
    name: "Testing",
  },
    {
    event_id: "xDNqungoKCH",
    id_conference: "QR6zVznAN46y",
    name: "Testing",
  },
];

var uniqueData = [];
var seen = {};

for (var i = 0; i < getData.length; i++) {
  var item = getData[i];
  var key = item.event_id + "_" + item.id_conference;
  if (!seen[key] && item.name) {
    uniqueData.push(item);
    seen[key] = true;
  }
}

console.log(uniqueData);

