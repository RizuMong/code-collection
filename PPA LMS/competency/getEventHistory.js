var getEventHistory = [
  {
    category_event: "TRN",
    is_completed: true,
    "status_kelulusan": "PASS",
    employee_id: {
      id: "soeScsgNR",
      name: "KMS",
    },
    updated_at: 1728058105042,
    updated_by: 175332,
  },
];

var completedTraining = [];

for (var i = 0, len = getEventHistory.length; i < len; i++) {
  var item = getEventHistory[i];
  item.is_training_result = item.is_completed; 
  completedTraining.push(item);
};

console.log(completedTraining);
