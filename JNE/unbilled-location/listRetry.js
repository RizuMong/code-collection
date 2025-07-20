var listHasGenerate = [
  {
    combination: "l6pbaqEJGS-TGR|SUKARASA|SMI|CIBADAK-80514305",
    has_generate: false,
    customer_id: "80514305",
    destination_branch_id: "SMI",
    destination_urban_village_name: "CIBADAK",
    origin_branch_id: "TGR",
    origin_urban_village_name: "SUKARASA",
  },
  {
    combination: "12345-TGR|SUKARASA|SMI|CIBADAK-80514305",
    has_generate: false,
    customer_id: "80514305",
    destination_branch_id: "SMI",
    destination_urban_village_name: "CIBADAK",
    origin_branch_id: "TGR",
    origin_urban_village_name: "SUKARASA",
  },
  {
    combination: "54321-TGR|SUKARASA|SMI|CIBADAK-80514305",
    has_generate: false,
    customer_id: "80514305",
    destination_branch_id: "SMI",
    destination_urban_village_name: "CIBADAK",
    origin_branch_id: "TGR",
    origin_urban_village_name: "SUKARASA",
  },
];

var indexLocket = 1;
var listRetry = [];

for (var i = 0; i < listHasGenerate.length; i++) {
  var item = listHasGenerate[i];
  var eachHours = {
    combination: item.combination,
    customer_id: item.customer_id, 
    destination_branch_id: item.destination_branch_id, 
    destination_urban_village_name: item.destination_urban_village_name, 
    origin_branch_id: item.origin_branch_id, 
    origin_urban_village_name: item.origin_urban_village_name, 
    locket: indexLocket,
  };

  indexLocket = (indexLocket % 25) + 1; // Kembali ke 1 setelah mencapai 25

  listRetry.push(eachHours);
}

if (listRetry.length > 0) {
  var lastIndex = listRetry.length - 1;
  listRetry[lastIndex].finalRecord = true;
}

console.log(listRetry);

// var payloadDedicated = [];
// var locket = 1;

// listRetry.forEach(function (item) {
//   locket = item.locket;

//   payloadDedicated.push({
//     combination: item.combination,
//     dataParameter: payload.dataParameter,
//     temporaryDateGenerateID: item.ids,
//   });
// });

// _log(payloadDedicated);

// var locket = item.locket

// var payloadDedicated = {
//     eachHours: item,
//     dataParameter: payload.dataParameter,
//     temporaryDateGenerateID: item.ids
// };

// _log(payloadDedicated)
