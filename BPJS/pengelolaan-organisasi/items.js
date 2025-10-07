var items = [
  {
    approver_type: "BY REPORTING LINE",
    jabatan_ids: [],
    level: 1,
    minimum_action: null,
    position_id: {
      id: "",
      name: "",
    },
    position_ids: [],
  },
  {
    approver_type: "BY POSITION",
    jabatan_ids: [],
    level: null,
    minimum_action: 2,
    position_id: {
      id: "cEBcYx4uia93",
      name: "Penata Administrasi dan Sistem Human Capital Asisten Deputi Bidang Reward And Services",
    },
    position_ids: [
      {
        id: "cEBcYx4uia93",
        name: "Penata Administrasi dan Sistem Human Capital Asisten Deputi Bidang Reward And Services",
      },
      {
        id: "qTdW6ko3Y1Wc",
        name: "Kepala Bidang Pengendalian Operational Kantor Cabang Jakarta Pulogebang",
      },
    ],
  },
  {
    approver_type: "BY JABATAN",
    jabatan_ids: [
      {
        id: "qTdW69A3Y1AE",
        name: "Kepala Kantor Wilayah",
      },
    ],
    level: null,
    minimum_action: 1,
    position_id: {
      id: "",
      name: "",
    },
    position_ids: [],
  },
];

items.forEach(function (item) {
  var positionIds = item.position_ids.map(function (position) {
    return position.id;
  });

  var jabatanIds = item.jabatan_ids.map(function (jabatan) {
    return  jabatan.id;
  });
  
  console.log(positionIds);
  console.log(jabatanIds);
});
