var req = {
  "company_id": 25257,
  "correct_answer": "Benar-benar terjadi, cidera pada pekerja tambang, akibat kegiatan usaha pertambangan, pada jam pekerja tambang, terjadi di wilayah tambang",
  "created_at": 1741166477134,
  "created_by": 180512,
  "id": "PUNgxYtHgz",
  "id_temp_q": "PUNgxYtHgz",
  "import_id": "k8NRxLtNR",
  "option_a": "Benar-benar terjadi, cidera pada pekerja tambang, kegiatan usaha pertambangan, pada jam kerja pekerja tambang, terjadi di luar wilayah tambang",
  "option_b": "Benar-benar terjadi, cidera pada pekerja tambang, akibat kegiatan jual beli, pada jam kerja pekerja tambang, terjadi di luar wilayah tambang",
  "option_c": "Benar-benar terjadi, cidera pada pekerja tambang, akibat kegiatan jual beli, pada jam kerja pekerja tambang, terjadi di luar wilayah tambang",
  "option_d": "Benar-benar terjadi, cidera pada pekerja tambang, akibat kegiatan usaha pertambangan, pada jam pekerja tambang, terjadi di wilayah tambang",
  "question": "Terdapat beberapa kriteria kecelakaan agar kecelakaan tersebut masuk kedalam kecelakaan tambang, antara lain",
  "quiz_code": "PRO-EG-3-2",
  "updated_at": 1741166477134,
  "updated_by": 180512
};

var error_message = []
var import_status = "success"

if (!req.question) {
  error_message.push("Question is Required.")
  import_status = "failed"
}

if (!req.correct_answer) {
  error_message.push("Correct Answer (A or B or C or D) is Required.")
  import_status = "failed"
} else {
  var valid_answers = ["A", "B", "C", "D"];
  if (valid_answers.indexOf(req.correct_answer) === -1) {
    error_message.push("Correct Answer must be one of A, B, C, or D.");
    import_status = "failed";
  }
}

var answer_options = []
var log = ""
log = error_message.join(",");

console.log(log);