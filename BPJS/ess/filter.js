// var getParameter =  {
//         "allowance_status": [],
//         "allowance_type_id": {
//             "id": "1OB1rJnpOjWu7VXG",
//             "name": "CB - Cuti Besar"
//         },
//         "company_id": 27414,
//         "created_at": 1753953737646,
//         "created_by": 187672,
//         "employee_ids": [
//             {
//                 "id": "lNRoBQdmUNp9if7U",
//                 "name": "201272500 - Aul hukuman baru"
//             },
//             {
//                 "id": "hfq2HUrVPC3vBAbo",
//                 "name": "101260080 - ayam goreng"
//             },
//             {
//                 "id": "wG0hbG3AoShif45Y",
//                 "name": "201250094 - pentest approver dua"
//             },
//             {
//                 "id": "tSUOBrPF3ZFeyDLO",
//                 "name": "101240688 - pentest requestor dua"
//             },
//             {
//                 "id": "kAaU0pXWH3lYKf77",
//                 "name": "201230088 - pentest approver satu"
//             },
//             {
//                 "id": "UK49qd0wrE6ZL0OC",
//                 "name": "101222070 - pentest requestor satu"
//             },
//             {
//                 "id": "gbo8bomtJA9xH9Dl",
//                 "name": "101211774 - bpjs approved"
//             },
//             {
//                 "id": "N2Hlu0wyXXpczNj4",
//                 "name": "101200080 - bpjskt"
//             },
//             {
//                 "id": "XnDeVngc91WXbTI2",
//                 "name": "101198966 - approver testing tiga"
//             },
//             {
//                 "id": "xDsCmisdM7IPoHrd",
//                 "name": "101180064 - requestor testing tiga"
//             },
//             {
//                 "id": "HZl86HH3W7C3VTi9",
//                 "name": "101178979 - approver testing dua"
//             },
//             {
//                 "id": "Fp7BffmQwrtUGGaM",
//                 "name": "101169867 - requestor testing dua"
//             },
//             {
//                 "id": "312bnZ265bO4WcJr",
//                 "name": "101159864 - approver testing satu"
//             },
//             {
//                 "id": "n0cVZHXnEefIqaIi",
//                 "name": "101140076 - requestor testing satu"
//             },
//             {
//                 "id": "pQJ9CKEFrysRk4uS",
//                 "name": "201112199 - Henny"
//             }
//         ],
//         "id": "Dc6DhH41QfqIPQrD",
//         "ids": "Dc6DhH41QfqIPQrD",
//         "level_organisasi_ids": [
//             // {
//             //     "id": "SxKat6xz2dFRIF2f",
//             //     "name": "Kantor Wilayah Sumbarriau"
//             // },
//             // {
//             //     "id": "Z3NgHh5tip1WMFrr",
//             //     "name": "Kantor Wilayah Sumbagut"
//             // }
//         ],
//         "name": "Laporan Tunjangan 1 31/07/2025 - 31/07/2025",
//         "payment_end_date": null,
//         "payment_start_date": null,
//         "progres_bar": 20,
//         "report_name": "Laporan Tunjangan 1 31/07/2025 - 31/07/2025",
//         "status": "PROSES",
//         "taken_end_date": null,
//         "taken_start_date": null,
//  "unit_kerja_ids": [
//             // {
//             //     "id": "xDsCIihDrTSRog3U",
//             //     "name": "KCP SUMENEP TRUNOJOYO"
//             // },
//             // {
//             //     "id": "cEXiP2NeYFdBuY0p",
//             //     "name": "KCP BOGOR LEUWILIANG"
//             // }
//         ],
//         "updated_at": 1753953737908,
//         "updated_by": 187672,
//   "wilayah_ids": [
//             {
//                 "id": "hfqked2CtC6DBbFG",
//                 "name": "KANWIL JAWA TIMUR"
//             },
//             {
//                 "id": "T4hCiG3P4MNC1Vt5",
//                 "name": "KANWIL JAWA BARAT"
//             }
//         ]
// }

