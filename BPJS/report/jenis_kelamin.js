var employee = [
  {
    _id: "676cfb474c29020d1f2b919e",
    branch_id: {
      id: "75597",
      name: "KOMITE MANAJEMEN RISIKO, INVSTASI DAN PELAYANAN",
    },
    gender: "Male",
    id_employee: "6C5a-ZHHg",
  },
  {
    _id: "676cfb7e4c29020d1f2c9d89",
    branch_id: {
      id: "75597",
      name: "KOMITE MANAJEMEN RISIKO, INVSTASI DAN PELAYANAN",
    },
    gender: "Female",
    id_employee: "aHmL-ZNNR",
  },
  {
    _id: "676cfb7e4c29020d1f2c9d89",
    branch_id: {
      id: "75597",
      name: "KOMITE MANAJEMEN RISIKO, INVSTASI DAN PELAYANAN",
    },
    gender: "Female",
    id_employee: "aHmL-ZNNR",
  }
];

// Objek untuk menyimpan hasil
var branchStats = {};

// Loop untuk menghitung jumlah pria dan wanita
for (var i = 0, len = employee.length; i < len; i++) {
  var item = employee[i];
  var branchId = item.branch_id.id;

  if (!branchStats[branchId]) {
    branchStats[branchId] = {
      branch: item.branch_id.name,
      branch_code: item.branch_id.id,
      count_female: 0,
      count_male: 0,
    };
  }

  if (item.gender === "Male") {
    branchStats[branchId].count_male++;
  } else if (item.gender === "Female") {
    branchStats[branchId].count_female++;
  }
}

// Hitung persentase
var result = [];
for (var key in branchStats) {
  var branch = branchStats[key];
  var total = branch.count_male + branch.count_female;

  branch.percentage_female = total > 0 ? parseFloat((branch.count_female / total * 100).toFixed(2)) : 0;
  branch.percentage_male = total > 0 ? parseFloat((branch.count_male / total * 100).toFixed(2)) : 0;

  result.push(branch);
}

// Output hasil
console.log(result);


// result = [
//   {
//     branch: branch_id.name,
//     branch_code: branch_id.id,
//     count_female: 1, // total number of female
//     count_male: 1, // total number of male
//     percentage_female: 50, // percentage of female over male
//     percentage_male: 50, // percentage of male over female
//   }
// ]