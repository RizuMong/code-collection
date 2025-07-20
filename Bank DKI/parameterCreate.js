var payload = {
  company_id: 26788,
  created_at: 1720169098370,
  created_by: 170118,
  from_date: 1719766800000,
  ids: "BZGFQZ_IR",
  matching_rules: {
    id: "ijIjfZ_SR",
    name: "Matching",
  },
  progress_status: "00.00%",
  status_rekonsiliasi: "Processing",
  to_date: 1720112400000,
  total_data: "Counting",
  updated_at: 1720169098370,
  updated_by: 170118,
};

function _formatDate(timestamp) {
  var date = new Date(timestamp);
  var day = ("0" + date.getDate()).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();
  return day + "-" + month + "-" + year;
};

console.log(_formatDate(payload.from_date));
