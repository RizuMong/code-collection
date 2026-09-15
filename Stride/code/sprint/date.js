function yearsBetween(start, end) {
    var first = new Date(start).getUTCFullYear();
    var last = new Date(end).getUTCFullYear();
    var years = [];

    for (var y = first; y <= last; y++) {
        years.push(y);
    }

    return years;
};

var start_date = 1788714000000;
var end_date = 1820544108000;

console.log((yearsBetween(start_date, end_date)));