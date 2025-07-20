function formatDateFull(timestamp) {
  if (!timestamp) {
    return "--";
  }

  var d = new Date(timestamp);
  var day = ("0" + d.getDate()).slice(-2);
  var month = ("0" + (d.getMonth() + 1)).slice(-2);
  var year = ("0" + (d.getFullYear() % 100)).slice(-2);

  return day + month + year;
}

function formatDateHalf(timestamp) {
  if (!timestamp) {
    return "--";
  }

  var d = new Date(timestamp);
  var day = ("0" + d.getDate()).slice(-2);
  var month = ("0" + (d.getMonth() + 1)).slice(-2);
  var year = ("0" + (d.getFullYear() % 100)).slice(-2);

  return day + month + year;
}

function defaultData(data) {
  if (!data) {
    return "--";
  }

  return data;
}

var req = {
  applied_date: 1747797614380,
  channel: "REGULAR",
  city_code: "",
  code_user: "SxKUuYCNS11BIYVv",
  date_of_birth: "",
  gender: "Laki-laki",
  vacancy_code: "Fp70JxZjRc7VG25r",
};

req.gender = "P";

if (req.gender == "Laki-laki") {
  req.gender = "L";
}

var formatNumber =
  defaultData(req.code_user) +
  "/" +
  formatDateFull(req.date_of_birth) +
  "/" +
  defaultData(req.gender) +
  "/" +
  defaultData(req.channel) +
  "/" +
  defaultData(req.city_code) +
  "/" +
  formatDateHalf(req.applied_date);

var res = formatNumber;

console.log(res);
