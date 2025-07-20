var listFileYoda = [
  {
    company_id: 25236,
    created_at: 1730191311395,
    created_by: 0,
    data_failed: 0,
    data_success: 0,
    id: "WJQHThWHg",
    id_log_file_yoda: "WJQHThWHg",
    nama_file: "CIMB_SMART_YODA_202410291045.csv",
    status_file: "Processing",
    total_data: 0,
    updated_at: 1730191311395,
    updated_by: 0,
  },
  {
    company_id: 25236,
    created_at: 1730195152000,
    created_by: 0,
    data_failed: 0,
    data_success: 0,
    id: "WJQHThWHg",
    id_log_file_yoda: "WJQHThWHg",
    nama_file: "CIMB_SMART_YODA_202410291045.csv",
    status_file: "Processing",
    total_data: 0,
    updated_at: 1730195152000,
    updated_by: 0,
  },
  {
    company_id: 25236,
    created_at: 1730195152000,
    created_by: 0,
    data_failed: 0,
    data_success: 0,
    id: "WJQHThWHg",
    id_log_file_yoda: "WJQHThWHg",
    nama_file: "CIMB_SMART_YODA_202410291042.csv",
    status_file: "Processing",
    total_data: 0,
    updated_at: 1730195152000,
    updated_by: 0,
  },
];

var listFile = [];
var fileMap = {}; 

if (listFileYoda.length != 0) {
  for (var i = 0; i < listFileYoda.length; i++) {
    var file = listFileYoda[i];
    var fileName = file.nama_file;

    if (!fileMap[fileName] || file.created_at < fileMap[fileName].created_at) {
      fileMap[fileName] = file;
    }
  }
  
  for (var key in fileMap) {
    if (fileMap.hasOwnProperty(key)) {
      listFile.push(fileMap[key]);
    }
  }
}

console.log(listFile);
