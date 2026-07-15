_field.approval_line.forEach(function (item, index) {
  console.log(_field.approval_line[index]);
  if (_field.approval_line[index].approver_type === "BY REPORTING LINE") {
    _fieldPropertiesGroup.approval_line[index].posisi.is_hidden = true;
    _fieldPropertiesGroup.approval_line[index].posisi.is_required = false;
    _field.approval_line[index].posisi = []
    _fieldPropertiesGroup.approval_line[index].level.is_hidden = false;
    _fieldPropertiesGroup.approval_line[index].level.is_required = true;
  } else if (_field.approval_line[index].approver_type === "BY POSITION") {
    _fieldPropertiesGroup.approval_line[index].posisi.is_hidden = false;
    _fieldPropertiesGroup.approval_line[index].posisi.is_required = true;
    _fieldPropertiesGroup.approval_line[index].level.is_hidden = true;
    _fieldPropertiesGroup.approval_line[index].level.is_required = false;
    _field.approval_line[index].level = null;
  }
});

_field.speakers.forEach(function (item, index) {
  if (_field.speaker[index]) {
    _field.speakers[index].position = _field.speaker[index].speaker.job_title;
    _field.speakers[index].is_moderator = _field.speaker[index].speaker.is_moderator;
  }
});

// field custom class nya
_field.approval_line.forEach(function (item, index) {
  // kalau mau liat isinya
  console.log(_field.approval_line[index]);

  // kalau mau tambah kondisi bisa kayak gini
  if (_field.approval_line[index].approver_type === "BY REPORTING LINE") {

    // kalau mau akses di field di custom class nya
    _fieldPropertiesGroup.approval_line[index].posisi.is_hidden = true;
  }
});


_field.questions.forEach(function (item, index) {
  if (_field.questions[index].answer_mode === "Single") {
    _fieldPropertiesGroup.questions[index].follow_up.is_hidden = false;
    _fieldPropertiesGroup.questions[index].follow_up_yes.is_hidden = true;
    _fieldPropertiesGroup.questions[index].follow_up_no.is_hidden = true;
  } else if (_field.questions[index].answer_mode === "Conditional") {
    _fieldPropertiesGroup.questions[index].follow_up.is_hidden = true;
    _fieldPropertiesGroup.questions[index].follow_up_yes.is_hidden = false;
    _fieldPropertiesGroup.questions[index].follow_up_no.is_hidden = false;
  } else if (_field.questions[index].answer_mode === "None") {
    _fieldPropertiesGroup.questions[index].follow_up.is_hidden = true;
    _fieldPropertiesGroup.questions[index].follow_up_yes.is_hidden = true;
    _fieldPropertiesGroup.questions[index].follow_up_no.is_hidden = true;
  }
});


_field.approval_line.forEach(function (item, index) {
  if (_field.questions[index].answer_mode === "Holding Approval") {
    _fieldPropertiesGroup.questions[index].employee.is_hidden = true;
  } else if (_field.questions[index].answer_mode === "By PIC") {
    _fieldPropertiesGroup.questions[index].employee.is_hidden = false;
  };
});