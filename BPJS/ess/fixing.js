// var getTimeOffs = [
//   {
//     bulan_expired_date: "Juni",
//     code: "CT01",
//     company_id: 27414,
//     created_at: 1753950759344,
//     created_by: 0,
//     deduct_joint_holiday: false,
//     deduct_public_holiday: false,
//     delete_other_permission: {
//       id: "hfqvpi2HGiMvBO0G",
//       name: "Cuti Tahunan",
//     },
//     employee_id: {
//       id: "kAa74jWd8CT4K8yL",
//       name: "100012380 - tes",
//     },
//     expired_date: 1782752400000,
//     expired_year: "1",
//     first_min_request_day: 3,
//     first_show: 12,
//     gender: "Pria & Wanita",
//     id: "7Jj7rGWYUGfsdrv7",
//     id_employee_cuti: "7Jj7rGWYUGfsdrv7",
//     is_allowance: true,
//     is_allowance_take: "available",
//     is_first_request: "available",
//     is_once_request: "not_applicable",
//     leave_quota: 12,
//     leave_type_id: {
//       id: "s6SBZNA3ICPM8w37",
//       name: "Cuti",
//     },
//     master_leave_quota: 12,
//     min_request_day: 10,
//     minus_joint_holiday: false,
//     multiiplier: 1,
//     name: "Cuti Tahunan 2025",
//     name_permission: "Cuti Tahunan 2025",
//     permission_id: {
//       id: "CmkTnhLZD4cGS0sD",
//       name: "Cuti Tahunan",
//     },
//     range_delete_year: false,
//     range_update_year: 1,
//     show_permission_date: "1 Januari 2025",
//     status: "Active",
//     tgl_expired_date: "30 Juni 2026",
//     type_id: {
//       id: "s6SBZNA3ICPM8w37",
//       name: "Cuti",
//     },
//     type_id_text: "Cuti",
//     update_other_permission: {
//       id: "kAauHvJUTbneKt1W",
//       name: "Cuti Besar",
//     },
//     updated_at: 1753950759344,
//     updated_by: 0,
//     years_permission: 2025,
//   },
//   {
//     bulan_expired_date: "Juni",
//     code: "CT01",
//     company_id: 27414,
//     created_at: 1753950759344,
//     created_by: 0,
//     deduct_joint_holiday: false,
//     deduct_public_holiday: false,
//     delete_other_permission: {
//       id: "hfqvpi2HGiMvBO0G",
//       name: "Cuti Tahunan",
//     },
//     employee_id: {
//       id: "kAa74jWd8CT4K8yL",
//       name: "100012380 - tes",
//     },
//     expired_date: 1782752400000,
//     expired_year: "1",
//     first_min_request_day: 3,
//     first_show: 12,
//     gender: "Pria & Wanita",
//     id: "7Jj7rGWYUGfsdrv7",
//     id_employee_cuti: "7Jj7rGWYUGfsdrv7",
//     is_allowance: true,
//     is_allowance_take: "available",
//     is_first_request: "available",
//     is_once_request: "not_applicable",
//     leave_quota: 12,
//     leave_type_id: {
//       id: "s6SBZNA3ICPM8w37",
//       name: "Cuti",
//     },
//     master_leave_quota: 12,
//     min_request_day: 10,
//     minus_joint_holiday: false,
//     multiiplier: 1,
//     name: "Cuti Tahunan 2025",
//     name_permission: "Cuti Tahunan 2025",
//     permission_id: {
//       id: "CmkTnhLZD4cGS0sD",
//       name: "Cuti Tahunan",
//     },
//     range_delete_year: false,
//     range_update_year: 1,
//     show_permission_date: "1 Januari 2025",
//     status: "Active",
//     tgl_expired_date: "30 Juni 2026",
//     type_id: {
//       id: "s6SBZNA3ICPM8w37",
//       name: "Cuti",
//     },
//     type_id_text: "Cuti",
//     update_other_permission: {
//       id: "kAauHvJUTbneKt1W",
//       name: "Cuti Besar",
//     },
//     updated_at: 1753950759344,
//     updated_by: 0,
//     years_permission: 2025,
//   },
// ];

// function _log(data) {
//   console.log(data);
// }

// var datas = [];
// var codeSet = {};

// getTimeOffs.forEach(function (item) {
//   if (!codeSet[item.code]) {
//     datas.push({
//       id: item.id_employee_cuti,
//       name: item.code,
//       label: item.code + " - " + item.permission_id.name,
//     });
//     codeSet[item.code] = true;
//   }
// });

// var res = {
//   data: datas,
// };

// _log(res);

var dateAllowance = new Date();
var day = dateAllowance.getDate();
var month = dateAllowance.getMonth() + 1;
var year = dateAllowance.getFullYear();
var getAllowanceTime = dateAllowance.getTime();
var isAllowance = "taken";

console.log(getAllowanceTime);
