var access_pages = [
  {
    application_id: {
      id: "4299",
      name: "Kepegawaian",
    },
    page_id: [
      {
        id: 40527,
        name: "DATA KARYAWAN - Direktori Karyawan",
      },
    ],
  },
  {
    application_id: {
      id: "4277",
      name: "Kehadiran",
    },
    page_id: [
      {
        id: 40522,
        name: "Konfigurasi - Kuota Karyawan",
      },
    ],
  },
];

var result = {
  apps: [],
  pages: [],
};

access_pages.forEach(function (item) {
  result.apps.push({
    "application_id": parseInt(item.application_id.id),
    "name": item.application_id.name,
  });

  item.page_id.forEach(function (page) {
    result.pages.push({
      "page_id": page.id,
      "name": page.name,
    });
  });
});

console.log(result);

// expected result
// {
//   apps: [
//      {
//         "application_id": 4299,
//         "name": "Kepegawaian",
//      },
//      {
//         "application_id": 4277,
//         "name": "Kehadiran",
//      }
//   ],
//   "pages": [
//       {
//         "page_id": 40527,
//         "name": "DATA KARYAWAN - Direktori Karyawan"
//       },
//       {
//         "page_id": 40522,
//         "name": "Konfigurasi - Kuota Karyawan",
//       }
//   ]
// }
