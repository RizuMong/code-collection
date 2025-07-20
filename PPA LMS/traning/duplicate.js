var getTrainingCompetency = [
  {
    company_id: 25257,
    competency_id: {
      id: "3ZT1n9iNR",
      name: "BC-1D-1 POSITIVE TEST CASE-BASIC-TRACK EQUIPMENT GROUP-PC BIGDIGGER",
    },
    event_id: {},
    created_at: 1729577587905,
    created_by: 175332,
    event_id_text: "WQYSp5iNg",
    id: "k4h6nrmNg",
    id_training_competency: "k4h6nrmNg",
    updated_at: 1729577587905,
    updated_by: 175332,
  },
  {
    company_id: 25257,
    competency_id: {
      id: "3ZT1n9iNR",
      name: "BC-1D-1 POSITIVE TEST CASE-BASIC-TRACK EQUIPMENT GROUP-PC BIGDIGGER",
    },
    event_id: {
      id: "WQYSp5iNg",
      name: "POSITIVE TEST",
    },
    created_at: 1729577587905,
    created_by: 175332,
    event_id_text: "WQYSp5iNg",
    id: "k4h6nrmNg",
    id_training_competency: "k4h6nrmNg",
    updated_at: 1729577587905,
    updated_by: 175332,
  },
];


function getCompletenessScore(data) {
  let score = 0;
  
  // Tambah kolom disini
  if (data.event_id && data.event_id.id) score++;
  if (data.competency_id && data.competency_id.id) score++;
  
  return score; 
};

var seen = {};
var duplicates = [];


for (var i = 0, len = getTrainingCompetency.length; i < len; i++) {
  var item = getTrainingCompetency[i];
  var key = item.event_id_text;

  if (seen[key]) {
    var currentCompleteness = getCompletenessScore(item);
    var existingCompleteness = getCompletenessScore(seen[key]);

    if (currentCompleteness > existingCompleteness) {
      duplicates.push(seen[key]);
      seen[key] = item; 
    } else {
      duplicates.push(item);
    }
  } else {
    seen[key] = item;
  }
};

console.log(duplicates);