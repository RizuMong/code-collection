var req = {
  "join_date": 1741712400000,
};

var administration = {
  "masa_kerja": 0,
  "mk_diakui_tahun": 0,
  "mk_diakui_bulan": 0,
  "tmt_posisi": Date.now(),
  "tmt_golongan": Date.now(),
  "tmt_grade": Date.now(),
  "tmt_kelompok_jabatan": Date.now(),
  "tmt_level_jabatan": Date.now(),
  "tmt_level_organisasi": Date.now(),
  "tmt_perusahaan": Date.now(),
  "tmt_rumpun_jabatan": Date.now(),
  "tmt_status_jabatan": Date.now(),
  "tmt_unit_kerja": Date.now(),
  "tmt_wilayah": Date.now(),
};

var joinDate = new Date(req.join_date);
var now = new Date();

var years = now.getFullYear() - joinDate.getFullYear();
var months = now.getMonth() - joinDate.getMonth();

if (months < 0) {
  years -= 1;
  months += 12;
};

administration.masa_kerja = years;
administration.mk_diakui_tahun = years;
administration.mk_diakui_bulan = months;

console.log(administration);