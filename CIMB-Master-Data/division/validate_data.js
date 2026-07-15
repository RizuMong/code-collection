// var get_flows = [
//     {
//             "company_id": 25236,
//             "core_flow_id": 39075,
//             "created_at": 1776072478245,
//             "created_by": 187743,
//             "dibuat_oleh": "iqbal.maulana2@cimbniaga.co.id",
//             "diedit_oleh": "iqbal.maulana2@cimbniaga.co.id",
//             "division": "liedk2ZSR",
//             "flow": [
//                 {
//                     "core_id": 55852,
//                     "organigram_id": 68163,
//                     "position": {
//                         "id": "bFitt7sNR",
//                         "name": "Budget custody - kosong^^subandi@cimbniaga.co.id"
//                     }
//                 }
//             ],
//             "flow_old": [
//                 {
//                     "core_id": 55852,
//                     "organigram_id": 68163,
//                     "position": {
//                         "id": "bFitt7sNR",
//                         "name": "Budget custody - kosong^^subandi@cimbniaga.co.id"
//                     }
//                 }
//             ],
//             "flow_type": "MINIMUM 1",
//             "id": "n19qln2vR",
//             "id_flow": "n19qln2vR",
//             "name": "BC - KMF-S&D SERV KAS MOBIL PALEMBANG",
//             "updated_at": 1776072478245,
//             "updated_by": 187743
//         }
// ]

// var get_reports = [
//     {
//             "code": "1611-27007-1052",
//             "company_id": 25236,
//             "created_at": 1695816964186,
//             "created_by": 166887,
//             "description": "KMF-S&D SERV KAS MOBIL PALEMBANG",
//             "dibuat_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
//             "diedit_oleh": "iqbal.maulana2@cimbniaga.co.id",
//             "flow_name": "BC - KMF-S&D SERV KAS MOBIL PALEMBANG",
//             "flow_type": "MINIMUM 1",
//             "id": "_U93_7hvg",
//             "id_flow": "n19qln2vR",
//             "id_key_division": 1,
//             "id_master_division": "liedk2ZSR",
//             "id_report_division": "_U93_7hvg",
//             "name": "KMF-S&D SERV KAS MOBIL PALEMBANG",
//             "position_names": "Budget custody - kosong^^subandi@cimbniaga.co.id",
//             "positions": [
//                 "Budget custody - kosong^^subandi@cimbniaga.co.id"
//             ],
//             "status": "ACTIVE",
//             "updated_at": 1776072478490,
//             "updated_by": 187743
//         },
//         {
//             "code": "1611-27007-1052",
//             "company_id": 25236,
//             "created_at": 1695816964186,
//             "created_by": 166887,
//             "description": "KMF-S&D SERV KAS MOBIL PALEMBANG",
//             "dibuat_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
//             "diedit_oleh": "iqbal.maulana2@cimbniaga.co.id",
//             "flow_name": "",
//             "flow_type": "",
//             "id": "gH2CYI1vR",
//             "id_key_division": 1,
//             "id_master_division": "liedk2ZSR",
//             "id_report_division": "gH2CYI1vR",
//             "name": "KMF-S&D SERV KAS MOBIL PALEMBANG",
//             "position_names": "",
//             "positions": [],
//             "status": "ACTIVE",
//             "updated_at": 1779355522304,
//             "updated_by": 0
//         }
// ]

// var problematicReports = [];

// get_reports.forEach(function (report) {
//     // dianggap aman jika belum ada mapping approver
//     if (
//         (!report.position_names || report.position_names === "") &&
//         (!report.positions || report.positions.length === 0)
//     ) {
//         return;
//     }

//     var flowFound = null;

//     get_flows.forEach(function (flow) {
//         if (flow.id_flow === report.id_flow) {
//             flowFound = flow;
//         }
//     });

//     if (!flowFound) {
//         if (
//             get_flows.length === 0 &&
//             (!report.id_flow || report.id_flow === "")
//         ) {
//             return;
//         }

//         problematicReports.push({
//             report_id: report.id,
//             report_name: report.name,
//             reason: "Flow tidak ditemukan"
//         });

