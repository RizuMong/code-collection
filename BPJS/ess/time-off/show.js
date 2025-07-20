var attendances = [
  {
    _id: "6850318a813bb71b982fb12c",
    company_talenta_id: 1202,
    coordinate: "-6.2091171,106.820419",
    created_at: 1750086026038,
    created_by: 0,
    datetime: "2025-06-16T17:57:15+07:00",
    day: 16,
    description: "test",
    error: "NO",
    final_check_in: "17:57",
    id_attendace_log: "4tfs1ZDBliD0O4DF",
    location: {
      address:
        "Jl. Jenderal Sudirman No.27, RT.10/RW.11, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10250, Indonesia",
      latitude: -6.2092392,
      longitude: 106.8204807,
    },
    message: "",
    month: 6,
    schedule_break_in: "12:00:00",
    schedule_break_out: "13:00:00",
    shift_talenta_id: 6523,
    source: "mobileapp",
    talenta_shift_name: "OFFICE",
    type: "clock_in",
    updated_at: 1750086026145,
    updated_by: 0,
    user_id: 3700395,
    year: 2025,
  },
];

var shift = {
  date: 1750006800000,
  schedule_in: 1749952800000,
  schedule_out: 1749985200000,
  shift_name: "Shift Weekday",
};

for (var i = 0; i < attendances.length; i++) {
  attendances[i].schedule_in = shift.schedule_in;
  attendances[i].date = shift.date;
  attendances[i].schedule_out = shift.schedule_out;
  attendances[i].shift_name = shift.shift_name;

  attendances[i].type = attendances[i].type === "clock_in" ? "Clock In" : attendances[i].type === "clock_out" ? "Clock Out" : "";
};

console.log(attendances);

// Output
// type: "clock_in" maka "Clock In"
// type: "clock_out" maka "Clock Out"
