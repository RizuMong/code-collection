// === VALIDASI FORMAT ===
function getValue(obj, key) {
  var parts = key.split(".");
  var val = obj;
  for (var i = 0; i < parts.length; i++) {
      if (val == null) return "";
      val = val[parts[i]];
  }
  return val;
}

// Regex rules
var regexRules = [
  {
      key: "nama_tes",
      label: "Nama Tes",
      regex: /^[a-zA-Z0-9\s]+$/,
      message: "tidak boleh mengandung karakter spesial"
  },
  {
      key: "penyelenggara",
      label: "Penyelenggara",
      regex: /^[a-zA-Z0-9\s]+$/,
      message: "tidak boleh mengandung karakter spesial"
  },
  {
      key: "hasil",
      label: "Hasil Tes",
      regex: /^[a-zA-Z0-9\s]+$/,
      message: "tidak boleh mengandung karakter spesial"
  },
  {
      key: "nilai",
      label: "Nilai",
      regex: /^[0-9.,]+$/,
      message: "hanya boleh berisi angka, koma (,) dan titik (.)"
  },
  {
      key: "biaya",
      label: "Biaya",
      regex: /^[0-9]+$/,
      message: "hanya boleh mengandung angka."
  }
];

regexRules.forEach(function (rule) {
  var value = getValue(body, rule.key);
  if (value && !rule.regex.test(value)) {
      errors.push(rule.label + " " + rule.message);
  }
});