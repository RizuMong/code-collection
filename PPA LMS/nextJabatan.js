var currentJabatan = {
  code_jabatan: "MECHANIC WHEEL",
  company_id: 25257,
  created_at: 1733731110303,
  created_by: 0,
  grades: [
    {
      grade_id: {
        id: "87u6qsVNg",
        name: "1C",
      },
      level: 1,
    },
    {
      grade_id: {
        id: "P_EzeyVHg",
        name: "1D",
      },
      level: 2,
    },
    {
      grade_id: {
        id: "banlqs4Ng",
        name: "1F",
      },
      level: 3,
    },
    {
      grade_id: {
        id: "6W8_qy4HR",
        name: "2A",
      },
      level: 4,
    },
    {
      grade_id: {
        id: "Yxfmey4HR",
        name: "2B",
      },
      level: 5,
    },
  ],
  id: "6c9i6y4Ng",
  id_jabatan: "6c9i6y4Ng",
  nama_jabatan: "MECHANIC WHEEL",
  next_jabatan_id: {
    id: "9rtzey4Hg",
    name: "MECHANIC TRACK",
  },
  tingkat_jabatan_id: {
    id: "",
    name: "",
  },
  updated_at: 1733990362064,
  updated_by: 175332,
};

var req = {
  body: {
    grade_id: {
      id: "P_EzeyVHg",
      name: "1D",
    },
    jabatan_id: {
      id: "6c9i6y4Ng",
      name: "MECHANIC WHEEL",
    },
  },
};

var grades = currentJabatan.grades;
var current_grade_id = req.body.grade_id.id;
var current_jabatan_id = req.body.jabatan_id.id;

var gradeMap = {};
for (var i = 0; i < grades.length; i++) {
  gradeMap[grades[i].grade_id.id] = grades[i];
}

var currentGrade = gradeMap[current_grade_id];
var nextGradeAvailable = false;
var next_grade_found = "";
var next_grade_level = currentGrade ? currentGrade.level + 1 : -1;

if (next_grade_level > 0) {
  for (var i = 0; i < grades.length; i++) {
    if (grades[i].level === next_grade_level) {
      next_grade_found = grades[i].grade_id;
      nextGradeAvailable = true;
      break;
    }
  }
};

var response = {};

if (nextGradeAvailable) {
  response.jabatan_id = req.body.jabatan_id;
  response.grade_id = next_grade_found;
} else {
  var nextJabatan = {
    "grades": [
        { "grade_id": { "id": "87u6qsVNg", "name": "1C" }, "level": 1 },
        { "grade_id": { "id": "P_EzeyVHg", "name": "1D" }, "level": 2 },
        { "grade_id": { "id": "banlqs4Ng", "name": "1F" }, "level": 3 },
        { "grade_id": { "id": "6W8_qy4HR", "name": "2A" }, "level": 4 },
        { "grade_id": { "id": "Yxfmey4HR", "name": "2B" }, "level": 5 }
    ],
    "id": "6c9i6y4Ng",
    "id_jabatan": "6c9i6y4Ng",
    "nama_jabatan": "MECHANIC WHEEL"
  };

  var smallestGrade = nextJabatan.grades[0]; 
  for (var i = 1; i < nextJabatan.grades.length; i++) {
    if (nextJabatan.grades[i].level < smallestGrade.level) {
      smallestGrade = nextJabatan.grades[i];
    }
  }

  response.jabatan_id = {
    id: nextJabatan.id_jabatan,
    nama: nextJabatan.nama_jabatan
  };
  response.grade_id = smallestGrade.grade_id;
};


console.log(response);