var req = {
  "data": {
      "company_id": 27414,
      "created_at": 1744704816584,
      "created_by": 178566,
      "email": "rizki.haddi@mekari.com",
      "id": "9t_tgeANR",
      "id_import": "9t_tgeANR",
      "import_id": "Ntltg60Ng",
      "jenis_pelaksanaan": "ONLINE",
      "kode_redaksi": "RED001",
      "nama_jabatan": "Solutioon Engineer",
      "nama_kandidat": "Rizki Haddi",
      "tempat_pelaksanaan": "ZOOM MEETING",
      "updated_at": 1744704816584,
      "updated_by": 178566,
      "waktu_mulai_acara": "Sabtu, 15 November 2025, 10.00 WIB"
  },
  "kode_redaksi": "RED001"
};

var getDataRedaksi =  {
  "company_id": 27414,
  "created_at": 1744700551646,
  "created_by": 178566,
  "id": "58yZ9ZWlv5saQgHU",
  "id_redaction": "58yZ9ZWlv5saQgHU",
  "kode": "RED001",
  "konten": "<!DOCTYPE html>\r\n<html lang=\"id\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <title>Undangan Interview HR</title>\r\n    <style>\r\n      body {\r\n        font-family: Arial, sans-serif;\r\n        color: #333;\r\n        line-height: 1.6;\r\n        padding: 20px;\r\n        background-color: #f9f9f9;\r\n      }\r\n      .container {\r\n        max-width: 600px;\r\n        margin: auto;\r\n        background-color: #ffffff;\r\n        padding: 20px;\r\n        border-radius: 8px;\r\n        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\r\n      }\r\n      ul {\r\n        padding-left: 20px;\r\n      }\r\n      b {\r\n        color: #000;\r\n      }\r\n    </style>\r\n  </head>\r\n  <body>\r\n    <div class=\"container\">\r\n      <p>Yth. <b>{NAMA_KANDIDAT}</b>,</p>\r\n\r\n      <p>\r\n        Terima kasih telah melamar posisi <b>{NAMA_JABATAN}</b> di perusahaan kami.\r\n      </p>\r\n\r\n      <p>\r\n        Kami ingin mengundang Anda untuk mengikuti <b>Interview HR</b> yang akan\r\n        dilaksanakan pada:\r\n      </p>\r\n\r\n      <ul>\r\n        <li><b>Hari/Tanggal & Waktu</b>: {TANGGAL_WAKTU}</li>\r\n        <li><b>Tempat</b>: {TEMPAT_PELAKSANAAN} / {JENIS_PELAKSANAAN} (akan diinformasikan lebih lanjut)</li>\r\n      </ul>\r\n\r\n      <p>Silakan konfirmasi kehadiran Anda melalui email ini.</p>\r\n\r\n      <p>Salam,</p>\r\n      <p><b>Tim Rekrutmen</b></p>\r\n    </div>\r\n  </body>\r\n</html>",
  "nama": "Nama: Undangan Interview HR",
  "subject_email": "Undangan Interview HR",
  "tahapan_rekrutmen_id": {
      "id": "dawxnrlsGX724QkA",
      "name": "Interview HR"
  },
  "updated_at": 1744703814804,
  "updated_by": 178566
};

var BASE_URL = "https://gateway-bpjs.jojonomic.com/v2";
var mailServiceAPI = BASE_URL + "/mail-service/sendV2";

var bodyEmail = {
    to_email: [req.data.email],
    to_name: [req.data.nama_kandidat],
    subject: getDataRedaksi.subject_email,
    body: _base64encode(HTML_CONTENT),
    type: "custom_html",
};

var headerEmail = {
    "Content-Type": "application/json",
    "Authorization": getToken.token
};

// Hit External API
var sentEmail = _hitExternalAPI(mailServiceAPI, "POST", bodyEmail, headerEmail);

_log(sentEmail);