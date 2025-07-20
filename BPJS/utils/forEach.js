var findBlastedSurvey = [
  {
    blasting_id: "2BZtiqWvbKMMYd7G",
    company_id: 27414,
    created_at: 1750647613654,
    created_by: 187473,
    id: "2BZtiqWvbKMMYd7G",
    jenis_golongan: "Struktural & Non Struktural",
    survey_description: "test 2",
    survey_form_id: {
      id: "lNRTCBsOVo50iVsg",
      name: "test 2",
    },
    tanggal_berakhir: 1750784399999,
    tanggal_mulai: 1750611600000,
    updated_at: 1750652950132,
    updated_by: 187473,
  },
  {
    blasting_id: "dawRqTnlnexf4bfh",
    company_id: 27414,
    created_at: 1750649021118,
    created_by: 187473,
    id: "dawRqTnlnexf4bfh",
    jenis_golongan: "Struktural & Non Struktural",
    survey_description: "test 3",
    survey_form_id: {
      id: "yILX7iEIok0Lrp8f",
      name: "test 1",
    },
    tanggal_berakhir: 1750784399999,
    tanggal_mulai: 1750611600000,
    updated_at: 1750651676096,
    updated_by: 178566,
  },
];

function _log(msg) {
  console.log(msg);
}

var now = new Date().getTime();
var filteredRecords = [];

for (var i = 0; i < findBlastedSurvey.length; i++) {
  var item = findBlastedSurvey[i];
  var isMatch = false;

  // Cek level_organisasi mengandung ID target
  if (item.level_organisasi && item.level_organisasi.length) {
    for (var j = 0; j < item.level_organisasi.length; j++) {
      if (item.level_organisasi[j].id === findEmp.level_organization_id.id) {
        isMatch = true;
        break;
      }
    }
  }

  // isMatch = true; // Sementara, anggap semua data cocok

  // _log(r);
  // _log(isMatch);

  if (isMatch) {
    var masukRange = true;

    if (item.tanggal_mulai) {
      var mulai = new Date(item.tanggal_mulai);
      mulai.setHours(0, 0, 0, 0);
      var mulaiTs = mulai.getTime();

      // _log(mulai);

      var berakhirTs = null;
      if (item.tanggal_berakhir) {
        var berakhir = new Date(item.tanggal_berakhir);
        berakhir.setHours(23, 59, 59, 999);
        berakhirTs = berakhir.getTime();
      }

      if (berakhirTs !== null) {
        if (now < mulaiTs || now > berakhirTs) {
          masukRange = false;
        }
      } else {
        if (now < mulaiTs) {
          masukRange = false;
        }
      }

      // _log(berakhirTs);
    }

    if (!masukRange) {
      continue;
    }

    // console.log(item);
    
    filteredRecords.push({
      id: item.id,
      company_id: item.company_id,
      created_at: item.created_at,
      created_by: item.created_by,
      jenis_golongan: item.jenis_golongan,
      survey_description: item.survey_description,
      survey_form_id: item.survey_form_id ? item.survey_form_id : {},
      tanggal_berakhir: item.tanggal_berakhir,
      tanggal_mulai: item.tanggal_mulai,
      updated_at: item.updated_at,
      updated_by: item.updated_by,
    });
  }
}

_log(filteredRecords);
