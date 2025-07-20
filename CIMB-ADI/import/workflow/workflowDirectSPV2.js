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
          "flow_name": "depan 1",
          "flow_type": "order",
          "minimum_action": 0,
          "organigram_id": 31591
      },
      {
        "flow_name": "depan 2",
        "flow_type": "order",
        "minimum_action": 0,
        "organigram_id": 31591
    }
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
var flowName = [];

function addFlowData(list) {
  for (var i = 0; i < list.length; i++) {
    flowName.push(list[i].flow_name);
    listOrganigram.push(list[i].organigram_id);
    flowType.push(list[i].flow_type);
    minimumAction.push(list[i].minimum_action);
  }
  
};

if (workflowMandatoryReviewer.code === 200 && workflowMandatoryReviewer.data.listMandatoryApproverAhead) {
  addFlowData(workflowMandatoryReviewer.data.listMandatoryApproverAhead);
};

if (workflowMappingPosition) {
  for (var i = 0; i < workflowMappingPosition.length; i++) {
    if (workflowMappingPosition[i].core_flow_id) {
      flowName.push("Flow Direct Supervisor");
      listOrganigram.push(workflowMappingPosition[i].organigram_id);
      flowType.push("order");
      minimumAction.push(0);
    }
  }
};

if (workflowMandatoryReviewer.code === 200 && workflowMandatoryReviewer.data.listMandatoryApproverBehind) {
  addFlowData(workflowMandatoryReviewer.data.listMandatoryApproverBehind);
};


var response = {
  approver_by: "by_advance_organigram",
  organigram_ids: listOrganigram,
  flow_type: flowType,
  minimum_action: minimumAction,
  flow_name: flowName,
};

console.log(response);
