// var req = {
//   body: {
//     question: "What is the future roadmap of this product?",
//   },
// };

// var question = req.body.question;
// var conference_id = req.body.conference_id;

// var missingKeys = [];

// if (!question) {
//   missingKeys.push("question");
// }

// if (!conference_id) {
//   missingKeys.push("conference_id");
// }

// if (missingKeys.length > 0) {
//   res = {
//     error: true,
//     code: 400,
//     message: "Missing required field(s): " + missingKeys.join(", "),
//     data: {}
//   };

//   // _stopAutomation();
// }

var req = {
  company_id: 28122,
  created_at: 1754654793051,
  created_by: 189426,
  created_by_project_user: "",
  description: "",
  event_id: {
    id: "6XZjKDcgbxzp",
    name: "IRSE 2025",
  },
  id_form: "JrSVw86agEjs",
  image: "",
  name: "PERTANYAAN 3",
  point: 1,
  updated_at: 1754654793051,
  updated_by: 189426,
  updated_by_project_user: "",
};

// hapus duplicate user_id from getData dan push ke participantForms
var getData = [
  {
    user_id: "7djsKIPGzJ_1745478545",
  },
  {
    user_id: "7djsKIPGzJ_1745478545",
  },
  {
    user_id: "dssdw_478545",
  },
];

var participantForms = [];

var seen = {};
for (var i = 0; i < getData.length; i++) {
  var user_id = getData[i].user_id;
  if (!seen[user_id]) {
    seen[user_id] = true;
    participantForms.push({
      event_id: req.event_id,
      event_id_text: req.event_id.id,
      form_id: { id: req.id_form, name: req.name },
      form_id_text: req.id_form,
      image: req.image,
      name: req.name,
      status: "INCOMPLETE",
      total_points: req.point,
      user_id: user_id,
    });
  }
}

console.log(participantForms);
