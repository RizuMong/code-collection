var listOrganigram = [];
var flowType = [];
var minimumAction = [];
var flowID = [];
var flowName = [];

// sample 1
// var workflowBudgetCustody = [
//     {
//         "company_id": 25236,
//         "core_flow_id": 13621,
//         "created_at": 1695983593148,
//         "created_by": 166887,
//         "dibuat_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
//         "diedit_oleh": "iqbal.maulana2@cimbniaga.co.id",
//         "division": "I3yAzhWSg",
//         "flow": [],
//         "flow_old": [
//             {
//                 "core_id": 20813,
//                 "organigram_id": 31703,
//                 "position": {
//                     "id": "1p4AybWIR",
//                     "name": "Syariah Budget Custody I^ELVIN.TRISAPUTRA@CIMBNIAGA.CO.ID"
//                 }
//             }
//         ],
//         "flow_type": "MINIMUM 1",
//         "id": "9YiNg-WIg",
//         "id_flow": "9YiNg-WIg",
//         "name": "BC RETAIL & CASH HAJJ MANAGEMENT",
//         "updated_at": 1773373816273,
//         "updated_by": 166889
//     },
//     {
//         "company_id": 25236,
//         "core_flow_id": 29316,
//         "created_at": 1706609276960,
//         "created_by": 166885,
//         "dibuat_oleh": "natasia.gunawan@cimbniaga.co.id",
//         "diedit_oleh": "natasia.gunawan@cimbniaga.co.id",
//         "division": "I3yAzhWSg",
//         "flow": [],
//         "flow_old": [
//             {
//                 "core_id": 40206,
//                 "organigram_id": 66584,
//                 "position": {
//                     "id": "AuhazopSR",
//                     "name": "MR - Oprisk Syariah Banking^^HOTAMAWATY@CIMBNIAGA.CO.ID"
//                 }
//             }
//         ],
//         "flow_type": "MINIMUM 1",
//         "id": "gkSELTpSg",
//         "id_flow": "gkSELTpSg",
//         "name": "MR OPRISK - RETAIL & CASH HAJJ MANAGEMENT",
//         "updated_at": 1769763052838,
//         "updated_by": 166889
//     }
// ];

