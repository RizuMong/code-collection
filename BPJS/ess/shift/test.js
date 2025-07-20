var diffDays = 0;
var shiftList = [];

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
}

console.log(shiftList);

_field.repeat_shift_enabled = false;
_field.shifts = shiftList;

if (diffDays > 7) {
  _field.repeat_shift_enabled = true;
  _field.shifts = shiftList;
}
