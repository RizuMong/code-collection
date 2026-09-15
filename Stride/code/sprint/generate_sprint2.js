function generateSprintCalendar(year, lastEnd) {
    var result = [];
    var sprintNumber = 1;

    var startDate;

    // Tentukan start awal
    if (typeof lastEnd === "number" && lastEnd > 0) {
        startDate = getNextMonday(fromMillis(lastEnd));
    } else {
        startDate = getFirstMonday(year);
    }

    while (true) {
        var endDate = addWorkingDays(startDate, 9);

        var startYear = startDate.getFullYear();

        // Skip kalau belum masuk tahun target
        if (startYear < year) {
            startDate = getNextMonday(endDate);
            continue;
        }

        // hanya stop kalau start sudah lewat tahun
        if (startYear > year) {
            break;
        }

        result.push({
            sprint_year: year,
            sprint_number: sprintNumber,
            start_date: toMillis(startDate),
            end_date: toMillisEndOfDay(endDate),
            name: "SPRINT-" + year + "-" + pad(sprintNumber),
            status: "PLANNED"
        });

        // Next sprint start
        startDate = getNextMonday(endDate);

        sprintNumber++;
    }

    return result;
}

// helpers
function fromMillis(ms) {
    return new Date(ms);
}

function getNextMonday(date) {
    var result = new Date(date.getTime());
    result.setDate(result.getDate() + 1);

    while (result.getDay() !== 1) {
        result.setDate(result.getDate() + 1);
    }

    return result;
}

function getFirstMonday(year) {
    var date = new Date(year, 0, 1);
    var day = date.getDay();

    var diff = (day === 0 ? 1 : (8 - day)) % 7;
    date.setDate(date.getDate() + diff);

    return date;
}

function addWorkingDays(date, days) {
    var result = new Date(date.getTime());
    var added = 0;

    while (added < days) {
        result.setDate(result.getDate() + 1);

        var day = result.getDay();
        if (day !== 0 && day !== 6) {
            added++;
        }
    }

    return result;
}

function toMillis(date) {
    return date.getTime();
}

function toMillisEndOfDay(date) {
    return new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        23, 59, 59, 999
    ).getTime();
}

function pad(num) {
    return num < 10 ? "0" + num : "" + num;
};

var year = 2027;
var sprint_year = {
    "end_date": 1799427599,
};


var lastEnd = sprint_year.end_date;
var sprints = generateSprintCalendar(year, lastEnd);

console.log(sprints);