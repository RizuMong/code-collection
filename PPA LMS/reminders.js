var reminders = [
  {
    company_id: 25257,
    created_at: 1732611724321,
    created_by: 178405,
    date: 1732611862199,
    employee_id: {
      id: "vsS68sGHR",
      name: "SIT 1 - Dominic",
    },
    flow_status: "new",
    id: "Rzq1aEnHR",
    id_result: "Rzq1aEnHR",
    is_completed: true,
    learning_path_id: {
      id: "2nHdrxkNR",
      name: "ASDA",
    },
    mds_id: {
      id: "toi5-PnHR",
      name: "TRN31-HO-HCGA-112024",
    },
    mds_id_text: "toi5-PnHR",
    quiz_id: {
      id: "KIhnyxkNg",
      name: "POSTMAN ATTENDANCE 1",
    },
    score: 100,
    type_quiz: "Attendance",
    updated_at: 1732611862215,
    updated_by: 0,
  },
];

var dataPortal = {
  upcomingTraining: [],
  ongoingTraining: [],
  expiringCertification: [],
  upcomingCertification: [],
  reminders: [],
};

if (reminders.length != 0) {
  reminders.forEach(function (item) {
    var getDetail = _hitFunction("func_get_reminders", {
      event_id: item.event_id.id,
      mds_id: item.mds_id.id,
    });

    dataPortal.reminders.push(getDetail);
  });
}
