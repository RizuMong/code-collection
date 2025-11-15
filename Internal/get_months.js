var data = {
  months: [
    {
      month_number: 1,
      name: "January",
      working_day: 23,
    },
    {
      month_number: 2,
      name: "February",
      working_day: 20,
    },
    {
      month_number: 3,
      name: "March",
      working_day: 21,
    },
    {
      month_number: 4,
      name: "April",
      working_day: 22,
    },
    {
      month_number: 5,
      name: "May",
      working_day: 22,
    },
    {
      month_number: 6,
      name: "June",
      working_day: 21,
    },
    {
      month_number: 7,
      name: "July",
      working_day: 23,
    },
    {
      month_number: 8,
      name: "August",
      working_day: 21,
    },
    {
      month_number: 9,
      name: "September",
      working_day: 22,
    },
    {
      month_number: 10,
      name: "October",
      working_day: 23,
    },
    {
      month_number: 11,
      name: "November",
      working_day: 20,
    },
    {
      month_number: 12,
      name: "December",
      working_day: 23,
    },
  ],
};

var req = {
  month_id: {
    id: "1",
    name: "January",
  },
};

var workingDay = null;

for (var i = 0; i < data.months.length; i++) {
  if (data.months[i].name === req.month_id.name) {
    workingDay = data.months[i].working_day;
    break;
  }
}

console.log(workingDay);



// how to get working day from month_id.name in js without using library or changing the months variable using js es5 primitive
// Expected output: 23 because january has 23 working days