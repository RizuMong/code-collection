// function getDatePartsInRange(startTimestamp, endTimestamp) {
//   var result = {
//       day: [],
//       month: [],
//       year: []
//   };

//   var currentDate = new Date(startTimestamp);
//   var endDate = new Date(endTimestamp);

//   while (currentDate <= endDate) {
//       var day = currentDate.getDate();
//       var month = currentDate.getMonth() + 1;
//       var year = currentDate.getFullYear();

//       if (result.day.indexOf(day) === -1) {
//           result.day.push(day);
//       }
//       if (result.month.indexOf(month) === -1) {
//           result.month.push(month);
//       }
//       if (result.year.indexOf(year) === -1) {
//           result.year.push(year);
//       }

//       currentDate.setDate(currentDate.getDate() + 1);
//   }

//   return result;
// };

var req = {
  attachments: [
    {
      name: "686f7e5fa0ac9-Screenshot_442.png",
      url: "https://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/686f7e5fa0ac9-Screenshot_442.png",
    },
  ],
  attendance_date: 1752080400000,
  check_in: 1752112800000,
  check_out: 1752145200000,
  company_id: 27414,
  created_at: 1752137389929,
  created_by: 178566,
  flow_status: "draft",
  id: "Cmk1Vs0fZq7vSCNI",
  id_attendance_change: "Cmk1Vs0fZq7vSCNI",
  note: "Keterangan ",
  updated_at: 1752137389929,
  updated_by: 178566,
  work_location_type: "WFO",
  workflow_id: "pengajuan_perubahan_absensi",
};

function _log(msg) {
  console.log(msg);
}

var check = new Date(req.check_in); // get salah satu karena sama aja, cuman ambil date
var day = check.getDate();
var month = check.getMonth() + 1;
var year = check.getFullYear();

var final_check_in = "";
var final_check_out = "";

if (req.check_in) {
  var checkInDate = new Date(req.check_in);
  var hours = checkInDate.getHours();
  var minutes = checkInDate.getMinutes();
  var hh = hours < 10 ? "0" + hours : "" + hours;
  var mm = minutes < 10 ? "0" + minutes : "" + minutes;
  final_check_in = hh + ":" + mm;
};

if (req.check_out) {
  var checkOutDate = new Date(req.check_out);
  var hours = checkOutDate.getHours();
  var minutes = checkOutDate.getMinutes();
  var hh = hours < 10 ? "0" + hours : "" + hours;
  var mm = minutes < 10 ? "0" + minutes : "" + minutes;
  final_check_out = hh + ":" + mm;
};

_log({
  day: day,
  month: month,
  year: year,
  final_check_in: final_check_in,
  final_check_out: final_check_out,
});
