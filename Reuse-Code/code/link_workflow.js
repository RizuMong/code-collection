var baseURL = "https://apps-oos-dev.gtechdigital.id/app/GTech-Workflow"; // Base URL aplikasi
var pageId = "/24"; // Page ID
var pageName = "/Purchase-Requisition---Approval"; // Nama Page
var menuId = "/401"; // Menu ID
var detailType = "/detail-multiple"; // Tipe Detail If Multiple
var formUiID = "/9LkiukmFRqi"; // Form UI ID dari Experience Manager
var recordID = "/" + get_pr.id; // Record ID yang diambil dari variable
var tabName = "/Purchase Requisition"; // Nama Tab jika ada beberapa tab (If Multiple)

var urlRedirectApp =
  baseURL + pageId + pageName + menuId + detailType + formUiID + recordID + tabName;