var informasiKontakDarurat = [
  {
    alamat: "test",
    balance: 100,
    company_id: 27414,
    created_at: 1745209511360,
    created_by: 187473,
    employee_id: {
      id: "YjMQQR7ZaNUGEKSN",
      name: "Ryan Rizky Rizwandy",
    },
    hubungan: "test",
    id: "Oy9PLmCeeEYlJpip",
    id_emergency_employee: "Oy9PLmCeeEYlJpip",
    nama: "testing",
    nomor_telepon_lainnya: "+6281214",
    nomor_telepon_rumah: "+6281214",
    updated_at: 1745209511360,
    updated_by: 187473,
  },
];

function formatTanggal(timestampInput) {
  if (timestampInput === null) {
    return "";
  }

  var date =
    timestampInput === undefined ? new Date() : new Date(timestampInput);

  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var formattedDay = ("0" + day).slice(-2);
  var formattedMonth = ("0" + month).slice(-2);

  return formattedDay + "-" + formattedMonth + "-" + year;
}

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
      '" class="no-data">------------------------------ TIDAK ADA DATA ------------------------------</td></tr>';
  } else {
    for (var i = 0; i < data.length; i++) {
      var row = data[i];
      html += "<tr>";

      for (var j = 0; j < columns.length; j++) {
        var col = columns[j];
        var value = "";

        // kolom kosong
        if (col.key === "--") {
          html += "<td></td>";
          continue;
        }

        // auto numbering
        if (col.key === "NO") {
          html += "<td>" + (i + 1) + "</td>";
          continue;
        }

        // handle combine (gabung beberapa kolom)
        if (col.combine && col.combine.length > 0) {
          var parts = [];
          for (var k = 0; k < col.combine.length; k++) {
            var raw = getNestedValue(row, col.combine[k]);
            var part = raw;

            if (col.types && col.types[k]) {
              var type = col.types[k];
              if (type === "date") {
                part = formatTanggal(raw);
              } else if (type === "currency") {
                part = formatCurrency(raw, col.currencySymbol);
              }
            }

            parts.push(part != null ? part : "-");
          }
          value = parts.join(col.separator || " ");
        } else {
          // single value
          value = getNestedValue(row, col.key);

          if (col.type) {
            if (col.type === "date") {
              value = formatTanggal(value);
            } else if (col.type === "currency") {
              value = formatCurrency(value, col.currencySymbol);
            }
          }
        }

        html += "<td>" + (value != null ? value : "-") + "</td>";
      }

      html += "</tr>";
    }
  }

  html += "</tbody>";
  return html;
};

function formatCurrency(value, symbol) {
  if (value == null || isNaN(value)) return "-";
  var formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (symbol || "Rp") + formatted; // default Rp
};


var columnInformasiKontakDarurat = [
  { key: "NO", label: "Nama" },
  { key: "balance", label: "Balance", type: "currency", currencySymbol: "Rp" },
  { key: "nomor_telepon_rumah", label: "Nomor Telepon Rumah" },
  { key: "nomor_telepon_lainnya", label: "Nomor Telepon Lainnya" },
  { key: "alamat", label: "Alamat" },
  { key: "alamat", label: "Alamat" },
  { key: "updated_at", label: "Date", type: "date" }, // contoh yang pake date

  {
    label: "Periode",
    combine: ["updated_at", "updated_at"],
    types: ["date", "date"],
    separator: " - ",
  },

  // belum ada kolomnya
  { key: "--", label: "Kota/Kabupaten" },
  { key: "--", label: "Propinsi" },
  { key: "--", label: "Negara" },
  { key: "--", label: "Kode Pos" },
];

var TABLE_INFORMASI_KONTAK_DARURAT = generateTable(
  informasiKontakDarurat,
  columnInformasiKontakDarurat
);
console.log(TABLE_INFORMASI_KONTAK_DARURAT);
