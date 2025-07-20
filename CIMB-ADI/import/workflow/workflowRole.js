var workflowRoleApprover = [
  {
    "company_id": 25236,
    "core_flow_id": 30705,
    "created_at": 1732535869825,
    "created_by": 166885,
    "dibuat_oleh": "natasia.gunawan@cimbniaga.co.id",
    "diedit_oleh": "natasia.gunawan@cimbniaga.co.id",
    "flow": [
        {
            "core_id": 43099,
            "organigram_id": 33290,
            "position": {
                "id": "DIoSpEZIR",
                "name": "3009404-Syariah Branch Manager - KCS - SSP^KHAIRIL.ZUBAIR@CIMBNIAGA.CO.ID"
            }
        },
        {
          "core_id": 123,
          "organigram_id": 123,
          "position": {
              "id": "123",
              "name": "123"
          }
      }
    ],
    "flow_type": "MINIMUM 1",
    "id": "z5kIFB7Ng",
    "id_flow": "z5kIFB7Ng",
    "name": "ADI - KCP - SSP",
    "updated_at": 1732535871212,
    "updated_by": 166885
}
];  

var workflowMandatoryReviewer = {
  "code": 200,
  "data": {
      "listMandatoryApproverAhead": [
        {
          "flow_name": "depan 1",
          "flow_type": "ORDER",
          "minimum_action": 0,
          "organigram_id": 31591
      },
      {
          "flow_name": "depan 1",
          "flow_type": "ORDER",
          "minimum_action": 0,
          "organigram_id": 31592
      }
      ],
      "listMandatoryApproverBehind": [
        {
          "flow_name": "belakang",
          "flow_type": "ORDER",
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

if (workflowMandatoryReviewer.code === 200) {
  if (!!workflowMandatoryReviewer.data.listMandatoryApproverAhead) {
    if (workflowMandatoryReviewer.data.listMandatoryApproverAhead.length > 0) {
      // var flowMR = [];
      workflowMandatoryReviewer.data.listMandatoryApproverAhead.forEach(function (item) {
        flowMR.push(item.organigram_id);
        flowName.push(item.flow_name);
        flowType.push(item.flow_type);
        minimumAction.push(item.minimum_action);
        listOrganigram.push(flowMR);
      });

  }}
}

// Role Approver
if (!!workflowRoleApprover) {
  for (i = 0; i < workflowRoleApprover.length; i++) {
      if (!!workflowRoleApprover[i].core_flow_id && workflowRoleApprover[i].flow.length > 0) {
          var flowMP = [];
          for (j = 0; j < workflowRoleApprover[i].flow.length; j++) {
              flowMP.push(workflowRoleApprover[i].flow[j].organigram_id);
          }
          if (flowMP.length > 0) {
              listOrganigram.push(flowMP);
              flowName.push(workflowRoleApprover[i].name);
              switch (workflowRoleApprover[i].flow_type) {
                  case "ORDER":
                      flowType.push('order');
                      minimumAction.push(0);
                      break;
                  case "MINIMUM 1":
                      flowType.push('minimum');
                      minimumAction.push(1);
                      break;
                  case "MINIMUM 2":
                      flowType.push('minimum');
                      minimumAction.push(2);
                      break;
                  case "MINIMUM 3":
                      flowType.push('minimum');
                      minimumAction.push(3);
                      break;
                  case "NO ORDER":
                      flowType.push('minimum');
                      minimumAction.push(flowMP.length);
                      break;
              }
              flowID.push(workflowRoleApprover[i].core_flow_id);
          }
      }
  }
};

var response = {
  approver_by: "by_advance_organigram",
  organigram_ids: listOrganigram,
  flow_type: flowType,
  minimum_action: minimumAction,
  flow_name: flowName,
};

console.log(response);
