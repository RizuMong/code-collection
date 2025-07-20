var historyData = {
  agama_id: {
    id: "hfnESvbV4vvVBLDi",
    name: "Wibu",
  },
  company_id: 27414,
  created_at: 1742196338000,
  created_by: 178566,
  id: "",
  id_history: "xDAm4kY22h5Oon5o",
  kode: "WBS",
  nama: "Wibu",
  status: "Active",
  updated_at: 1742196338000,
  updated_by: 178566,
};

var updateData = {
  company_id: 27414,
  created_at: 1742181829289,
  created_by: 178566,
  id_agama: "hfnESvbV4vvVBLDi",
  kode: "WBS",
  nama: "Wibu",
  status: "Inactive",
  updated_at: 1742196384621,
  updated_by: 178566,
};

var isUpdated = false;
var fieldUpdated = ["kode", "nama", "status"];

var isUpdated = false;
for (var i = 0; i < fieldUpdated.length; i++) {
  var field = fieldUpdated[i];
  if (historyData[field] !== updateData[field]) {
    isUpdated = true;
    break; // stop kalau udah nemu
  }
}

console.log(isUpdated);