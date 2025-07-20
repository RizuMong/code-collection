var getTrainingQuiz = [
  {
    company_id: 25257,
    created_at: 1730096644034,
    created_by: 175332,
    id: "i386BFZNR",
    id_training_quiz: "i386BFZNR",
    mds_id: {
      id: "uGN6fKWNR",
      name: "TRN1-PPA-PTBA-PLT-102024",
    },
    mds_id_text: "uGN6fKWNR",
    quiz_ids: [
      {
        is_open: false,
        learning_path_id: null,
        passing_grade: 80,
        quiz_id: {
          id: "NS1eSKWNg",
          name: "PRE-TEST QUIZ SEQUENCE",
        },
        type_quiz: "Pre-Test",
      },
      {
        is_open: false,
        learning_path_id: null,
        passing_grade: 80,
        quiz_id: {
          id: "LPNgNKWNR",
          name: "POST-TEST QUIZ SEQUENCE",
        },
        type_quiz: "Post-Test",
      },
      {
        is_open: false,
        learning_path_id: {
          id: "3wCEHKZNR",
          name: "BELAJAR HTML",
        },
        passing_grade: 90,
        quiz_id: {
          id: "hDciNKWHg",
          name: "ATTENDANCE QUIZ SEQUENCE",
        },
        type_quiz: "Attendance",
      },
    ],
    updated_at: 1730100682519,
    updated_by: 175332,
  },
  {
    company_id: 25257,
    created_at: 1730096644034,
    created_by: 175332,
    id: "i386BFZNR",
    id_training_quiz: "i386BFZNR",
    mds_id: {
      id: "uGN6fKWNR",
      name: "TRN1-PPA-PTBA-PLT-102024",
    },
    mds_id_text: "uGN6fKWNR",
    quiz_ids: [
      {
        is_open: false,
        learning_path_id: null,
        passing_grade: 80,
        quiz_id: {
          id: "NS1eSKWNg",
          name: "PRE-TEST QUIZ SEQUENCE",
        },
        type_quiz: "Pre-Test",
      },
      {
        is_open: false,
        learning_path_id: null,
        passing_grade: 80,
        quiz_id: {
          id: "LPNgNKWNR",
          name: "POST-TEST QUIZ SEQUENCE",
        },
        type_quiz: "Post-Test",
      },
      {
        is_open: true,
        learning_path_id: {
          id: "3wCEHKZNR",
          name: "BELAJAR HTML",
        },
        passing_grade: 90,
        quiz_id: {
          id: "hDciNKWHg",
          name: "ATTENDANCE QUIZ SEQUENCE",
        },
        type_quiz: "Attendance",
      },
    ],
    updated_at: 1730100682519,
    updated_by: 175332,
  },
];

var getTitle = {
  event_id: {
    id: "i386BFZNR",
    name: "HTML",
  }
};

var openQuizIds = [];
var seenQuizIds = {};
var title = "";

if (Object.keys(getTitle).length != 0) {
    title = getTitle.event_id.name
};

getTrainingQuiz.forEach(function(training) {
  training.quiz_ids.forEach(function(quiz) {
    if (quiz.is_open === true && quiz.quiz_id && quiz.quiz_id.name) {
      var quizId = quiz.quiz_id.name;
    
      if (!seenQuizIds[quizId]) {
          openQuizIds.push({
            title: title,
            description: quizId,
          });
          seenQuizIds[quizId] = true;
      }
    }
  });
});

// if (quiz.is_open === true && quiz.quiz_id && quiz.quiz_id.id) {
//   var quizId = quiz.quiz_id.id;

//   // Validasi: Cek apakah quiz_id sudah ada dalam seenQuizIds
//   if (!seenQuizIds[quizId]) {
//       openQuizIds.push(quizId);
//       seenQuizIds[quizId] = true; // Tandai quiz_id sebagai sudah diproses
//   }
// }

console.log(openQuizIds);