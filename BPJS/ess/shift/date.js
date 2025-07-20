var req = {
  body: {
    effective_end_date: 1751130000000,
    effective_start_date: 1749056400000,
    employee_id: "200312525 - Aulia HI",
    employee_ids: [],
    id_shift_employee: "UK4CEQ8XgS22LJy9",
    repeat_shift_enabled: true,
    shifts: [
      {
        day: "Senin",
        office_hours_id: {
          id: "SxKR4Z1owASnIpJd",
        },
      },
      {
        day: "Selasa",
        office_hours_id: {
          id: "SxKR4Z1owASnIpJd",
        },
      },
      {
        day: "Rabu",
        office_hours_id: {
          id: "Gkdy9WTC2rvVUU0l",
        },
      },
      {
        day: "Kamis",
        office_hours_id: {
          id: "Gkdy9WTC2rvVUU0l",
        },
      },
      {
        day: "Jumat",
        office_hours_id: {
          id: "SxKR4Z1owASnIpJd",
        },
      },
      {
        day: "Sabtu",
        office_hours_id: {
          id: "SxKR4Z1owASnIpJd",
        },
      },
      {
        day: "Minggu",
        office_hours_id: {
          id: "1OBfq16On88A758t",
        },
      },
    ],
  },
};

var start_date = new Date(req.body.effective_start_date);
var end_date = new Date(req.body.effective_end_date);

if (!isNaN(start_date) && !isNaN(end_date)) {
  var diffMs = end_date - start_date;
  var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
  if (diffDays < 7) {
    return {
      error: true,
      message: "Range tanggal tidak boleh lebih dari 7 hari.",
      redirect: "",
    };
  }
}
