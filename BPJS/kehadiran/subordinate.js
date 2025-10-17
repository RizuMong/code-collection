var getDataSummary = [
  {
    day: 10,
    employee_id_text: "bq0q4IpZYnyp",
    final_clock_in: "07:00",
    final_clock_out: "16:59",
    id: "7Jyr7gBdFDVz",
    month: 10,
    schedule_in: 1759885200000, // 08:00  get jamnya aja
    schedule_out: 1750240800000, // 17:00 get jamnya aja
    shift_id: {
      id: "Z3N9lviPgACCMdBV",
      name: "Shift Weekday",
    },
    status_cuti: "NO",
    status_holiday: "NO",
    status_national_holiday: "NO",
    status_permit: "NO",
    year: 2025,
  },
];

var summary = getDataSummary[0] || {};

function getHourMinuteFromTimestamp(ts) {
  var date = new Date(ts);
  var h = ("0" + date.getHours()).slice(-2);
  var m = ("0" + date.getMinutes()).slice(-2);
  return h + ":" + m;
};

function toMinutes(timeStr) {
  if (!timeStr || timeStr === "--") return 0;
  var parts = timeStr.split(":");
  return parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
};

var scheduleIn = toMinutes(getHourMinuteFromTimestamp(summary.schedule_in));
var scheduleOut = toMinutes(getHourMinuteFromTimestamp(summary.schedule_out));
var checkIn = toMinutes(summary.final_clock_in);
var checkOut = toMinutes(summary.final_clock_out);

var timeOffStatus = "";
if (summary.status_cuti === "YES") timeOffStatus = "Cuti";
if (summary.status_permit === "YES") timeOffStatus = "Perjalanan Dinas";
if (summary.status_holiday === "YES") timeOffStatus = "Libur";
if (summary.status_national_holiday === "YES") timeOffStatus = "Libur Nasional";

var isLateCheckIn = checkIn > scheduleIn;
var isEarlyCheckOut = checkOut < scheduleOut;

var data = {
  first_check_in: summary.final_clock_in || "",
  last_check_out: summary.final_clock_out || "",
  is_late_check_in: isLateCheckIn,
  is_early_check_out: isEarlyCheckOut,
  time_off_status: timeOffStatus
};


console.log(data);


// var dataSummary = getDataSummary.length > 0 ? getDataSummary[0] : {};

// var data = {
//   first_check_in: dataSummary.final_clock_in || "",
//   last_check_out: dataSummary.final_clock_out || "",
//   is_late_check_in: false, // kalau first_check_in maka false, kalau ada dan terlambat dari schedule_in maka true
//   is_early_check_out: false, // kalau final_clock_out maka false, kalau ada dan terlambat dari schedule_out maka true
//   time_off_status: "", // kalau status_cuti = "YES" maka "Cuti", kalau status_permit = "YES" maka "Perjalanan Dinas", kalau status_holiday = "YES" maka "Libur", kalau status_national_holiday = "YES" maka "Libur Nasional", selain itu ""
// };