// var item = {
//     employee_id: {
//         id: "lNRoBQdmUNp9if7U",
//         name: "201272500 - Aul hukuman baru"
//     }
// }


// var filterTaken = {
//   _filter_version: 2,
//   where_is_and: {
//     "employee_id.id": item.employee_id,
//     "status": "Active",
//     "is_allowance_take": "taken",
//   },
//   where_in_and: {}
// //   where_in_and: {
// //     allowance_take_day: req.date.day,
// //     allowance_take_month: req.date.month,
// //     allowance_take_year: req.date.year,
// //   },
// };

// var filterAvailable = {
//   _filter_version: 2,
//   where_is_and: {
//     "employee_id.id": item.employee_id,
//     "status": "Active",
//     "is_allowance_take": "available",
//   },
//   where_in_and: {}
// };

// var hasWhereIn = false;

// if (getParameter.allowance_type_id && getParameter.allowance_type_id.id) {
//   filterTaken.where_is_and["permission_id.id"] = getParameter.allowance_type_id.id;
//   filterAvailable.where_is_and["permission_id.id"] = getParameter.allowance_type_id.id;
// }

// if (getParameter.level_organisasi_ids && getParameter.level_organisasi_ids.length !== 0) {
//   var levelOrganisasiIds = [];
//   for (var i = 0; i < getParameter.level_organisasi_ids.length; i++) {
//     levelOrganisasiIds.push(getParameter.level_organisasi_ids[i].id);
//   }
//   filterTaken.where_in_and = filterTaken.where_in_and || {};
//   filterAvailable.where_in_and = filterAvailable.where_in_and || {};
//   filterTaken.where_in_and["level_organisasi_id.id"] = levelOrganisasiIds;
//   filterAvailable.where_in_and["level_organisasi_id.id"] = levelOrganisasiIds;
//   hasWhereIn = true;
// }

// if (getParameter.unit_kerja_ids && getParameter.unit_kerja_ids.length !== 0) {
//   var unitKerjaIds = [];
//   for (var j = 0; j < getParameter.unit_kerja_ids.length; j++) {
//     unitKerjaIds.push(getParameter.unit_kerja_ids[j].id);
//   }
//   filterTaken.where_in_and = filterTaken.where_in_and || {};
//   filterAvailable.where_in_and = filterAvailable.where_in_and || {};
//   filterTaken.where_in_and["unit_kerja_id.id"] = unitKerjaIds;
//   filterAvailable.where_in_and["unit_kerja_id.id"] = unitKerjaIds;
//   hasWhereIn = true;
// }

// if (getParameter.wilayah_ids && getParameter.wilayah_ids.length !== 0) {
//   var wilayahIds = [];
//   for (var k = 0; k < getParameter.wilayah_ids.length; k++) {
//     wilayahIds.push(getParameter.wilayah_ids[k].id);
//   }
//   filterTaken.where_in_and = filterTaken.where_in_and || {};
//   filterAvailable.where_in_and = filterAvailable.where_in_and || {};
//   filterTaken.where_in_and["wilayah_id.id"] = wilayahIds;
//   filterAvailable.where_in_and["wilayah_id.id"] = wilayahIds;
//   hasWhereIn = true;
// }

// if (!hasWhereIn) {
//   delete filterTaken.where_in_and;
//   delete filterAvailable.where_in_and;
// }

// console.log(filterTaken);
// console.log(filterAvailable);



// var sort = { created_at: -1 };
// // var getAllowanceTaken = _findRecords("cEXRke29g3gKutc", 1, 1000, sort, filterTaken, "and") || [];
// // var getAllowanceAvalaible = _findRecords("cEXRke29g3gKutc", 1, 1000, sort, filterAvailable, "and") || [];


var req = {
        "data": null,
        "form_data_id": "aCGBEGOPEEMlthr2",
        "record_id": [
            "VMiV78EeyWl2X1Kc"
        ]
    }


if (req.record_id) {
    var id_data = req.record_id;
} else if (req.id) {
    var id_data = [req.id];
} else {
    var id_data = [];
}

console.log(id_data);
