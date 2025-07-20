var payload = {
  attendance: 100,
  code_event: "PB",
  company_id: 25257,
  cost: 100000,
  created_at: 1738723795186,
  created_by: 175332,
  date_end_actual: "05/01/2025",
  date_end_plan: "05/01/2025",
  date_start_actual: "01/01/2025",
  date_start_plan: "01/01/2025",
  department_code: "FIN",
  department_org_code: "OPR",
  equipment_group: "EG7",
  grade: "Staff",
  id: "VIJo8cKHg",
  id_import: "VIJo8cKHg",
  import_id: "JVJoU5FNR",
  instructor_nik: "21001650",
  jabatan_code: "PRODUCTION GL",
  jobsite_code: "AKAPI",
  month_int: 1,
  nik: "21001650",
  post_test: 100,
  pre_test: 80,
  score_praktik: 85,
  status_kelulusan: "PASS",
  training_hour: 40,
  training_site: "AKAPI",
  updated_at: 1738723795186,
  updated_by: 175332,
  year: "2025",
};

var LIST_ERRORS = [];
var NOTE_IMPORT = "";
var IS_IMPORT_SUCCESS = true;

if (!payload.year) LIST_ERRORS.push("Year cannot be empty");
if (!payload.month_int) LIST_ERRORS.push("Month cannot be empty");
if (!payload.date_end_actual) LIST_ERRORS.push("Date End Actual cannot be empty");
if (!payload.date_end_plan) LIST_ERRORS.push("Date End Plan cannot be empty");
if (!payload.date_start_plan) LIST_ERRORS.push("Date Start Plan cannot be empty");
if (!payload.cost) LIST_ERRORS.push("Cost cannot be empty");
if (!payload.attendance) LIST_ERRORS.push("Attendance cannot be empty");
if (!payload.post_test) LIST_ERRORS.push("Post Test Score cannot be empty");
if (!payload.score_praktik) LIST_ERRORS.push("Practical Score cannot be empty");

  if (LIST_ERRORS.length > 0) {
    NOTE_IMPORT = LIST_ERRORS.join(", ");
    IS_IMPORT_SUCCESS = false;
  } else {
    IS_IMPORT_SUCCESS = "success";
  }

console.log(NOTE_IMPORT);
