// ========== Function Before Generate ============
function _dateFormat(timestamp) {
  if (!timestamp) {
      return '';
  }
  var date = new Date(timestamp);
  var months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember'
  ];
  var formatted_date =
      ('00' + date.getDate()).slice(-2) +
      ' ' +
      months[date.getMonth()] +
      ' ' +
      date.getFullYear();
  return formatted_date;
};

//  ============= Setup and Generate Excel ================
var fileName = "Export Cancel Revisi " + _dateFormat(Date.now()) + ".xlsx";
var sheetName = "Export Cancel Revisi";

var datas = [];

if (getAllData.length != 0) {
  for (i in getAllData) {
      var item = getAllData[i];
      var data = {
          branch_id: item.branch_id.name,
      };
      datas.push(data);
  }
}

// Rubah Nama Header Disini
var headerMap = {
  branch_id: "BRANCH ID",
};

// Rubah Posisi Tiap Kolom Disini
var headerOrder = [
  "branch_id",
];

_exportExcel(fileName, sheetName, datas, headerMap, headerOrder);