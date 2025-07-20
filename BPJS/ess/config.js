var _field = {
  effective_end_date: 1749142800000,
  effective_start_date: 1748797200000,  
};

var diffDays = 0;

if (_field.effective_start_date && _field.effective_end_date) {
    var startDate = new Date(_field.effective_start_date);
    var endDate = new Date(_field.effective_end_date);
    var diffMs = endDate - startDate;
    diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
};

console.log(diffDays);


if (diffDays > 7) {
  _field.repeat_shift_enabled = true;

  // var shiftList = _hitFunction("get_shift_list", {
  //   diffDays: diffDays,
  // });
  // _field.shifts = shiftList;
} else {
  _field.repeat_shift_enabled = false;
}

console.log(_field);
