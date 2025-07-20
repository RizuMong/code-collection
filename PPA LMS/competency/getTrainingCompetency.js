var getTrainingCompetency = [
  {
    company_id: 25257,
    competency_id: {
      id: "RIDhSLRHg",
      name: "BC-PERIODIC INSPECTION-BASIC-WHEEL EQUIPMENT GROUP-GRADER, ETC",
    },
    created_at: 1728372690636,
    created_by: 175332,
    event_id_text: "27hArhkNR",
    id: "5P99H8zNg",
    id_training_competency: "5P99H8zNg",
    updated_at: 1728372690636,
    updated_by: 175332,
  },
  // {
  //   company_id: 25257,
  //   competency_id: {
  //     id: "RIDhSLRHg",
  //     name: "BC-PERIODIC INSPECTION-BASIC-WHEEL EQUIPMENT GROUP-GRADER, ETC",
  //   },
  //   created_at: 1728372690636,
  //   created_by: 175332,
  //   event_id_text: "27hArhkNR",
  //   id: "5P99H8zNg",
  //   id_training_competency: "5P99H8zNg",
  //   updated_at: 1728372690636,
  //   updated_by: 175332,
  // },
  // {
  //   company_id: 25257,
  //   competency_id: {
  //     id: "RIDhSLRHg",
  //     name: "BC-PERIODIC INSPECTION-BASIC-WHEEL EQUIPMENT GROUP-GRADER, ETC",
  //   },
  //   created_at: 1728372690636,
  //   created_by: 175332,
  //   event_id_text: "27hArhkNR",
  //   id: "5P99H8zNg",
  //   id_training_competency: "5P99H8zNg",
  //   updated_at: 1728372690636,
  //   updated_by: 175332,
  // },
];

var seen = {};
var duplicates = [];
var uniqueCompetencies = {
  id: "",
  name: ""
};

for (var i = 0, len = getTrainingCompetency.length; i < len; i++) {
  var item = getTrainingCompetency[i];
  var key = item.event_id_text;

  if (seen[key]) {
    duplicates.push(item);
    seen[key]++;
  }
  if (!seen[key]) {
    uniqueCompetencies.id = item.competency_id.id;
    uniqueCompetencies.name = item.competency_id.name;
  } else {
    seen[key] = 1;
  }
}

console.log(duplicates);
console.log(uniqueCompetencies);
