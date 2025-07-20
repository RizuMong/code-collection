var getParameter = {
  company_id: 11769,
  created_at: 1736746548075,
  created_by: 178595,
  done_process: 43,
  id: "-_sl_1vNR",
  id_sync: "-_sl_1vNR",
  percentage: "0%",
  start_time: 1736746551541,
  sync_status: "On Progress",
  sync_type: "All Employee",
  total_employee: 44,
  updated_at: 1736746551541,
  updated_by: 178595,
};

var isDone = false;
var percentage = (((getParameter.done_process + 1) / getParameter.total_employee) * 100).toFixed(2) + "%";
isDone = percentage === "100.00%";

console.log(percentage);
console.log(isDone);
