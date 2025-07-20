var employee = [
  {
    _id: "676cf96c4c29020d1f289ec7",
    birth_date: 565142400000,
    branch_id: {
      id: "74739",
      name: "SATUAN PENGAWAS INTERNAL",
    },
    id_employee: "cYrMaZNNg",
  },
  {
    _id: "676cfb334c29020d1f2b2d59",
    birth_date: 1072420473000,
    branch_id: {
      id: "74689",
      name: "KACAB PAPUA BARAT",
    },
    id_employee: "3vQb-ZHNg",
  },
];


function calculateAge(birthDate) {
  var today = new Date();
  var birthDateObj = new Date(birthDate);
  var age = today.getFullYear() - birthDateObj.getFullYear();
  var monthDiff = today.getMonth() - birthDateObj.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--;
  }

  return age;
};

var branchStats = {};

for (var i = 0, len = employee.length; i < len; i++) {
  var item = employee[i];
  var age = calculateAge(item.birth_date);
  var branchId = item.branch_id.id;

  if (!branchStats[branchId]) {
    branchStats[branchId] = {
      branch: item.branch_id.name,
      branch_code: item.branch_id.id,
      age_stats: {},
      unit_total: 0
    };
  }

  if (age >= 20 && age <= 60) {
    var ageKey = 'age_' + age;
    if (!branchStats[branchId].age_stats[ageKey]) {
      branchStats[branchId].age_stats[ageKey] = 1;
    } else {
      branchStats[branchId].age_stats[ageKey]++;
    }
    branchStats[branchId].unit_total++;
  }
}

var result = [];

for (var key in branchStats) {
  var branch = branchStats[key];
  var ageStats = branch.age_stats;

  for (var age = 20; age <= 60; age++) {
    var ageKey = 'age_' + age;
    if (!ageStats[ageKey]) {
      ageStats[ageKey] = 0;
    }
  }

  var resultItem = {
    branch: branch.branch,
    branch_code: branch.branch_code,
    unit_total: branch.unit_total
  };

  for (var age = 20; age <= 60; age++) {
    var ageKey = 'age_' + age;
    resultItem[ageKey] = ageStats[ageKey];
  }

  result.push(resultItem);
}

// Output hasil
console.log(result);