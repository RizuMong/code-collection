var workflowLog = {
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
              company_id: 25236,
              date_time: "2025-06-13 19:48:05",
              description: "",
              duration: "",
              email: "ratna.widyaningsih@cimbniaga.co.id",
              employee_code: "",
              first_name: "RATNA WIDYANINGSIH",
              gender: "",
              is_waiting: false,
              last_name: "",
              message: "Submitted",
              note: "",
              photo_url: "",
              status: "sent",
              team: "Privileges 3004690",
              user_company_id: 184186,
            },
          ],
          message: "",
          minimum_action: 0,
          total_duration: 0,
        },
        {
          duration: "2 Days, 18h 17m 3s",
          duration_minute: 3977,
          flow_id: 1,
          flow_name: "BC SSL-S&D SERV SEMARANG - SILIWANGI",
          flow_type: 3,
          flow_type_sla: 0,
          label_action: "",
          log_member: [
            {
              company_id: 25236,
              date_time: "2025-06-16 14:05:08",
              description: "",
              duration: "18:17:03",
              email: "rizki@cimbniaga.co.id",
              employee_code: "",
              first_name: "RIZKI",
              gender: "",
              is_waiting: false,
              last_name: "",
              message: "Data Approved",
              note: "",
              photo_url: "",
              status: "approved",
              team: "Budget Custody - Jawa Tengah 9",
              user_company_id: 178769,
            },
          ],
          message: "This flow has been approved",
          minimum_action: 1,
          total_duration: 0,
        },
        {
          duration: "3 Days, 6h 24m 13s",
          duration_minute: 4704,
          flow_id: 2,
          flow_name: "Mandatory Reviewer Sustainability",
          flow_type: 3,
          flow_type_sla: 0,
          label_action: "",
          log_member: [
            {
              company_id: 25236,
              date_time: "2025-06-17 02:12:18",
              description: "",
              duration: "3 Days, 6h 24m 13s",
              email: "raymond.widies@cimbniaga.co.id",
              employee_code: "",
              first_name: "RAYMOND WIDIE SEPTANTO",
              gender: "",
              is_waiting: true,
              last_name: "",
              message: "Waiting for Approval",
              note: "",
              photo_url: "",
              status: "sent",
              team: "Mandatory Reviewer Sustainability - 1",
              user_company_id: 184212,
            },
            {
              company_id: 25236,
              date_time: "2025-06-17 02:12:18",
              description: "",
              duration: "3 Days, 6h 24m 13s",
              email: "srikanti.widodo@cimbniaga.co.id",
              employee_code: "",
              first_name: "SRI KANTI WIDODO",
              gender: "",
              is_waiting: true,
              last_name: "",
              message: "Waiting for Approval",
              note: "",
              photo_url: "",
              status: "sent",
              team: "Mandatory Reviewer Sustainability - 2",
              user_company_id: 184557,
            },
            {
              company_id: 25236,
              date_time: "2025-06-17 02:12:18",
              description: "",
              duration: "3 Days, 6h 24m 13s",
              email: "ibnu.khairi@cimbniaga.co.id",
              employee_code: "",
              first_name: "Ibnu Jamil Khairi",
              gender: "",
              is_waiting: true,
              last_name: "",
              message: "Waiting for Approval",
              note: "",
              photo_url: "",
              status: "sent",
              team: "MANDATORY REVIEWER SUSTAINABILITY - 4",
              user_company_id: 188249,
            },
          ],
          message: "Waiting for approval",
          minimum_action: 1,
          total_duration: 0,
        },
        {
          duration: "3 Days, 6h 24m 13s",
          duration_minute: 4704,
          flow_id: 3,
          flow_name: "Flow Direct Supervisor",
          flow_type: 1,
          flow_type_sla: 0,
          label_action: "",
          log_member: [
            {
              company_id: 25236,
              date_time: "2025-06-17 02:12:18",
              description: "",
              duration: "3 Days, 6h 24m 13s",
              email: "david.sundoro@cimbniaga.co.id",
              employee_code: "",
              first_name: "DAVID CAESAR SUNDORO",
              gender: "",
              is_waiting: false,
              last_name: "",
              message: "Waiting",
              note: "",
              photo_url: "",
              status: "sent",
              team: "5324320-Branch Manager - KCP - SSL",
              user_company_id: 181542,
            },
          ],
          message: "Waiting",
          minimum_action: 0,
          total_duration: 0,
        },
      ],
    },
  ],
  error: false,
  message: "Success Get Log Record from Form Data ID: EXR03SIVR",
};

var request = {
  form_data_id: "EXR03SIVR",
  id_data: "1",
};

var url =
  "https://gateway.smart-cimb.com/v1/nocode/record/workflow/log?form_data_id=" +
  request.form_data_id +
  "&id=" +
  request.id_data;

console.log(url);
