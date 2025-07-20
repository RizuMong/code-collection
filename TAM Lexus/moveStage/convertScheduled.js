var payload = {
  "body": {
    additional_fields: [
      {
        "id": 14709237,
        "name": "jam_service",
        "value": "4357835",
        "value_name": "12:00" // Jam yang akan diambil
      }
    ]
  }
};

var payloadAPI = {
  unique_ticket_id: 55729027,
  schedule: "17/09/2024",
  ldms_reservation_id: "12345"
};

function convertToISODate(schedule, jamService) {
  if (!isNaN(Date.parse(schedule))) {
    return schedule;
  }

  var parts = schedule.split("/");
  if (parts.length === 3) {
    var day = parts[0];
    var month = parts[1] - 1;
    var year = parts[2];
    var date = new Date(year, month, day);

    // Jam Service
    var currentTime = new Date();
    var timeParts = jamService.split(":");
    var hour = parseInt(timeParts[0], 10);
    var minute = parseInt(timeParts[1], 10);

    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(currentTime.getSeconds());
    date.setMilliseconds(currentTime.getMilliseconds());

    // Set GMT +7
    var offset = 420 * 60 * 1000;
    var gmt7Time = new Date(date.getTime() + offset);

    // Format ISO GMT +7
    var isoString = gmt7Time
      .toISOString()
      .replace("T", " ")
      .replace("Z", " +0700");

    return isoString;
  }
}

// Ambil jam_service dari payload
var jamService = payload.body.additional_fields[0].value_name;

console.log(convertToISODate(payloadAPI.schedule, jamService));
