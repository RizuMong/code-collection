var req = {
  data: {
    company_id: 27414,
    created_at: 0,
    created_by: 187329,
    description: "Workflow Pengajuan Cuti",
    flow_status: "",
    id: "vlQAVKqcXM2ymN3Q",
    id_workflow: "vlQAVKqcXM2ymN3Q",
    kode: "pengajuan_cuti",
    nama: "Pengajuan Cuti",
    updated_at: 1747910086085,
    updated_by: 187329,
  },
  positions: [[1, 2, 3], [4], [5], [6, 7]],
};

var headerNotification = "Notifikasi Approval";
var contentNotification = "";

if (req && req.data && Object.keys(req.data).length > 0) {
  contentNotification =
    "Anda memiliki transaksi " +
    req.data.nama +
    " yang menunggu persetujuan. Mohon segera tinjau untuk diproses.";
}

var positions = req.positions || [];
var flattenedPositions = [];
for (var i = 0; i < positions.length; i++) {
  var group = positions[i];
  if (Array.isArray(group)) {
    for (var j = 0; j < group.length; j++) {
      flattenedPositions.push(group[j]);
    }
  }
}

console.log({
  headerNotification: headerNotification,
  contentNotification: contentNotification,
  positions: flattenedPositions,
});
