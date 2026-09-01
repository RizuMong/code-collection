var workflow_config = {
    "approval_lines": [
        {
            "approval_type": "Holding Approval",
            "employee_ids": null
        },
        {
            "approval_type": "By PIC",
            "employee_ids": [
                {
                    "id": "fUKN0AU9JWB0",
                    "name": "Rizki Approver"
                }
            ]
        }
    ],
    "company_id": 28364,
    "created_at": 1783422721002,
    "created_by": 0,
    "created_by_project_user": "vlN180vmSzPm",
    "entity_ids": [
        {
            "id": "Ks6Bg2v5mQLe",
            "name": "Jakarta Plant"
        },
        {
            "id": "CmiTDnFSMrCa",
            "name": "MEPPO: Meppo-Gen"
        },
        {
            "id": "rvl0inOCklFE",
            "name": "Medan Site"
        },
        {
            "id": "EwGoUCch9xd3",
            "name": "Menara Duta"
        },
        {
            "id": "HZ3kW9nVDtN0",
            "name": "PT Sintesa Argo"
        },
        {
            "id": "Ks6BgE75YiQ1",
            "name": "Sintesa"
        },
        {
            "id": "daCbSej46w1n",
            "name": "Widjajatunggal Sejahtera"
        }
    ],
    "id": "EwGoLPwhyx5x",
    "ids": "EwGoLPwhyx5x",
    "submission_type": {
        "id": "gbqpWGmHxJDn",
        "name": "GRI - Quantitative"
    },
    "updated_at": 1787474289348,
    "updated_by": 0,
    "updated_by_project_user": "vlN180vmSzPm"
};

var approval_lines = [];
var stage_order = 1;

for (var i = 0; i < workflow_config.approval_lines.length; i++) {
    var item = workflow_config.approval_lines[i];
    approval_lines.push({
        approval_type: item.approval_type,
        employee_ids: item.employee_ids,
        stage_order: stage_order
    });
    stage_order++;
}

console.log(approval_lines);