//  ======== Setup Data Buat EXCEL ===========
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
}

function _dateFormatFull(timestamp) {
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
      date.getFullYear() +
      ' ' +
      new Date().getHours() +
      ':' +
      new Date().getMinutes();
  return formatted_date;
}

function _dateFormatTimeNow() {
  var date = new Date();

  var formatted_date =
      ('00' + date.getDate()).slice(-2) +
      '-' +
      (date.getMonth() + 1) +
      '-' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      ('00' + date.getSeconds()).slice(-2);

  return formatted_date.toString();
}

function _numberToString(data) {
  if (data !== null) {
      return data.toString();
  } else {
      return '';
  }
}

function _nullNumberToZero(data) {
  if (data === null || data === '' || data === undefined) {
      return 0;
  } else {
      return data;
  }
}

function _numberToPercentage(data) {
  if (data === null || data === '' || data === undefined) {
      return '0%';
  } else {
      return data.toFixed(2).toString() + '%';
  }
}

// Timing Report
var reportFinish = Date.now();
var reportFinishText = _dateFormatFull(Date.now());

var datas = [];

if (Object.keys(get_child_report).length > 0) {
  get_child_report.forEach(function (each_customer) {
      var data = {
          // Detail Customer
          'BRANCH ID': each_customer.branch_id,
    'BRANCH NAME': each_customer.branch_name,
    'CUSTOMER TYPE': each_customer.customer_type,
    'NATIONAL PARENT ID': each_customer.national_parent_id,
    'NATIONAL PARENT NAME': each_customer.national_parent_name,
    'LOCAL PARENT ID': each_customer.local_parent_id,
    'LOCAL PARENT NAME': each_customer.local_parent_name,
    'CUSTOMER ID': each_customer.customer_id,
    'CUSTOMER NAME': each_customer.customer_name,

    // Total Connote
    'TOTAL CONNOTE': each_customer.total_all_connote,
    'TOTAL DPP': each_customer.total_all_dpp,

    // Billed
    'TOTAL BILLED CONNOTE': each_customer.total_billed_connote,
    'TOTAL DPP BILLED': each_customer.total_billed_dpp,

    // Unbilled
    'TOTAL UNBILLED CONNOTE': each_customer.total_unbilled_connote,
    'TOTAL DPP UNBILLED': each_customer.total_unbilled_dpp,

    // Unbilled to Total Revenue Ratio
    'UNBILLED TO TOTAL REVENUE RATIO (CONNOTE)': 
        each_customer.unbilled_to_total_revenue_ratio_connote_text,
    'UNBILLED TO TOTAL REVENUE RATIO (AMOUNT)': 
        each_customer.unbilled_to_total_revenue_ratio_amount_text,

    // Polarisasi & Target
    'POLARISASI': each_customer.polarisasi,
    'TARGET': each_customer.target,

    '%ACHIEVEMENT': each_customer.achievement
      };

      datas.push(data);
  });
};

var headerMap = {
  'BRANCH ID': 'BRANCH ID',
  'BRANCH NAME': 'BRANCH NAME',
  'CUSTOMER TYPE': 'CUSTOMER TYPE',
  'NATIONAL PARENT ID': 'NATIONAL PARENT ID',
  'NATIONAL PARENT NAME': 'NATIONAL PARENT NAME',
  'LOCAL PARENT ID': 'LOCAL PARENT ID',
  'LOCAL PARENT NAME': 'LOCAL PARENT NAME',
  'CUSTOMER ID': 'CUSTOMER ID',
  'CUSTOMER NAME': 'CUSTOMER NAME',
  'TOTAL CONNOTE': 'TOTAL CONNOTE',
  'TOTAL DPP': 'TOTAL DPP',
  'TOTAL BILLED CONNOTE': 'TOTAL BILLED CONNOTE',
  'TOTAL DPP BILLED': 'TOTAL DPP BILLED',
  'TOTAL UNBILLED CONNOTE': 'TOTAL UNBILLED CONNOTE',
  'TOTAL DPP UNBILLED': 'TOTAL DPP UNBILLED',
  'UNBILLED TO TOTAL REVENUE RATIO (CONNOTE)': 'UNBILLED TO TOTAL REVENUE RATIO (CONNOTE)',
  'UNBILLED TO TOTAL REVENUE RATIO (AMOUNT)': 'UNBILLED TO TOTAL REVENUE RATIO (AMOUNT)',
  'POLARISASI': 'POLARISASI',
  'TARGET': 'TARGET',
  '%ACHIEVEMENT': '%ACHIEVEMENT'
};

var headerOrder = [
  'BRANCH ID',
  'BRANCH NAME',
  'CUSTOMER TYPE',
  'NATIONAL PARENT ID',
  'NATIONAL PARENT NAME',
  'LOCAL PARENT ID',
  'LOCAL PARENT NAME',
  'CUSTOMER ID',
  'CUSTOMER NAME',
  'TOTAL CONNOTE',
  'TOTAL DPP',
  'TOTAL BILLED CONNOTE',
  'TOTAL DPP BILLED',
  'TOTAL UNBILLED CONNOTE',
  'TOTAL DPP UNBILLED',
  'UNBILLED TO TOTAL REVENUE RATIO (CONNOTE)',
  'UNBILLED TO TOTAL REVENUE RATIO (AMOUNT)',
  'POLARISASI',
  'TARGET',
  '%ACHIEVEMENT'
]

_log({ total_data: datas.length });

var fileName =
  'Report Unbilled to Total Revenue Ratio - ' +
  _dateFormatTimeNow() +
  ' by ' +
  _user.email +
  '.xlsx';

var sheetName = 'Sheet1';
// _log(_exportExcel(fileName, sheetName, datas, headerMap, headerOrder));
_exportExcel(fileName, sheetName, datas, headerMap, headerOrder);
