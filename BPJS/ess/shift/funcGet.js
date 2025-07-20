var req = {
  diffDays: 7,
  id: "oP8V648v1nMnlwcd",
};

var shiftEmployee = {
  shifts: [
    {
      day: "Senin",
      office_hours_id: {
        id: "1OBfq16On88A758t",
        name: "aaa",
      },
    },
    {
      day: "Selasa",
      office_hours_id: {
        id: "1OBfq16On88A758t",
        name: "aaa",
      },
    },
    {
      day: "Rabu",
      office_hours_id: {
        id: "1OBfq16On88A758t",
        name: "aaa",
      },
    },
    {
      day: "Kamis",
      office_hours_id: {
        id: "1OBfq16On88A758t",
        name: "aaa",
      },
    },
    {
      day: "Jumat",
      office_hours_id: {
        id: "1OBfq16On88A758t",
        name: "aaa",
      },
    },
    {
      day: "Sabtu",
      office_hours_id: {
        id: "1OBfq16On88A758t",
        name: "aaa",
      },
    },
    {
      day: "Minggu",
      office_hours_id: {
        id: "1OBfq16On88A758t",
        name: "aaa",
      },
    },
  ],
  updated_at: 1748850836507,
  updated_by: 187329,
};

var diffDays = req.diffDays;
var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
var result = [];
// var maxDays = diffDays > 7 ? 7 : diffDays;
var maxDays = 7;

for (var i = 0; i < maxDays; i++) {
  result.push({
    day: days[i % 7], // putar ulang jika diffDays > 7
    shift: shiftEmployee.shifts[i % 7].office_hours_id, // putar ulang jika diffDays > 7
    // shift2: shiftList,
  });
}

console.log(result);

// Output:
// [
//   { day: 'Senin', shift: { office_hours_id: [Object] } },
// ]
