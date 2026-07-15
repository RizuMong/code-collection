var start_date = 1777482000000
var end_date = 1780246799999

var holiday_manhours = 24


// Calculate Working Hours
var working_hours = 0;

var start = new Date(start_date);
var end = new Date(end_date);

start.setHours(0, 0, 0, 0);
end.setHours(0, 0, 0, 0);

while (start <= end) {
  var day = start.getDay();

  if (day !== 0 && day !== 6) {
    working_hours += 8;
  }

  start.setDate(start.getDate() + 1);
}

var base_capacity = working_hours - holiday_manhours;

console.log({
holiday_manhours: holiday_manhours,
  working_hours: working_hours,
  base_capacity: base_capacity
});