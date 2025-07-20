var req = {
  body: {
    berkas_dokumen:
      "http://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/67f54c4037fff-image-%2833%29.png",
    employee_document_id: "SxKNO9HNasLpIJri",
    id_employee_document_detail: "hfqpNVgXuSRTBeWW",
    link: "https://apps-bpjs.jojonomic.com/",
    nomor_dokumen: "",
    tanggal_efektif: 1744045200000,
    tanggal_habis_masa_berlaku: 1744045200000,
    tipe_dokumen: "KELUARGA",
  },
};

var res = {
  "error": false,
  "message": "Sukses Menambahkan Bank Karyawan",
  "statusCode": 200,
  "data": {}
};

var REGEX = /^[a-zA-Z0-9]+$/;

if (!!req.body.nomor_dokumen) {
  if (!REGEX.test(req.body.nomor_dokumen)) {
    res.message = "Nomor dokumen memiliki spesial karakter";
    res.error = true;
    res.statusCode = 400;
  }
}


console.log(res);



const header = [
  "KERJA",
  "MALAS"
];

const content = [
  {
    "KERJA": "KERJA",
    "MALAS": "MALAS",
  }
]