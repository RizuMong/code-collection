// var payload = {
//     "page_id": 40551,
//     "form_ui_id": "gboUCIcM8WIzHaRI",
//     "form_data_id": "aCGBEGOPEEMlthr2",
//     "data": {
//         "type_id": type_id,
//         "permission_id": leave_id,
//         "master_leave_quota": master_leave_quota,
//         "kuota_cuti": leave_quota,
//         "no_handphone": no_handphone || "",
//         "delegasi": delegasi || "",
//         "estimated_due_date": null,
//         "start_date": _dateToTimestamp(start_date),
//         "end_date": _dateToTimestamp(end_date),
//         "total_date": total_leave_days,
//         "once_request": once_request,
//         "is_allowance": is_allowance,
//         "deduct_holiday": deduct_holiday,
//         "deduct_joint_holiday": deduct_joint_holiday,
//         "is_allowance_take": is_allowance_take || "Belum Diambil",
//         "allowance_take_date": allowance_take_date || null,
//         "reason": reason || "",
//         "attachments": attachments || [],
//         "leave_expiry_date": leave_expiry_date ? _dateToTimestamp(leave_expiry_date) : null,
//         "workflow_id": workflow_id || "",
//         "id_pengajuan_employee_cuti": ""
//     }
// };

// function dateToTimestamp(dateString) {
//   var parts = dateString.split("/");
//   var day = parseInt(parts[0], 10);
//   var month = parseInt(parts[1], 10) - 1; // bulan dimulai dari 0
//   var year = parseInt(parts[2], 10);

//   var date = new Date(year, month, day);
//   return date.getTime();
// }

// var data = {
//   type_id: "123",
//   data: {
//     start_date: dateToTimestamp("01/09/2023"),
//     end_date: dateToTimestamp("15/09/2023"),
//     leave_expiry_date: dateToTimestamp("30/12/2023"),
//   },
// };

// console.log(data);

// var is_allowance_take = false;
// var is_allowance_takes = "";

// if (is_allowance_take === "taken") {
//   is_allowance_takes = "Sudah Diambil";
// }

// if (is_allowance_take === "available") {
//   is_allowance_takes = "Belum Diambil";
// }

// if (is_allowance_take === "not_applicable") {
//   is_allowance_takes = "Tidak Terdapat Tunjangan";
// }


var token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTg2NzU2NjcsImRhdGEiOnsiaWRfdG9rZW4iOiJCOVc4YnNsUFdkNlZqTzlHIiwidGltZXN0YW1wIjoxNzU2ODc1NjY3NDgzfX0.Ppq9hS9GzqidGQxdcVA0C5NfbNI7RMQz1x67w_cP0So";
var tokens = token ? token.split(" ")[1] : null;

console.log(tokens);