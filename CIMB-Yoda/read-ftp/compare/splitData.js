var getAllData = [
  {
    bank_account_number: "705015092",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 15092",
    bank_name: "PT Bank CIMB Niaga TBK",
    company_id: 25236,
    cost_center: "1611-47077-3005",
    country: "",
    created_at: 1716197462852,
    created_by: 166466,
    date_of_birth: "1992-02-26",
    directorate: "Strategy- Finance & SPAPM ID",
    ds_email: "integrasi.yoda500@mailinator.com",
    ds_name: "User EMP Yoda500",
    ds_nip: "50500",
    ds_position_name: "50500-position U5 - 500",
    email_address: "integrasi.yoda15092@mailinator.com",
    employee_category: "Permanent",
    employee_name: "User EMP Yoda15092",
    employee_status: "Active",
    filename: "CIMB_SMART_YODA_2020405095415.csv",
    flagging_process: "Insert",
    gender: "Male",
    grade: "U8",
    id: "G_tPppESRM",
    id_parent: "id-lwernm9u-kurj--CIMB_SMART_YODA_2020405095415.csv",
    ids: "G_tPppESRM",
    ktp: "",
    location: "Kantor Pusat - Synergy Buliding Alam Sutera 15092",
    marital_status: "Married",
    nip: "5015092",
    npwp: "",
    org_level: "D4",
    position_code: "5015092-position U8 - 15092",
    position_name: "5015092-position U8 - 15092",
    postal_code: "",
    provinsi: "",
    subdirectorate: "Strategic Procurement & Admin Property Management ID",
    termination_date: "",
    town_of_birth: "",
    town_or_city: "",
    updated_at: 1716197462852,
    updated_by: 166466,
  },
  {
    bank_account_number: "705015092",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 15092",
    bank_name: "PT Bank CIMB Niaga TBK",
    company_id: 25236,
    cost_center: "1611-47077-3005",
    country: "",
    created_at: 1716197462852,
    created_by: 166466,
    date_of_birth: "1992-02-26",
    directorate: "Strategy- Finance & SPAPM ID",
    ds_email: "integrasi.yoda500@mailinator.com",
    ds_name: "User EMP Yoda500",
    ds_nip: "50500",
    ds_position_name: "50500-position U5 - 500",
    email_address: "integrasi.yoda15092@mailinator.com",
    employee_category: "Permanent",
    employee_name: "User EMP Yoda15092",
    employee_status: "Active",
    filename: "CIMB_SMART_YODA_2020405095415.csv",
    flagging_process: "Insert",
    gender: "Male",
    grade: "U8",
    id: "G_tPppESRM",
    id_parent: "id-lwernm9u-kurj--CIMB_SMART_YODA_2020405095415.csv",
    ids: "G_tPppESRM",
    ktp: "",
    location: "Kantor Pusat - Synergy Buliding Alam Sutera 15092",
    marital_status: "Married",
    nip: "5015092",
    npwp: "",
    org_level: "D4",
    position_code: "5015092-position U8 - 15092",
    position_name: "5015092-position U8 - 15092",
    postal_code: "",
    provinsi: "",
    subdirectorate: "Strategic Procurement & Admin Property Management ID",
    termination_date: "",
    town_of_birth: "",
    town_or_city: "",
    updated_at: 1716197462852,
    updated_by: 166466,
  },
  {
    bank_account_number: "705015091",
    bank_branch_name: "BRANCH",
    bank_holder_name: "New 15091",
    bank_name: "PT Bank CIMB Niaga TBK",
    company_id: 25236,
    cost_center: "1611-47077-3005",
    country: "",
    created_at: 1716197462852,
    created_by: 166466,
    date_of_birth: "1991-01-26",
    directorate: "Strategy- Finance & SPAPM ID",
    ds_email: "integrasi.yoda500@mailinator.com",
    ds_name: "User EMP Yoda500",
    ds_nip: "50500",
    ds_position_name: "50500-position U5 - 500",
    email_address: "integrasi.yoda15091@mailinator.com",
    employee_category: "Permanent",
    employee_name: "User EMP Yoda15091",
    employee_status: "Active",
    filename: "CIMB_SMART_YODA_2020405095415.csv",
    flagging_process: "Insert",
    gender: "Male",
    grade: "U8",
    id: "GlpPppPIgZ",
    id_parent: "id-lwernm9s-i0h3--CIMB_SMART_YODA_2020405095415.csv",
    ids: "GlpPppPIgZ",
    ktp: "",
    location: "Kantor Pusat - Synergy Buliding Alam Sutera 15091",
    marital_status: "Married",
    nip: "5015091",
    npwp: "",
    org_level: "D4",
    position_code: "5015091-position U8 - 15091",
    position_name: "5015091-position U8 - 15091",
    postal_code: "",
    provinsi: "",
    subdirectorate: "Strategic Procurement & Admin Property Management ID",
    termination_date: "",
    town_of_birth: "",
    town_or_city: "",
    updated_at: 1716197462852,
    updated_by: 166466,
  },
];

// Buat logic untuk pisah data getAllData per 5k 
function splitDataIntoChunks(data, chunkSize, processFlags) {
  var chunks = [];
  var flagIndex = 0;
  for (var i = 0; i < data.length; i += chunkSize) {
    var processJob = processFlags[flagIndex];
    var chunk = data.slice(i, i + chunkSize);
    chunks.push({
      data: chunk,
      processJob: processJob
    });
    flagIndex = (flagIndex + 1) % processFlags.length; 
  }
  return chunks;
}

var chunkSize = 2;
var processFlags = ['process_1']; // Define your flags here
var splitData = splitDataIntoChunks(getAllData, chunkSize, processFlags);

// console.log(splitData);

// buat flag data tiap split data semisal 5k pertama ditandain "process_1" sampe "process_2" kalau ada data 5k selanjutnya maka balik ke tanda "process_1"

splitData.forEach(function (item) {
  console.log(item);
})