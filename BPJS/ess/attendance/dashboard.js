function getSummary(user_id, month, year, status) {
  var query = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + user_id + " AND month = " + month + " AND year = " + year + " AND status = '" + status + "'";
  
  if (status === "all") {
    query = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + user_id + " AND month = " + month + " AND year = " + year;
  };
  
  // var total = _queryRecord("v2_kehadiran", query);
  // return total.length > 0 ? total[0].count : 0;
  return query;
};


var statusAttendanceMaps = [
  {
    "status": "all",
    "name": "Total Absen"
  },
  {
    "status": "late_clock_in",
    "name": "Telat Absen Masuk"
  },
  {
    "status": "early_clock_out",
    "name": "Pulang Cepat"
  },
  {
    "status": "no_clock_in",
    "name": "Tidak Absen Masuk"
  },
  {
    "status": "no_clock_out",
    "name": "Tidak Absen Pulang"
  }
];

var statusAttendanceLocations = [
  {
    "status": "office",
    "name": "Luar Kantor"
  },
  {
    "status": "in_office",
    "name": "Dalam Kantor"
  },
  {
    "status": "no_location",
    "name": "Tidak Ada Lokasi"
  }
];

statusAttendanceMaps.forEach(function(status) {
  console.log("Status: " + status.status + " - Description: " + status.description);
  
  console.log(getSummary("12345", 5, 2023, status));
});

