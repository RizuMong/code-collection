// var req = {
//   action: "Promosi",
//   company_id: 27414,
//   created_at: 1742287763993,
//   created_by: 178566,
//   effective_date: 1742230800000,
//   flow_status: "draft",
//   golongan_id: {
//     id: "xDASVLVGs3FToKho",
//     name: "V",
//   },
//   grade_jabatan_id: {
//     id: "xDAImtz8OSgwojMc",
//     name: "1111222",
//   },
//   id_employee_jabatan: "XniXyD2kBw3Ab1XM",
//   kelompok_jabatan_id: {
//     id: "6Xm8VZ2L2Cmsgt6p",
//     name: "PDJ. Pelayanan Masyarakat",
//   },
//   level_jabatan_id: {
//     id: "ecUxNm5Ng",
//     name: "Senior Officer",
//   },
//   level_organisasi_id: {
//     id: "UKdFqbM9lXFBLQ9g",
//     name: "Level jabatan 1",
//   },
//   npk_id: {
//     id: "bqDX543A98rYZzlK",
//     name: "100022525 - Prayoga",
//   },
//   position_id: {
//     id: "s6C56C7PFNCf8JQh",
//     name: "Supervise IT ",
//   },
//   rumpun_id: {
//     id: "uhXu5aTsbhYK21MW",
//     name: "testing",
//   },
//   status_jabatan_id: {
//     id: "haYsHm5Ng",
//     name: "Definitif",
//   },
//   updated_at: 1742287763993,
//   updated_by: 178566,
//   wilayah_id: {
//     id: "XnigZHlAzE35bqmf",
//     name: "Kantor Pusat",
//   },
//   workflow_id: "workflow_pengajuan_perubahan_pegawai",
// };

// var dataPengajuan = {
//   "agama_id": {
//     "id": "58tLdNSCCOy5QDh9",
//     "name": "Kristen Protestan"
// },
// "alamat": "Alamattt",
// "automation_id": "lNRDzfPZ0lkzi9I5",
// "bangsa_id": {},
// "beasiswa": "YES",
// "city_id": {
//     "id": "31uMjx49qwqUWWbI",
//     "name": "Surabayaaa"
// },
// "dob": 1742454420000,
// "email": "email@example.com",
// "first_name": "Jack",
// "flow_status": "draft",
// "full_name": "Jack",
// "gender": "Pria",
// "id": "YjMhL5nNJvtREVot",
// "id_employee": "YjMhL5nNJvtREVot",
// "jenjang_pendidikan_diakui": "S1",
// "jenjang_pendidikan_terakhir": "S1",
// "jurusan": "Teknik",
// "kebangsaan_id": {
//     "id": "8gS5uPn83TFxRhY1",
//     "name": "Indonesiaa"
// },
// "last_name": "Jack",
// "mobile_phone": "08573232542525",
// "nama_ibu_kandung": "Jennie",
// "nama_relasi": "Jokowi",
// "nomor_ktp": "3201243436563463",
// "pendidikan_diakui": "S1",
// "pendidikan_terakhir": "S1",
// "perusahaan_relasi": "Mekari",
// "phone": "08573232542525",
// "pob": "Indonesia",
// "posisi_relasi": "Manager",
// "status_ketergantungan": "Status",
// "status_pajak": "Active",
// "status_pernikahan": "Menikah",
// "subjurusan": "Informatika",
// "workflow_id": "perubahan_data_karyawan"
// };

// function generateOTP() {
//   var timestamp = Date.now().toString();
//   var randomNum = Math.floor(Math.random() * 100000).toString();
//   while (randomNum.length < 9) {
//       randomNum = '0' + randomNum;
//   }

//   var combined = (parseInt(timestamp.slice(-9), 10) + parseInt(randomNum, 10)).toString();
//   var otp = combined.slice(-9).split('').reverse().join('');

//   return otp;
// }

// var code = generateOTP();
// console.log(code);

// var baseURL = "https://api-oos.jojonomic.com/27414";
// var targetURL = baseURL + "/organization/validation/pengelolaan-perubahan/submit";
// var header = {
//     "Content-Type": "application/json",
//     "Authorization": _user.token
// };

// var hitAPI = _hitExternalAPI(targetURL, "POST", _record, header);
// var message = hitAPI.body.message;
// var error = hitAPI.body.error;

var request = {
  company_id: 27414,
  created_at: 1742535107600,
  created_by: 181238,
  id: "aq1SF3hHgz",
  id_provinsi: "aq1SF3hHgz",
  import_id: "JCJIFqhHR",
  import_status: "Processing",
  kode: "238",
  nama: "Papua New",
  status: "",
  updated_at: 1742535107600,
  updated_by: 181238,
};

var fieldRequired = ["kode", "nama", "status"];

function validateRequest(req, fields) {
  var missingFields = [];
  var i, field;

  for (i = 0; i < fields.length; i++) {
    field = fields[i];
    if (!req[field]) {
      missingFields.push(field.toUpperCase());
    }
  }

  if (missingFields.length) {
    var message = 'Missing or empty fields: "' + missingFields.join('", "') + '"';
    return {
      error: true,
      message: message,
    };
  };

  return {
    error: false,
    message: "Success",
  };
};

console.log(validateRequest(request, fieldRequired));
