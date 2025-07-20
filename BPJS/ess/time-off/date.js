var end_date = "20-06-2025";
var leave_effective_date = "20-06-2025";
var start_date = "20-06-2025";

function _dateToTimestamp(dateStr) {
  if (!dateStr) return null;
  var parts = dateStr.split("-");
  var dateObj = new Date(parts[2], parts[1] - 1, parts[0]);

  return dateObj.getTime();
}

console.log(_dateToTimestamp(end_date));

// var payload = {
//     "page_id": 40551,
//     "form_ui_id": "rvpkp0Ppnt47CIii",
//     "form_data_id": "aCGBEGOPEEMlthr2",
//     "data": {
//         // "attachment": attachment,
//         "created_by": 187450,
//         // "employee_cuti_id": employee_time_off_id,
//         // "employee_id": {"id": getEmployee.id_employee, "name": getEmployee.email},
//         "end_date": _dateToTimestamp(end_date),
//         "flow_status": 'draft',
//         // "kuota_cuti": leave_quota,
//         // "kuota_cuti_tidak_terbatas": unlimited_quota ? "TIDAK TERBATAS" : "TERBATAS",
//         "reason": reason,
//         "start_date": _dateToTimestamp(start_date),
//         "talenta_user_id": user_id,
//         "timbul_cuti": _dateToTimestamp(leave_effective_date),
//         // "total_date": time_off_days,
//         "updated_by": 187450,
//         "workflow_id": "pengajuan_cuti"
//     }
// }

// console.log(payload);
