// var auth_portal = {
//     "data": "rizki.haddi@mekari.com"
// };

// var remarks = "Reject Data";

// var approval_logs = {
//     "approval_type": "Holding Approval",
//     "approvers": [
//         {
//             "acted_at": null,
//             "action": "PENDING",
//             "notes": null,
//             "position": {
//                 "id": "IoPrilJvcBpj",
//                 "name": "PIC - SR Holding"
//             },
//             "user": {
//                 "email": "rizkihaddiprayoga@gmail.com",
//                 "name": "Rizki Approver"
//             }
//         },
//         {
//             "acted_at": null,
//             "action": "PENDING",
//             "notes": null,
//             "position": {
//                 "id": "IoPrilJvcBpj",
//                 "name": "PIC - SR Holding"
//             },
//             "user": {
//                 "email": "rizki.haddi@mekari.com",
//                 "name": "Rizki Haddi Prayoga"
//             }
//         }
//     ],
//     "company_id": 28364,
//     "created_at": 1787494123629,
//     "created_by": 0,
//     "decided_at": null,
//     "id": "s6bXV6J8OjWO",
//     "ids": "s6bXV6J8OjWO",
//     "minimum_action": 1,
//     "request_id": "gb3qnbqH1Jx8",
//     "stage_order": 1,
//     "status": "WAITING_APPROVAL",
//     "updated_at": 1787494123629,
//     "updated_by": 0
// };

// // Check valid + capture matched approver
// var is_valid = false;
// var matched_approver = null;
// var i;

// for (i = 0; i < approval_logs.approvers.length; i++) {
//     if (approval_logs.approvers[i].user.email === auth_portal.data) {
//         is_valid = true;
//         matched_approver = approval_logs.approvers[i];
//         break;
//     }
// }

// if (is_valid) {
//     matched_approver.action = "REJECTED";
//     matched_approver.notes = remarks;
//     matched_approver.acted_at = Date.now();

//     approval_logs.approvers = [matched_approver];
//     approval_logs.status = "REJECTED";
//     approval_logs.decided_at = Date.now();
//     approval_logs.updated_at = Date.now();
// };

// console.log(is_valid);
// console.log(approval_logs);


// var period = [
//     "2026",
//     "2025",
// ];

// rubah ke:
// var period = [
//     2026,
//     2025,
// ];


var submission_parent = {
    "data": 1
};

var submission_items = [
    {
        "data": 1
    }
];


submission_parent.items = submission_items;
console.log(submission_parent);
