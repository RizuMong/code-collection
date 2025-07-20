// var getListMenu = {
//   access_data: "ALL",
//   access_pages: [
//     {
//       application_id: {
//         id: "hCI4vdgHg",
//         name: "Administrator",
//       },
//       page_ids: [
//         {
//           id: "0Ivun4zNg",
//           name: "Applications and Menu",
//         },
//       ],
//     },
//     {
//       application_id: {
//         id: "rNOSvOgNR",
//         name: "Competency Management",
//       },
//       page_ids: [
//         {
//           id: "Si0PvORNg",
//           name: "Competency Mapping by Position",
//         },
//         {
//           id: "01x8DOgNg",
//           name: "Training Recommendation",
//         },
//       ],
//     },
//     {
//       application_id: {
//         id: "A1XSDdRNR",
//         name: "Training and Certification",
//       },
//       page_ids: [
//         {
//           id: "RGOzOORNR",
//           name: "Approval MDS",
//         },
//       ],
//     },
//   ],
// };

// getListMenu.access_pages.forEach(function(menu) {
//   console.log(menu);
// });


var data = [
  {
      "parameter": "/list-position/list-site-and-position?site=ABP-ENERGY&department=HCGA%20%26%20EXTERNAL"
  },
  {
      "parameter": "/list-position/list-site-and-position?site=ABP-ENERGY&department=FINANCE%20ACCOUNTING"
  }

]

data[data.length - 1 ].finalData = true

console.log(data);
