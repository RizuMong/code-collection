var getDataIntegration = {
  message: "Successfully get candidate list",
  data: {
    candidates: [
    ],
    pagination: {
      current_page: 1,
      first_page_url:
        "https://api.mekari.io/v2/talenta-ppe/v3/recruitment/candidates?page=1",
      from: 1,
      last_page: 31,
      last_page_url:
        "https://api.mekari.io/v2/talenta-ppe/v3/recruitment/candidates?page=31",
      next_page_url:
        "https://api.mekari.io/v2/talenta-ppe/v3/recruitment/candidates?page=2",
      path: "https://api.mekari.io/v2/talenta-ppe/v3/recruitment/candidates?",
      per_page: 10,
      prev_page_url: "",
      to: 10,
      total: 1000,
    },
  },
};

function _log(msg) {
  console.log(msg);
}

// Konfigurasi
var limit = 100;
var maxGroupCycle = 5;

var totalData = 0;
var parameterHalaman = [];
var hitAPITalenta = {};

if (typeof hitAPITalenta === "object" && hitAPITalenta !== null) {
  totalData = getDataIntegration.data.pagination.total;
}

var totalPage = 0;
if (limit > 0 && totalData > 0) {
  totalPage = Math.ceil(totalData / limit);
}

if (totalPage > 0 && maxGroupCycle > 0) {
  for (var halamanKe = 1; halamanKe <= totalPage; halamanKe++) {
    var grupFinal = ((halamanKe - 1) % maxGroupCycle) + 1;

    var infoHalaman = {
      has_generate: false,
      page: halamanKe,
      limit: limit,
      group: grupFinal,
    };

    parameterHalaman.push(infoHalaman);
  }
}

_log(parameterHalaman);