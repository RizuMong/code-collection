var req = {
  data: {
    company_id: 27414,
    created_at: 1744703407235,
    created_by: 178566,
    email: "rizki.haddi@mekari.com",
    id: "_W_ieq0HR",
    id_import: "_W_ieq0HR",
    import_id: "3i_ieq0HR",
    jenis_pelaksanaan: "ONLINE",
    kode_redaksi: "RED001",
    nama_jabatan: "Solutioon Engineer",
    nama_kandidat: "Rizki Haddi",
    tempat_pelaksanaan: "ZOOM MEETING",
    updated_at: 1744703407235,
    updated_by: 178566,
    waktu_mulai_acara: "Sabtu, 15 November 2025, 10.00 WIB",
  },
  kode_redaksi: "RED001",
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

function _log(msg) {
  console.log(msg);
};

var dataReplaces = [
  {
    string_before: "{NAMA_KANDIDAT}",
    string_after: req.data.nama_kandidat,
  },
  {
    string_before: "{NAMA_JABATAN}",
    string_after: req.data.nama_jabatan,
  },
  {
    string_before: "{TANGGAL_WAKTU}",
    string_after: req.data.waktu_mulai_acara,
  },
  {
    string_before: "{TEMPAT_PELAKSANAAN}",
    string_after: req.data.tempat_pelaksanaan,
  },
  {
    string_before: "{JENIS_PELAKSANAAN}",
    string_after: req.data.jenis_pelaksanaan,
  },
];

var HTML_CONTENT = getDataRedaksi.konten;

for (i in dataReplaces) {
  _log(dataReplaces[i].string_before + " -> " + dataReplaces[i].string_after);
  HTML_CONTENT = HTML_CONTENT.split(dataReplaces[i].string_before).join(dataReplaces[i].string_after);
}

_log(HTML_CONTENT);