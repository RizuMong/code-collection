var getSites = [
  {
    bussiness_unit_id: {
      id: "i-87banHR",
      name: "ABP",
    },
    code: "ABP-ENERGY",
    company_id: 25257,
    created_at: 1732517155201,
    created_by: 0,
    description: "ABP-ENERGY",
    id: "zcCKwanHg",
    id_job_site: "zcCKwanHg",
    name: "ABP-ENERGY",
    type_site: "ABP-ENERGY",
    updated_at: 1732520098771,
    updated_by: 0,
  },
  {
    bussiness_unit_id: {
      id: "EJUnb-nNg",
      name: "AKAPI",
    },
    code: "AKAPI",
    company_id: 25257,
    created_at: 1732517155116,
    created_by: 0,
    description: "Akademi PPA Indonesia",
    id: "5DCKwanNg",
    id_job_site: "5DCKwanNg",
    name: "AKAPI",
    type_site: "APKAPI",
    updated_at: 1732520098661,
    updated_by: 0,
  },
];

var getDepartments = [
  {
    code_department: "PLT",
    company_id: 25257,
    created_at: 1727615596056,
    created_by: 175332,
    id: "UAV9PzkHR",
    id_department: "UAV9PzkHR",
    name: "PLANT",
    updated_at: 1729060551662,
    updated_by: 175332,
  },
  {
    code_department: "PROD",
    company_id: 25257,
    created_at: 1727615586992,
    created_by: 175332,
    id: "AYCuEkkHR",
    id_department: "AYCuEkkHR",
    name: "PRODUKSI",
    updated_at: 1727615586992,
    updated_by: 175332,
  },
];

var endpoint = "/list-position/list-site-and-position";

var urlParameters = [];
var sitesLength = getSites.length;
var departmentsLength = getDepartments.length;

for (var i = 0; i < sitesLength; i++) {
  var siteCode = getSites[i].code;
  for (var j = 0; j < departmentsLength; j++) {
    var departmentName = getDepartments[j].name;
    urlParameters.push({
      parameter:
        endpoint +
        "?site=" +
        encodeURIComponent(siteCode) +
        "&department=" +
        encodeURIComponent(departmentName),
    });
  }
}

console.log(urlParameters);