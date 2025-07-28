// _field.approval_line.forEach(function (item, index) {
//   console.log(_field.approval_line[index]);
//   if (_field.approval_line[index].approver_type === "BY REPORTING LINE") {
//     _fieldPropertiesGroup.approval_line[index].posisi.is_hidden = true;
//     _fieldPropertiesGroup.approval_line[index].posisi.is_required = false;
//     // _field.approval_line[index].posisi = []
//     _fieldPropertiesGroup.approval_line[index].level.is_hidden = false;
//     _fieldPropertiesGroup.approval_line[index].level.is_required = true;
//   } else if (_field.approval_line[index].approver_type === "BY POSITION") {
//     _fieldPropertiesGroup.approval_line[index].posisi.is_hidden = false;
//     _fieldPropertiesGroup.approval_line[index].posisi.is_required = true;
//     _fieldPropertiesGroup.approval_line[index].level.is_hidden = true;
//     _fieldPropertiesGroup.approval_line[index].level.is_required = false;
//     _field.approval_line[index].level = null;
//   }
// });

// _field.speakers.forEach(function (item, index) {
//   console.log(_field.speakers[index]);
//   if (_field.speaker[index]) {
//     _field.speakers[index].position = _field.speaker[index].speaker.job_title;
//     _field.speakers[index].is_moderator = _field.speaker[index].speaker.is_moderator;
//   }
// });