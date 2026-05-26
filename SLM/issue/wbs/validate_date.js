var req = {
    "end_date": 1782777600,
    "milestone": {
        "id": "EwG5FeAhyxku",
        "name": "Development"
    },
    "project": {
        "id": "aCmE9R3tyNH7",
        "name": "Tadika M"
    },
    "start_date": 1780272000
};

var status = "On Track";
var now = Math.floor(Date.now() / 1000);

if (now > req.end_date) {
    status = "Delayed";
};

console.log(status);

// 1. kalau date actual start date dan end date nya masih belum lebih dari date maka status nya "On Track"
// 2. kalau lebih maka status nya "Delayed"