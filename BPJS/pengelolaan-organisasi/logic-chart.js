// var data = {
//     unit_kerja_bidang_id: {},
//     unit_kerja_core_id: {},
//     jabatan_id: {},
//     perusahaan_id: {},
//     zona_wilayah_id: {},
//     level_jabatan_id: {},
//     rumpun_jabatan_id: {},
//     grade_jabatan_id: {},
//     tipe_jabatan: "",
// };

// var req = {
//      "approval_parent_id": {
//             "id": "n01MHItqKfpm",
//             "name": "B09300000_J12_Kepala Kantor Cabang Kacab Jakarta Pulo Gebang"
//         },
//         "company_id": 27414,
//         "created_at": 1758192118584,
//         "created_by": 187538,
//         "id": "HZngHaEVDtYp",
//         "id_posisi": "HZngHaEVDtYp",
//         "jabatan_id": {
//             "id": "gbM6KCjHrJEk",
//             "name": "Kepala Bidang Pengendalian Operational - Kelas 2"
//         },
//         "job_grade_id": {
//             "id": "n01MiblqafHe",
//             "name": "STR2"
//         },
//         "kode": "A09360000_J12",
//         "kode_updated": "A09360000_J12",
//         "label": "Kepala Bidang Pengendalian Operational Kantor Cabang Jakarta Pulogebang",
//         "nama": "Kepala Bidang Pengendalian Operational Kantor Cabang Jakarta Pulogebang",
//         "name": "Kepala Bidang Pengendalian Operational Kantor Cabang Jakarta Pulogebang",
//         "status": "Active",
//         "unit_kerja_bidang_id": {
//             "id": "pQsLGWwkel5",
//             "name": "Bidang Pengendalian Operasional Kantor Cabang Jakarta Pulogebang"
//         },
//         "update_kode_manually": true,
//         "updated_at": 1758192118917,
//         "updated_by": 187538
// }

// function _fillObject(id, name) {
//     if (!id) {
//         var id = ""
//     }

//     if (!name) {
//         var name = ""
//     }

//     return {
//         "id": id,
//         "name": name,
//         // "label": name,
//     }
// }

// if (Object.keys(getUnitKerjaBidang).length !== 0) {
//     data.unit_kerja_bidang_id = _fillObject(req.unit_kerja_bidang_id.id, req.unit_kerja_bidang_id.name);
//     data.unit_kerja_core_id = _fillObject(getUnitKerjaBidang.unit_kerja_core_id.id, getUnitKerjaBidang.unit_kerja_core_id.name);
//     data.jabatan_id = _fillObject(req.jabatan_id.id, req.jabatan_id.name);
//     data.perusahaan_id = _fillObject(getUnitKerjaBidang.perusahaan_id.id, getUnitKerjaBidang.perusahaan_id.name);

//     data.zona_wilayah_id = _fillObject(getUnitKerjaBidang.zona_wilayah_remunerasi_id.id, getUnitKerjaBidang.zona_wilayah_remunerasi_id.name);
//     data.grade_jabatan_id = _fillObject(getJabatan.grade_id.id, getJabatan.grade_id.name);

//     data.level_jabatan_id = _fillObject(getGrade.id_grade, getGrade.tipe_jabatan);
//     data.rumpun_jabatan_id = _fillObject(getCoreJabatan.rumpun_id.id, getCoreJabatan.rumpun_id.name);
//     data.tipe_jabatan = getGrade.tipe_jabatan
// };

// // _log(data);

// var res = data;
// console.log(res);
// // _log(res);

var getAll = [
  {
    approval_parent_id: {
      id: "B9Gh4GqjZoQT",
      name: "A06000000_AA6_Direktur Human Capital dan Umum",
    },
    company_id: 27414,
    created_at: 1758094579030,
    created_by: 187538,
    id: "31dqf7GWTphC",
    id_posisi: "31dqf7GWTphC",
    jabatan_id: {
      id: "RHX8DkOerN4E",
      name: "Deputi Human Capital - ",
    },
    job_grade_id: {
      id: "izulQIvDjf7f",
      name: "STR1",
    },
    kelas_organisasi_id: {},
    kode: "B07100000_42A",
    kode_nama: "B07100000_42A",
    kode_updated: "B07100000_42A",
    level_organisasi_id: {},
    nama: "Deputi Human Capital Deputi Bidang Human Capital",
    status: "Active",
    unit_kerja_bidang_id: {
      id: "RHX8lJBerNH3",
      name: "Deputi Bidang Human Capital",
    },
    update_kode_manually: true,
    updated_at: 1758132715833,
    updated_by: 187538,
  },
    {
    approval_parent_id: {
      id: "B9Gh4GqjZoQT",
      name: "A06000000_AA6_Direktur Human Capital dan Umum",
    },
    company_id: 27414,
    created_at: 1758094579030,
    created_by: 187538,
    id: "31dqf7GWTphC",
    id_posisi: "31dqf7GWTphC",
    jabatan_id: {
      id: "RHX8DkOerN4E",
      name: "Deputi Human Capital - ",
    },
    job_grade_id: {
      id: "izulQIvDjf7f",
      name: "STR1",
    },
    kelas_organisasi_id: {},
    kode: "B07100000_42A",
    kode_nama: "B07100000_42A",
    kode_updated: "B07100000_42A",
    level_organisasi_id: {},
    nama: "Deputi Human Capital Deputi Bidang Human Capital",
    status: "Active",
    unit_kerja_bidang_id: {
      id: "RHX8lJBerNH3",
      name: "Deputi Bidang Human Capital",
    },
    update_kode_manually: true,
    updated_at: 1758132715833,
    updated_by: 187538,
  },
];


var seen = {};
var duplicates = [];

for (var i = 0; i < getAll.length; i++) {
  var item = getAll[i];
  var kode = item.kode;
  if (!seen[kode]) {
    seen[kode] = [item.id];
  } else {
    seen[kode].push(item.id);
  }
}

// ambil hanya yang duplikat
for (var key in seen) {
  if (seen[key].length > 1) {
    duplicates.push({
      kode: key,
      ids: seen[key]
    });
  }
}

console.log(duplicates);
