// Multiple Experience Redirect
var redirect = {
  type: "page",
  application_id: 4276,
  application_name: "Kepegawaian", // app name
  pages_id: 39214, // id page
  pages_name: "Direktori-Karyawan",
  record_id: _record.employee_id.id, // id record
  form_ui_id: "Ksu-NccNg", // id multiple experience
  tab_name: "Keahlian & Minat",
  "message_type": "warning" // warning/info/error
};

// Single Experience Manager
var redirect = {
  "type": "page",
  "application_id": 4249,
  "application_name": "Expense Management",
  "pages_id": 39024,
  "pages_name": "Pengajuan-Cuti-Karyawan",
  "form_ui_id": "nEEfOrSNg",
  "record_id": _record.settlement_id,
  "tab_name": "Settlement",
  "message_type": "success",
};

// Single Experience Manager If Requestor/Approver
var redirect = {
  "type": "page",
  "application_id": 4249,
  "application_name": "Expense Management",
  "pages_id": 39024,
  "pages_name": "Settlement",
  "form_ui_id": "nEEfOrSNg",
  "record_id": _record.settlement_id,
  "tab_name": "Settlement",
  "message_type": "success",
  
};

var message = "Success Create Data"

var redirect = {
  "application_id": 964,
  "application_name": "TOKO TEST",
  "pages_id": 8252,
  "pages_name": "TOKO BARU",
  "form_ui_id": "vb156UI",
  "record_id": "xxQUIOS",
  "tab_name": "List Detail"
}

// Single Redirect 
var redirect = {
  type: "page",
  application_id: 2873,
  application_name: "SMART Expense", // app name
  pages_id: 33033, // id page
  pages_name: "Create Reimbursement", // page name
  message: message
};

// Single With Redirect Another Page
var redirect = {
  "type": "url",
  "url": "insert_url",
  "target": "new_tab"
};

var message = "success redirect ke link";