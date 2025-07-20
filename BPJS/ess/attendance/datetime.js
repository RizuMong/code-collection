var req = {
  body: {
    datetime: "2025-06-06T17:57:15+07:00", // 3 menit sebelum jadwal pulang
    // datetime: "2025-06-06T18:57:15+07:00", // 57 menit setelah jadwal pulang
    type: "clock_out",
  },
};

var getShift = {
  schedule_in: 1748909100000, // 09:05 WIB
  schedule_out: 1748944800000, // 18:00 WIB
};

function getMinutesOnly(timestamp) {
  var date = new Date(timestamp);
  return date.getHours() * 60 + date.getMinutes();
}

var typeAttendance = req.body.type;
var dateTime = req.body.datetime;
var dateTimestamp = dateTime ? new Date(dateTime).getTime() : null;

var status_clock_in = "no_clock_in";
var status_clock_out = "no_clock_out";

var inputDate = new Date(dateTimestamp);
var inputDateStr = inputDate.toISOString().split("T")[0];

var scheduleInTime = new Date(inputDateStr + "T09:05:00+07:00").getTime();
var scheduleOutTime = new Date(inputDateStr + "T18:00:00+07:00").getTime();

var inputMinutes = getMinutesOnly(dateTimestamp);
var scheduleInMinutes = getMinutesOnly(scheduleInTime);
var scheduleOutMinutes = getMinutesOnly(scheduleOutTime);

if (dateTimestamp !== null) {
  console.log("=== Attendance Log ===");
  console.log("Input Time: " + new Date(dateTimestamp).toLocaleString("id-ID"));
  console.log("Schedule In: " + new Date(scheduleInTime).toLocaleString("id-ID"));
  console.log("Schedule Out: " + new Date(scheduleOutTime).toLocaleString("id-ID"));
  console.log("Input Minutes: " + inputMinutes);
  console.log("Schedule In Minutes: " + scheduleInMinutes);
  console.log("Schedule Out Minutes: " + scheduleOutMinutes);
  console.log("Type: " + typeAttendance);

  // clock_in
  if (typeAttendance === "clock_in") {
    if (inputMinutes <= scheduleInMinutes) {
      status_clock_in = "clock_in";
    } 
    
    if (inputMinutes > scheduleInMinutes) {
      status_clock_in = "late_clock_in";
    }
  }

  // clock_out
  if (typeAttendance === "clock_out") {
    if (inputMinutes >= scheduleOutMinutes) {
      status_clock_out = "clock_out";
    } 
    
    if (inputMinutes < scheduleOutMinutes) {
      status_clock_out = "early_clock_out";
    }
  }
}

console.log("Status clock in: " + status_clock_in);
console.log("Status clock out: " + status_clock_out);