var transType = "Transaction";
var baseUrlApprove = "https://app.smart-cimb.com/app/SMART-Expense/2873";
var messageHeaderApprover = '<div style="color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;">'
  + '<p>'
  + 'Halo, <strong style="text-transform: uppercase;">'
  + eventJson.body.data.process[0].user.profile.first_name + ' ' + eventJson.body.data.process[0].user.profile.last_name
  + '</strong>'
  + '</p>';

if (idDataManager == "sPgjDcGVg") {
  //direct paymentf
  records[0].initiator_employee_name = records[0].initiator_name;
  records[0].initiator_email = records[0].dibuat_oleh;
}
if (idDataManager == "arYtaRmVg") {
  //direct payment
  records[0].initiator_employee_name = records[0].initiator_name;
  records[0].initiator_email = records[0].email_initiator;
}
if (idDataManager == "3gf3KvM4R") {
  //direct payment
  records[0].initiator_employee_name = records[0].initiator_full_name;
}
if (idDataManager == "G1LIt6IVR") {
  //prepaid expense settlement
  records[0].initiator_employee_name = records[0].requestor_name;
}
if (idDataManager == "EXR03SIVR") {
  //petty cash settlement 
  records[0].initiator_employee_name = initiator.full_name;
}
if (idDataManager == "T7R-wih4R") {
  //accrue correction
  records[0].initiator_employee_name = initiator.full_name;
}
if (idDataManager == "Ic4R1pI4R") {
  //smartform
  records[0].initiator_employee_name = initiator.full_name;
  records[0].initiator_email = records[0].requestor_email;
};

var messageHeaderRequestor = '<div style="color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;">'
  + '<p>'
  + 'Halo, <strong style="text-transform: uppercase;">'
  + records[0].initiator_employee_name
  + '</strong>'
  + '</p>';

