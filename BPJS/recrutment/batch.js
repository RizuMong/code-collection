// var req = {
//   company_id: 27414,
//   created_at: 1747750417863,
//   created_by: 178566,
//   date_end: 1747749840000,
//   date_start: 1747749840000,
//   id_batch_schedule: "GkddNvyj3vduUX8h",
//   schedules: [
//     {
//       date_end: 1747805220000,
//       date_start: 1747805220000,
//       value: "LINK 1",
//     },
//     {
//       date_end: 1747805280000,
//       date_start: 1747805220000,
//       value: "LINK 2",
//     },
//   ],
//   period_id: {
//     id: "XnDrntk8OCaAbukv",
//     name: "Rekrutmen Mei 2025",
//   },
//   schedule_type_id: {
//     id: "miAL4LvjMl7ixj6H",
//     name: "Interview HR",
//   },
//   stage_id: {
//     id: "lNRfnl0PLxI3iYk8",
//     name: "⁠Seleksi Administrasi",
//   },
//   updated_at: 1747750417863,
//   updated_by: 178566,
//   vacancy_id: {
//     id: "Fp70JxZjRc7VG25r",
//     name: "Solution Quality Assurance",
//   },
// };

// var candidates = [
//   {
//     _id: "68258694813bb71b984683e5",
//     email: "faqih2@mailinator.com",
//     kode_registrasi: "Z3NDSHs2o1bIMTDv/aNaNaN/P/REGULAR//150525",
//     nama_lengkap: "Muhammad Faqih baru",
//     period_id_text: "XnDrntk8OCaAbukv",
//     stage_id_text: "lNRfnl0PLxI3iYk8",
//     vacancy_id: "Fp70JxZjRc7VG25r",
//   },
//   {
//     _id: "682ae14c813bb71b986d27f4",
//     email: "screamyd19@gmail.com",
//     kode_registrasi: "kAaaHq8Y6irbK44W/aNaNaN/P/REGULAR//190525",
//     nama_lengkap: "Xierra Game",
//     period_id_text: "XnDrntk8OCaAbukv",
//     stage_id_text: "lNRfnl0PLxI3iYk8",
//     vacancy_id: "Fp70JxZjRc7VG25r",
//   },
//   {
//     _id: "682bf051813bb71b983d9d2a",
//     email: "fatkur.rizal@mekari.com",
//     kode_registrasi: "yILhm1hRKV4GrUrK/290425/P/REGULAR//200525",
//     nama_lengkap: "Iko Uwais",
//     period_id_text: "XnDrntk8OCaAbukv",
//     stage_id_text: "lNRfnl0PLxI3iYk8",
//     vacancy_id: "Fp70JxZjRc7VG25r",
//   },
//   {
//     _id: "682c7522813bb71b98a4f095",
//     email: "abun1@mailinator.com",
//     kode_registrasi: "wG00maEL20wgf6W/aNaNaN/P/REGULAR//200525",
//     nama_lengkap: "Abun A",
//     period_id_text: "XnDrntk8OCaAbukv",
//     stage_id_text: "lNRfnl0PLxI3iYk8",
//     vacancy_id: "Fp70JxZjRc7VG25r",
//   },
// ];

// var countBatch = req && req.schedules ? req.schedules.length : 0;
// var countCandidates = candidates.length;
// var batchedCandidates = [];
// var batch = [];
// var i, batchIndex;

// for (i = 0; i < countBatch; i++) {
//   batchedCandidates.push([]);
// }

// for (i = 0; i < countCandidates; i++) {
//   batchIndex = i % countBatch;

//   var newCandidate = {};
//   for (var key in candidates[i]) {
//     if (candidates[i].hasOwnProperty(key)) {
//       newCandidate[key] = candidates[i][key];
//     }
//   }

//   newCandidate.link = req.schedules[batchIndex] ? req.schedules[batchIndex].value : "";
//   newCandidate.date_end = req.schedules[batchIndex] ? req.schedules[batchIndex].date_end : null;
//   newCandidate.date_start = req.schedules[batchIndex] ? req.schedules[batchIndex].date_start : null;
//   batchedCandidates[batchIndex].push(newCandidate);
// }

// for (i = 0; i < batchedCandidates.length; i++) {
//   for (var j = 0; j < batchedCandidates[i].length; j++) {
//     batch.push(batchedCandidates[i][j]);
//   }
// }

// console.log(batch);

var body = {
  data_mapping: [
    {
      data: {
        id: "rvpwl0xRxkhpCnKz",
        name: "TAG_NAMA_LENGKAP",
      },
    },
    {
      data: {
        id: "PugeEKVACDUFNnPV",
        name: "TAG_NAMA_KARIR_LEVEL",
      },
    },
    {
      data: {
        id: "xDsQzGyIf7MbowvI",
        name: "TAG_TAHUN",
      },
    },
    {
      data: {
        id: "uhbVwTU4bBM62OQy",
        name: "TAG_HARI_INI",
      },
    },
  ],
  id_redaction: "Oy9i20D0ZgnAJY8x",
  pipeline_ids: [
    {
      id: "wG0RyjItlnNzfIDZ",
      name: "DEFAULT",
    },
    {
      id: "W7Yc96znKxPE0SIV",
      name: "Rekrutmen Prohire 2025",
    },
  ],
  result: "LOLOS",
  stage_ids: [
    {
      id: "lNRfnl0PLxI3iYk8",
      name: "DEFAULT - ⁠Seleksi Administrasi",
    },
    {
      id: "KstOmwHOEI9I5yFl",
      name: "Rekrutmen Prohire 2025 - Seleksi Administrasi",
    },
  ],
};

var pipelineIds = [];
var stageIds = [];

for (var i = 0; i < body.pipeline_ids.length; i++) {
  var item = body.pipeline_ids[i];
  if (item && item.id) {
    pipelineIds.push(item.id);
  }
}

for (var j = 0; j < body.stage_ids.length; j++) {
  var item = body.stage_ids[j];
  if (item && item.id) {
    stageIds.push(item.id);
  }
}

var result = {
  "pipeline_id": pipelineIds,
  "stage_id": stageIds
};

console.log(result);
