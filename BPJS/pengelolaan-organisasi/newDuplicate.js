var getDuplicate = [
  {
    company_id: 27414,
    created_at: 1740107945742,
    created_by: 178566,
    id: "oPsOCt1BCECcljk2",
    id_perusahaan: "oPsOCt1BCECcljk2",
    kode: "1234",
    nama: "MeKaRi",
    nama_pemotong_pajak: "",
    npwp: 1234567890123459,
    npwp_pemotong_pajak: null,
    provinsi_id: {
      id: "w_vpIRcNR",
      name: "Jawa Barat",
    },
    updated_at: 1740107945742,
    updated_by: 178566,
  },
];

var req = {
  body: {
    kode: "1234",
    nama: "MeKAri",
    nama_pemotong_pajak: "",
    npwp: 1234567890123759,
    npwp_pemotong_pajak: null,
    provinsi_id: {
      id: "w_vpIRcNR",
      name: "Jawa Barat",
    },
  },
};

// Default Response
var message = "Data posted successfully";
var statusCode = 200;
var error = false;

// Validate Duplicate
var id = req.body.id;
var id_perusahaan = req.body.id_perusahaan;
var npwp = req.body.npwp;
var nama = req.body.nama;

var isDuplicateNPWP = false;
var isDuplicateBoth = false;
var isDuplicateName = false;
for (var i = 0; i < getDuplicate.length; i++) {
  if (
    getDuplicate[i].npwp === npwp &&
    getDuplicate[i].id_perusahaan !== id_perusahaan
  ) {
    isDuplicateNPWP = true;
    break;
  }

  if (
    getDuplicate[i].nama.toUpperCase() === nama.toUpperCase() &&
    getDuplicate[i].id_perusahaan !== id_perusahaan
  ) {
    isDuplicateName = true;
    break;
  }

  if (
    getDuplicate[i].npwp === npwp &&
    getDuplicate[i].nama.toUpperCase() === nama.toUpperCase() &&
    getDuplicate[i].id_perusahaan !== id_perusahaan
  ) {
    isDuplicateBoth = true;
    break;
  }
}

if (isDuplicateBoth) {
  error = true;
  statusCode = 401;
  message =
    "Failed to save data. This job group code and name combination already exists in the system. Please verify your data.";
}

if (isDuplicateNPWP) {
  error = true;
  statusCode = 401;
  message =
    "Failed to save data. This NPWP number is already registered. Please check again.";
}

if (isDuplicateName) {
  error = true;
  statusCode = 401;
  message =
    "Failed to save data. This company name is already in the system. Please use a different name.";
}

console.log({
  error: error,
  message: message,
  statusCode: statusCode,
});
