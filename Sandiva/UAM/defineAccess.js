// var getListUserAccess = {
//   mapping_application: [
//     {
//       application_id: "4249",
//       organigram_id: "4249",
//       privelege_application_id: 87434,
//     },
//   ],
//   mapping_pages: [
//     {
//       organigram_id: 42181,
//       pages_id: 38940,
//       privelege_pages_id: 2199062,
//     },
//     {
//       organigram_id: 42181,
//       pages_id: 39021,
//       privelege_pages_id: 2199063,
//     },
//     {
//       organigram_id: 42181,
//       pages_id: 39024,
//       privelege_pages_id: 2199064,
//     },
//     {
//       organigram_id: 42181,
//       pages_id: 38944,
//       privelege_pages_id: 2199065,
//     },
//     {
//       organigram_id: 42181,
//       pages_id: 39074,
//       privelege_pages_id: 2199066,
//     },
//     {
//       organigram_id: 42181,
//       pages_id: 38936,
//       privelege_pages_id: 2199067,
//     },
//   ],
// };

// var UPDATED_ACCESS_APP = [
//   {
//     application_id: "4249",
//     application_name: "Expense Management",
//   },
// ];
// var UPDATED_ACCESS_PAGE = [
//   {
//     page_name: "Expense Management - Claimer",
//     pages_id: 38940,
//   },
//   {
//     page_name: "Expense Management - Claimer",
//     pages_id: 39021,
//   },
//   {
//     page_name: "Expense Management - Settlement",
//     pages_id: 39024,
//   },
//   {
//     page_name: "Expense Management - My Reimbursement",
//     pages_id: 38944,
//   },
//   {
//     page_name: "Expense Management - My Cash Advance",
//     pages_id: 39074,
//   },
//   {
//     page_name: "Expense Management - Home",
//     pages_id: 38936,
//   },
//   {
//     page_name: "Expense Management - My Plafond Usage",
//     pages_id: 39049,
//   },
// ];
// var USER_ACCESS_APP = getListUserAccess.mapping_application;
// var USER_ACCESS_PAGE = getListUserAccess.mapping_pages;


// // APP VALIDATE
// var validatedApps = [];
// var finalAppAccess = [];
// for (var i = 0; i < UPDATED_ACCESS_APP.length; i++) {
//   var app = UPDATED_ACCESS_APP[i];
//   var isExist = false;

//   for (var j = 0; j < USER_ACCESS_APP.length; j++) {
//     if (USER_ACCESS_APP[j].application_id === app.application_id) {
//       isExist = true;
//       break;
//     }
//   }

//   if (isExist) {
//     validatedApps.push({
//       application_id: app.application_id,
//       application_name: app.application_name,
//       type: "already_exist",
//     });
//   } else {
//     validatedApps.push({
//       application_id: app.application_id,
//       application_name: app.application_name,
//       type: "add_access",
//     });
//   }
// }

// for (var i = 0; i < USER_ACCESS_APP.length; i++) {
//   var access = USER_ACCESS_APP[i];
//   var isUpdated = false;

//   for (var j = 0; j < UPDATED_ACCESS_APP.length; j++) {
//     if (UPDATED_ACCESS_APP[j].application_id === access.application_id) {
//       isUpdated = true;
//       break;
//     }
//   }

//   if (!isUpdated) {
//     validatedApps.push({
//       application_id: access.application_id,
//       organigram_id: access.organigram_id,
//       privelege_application_id: access.privelege_application_id,
//       type: "delete_access",
//     });
//   }
// }

// finalAppAccess = validatedApps.filter(function (item) {
//   return item.type === "add_access" || item.type === "delete_access";
// });

// // PAGE VALIDATE
// var validatedPages = [];
// var finalPageAccess = [];
// for (var i = 0; i < UPDATED_ACCESS_PAGE.length; i++) {
//   var page = UPDATED_ACCESS_PAGE[i];
//   var isExist = false;

//   for (var j = 0; j < USER_ACCESS_PAGE.length; j++) {
//     if (USER_ACCESS_PAGE[j].pages_id === page.pages_id) {
//       isExist = true;
//       break;
//     }
//   }

//   if (isExist) {
//     validatedPages.push({
//       page_name: page.page_name,
//       pages_id: page.pages_id,
//       type: "already_exist",
//     });
//   } else {
//     validatedPages.push({
//       page_name: page.page_name,
//       pages_id: page.pages_id,
//       type: "add_access",
//     });
//   }
// }

// for (var i = 0; i < USER_ACCESS_PAGE.length; i++) {
//   var access = USER_ACCESS_PAGE[i];
//   var isUpdated = false;

//   for (var j = 0; j < UPDATED_ACCESS_PAGE.length; j++) {
//     if (UPDATED_ACCESS_PAGE[j].pages_id === access.pages_id) {
//       isUpdated = true;
//       break;
//     }
//   }

//   if (!isUpdated) {
//     validatedPages.push({
//       organigram_id: access.organigram_id,
//       pages_id: access.pages_id,
//       privelege_pages_id: access.privelege_pages_id,
//       type: "delete_access",
//     });
//   }
// };

// finalPageAccess = validatedPages.filter(function (item) {
//   return item.type === "add_access" || item.type === "delete_access";
// });

// // console.log("Final Application Access:", finalAppAccess);
// // console.log("Final Page Access:", finalPageAccess);

// console.log("Validated Applications:", validatedApps);
// console.log("Validated Pages:", validatedPages);


var data = [ 
  {
    "application_name": "Application 1",
  }
]

data.push({
  "application_name": "Application 2",
})

console.log(data);