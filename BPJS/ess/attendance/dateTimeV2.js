var req = {
  body: {
    datetime: "2025-06-06T17:57:15+07:00",
    type: "clock_out"
  }
};

var getShift = {
  schedule_in: 1748909100000, // contoh timestamp: 09:05 WIB
  schedule_out: 1748944800000 // contoh timestamp: 18:00 WIB
};

// Fungsi untuk ambil total menit dari timestamp
function getMinutesOnly(timestamp) {
  var date = new Date(timestamp);
  return date.getHours() * 60 + date.getMinutes();
}

// Fungsi untuk format HH:mm:ss dari timestamp
function formatTimeFromTimestamp(timestamp) {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = date.getMinutes();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  return hours + ":" + minutes + ":00";
}

// Fungsi gabungkan tanggal dan jam + timezone ke dalam timestamp
function buildScheduleTime(dateStr, timeStr, tzOffset) {
  return new Date(dateStr + "T" + timeStr + tzOffset).getTime();
}

// Input utama
var typeAttendance = req.body.type;
var dateTime = req.body.datetime;
var dateTimestamp = dateTime ? new Date(dateTime).getTime() : null;

var status_clock_in = "no_clock_in";

var status_clock_out = "no_clock_out";

var inputDate = new Date(dateTimestamp);
var inputDateStr = inputDate.toISOString().split("T")[0];

// Ganti sesuai timezone, misalnya: "+07:00", "+09:00", "-05:00"
var timezoneOffset = "+07:00";

// Format jam dari shift (berasal dari timestamp)
var scheduleInTimeStr = formatTimeFromTimestamp(getShift.schedule_in);
var scheduleOutTimeStr = formatTimeFromTimestamp(getShift.schedule_out);

// Hitung waktu masuk & keluar berdasarkan tanggal & timezone
var scheduleInTime = buildScheduleTime(inputDateStr, scheduleInTimeStr, timezoneOffset);
var scheduleOutTime = buildScheduleTime(inputDateStr, scheduleOutTimeStr, timezoneOffset);

// Ambil menit untuk perbandingan
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

  if (typeAttendance === "clock_in") {
    if (inputMinutes <= scheduleInMinutes) {
      status_clock_in = "clock_in";
    } else {
      status_clock_in = "late_clock_in";
    }
  }

  if (typeAttendance === "clock_out") {
    if (inputMinutes >= scheduleOutMinutes) {
      status_clock_out = "clock_out";
    } else {
      status_clock_out = "early_clock_out";
    }
  }
}

console.log("Status clock in: " + status_clock_in);
console.log("Status clock out: " + status_clock_out);
