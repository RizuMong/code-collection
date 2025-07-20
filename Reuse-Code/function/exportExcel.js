var results = [
  {
    answer: "--",
    description: "SKripsi ini susah sekali",
    question: "Berapa kali anda sekali melakukan pinjol?",
    respondent: "--",
    title: "Survei Skripsi",
    type: "Pilihan Ganda",
  },
];

function safeVal(val) {
  return val !== null && val !== undefined ? val : "";
}

var data = [];

for (var i = 0; i < results.length; i++) {
  var item = results[i];
  data.push({
    title: safeVal(item.title),
    description: safeVal(item.description),
    question: safeVal(item.question),
    respondent: safeVal(item.respondent),
    answer: safeVal(item.answer),
  });
}

// Inisiasi export Excel
var fileName = "Export Jawaban Survei.xlsx";
var sheetName = "Export Jawaban Survei";

var headerMap = {
  title: "SURVEI",
  description: "DESKRIPSI",
  question: "PERTANYAAN",
  respondent: "RESPONDEN",
  answer: "JAWABAN",
};

var headerOrder = ["title", "description", "question", "respondent", "answer"];

_exportExcel(fileName, sheetName, data, headerMap, headerOrder);
