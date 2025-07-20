req.data.forEach(function (item) {
  if (item.user_id == "--") {
      summary.push({
          "total_absen": 0, // count all absence
          "terlambat_masuk": 0, // late_clock_in
          "pulang_cepat": 0, // early_clock_out
          "tidak_absen_masuk": 0, // no_clock_in
          "tidak_absen_pulang": 0, // no_clock_out
          "datang_lebih_awal": 0,  // early_check_in
          "hadir": 0, // present
          "hadir_di_hari_libur": 0, // present_on_holiday
          "tidak_ada_kabar": 0, // absen yang tidak ada data check in dan check out
          "hari_libur": 0, // holiday
          "hari_libur_nasional": 0, // national_holiday
          "report_id": req.report_id,
          "employee_id": item.employee_id,
          "employee_name": item.employee_name,
          "npk": item.npk,
          "note": "Data User ID tidak ditemukan, mohon periksa kembali"
      });
  };

  if (item.user_id !== "--") {
      var query1 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND delete_status = 'NO'";
      var count1 = _queryRecord("v2_kehadiran", query1);

      var query2 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_clock_in = 'late_clock_in' AND delete_status = 'NO'";
      var count2 = _queryRecord("v2_kehadiran", query2);

      var query3 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_clock_out = 'early_clock_out' AND delete_status = 'NO'";
      var count3 = _queryRecord("v2_kehadiran", query3);

      var query4 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_clock_in = 'no_clock_in' AND delete_status = 'NO'";
      var count4 = _queryRecord("v2_kehadiran", query4);

      var query5 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_clock_out = 'no_clock_out' AND delete_status = 'NO'";
      var count5 = _queryRecord("v2_kehadiran", query5);

      var query6 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_clock_in = 'early_check_in' AND delete_status = 'NO'";
      var count6 = _queryRecord("v2_kehadiran", query6);

      var query7 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_clock_in = 'clock_in' AND status_clock_out = 'clock_out' AND delete_status = 'NO'";
      var count7 = _queryRecord("v2_kehadiran", query7);

      var query8 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND location_clock_in = 'clock_in_on_holiday' AND location_clock_out = 'clock_out_on_holiday' AND delete_status = 'NO'";
      var count8 = _queryRecord("v2_kehadiran", query8);

      var query9 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_clock_in = 'no_clock_in' AND status_clock_out = 'no_clock_out' AND delete_status = 'NO'";
      var count9 = _queryRecord("v2_kehadiran", query9);

      var query10 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_holiday = 'YES' AND delete_status = 'NO'";
      var count10 = _queryRecord("v2_kehadiran", query10);

      var query11 = "SELECT COUNT(1) as count FROM t_attendance_summary_employee WHERE talenta_user_id = " + item.user_id + " AND day IN (" + day + ") AND month IN (" + month + ") AND year IN (" + year + ")  AND status_national_holiday = 'YES' AND delete_status = 'NO'";
      var count11 = _queryRecord("v2_kehadiran", query11);

      summary.push({
          "total_absen": count1.length > 0 ? count1[0].count : 0, // count all absence
          "terlambat_masuk": count2.length > 0 ? count2[0].count : 0, // late_clock_in
          "pulang_cepat": count3.length > 0 ? count3[0].count : 0, // early_clock_out
          "tidak_absen_masuk": count4.length > 0 ? count4[0].count : 0, // no_clock_in
          "tidak_absen_pulang": count5.length > 0 ? count5[0].count : 0, // no_clock_out
          "datang_lebih_awal": count6.length > 0 ? count6[0].count : 0,  // early_check_in
          "hadir": count7.length > 0 ? count7[0].count : 0, // present
          "hadir_di_hari_libur": count8.length > 0 ? count8[0].count : 0, // present_on_holiday
          "tidak_ada_kabar": count9.length > 0 ? count9[0].count : 0, // absen yang tidak ada data check in dan check out
          "hari_libur": count10.length > 0 ? count10[0].count : 0, // holiday
          "hari_libur_nasional": count11.length > 0 ? count11[0].count : 0, // national_holiday
          "report_id": req.report_id,
          "employee_id": item.employee_id,
          "employee_name": item.employee_name,
          "npk": item.npk,
      });
  }
});

_log(summary);