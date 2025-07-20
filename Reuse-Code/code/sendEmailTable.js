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

var messageFooter = '<p>Salam kami,<br /><br />Smart Team</p>' + '</div>'
var messageDetailFooterApprover = '<p style="line-height: 1.5em;">Proses approval dapat dilakukan melalui url : </p><p><a href="' + urlApprove + '">' + urlApprove + '</a></p>';
var message = messageHeaderApprover + messageDetailHeadingApprover + messageDetail + messageDetailFooterApprover + messageFooter;

var send_email = {
    "bcc": [],
    "bcc": [],
    "cc": [],
    "message": message,
    "subject": "UAT | Reminder " + transType + " Needs To Be Approved",
    "to": [each_email.to_email]
};

var hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);


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

var messageFooter = '<p>Salam kami,<br /><br />Test </p>' + '</div>'
var messageDetailFooterApprover = '<p style="line-height: 1.5em;">Proses approval dapat dilakukan melalui url : </p><p><a href="' + urlApprove + '">' + urlApprove + '</a></p>';
var message = messageHeaderApprover + messageDetailHeadingApprover + messageDetail + messageDetailFooterApprover + messageFooter;

var send_email = {
    "bcc": [],
    "bcc": [],
    "cc": [],
    "message": message,
    "subject": "Transaction " + transType + " Needs To Be Approved",
    "to": [each_email.to_email]
};

var hitEmail = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);