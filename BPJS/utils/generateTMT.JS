var req = {
  company_id: 27414,
  created_at: 1750322051063,
  created_by: 0,
  employee_id: "kAa74jWd8CT4K8yL",
  final_array: true,
  group: 1,
  has_generate: false,
  id: "T4hQSnEByRtp1EaZ",
  ids: "T4hQSnEByRtp1EaZ",
  join_date: 1683478800000,
  limit: 5,
  tmt_golongan: 1746723407699,
  tmt_grade: 1746723407699,
  tmt_kelompok_jabatan: 1746723407699,
  tmt_level_jabatan: 1746723407699,
  tmt_level_organisasi: 1746723407699,
  tmt_perusahaan: 1746723407699,
  tmt_posisi: 1746723407699,
  tmt_rumpun_jabatan: 1746723407699,
  tmt_status_jabatan: 1746723407699,
  tmt_status_pegawai: 1746723407699,
  tmt_wilayah: 1746723407699,
  updated_at: 1750322051063,
  updated_by: 0,
};

var now = new Date();

if (req.join_date) {
  var start = new Date(req.join_date);
  if (!isNaN(start)) {
    var diffMs = now.getTime() - start.getTime();
    var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    var years = now.getFullYear() - start.getFullYear();
    var months = now.getMonth() - start.getMonth();
    var days = now.getDate() - start.getDate();

    if (days < 0) {
      months -= 1;
      var lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += lastMonth;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    req.mk_diakui_tahun = years;
    req.mk_diakui_bulan = years * 12 + months;
    req.mk_diakui_hari = diffDays;
  }
}

// Loop untuk menghitung semua `mk_*`
for (var key in req) {
  if (key.indexOf("tmt_") === 0 && req[key]) {
    var startTmt = new Date(req[key]);
    if (!isNaN(startTmt)) {
      var diffMs = now.getTime() - startTmt.getTime();
      var totalHari = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      var tahunTmt = now.getFullYear() - startTmt.getFullYear();
      var bulanTmt = now.getMonth() - startTmt.getMonth();
      var hariTmt = now.getDate() - startTmt.getDate();

      if (hariTmt < 0) {
        bulanTmt -= 1;
        var lastMonthTmtDays = new Date(
          now.getFullYear(),
          now.getMonth(),
          0
        ).getDate();
        hariTmt += lastMonthTmtDays;
      }
      if (bulanTmt < 0) {
        tahunTmt -= 1;
        bulanTmt += 12;
      }

      var baseKey = key.replace("tmt_", "mk_");
      req[baseKey + "_tahun"] = tahunTmt;
      req[baseKey + "_bulan"] = tahunTmt * 12 + bulanTmt;
      req[baseKey + "_hari"] = totalHari;
    }
  }
}

console.log(req);
