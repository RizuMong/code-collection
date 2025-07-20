var req = {
  "company_id": 27414,
  "created_at": 1744814963183,
  "created_by": 178566,
  "email": "chris+01@mekari.com",
  "id": "nTIoviJNg",
  "id_import": "nTIoviJNg",
  "import_id": "B2ITDi1Ng",
  "kode_redaksi": "18",
  "nama_jabatan": "Penata Recruitment and Career",
  "nama_lengkap": "Albert Einstein",
  "pelamar_id": 45217,
  "updated_at": 1744814963183,
  "updated_by": 178566
}

// Declare
var errors = [];
var statusImport = "";
var keterangan = "";

// Mandatory columns
var mandatoryFields = [
  { key: "kode_redaksi", label: "Kode Redaksi" },
  { key: "pelamar_id", label: "ID Pelamar" },
  { key: "nama_jabatan", label: "Nama Jabatan" },
  { key: "nik", label: "NIK" },
  { key: "nama_lengkap", label: "Nama Lengkap" },
  { key: "email", label: "Email" }
];

for (var i = 0; i < mandatoryFields.length; i++) {
  var field = mandatoryFields[i];
  if (!req[field.key]) {
      errors.push(field.label + " wajib diisi.");
  };
};

// Regex
var regexRules = [
  {
      key: "kode_redaksi",
      label: "Kode Redaksi",
      regex: /^[a-zA-Z0-9\s]+$/,
      message: "tidak boleh mengandung karakter spesial"
  },
  {
    key: "nama_jabatan",
    label: "Nama Jabatan",
    regex: /^[a-zA-Z0-9\s]+$/,
    message: "tidak boleh mengandung karakter spesial"
  },
  {
    key: "nama_lengkap",
    label: "Nama Lengkap",
    regex: /^[a-zA-Z0-9\s]+$/,
    message: "tidak boleh mengandung karakter spesial"
  },
  {
    key: "email",
    label: "Email",
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Format email tidak valid"
  },
  {
    key: "nik",
    label: "NIK",
    regex: /^[a-zA-Z0-9\s]+$/,
    message: "Format NIK tidak valid"
  },
  {
    key: "pelamar_id",
    label: "ID Pelamar",
    regex: /^[0-9]+$/,
    message: "Format ID Pelamar tidak valid, seharusnya hanya angka"
  }  
];

function getValue(obj, key) {
  var parts = key.split(".");
  var val = obj;
  for (var i = 0; i < parts.length; i++) {
      if (val == null) return "";
      val = val[parts[i]];
  }
  return val;
}

regexRules.forEach(function (rule) {
  var value = getValue(req, rule.key);
  if (value && !rule.regex.test(value)) {
      errors.push(rule.label + " " + rule.message);
  }
});

statusImport = errors.length > 0 ? "failed" : "success";
keterangan = errors.length > 0 ? errors.join(", ") : "";

console.log(statusImport);
console.log(keterangan);