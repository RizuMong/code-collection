// var workflowMandatoryReviewer = {
//   code: 200,
//   data: {
//     listMandatoryApproverAhead: [
//       {
//         flow_name: "depan 1",
//         flow_type: "minimum",
//         minimum_action: 1,
//         organigram_id: 31591,
//       },
//       {
//         flow_name: "depan 1",
//         flow_type: "minimum",
//         minimum_action: 1,
//         organigram_id: 31592,
//       },
//     ],
//     listMandatoryApproverBehind: [
//       {
//         flow_name: "belakang",
//         flow_type: "ORDER",
//         minimum_action: 0,
//         organigram_id: 31591,
//       },
//     ],
//   },
//   message: "Success Get List Mandatory Reviewer",
// };

// var listOrganigram = [];
// var flowType = [];
// var minimumAction = [];
// var flowID = [];
// var flowName = [];

// var groupedData = {};


// function groupData(dataList) {
//   for (var i = 0; i < dataList.length; i++) {
//     var item = dataList[i];
//     var key = item.flow_name + '|' + item.flow_type + '|' + item.minimum_action; 
    
//     if (!groupedData[key]) {
//       groupedData[key] = {
//         flow_name: item.flow_name,
//         flow_type: item.flow_type,
//         organigram_ids: [],
//         minimum_action: item.minimum_action,
//       };
//     };
    
//     groupedData[key].organigram_ids.push(item.organigram_id);
//   }
// }

// // Group data from listMandatoryApproverAhead and listMandatoryApproverBehind
// if (workflowMandatoryReviewer.code === 200) {
//   if (workflowMandatoryReviewer.data.listMandatoryApproverAhead) {
//     groupData(workflowMandatoryReviewer.data.listMandatoryApproverAhead);
//   }
  
//   if (workflowMandatoryReviewer.data.listMandatoryApproverBehind) {
//     groupData(workflowMandatoryReviewer.data.listMandatoryApproverBehind);
//   }
// }

// // Convert groupedData to the final response format
// for (var key in groupedData) {
//   if (groupedData.hasOwnProperty(key)) {
//     var group = groupedData[key];
//     listOrganigram.push(group.organigram_ids);
//     flowType.push(group.flow_type);
//     minimumAction.push(group.minimum_action);
//     flowName.push(group.flow_name);
//   }
// }

// // Response object
// var response = {
//   approver_by: "by_advance_organigram",
//   organigram_ids: listOrganigram,
//   flow_type: flowType,
//   minimum_action: minimumAction,
//   flow_name: flowName,
// };

// console.log(response);


var today = new Date();
var year = today.getFullYear();

console.log(typeof String(year));
