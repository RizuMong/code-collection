var req = {
  body: {
    company_id: 1202,
    coordinate: "-6.2091171,106.820419",
    datetime: "2025-06-06T17:57:15+07:00",
    description: "test",
    email: "shemishempre@gmail.com",
    employee_id: "SHM0001",
    locations: {
      address: "Jalan jalan",
      branch_id: 54920,
      latitude: "-6.2091883",
      location_gps_id: -1,
      location_gps_name: "Branch TESTEDIT",
      location_setting_id: -1,
      location_setting_name: "Branch TESTEDIT",
      longitude: "106.8204898",
      radius: 80,
    },
    schedule_break_in: "12:00:00",
    schedule_break_out: "13:00:00",
    schedule_in: "09:00:00",
    schedule_out: "18:00:00",
    shift_id: 6523,
    shift_name: "OFFICE",
    source: "mobileapp",
    type: "clock_out",
    user_id: 3676235,
  },
};

var typeAttendance = req.body.type;

var final_clock_in = req.body.final_check_in;
var final_clock_out = req.body.final_clock_out;
var schedule_in = req.body.schedule_in;
var schedule_out = req.body.schedule_out;

var location_clock_in = "out_office";
var location_clock_out = "out_office";

if (typeAttendance == "clock_out") {
  //
}

if (typeAttendance == "clock_in") {
  //
};


getEmployee && getEmployee.unit_kerja_id ? getEmployee.unit_kerja_id.id : "--"
