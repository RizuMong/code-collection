function timestampToDateTime(timestampInput) {
  var numericTimestamp = Number(timestampInput);

  if (
    timestampInput === null ||
    typeof timestampInput === "undefined" ||
    isNaN(numericTimestamp)
  ) {
    return null;
  }

  var date = new Date(numericTimestamp);

  if (isNaN(date.getTime())) {
    return null;
  }

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  var formattedDay = (day < 10 ? "0" : "") + day;
  var formattedMonth = (month < 10 ? "0" : "") + month;
  var formattedHours = (hours < 10 ? "0" : "") + hours;
  var formattedMinutes = (minutes < 10 ? "0" : "") + minutes;
  var formattedSeconds = (seconds < 10 ? "0" : "") + seconds;

  return (
    formattedDay +
    "-" +
    formattedMonth +
    "-" +
    year +
    " " +
    formattedHours +
    ":" +
    formattedMinutes +
    ":" +
    formattedSeconds
  );
};

console.log(timestampToDateTime(Date.now()));

