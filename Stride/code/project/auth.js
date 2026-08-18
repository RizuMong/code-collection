var auth = {
    "company_id": 28208,
    "created_at": 1785923948404,
    "created_by": 0,
    "id": "mizmYD7xj3jG",
    "ids": "mizmYD7xj3jG",
    "updated_at": 1785923948404,
    "updated_by": 0,
    "user_id": "eVM5H2X6wlr8"
};

var type = "access_token";
var isValidToken = true;

if (Object.keys(auth).length === 0) {
  isValidToken = false;
};

var expirationTimestampDay = getTimestamp1DayAgo(); // ganti ke 15 menit
var expirationTimestampWeekly = getTimestamp7DaysAgo(); // tetep 7 hari karena buat refresh token

if (type === "refresh_token") {
  if (auth.created_at < expirationTimestampWeekly) {
    isValidToken = false;
  };
}

if (type === "access_token") {
  if (auth.created_at < expirationTimestampDay) {
    isValidToken = false;
  };
};

function getTimestamp1DayAgo() {
  var now = Date.now();
  var oneDayAgo = now - 24 * 60 * 60 * 1000; // 1 hari dalam milidetik
  return new Date(oneDayAgo).toISOString();
}

function getTimestamp7DaysAgo() {
  var now = Date.now();
  var sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000; // 7 hari dalam milidetik
  return new Date(sevenDaysAgo).toISOString();
};