var diffDays = 0;
var shiftList = [];

if (
  _field &&
  _field.effective_start_date != null &&
  _field.effective_end_date != null
) {
  var startDate = new Date(_field.effective_start_date);
  var endDate = new Date(_field.effective_end_date);

  if (!isNaN(startDate) && !isNaN(endDate)) {
    var diffMs = endDate - startDate;
    diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;

    shiftList = _hitFunction("get_shift_list", {
      diffDays: diffDays,
      start_date: _field.effective_start_date,
      end_date: _field.effective_end_date,
    });

    _fieldProperties.shifts.is_hidden = false;
  }
} else {
  diffDays = 0;
  shiftList = [];
}

console.log(shiftList);

_field.repeat_shift_enabled = false;
_field.shifts = shiftList;

if (diffDays > 7) {
  _field.repeat_shift_enabled = true;
  _field.shifts = shiftList;
}

var _field = {
  no_surat: "",
  tgl_surat: null,
  nama_karyawan: null,
  jenis_resign: null,
  tmr_resign: null,
  lampiran: [
    {
      name: "-",
      url: "",
      is_delete: false,
    },
  ],
  exit_form: [],
};

if (!_field || typeof _field !== "object") {
  _field = {};
}
_field.exit_form = [];
