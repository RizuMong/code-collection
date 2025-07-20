var getApprover = {
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
              company_id: 11769,
              date_time: "2025-01-30 14:28:29",
              description: "",
              duration: "",
              email: "eko.rivandi@sandiva.co",
              employee_code: " ",
              first_name: "Eko ",
              gender: "male",
              is_waiting: false,
              last_name: "Rivandi Mulyana",
              message: "Submitted",
              note: "",
              photo_url:
                "https://jojo-receipt-new.s3.ap-southeast-1.amazonaws.com/11769/66a0c9c94f1e3-unknown-1721813447470.jpg",
              status: "sent",
              team: "3201242 - Accounting Staff",
              user_company_id: 174780,
            },
          ],
          message: "",
          minimum_action: 0,
          total_duration: 0,
        },
        {
          duration: "0 Days, 1h 25m 30s",
          duration_minute: 85,
          flow_id: 1,
          flow_name: "flow 1",
          flow_type: 1,
          flow_type_sla: 0,
          label_action: "",
          log_member: [
            {
              company_id: 11769,
              date_time: "2025-01-30 15:09:45",
              description: "",
              duration: "00:41:16",
              email: "allova.mengko@sandiva.co",
              employee_code: "AHM",
              first_name: "Allova",
              gender: "Male",
              is_waiting: false,
              last_name: "Mengko",
              message: "Data Approved",
              note: "",
              photo_url:
                "https://jojo-bucket-uat.s3.amazonaws.com/uploads/cache/21E204F5-6D31-45B5-BA16-3E4A8CA1A27F/1558087338.582522.jpg",
              status: "approved",
              team: "3201205 - Managing Director",
              user_company_id: 49006,
            },
            {
              company_id: 11769,
              date_time: "2025-01-30 15:12:43",
              description: "",
              duration: "00:44:14",
              email: "nike.wirya@sandiva.co",
              employee_code: "NKW",
              first_name: "Nike",
              gender: "Female",
              is_waiting: false,
              last_name: "Wirya",
              message: "Data Approved",
              note: "",
              photo_url:
                "https://jojo-bucket-uat.s3.amazonaws.com/uploads/cache/77B53616-78F1-41DC-8AC6-D23E3C349361/1558680292.184773.jpg",
              status: "approved",
              team: "3201208 - Finance Director",
              user_company_id: 49007,
            },
          ],
          message: "This flow has been approved",
          minimum_action: 0,
          total_duration: 0,
        },
      ],
    },
  ],
  error: false,
  message: "Success Get Log Record from Form Data ID: zKT1ouIHg",
};

function formatTimestamp(timestamp) {
  var date = new Date(timestamp);

  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2); 
  var day = ("0" + date.getDate()).slice(-2);
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  var seconds = ("0" + date.getSeconds()).slice(-2);

  return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
}

var data = {
  approved_date: null,
  approved_name: null,
};

var oldestDate = null;
var oldestName = null;

for (var i = 0; i < getApprover.data[0].logs.length; i++) {
  var log = getApprover.data[0].logs[i];
  for (var j = 0; j < log.log_member.length; j++) {
    var member = log.log_member[j];
    if (member.message === "Data Approved") {
      var currentDate = new Date(member.date_time).getTime();
      if (oldestDate === null || currentDate > oldestDate) {
        oldestDate = currentDate;
        oldestName = member.first_name;
      }
    }
  }
}

if (oldestDate !== null) {
  data.approved_date = formatTimestamp(oldestDate);
  data.approved_name = oldestName;
}

console.log(data);