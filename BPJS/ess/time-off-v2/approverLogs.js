var listLog = {
  data: [
    {
      logs: [
        {
          duration: "",
          duration_minute: 0,
          flow_id: 0,
          flow_name: "",
          flow_type: 0,
          flow_type_sla: 0,
          label_action: "",
          log_member: [
            {
              company_id: 27414,
              date_time: "2025-07-07 13:00:00",
              description: "",
              duration: "",
              email: "ariesty_integration1@yopmail.com",
              employee_code: "100642081",
              first_name: "ariesty integration",
              gender: "",
              is_waiting: false,
              last_name: "",
              message: "Submitted",
              note: "",
              photo_url:
                "https://officeless-bpjs-prod-public.oss-ap-southeast-5.aliyuncs.com/27414/6866c635dc891-banner-login.png",
              status: "sent",
              team: "UAT-POSITION",
              user_company_id: 187619,
            },
          ],
          message: "",
          minimum_action: 0,
          total_duration: 0,
        },
        {
          duration: "0 Days, 0h 20m 2s",
          duration_minute: 20,
          flow_id: 1,
          flow_name: "BY POSITION",
          flow_type: 3,
          flow_type_sla: 0,
          label_action: "",
          log_member: [
            {
              company_id: 27414,
              date_time: "2025-07-07 13:20:02",
              description: "",
              duration: "0 Days, 0h 20m 2s",
              email: "zmd@approved.com",
              employee_code: "100282418",
              first_name: "ZMD APPROVED",
              gender: "",
              is_waiting: false,
              last_name: "",
              message: "Data Rejected",
              note: "",
              photo_url: "",
              status: "rejected",
              team: "100282418 - zmd@approved.com",
              user_company_id: 187565,
            },
          ],
          message: "This flow has been rejected",
          minimum_action: 1,
          total_duration: 0,
        },
      ],
    },
  ],
  error: false,
  message: "Success Get Log Record from Form Data ID: aCGBEGOPEEMlthr2",
};

var logData = [];

function parseDateTime(str) {
  var parts = str.split(/[- :]/);
  return new Date(
    parts[0],
    parts[1] - 1,
    parts[2],
    parts[3],
    parts[4],
    parts[5]
  ).getTime();
};

for (var i = 0; i < listLog.data.length; i++) {
  var logs = listLog.data[i].logs || [];

  for (var j = 0; j < logs.length; j++) {
    var log = logs[j];
    var members = log.log_member || [];

    for (var k = 0; k < members.length; k++) {
      var member = members[k];
      logData.push({
        "approver": member.first_name + " " + member.last_name,
        "approver_email": member.email,
        "flow_name": log.flow_name,
        "date": parseDateTime(member.date_time),
        "id_log": "12345" + j + k,
        "id_parent": "54321" + j + k,
        "note": member.note,
        "user_company_id": member.user_company_id,
        "status": member.message,
      });
    }
  }
}

function _log(msg) {
  console.log(msg);
}

var response = {
  data: logData,
  dataCount: logData.length,
};

_log(response);
