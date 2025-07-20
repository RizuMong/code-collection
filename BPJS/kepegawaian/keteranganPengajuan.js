var req = {
  body: {
    effective_start_date: 1750698000000,
    effective_end_date: 1751216400000,
    employee_ids: [
      {
        id: "aCGVycvJOTxNtUmW",
        name: "100790288 - Rizal Resign",
      },
    ],
  },
};

var getShiftActive = [
  {
    company_id: 27414,
    created_at: 1750757108530,
    created_by: 178566,
    effective_start_date: 1750698000000,
    effective_end_date: 1751268467000,
    // effective_end_date: 1767114000000,
    employee_id_text: "aCGVycvJOTxNtUmW",
    employee_name: "100790288 - Rizal Resign",
    id: "hfqSqHl3k4oHBOGH",
    id_shift_employee: "hfqSqHl3k4oHBOGH",
    shifts: [
      {
        id: "363656",
        name: "Shift null",
      },
    ],
    updated_at: 1750757108530,
    updated_by: 178566,
  },
];

var errors = [];

// Ambil daftar employee ID yang memiliki shift aktif
var activeShiftEmployeeIds = [];
for (var i = 0; i < getShiftActive.length; i++) {
  activeShiftEmployeeIds.push(getShiftActive[i].employee_id_text);
}

// 1. Validasi: cek karyawan di request yang tidak punya shift aktif
var employeesWithoutActiveShift = [];
for (var j = 0; j < req.body.employee_ids.length; j++) {
  var requestedEmployee = req.body.employee_ids[j];
  var isFound = false;

  for (var k = 0; k < activeShiftEmployeeIds.length; k++) {
    if (requestedEmployee.id === activeShiftEmployeeIds[k]) {
      isFound = true;
      break;
    }
  }

  if (!isFound) {
    employeesWithoutActiveShift.push(requestedEmployee.name);
  }
}

if (employeesWithoutActiveShift.length > 0) {
  errors.push(
    "Karyawan berikut belum Aktivasi: " + employeesWithoutActiveShift.join(", ")
  );
}

// 2. Validasi: cek jika tanggal effective tidak sesuai untuk karyawan yang sama
for (var m = 0; m < getShiftActive.length; m++) {
  var activeShift = getShiftActive[m];

  for (var n = 0; n < req.body.employee_ids.length; n++) {
    var requestedEmp = req.body.employee_ids[n];

    if (activeShift.employee_id_text === requestedEmp.id) {
      var requestStart = req.body.effective_start_date;
      var requestEnd = req.body.effective_end_date;

      var shiftStart = activeShift.effective_start_date;
      var shiftEnd = activeShift.effective_end_date;

      var isStartInRange = requestStart >= shiftStart;
      var isEndInRange = requestEnd <= shiftEnd;

      if (!isStartInRange || !isEndInRange) {
        errors.push(
          "Tanggal efektif shift untuk " +
            requestedEmp.name +
            " berada di luar jangkauan tanggal yang diminta."
        );
      }
    }
  }
}

console.log(errors);
