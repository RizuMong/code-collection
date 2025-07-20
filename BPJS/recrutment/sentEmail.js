var getDataIntegration  = {
    "message": "Successfully get candidate list",
    "data": {
        "candidates": [
          {
            "data":1
          },
          {
            "data":2
          },
          {
            "data":3
          },
          {
            "data":4
          },
          {
            "data":5
          },
          {
            "data":6
          },
          {
            "data":7
          },
          {
            "data":8
          },
          {
            "data":9
          },
          {
            "data":10
          },
          {
            "data":6
          },
          {
            "data":7
          },
          {
            "data":8
          },
          {
            "data":9
          },
          {
            "data":10
          }
        ],
        "pagination": {
            "current_page": 1,
            "first_page_url": "https://api.mekari.io/v2/talenta-ppe/v3/recruitment/candidates?page=1",
            "from": 1,
            "last_page": 31,
            "last_page_url": "https://api.mekari.io/v2/talenta-ppe/v3/recruitment/candidates?page=31",
            "next_page_url": "https://api.mekari.io/v2/talenta-ppe/v3/recruitment/candidates?page=2",
            "path": "https://api.mekari.io/v2/talenta-ppe/v3/recruitment/candidates?",
            "per_page": 10,
            "prev_page_url": "",
            "to": 10,
            "total": 10
        }
    }
  };
  
  function _log(msg) {
    console.log(msg);
  };
  
  // Konfigurasi
  var groupSize = 4; // maksimal data per grup
  var limit = 5; // data per page
  var maxGroup = 3;
  
  var totalData = getDataIntegration.data.pagination.total;
  var totalPage = Math.ceil(totalData / limit);
  
  var groupDataCounter = {};
  var currentGroup = 1;
  var arrayPage = [];
  
  // Inisialisasi counter tiap group
  for (var g = 1; g <= maxGroup; g++) {
    groupDataCounter[g] = 0;
  }
  
  for (var i = 1; i <= totalPage; i++) {
    // Cari group yang masih bisa menampung
    while (groupDataCounter[currentGroup] + limit > groupSize) {
      currentGroup++;
      if (currentGroup > maxGroup) currentGroup = 1;
    }
  
    // Tambah parameter
    var listParameter = {
      has_generate: false,
      page: i,
      limit: limit,
      group: currentGroup
    };
  
    arrayPage.push(listParameter);
    groupDataCounter[currentGroup] += limit;
  }
  
  _log(arrayPage);
  
  // Expected Result
  // [
  //   { has_generate: false, page: 1, limit: 5, group: 1 },
  //   { has_generate: false, page: 2, limit: 5, group: 2 },
  //   { has_generate: false, page: 3, limit: 5, group: 1 }
  // ]