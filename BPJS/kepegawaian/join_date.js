var req = {
  join_date: 1585888047000, // 3 April 2020
}

var now = new Date();

if (req.join_date) {
  var start = new Date(req.join_date);
  if (!isNaN(start)) {
    var diffMs = now.getTime() - start.getTime();
    var totalHari = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    var tahun = now.getFullYear() - start.getFullYear();
    var bulan = now.getMonth() - start.getMonth();
    var hari = now.getDate() - start.getDate();

    if (hari < 0) {
      bulan -= 1;
      var lastMonthDays = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      hari += lastMonthDays;
    }

    if (bulan < 0) {
      tahun -= 1;
      bulan += 12;
    }

    req.mk_diakui_tahun = tahun;
    req.mk_diakui_bulan = bulan;
    req.mk_diakui_hari = hari;
    req.mk_diakui_total_bulan = tahun * 12 + bulan;
    req.mk_diakui_total_hari = totalHari;

    req.masa_kerja = tahun + " Tahun, " + bulan + " Bulan, " + hari + " Hari";
  }
}

// Loop untuk menghitung semua `mk_*` dari `tmt_*`
for (var key in req) {
  if (key.indexOf("tmt_") === 0 && req[key]) {
    var startTmt = new Date(req[key]);
    if (!isNaN(startTmt)) {
      var diffMs = now.getTime() - startTmt.getTime();
      var totalHari = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      var tahun = now.getFullYear() - startTmt.getFullYear();
      var bulan = now.getMonth() - startTmt.getMonth();
      var hari = now.getDate() - startTmt.getDate();

      if (hari < 0) {
        bulan -= 1;
        var lastMonthDays = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        hari += lastMonthDays;
      }

      if (bulan < 0) {
        tahun -= 1;
        bulan += 12;
      }

      var baseKey = key.replace("tmt_", "mk_");
      req[baseKey + "_tahun"] = tahun;
      req[baseKey + "_bulan"] = bulan;
      req[baseKey + "_hari"] = hari;
      req[baseKey + "_total_bulan"] = tahun * 12 + bulan;
      req[baseKey + "_total_hari"] = totalHari;

      req[baseKey + "_text"] =
        tahun + " Tahun, " + bulan + " Bulan, " + hari + " Hari";
    }
  }
}

console.log(req);