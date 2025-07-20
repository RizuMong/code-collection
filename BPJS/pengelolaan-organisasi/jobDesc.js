var req = {
  dimensi: "Keuangan",
  hubungan_kerja: "Internal",
  id_job_desc: "MWNbzw2uFS5unXoR",
  kode: "tjd12",
  ringkasan_pekerjaan: "minum",
  status: "Inactive"
};

var getJobDecsMapped = [
  {
    approval_parent_id: {
      id: "s6C56C7PFNCf8JQh",
      name: "Supervise IT ",
    },
    company_id: 27414,
    created_at: 1741946452418,
    created_by: 178566,
    id: "IoKCA40n1ZGWv9F2",
    id_posisi: "IoKCA40n1ZGWv9F2",
    jabatan_id: {
      id: "lN8xeaZ8dT8Yiacy",
      name: "System Analyst",
    },
    job_desc_id: [
      {
        id: "jF3jeu04g29vwlEH",
        name: "writing",
      },
      {
        id: "MWNbzw2uFS5unXoR",
        name: "minum",
      },
      {
        id: "HZoeqIDzS525Vaqo",
        name: "contoh",
      },
      {
        id: "gbxel1TiJI2GH7vZ",
        name: "Staff",
      },
      {
        id: "eVv8MGJoiusV6NGO",
        name: "Ringkasan Pekerjaanz",
      },
      {
        id: "eVv8IelVTaPI6PgC",
        name: "Mengtidur",
      },
      {
        id: "rvLJXoqAHJPdC9YD",
        name: "Finance",
      },
      {
        id: "VMl6qaTPdR01X5ki",
        name: "Finance",
      },
      {
        id: "CmpyKqBzLjEfSZae",
        name: "Finance",
      },
      {
        id: "lN8v3VS46Ouei8av",
        name: "Engineering",
      },
    ],
    kode: "SA SPKDD",
    nama: "System Analyst DEPUTI BIDANG KEPESERTAAN PROGRAM KHUSUS DAN KEAGENAN",
    status: "Inactive",
    unit_kerja_id: {
      id: "jF3hWfIM8lajwd3e",
      name: "DEPUTI BIDANG KEPESERTAAN PROGRAM KHUSUS DAN KEAGENAN",
    },
    updated_at: 1742366991538,
    updated_by: 178566,
  },
  {
    approval_parent_id: {
      id: "s6C56C7PFNCf8JQh",
      name: "Supervise IT ",
    },
    company_id: 27414,
    created_at: 1741946452418,
    created_by: 178566,
    id: "123456",
    id_posisi: "123456",
    jabatan_id: {
      id: "lN8xeaZ8dT8Yiacy",
      name: "System Analyst",
    },
    job_desc_id: [
      {
        id: "MWNbzw2uFS5unXoR",
        name: "minum",
      }
    ],
    kode: "SA SPKDD",
    nama: "System Analyst DEPUTI BIDANG KEPESERTAAN PROGRAM KHUSUS DAN KEAGENAN",
    status: "Inactive",
    unit_kerja_id: {
      id: "jF3hWfIM8lajwd3e",
      name: "DEPUTI BIDANG KEPESERTAAN PROGRAM KHUSUS DAN KEAGENAN",
    },
    updated_at: 1742366991538,
    updated_by: 178566,
  },
];

var updatedJobDesc = [];

for (var i = 0; i < getJobDecsMapped.length; i++) {
  var item = getJobDecsMapped[i];

  var filteredJobDesc = [];
  for (var j = 0; j < item.job_desc_id.length; j++) {
    if (item.job_desc_id[j].id !== req.id_job_desc) {
      filteredJobDesc.push(item.job_desc_id[j]);
    }
  };

  updatedJobDesc.push({
    id_posisi: item.id_posisi,
    job_desc_id: filteredJobDesc,
  });
};

console.log(updatedJobDesc);