// sample 2
var workflowBudgetCustody = [
    {
        "company_id": 25236,
        "core_flow_id": 13431,
        "created_at": 1695983531009,
        "created_by": 166887,
        "dibuat_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
        "diedit_oleh": "elvina.faustine@cimbniaga.co.id",
        "division": "snB1zhZIR",
        "flow": [
            {
                "core_id": 55580,
                "organigram_id": 66115,
                "position": {
                    "id": "xNZ9Mn4Sg",
                    "name": "Budget Custody - operation - 3^HANNY.GOTAMA@CIMBNIAGA.CO.ID"
                }
            },
            {
                "core_id": 20248,
                "organigram_id": 31473,
                "position": {
                    "id": "Rkc-sbZSR",
                    "name": "Budget Custody - Operations - 6^Vini.Hapsari@cimbniaga.co.id"
                }
            },
            {
                "core_id": 55581,
                "organigram_id": 46947,
                "position": {
                    "id": "Mny7UbWIR",
                    "name": "Budget Custody - IT - 6^RIZKI.AFRIANDI@CIMBNIAGA.CO.ID"
                }
            },
            {
                "core_id": 55582,
                "organigram_id": 46933,
                "position": {
                    "id": "tS_G8xZSg",
                    "name": "Budget Custody - IT - 5^AULIA.SARAH@CIMBNIAGA.CO.ID"
                }
            }
        ],
        "flow_old": [
            {
                "core_id": 55580,
                "organigram_id": 66115,
                "position": {
                    "id": "xNZ9Mn4Sg",
                    "name": "Budget Custody - operation - 3^HANNY.GOTAMA@CIMBNIAGA.CO.ID"
                }
            },
            {
                "core_id": 20248,
                "organigram_id": 31473,
                "position": {
                    "id": "Rkc-sbZSR",
                    "name": "Budget Custody - Operations - 6^Vini.Hapsari@cimbniaga.co.id"
                }
            },
            {
                "core_id": 55581,
                "organigram_id": 46947,
                "position": {
                    "id": "Mny7UbWIR",
                    "name": "Budget Custody - IT - 6^RIZKI.AFRIANDI@CIMBNIAGA.CO.ID"
                }
            },
            {
                "core_id": 55582,
                "organigram_id": 46933,
                "position": {
                    "id": "tS_G8xZSg",
                    "name": "Budget Custody - IT - 5^AULIA.SARAH@CIMBNIAGA.CO.ID"
                }
            },
            {
                "core_id": 55583,
                "organigram_id": 46925,
                "position": {
                    "id": "4HNMUxWIg",
                    "name": "BUDGET CUSTODY - IT - 7^OGIE.TRYDIANTO@CIMBNIAGA.CO.ID"
                }
            },
            {
                "core_id": 55586,
                "organigram_id": 31679,
                "position": {
                    "id": "hlDIOPpDg",
                    "name": "Budget Custody - IT - 8^NURSINTYAWATI.NURSINTYAWATI@CIMBNIAGA.CO.ID"
                }
            }
        ],
        "flow_type": "MINIMUM 1",
        "id": "zg44gaWIR",
        "id_flow": "zg44gaWIR",
        "name": "BC OPS & IT OFFICE. COST MANAGEMENT & ANALYTICS",
        "updated_at": 1777949139143,
        "updated_by": 166889
    },
    {
        "company_id": 25236,
        "core_flow_id": 26885,
        "created_at": 1698746796892,
        "created_by": 166885,
        "dibuat_oleh": "natasia.gunawan@cimbniaga.co.id",
        "diedit_oleh": "elvina.faustine@cimbniaga.co.id",
        "division": "snB1zhZIR",
        "flow": [],
        "flow_old": [
            {
                "core_id": 35937,
                "organigram_id": 66114,
                "position": {
                    "id": "2KZXG74IR",
                    "name": "Budget Custody - operation - 2^DESTY.WULANDARI@CIMBNIAGA.CO.ID"
                }
            },
            {
                "core_id": 55584,
                "organigram_id": 66116,
                "position": {
                    "id": "JVuknnVSg",
                    "name": "Budget Custody - IT - 2^NENENG.WIJAYANTI@CIMBNIAGA.CO.ID"
                }
            },
            {
                "core_id": 38665,
                "organigram_id": 66132,
                "position": {
                    "id": "-4XDjvVSR",
                    "name": "Budget Custody - Operation 4^FIKA.RISNAWATI@CIMBNIAGA.CO.ID"
                }
            }
        ],
        "flow_type": "MINIMUM 1",
        "id": "rlFhK74Sg",
        "id_flow": "rlFhK74Sg",
        "name": "BC OPS & IT OFFICE. COST MANAGEMENT & ANALYTICS 2",
        "updated_at": 1779439958750,
        "updated_by": 166889
    },
    {
        "company_id": 25236,
        "core_flow_id": 26886,
        "created_at": 1698746820826,
        "created_by": 166885,
        "dibuat_oleh": "natasia.gunawan@cimbniaga.co.id",
        "diedit_oleh": "natasia.gunawan@cimbniaga.co.id",
        "division": "snB1zhZIR",
        "flow": [],
        "flow_old": [
            {
                "core_id": 35939,
                "organigram_id": 31549,
                "position": {
                    "id": "tJVjMnVIR",
                    "name": "Budget Custody - Operations & IT^MAGDALENA.GUNARDI@CIMBNIAGA.CO.ID"
                }
            }
        ],
        "flow_type": "MINIMUM 1",
        "id": "_VWoF74Sg",
        "id_flow": "_VWoF74Sg",
        "name": "BC OPS & IT OFFICE. COST MANAGEMENT & ANALYTICS 3",
        "updated_at": 1778670962542,
        "updated_by": 166889
    },
    {
        "company_id": 25236,
        "core_flow_id": 29108,
        "created_at": 1706609191385,
        "created_by": 166885,
        "dibuat_oleh": "natasia.gunawan@cimbniaga.co.id",
        "diedit_oleh": "natasia.gunawan@cimbniaga.co.id",
        "division": "snB1zhZIR",
        "flow": [],
        "flow_old": [
            {
                "core_id": 39998,
                "organigram_id": 66582,
                "position": {
                    "id": "ofmbkTtIg",
                    "name": "MR - Oprisk OIT^^KETUT.SAPUTRA@CIMBNIAGA.CO.ID"
                }
            }
        ],
        "flow_type": "MINIMUM 1",
        "id": "wha-LTtSR",
        "id_flow": "wha-LTtSR",
        "name": "MR OPRISK - OPS & IT OFFICE. COST MANAGEMENT & ANALYTICS",
        "updated_at": 1779166410704,
        "updated_by": 166889
    }
];

for (h = 0; h < workflowBudgetCustody.length; h++) {
    if (!!workflowBudgetCustody[h].core_flow_id) {
        var flowBC = [];
        for (i = 0; i < workflowBudgetCustody[h].flow.length; i++) {
            flowBC.push(workflowBudgetCustody[h].flow[i].organigram_id);
        }
        if (flowBC.length > 0) {
            flowName.push(workflowBudgetCustody[h].name)
            listOrganigram.push(flowBC);
            switch (workflowBudgetCustody[h].flow_type) {
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
                    minimumAction.push(flowBC.length);
                    break;
            }
        }
        flowID.push(workflowBudgetCustody[h].core_flow_id);
    }
}

var returnJson = {
    "approver_by": "by_advance_organigram",
    "organigram_ids": listOrganigram,
    "flow_type": flowType,
    "minimum_action": minimumAction,
    "flow_name": flowName
};

console.log(returnJson);