// weekend manhours
var weekend_manhours = 0;

var start = new Date(start_date);
var end = new Date(end_date);
start.setHours(0, 0, 0, 0);
end.setHours(0, 0, 0, 0);

while (start <= end) {
  var day = start.getDay(); // 0 = Minggu, 6 = Sabtu

  if (day === 0 || day === 6) {
    weekend_manhours += 8;
  }

  start.setDate(start.getDate() + 1);
};

  // var capacity_manhours = working_hours - weekend_manhours - holiday_manhours - leave_manhours;