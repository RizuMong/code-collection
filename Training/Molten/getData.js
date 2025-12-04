var urlGeneratePDF =
  "https://apiv2-bpjs.jojonomic.com/27414/tools/generate-pdf";

var getDataCheck = {
  _native_approval_flow: {
    approval_cancel_note: "",
    approval_flow: [],
    approval_status: "draft",
    approval_updated_at: 1764505515015,
    approvallogs: null,
    is_active: true,
    requested_at: 0,
    requested_by_project_user: "",
  },
  analisa_komposisi_kimia: "YES",
  check_visuals: [
    {
      bari: null,
      berat: null,
      gas_bintik_kasar: ["YES"],
      gelembung: null,
      judgement: null,
      lubang: ["YES"],
      marking: null,
      no: 1,
      note: null,
      pengotor: null,
      susunan_ingot: null,
    },
    {
      bari: null,
      berat: null,
      gas_bintik_kasar: null,
      gelembung: ["YES"],
      judgement: "OK",
      lubang: null,
      marking: null,
      no: 2,
      note: null,
      pengotor: null,
      susunan_ingot: null,
    },
    {
      bari: null,
      berat: null,
      gas_bintik_kasar: null,
      gelembung: ["YES"],
      judgement: null,
      lubang: null,
      marking: null,
      no: 3,
      note: null,
      pengotor: null,
      susunan_ingot: null,
    },
    {
      bari: null,
      berat: null,
      gas_bintik_kasar: null,
      gelembung: null,
      judgement: null,
      lubang: null,
      marking: null,
      no: 4,
      note: null,
      pengotor: ["YES"],
      susunan_ingot: null,
    },
    {
      bari: null,
      berat: null,
      gas_bintik_kasar: null,
      gelembung: null,
      judgement: null,
      lubang: null,
      marking: ["YES"],
      no: 5,
      note: null,
      pengotor: ["YES"],
      susunan_ingot: null,
    },
  ],
  company_id: 28201,
  created_at: 1764505515015,
  created_by: 0,
  created_by_project_user: "B9Ub7Twj3or1",
  documentation: [
    {
      name: "Bundle Awal",
      url: "",
    },
    {
      name: "Bundle Tengah",
      url: "",
    },
    {
      name: "Bundle Akhir",
      url: "",
    },
    {
      name: "Sisi Atas",
      url: "",
    },
    {
      name: "Document",
      url: "",
    },
  ],
  flow_status: "draft",
  genatsu_gyoko: 100,
  id: "gbnxLe8HmJEk",
  ids: "gbnxLe8HmJEk",
  jumlah_produk: 12,
  kvalue: "100",
  nama_inspector: "Rizki Haddi Prayoga",
  nama_produk: "HD2-BS.1",
  nomor_charge: "100",
  nomor_dokumen: "FM-QC-03/Rev.01/20.01.2020",
  tanggal_pemeriksaan: 1764522000000,
  tanggal_produksi: 1764435600000,
  total_bundle: 5,
  updated_at: 1764505545168,
  updated_by: 0,
  updated_by_project_user: "B9Ub7Twj3or1",
};

function formatDateGMT7(timestamp) {
  var offsetGMT7 = 7 * 60 * 60 * 1000; // 7 jam dalam ms
  var localTime = new Date(timestamp + offsetGMT7);

  var day = ("0" + localTime.getUTCDate()).slice(-2);
  var month = ("0" + (localTime.getUTCMonth() + 1)).slice(-2);
  var year = localTime.getUTCFullYear();

  return day + "-" + month + "-" + year;
};


// Data
var NOMOR_DOKUMEN = getDataCheck.nomor_dokumen;
var TANGGAL_PRODUKSI = formatDateGMT7(getDataCheck.tanggal_produksi);
var TANGGAL_PEMERIKSAAN = formatDateGMT7(getDataCheck.tanggal_pemeriksaan);
var NOMOR_CHARGE = getDataCheck.nomor_charge;
var NAMA_PRODUK = getDataCheck.nama_produk;
var JUMLAH_PRODUK = getDataCheck.jumlah_produk;
var NAMA_INSPECTOR = getDataCheck.nama_inspector;
var TOTAL_BUNDLE = getDataCheck.total_bundle;

var ANALISA_KOMPOSISI_KIMIA = "";

if (getDataCheck.analisa_komposisi_kimia === "YES") {
    var ANALISA_KOMPOSISI_KIMIA = "✓";
};

var K_VALUE = getDataCheck.kvalue;
var GENATSU_GYOKO = getDataCheck.genatsu_gyoko;

// TTD
var TTD_DIBUAT_OLEH = "";
var DIBUAT_OLEH = "";
var TTD_DISETUJUI_OLEH = "";
var DISETUJUI_OLEH = "";

// Table Check Visual
var TABLE_CHECK_VISUAL = "";

if (getDataCheck.check_visuals.length > 0) {
    getDataCheck.check_visuals.forEach(function(item, index) {
        TABLE_CHECK_VISUAL +=
        '<tr>' +
        '<td>' + (index + 1) + '</td>' +
        '<td style="font-size:14px;">' + (item.gas_bintik_kasar ? '✓' : 'X') + '</td>' +
        '<td style="font-size:14px;">' + (item.lubang ? '✓' : 'X') + '</td>' +
        '<td style="font-size:14px;">' + (item.gelembung ? '✓' : 'X') + '</td>' +
        '<td style="font-size:14px;">' + (item.bari ? '✓' : 'X') + '</td>' +
        '<td style="font-size:14px;">' + (item.pengotor ? '✓' : 'X') + '</td>' +
        '<td style="font-size:14px;">' + (item.berat ? '✓' : 'X') + '</td>' +
        '<td style="font-size:14px;">' + (item.susunan_ingot ? '✓' : 'X') + '</td>' +
        '<td style="font-size:14px;">' + (item.marking ? '✓' : 'X') + '</td>' +
        '<td style="font-size:14px;">' + (item.judgement ? item.judgement : '') + '</td>' +
        '<td>' + (item.note ? item.note : '') + '</td>' +
        '</tr>';
    });
};


console.log({
    TANGGAL_PEMERIKSAAN: TANGGAL_PEMERIKSAAN,
    TANGGAL_PRODUKSI: TANGGAL_PRODUKSI,
    NOMOR_DOKUMEN: NOMOR_DOKUMEN,
    NOMOR_CHARGE: NOMOR_CHARGE,
    NAMA_PRODUK: NAMA_PRODUK,
    JUMLAH_PRODUK: JUMLAH_PRODUK,
    ANALISA_KOMPOSISI_KIMIA: ANALISA_KOMPOSISI_KIMIA,
    K_VALUE: K_VALUE,
    NAMA_INSPECTOR: NAMA_INSPECTOR,
    GENATSU_GYOKO: GENATSU_GYOKO,
    TABLE_CHECK_VISUAL: TABLE_CHECK_VISUAL
});