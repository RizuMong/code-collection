var datas = [
    {
        "approval_logs": [
            {
                "approval_type": "Holding Approval",
                "approvers": [
                    {
                        "acted_at": 1787495822061,
                        "action": "REJECTED",
                        "notes": "Reject Reason",
                        "position": {
                            "id": "IoPrilJvcBpj",
                            "name": "PIC - SR Holding"
                        },
                        "user": {
                            "email": "rizki.haddi@mekari.com",
                            "id": "vlN180vmSzPm",
                            "name": "Rizki Haddi Prayoga"
                        }
                    }
                ],
                "decided_at": 1787495822061,
                "minimum_action": 1,
                "request_id": "RHMZbx9erNum",
                "stage_order": 1,
                "status": "REJECTED"
            },
            {
                "approval_type": "By PIC",
                "approvers": [
                    {
                        "acted_at": null,
                        "action": "PENDING",
                        "notes": null,
                        "position": {
                            "id": "IoPrilJvcBpj",
                            "name": "PIC - SR Holding"
                        },
                        "user": {
                            "email": "rizkihaddiprayoga@gmail.com",
                            "id": "fUKN0AU9JWB0",
                            "name": "Rizki Approver"
                        }
                    },
                    {
                        "acted_at": null,
                        "action": "PENDING",
                        "notes": null,
                        "position": {
                            "id": "9LQUouVFRqoa",
                            "name": "EXECUTIVE Sustainability - Widjajatunggal Sejahtera"
                        },
                        "user": {
                            "email": "muhammad.faqih@mekari.com",
                            "id": "QRHw8oeAc4ub",
                            "name": "Muhammad Faqih"
                        }
                    }
                ],
                "minimum_action": 1,
                "request_id": "RHMZbx9erNum",
                "stage_order": 2,
                "status": "WAITING_APPROVAL"
            }
        ],
        "company_id": 28364,
        "created_at": 1787495796005,
        "created_by": 0,
        "created_by_project_user": "vlN180vmSzPm",
        "current_stage_order": 1,
        "entity_id": {
            "id": "Ks6BgE75YiQ1",
            "name": "Sintesa"
        },
        "flow_status": "rejected",
        "id": "RHMZbx9erNum",
        "ids": "RHMZbx9erNum",
        "period_id": {
            "id": "Xn05TC9biby3",
            "name": 2026
        },
        "rejected_at": 1787495822037,
        "rejected_by": "rizki.haddi@mekari.com",
        "submission_type_id": {
            "id": "gbqpWGmHxJDn",
            "name": "GRI - Quantitative"
        },
        "submitted_at": 1787495811739,
        "submitted_by": "rizki.haddi@mekari.com",
        "template_id": {
            "id": "s6bVWAA8GjWY",
            "name": "GRI - Quantitative Period 2026"
        },
        "updated_at": 1787495822092,
        "updated_by": 0
    }
];

var auth_portal = {
    "data": "rizki.haddi@mekari.com"
};

// Filter di approval_logs kalau ada auth_portal.data di salah satu approvers dan stage_order nya sama dan masih flow_status nya sent maka show. kalau selain sent maka show semua asal ada di approvers