var req = {
  body: {
    company_id: 1202,
    coordinate: "-6.2091171,106.820419",
    datetime: "2025-06-02T17:57:15+07:00",
    description: "test",
    email: "shemishempre@gmail.com",
    employee_id: "SHM0001",
    final_check_in: "09:45:40",
    final_check_out: "18:00:00",
    location: {
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
    type: "clock_in",
    user_id: 3665434,
  },
};

var getShift = {
  break_id: null,
  break_in: 1748408400000,
  break_out: 1748325600000,
  company_id: 27414,
  created_at: 1748354968192,
  created_by: 182663,
  id: "1OBfq16On88A758t",
  id_shift_list: "1OBfq16On88A758t",
  id_shift_talenta: 363656,
  is_archive: false,
  kode: "aaa",
  name: "Test",
  notes: "",
  overtime_in: 1748343600000,
  overtime_out: 1748358000000,
  pola_kerja: "",
  schedule_in: 1748304000000,
  schedule_out: 1748343600000,
  tipe_cuti: {
    id: "",
    name: "",
  },
  updated_at: 1748593578969,
  updated_by: 187329,
};

var typeAttendance = req.body.type;

var final_clock_in = req.body.final_check_in;
var final_clock_out = req.body.final_clock_out;
var schedule_in = req.body.schedule_in;
var schedule_out = req.body.schedule_out;

if (typeAttendance == "clock_out") {
  //
}

if (typeAttendance == "clock_in") {
  //
}
