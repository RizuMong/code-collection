var req = {
  body: {
    kode: "halo",
    id: "frpYpMcNR",
    id_organisasi: "frpYpMcNR",
    level_organisasi_id: {
      id: "0MAkDm5HR",
      name: "Bidang Pelayanan Madya B",
    },
    nama: "TESTS",
  },
};

var getDuplicateName = [];
var getDuplicateBoth = [];
var getDuplicateKode = [
  {
    company_id: 27414,
    created_at: 1739517760404,
    created_by: 178566,
    id: "frpYpMcNR",
    id_organisasi: "frpYpMcNR",
    kode: "halo",
    level_organisasi_id: {
      id: "0MAkDm5HR",
      name: "Bidang Pelayanan Madya B",
    },
    nama: "TESTS",
    updated_at: 1739953702989,
    updated_by: 178566,
  },
  // {
  //   company_id: 27414,
  //   created_at: 1739248858430,
  //   created_by: 178566,
  //   id: "qD4StrFNR",
  //   id_organisasi: "qD4StrFNR",
  //   kode: "halo",
  //   level_organisasi_id: {
  //     id: "2QhZt9KNR",
  //     name: "test",
  //   },
  //   nama: "aul",
  //   updated_at: 1739363743787,
  //   updated_by: 180896,
  // },
];

var id = req.body.id;
var id_organisasi = req.body.id_organisasi;
var kode = req.body.kode;
var nama = req.body.nama;

var error = false;
var statusCode = 200;
var message = "Data successfully updated.";

var isDuplicateKode = false;
for (var i = 0; i < getDuplicateKode.length; i++) {
  if (
    getDuplicateKode[i].kode === kode 
    // getDuplicateKode[i].id_organisasi !== id_organisasi
  ) {
    isDuplicateKode = true;
    break;
  }
}

var isDuplicateName = false;
for (var j = 0; j < getDuplicateName.length; j++) {
  if (
    getDuplicateName[j].nama === nama 
    // getDuplicateName[j].id_organisasi !== id_organisasi
  ) {
    isDuplicateName = true;
    break;
  }
}

var isDuplicateBoth = false;
for (var k = 0; k < getDuplicateBoth.length; k++) {
  if (
    getDuplicateBoth[k].kode === kode &&
    getDuplicateBoth[k].nama === nama 
    // getDuplicateBoth[k].id_organisasi !== id_organisasi
  ) {
    isDuplicateBoth = true;
    break;
  }
}

if (isDuplicateBoth) {
  error = true;
  statusCode = 401;
  message =
    "Failed to save data. This organization code and name combination is already in the system. Please verify your data.";
}

if (isDuplicateKode) {
  error = true;
  statusCode = 401;
  message =
    "Failed to save data. This organization code is already in the system. Please use a different code.";
}

if (isDuplicateName) {
  error = true;
  statusCode = 401;
  message =
    "Failed to save data. This organization name is already in the system. Please use a different name.";
}

// Output hasil
console.log({ error: error, statusCode: statusCode, message: message });
