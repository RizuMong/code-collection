function _log(msg) {
    console.log(msg);
};

var end_date = 1777654799
var start_date = 1776643200


// working hours
var working_hours = 0;

var start = new Date(start_date);
var end = new Date(end_date);
start.setHours(0, 0, 0, 0);
end.setHours(0, 0, 0, 0);

while (start <= end) {
    var day = start.getDay(); // 0 = Minggu, 6 = Sabtu

    if (day !== 0 && day !== 6) {
        working_hours += 8;
    }

    start.setDate(start.getDate() + 1);
};

_log({
    start: start,
    end: end,
    working_hours: working_hours
});