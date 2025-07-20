function replaceSpecialCharacter(inputString) {
  return (
    inputString
      .replace(/&/g, '&amp;')
      .replace(/>/g, '&gt;')
      .replace(/</g, '&lt;')
  );
};

var transType = "Transaction";
var baseUrlApprove = "https://app.smart-cimb.com/app/SMART-Expense/2873";
var messageHeaderApprover = '<div style="color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;">'
  + '<p>'
  + 'Halo, <strong style="text-transform: uppercase;">'
  + getDetailEmployee.full_name
  + '</strong>'
  + '</p>';

var messageHeaderRequestor = '<div style="color:#212121; text-align: center; width: 100%; font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif;">'
  + '<p>'
  + 'Halo, <strong style="text-transform: uppercase;">'
  + getDetailData.initiator_name
  + '</strong>'
  + '</p>';

var monthArr = ['Jan', "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
var messageDetailHeadingApprover = '<p style="line-height: 1.5em;">Berikut Detail Transaksi Yang Perlu Di Approve : </p>';
var messageDetailHeadingRequestor = '<p style="line-height: 1.5em;">Berikut Detail Transaksi Yang Sudah Di Approve : </p>';


var transType = "Reimbursement";
var pageName = "/Approve";
var pageId = "/25572";
var detailType = "/detail-multiple";
var formUiID = "/_-_j7kSVg";
var recordID = "/" + getDetailData.id_reimbursement;
var tabName = "/Reimbursement-Detail";
var status = "/sent";
var mode = "/approver";
var urlApprove = baseUrlApprove + pageName + pageId + detailType + formUiID + recordID + tabName + status + mode
var refID = getDetailData.id_key;
var initiatorName = "";
var initiatorPosition = replaceSpecialCharacter(getDetailData.position.name);
var initiatorRequestFor = replaceSpecialCharacter(getDetailData.request_for.name);
var initiatorDivision = "";
var title = "";
var activity = replaceSpecialCharacter(getDetailData.activity.name);
var amount = getDetailData.amount_origin;
var currency = getDetailData.currency.target_currency;
var periode = "";
var description = replaceSpecialCharacter(getDetailData.description);

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

  var messageFooter = '<p>Salam kami,<br /><br />Smart Team</p>'
  + '</div>'

var messageDetailFooterApprover = '<p style="line-height: 1.5em;">Proses approval dapat dilakukan melalui url : </p><p><a href="' + urlApprove + '">' + urlApprove + '</a></p>';
var message = messageHeaderApprover + messageDetailHeadingApprover + messageDetail + messageDetailFooterApprover + messageFooter;

var send_email = {
  "bcc": [],
  "bcc": [],
  "cc": [],
  "message": message,
  "subject": "UAT | " + transType + " Needs To Be Approved",
  "to": [item.to_email, 'ari.anggoro@mekari.com', 'rizki.haddi@mekari.com'],
};

var hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);