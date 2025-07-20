// var listMandatoryApproverAhead = [
//   {
//     flow_name: "flow2",
//     flow_type: "order",
//     minimum_action: 0,
//     organigram_id: 31591,
//   },
// ];

// var listMandatoryApproverBehind = [
//   {
//     flow_name: "Flow 123",
//     flow_type: "minimum",
//     minimum_action: 1,
//     organigram_id: 31592,
//   },
// ];

// function getItemString(item) {
//   return (
//     item.flow_name +
//     "|" +
//     item.flow_type +
//     "|" +
//     item.organigram_id +
//     "|" +
//     item.minimum_action
//   );
// }

// var seenItems = [];

// var combinedList = listMandatoryApproverAhead.concat(
//   listMandatoryApproverBehind
// );
// var uniqueList = [];

// for (var i = 0; i < combinedList.length; i++) {
//   var itemString = getItemString(combinedList[i]);

//   if (seenItems.indexOf(itemString) === -1) {
//     uniqueList.push(combinedList[i]);
//     seenItems.push(itemString);
//   }
// }

// listMandatoryApproverAhead = uniqueList.filter(function (item) {
//   for (var i = 0; i < listMandatoryApproverAhead.length; i++) {
//     if (getItemString(listMandatoryApproverAhead[i]) === getItemString(item)) {
//       return true;
//     }
//   }
//   return false;
// });

// listMandatoryApproverBehind = uniqueList.filter(function (item) {
//   for (var i = 0; i < listMandatoryApproverBehind.length; i++) {
//     if (getItemString(listMandatoryApproverBehind[i]) === getItemString(item)) {
//       return true;
//     }
//   }
//   return false;
// });

// console.log(listMandatoryApproverAhead);
// console.log(listMandatoryApproverBehind);

// var layerId = "";
// if (!!parentMasterPosition.layer) {
//   layerId = parentMasterPosition.layer.id;
// } else {
//   layerId = masterPosition.layer.id;
// }


var workflowMappingPosition = {
  debugger: true,
};

if (!!workflowMappingPosition) {
  console.log("workflowMappingPosition is not empty");
  
};