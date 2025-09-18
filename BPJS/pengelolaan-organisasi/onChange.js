// // _field.approval_line.forEach(function (item, index) {
// //      console.log(_field.approval_line[index]);
// //     if (_field.approval_line[index].approver_type === "BY REPORTING LINE") {
// //         _fieldPropertiesGroup.approval_line[index].posisi.is_hidden = true
// //         _fieldPropertiesGroup.approval_line[index].posisi.is_required = false
// //         // _field.approval_line[index].posisi = []
// //         _fieldPropertiesGroup.approval_line[index].level.is_hidden = false
// //         _fieldPropertiesGroup.approval_line[index].level.is_required = true

// //     } else if (_field.approval_line[index].approver_type === "BY POSITION") {
// //         _fieldPropertiesGroup.approval_line[index].posisi.is_hidden = false
// //         _fieldPropertiesGroup.approval_line[index].posisi.is_required = true
// //         _fieldPropertiesGroup.approval_line[index].level.is_hidden = true
// //         _fieldPropertiesGroup.approval_line[index].level.is_required = false
// //         _field.approval_line[index].level = null
// //     }
// // });

// _field.approval_line.forEach(function (item, index) {
//   console.log(_field.approval_line[index]);
//   if (_field.approval_line[index].approver_type === "BY REPORTING LINE") {
//     _fieldPropertiesGroup.approval_line[index].position_ids.is_hidden = true;
//     _fieldPropertiesGroup.approval_line[index].position_ids.is_required = false;
//     _fieldPropertiesGroup.approval_line[index].level.is_hidden = false;
//     _fieldPropertiesGroup.approval_line[index].level.is_required = true;
//     _fieldPropertiesGroup.approval_line[index].minimum_action.is_hidden = true;
//     _fieldPropertiesGroup.approval_line[index].minimum_action.is_required = false;
//   } else if (_field.approval_line[index].approver_type === "BY POSITION") {
//     _fieldPropertiesGroup.approval_line[index].position_ids.is_hidden = false;
//     _fieldPropertiesGroup.approval_line[index].position_ids.is_required = true;
//     _fieldPropertiesGroup.approval_line[index].level.is_hidden = true;
//     _fieldPropertiesGroup.approval_line[index].level.is_required = false;
//     _fieldPropertiesGroup.approval_line[index].minimum_action.is_hidden = false;
//     _fieldPropertiesGroup.approval_line[index].minimum_action.is_required = true;
//     _field.approval_line[index].level = null;
//     _field.approval_line[index].minimum_action = null;
//   } else if (_field.approval_line[index].approver_type === "BY JABATAN") {
//     _fieldPropertiesGroup.approval_line[index].jabatan_ids.is_hidden = false;
//     _fieldPropertiesGroup.approval_line[index].jabatan_ids.is_required = true;
//     _fieldPropertiesGroup.approval_line[index].level.is_hidden = true;
//     _fieldPropertiesGroup.approval_line[index].level.is_required = false;
//     _fieldPropertiesGroup.approval_line[index].minimum_action.is_hidden = false;
//     _fieldPropertiesGroup.approval_line[index].minimum_action.is_required = true;
//     _field.approval_line[index].level = null;
//     _field.approval_line[index].minimum_action = null;
//   }
// });

// var userData = {
//   "email": "user.admin@mekari.com",
//   "user_company_id": 1,
// }

// var listUserAdmins = [
//     "user.admin@mekari.com"
// ];


// if (listUserAdmins.indexOf(userData.email) != -1) {
//   console.log("user admin");
// } else {
//     res = userData.user_company_id;
// }


var nowUtc = new Date();
var wibOffset = 7 * 60 * 60 * 1000;
var nowWib = new Date(nowUtc.getTime() + wibOffset);
var wibTimestamp = nowWib.getTime();