var monthArr = ['Jan', "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
var messageDetailHeadingApprover = '<p style="line-height: 1.5em;">Berikut Detail Transaksi Yang Perlu Di Approve : </p>';
var messageDetailHeadingRequestor = '<p style="line-height: 1.5em;">Berikut Detail Transaksi Yang Sudah Di Approve : </p>';

switch (idDataManager) {
  case "Ic4R1pI4R":
    var transType = "Smartform";
    var pageName = "/Approve";
    var pageId = "/28011";
    var detailType = "/detail-multiple";
    var formUiID = "/sDfaHre4R";
    var recordID = "/" + records[0].id_smartform_transaksi;
    var tabName = "/Smartform-Detail";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorDivision = "";
    var title = "";
    var category = replaceSpecialCharacter(records[0].category.name);
    var amount = records[0].amount;
    var currency = "IDR";
    var periode = "";
    // var description = replaceSpecialCharacter(records[0].description);

    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Category</td><td>:</td><td>' + category + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      // + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'

    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove  + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    break;
  case "arYtaRmVg":
    var transType = "Reimbursement";
    var pageName = "/Approve";
    var pageId = "/25572";
    var detailType = "/detail-multiple";
    var formUiID = "/_-_j7kSVg";
    var recordID = "/" + records[0].id_reimbursement;
    var tabName = "/Reimbursement-Detail";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorRequestFor = replaceSpecialCharacter(records[0].request_for.name);
    var initiatorDivision = "";
    var title = "";
    var activity = replaceSpecialCharacter(records[0].activity.name);
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var periode = "";
    var description = replaceSpecialCharacter(records[0].description);

    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Request For</td><td>:</td><td>' + initiatorRequestFor + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    break;
  case "3gf3KvM4R":
    var transType = "Cash Advance";
    var pageName = "/Approve";
    var pageId = "/26870";
    var detailType = "/detail-multiple";
    var formUiID = "/41zmliI4R";
    var recordID = "/" + records[0].id_cash_advance;
    var tabName = "/Cash-Advance";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorRequestFor = replaceSpecialCharacter(records[0].request_for.name);
    var initiatorDivision = "";
    var title = "";
    var activity = replaceSpecialCharacter(records[0].activity.name);
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var periode = "";
    var description = replaceSpecialCharacter(records[0].description);
    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Request For</td><td>:</td><td>' + initiatorRequestFor + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    break;
  case "vAtTxWSVR":
    var transType = "Cash Advance Settlement";
    var pageName = "/Approve-Settlement";
    var pageId = "/26872";
    var detailType = "/detail-multiple";
    var formUiID = "/21hICSSVg";
    var recordID = "/" + records[0].id_cash_advance_transaction_settlement;
    var tabName = "/Cash-Advance-Settlement";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorRequestFor = replaceSpecialCharacter(records[0].request_for.name);
    var initiatorDivision = "";
    var title = "";
    var activity = replaceSpecialCharacter(records[0].activity.name);
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var periode = "";
    var description = replaceSpecialCharacter(records[0].description);
    var rejectReason = records[0].note || "";
    var messageDetail = '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Request For</td><td>:</td><td>' + initiatorRequestFor + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    break;

  case "gCviAgmVg":
    var transType = "Petty Cash";
    var pageName = "/Approve";
    var pageId = "/25541";
    var detailType = "/detail-multiple";
    var formUiID = "/xkFsSZSVR";
    var recordID = "/" + records[0].id_petty_cash;
    var tabName = "/Petty-Cash";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    //var initiatorRequestFor = records[0].request_for.name;
    var initiatorDivision = "";
    var title = "";
    var activity = replaceSpecialCharacter(records[0].activity.name);
    var amount = records[0].amount;
    var currency = records[0].currency.target_currency;
    var periode = "";
    var description = replaceSpecialCharacter(records[0].description);
    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    break;
  case "EXR03SIVR":
    var transType = "Petty Cash Settlement";
    var pageName = "/Approve-Settlement";
    var pageId = "/25543";
    var detailType = "/detail-multiple";
    var formUiID = "/b-2y3SSVR";
    var recordID = "/" + records[0].id_petty_cash_transaction_settlement;
    var tabName = "/Petty-Cash-Settlement";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    //var initiatorRequestFor = records[0].request_for.name;
    var initiatorDivision = "";
    var title = "";
    var activity = replaceSpecialCharacter(records[0].activity.name);
    var amount = records[0].amount;
    var currency = records[0].currency.target_currency;
    var periode = "";
    var description = replaceSpecialCharacter(records[0].description);
    var messageDetail = '<p style="line-height: 1.5em;">Berikut Detail Transaksi Yang Perlu Di Approve : </p>'
      + '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    break;
  case "sPgjDcGVg":
    var transType = "Direct Payment"
    var pageName = "/Approve";
    var pageId = "/26904";
    var detailType = "/detail-multiple";
    var formUiID = "/Tl7DTOI4g";
    var recordID = "/" + records[0].id_direct_payment;
    var tabName = "/Direct-Payment";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorDivision = "";
    var title = "";
    var activity = replaceSpecialCharacter(records[0].activity.name);
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var periode = "";
    var description = replaceSpecialCharacter(records[0].description);
    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    break;
  case "R5Bq9TNVR":
    var transType = "Accrue Creation"
    // var pageName = "/Approve";
    var pageName = '/Accrue-Creation-Approver'
    _log(records);
    var pageId = "/29000";
    var detailType = "/detail-multiple";
    var formUiID = "/EEd9CRD4g";
    var recordID = "/" + records[0].id_accrue_creation;
    var tabName = "/Accrue-Creation";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    // var initiatorName = "";
    var initiatorName = records[0].initiator_full_name;
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorDivision = "";
    var title = "";
    var periode = "";
    var routin_non_routin = records[0].routin_non_routin;
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var start_date = new Date(records[0].start_date);
    var fmted_start_date = start_date.getDate() + " " + monthArr[start_date.getMonth()] + " " + start_date.getFullYear();
    var end_date = new Date(records[0].end_date);
    var fmted_end_date = end_date.getDate() + " " + monthArr[end_date.getMonth()] + " " + end_date.getFullYear();
    var consumed_option = records[0].consumed_option;

    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Routine/Non-Routine</td><td>:</td><td>' + routin_non_routin + "</td></tr>"
      + '<tr><td>Consume Option</td><td>:</td><td>' + consumed_option + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Start Date</td><td>:</td><td>' + fmted_start_date + "</td></tr>"
      + '<tr><td>End Date</td><td>:</td><td>' + fmted_end_date + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    _log(messageDetail);
    break;
  case "7WX6ytD4g":
    var transType = "Accrue Topup"
    // var pageName = "/Approve";
    var pageName = '/Approver-Accrue-Top-Up'
    _log(records);
    var pageId = "/29654";
    var detailType = "/detail-multiple";
    var formUiID = "/Xih8QDd4R";
    var recordID = "/" + records[0].id_accrue_topup;
    var tabName = "/Accrue-Topup";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    // var initiatorName = "";
    var initiatorName = records[0].initiator_full_name;
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorDivision = "";
    var title = "";
    var periode = "";
    var routin_non_routin = records[0].routin_non_routin;
    var amount = records[0].amount_topup_origin;
    var currency = records[0].currency.target_currency;
    var start_date = new Date(records[0].start_date);
    var fmted_start_date = start_date.getDate() + " " + monthArr[start_date.getMonth()] + " " + start_date.getFullYear();
    var end_date = new Date(records[0].end_date);
    var fmted_end_date = end_date.getDate() + " " + monthArr[end_date.getMonth()] + " " + end_date.getFullYear();
    var consumed_option = records[0].consumed_option;

    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Routine/Non-Routine</td><td>:</td><td>' + routin_non_routin + "</td></tr>"
      + '<tr><td>Consume Option</td><td>:</td><td>' + consumed_option + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Start Date</td><td>:</td><td>' + fmted_start_date + "</td></tr>"
      + '<tr><td>End Date</td><td>:</td><td>' + fmted_end_date + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    _log(messageDetail);
    break;
  case "T7R-wih4R":
    var transType = "Accrue Correction"
    // var pageName = "/Approve";
    var pageName = '/Accrue-Correction-Approver'
    _log(records);
    var pageId = "/31442";
    var detailType = "/detail-multiple";
    var formUiID = "/Wv6OfbTVg";
    var recordID = "/" + records[0].id_accrue_correction;
    var tabName = "/Accrue-Correction-Approver";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    // var initiatorName = "";
    var initiatorName = records[0].initiator_full_name;
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorDivision = "";
    var title = "";
    var periode = "";
    var routin_non_routin = records[0].routin_non_routin;
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var start_date = new Date(records[0].start_date);
    var fmted_start_date = start_date.getDate() + " " + monthArr[start_date.getMonth()] + " " + start_date.getFullYear();
    var end_date = new Date(records[0].end_date);
    var fmted_end_date = end_date.getDate() + " " + monthArr[end_date.getMonth()] + " " + end_date.getFullYear();
    var consumed_option = records[0].consumed_option;

    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Routine/Non-Routine</td><td>:</td><td>' + routin_non_routin + "</td></tr>"
      + '<tr><td>Consume Option</td><td>:</td><td>' + consumed_option + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Start Date</td><td>:</td><td>' + fmted_start_date + "</td></tr>"
      + '<tr><td>End Date</td><td>:</td><td>' + fmted_end_date + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    _log(messageDetail);
    break;
  case "wKHxCgiVR":
    var transType = "Prepaid Expense"
    var pageName = "/Approve";
    var pageId = "/25580";
    var detailType = "/detail-multiple";
    var formUiID = "/8UcuAAIVR";
    var recordID = "/" + records[0].id_prepaid_expense;
    var tabName = "/Prepaid-Expense";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    //var initiatorRequestFor = records[0].request_for.name;
    var initiatorDivision = "";
    var title = "";
    var activity = replaceSpecialCharacter(records[0].activity.name);
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var periode = "";
    var description = replaceSpecialCharacter(records[0].description);
    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    break;
  case "qTjmMJo4g":
    var transType = "Accrue Reverse"
    // var pageName = "/Approve";
    var pageName = '/Accrue-Reverse-Approver'
    _log(records);
    var pageId = "/31875";
    var detailType = "/detail-multiple";
    var formUiID = "/I7GMDW0VR";
    var recordID = "/" + records[0].id_accrue_closing;
    var tabName = "/Accrue-Reverse";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    // var initiatorName = "";
    var initiatorName = records[0].initiator_full_name;
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    var initiatorDivision = "";
    var title = "";
    var periode = "";
    var routin_non_routin = records[0].routin_non_routin;
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var start_date = new Date(records[0].start_date);
    var fmted_start_date = start_date.getDate() + " " + monthArr[start_date.getMonth()] + " " + start_date.getFullYear();
    var end_date = new Date(records[0].end_date);
    var fmted_end_date = end_date.getDate() + " " + monthArr[end_date.getMonth()] + " " + end_date.getFullYear();
    var consumed_option = records[0].consumed_option;

    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Routine/Non-Routine</td><td>:</td><td>' + routin_non_routin + "</td></tr>"
      + '<tr><td>Consume Option</td><td>:</td><td>' + consumed_option + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Start Date</td><td>:</td><td>' + fmted_start_date + "</td></tr>"
      + '<tr><td>End Date</td><td>:</td><td>' + fmted_end_date + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    _log(messageDetail);
    break;
  case "G1LIt6IVR":
    var transType = "Prepaid Expense Settlement"
    var pageName = "/Approve-Settlement";
    var pageId = "/25583";
    var detailType = "/detail-multiple";
    var formUiID = "/MvkV45T4g";
    var recordID = "/" + records[0].id_prepaid_expense_transaction_settlement;
    var tabName = "/Prepaid-Expense-Settlement";
    var status = "/sent";
    var mode = "/approver";
    var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    //var initiatorRequestFor = records[0].request_for.name;
    var initiatorDivision = "";
    var title = "";
    var activity = replaceSpecialCharacter(records[0].activity.name);
    var amount = records[0].amount_origin;
    var currency = records[0].currency.target_currency;
    var periode = "";
    var description = replaceSpecialCharacter(records[0].description);
    var messageDetail =
      '<table>'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';
    break;

  // t_travel_order - BY
  case "ZUo-IHF4R":
    var transType = "Travel Order"
    // var pageName = "/Approve";
    var pageName = "/SMART-Biztrip/3260/APPROVER-TRAVEL";
    var pageId = "/32911";
    var detailType = "/detail-multiple";
    var formUiID = "/qCCTwzB4R";
    var recordID = "/" + records[0].id_travel_order;
    var tabName = "/Detail-Travel-Request";
    var status = "/sent";
    var mode = "/approver";
    // var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var urlApprove = 'https://app.smart-cimb.com/app/' + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].id_key.toString();
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    //var initiatorRequestFor = records[0].request_for.name;
    var initiatorDivision = "";
    var title = "";
    // var activity = records[0].activity.name;
    var activity = replaceSpecialCharacter(records[0].category.name);
    // var amount = records[0].amount_origin;
    // var currency = records[0].currency.target_currency;
    var currency = "IDR";
    var periode = "";
    // var description = records[0].description;
    var description = replaceSpecialCharacter(records[0].purpose);

    // Counting Amount
    var amount = 0;
    advFilter('srqZmaKVg', 'obj_relasi.id', records[0].id_travel_order).forEach(function (item) {
      amount += item.total_price;
    });

    // Format Amount
    amount = formatRupiah(amount, 'Rp');
    _log({ amount: amount });


    var messageDetail = '<table style="text-align: left;">'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';

    // Timpa aprover kalau approver minimal 1 atau lebih
    var lengthApprover = eventJson.body.data.process.length;
    _log({ lengthApprover: lengthApprover });


    if (lengthApprover > 1) {
      eventJson.body.data.process.forEach(function (item, index) {
        if (index != 0) {
          var email = item.user.email;
          var fullName = item.user.profile.first_name + ' ' + item.user.profile.last_name;
          _log({
            fullName: fullName,
            email: email,
          })

          sendEmailToOtherApproval(email, fullName);
        }
      });
    }
    break;


  // t_settlement - BY
  case "TGtBIXo4g":
    var transType = "Biztrip Settlement"
    // var pageName = "/Approve";
    var pageName = "/SMART-Biztrip/3260/APPROVER-SETTLEMENT";
    var pageId = "/32912";
    var detailType = "/detail-multiple";
    var formUiID = "/14MjGUA4g";
    var recordID = "/" + records[0].id_settlement;
    var tabName = "/Detail-Travel-Request";
    var status = "/sent";
    var mode = "/approver";
    // var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var urlApprove = 'https://app.smart-cimb.com/app/' + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].ref_id.toString();
    // Timpa Initiator Email
    // records[0].initiator_email = getDetailProUser(records[0].created_by).body.user.email;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    //var initiatorRequestFor = records[0].request_for.name;
    var initiatorDivision = "";
    var title = "";
    // var activity = records[0].activity.name;
    var activity = replaceSpecialCharacter(
      records[0].biztrip_category.name
    );
    // var amount = records[0].amount_origin;
    // var currency = records[0].currency.target_currency;
    var currency = "IDR";
    var periode = "";
    // var description = records[0].description;
    var description = replaceSpecialCharacter(records[0].purpose);

    // Counting Amount
    var amount = 0;
    advFilter('srqZmaKVg', 'obj_relasi.id', records[0].id_travel_order).forEach(function (item) {
      amount += item.total_price;
    });

    // Format Amount
    amount = formatRupiah(amount, 'Rp');
    _log({ amount: amount });


    var messageDetail = '<table style="text-align: left;">'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';

    // Timpa aprover kalau approver minimal 1 atau lebih
    var lengthApprover = eventJson.body.data.process.length;
    _log({ lengthApprover: lengthApprover });


    if (lengthApprover > 1) {
      eventJson.body.data.process.forEach(function (item, index) {
        if (index != 0) {
          var email = item.user.email;
          var fullName = item.user.profile.first_name + ' ' + item.user.profile.last_name;
          _log({
            fullName: fullName,
            email: email,
          })

          sendEmailToOtherApproval(email, fullName);
        }
      });
    }
    break;

  // t_refund - BY
  case "VwNmrsA4g":
    var transType = "Biztrip Refund"
    // var pageName = "/Approve";
    var pageName = "/SMART-Biztrip/3260/APPROVER-REFUND";
    var pageId = "/32913";
    var detailType = "/detail-multiple";
    var formUiID = "/0xedzU04R";
    var recordID = "/" + records[0].id_refund;
    var tabName = "/Detail-Travel-Refund";
    var status = "/sent";
    var mode = "/approver";
    // var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var urlApprove = 'https://app.smart-cimb.com/app/' + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
    var refID = records[0].ref_id.toString();
    // Timpa Initiator Email
    // records[0].initiator_email = getDetailProUser(records[0].created_by).body.user.email;
    var initiatorName = "";
    var initiatorPosition = replaceSpecialCharacter(records[0].position.name);
    //var initiatorRequestFor = records[0].request_for.name;
    var initiatorDivision = "";
    var title = "";
    // var activity = records[0].activity.name;
    var activity = replaceSpecialCharacter(records[0].category.name);
    // var amount = records[0].amount_origin;
    // var currency = records[0].currency.target_currency;
    var currency = "IDR";
    var periode = "";
    // var description = records[0].description;
    var description = replaceSpecialCharacter(records[0].purpose);

    // Counting Amount
    var amount = 0;
    advFilter('srqZmaKVg', 'obj_relasi.id', records[0].id_travel_order).forEach(function (item) {
      amount += item.total_price;
    });

    // Format Amount
    amount = formatRupiah(amount, 'Rp');
    _log({ amount: amount });


    var messageDetail = '<table style="text-align: left;">'
      + '<tr><td>Ref ID</td><td>:</td><td>' + refID + "</td></tr>"
      + '<tr><td>Initiator Position</td><td>:</td><td>' + initiatorPosition + "</td></tr>"
      + '<tr><td>Activity</td><td>:</td><td>' + activity + "</td></tr>"
      + '<tr><td>Amount</td><td>:</td><td>' + amount + "</td></tr>"
      + '<tr><td>Currency</td><td>:</td><td>' + currency + "</td></tr>"
      + '<tr><td>Description</td><td>:</td><td>' + description + "</td></tr>"
      + '</table>'
    // + '<p style="text-align: center;"> Atau dapat menggunakan tombol berikut : '
    // + '<a href="' + urlApprove + '" style="text-decoration:none; font-weight: bold; color: white; background: linear-gradient(to bottom right, #4e7dff, #5435c4); box-sizing: border-box; display: inline-block; padding: 0.5em 1em; box-sizing: border-box; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px;">'
    // + '<span style="vertical-align:middle">Approve ' + transType + '</span>'
    // + '</a>'
    // + '</p>';

    // Timpa aprover kalau approver minimal 1 atau lebih
    var lengthApprover = eventJson.body.data.process.length;
    _log({ lengthApprover: lengthApprover });


    if (lengthApprover > 1) {
      eventJson.body.data.process.forEach(function (item, index) {
        if (index != 0) {
          var email = item.user.email;
          var fullName = item.user.profile.first_name + ' ' + item.user.profile.last_name;
          _log({
            fullName: fullName,
            email: email,
          })

          sendEmailToOtherApproval(email, fullName);
        }
      });
    }
    break;
}

var messageFooter = '<p>Salam kami,<br /><br />Smart Team</p>'
  + '</div>'

var messageDetailFooterApprover = '<p style="line-height: 1.5em;">Proses approval dapat dilakukan melalui url : </p><p><a href="' + urlApprove + '">' + urlApprove + '</a></p>';
var message = messageHeaderApprover + messageDetailHeadingApprover + messageDetail + messageDetailFooterApprover + messageFooter;
// message = message.replace("&", "&amp;");

var send_email = {
  //"bcc": ['allpons@jojonomic.com', 'samiaji@jojonomic.com', 'jojo.cimb.biztrip.testing@mailinator.com'],
  "bcc": [],
  "cc": [],
  "message": message,
  "subject": "UAT | " + transType + " Needs To Be Approved",
  // "to": [eventJson.body.data.process[0].user.email]
};

_log(message);

// set request_for Notif
var userRequestFor = request_for.company_user_id || "";
_log("Bawah ini Request For")
_log(userRequestFor)

// set request_for Email
var emailRequestFor = request_for.email || "";
_log("Bawah ini Email Request For")
_log(emailRequestFor)


// set requestor
var requestor = [];
requestor.push(records[0].created_by)
_log("Bawah ini Requestor")
_log(requestor);

// set approver
var approvers = [];
eventJson.body.data.process.forEach(function (item) {
  approvers.push(item.user.profile.user_company_id)
})
_log('Bawah ini Approver Mobile')
_log(approvers)
// var approvers_email = []
// eventJson.body.data.process.forEach(function (item) {
//   approvers_email.push(item.user.email)
// })
// _log('Bawah ini Approver Web')
// _log(approvers_email)
// set content Push Notif
switch (transType) {
  case "Reimbursement":
  case "Direct Payment":
  case "Prepaid Expense":
  case "Prepaid Expense Settlement":
    var send_push_notif_requestor = {
      subject: transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
      message: "Reff ID " + records[0].id_key + " | " + records[0].currency.target_currency + " | " + records[0].amount_origin + " | " + records[0].description,
      to: [records[0].created_by]
    }

    var send_push_notif_approver = {
      subject: transType + " Needs To Be Approved",
      message: "Reff ID " + records[0].id_key + " | " + records[0].currency.target_currency + " | " + records[0].amount_origin + " | " + records[0].description,
      to: approvers
    }
    _log(message);
    _log(send_push_notif_approver)
    break;
  case "Cash Advance":
  case "Cash Advance Settlement":
    var send_push_notif_requestor = {
      subject: transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
      message: "Reff ID " + records[0].id_key + " | " + records[0].currency.target_currency + " | " + records[0].amount_origin + " | " + records[0].title,
      to: [records[0].created_by]
    }
    var send_push_notif_approver = {
      subject: transType + " Needs To Be Approved",
      message: "Reff ID " + records[0].id_key + " | " + records[0].currency.target_currency + " | " + records[0].amount_origin + " | " + records[0].title,
      to: approvers
    }
    _log(message);
    break;
  case "Petty Cash":
    var send_push_notif_requestor = {
      subject: transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
      message: "Reff ID " + records[0].id_key + " | " + records[0].currency.target_currency + " | " + records[0].amount + " | " + records[0].title,
      to: [records[0].created_by]
    }
    var send_push_notif_approver = {
      subject: transType + " Needs To Be Approved",
      message: "Reff ID " + records[0].id_key + " | " + records[0].currency.target_currency + " | " + records[0].amount + " | " + records[0].title,
      to: approvers
    }
    _log(message);
    _log(send_push_notif_approver)
    break;
  case "Petty Cash Settlement":
    var send_push_notif_requestor = {
      subject: transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
      message: "Reff ID " + records[0].id_key + " | " + records[0].currency.target_currency + " | " + records[0].settlement_total_amount_origin + " | " + records[0].title,
      to: [records[0].created_by]
    }
    var send_push_notif_approver = {
      subject: transType + " Needs To Be Approved",
      message: "Reff ID " + records[0].id_key + " | " + records[0].currency.target_currency + " | " + records[0].settlement_total_amount_origin + " | " + records[0].title,
      to: approvers
    }
    _log(message);
    _log(send_push_notif_approver)
    break;
  case "Smartform":
    var send_push_notif_requestor = {
      subject: transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
      message: "Reff ID " + records[0].id_key + " | IDR | " + records[0].amount + " | " + records[0].title,
      to: [records[0].created_by]
    }
    var send_push_notif_approver = {
      subject: transType + " Needs To Be Approved",
      message: "Reff ID " + records[0].id_key + " | IDR | " + records[0].amount + " | " + records[0].title,
      to: approvers
    }
    _log(message);
    _log(send_push_notif_approver)
    break;
  case "Accrue Creation":
  case "Accrue Topup":
  case "Accrue Correction":
  case "Accrue Reverse":
    var send_push_notif_requestor = {
      subject: transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
      message: "Reff ID " + records[0].id_key + " | " + records[0].request_no + " | " + records[0].currency.target_currency + " | " + records[0].amount_origin + " | " + records[0].title,
      to: [records[0].created_by]
    }
    var send_push_notif_approver = {
      subject: transType + " Needs To Be Approved",
      message: "Reff ID " + records[0].id_key + " | " + records[0].request_no + " | " + records[0].currency.target_currency + " | " + records[0].amount_origin + " | " + records[0].title,
      to: approvers
    }
    _log(message);
    _log(send_push_notif_approver)
    break;
  default:
    var send_push_notif_requestor = {
      subject: transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
      message: "One Transaction " + transType + " Needs to be Approved",
      to: [records[0].created_by]
    }
    var send_push_notif_approver = {
      subject: transType + " Needs To Be Approved",
      message: "One Transaction " + transType + " Needs to be Approved",
      to: approvers
    }
    _log(message);
    _log(send_push_notif_approver)
}

// var hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);
// message = messageHeaderRequestor + messageDetailHeadingRequestor + messageDetail + messageFooter;
// message = message.replace("&", "&amp;");

_log(records);

// Send Email to Requestor and RequestFor
if (emailRequestFor && records[0].dibuat_oleh) {
  var messageHeaderRequestor = '<div style="color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;">'
    + '<p>'
    + 'Halo, <strong style="text-transform: uppercase;">'
    + initiator.full_name
    + '</strong>'
    + '</p>';
  message = messageHeaderRequestor + messageDetailHeadingRequestor + messageDetail + messageFooter;
  // message = message.replace("&", "&amp;")
  send_email = {
    //"bcc": ['cimb.smartoos@gmail.com', 'allpons@jojonomic.com', 'samiaji@jojonomic.com', 'jojo.cimb.biztrip.testing@mailinator.com'],
    "bcc": [],
    "cc": [],
    "message": message,
    "subject": transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
    "to": [records[0].dibuat_oleh]
  };

  var hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);
  var logEmail = {
    "response": hitEmail,
    "sendEmail": send_email,
    "refID": refID,
    "transType": transType,
    "event": "NextApprover"
  }
  _hitFunction('log_email', logEmail);
  // _log({ hitEmail: hitEmail });
  _log(hitEmail)
  _log("kena email 1")

  var messageHeaderRequestFor = '<div style="color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;">'
    + '<p>'
    + 'Halo, <strong style="text-transform: uppercase;">'
    + request_for.full_name
    + '</strong>'
    + '</p>';
  message = messageHeaderRequestFor + messageDetailHeadingRequestor + messageDetail + messageFooter;
  // message = message.replace("&", "&amp;")

  send_email = {
    //"bcc": ['cimb.smartoos@gmail.com', 'allpons@jojonomic.com', 'samiaji@jojonomic.com', 'jojo.cimb.biztrip.testing@mailinator.com'],
    "bcc": [],
    "cc": [],
    "message": message,
    "subject": transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
    "to": [emailRequestFor]
  };

  hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);
  // _log({ hitEmail: hitEmail });
  var logEmail = {
    "response": hitEmail,
    "sendEmail": send_email,
    "refID": refID,
    "transType": transType,
    "event": "NextApprover"
  }
  _hitFunction('log_email', logEmail);

  _log(hitEmail)
  _log("kena email 2")

  // Send To Approver
  var approvers_name = []
  var approvers_email = []
  eventJson.body.data.process.forEach(function (item) {
    approvers_name.push(item.user.profile.first_name)
    approvers_email.push(item.user.profile.email)

    var messageDetailFooterApprover =
      '<p style="line-height: 1.5em;">Proses approval dapat dilakukan melalui url : </p><p><a href="' +
      urlApprove +
      '">' +
      urlApprove +
      '</a></p>';
    var messageHeaderApprover =
      "<div style=\"color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">" +
      '<p>' +
      'Halo, <strong style="text-transform: uppercase;">' +
      item.user.profile.first_name +
      ' ' +
      item.user.profile.last_name +
      '</strong>' +
      '</p>';
    message =
      messageHeaderApprover +
      messageDetailHeadingApprover +
      messageDetail +
      messageDetailFooterApprover +
      messageFooter;
    // message = message.replace('&', '&amp;');

    send_email = {
      //"bcc": ['cimb.smartoos@gmail.com', 'allpons@jojonomic.com', 'samiaji@jojonomic.com', 'jojo.cimb.biztrip.testing@mailinator.com'],
      // bcc: [
      //     'cimb.smartoos@gmail.com',
      //     'jojo.cimb.biztrip.testing@mailinator.com'
      // ],
      cc: [],
      message: message,
      subject: transType + ' Needs To Be Approved',
      to: item.user.profile.email
      // to: [eventJson.body.data.process[0].user.email]
    };

    hitEmail = _sendEmail(
      send_email.to,
      send_email.cc,
      send_email.bcc,
      send_email.subject,
      send_email.message
    );
    var logEmail = {
      "response": hitEmail,
      "sendEmail": send_email,
      "refID": refID,
      "transType": transType,
      "event": "NextApprover"
    }
    _hitFunction('log_email', logEmail);

    _log(hitEmail);
    _log('Kirim Ke Approver');
  })
  _log({
    "approvers_email": approvers_email,
    "approvers_name": approvers_name
  })

} else {
  var messageHeaderRequestor = '<div style="color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;">'
    + '<p>'
    + 'Halo, <strong style="text-transform: uppercase;">'
    + records[0].initiator_employee_name
    + '</strong>'
    + '</p>';
  message = messageHeaderRequestor + messageDetailHeadingRequestor + messageDetail + messageFooter;
  // message = message.replace("&", "&amp;")

  send_email = {
    //"bcc": ['cimb.smartoos@gmail.com', 'allpons@jojonomic.com', 'samiaji@jojonomic.com', 'jojo.cimb.biztrip.testing@mailinator.com'],
    "bcc": [],
    "cc": [],
    "message": message,
    "subject": transType + " Was Approved By " + approver.first_name + ' ' + approver.last_name,
    "to": [records[0].dibuat_oleh || records[0].initiator_email || records[0].initiator_full_name]
  };

  var hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);
  var logEmail = {
    "response": hitEmail,
    "sendEmail": send_email,
    "refID": refID,
    "transType": transType,
    "event": "NextApprover"
  }
  _hitFunction('log_email', logEmail);

  // _log({ hitEmail: hitEmail });
  _log(hitEmail)
  _log({ send_email: send_email })
  _log("kena email requestor aja")

  // Send To Approver
  var approvers_name = []
  var approvers_email = []
  eventJson.body.data.process.forEach(function (item) {
    approvers_name.push(item.user.profile.first_name)
    approvers_email.push(item.user.profile.email)

    var messageDetailFooterApprover =
      '<p style="line-height: 1.5em;">Proses approval dapat dilakukan melalui url : </p><p><a href="' +
      urlApprove +
      '">' +
      urlApprove +
      '</a></p>';
    var messageHeaderApprover =
      "<div style=\"color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">" +
      '<p>' +
      'Halo, <strong style="text-transform: uppercase;">' +
      item.user.profile.first_name +
      ' ' +
      item.user.profile.last_name +
      '</strong>' +
      '</p>';
    message =
      messageHeaderApprover +
      messageDetailHeadingApprover +
      messageDetail +
      messageDetailFooterApprover +
      messageFooter;
    // message = message.replace('&', '&amp;');

    send_email = {
      //"bcc": ['cimb.smartoos@gmail.com', 'allpons@jojonomic.com', 'samiaji@jojonomic.com', 'jojo.cimb.biztrip.testing@mailinator.com'],
      // bcc: [
      //     'cimb.smartoos@gmail.com',
      //     'jojo.cimb.biztrip.testing@mailinator.com'
      // ],
      cc: [],
      message: message,
      subject: transType + ' Needs To Be Approved',
      to: item.user.profile.email
      // to: [eventJson.body.data.process[0].user.email]
    };

    hitEmail = _sendEmail(
      send_email.to,
      send_email.cc,
      send_email.bcc,
      send_email.subject,
      send_email.message
    );
    var logEmail = {
      "response": hitEmail,
      "sendEmail": send_email,
      "refID": refID,
      "transType": transType,
      "event": "NextApprover"
    }
    _hitFunction('log_email', logEmail);

    _log(hitEmail);
    _log('Kirim Ke Approver');
  })
  _log({
    "approvers_email": approvers_email,
    "approvers_name": approvers_name
  })
}

