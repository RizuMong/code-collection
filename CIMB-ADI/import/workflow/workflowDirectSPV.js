var workflowMappingPosition = [
  {
    "code": "position U4 - 1209 - 8",
    "company_id": 25236,
    "core_flow_id": 12909,
    "created_at": 1733725603659,
    "created_by": 157190,
    "dibuat_oleh": "integrasi_yoda@mailinator.com",
    "diedit_oleh": "integrasi_yoda@mailinator.com",
    "division": {},
    "employee_email": {},
    "employee_name": " ",
    "id": "F__lQsVHg",
    "id_key": 39380,
    "id_master_position": "F__lQsVHg",
    "is_position_yoda": true,
    "main_position": true,
    "name": "position U4 - 1209 - 8",
    "organigram_id": 39387,
    "parent_position": {
        "id": "whHlwsVHR",
        "name": "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2"
    },
    "updated_at": 1733725791382,
    "updated_by": 157190
}
];  


var workflowMandatoryReviewer = {
  "code": 200,
  "data": {
      "listMandatoryApproverAhead": [
        {
          flow_name: "depan 1",
          flow_type: "minimum",
          minimum_action: 1,
          organigram_id: 31591,
        },
        {
          flow_name: "depan 1",
          flow_type: "minimum",
          minimum_action: 1,
          organigram_id: 31592,
        },
      ],
      "listMandatoryApproverBehind": [
        {
          "flow_name": "belakang",
          "flow_type": "order",
          "minimum_action": 0,
          "organigram_id": 31591
        }
      ]
  },
  "message": "Success Get List Mandatory Reviewer"
}

var listOrganigram = [];
var flowType = [];
var minimumAction = [];
var flowID = [];
var flowName = [];
var groupedData = {};

if (workflowMandatoryReviewer.code === 200) {
  if (workflowMandatoryReviewer.data.listMandatoryApproverAhead) {
    for (var i = 0; i < workflowMandatoryReviewer.data.listMandatoryApproverAhead.length; i++) {
      var item = workflowMandatoryReviewer.data.listMandatoryApproverAhead[i];
      var key = item.flow_name + '|' + item.flow_type + '|' + item.minimum_action; 
      
      if (!groupedData[key]) {
        groupedData[key] = {
          flow_name: item.flow_name,
          flow_type: item.flow_type,
          organigram_ids: [],
          minimum_action: item.minimum_action,
        };
      };
      
      groupedData[key].organigram_ids.push(item.organigram_id);
    }

    var group = groupedData[key];
      listOrganigram.push(group.organigram_ids);
      flowType.push(group.flow_type);
      minimumAction.push(group.minimum_action);
      flowName.push(group.flow_name);
  }
};

if (!!workflowMappingPosition) {
  var flowMP = [];
  for (i = 0; i < workflowMappingPosition.length; i++) {
    if (!!workflowMappingPosition[i].core_flow_id) {
      flowMP.push(workflowMappingPosition[i].core_flow_id);
    }
  }
  if (flowMP.length > 0) {
    flowName.push("Flow Direct Supervisor");
    listOrganigram.push(flowMP);
    flowType.push("order");
    minimumAction.push(0);
  }
};

if (workflowMandatoryReviewer.code === 200) {
  if (workflowMandatoryReviewer.data.listMandatoryApproverBehind) {
    for (var i = 0; i < workflowMandatoryReviewer.data.listMandatoryApproverBehind.length; i++) {
      var item = workflowMandatoryReviewer.data.listMandatoryApproverBehind[i];
      var key = item.flow_name + '|' + item.flow_type + '|' + item.minimum_action; 
      
      if (!groupedData[key]) {
        groupedData[key] = {
          flow_name: item.flow_name,
          flow_type: item.flow_type,
          organigram_ids: [],
          minimum_action: item.minimum_action,
        };
      };
      
      groupedData[key].organigram_ids.push(item.organigram_id);
    }

    var group = groupedData[key];
      listOrganigram.push(group.organigram_ids);
      flowType.push(group.flow_type);
      minimumAction.push(group.minimum_action);
      flowName.push(group.flow_name);
  }
};

response = {
  approver_by: "by_advance_organigram",
  organigram_ids: listOrganigram,
  flow_type: flowType,
  minimum_action: minimumAction,
  flow_name: flowName,
};

console.log(response);
