function _log(msg) {
  console.log(msg);
}

var req = {
  "body": {
      "grade_id": {
          "id": "_0pNPYNHR",
          "name": "1D"
      },
      "jabatan_id": {
          "id": "AutXki5HR",
          "name": "OPERATOR DT 30-50T"
      }
  }
}

var currentJabatan = {
  "code_jabatan": "OPERATOR DT 30-50T",
  "company_id": 25257,
  "created_at": 1739438265200,
  "created_by": 0,
  "id": "AutXki5HR",
  "id_jabatan": "AutXki5HR",
  "nama_jabatan": "OPERATOR DT 30-50T",
  "updated_at": 1739438265200,
  "updated_by": 0
}

var grades = currentJabatan.grades || [];
var current_grade_id = (req.body.grade_id && req.body.grade_id.id) || "";
var current_jabatan_id = (req.body.jabatan_id && req.body.jabatan_id.id) || "";
var next_jabatan_level = (currentJabatan.level || 0) + 1;

var next_grade_found = "";
var next_grade_level = "";
var nextGradeAvailable = false;

_log(currentJabatan);

if (grades.length === 0) {
  res = {
    message: "Grades not found",
    error: true,
  };
}

//find current grade level
for (var i = 0; i < grades.length; i++) {
  if (grades[i].grade_id.id === current_grade_id) {
    next_grade_level = grades[i].level + 1;
  }
}

//find next grade by level
for (var i = 0; i < grades.length; i++) {
  if (grades[i].level === next_grade_level) {
    next_grade_found = grades[i].grade_id;
    nextGradeAvailable = true;
  }
}

console.log(res);