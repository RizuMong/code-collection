var payload = {
  // converted_amount: 100000000,
  converted_amount: 1000,
};

var getPolicy = {
  min_amount: 222222,
  name: "Approver Policy",
};

var item = {
  core_id: 13360,
  flow_type: "ORDER",
  flag_flow: "Depan",
  name: "flow2",
  organigram_id: 31591,
  position: {
    id: "h-3MWisIR",
    name: "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
  },
};

var getPolicyPosition = [];
var listMandatoryReviewersAhead  = [];
var listMandatoryReviewersBehind  = [];
function pushFlowData(flowType, flagFlow, minimumAction) {
  if (flagFlow === "Depan") {
    listMandatoryReviewersAhead.push({
      flow_type: flowType,
      organigram_id: item.organigram_id,
      minimum_action: minimumAction,
      flow_name: item.name,
    });
  } else if (flagFlow === "Belakang") {
    listMandatoryReviewersBehind.push({
      flow_type: flowType,
      organigram_id: item.organigram_id,
      minimum_action: minimumAction,
      flow_name: item.name,
    });
  }
}

if (payload.converted_amount < getPolicy.min_amount) {
  var flowType;
  var minimumAction;

  switch (item.flow_type) {
    case "ORDER":
      flowType = "order";
      minimumAction = 0;
      pushFlowData(flowType, item.flag_flow, minimumAction);
      break;

    case "MINIMUM 1":
      flowType = "minimum";
      minimumAction = 1;
      pushFlowData(flowType, item.flag_flow, minimumAction);
      break;

    case "MINIMUM 2":
      flowType = "minimum";
      minimumAction = 2;
      pushFlowData(flowType, item.flag_flow, minimumAction);
      break;

    case "MINIMUM 3":
      flowType = "minimum";
      minimumAction = 3;
      pushFlowData(flowType, item.flag_flow, minimumAction);
      break;

    case "NO ORDER":
      flowType = "minimum";
      minimumAction =
        getPolicyPosition.length != 0 ? getPolicyPosition.length : 1;
      pushFlowData(flowType, item.flag_flow, minimumAction);
      break;
  }
}

console.log({
  listMandatoryReviewersAhead: listMandatoryReviewersAhead,
  listMandatoryReviewersBehind: listMandatoryReviewersBehind,
});
