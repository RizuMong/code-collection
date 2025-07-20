// var informasiTempatTinggal = [
//   {
//     alamat: "test",
//     company_id: 27414,
//     created_at: 1745299374211,
//     created_by: 178566,
//     employee_id: "YjMQQR7ZaNUGEKSN",
//     id: "n0cCMKm7ODxfqpPG",
//     id_employee_address: "n0cCMKm7ODxfqpPG",
//     jarak_alamat: "100",
//     kecamatan: "SUkasdna",
//     kelurahan: "1000",
//     kode_pos: 324324,
//     kota_id: {
//       id: "8gInzUzVKCfrRtub",
//       name: "Jakarta Selatan",
//     },
//     negara_id: {
//       id: "qTuri42BJMl23FH6",
//       name: "Indonesia",
//     },
//     provinsi_id: {
//       id: "Z3N1AvaUdJN5MvsM",
//       name: "Jakarta",
//     },
//     rt_rw: "09/03",
//     status_kepemilikan: "Pribadi",
//     status_tinggal: "Rumah Sendiri",
//     telepon: "2343243244224",
//     tipe: "Alamat Identitas (KTP)",
//     updated_at: 1745299407151,
//     updated_by: 178566,
//   },
// ];

var informasiKontakDarurat = [
  {
    "alamat": "test",
    "company_id": 27414,
    "created_at": 1745209511360,
    "created_by": 187473,
    "employee_id": {
        "id": "YjMQQR7ZaNUGEKSN",
        "name": "Ryan Rizky Rizwandy"
    },
    "hubungan": "test",
    "id": "Oy9PLmCeeEYlJpip",
    "id_emergency_employee": "Oy9PLmCeeEYlJpip",
    "nama": "testing",
    "nomor_telepon_lainnya": "+6281214",
    "nomor_telepon_rumah": "+6281214",
    "updated_at": 1745209511360,
    "updated_by": 187473
}
]

/*
loop data dan hasilkan
      <tr>
        <td>item.tipe</td>
        <td>item.alamat</td>
        <td>item.telepon</td>
        <td>item.kota_id.name</td>
        <td>item.provinsi_id.name</td>
        <td>item.negara_id.name</td>
        <td>item.kode_pos</td>
      </tr>

kalau null atau gak ada datanya buat seperti ini
  <tr>
    <td colspan="7" class="no-data"> total colspan dari total header
      ------------------------------ TIDAK ADA DATA
      ------------------------------
    </td>
  </tr>
*/

function formatTanggal(timestampInput) {
  if (timestampInput === null) {
      return '';
  }

  var date = timestampInput === undefined ? new Date() : new Date(timestampInput);

  if (isNaN(date.getTime())) {
      return "Invalid Date";
  }

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var formattedDay = ("0" + day).slice(-2);
  var formattedMonth = ("0" + month).slice(-2);

  return formattedDay + "-" + formattedMonth + "-" + year;
};

function getNestedValue(obj, path) {
  var keys = path.split(".");
  for (var i = 0; i < keys.length; i++) {
    if (!obj || typeof obj !== "object") return undefined;
    obj = obj[keys[i]];
  }
  return obj;
}


function generateTable(data, columns) {
  var html = "<tbody>";

  if (!data || data.length === 0) {
    html +=
      '<tr><td colspan="' +
      columns.length +
      '" class="no-data">' +
      "------------------------------ TIDAK ADA DATA ------------------------------" +
      "</td></tr>";
  } else {
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      html += "<tr>";

      for (var j = 0; j < columns.length; j++) {
        var col = columns[j];

        // handle kolom kosong
        if (col.key === "--") {
          html += "<td></td>";
          continue;
        }

        // handle auto-numbering
        if (col.key === "NO") {
          html += "<td>" + (i + 1) + "</td>";
          continue;
        }

        var value = "";

        // handle combine field
        if (col.combine && col.combine.length > 0) {
          var parts = [];
          for (var k = 0; k < col.combine.length; k++) {
            var combineKey = col.combine[k];
            var raw = getNestedValue(row, combineKey);
            var part = raw;

            // check tipe per item
            if (col.types && col.types[k] === "date") {
              part = formatTanggal(raw);
            }

            parts.push(part != null ? part : "-");
          }

          value = parts.join(col.separator || " ");
        } else {
          value = getNestedValue(row, col.key);
          if (col.type === "date") {
            value = formatTanggal(value);
          }
        }

        html += "<td>" + (value != null ? value : "-") + "</td>";
      }

      html += "</tr>";
    }
  }

  html += "</tbody>";
  return html;
}


var columnInformasiKontakDarurat = [
  { key: "NO", label: "Nama" },
  { key: "hubungan", label: "Hubungan" },
  { key: "nomor_telepon_rumah", label: "Nomor Telepon Rumah" },
  { key: "nomor_telepon_lainnya", label: "Nomor Telepon Lainnya" },
  { key: "alamat", label: "Alamat" },
  { key: "updated_at", label: "Date", type: "date" }, // contoh yang pake date

  // {
  //   label: "Tanggal + Telp",
  //   combine: ["updated_at", "nomor_telepon_rumah"], // contoh yang combine data
  //   types: ["date", "string"] 
  // },

  {
    label: "Periode",
    combine: ["updated_at", "updated_at"], 
    types: ["date", "date"],
    separator: " - "
  },

  // belum ada kolomnya
  { key: "--", label: "Kota/Kabupaten" },
  { key: "--", label: "Propinsi" },
  { key: "--", label: "Negara" },
  { key: "--", label: "Kode Pos" }
];

var TABLE_INFORMASI_KONTAK_DARURAT = generateTable(informasiKontakDarurat, columnInformasiKontakDarurat);
console.log(TABLE_INFORMASI_KONTAK_DARURAT);

// var columnInformasiTempatTinggal = [
//   { key: "tipe", label: "Tipe" },
//   { key: "alamat", label: "Alamat" },
//   { key: "telepon", label: "Telepon" },
//   { key: "kota_id.name", label: "Kota" },
//   { key: "provinsi_id.name", label: "Provinsi" },
//   { key: "negara_id.name", label: "Negara" },
//   { key: "kode_pos", label: "Kode Pos" }
// ];

// var tableInformasiTempatTinggal = generateTable(informasiTempatTinggal, columnInformasiTempatTinggal);
// console.log(tableInformasiTempatTinggal);

