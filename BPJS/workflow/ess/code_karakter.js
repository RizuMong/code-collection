var _field = {
  nama_shift: null,
  kode_shift: "Shift Weekdayewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwewewewewwwwwwwwwwwwwwww",
  is_holiday: false,
  jam_masuk_kerja: null,
  jam_selesai_kerja: null,
  jam_mulai_istirahat: null,
  jam_selesai_istirahat: null,
  jam_mulai_lembur: null,
  jam_selesai_lembur: null,
  pola_kerja: null,
  notes: null,
  status: false,
  break_id: null,
};

// buat kode shift maksimal 6 karakter
if (_field.kode_shift !== null && _field.kode_shift !== undefined) {
  var kodeShiftStr = _field.kode_shift.toString();

  console.log(kodeShiftStr.length);
  
  if (kodeShiftStr.length > 20) {
    console.log("Kode Shift tidak boleh lebih dari 20 karakter.");
  }
}