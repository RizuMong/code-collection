var req = {
  "company_id": 27414,
  "created_at": 1744702926274,
  "created_by": 178566,
  "email": "rizki.haddi@mekari.com",
  "id": "LpGf3q0HR",
  "id_import": "LpGf3q0HR",
  "import_id": "85GBqqAHR",
  "jenis_pelaksanaan": "ONLINE",
  "kode_redaksi": "RED001",
  "nama_jabatan": "Solutioon Engineer",
  "nama_kandidat": "Rizki Haddi",
  "tempat_pelaksanaan": "ZOOM MEETING",
  "updated_at": 1744702926274,
  "updated_by": 178566,
  "waktu_mulai_acara": "Sabtu, 15 November 2025, 10.00 WIB"
}

// Declare
var errors = [];
var statusImport = "";
var keterangan = "";

// Mandatory columns
var mandatoryFields = [
  { key: "kode_redaksi", label: "Kode Redaksi" },
  // { key: "kode_tahapan_rekrutmen", label: "Kode Tahapan Rekrutmen" },
  { key: "nama_jabatan", label: "Nama Jabatan" },
  { key: "nama_kandidat", label: "Nama Kandidat" },
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
      key: "kode_tahapan_rekrutmen",
      label: "Kode Tahapan Rekrutmen",
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
    key: "email",
    label: "Email",
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Format email tidak valid"
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


