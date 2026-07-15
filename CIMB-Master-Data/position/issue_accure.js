// var get_positions = [
//     {
//         "code": "5418887-Endpoint Device Management Officer",
//         "company_id": 25236,
//         "core_flow_id": 30888,
//         "created_at": 1735877286314,
//         "created_by": 166885,
//         "dibuat_oleh": "integrasi_arjuna@cimbniaga.co.id",
//         "diedit_oleh": "integrasi_arjuna@cimbniaga.co.id",
//         "division": {
//             "id": "ki-sk2ZSg",
//             "name": "1611-47077-3008 | SUB.DIR SPAPM"
//         },
//         "division_code": "1611-47077-3008",
//         "employee_email": {
//             "id": "ov7wCyNHg",
//             "name": "made.nata@cimbniaga.co.id"
//         },
//         "employee_email_temp": {
//             "id": "",
//             "name": ""
//         },
//         "employee_name": "MADE GHIO PRADNYA NATA",
//         "end_date": null,
//         "flag_temp": false,
//         "id": "956_CyHHg",
//         "id_master_position": "956_CyHHg",
//         "is_position_yoda": true,
//         "layer": {
//             "id": "EimPY2mSg",
//             "name": "D-4"
//         },
//         "layer_new": {
//             "id": "EimPY2mSg",
//             "name": "D-4"
//         },
//         "layer_old": {
//             "id": "EimPY2mSg",
//             "name": "D-4"
//         },
//         "name": "5418887-Endpoint Device Management Officer",
//         "old_employee_email": {
//             "id": "ov7wCyNHg",
//             "name": "made.nata@cimbniaga.co.id"
//         },
//         "old_parent": {
//             "id": "VoVQYsWIg",
//             "name": "3027004-PC Laptop \u0026 Procurement Asset Management Head"
//         },
//         "organigram_id": 67645,
//         "parent_position": {
//             "id": "VoVQYsWIg",
//             "name": "3027004-Endpoint Device Management Head"
//         },
//         "start_date": null,
//         "updated_at": 1781545470248,
//         "updated_by": 166889
//     }
// ];

// var get_accure_positions = [{
//     "company_code_obj": {
//         "id": "1611",
//         "name": "1611 - CIMB NIAGA - KONVENSIONAL"
//     },
//     "company_id": 25236,
//     "created_at": 1762853543134,
//     "created_by": 166886,
//     "default_rule": true,
//     "dibuat_oleh": "MUHAMAD.SALTONI@CIMBNIAGA.CO.ID",
//     "diedit_oleh": "muhamad.saltoni@cimbniaga.co.id",
//     "id": "3VRtrukvg",
//     "id_accrue_mapping_position": "3VRtrukvg",
//     "id_key_position": "67645",
//     "master_position_id": {
//         "id": "956_CyHHg",
//         "name": "5418887-PC Laptop, Office Stationary Supply \u0026 Asset Operations Officer"
//     },
//     "privilege": "All",
//     "rule": {
//         "id": "",
//         "name": ""
//     },
//     "updated_at": 1779693450165,
//     "updated_by": 166886
// }];

// var results = []

// // loop data get_positions dan get_accure_positions apabila dari dari organigram_id dan id_key_position match angkanya nanti dari id_key_position di rubah jadi number dulu,
// // terus kalau udah nemu yang sama, bandingkan get_positions.name ke get_accure_positions.master_position_id.name kalau berbeda maka push ke datanya ke results

// var results = [];

// for (var i = 0; i < get_positions.length; i++) {
//     var position = get_positions[i];

//     for (var j = 0; j < get_accure_positions.length; j++) {
//         var accruePosition = get_accure_positions[j];

//         if (
//             Number(position.organigram_id) === Number(accruePosition.id_key_position)
//         ) {
//             if (
//                 position.name !== accruePosition.master_position_id.name
//             ) {
//                 results.push({
//                     organigram_id: position.organigram_id,
//                     id_key_position: accruePosition.id_key_position,
//                     position_name: position.name,
//                     id_accrue_mapping_position: accruePosition.id_accrue_mapping_position,
//                     id_master_position: position.id_master_position,
//                     accrue_position_name: accruePosition.master_position_id.name
//                 });
//             }
//         }
//     }
// }

// console.log(results);


[
    {
        "id_key": 161344,
        "position": "5600726-Client Relationship Manager - (BsM 1) - Business Owners - PHR"
    },
    {
        "id_key": 161342,
        "position": "5600726-Client Relationship Manager - (BsM 1) - Business Owners - PHR"
    },
    {
        "id_key": 160980,
        "position": "3038728-Digital Banking Service Officer - DAJ"
    },
    {
        "id_key": 159547,
        "position": "5601911-Funding Relationship Manager - Area 2 - Jakarta"
    }
]


