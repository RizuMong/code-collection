const competenciesWithGaps = [];
const competencies = [];

for (let i = 0; i < competencies.length; i++) {
  if (competencies.result !== "PASS") {
    competenciesWithGaps.push(competencies[i]);
  }
}

const gapCurrent = [];
const gapNext = [];

function splitGapCompetencies(arr, gapCurrent, gapNext) {
  gapCurrent = arr.filter((competency) => competency.target === "CURRENT");
  gapNext = arr.filter((competency) => competency.target === "DEVELOPMENT");
}

splitGapCompetencies(competenciesWithGaps, gapCurrent, gapNext);

function getTrainingRecommendation(arr) {
  const training_recommendations = [];

  arr.forEach((competency) => {
    function findTraining(competency_id) {
      const filter = {
        master_training_competency: {
          category_event: "TRN",
          competency_id: competency_id,
        },
      };

      const event_ids = []; //DATA MANAGER FIND RECORDS

      event_ids.forEach((event_id) => {
        training_recommendations.push(event_id);
      });
    }

    findTraining(competency);
  });

  return removeDuplicate(training_recommendations);
}

if (gapCurrent.length > 0) {
  recommendation = getTrainingRecommendation(gapCurrent);
} else if (gapNext.length > 0) {
  recommendation = getTrainingRecommendation(gapNext);
} else {
  const current_required_trainings = dataManager_FindRecords({
    table: "master_event_development",
    category_event: "TRN",
    jabatan_id: current_jabatan_id,
    grade_id: current_grade_id,
  });

  const training_history = dataManager_FindRecords({
    table: "t_training_participant",
    employee_id: employee_id,
    category_event: "TRN",
    status_kelulusan: "PASS",
  });

  const current_todo_trainings = current_required_trainings.map((training) => {
    training_history.forEach((history) => {
      if (history.event_id.id === training.event_id.id) {
        return training_id;
      }
    });
  });

  let next_jabatan_id = _hitFunction(
    get_next_position({
      jabatan_id: current_jabatan_id,
      grade_id: current_grade_id,
    })
  ).jabatan_id;

  let next_grade_id = _hitFunction(
    get_next_position({
      jabatan_id: current_jabatan_id,
      grade_id: current_grade_id,
    })
  ).grade_id;

  if (current_todo_trainings.length > 0) {
    recommendation = current_todo_trainings;
  } else {
    recommendation = dataManager_FindRecords({
      table: "master_event_development",
      category_event: "TRN",
      jabatan_id: next_jabatan_id,
      grade_id: next_grade_id,
    });
  }
}
