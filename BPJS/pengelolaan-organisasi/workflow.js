var req = {
  body: {
    data: {
      lines: [
        {
          approver_type: "BY POSITION",
          jabatan_ids: [],
          level: null,
          minimum_action: 0,
          position_id: {
            id: "",
            name: "",
          },
          position_ids: [
            {
              id: "cEj2my3uQaaQ",
              name: "Kepala Kantor Wilayah Kantor Wilayah Banten",
            },
            {
              id: "qTdW6ko3Y1Wc",
              name: "Kepala Bidang Pengendalian Operational Kantor Cabang Jakarta Pulogebang",
            },
          ],
        },
      ],
      unit_kerja_ids: [
        {
          id: "CmoCmjOSgrCo",
          name: "Sub Bidang Pelayanan Kantor Wilayah DKI Jakarta",
        },
      ],
      workflow_id: "2BwuE3eYx5b7",
    },
    type: "create",
  },
};

var getListApprovalLines = [
  {
    company_id: 27414,
    created_at: 1758096606265,
    created_by: 178566,
    id: "tSvaA80yvJG",
    id_approval_line: "tSvaA80yvJG",
    lines: [
      {
        approver_type: "BY REPORTING LINE",
        level: 1,
        position_id: {
          id: "",
          name: "",
        },
        position_ids: [],
      },
    ],
    unit_kerja_ids: [
      {
        id: "izulVdKDjfXK",
        name: "Direktorat Utama",
      },
    ],
    updated_at: 1758096606265,
    updated_by: 178566,
    workflow_id: "2BwuE3eYx5b7",
  },
];

// Default Response
var message = "Data retrieved successfully.";
var statusCode = 200;
var data = [];
var error = false;

// Validasi Lines Kosong
if (req.body.data.lines.length === 0) {
  message = "Field Pengaturan Approver diperlukan";
  statusCode = 400;
  error = true;
}

// Validasi Duplikat
var isDuplicate = false;
var duplicateUnits = [];

if (req.body.type === "create") {
  getListApprovalLines.forEach(function (item) {
    item.unit_kerja_ids.forEach(function (unit) {
      req.body.data.unit_kerja_ids.forEach(function (reqUnit) {
        if (unit.id === reqUnit.id) {
          isDuplicate = true;
          if (duplicateUnits.indexOf(reqUnit.name) === -1) {
            duplicateUnits.push(reqUnit.name);
          }
        }
      });
    });
  });
} else if (req.body.type === "update") {
  getListApprovalLines.forEach(function (item) {
    if (item.id_approval_line !== req.body.data.id_approval_line) {
      item.unit_kerja_ids.forEach(function (unit) {
        req.body.data.unit_kerja_ids.forEach(function (reqUnit) {
          if (unit.id === reqUnit.id) {
            isDuplicate = true;
            if (duplicateUnits.indexOf(reqUnit.name) === -1) {
              duplicateUnits.push(reqUnit.name);
            }
          }
        });
      });
    }
  });
}

if (isDuplicate) {
  message = "Duplikat ditemukan di unit kerja: " + duplicateUnits.join(", ");
  statusCode = 400;
  error = true;
}

// validate minimum action
for (var i = 0; i < req.body.data.lines.length; i++) {
  var line = req.body.data.lines[i];

  var posLen = line.position_ids && line.position_ids.length ? line.position_ids.length : 0;
  var jabLen = line.jabatan_ids && line.jabatan_ids.length ? line.jabatan_ids.length : 0;
  var totalPositions = posLen + jabLen;

  // Minimum action = 0 -> pesan khusus
  if (line.minimum_action === 0) {
    message =
      "Minimum persetujuan pada line ke-" + (i + 1) + " tidak boleh bernilai 0.";
    statusCode = 400;
    error = true;
    break;
  }

  // Validasi jika total posisi/jabatan < minimum_action
  if (line.minimum_action > 0 && totalPositions < line.minimum_action) {
    var label = "";
    if (posLen > 0 && jabLen > 0) {
      label = "posisi dan jabatan";
    } else if (posLen > 0) {
      label = "posisi";
    } else if (jabLen > 0) {
      label = "jabatan";
    } else {
      label = "posisi/jabatan";
    }

    message =
      "Total " +
      label +
      " yang dipilih tidak boleh kurang dari minimum persetujuan (" +
      totalPositions +
      " dipilih, minimum " +
      line.minimum_action +
      ", Line ke-" +
      (i + 1) +
      ")";
    statusCode = 400;
    error = true;
    break;
  }
}

console.log({
  message: message,
  statusCode: statusCode,
  data: data,
  error: error,
});
