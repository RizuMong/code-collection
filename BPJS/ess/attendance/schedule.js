var getShift = {
  schedule_in: 1748909100000, // contoh timestamp: 09:05 WIB
  schedule_out: 1748944800000 // contoh timestamp: 18:00 WIB
};

function formatTime(timestamp) {
  var date = new Date(timestamp);
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // Tambahkan nol di depan jika hanya satu digit
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;

  return hours + ':' + minutes;
}

var scheduleInText = formatTime(getShift.schedule_in);
var scheduleOutText = formatTime(getShift.schedule_out);

console.log('Schedule In:', scheduleInTime);   // Output: Schedule In: 09:05
console.log('Schedule Out:', scheduleOutTime); // Output: Schedule Out: 18:00
