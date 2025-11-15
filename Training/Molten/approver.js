// Data dinamis Case Approve
var recipient = "Pak/Bu Andi"; // dinamis berdasarkan data
var itemName = "Laptop ThinkPad X1 Carbon"; // dinamis berdasarkan data
var linkRequest = "http://app-mekari.com/app/XXX"; // dinamis berdasarkan data
var productClass = "Electronics"; // dinamis berdasarkan data
var statusRequest = "Telah Disetujui"; // dinamis berdasarkan data
var sender = "ITS Dept"; // dinamis berdasarkan data

// Structure email
var messageDetail =
  '<table cellspacing="0" cellpadding="6" width="100%">' +
  "<tr><td style='font-size:14px;'>Dear Pak/Bu</td><td></td><td style='font-size:14px;'>" +
  (recipient || "-") +
  "</td></tr>" +

  '<tr><td colspan="3" style="font-weight:bold; text-align:left; font-size:14px;">Anda Memiliki permintaan approval dengan detil sbb:</td></tr>' +
  '<tr><td colspan="3"></td></tr>' +

  "<tr><td style='font-size:14px;'>Item Name</td><td>:</td><td style='font-size:14px;'>" +
  (itemName || "-") +
  "</td></tr>" +
  "<tr><td style='font-size:14px;'>Product Class</td><td>:</td><td style='font-size:14px;'>" +
  (productClass || "-") +
  "</td></tr>" +

  "<tr><td style='font-size:14px;'>" + (statusRequest || "-") + "</td><td></td><td></td></tr>" +
  '<tr><td colspan="3"></td></tr>' +

  '<tr><td colspan="3" style="font-size: 14px;">Mohon Agar dapat di cek di link berikut:</td></tr>' +
  '<tr><td colspan="3">'+ (linkRequest || "-") +'</td></tr>' +

  '<tr><td colspan="3" style="font-size: 14px;">Best Regards</td></tr>' +
  '<tr><td colspan="3"></td></tr>' +
  '<tr><td colspan="3" style="font-size: 14px;">' + (sender || "IT Dept") + '</td></tr>' +
  "</table>";

_log(messageDetail);

// Send Email
var send_email = {
  "bcc": [],
  "cc": [],
  "message": messageDetail,
  "subject": "Approve Pengajuan",
  "to": ["rizki.haddi@mekari.com"]
};

var send_email = _sendEmail(send_email.to, send_email.cc, send_email.bcc, send_email.subject, send_email.message);
_log(send_email);