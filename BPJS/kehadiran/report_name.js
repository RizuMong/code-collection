var req = {
  "end_date": 1753894800000,
  "ids": "lNRtkJy5xN1IiTf8",
  "name": "Laporan Kehadiran",
  "progres_bar": 0,
  "start_date": 1751302800000,
  "status": "PROSES",
  "updated_at": 1752078504718,
  "updated_by": 178566
};

var report_name = req.name;

//  expected output: report name + 09/07/2025 - 13/07/2025

function formatDate(ms) {
  var d = new Date(ms);
  var day = (d.getDate() < 10 ? '0' : '') + d.getDate();
  var month = (d.getMonth() + 1 < 10 ? '0' : '') + (d.getMonth() + 1);
  var year = d.getFullYear();
  return day + '/' + month + '/' + year;
}

var start = formatDate(req.start_date);
var end = formatDate(req.end_date);

var output = report_name + ' ' + start + ' - ' + end;
console.log(output);