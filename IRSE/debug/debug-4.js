var roomSeats = [
  {
    seat_ids: [
      {
        id: "rvr_qBuNg",
        name: "001",
      },
      {
        id: "F3WuqfuNR",
        name: "002",
      },
      {
        id: "Rbdu3BuHR",
        name: "003",
      },
      {
        id: "X8Ju3fuNg",
        name: "004",
      },
      {
        id: "hqyX3BXNg",
        name: "005",
      },
    ],
  },
  {
    seat_ids: [
      {
        id: "jkrr3BuNg",
        name: "009",
      },
    ],
  },
  {
    seat_ids: [
      {
        id: "FNz3qfuNg",
        name: "010",
      },
    ],
  },
];

var allSeats = [
  {
    code: "009",
    id: "jkrr3BuNg",
    id_seat: "jkrr3BuNg",
    updated_at: 1756178799222,
    updated_by: 186076,
  },
  {
    code: "100",
    id: "jkrr3BuNg",
    id_seat: "jkrr3BuNg",
    updated_at: 1756178799222,
    updated_by: 186076,
  },
];

// Expect result
var roomSeatMap = {};
var i, j;
for (i = 0; i < roomSeats.length; i++) {
  for (j = 0; j < roomSeats[i].seat_ids.length; j++) {
    var seatInRoom = roomSeats[i].seat_ids[j];
    roomSeatMap[seatInRoom.id] = true;
  }
}

var matchedSeats = [];
for (i = 0; i < allSeats.length; i++) {
  var seatInAll = allSeats[i];
  if (roomSeatMap[seatInAll.id]) {
    matchedSeats.push({ name: seatInAll.code, id: seatInAll.id });
  }
}

var latestSeatMap = {};
for (i = 0; i < matchedSeats.length; i++) {
  latestSeatMap[matchedSeats[i].id] = matchedSeats[i];
}

var finalSeats = [];
for (var key in latestSeatMap) {
  if (latestSeatMap.hasOwnProperty(key)) {
    finalSeats.push(latestSeatMap[key]);
  }
}

console.log(finalSeats);
