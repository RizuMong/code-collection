var resultWorkflows = {
  approver_by: "by_advance_organigram",
  flag_skip: "No",
  flow_name: ["BY REPORTING LINE", "BY POSITION", "BY REPORTING LINE"],
  flow_type: ["minimum", "minimum", "minimum"],
  minimum_action: [1, 1, 1],
  organigram_ids: [[809], [809], [803]],
};

var seen = [];
for (var i = 0; i < resultWorkflows.organigram_ids.length; i++) {
  var current = resultWorkflows.organigram_ids[i];
  if (current && current.length > 0) {
    var val = current[0];
    if (seen.indexOf(val) === -1) {
      seen.push(val);
    } else {
      resultWorkflows.organigram_ids[i] = [];
    }
  }
};

console.log(resultWorkflows);


/*
    1. validate data resultWorkflows dan cari data duplicate di organigram_ids
    2. kalau nemu yang duplicate berarti pertahankan data paling atas

    jadi expected resultnya gini:
  
  approver_by: "by_advance_organigram",
  flag_skip: "No",
  flow_name: ["BY REPORTING LINE", "BY POSITION", "BY REPORTING LINE"],
  flow_type: ["minimum", "minimum", "minimum"],
  minimum_action: [1, 1, 1],
  organigram_ids: [[809], [], [803]],
*/