// _log(message);

// hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);
// _log(hitEmail)
// _log(_user.email)




/* Function Tambahan
==========================
Fungsi  Advance Filter */
function advFilter(idDM, fieldName, value) {
  // KONFIGURASI PARAMETER
  var filter = {
    _filter_version: 2,
    where_is_and: {},
  };

  filter.where_is_and[fieldName] = value;

  // _.extend('filter.where_is_and', { fieldName: filter })


  var sort = {
    created_at: -1
  };

  // t_master_position
  var idDataManager = idDM;

  _log({
    filter: filter,
    idDM: idDM
  });

  // karena limit dan page ini di set wajib jadinya ku gedein aja
  var page = 1;
  var limit = 1;
  var filter0perator = 'and';

  // PANGGIL FUNGSI ADVANCE FILTER
  var records = _findRecords(
    idDataManager,
    page,
    limit,
    sort,
    filter,
    filter0perator
  ) || []; // kita kasih operator || [] supaya jika hasil querynya null yang direturn array kosong

  // _log(records)
  return records;
}

/* Fungsi formatRupiah */
function formatRupiah(angka, prefix) {
  // var number_string = angka.replace(/[^,\d]/g, '').toString(),
  var number_string = angka.toString(),
    split = number_string.split(','),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}

/*FUNCTION PUNYA BIZTRIP JANGAN DIOTAK ATIK !!!*/
function sendEmailToOtherApproval(emailApprover, fullNameApprover) {
  var messageFooter = '<p>Salam kami,<br /><br />Smart Team</p>'
    + '</div>'

  var messageDetailFooterApprover = '<p style="line-height: 1.5em;">Proses approval dapat dilakukan melalui url : </p><p><a href="' + urlApprove + '">' + urlApprove + '</a></p>';
  var messageHeaderApprover = '<div style="color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;">'
    + '<p>'
    + 'Halo, <strong style="text-transform: uppercase;">'
    + fullNameApprover
    + '</strong>'
    + '</p>';
  var message = messageHeaderApprover + messageDetailHeadingApprover + messageDetail + messageDetailFooterApprover + messageFooter;
  // message = message.replace("&", "&amp;");

  var send_email = {
    "bcc": [],
    "cc": [],
    "message": message,
    "subject": transType + " Needs To Be Approved",
    "to": [emailApprover]
  };


  _log({ messageOtherApproval: message });

  var hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);
  _log({ hitEmail: hitEmail });
}

/* Replace Special Character */
function replaceSpecialCharacter(inputString) {
  /* [ ] , & ( ) < >/ _ . % */
  return (
    inputString
      // .replace(/\[/g, '&lsqb;')
      // .replace(/]/g, '&rsqb;')
      // .replace(/,/g, '&comma;')
      .replace(/&/g, '&amp;')
      // .replace(/\(/g, '&lpar;')
      // .replace(/\)/g, '&rpar;')
      .replace(/>/g, '&gt;')
      .replace(/</g, '&lt;')
  );
  // .replace(/\//g, '&sol;')
  // .replace(/_/g, '&lowbar;')
  // .replace(/./g, '&period;')
  // .replace(/%/g, '&percnt;')
  // .replace(/"/g, '&quot;');
}