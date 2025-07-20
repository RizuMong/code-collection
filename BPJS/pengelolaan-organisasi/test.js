var req = {
  "body": {
      "grade_id": {
          "id": "T7joiK5HR",
          "name": "Top Management"
      },
      "id_jabatan": "B9qBa92DRleGjRD",
      "is_supervisor": true,
      "is_top_organization": false,
      "job_position_id": {
          "id": "fU0BUeFFAO2X9rAI",
          "name": "Direktur "
      },
      "kelompok_id": {
          "id": "Pu6lupRp7JRwNNxL",
          "name": "KEP. IT PUSAT"
      },
      "kode": "SPVIT",
      "level_organisasi_ids": {
          "id": "Jr9drNeuXep4aGtg",
          "name": "Kantor Pusat"
      },
      "nama": "Supervise IT",
      "rumpun_id": {
          "id": "8gSAOjNghke5RjQ7",
          "name": "1"
      },
      "status": "Active",
      "status_id": {
          "id": "haYsHm5Ng",
          "name": "Definitif"
      },
      "structure_parent_id": {
          "id": "",
          "name": ""
      },
      "supervise_parent_id": {
          "id": "",
          "name": ""
      }
  }}

var getSupervisorJabatan = {
  "company_id": 27414,
  "created_at": 1742352493038,
  "created_by": 178566,
  "grade_id": {
      "id": "T7joiK5HR",
      "name": "Top Management"
  },
  "id": "B9qBa92DRleGjRD",
  "id_jabatan": "B9qBa92DRleGjRD",
  "is_supervisor": true,
  "is_top_organization": false,
  "job_position_id": {
      "id": "fU0BUeFFAO2X9rAI",
      "name": "Direktur "
  },
  "kelompok_id": {
      "id": "Pu6lupRp7JRwNNxL",
      "name": "KEP. IT PUSAT"
  },
  "kode": "SPVIT",
  "level_organisasi_ids": {
      "id": "Jr9drNeuXep4aGtg",
      "name": "Kantor Pusat"
  },
  "nama": "Supervise IT",
  "rumpun_id": {
      "id": "8gSAOjNghke5RjQ7",
      "name": "1"
  },
  "status": "Active",
  "status_id": {
      "id": "haYsHm5Ng",
      "name": "Definitif"
  },
  "structure_parent_id": {
      "id": "",
      "name": ""
  },
  "supervise_parent_id": {
      "id": "",
      "name": ""
  },
  "updated_at": 1742352493038,
  "updated_by": 178566
};

var getTopOrg = {
  "company_id": 27414,
  "created_at": 1741673806674,
  "created_by": 178566,
  "grade_id": {
      "id": "L542gDsP9mE3pLO",
      "name": "Manager"
  },
  "id": "uhXNjwCIRGpX2foH",
  "id_jabatan": "uhXNjwCIRGpX2foH",
  "is_supervisor": false,
  "is_top_organization": true,
  "job_position_id": {
      "id": "4tw1tizECTNFOKEH",
      "name": "Directur Penasehat"
  },
  "kelompok_id": {
      "id": "haYsHm5Ng",
      "name": "Definitif"
  },
  "kode": "DT",
  "level_organisasi_ids": {
      "id": "Jr9drNeuXep4aGtg",
      "name": "Kantor Pusat"
  },
  "nama": "Direktur IT",
  "rumpun_id": {
      "id": "fU0zgNKczRCg9ato",
      "name": "5"
  },
  "status": "Active",
  "status_id": {
      "id": "haYsHm5Ng",
      "name": "Definitif"
  },
  "structure_parent_id": {
      "id": "",
      "name": ""
  },
  "supervise_parent_id": {
      "id": "T4E3JtSfqZgc15ga",
      "name": "STT - Supervise IT"
  },
  "updated_at": 1742351284063,
  "updated_by": 178566
};


var isDuplicateSPV = false;
var isDuplicateTopOrg = false;

if (Object.keys(getSupervisorJabatan).length != 0 && (getSupervisorJabatan.id_jabatan != req.body.id_jabatan)) {
    isDuplicateSPV = true
};

if (Object.keys(getTopOrg).length != 0 && (getTopOrg.id_jabatan != req.body.id_jabatan)) {
    isDuplicateTopOrg = true
};

if (isDuplicateSPV && req.body.is_supervisor) {
    error = true;
    statusCode = 401;
    message = "Supervisor sudah terdaftar. Silakan hapus supervisor yang sudah termapping di jabatan " + getSupervisorJabatan.nama + ".";
};

if (isDuplicateTopOrg && req.body.is_top_organization) {
    error = true;
    statusCode = 401;
    message = "Top Organisasi sudah terdaftar. Silakan hapus top organisasi yang sudah termapping di jabatan " + getTopOrg.nama + ".";
};

// Default Response
var message = "Data posted successfully";
var statusCode = 200;
var error = false;


console.log(message);