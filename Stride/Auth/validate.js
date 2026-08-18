var isValidToken = true;

if (Object.keys(auth).length === 0) {
    isValidToken = false;
};

var expirationTimestampHour = getTimestamp1HourAgo();
var expirationTimestampWeekly = getTimestamp7DaysAgo();

if (type === "refresh_token") {
    if (auth.created_at < expirationTimestampWeekly) {
        isValidToken = false;
    };
}

if (type === "access_token") {
    if (auth.created_at < expirationTimestampHour) {
        isValidToken = false;
    };
};

function getTimestamp1HourAgo() {
    var now = Date.now();
    var oneHourAgo = now - 60 * 60 * 1000; // 1 jam dalam milidetik
    return new Date(oneHourAgo).toISOString();
};

function getTimestamp7DaysAgo() {
    var now = Date.now();
    var sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000; // 7 hari dalam milidetik
    return new Date(sevenDaysAgo).toISOString();
};