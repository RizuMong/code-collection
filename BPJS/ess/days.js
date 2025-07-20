// var req = {
//   diffDays: 1,
// };

// var diffDays = req.diffDays;
// var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
// var result = [];
// var maxDays = diffDays > 7 ? 7 : diffDays;

// for (var i = 0; i < maxDays; i++) {
//   result.push({
//     day: days[i % 7], // putar ulang jika diffDays > 7
//     shift: null,
//     // shift2: shiftList,
//   });
// };

// console.log(maxDays);
// console.log(result);

var req = {
  body: {
    access_pages: [
      {
        application_id: {
          id: "4299",
          name: "Kepegawaian",
        },
        page_id: [
          {
            id: 40527,
            name: "DATA KARYAWAN - Direktori Karyawan",
          },
        ],
      },
      {
        application_id: {
          id: "4299",
          name: "Kepegawaian",
        },
        page_id: [
          {
            id: 40357,
            name: "DATA KARYAWAN - ZONA WILAYAH",
          },
        ],
      },
    ],
  },
};

  var applicationIds = [];
  var pageIds = [];
  var response = {
    error: false,
    message: "Validation passed"
  };

  for (var i = 0; i < req.body.access_pages.length; i++) {
    var currentItem = req.body.access_pages[i];
    var currentAppId = currentItem.application_id.id;
    var currentAppName = currentItem.application_id.name;
    
    // Check duplicate application_id
    for (var j = 0; j < applicationIds.length; j++) {
      if (applicationIds[j] === currentAppId) {
        response.error = true;
        response.message = "Duplikat aplikasi: " + currentAppName;
        break;
      }
    }
    
    if (response.error) break;
    applicationIds.push(currentAppId);
    
    // Check duplicate page_id
    for (var k = 0; k < currentItem.page_id.length; k++) {
      var currentPageId = currentItem.page_id[k].id;
      var currentPageName = currentItem.page_id[k].name;
      
      for (var l = 0; l < pageIds.length; l++) {
        if (pageIds[l] === currentPageId) {
          response.error = true;
          response.message = "Duplikat menu: " + currentPageName;
          break;
        }
      }
      
      if (response.error) break;
      pageIds.push(currentPageId);
    }
    
    if (response.error) break;
  }

console.log(response);


//  buat validasi kalau di req.body.access_pages ada page_id.id atau application_id.id yang sama dalam list access_pages maka di return error