var resultWorkflows = {
  approver_by: "by_advance_organigram",
  flag_skip: "No",
  flow_name: ["BY REPORTING LINE", "BY JABATAN", "BY REPORTING LINE"],
  flow_type: ["minimum", "minimum", "minimum"],
  minimum_action: [1, 1, 1],
  organigram_ids: [[803], [803], [783]],
};

var seen = [];
var i = 0;

while (i < resultWorkflows.organigram_ids.length) {
  var current = resultWorkflows.organigram_ids[i];
  var isEmpty = !current || current.length === 0;
  var isDuplicate = false;

  if (!isEmpty) {
    var val = current[0];
    if (seen.indexOf(val) === -1) {
      seen.push(val);
    } else {
      isDuplicate = true;
    }
  }

  // hapus semua data sejajar kalau kosong atau duplikat
  if (isEmpty || isDuplicate) {
    resultWorkflows.organigram_ids.splice(i, 1);
    resultWorkflows.flow_name.splice(i, 1);
    resultWorkflows.flow_type.splice(i, 1);
    resultWorkflows.minimum_action.splice(i, 1);
  } else {
    i++;
  }
}

console.log(resultWorkflows);

// buat kalau datanya gak nemu di salah satu organigram_ids maka data minimum_action, flow_type, flow_name dihapus di index yang sama

// Approval
// res = resultWorkflows;
