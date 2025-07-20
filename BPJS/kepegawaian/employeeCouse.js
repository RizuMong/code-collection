var req = {
  "company_id": 27414,
  "created_at": 1743671839658,
  "created_by": 178566,
  "employee_id": {
      "id": "N2HB6uHQjUL1zF5A",
      "name": "Rizki Haddi"
  },
  "id_course_employee": "kAaeywX8Q4agKVpw",
  "institusi": "BWA",
  "mulai_periode": 1743613200000,
  "nama": "MERN",
  "selesai_periode": 1743613200000,
  "sertifikasi": "",
  // "sertifikasi": "http://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/67ee525b13b56-Contoh-CV.pdf",
  "updated_at": 1743671839658,
  "updated_by": 178566
};

var hasCertification = "Tidak";

if (req.sertifikasi) {
    hasCertification = "Ya";
};


console.log(hasCertification);