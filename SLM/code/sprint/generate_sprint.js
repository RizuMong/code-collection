function generateSprintCalendar(year) {
  var result = [];
  var sprintNumber = 1;

  // base start: first Monday
  var baseStartDate = getFirstMonday(year);

  while (true) {
    var startDate = new Date(baseStartDate.getTime());

    // geser sesuai sprint ke-n (pakai working days)
    startDate = addWorkingDays(startDate, (sprintNumber - 1) * 10);

    var endDate = addWorkingDays(startDate, 9); // 10 hari kerja (0-based)

    var startYear = startDate.getFullYear();
    var endYear = endDate.getFullYear();

    // skip kalau keluar tahun
    if (startYear !== year) {
      sprintNumber++;
      continue;
    }

    // stop kalau nyebrang tahun
    if (endYear !== year) {
      break;
    }

    result.push({
      sprint_year: year,
      sprint_number: sprintNumber,
      start_date: toUnix(startDate),
      end_date: toUnixEndOfDay(endDate),
      name: "SPRINT-" + year + "-" + pad(sprintNumber),
      status: "PLANNED"
    });

    sprintNumber++;
  }

  return result;
}

// first Monday
function getFirstMonday(year) {
  var date = new Date(year, 0, 1);
  var day = date.getDay();

  var diff = (day === 0 ? 1 : (8 - day)) % 7;
  date.setDate(date.getDate() + diff);

  return date;
}

// add working days (skip Sat & Sun)
function addWorkingDays(date, days) {
  var result = new Date(date.getTime());
  var added = 0;

  while (added < days) {
    result.setDate(result.getDate() + 1);

    var day = result.getDay();
    if (day !== 0 && day !== 6) { // bukan Minggu & Sabtu
      added++;
    }
  }

  return result;
}

function toUnix(date) {
  return Math.floor(date.getTime() / 1000);
}

function toUnixEndOfDay(date) {
  return Math.floor(
    new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      23, 59, 59
    ).getTime() / 1000
  );
}

function pad(num) {
  return num < 10 ? "0" + num : "" + num;
};

var sprints = generateSprintCalendar(2026);
console.log(sprints);