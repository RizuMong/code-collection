// if (useQuery) {
//   var query =
//     "SELECT * FROM t_attendance_log WHERE user_id = " +
//     getSummary.talenta_user_id +
//     " AND month = " +
//     getSummary.month +
//     " AND year = " +
//     getSummary.year +
//     " AND day = " +
//     getSummary.day +
//     " AND error = 'NO'" +
//     addQuery;
//   var queryData = _queryRecord("v2_kehadiran", query);
//   var dataAttendance = queryData.length > 0 ? queryData : [];
//   _log(query);
// }

function _log(msg) {
  console.log(msg);
};

var result = {
  body: {
    data: {
       "id": 997766982,
        "id_employee": "DEMO0000",
    },
    message: "Get User Dashboard Data Successfully",
    status: 200,
    version: "4.3.0",
  },
};

var res = {};

res = {
  statusCode: 200,
  error: false,
  message: "User authenticated successfully.",
  data: {
    // token: tokenOfficeless
  }
};

// Handle invalid or expired token
if (!result || result.body.status !== 200) {
  _log("Invalid or expired token. Re-login required.");
  res = {
    error: true,
    status: result ? result.body.status : 400,
    message: "Token invalid or expired. Please re-login."
  };
  // _stopAutomation();
}

// Extract user data from response
var userData = result.body && result.body.data;

if (!userData || !userData.id) {
  _log("User data missing in response.");
  res = {
    error: true,
    status: 400,
    message: "User data not found in token."
  };
  // _stopAutomation();
}

_log(res)