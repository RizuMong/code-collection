// var detailShift = {
//   break_id: null,
//   break_in: 1749963600000,
//   break_out: 1749967200000,
//   company_id: 27414,
//   created_at: 1749977635654,
//   created_by: 187570,
//   id: "Z3N9lviPgACCMdBV",
//   id_shift_list: "Z3N9lviPgACCMdBV",
//   id_shift_talenta: null,
//   is_archive: false,
//   is_holiday: false,
//   kode: "SW2",
//   name: "Shift Weekday Baru",
//   notes: "",
//   overtime_in: 1750240800000,
//   overtime_out: 1750255200000,
//   pola_kerja: "",
//   schedule_in: 1749952800000,
//   schedule_out: 1750240800000,
//   status: "Active",
//   updated_at: 1750306329627,
//   updated_by: 178566,
// };

// var item = {
//   company_id: 27414,
//   created_at: 1750833721325,
//   created_by: 178566,
//   date: 1751994000000,
//   day: 9,
//   day_name: "Rabu",
//   delete_status: "NO",
//   desc_cuti: "--",
//   desc_overtime: "--",
//   desc_permit: "--",
//   desc_status: "Buat Jadwal Baru",
//   employee_id: {
//     id: "QRrPQSHnu46sA07d",
//     name: "ariesty_integration1@yopmail.com",
//   },
//   employee_id_text: "QRrPQSHnu46sA07d",
//   // final_clock_in: "14:53",
//   // final_clock_out: "23:00",
//   id: "Z3NL8L8s2O5aMqqt",
//   id_summary_attendance: "Z3NL8L8s2O5aMqqt",
//   location: {
//     address:
//       "Jl. Jenderal Sudirman No.27, RT.10/RW.11, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10250, Indonesia",
//     latitude: -6.2092392,
//     longitude: 106.8204807,
//   },
//   location_clock_in: "out_office",
//   location_clock_out: "out_office",
//   month: 7,
//   radius: 100,
//   schedule_in: 1749952800000,
//   schedule_out: 1750240800000,
//   shift_id: {
//     id: "Z3N9lviPgACCMdBV",
//     name: "Shift Weekday Baru",
//   },
//   status_clock_in: "late_clock_in",
//   status_clock_out: "no_clock_out",
//   status_cuti: "NO",
//   status_holiday: "NO",
//   status_overtime: "NO",
//   status_permit: "NO",
//   talenta_company_id: 15804,
//   talenta_user_id: 997766982,
//   total_overtime: 0,
//   updated_at: 1752057434585,
//   updated_by: 0,
//   year: 2025,
// };


// // logic
// // cek detailShift.overtime_in dan detailShift.overtime_out
// // cek item.final_clock_out

// // kalau dari overtime_in final_clock_out itu udah lebih dari 4 jam, maka dihitung sebagai overtime
// // nanti return value nya day, month, year dan total overtime

// function calculateOvertime(detailShift, item) {
//   if (!item.final_clock_out) {
//     console.log('Error: final_clock_out tidak ditemukan');
//     return {
//       day: item.day,
//       month: item.month,
//       year: item.year,
//       total_overtime: 0,
//       error: 'final_clock_out tidak ditemukan'
//     };
//   }
  
//   var overtimeInDate = new Date(detailShift.overtime_in);
//   var overtimeOutDate = new Date(detailShift.overtime_out);
//   var timeParts = item.final_clock_out.split(':');
  
//   if (timeParts.length !== 2) {
//     console.log('Error: format final_clock_out tidak valid');
//     return {
//       day: item.day,
//       month: item.month,
//       year: item.year,
//       total_overtime: 0,
//       error: 'format final_clock_out tidak valid'
//     };
//   }
  
//   var clockOutHours = parseInt(timeParts[0], 10);
//   var clockOutMinutes = parseInt(timeParts[1], 10);
  
//   if (isNaN(clockOutHours) || isNaN(clockOutMinutes)) {
//     console.log('Error: final_clock_out bukan angka valid');
//     return {
//       day: item.day,
//       month: item.month,
//       year: item.year,
//       total_overtime: 0,
//       error: 'final_clock_out bukan angka valid'
//     };
//   }
  
//   var overtimeInHours = overtimeInDate.getHours();
//   var overtimeInMinutes = overtimeInDate.getMinutes();
//   var overtimeOutHours = overtimeOutDate.getHours();
//   var overtimeOutMinutes = overtimeOutDate.getMinutes();
  
//   var timeDifferenceHours = (clockOutHours - overtimeInHours) + (clockOutMinutes - overtimeInMinutes) / 60;
  
//   console.log('Overtime In:', overtimeInHours + ':' + overtimeInMinutes);
//   console.log('Overtime Out:', overtimeOutHours + ':' + overtimeOutMinutes);
//   console.log('Clock Out:', item.final_clock_out);
//   console.log('Time Difference (hours):', timeDifferenceHours);
  
//   return {
//     day: item.day,
//     month: item.month,
//     year: item.year,
//     total_overtime: timeDifferenceHours > 4 ? Math.round(timeDifferenceHours * 100) / 100 : 0
//   };
// }

// var overtimeResult = calculateOvertime(detailShift, item);
// console.log('Overtime Result:', overtimeResult);


_fieldProperties.delete_other_permission.is_hidden = false;

// if (_field.update_other_permission === null || _field.update_other_permission === undefined) {
//   _fieldProperties.range_update_year.is_hidden = true;
//   _fieldProperties.delete_other_permission.is_hidden = true;
// } else {
//   _fieldProperties.range_update_year.is_hidden = false;
//   _fieldProperties.delete_other_permission.is_hidden = false;
// }


_fieldProperties.update_other_permission.is_hidden = false;
_fieldProperties.delete_other_permission.is_hidden = false;

if (!_field.update_other_permission) {
  _fieldProperties.delete_other_permission.is_hidden = true;
};

_fieldProperties.delete_other_permission.is_hidden = false;

if (!_field.delete_other_permission) {
  _fieldProperties.update_other_permission.is_hidden = true;
};

// 2
// if (_field.delete_other_permission === null || _field.delete_other_permission === undefined) {
//   _fieldProperties.update_other_permission.is_hidden = true;
// } else {
//   _fieldProperties.update_other_permission.is_hidden = false;
// }


if (!_field.update_other_permission) {
  _fieldProperties.delete_other_permission.is_hidden = false;
} else {
  _fieldProperties.delete_other_permission.is_hidden = true;
}


if (!_field.delete_other_permission) {
  _fieldProperties.update_other_permission.is_hidden = false;
  _fieldProperties.range_update_year.is_hidden = false;
} else {
  _fieldProperties.update_other_permission.is_hidden = true;
  _fieldProperties.range_update_year.is_hidden = true;
}