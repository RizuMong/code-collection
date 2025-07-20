var getParticipants = {
  attendances: [
    {
      attendance: true,
      employee_id: {
        id: "9YJWsLNHR",
        name: "24006264",
      },
    },
  ],
  auto_attendance: "NO",
  company_id: 25257,
  created_at: 1740464118472,
  created_by: 175332,
  date: 1741068900000,
  id: "pYe7fRtNg",
  id_attendance: "pYe7fRtNg",
  learning_method: "IN CLASS",
  learning_path_id: {
    id: "wNMBbLtHg",
    name: "TRAINING HD 785",
  },
  mds_id: {
    id: "fXkkfRpNg",
    name: "TRN8-MLP-PLT-032025",
  },
  mds_id_text: "fXkkfRpNg",
  updated_at: 1740464240790,
  updated_by: 175332,
};

var req = {
  body: {
    data: {
      date: 1741254600000,
      learning_path_id: {
        id: "wNMBbLtHg",
        name: "TRAINING HD 785",
      },
      mds_id: {
        id: "fXkkfRpNg",
        name: "TRN8-MLP-PLT-032025",
      },
    },
    method: "attendance",
  },
};


// Declare
var method = req.body.method
// var flow_status = mds.flow_status
// var status_event = mds.status_event

var res = {
    error: false,
    message: "Success."
};

if (method == "attendance") {
  
};