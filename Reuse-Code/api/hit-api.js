// var baseURL = "https://apiv2-bpjs.jojonomic.com/27414";
// var targetURL = baseURL + "/v1/kehadiran/validation/jawal-kehadiran";
// var header = {
//     "Content-Type": "application/json",
//     "x-api-key": "zAq8Pw7FgNc3Rt1VbKjLp9HsYg5UeXoZ2m4iF6dW",
//     "Authorization": _user.token
// };

// var hitAPI = _hitExternalAPI(targetURL, "POST", _field, header);
// var error = hitAPI.body.error;
// var message = hitAPI.body.message;
// var redirect = hitAPI.body.redirect;

var req = {
  body: {
    attachments: [
      {
        name: "687fcc24e82c4-File-Pendukung-Perubahan-Absensi.pdf",
        url: "https://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/687fcc24e82c4-File-Pendukung-Perubahan-Absensi.pdf",
      },
    ],
    attendance_date: 1753808400000,
    check_in: 1753241100000,
    check_out: 1753281000000,
    flow_status: "draft",
    id_attendance_change: "",
    note: "lupa absen wfh",
    work_location_type: "WFH",
    workflow_id: "pengajuan_perubahan_absensi",
  },
};

var findMasterWFH = [
  {
    company_id: 27414,
    created_at: 1750875139552,
    created_by: 178566,
    id: "312Q7Xsbp5SRWcg5",
    id_wfh_quota: "312Q7Xsbp5SRWcg5",
    name: "WFH Seminggu",
    quota_days: 2,
    quota_type: "Seminggu",
    updated_at: 1750876050007,
    updated_by: 178566,
  },
  {
    company_id: 27414,
    created_at: 1750875178634,
    created_by: 178566,
    id: "EwnSfzTKexNjhkNT",
    id_wfh_quota: "EwnSfzTKexNjhkNT",
    name: "WFH Setahun",
    quota_days: 180,
    quota_type: "Setahun",
    updated_at: 1750875178634,
    updated_by: 178566,
  },
  {
    company_id: 27414,
    created_at: 1750875154819,
    created_by: 178566,
    id: "Oy9HrTrOclnbJNYF",
    id_wfh_quota: "Oy9HrTrOclnbJNYF",
    name: "WFH Sebulan",
    quota_days: 12,
    quota_type: "Sebulan",
    updated_at: 1750876055226,
    updated_by: 178566,
  },
];

var findAttendanceSummary = [
  {
    attendance_code: "--",
    company_id: 27414,
    created_at: 1753172646618,
    created_by: 187672,
    date: 1753203600000,
    date_string: "23/07/2025",
    day: 23,
    day_name: "Rabu",
    delete_status: "NO",
    desc_cuti: "--",
    desc_holiday: "--",
    desc_national_holiday: "--",
    desc_overtime: "--",
    desc_permit: "--",
    desc_status: "Buat Jadwal Baru",
    employee_id: {
      id: "n0cVZHXnEefIqaIi",
      name: "101140076 - requestor testing satu",
    },
    employee_id_text: "n0cVZHXnEefIqaIi",
    final_clock_in: "--",
    final_clock_out: "--",
    id: "L5O95FfuCaivpuZc",
    id_summary_attendance: "L5O95FfuCaivpuZc",
    location: {},
    month: 7,
    note: "--",
    radius: 0,
    schedule_in: 1749952800000,
    schedule_out: 1750240800000,
    shift_id: {
      id: "Z3N9lviPgACCMdBV",
      name: "Shift Weekday Baru",
    },
    status_clock_in: "no_clock_in",
    status_clock_out: "no_clock_out",
    status_cuti: "NO",
    status_holiday: "NO",
    status_national_holiday: "NO",
    status_overtime: "NO",
    status_permit: "NO",
    talenta_company_id: 0,
    talenta_user_id: 3812057,
    total_overtime: 0,
    updated_at: 1753203796071,
    updated_by: 187673,
    work_location: "WFH",
    year: 2025,
  },
];

var body = req.body;
var errors = [];

var attendance_date = new Date(body.attendance_date);
var today = new Date();

// Hitung selisih hari
var diffTime = today - attendance_date;
var diffDays = diffTime / (1000 * 60 * 60 * 24);

if (diffDays > 30) {
  errors.push(
    "Tanggal absensi yang dipilih tidak boleh lebih dari 30 hari yang lalu"
  );
}

// --- Ambil quota masing-masing (pakai filter versi ES5) ---
var quotaMingguan = findMasterWFH.filter(function (item) {
  return item.quota_type === "Seminggu";
})[0];

var quotaBulanan = findMasterWFH.filter(function (item) {
  return item.quota_type === "Sebulan";
})[0];

var quotaTahunan = findMasterWFH.filter(function (item) {
  return item.quota_type === "Setahun";
})[0];

function isSameMonth(d1, d2) {
  d1 = new Date(d1);
  d2 = new Date(d2);
  return (
    d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth()
  );
}

function isSameYear(d1, d2) {
  d1 = new Date(d1);
  d2 = new Date(d2);
  return d1.getFullYear() === d2.getFullYear();
}

function isSameWeek(d1, d2) {
  d1 = new Date(d1);
  d2 = new Date(d2);
  var firstDay = new Date(d2);
  var day = firstDay.getDay();
  var diff = firstDay.getDate() - day + (day === 0 ? -6 : 1); // Senin awal minggu
  var monday = new Date(firstDay.setDate(diff));
  monday.setHours(0, 0, 0, 0);

  var sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return d1 >= monday && d1 <= sunday;
}

// --- Hitung jumlah WFH yang sudah digunakan ---
var countWeek = 0;
var countMonth = 0;
var countYear = 0;

for (var i = 0; i < findAttendanceSummary.length; i++) {
  var histDate = findAttendanceSummary[i].date;

  if (isSameWeek(histDate, attendance_date)) {
    countWeek++;
  }

  if (isSameMonth(histDate, attendance_date)) {
    countMonth++;
  }

  if (isSameYear(histDate, attendance_date)) {
    countYear++;
  }
}

// --- Validasi jika work_location_type mengandung WFH ---
if (body.work_location_type && body.work_location_type.indexOf("WFH") !== -1) {
  if (quotaMingguan && countWeek >= quotaMingguan.quota_days) {
    errors.push("Kuota WFH mingguan sudah habis.");
  }

  if (quotaBulanan && countMonth >= quotaBulanan.quota_days) {
    errors.push("Kuota WFH bulanan sudah habis.");
  }

  if (quotaTahunan && countYear >= quotaTahunan.quota_days) {
    errors.push("Kuota WFH tahunan sudah habis.");
  }
}
