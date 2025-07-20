var employee = [
  {
    _id: "676cf96c4c29020d1f289ec7",
    birth_date: 565142400000,
    branch_id: {
      id: "74739",
      name: "SATUAN PENGAWAS INTERNAL",
    },
    id_employee: "cYrMaZNNg",
    job_position_id: "962524",
  },
  {
    _id: "676cfb334c29020d1f2b2d59",
    birth_date: -284491527000,
    branch_id: {
      id: "74689",
      name: "KACAB PAPUA BARAT",
    },
    id_employee: "3vQb-ZHNg",
    job_position_id: "975675",
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
}

var result = [];



for (var i = 0, len = employee.length; i < len; i++) {
  var item = employee[i];
  var age = calculateAge(item.birth_date);

  result.push({
    age_over_50: age > 50 ? 1 : 0,
    age_over_54: age > 54 ? 1 : 0,
    branch: item.branch_id.name,
    branch_code: item.branch_id.id,
    ids: item.id_employee,
  });
};

// Output hasil
console.log(result);
