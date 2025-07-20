var request = {
  company_id: 27414,
  created_at: 1742541854522,
  created_by: 181238,
  id: "bB2Y132NRz",
  id_perusahaan: "bB2Y132NRz",
  import_id: "X-hLJqhNg",
  import_status: "Processing",
  kode: "209",
  kode_provinsi: "1",
  nama: "kantor abun",
  nama_pemotong_pajak: "",
  npwp: 7890876546789080,
  npwp_pemotong_pajak: 0,
  status: "Active",
  updated_at: 1742541854522,
  updated_by: 181238,
};

var fieldRequired = ["kode", "nama", "status", "npwp", "kode_provinsi"];

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

_fieldProperties.unit_kerja_induk.is_hidden = true;

if (!_field.is_parent) {
  _fieldProperties.unit_kerja_induk.is_hidden = false;
};

