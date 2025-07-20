var _field = {
  id_employee: "Dc6cs11qByMFPZO4",
  join_date: 1585888047000,
  tipe_penghargaan: null,
  pelanggaran_id: null,
  tmt_posisi: 1585888047000,
  mk_posisi_tahun: "5",
  mk_posisi_bulan: 0,
  mk_posisi_hari: 0,
  tmt_perusahaan: null,
  mk_perusahaan_tahun: "5",
  mk_perusahaan_bulan: 0,
  mk_perusahaan_hari: 0,
  tmt_wilayah: null,
  mk_wilayah_tahun: "5",
  mk_wilayah_bulan: 0,
  mk_wilayah_hari: 0,
  tmt_level_organisasi: null,
  mk_level_organisasi_tahun: "5",
  mk_level_organisasi_bulan: 0,
  mk_level_organisasi_hari: 0,
  tmt_level_jabatan: null,
  mk_level_jabatan_tahun: "5",
  mk_level_jabatan_bulan: 0,
  mk_level_jabatan_hari: 0,
  tmt_rumpun_jabatan: null,
  mk_rumpun_jabatan_tahun: "5",
  mk_rumpun_jabatan_bulan: 0,
  mk_rumpun_jabatan_hari: 0,
  tmt_kelompok_jabatan: null,
  mk_kelompok_jabatan_tahun: "5",
  mk_kelompok_jabatan_bulan: 0,
  mk_kelompok_jabatan_hari: 0,
  tmt_grade: null,
  mk_grade_tahun: "5",
  mk_grade_bulan: 0,
  mk_grade_hari: 0,
  tmt_status_jabatan: null,
  mk_status_jabatan_tahun: "5",
  mk_status_jabatan_bulan: 0,
  mk_status_jabatan_hari: 0,
  tmt_golongan: null,
  mk_golongan_tahun: "5",
  mk_golongan_bulan: 0,
  mk_golongan_hari: 0,
  tmt_status_pegawai: null,
  mk_status_pegawai_tahun: "5",
  mk_status_pegawai_bulan: 0,
  mk_status_pegawai_hari: 0,
  mk_diakui_tahun: "5",
  mk_diakui_bulan: 0,
  mk_diakui_hari: 0,
};

/*
  "mk_posisi_tahun": null, // total tahun dari _field.tmt_posisi
  "mk_posisi_bulan": null, // total bulan dari _field.tmt_posisi
  "mk_posisi_hari": null, // total hari dari _field.tmt_posisi

  "mk_perusahaan_tahun": null, // total tahun dari _field.tmt_perusahaana
  "mk_peusahaan_bulan": null, // total bulan dari _field.tmt_perusahaan
  "mk_peusahaan_hari": null, // total hari dari _field.tmt_perusahaan

  "mk_wilayah_tahun": null,
  "mk_wilayah_bulan": null,
  "mk_wilayah_hari": null,

  "mk_level_organisasi_tahun": null,
  "mk_level_organisasi_bulan": null,
  "mk_level_organisasi_hari": null,

  "mk_level_jabatan_tahun": null,
  "mk_level_jabatan_bulan": null,
  "mk_level_jabatan_hari": null,

  "mk_level_rumpun_tahun": null,
  "mk_level_rumpun_bulan": null,
  "mk_level_rumpun_hari": null,

  "mk_level_rumpun_tahun": null,
  "mk_level_rumpun_bulan": null,
  "mk_level_rumpun_hari": null,

  "mk_level_kelompok_jabatan_tahun": null,
  "mk_level_kelompok_jabatan_bulan": null,
  "mk_level_kelompok_jabatan_hari": null,

  "mk_grade_tahun": null,
  "mk_grade_bulan": null,
  "mk_grade_hari": null,

  "mk_status_jabatan_tahun": null,
  "mk_status_jabatan_bulan": null,
  "mk_status_jabatan_hari": null,

  "mk_golongan_bulan": null,
  "mk_golongan_tahun": null,
  "mk_golongan_hari": null,

  "mk_status_pegawai_tahun": null,
  "mk_status_pegawai_bulan": null,
  "mk_status_pegawai_hari": null,

  "mk_diakui_tahun": null,
  "mk_diakui_bulan": null
  "mk_diakui_hari": null
*/

var now = new Date();

if (_field.join_date) {
  var start = new Date(_field.join_date);
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

    _field.mk_diakui_tahun = years;
    _field.mk_diakui_bulan = years * 12 + months;
    _field.mk_diakui_hari = diffDays;
  }
};


// Loop untuk menghitung semua `mk_*`
for (var key in _field) {
  if (key.indexOf("tmt_") === 0 && _field[key]) {
    var startTmt = new Date(_field[key]);
    if (!isNaN(startTmt)) {
      var diffMs = now.getTime() - startTmt.getTime();
      var totalHari = Math.floor(diffMs / (1000 * 60 * 60 * 24));

      var tahunTmt = now.getFullYear() - startTmt.getFullYear();
      var bulanTmt = now.getMonth() - startTmt.getMonth();
      var hariTmt = now.getDate() - startTmt.getDate();

      if (hariTmt < 0) {
        bulanTmt -= 1;
        var lastMonthTmtDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        hariTmt += lastMonthTmtDays;
      }
      if (bulanTmt < 0) {
        tahunTmt -= 1;
        bulanTmt += 12;
      }

      var baseKey = key.replace("tmt_", "mk_");
      _field[baseKey + "_tahun"] = tahunTmt;
      _field[baseKey + "_bulan"] = tahunTmt * 12 + bulanTmt;
      _field[baseKey + "_hari"] = totalHari;
    }
  }
}

console.log(_field);