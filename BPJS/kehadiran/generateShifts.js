var req = {
  effective_end_date: 1751216400000,
  effective_start_date: 1750698000000,
  employee_ids: [
    {
      id: "aCGVycvJOTxNtUmW",
      name: "100790288 - Rizal Resign",
    },
  ],
  shift_friday: {
    id: "Z3N9lviPgACCMdBV",
    name: "Shift Weekday Baru",
  },
  shift_monday: {
    id: "Z3N9lviPgACCMdBV",
    name: "Shift Weekday Baru",
  },
  shift_saturday: {
    id: "Z3N9lviPgACCMdBV",
    name: "Shift Weekday Baru",
  },
  shift_sunday: {
    id: "HZljhksjj67rVaG",
    name: "Shift Libur Sabtu Minggu 20225",
  },
  shift_thursday: {
    id: "Z3N9lviPgACCMdBV",
    name: "Shift Weekday Baru",
  },
  shift_tuesday: {
    id: "Z3N9lviPgACCMdBV",
    name: "Shift Weekday Baru",
  },
  shift_update_mode: "Perpanjang Jadwal",
  shift_wednesday: {
    id: "Z3N9lviPgACCMdBV",
    name: "Shift Weekday Baru",
  },
};

var employee = req.employee_ids;
var shiftList = [];
var summaryShifts = [];

var start = new Date(req.effective_start_date);
var end = new Date(req.effective_end_date);

var item = {
  id: "aCGVycvJOTxNtUmW",
  name: "100790288 - Rizal Resign",
};

var dayNames = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

for (
  var date = new Date(start);
  date <= end;
  date.setDate(date.getDate() + 1)
) {
  var dayIndex = date.getDay(); // 0 (Minggu) s.d. 6 (Sabtu)
  var dayName = dayNames[dayIndex];

  var shiftKey = [
    "shift_sunday",
    "shift_monday",
    "shift_tuesday",
    "shift_wednesday",
    "shift_thursday",
    "shift_friday",
    "shift_saturday",
  ][dayIndex];

  var shift = req[shiftKey];

  if (shift) {
    // var anotherInfo  = _hitFunction("get_info_employee", {
    //     "id_employee": item.id,
    //     "shift": shift
    // });

    console.log(shift);
    

    summaryShifts.push({
      employee_id: item,
      employee_id_text: item.id,
      shift_id: shift,
      date: date.getTime(),
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      day_name: dayName,
      status_clock_in: "no_clock_in",
      status_clock_out: "no_clock_out",
      delete_status: "NO",
      status_cuti: "NO",
      status_holiday: "NO",
      status_overtime: "NO",
      status_permit: "NO",
      status_overtime: "NO",
      final_clock_in: "--",
      final_clock_in: "--",
      desc_cuti: "--",
      desc_holiday: "--",
      desc_overtime: "--",
      desc_permit: "--",
      // "talenta_company_id": anotherInfo.talenta_company_id,
      // "talenta_user_id": anotherInfo.talenta_user_id,
      // "location": anotherInfo.location,
      // "radius": anotherInfo.radius,
      // "schedule_in": anotherInfo.schedule_in,
      // "schedule_out": anotherInfo.schedule_out,
    });
  }
}

function _log(msg) {
  console.log(msg);
}

// _log(summaryShifts);
