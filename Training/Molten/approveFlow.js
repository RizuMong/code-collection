var getDataCheck = {
  _native_approval_flow: {
    approval_cancel_note: "",
    approval_flow: [
      {
        approval_stage: 1,
        flow_name: "Stage 1",
        flow_response: [
          {
            action_at: 1764526452713,
            note: "The data request is automatically approved because the requester is also the approver.",
            position: {
              code: "generated_aCvhAsHtMNBS",
              name: "Implementor",
            },
            status: "approved",
            user: {
              email: "rizki.haddi@mailinator.com",
              id: "B9Ub7Twj3or1",
              name: "Rizki Haddi",
            },
          },
        ],
        flow_type: "order",
        minimum_action: 0,
        position_codes: ["generated_aCvhAsHtMNBS"],
        status: "approved",
      },
    ],
    approval_status: "approved",
    approval_updated_at: 1764526452713,
    approvallogs: null,
    is_active: true,
    requested_at: 1764526452665,
    requested_by_project_user: "B9Ub7Twj3or1",
    requested_person: {
      email: "rizki.haddi@mailinator.com",
      name: "Rizki Haddi",
      user_id: "B9Ub7Twj3or1",
    },
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
  flow_status: "approved",
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
  updated_at: 1764526452715,
  updated_by: 0,
  updated_by_project_user: "B9Ub7Twj3or1",
};

var listApproved = [];

getDataCheck._native_approval_flow.approval_flow.forEach(function(flow) {
  if (flow.flow_response && flow.flow_response.length > 0) {
    var user = flow.flow_response[0].user;
    if (user && user.id) {
      listApproved.push(user.id);
    }
  }
});

console.log(listApproved);