var _field = {
  mk_diakui_tahun: "",
  mk_diakui_bulan: "",
  mk_diakui_hari: "",
  talenta_user_id: 3729375,
  termination_date: 1750698000000,
  tgl_mulai_sewa: null,
  tgl_selesai_sewa: null,
  tmt_golongan: 1714548467000,
  tmt_grade: 1714548467000,
  tmt_kelompok_jabatan: 1714548467000,
  tmt_level_jabatan: 1714548467000,
  tmt_level_organisasi: 1714548467000,
  tmt_perusahaan: 1714548467000,
  tmt_posisi: 1714548467000,
  tmt_rumpun_jabatan: 1714548467000,
  tmt_status_jabatan: 1714548467000,
  tmt_status_pegawai: 1714548467000,
  tmt_unit_kerja: 1714548467000,
  tmt_wilayah: 1714548467000,
  join_date: 961779600000, // Contoh tanggal bergabung
};

var now = new Date();

if (_field.join_date) {
  var start = new Date(_field.join_date);
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

    _field.mk_diakui_tahun = tahun;
    _field.mk_diakui_bulan = bulan;
    _field.mk_diakui_hari = hari;
    _field.mk_diakui_total_bulan = tahun * 12 + bulan;
    _field.mk_diakui_total_hari = totalHari;

    _field.masa_kerja =
      tahun + " Tahun, " + bulan + " Bulan, " + hari + " Hari";
  }
}

// Loop untuk menghitung semua `mk_*` dari `tmt_*`
for (var key in _field) {
  if (key.indexOf("tmt_") === 0 && _field[key]) {
    var startTmt = new Date(_field[key]);
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
      _field[baseKey + "_tahun"] = tahun;
      _field[baseKey + "_bulan"] = bulan;
      _field[baseKey + "_hari"] = hari;
      _field[baseKey + "_total_bulan"] = tahun * 12 + bulan;
      _field[baseKey + "_total_hari"] = totalHari;

      _field[baseKey + "_text"] =
        tahun + " Tahun, " + bulan + " Bulan, " + hari + " Hari";
    }
  }
}

console.log(_field);
