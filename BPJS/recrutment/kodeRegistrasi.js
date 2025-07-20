function formatDateFull(timestamp) {
  var d = new Date(timestamp);
  var day = ("0" + d.getDate()).slice(-2);
  var month = ("0" + (d.getMonth() + 1)).slice(-2);
  var year = ("0" + (d.getFullYear() % 100)).slice(-2);

  return day + month + year;
}

function formatDateHalf(timestamp) {
  var d = new Date(timestamp);
  var day = ("0" + d.getDate()).slice(-2);
  var month = ("0" + (d.getMonth() + 1)).slice(-2);
  var year = ("0" + (d.getFullYear() % 100)).slice(-2);

  return day + month + year;
}

var req = {
  applied_date: 1746641898244,
  channel: "REGULAR",
  city_code: "JKB",
  code_user: "yILhm1hRKV4GrUrK",
  date_of_birth: 1745893764277,
  gender: "Laki-laki",
  vacancy_code: "Z3NtkbOXRLp7M4eq",
};

req.gender = "P";

if (req.gender == "Laki-laki") {
  req.gender = "L";
}

var formatNumber =
  req.code_user +
  "/" +
  formatDateFull(req.date_of_birth) +
  "/" +
  req.gender +
  "/" +
  req.channel +
  "/" +
  req.city_code +
  "/" +
  formatDateHalf(req.applied_date);

var res = formatNumber;

console.log(res);
