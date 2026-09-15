var start_date = 1789797599000;
var end_date = 1821333599000;

function toMillis(ts) {
    var abs = Math.abs(ts);

    if (abs >= 1e14) return ts / 1000;  // mikrodetik
    if (abs >= 1e11) return ts;         // milidetik
    return ts * 1000;                   // detik
}

function yearsBetween(start, end) {
    var first = new Date(toMillis(start)).getUTCFullYear();
    var last = new Date(toMillis(end)).getUTCFullYear();

    if (first > last) { var t = first; first = last; last = t; }

    var years = [];
    for (var y = first; y <= last; y++) years.push(y);
    return years;
}

console.log(yearsBetween(start_date, end_date));