//         return;
//     }

//     var currentPositions = [];

//     flowFound.flow.forEach(function (item) {
//         currentPositions.push(item.position.name);
//     });

//     if (
//         JSON.stringify(currentPositions.sort()) !==
//         JSON.stringify(report.positions.slice().sort())
//     ) {
//         problematicReports.push({
//             report_id: report.id,
//             report_name: report.name,
//             reason: "Approver berbeda dengan flow terbaru",
//             report_positions: report.positions,
//             flow_positions: currentPositions
//         });
//     }
// });

// console.log(problematicReports);


var results = [
  [
    {
      "rc_code": "1611-08003-7101",
      "reason": "Flow tidak ditemukan",
      "ref_id": 9,
      "report_id": "RH2jYI1DRz",
      "report_name": "1611-08003-7101~HYW-HAYAM WURUK"
    }
  ],
  [
    {
      "rc_code": "1611-34073-1125",
      "reason": "Flow tidak ditemukan",
      "ref_id": 11,
      "report_id": "RNhCYSJvgZ",
      "report_name": "SLR-S&D MORTGAGE SOLO - SLAMET RIYADI-405"
    }
  ],
  [
    {
      "rc_code": "1611-31004-1125",
      "reason": "Flow tidak ditemukan",
      "ref_id": 40,
      "report_id": "gHhjLS1DR7",
      "report_name": "Balikpapan - Klandasan-MORTGAGE BUSINESS - SALES & DISTRIBUTION"
    }
  ],
  [
    {
      "rc_code": "1611-00014-7567",
      "reason": "Flow tidak ditemukan",
      "ref_id": 41,
      "report_id": "EC-uhLBHR",
      "report_name": "Jakarta - Niaga Tower-BBF PAM 3 COBA"
    }
  ],
  [
    {
      "rc_code": "1611-16013-7101",
      "reason": "Flow tidak ditemukan",
      "ref_id": 83,
      "report_id": "RH2jLS1DgN",
      "report_name": "Jakarta - Daan Mogot-OPR - OPERATION DESK"
    }
  ],
  [
    {
      "rc_code": "1611-16033-5650",
      "reason": "Flow tidak ditemukan",
      "ref_id": 85,
      "report_id": "RN2CYSJDRO",
      "report_name": "Jakarta - Tomang Tol-REVIEWER - COMMERCIAL BANKING CREDIT - JAKARTA AREA"
    },
    {
      "rc_code": "1611-16033-5650",
      "reason": "Approver berbeda dengan flow terbaru",
      "ref_id": 85,
      "report_id": "RHhjLIJvgF",
      "report_name": "Jakarta - Tomang Tol-REVIEWER - COMMERCIAL BANKING CREDIT - JAKARTA AREA"
    },
    {
      "rc_code": "1611-16033-5650",
      "reason": "Approver berbeda dengan flow terbaru",
      "ref_id": 85,
      "report_id": "RN2CLIJDgc",
      "report_name": "Jakarta - Tomang Tol-REVIEWER - COMMERCIAL BANKING CREDIT - JAKARTA AREA"
    }
  ],
  [
    {
      "rc_code": "1611-20017-7101",
      "reason": "Flow tidak ditemukan",
      "ref_id": 87,
      "report_id": "RHhjLSJDgp",
      "report_name": "Tangerang - Ruko Pinangsia-OPR - OPERATION DESK"
    }
  ]
]

// buat datanya jadi 
[
        {
      "rc_code": "1611-20017-7101",
      "reason": "Flow tidak ditemukan",
      "ref_id": 87,
      "report_id": "RHhjLSJDgp",
      "report_name": "Tangerang - Ruko Pinangsia-OPR - OPERATION DESK"
    },
        {
      "rc_code": "1611-16033-5650",
      "reason": "Approver berbeda dengan flow terbaru",
      "ref_id": 85,
      "report_id": "RN2CLIJDgc",
      "report_name": "Jakarta - Tomang Tol-REVIEWER - COMMERCIAL BANKING CREDIT - JAKARTA AREA"
    }
]