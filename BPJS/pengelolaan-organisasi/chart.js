var getData = [
  {
    id_jabatan: "B9qBa92DRleGjRD",
    is_supervisor: true,
    is_top_organization: false,
    nama: "Supervise IT",
    structure_parent_id: {
      id: "",
      name: "",
    },
  },
  {
    id_jabatan: "uhXNjwCIRGpX2foH",
    is_supervisor: false,
    is_top_organization: true,
    nama: "Direktur IT",
    structure_parent_id: {
      id: "",
      name: "",
    },
  },
  {
    id_jabatan: "uhXNjwCIRGpX2foH",
    is_supervisor: false,
    is_top_organization: false,
    nama: "IT Staff",
    structure_parent_id: {
      id: "uhXNjwCIRGpX2foH",
      name: "DT - Direktur IT",
    },
  },
];

function _log(msg) {
  console.log(msg);
}

var req = {
  body: {
    data: {
      id_level_organisasi: "0MAkDm5HR",
      structure_parent_id: "",
    },
  },
};

// Default Response
var message = "Data retrieved successfully.";
var statusCode = 200;
var data = [];
var error = false;
var isTopChart = true;

if (req && req.body && req.body.data && req.body.data.structure_parent_id) {
  isTopChart = false;
}

console.log(isTopChart);

// Validate Data Chart
for (var i = 0; i < getData.length; i++) {
  var item = getData[i];
  var isSuperviseParent = item.is_supervisor;
  var topOrganization = item.is_top_organization;

  if (isTopChart) {
    _log("Masuk 1");
    data.push({
      id_jabatan: item.id_jabatan,
      name: item.nama,
      structure_parent_id: item.structure_parent_id.id,
      supervise_parent: false,
    });
  };
  
  if (!isTopChart && !topOrganization) {
    _log("Masuk 2");
    data.push({
      id_jabatan: item.id_jabatan,
      name: item.nama,
      structure_parent_id: item.structure_parent_id.id,
      supervise_parent: isSuperviseParent,
    });
  }
}

console.log(data);
