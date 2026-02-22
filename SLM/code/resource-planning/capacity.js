var req = {
    start_date: 1769942503000,
    end_date: 1770535295000
};

var weekend_manhours = 0;

var start = new Date(req.start_date);
var end = new Date(req.end_date);

// normalize ke jam 00:00:00 biar aman
start.setHours(0,0,0,0);
end.setHours(0,0,0,0);

while (start <= end) {
  var day = start.getDay(); // 0 = Minggu, 6 = Sabtu

  if (day === 0 || day === 6) {
    weekend_manhours += 8;
  }

  start.setDate(start.getDate() + 1);
};

var working_hours = 0;

var start = new Date(req.start_date);
var end = new Date(req.end_date);

// normalize biar aman
start.setHours(0,0,0,0);
end.setHours(0,0,0,0);

while (start <= end) {
  var day = start.getDay(); // 0 = Minggu, 6 = Sabtu

  if (day !== 0 && day !== 6) {
    working_hours += 8;
  }

  start.setDate(start.getDate() + 1);
}


console.log({
    weekend_manhours: weekend_manhours,
    working_hours: working_hours
});