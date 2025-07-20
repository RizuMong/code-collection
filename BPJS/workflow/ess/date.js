var req = {
  body: {
    nama: "Rixisadasjdhso",
    tgl_hari_libur: 1749661200000,
  },
};


var tglHariLibur = req.body.tgl_hari_libur;
var date = new Date(tglHariLibur);
var year = date.getFullYear();
var month = date.getMonth() + 1; // getMonth() returns 0-11, so we add 1
var day = date.getDate();

console.log({
  nama: req.body.nama,
  tgl_hari_libur: tglHariLibur,
  year: year,
  month: month,
  day: day,
});
