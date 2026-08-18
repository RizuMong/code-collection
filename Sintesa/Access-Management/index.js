var req = {
    "_native_approval_flow": {
        "approval_cancel_note": "",
        "approval_flow": [
            {
                "approval_stage": 1,
                "flow_name": "Approval stage 1",
                "flow_response": [
                    {
                        "action_at": 0,
                        "note": "",
                        "position": {
                            "code": "Supervisor - PT Aviasi Pariwisata Indonesia - yIoWT7vrW3V7",
                            "name": "Supervisor - PT Aviasi Pariwisata Indonesia"
                        },
                        "status": "sent",
                        "user": {
                            "email": "",
                            "id": "",
                            "name": ""
                        }
                    }
                ],
                "flow_type": "no_order",
                "minimum_action": 1,
                "position_codes": [
                    "Supervisor - PT Aviasi Pariwisata Indonesia - yIoWT7vrW3V7"
                ],
                "status": "sent"
            }
        ],
        "approval_status": "sent",
        "approval_updated_at": 1784892122863,
        "is_active": true,
        "is_revision": false,
        "requested_at": 1784892122863,
        "requested_by_project_user": "9LKjan8FuqZ4",
        "requested_person": {
            "email": "pristiwan.akbar@mekari.com",
            "name": "Pristiwan Akbar Subery",
            "user_id": "9LKjan8FuqZ4"
        },
        "revision_count": 0
    },
    "attachment": [
        {
            "name": "Mekari.png",
            "url": "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/nocode/file-upload/dev/28295/6XnA2Flg2xmx-Mekari.png"
        }
    ],
    "company_id": 28295,
    "created_at": 1784892117606,
    "created_by": 0,
    "created_by_project_user": "9LKjan8FuqZ4",
    "description_feedback": "testing requestor data",
    "flow_status": "sent",
    "id": "58gUiEIQVZrC",
    "ids": "58gUiEIQVZrC",
    "report_to": {
        "id": "0dagVqdTStcB",
        "name": "Supervisor - PT Aviasi Pariwisata Indonesia - Subery Supervisor"
    },
    "subject_title": "testing requestor data",
    "updated_at": 1784892122944,
    "updated_by": 0,
    "updated_by_project_user": "9LKjan8FuqZ4"
}

var flow = req && req._native_approval_flow ? req._native_approval_flow : null;
var requestor = flow && flow.requested_person ? flow.requested_person : {};

var nameRequestor = requestor.name || "";
var emailRequestor = requestor.email || "";
var userIdRequestor = requestor.user_id || "";

console.log({
    nameRequestor: nameRequestor,
    emailRequestor: emailRequestor,
    userIdRequestor: userIdRequestor
});
