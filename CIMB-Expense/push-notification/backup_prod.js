var base_url = "https://gateway.smart-cimb.com/v2/notification-service/v2/";
var redirect = {};

switch (transType) {
  case "Reimbursement":
    redirect = {
      application_id: 3616,
      application_name: "Reimbursement",
      pages_id: 32518,
      pages_name: "Approve",
      form_ui_id: "ZUY13JJVR",
      tab_name: "Reimbursement Detail",
      record_id: records[0].id_reimbursement,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Direct Payment":
    redirect = {
      application_id: 3634,
      application_name: "Direct Payment",
      pages_id: 32725,
      pages_name: "Approve",
      form_ui_id: "Fx033NxVg",
      tab_name: "Direct Payment",
      record_id: records[0].id_direct_payment,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Prepaid Expense":
    redirect = {
      application_id: 3633,
      application_name: "Prepaid Expense",
      pages_id: 32928,
      pages_name: "Approve",
      form_ui_id: "m_hg4vxVg",
      tab_name: "Prepaid Expense",
      record_id: records[0].id_prepaid_expense,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Prepaid Expense Settlement":
    redirect = {
      application_id: 3633,
      application_name: "Prepaid Expense",
      pages_id: 32729,
      pages_name: "Approve Settlement",
      form_ui_id: "GR_tSDxVg",
      tab_name: "Prepaid Expense",
      record_id: records[0].id_prepaid_expense_transaction_settlement,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Cash Advance":
    redirect = {
      application_id: 3617,
      application_name: "Cash Advance",
      pages_id: 32579,
      pages_name: "Approve",
      form_ui_id: "41zmliI4R",
      tab_name: "Cash Advance",
      record_id: records[0].id_cash_advance,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Cash Advance Settlement":
    redirect = {
      application_id: 3617,
      application_name: "Cash Advance",
      pages_id: 32582,
      pages_name: "Approve Settlement",
      form_ui_id: "aOQWGsJVR",
      tab_name: "Cash Advance",
      record_id: records[0].id_cash_advance_transaction_settlement,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Petty Cash":
    redirect = {
      application_id: 3618,
      application_name: "Petty Cash",
      pages_id: 32925,
      pages_name: "Approve",
      form_ui_id: "xkFsSZSVR",
      tab_name: "Petty Cash",
      record_id: records[0].id_petty_cash,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Petty Cash Settlement":
    redirect = {
      application_id: 3618,
      application_name: "Petty Cash",
      pages_id: 32927,
      pages_name: "Approve Settlement",
      form_ui_id: "4dOxWeJ4g",
      tab_name: "Petty Cash",
      record_id: records[0].id_petty_cash_transaction_settlement,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Accrue Creation":
    redirect = {
      application_id: 3635,
      application_name: "Accrue",
      pages_id: 32717,
      pages_name: "Creation Approver",
      form_ui_id: "ZWU2zSxVR",
      tab_name: "Accrue Creation",
      record_id: records[0].id_accrue_creation,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Accrue Topup":
    redirect = {
      application_id: 3635,
      application_name: "Accrue",
      pages_id: 32718,
      pages_name: "Topup Approver",
      form_ui_id: "mwZHZSbVg",
      tab_name: "Accrue Topup",
      record_id: records[0].id_accrue_topup,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Accrue Correction":
    redirect = {
      application_id: 3635,
      application_name: "Accrue",
      pages_id: 32720,
      pages_name: "Correction Approver",
      form_ui_id: "xWXDMIx4g",
      tab_name: "Accrue Correction Approver",
      record_id: records[0].id_accrue_correction,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Accrue Reverse":
    redirect = {
      application_id: 3635,
      application_name: "Accrue",
      pages_id: 32721,
      pages_name: "Reverse Approver",
      form_ui_id: "0_S9GSxVR",
      tab_name: "Accrue Reverse Detail",
      record_id: records[0].id_accrue_closing,
      status: "sent",
      mode: "approver",
    };
    break;
  case "Smartform":
    redirect = {
      application_id: 3636,
      application_name: "Smartform",
      pages_id: 32723,
      pages_name: "Smartform Approver",
      form_ui_id: "3gNI7Ix4R",
      tab_name: "Smartform",
      record_id: records[0].id_smartform_transaksi,
      status: "sent",
      mode: "approver",
    };
    break;
}

_log(redirect);