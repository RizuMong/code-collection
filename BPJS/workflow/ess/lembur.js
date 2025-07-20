var _field = {
  jam_mulai_lembur: 1750222800000,
  jam_selesai_lembur: 1750237800000,
  total_overtime_hours: null,
  total_break_hours: null,
};


if (_field.jam_mulai_lembur !== undefined && _field.jam_selesai_lembur !== undefined && _field.jam_mulai_lembur !== null && _field.jam_selesai_lembur !== null) {
    var totalMs = new Date(_field.jam_selesai_lembur) - new Date(_field.jam_mulai_lembur);
    var totalMenit = Math.floor(totalMs / 60000);
    var jam = Math.floor(totalMenit / 60);
    var menit = totalMenit % 60;

    _field.total_lembur = jam + " jam " + menit + " menit";
    _field.total_overtime_hours = Number(jam + "." + menit);
};

console.log(_field)
console.log(_field.jam_selesai_lembur)
console.log(_field.jam_mulai_lembur)
console.log(_field.total_lembur)
console.log(Number(_field.total_overtime_hours));