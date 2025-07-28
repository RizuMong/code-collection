// // Validate Key
// var validApiKey = "Z7mT9#eYp2qX6!vLgB@dR3W$Nk5*JsCfA8^MhY0oU";
// var apiKey = req.header && req.header["X-Api-Key"] ? req.header["X-Api-Key"][0] : null;

// if (apiKey !== validApiKey) {
//     res = {
//         status: "error",
//         code: 401,
//         message: "Unauthorized: Invalid API key provided.",
//         suggestion: "Please check your API key and try again. If the issue persists, contact support for assistance."
//     };

//     _log(res);
//     _stopAutomation();
// };

var getAllPermission = [
  {
    attachment: "Wajib",
    bulan_expired_date: "",
    bulan_timbul_cuti: "Januari",
    code: "CIHP",
    company_id: 27414,
    created_at: 1751083214157,
    created_by: 187329,
    deduct_public_holidays: true,
    delete_other_permission: {
      id: "kAauHvJUTbneKt1W",
      name: "Cuti Besar",
    },
    expired_year: null,
    first_min_quota_request: 50,
    first_show: 12,
    id: "0dE8rU1ub8fJTe57",
    id_permission: "0dE8rU1ub8fJTe57",
    is_allowance: false,
    is_unlimited: false,
    leave_quota: 50,
    leave_type_id: {
      id: "N2HawT8NWRs8zEkh",
      name: "Izin",
    },
    name: "Cuti Ibadah Haji ONH Plus",
    status: "Active",
  },
  {
    attachment: "Wajib",
    bulan_expired_date: "",
    bulan_timbul_cuti: "Januari",
    code: "CIHP",
    company_id: 27414,
    created_at: 1751083214157,
    created_by: 187329,
    deduct_public_holidays: true,
    delete_other_permission: {
      id: "kAauHvJUTbneKt1W",
      name: "Cuti Besar",
    },
    expired_year: null,
    first_min_quota_request: 50,
    first_show: 12,
    id: "0dE8rU1ub8fJTe57",
    id_permission: "0dE8rU1ub8fJTe57",
    is_allowance: false,
    is_unlimited: false,
    leave_quota: 50,
    leave_type_id: {
      id: "N2HawT8NWRs8zEkh",
      name: "Izin",
    },
    name: "Cuti Ibadah Haji ONH Plus",
    status: "Active",
  },
];

var dataPermission = [];

var nameMap = {};
for (var i = 0; i < getAllPermission.length; i++) {
  var perm = getAllPermission[i];
  if (perm.status === "Active" && !nameMap[perm.name]) {
    dataPermission.push(perm);
    nameMap[perm.name] = true;
  }
}

console.log(dataPermission);