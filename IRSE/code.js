var scheduleList = [
  {
    _id: 1753692480000,
    conference_id: {
      id: "qT7LI1K3t14A",
      name: "Conference ",
    },
    conference_id_text: "qT7LI1K3t14A",
    date_end: 1753692480000,
    date_start: 1753692480000,
    name: "Develop IRSE Web",
    event_id: {
      id: "58eNVJWQgZeF",
      name: "IRSE 2025",
    },
    event_id_text: "58eNVJWQgZeF",
    id_event: "fUpIsUU9iWXv",
    is_conference: true,
  },
  {
    _id: 1753714800000,
    conference_id: {
      id: "qT7LI1K3t14A",
      name: "Conference ",
    },
    conference_id_text: "qT7LI1K3t14A",
    name: "Develop IRSE Web",
    date_end: 1753711200000,
    date_start: 1753714800000,
    event_id: {
      id: "58eNVJWQgZeF",
      name: "IRSE 2025",
    },
    event_id_text: "58eNVJWQgZeF",
    id_event: "6XZh4nUghxhh",
    is_conference: true,
  },
];

function _log(msg) {
  console.log(msg);
}

var groupedData = [];
var i;

var monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (i = 0; i < scheduleList.length; i++) {
  var item = scheduleList[i];

  var start = new Date(item.date_start);
  var end = new Date(item.date_end);

  var startYear = start.getFullYear();
  var startMonth = ("0" + (start.getMonth() + 1)).slice(-2);
  var startDay = ("0" + start.getDate()).slice(-2);
  var startDateStr = startYear + "-" + startMonth + "-" + startDay;

  var endYear = end.getFullYear();
  var endMonth = ("0" + (end.getMonth() + 1)).slice(-2);
  var endDay = ("0" + end.getDate()).slice(-2);
  var endDateStr = endYear + "-" + endMonth + "-" + endDay;

  if (startDateStr === endDateStr) {
    var formattedDay =
      start.getDate() +
      " " +
      monthNames[start.getMonth()] +
      " " +
      start.getFullYear();
    item.day_date = formattedDay;
    groupedData.push(item);
  }
}

_log(groupedData);
