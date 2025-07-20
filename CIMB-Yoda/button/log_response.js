var url =
  "https://api-uat.smart-cimb.com/25236/yoda/download-log-response?filename=" +
  _record.nama_file;
var message = "Success Download File";
var redirect = {
  target: "new_tab",
  type: "url",
  url: url,
};
