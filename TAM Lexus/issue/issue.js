var req = {
    "action": {
        "background": "#9C9C9C",
        "font_color": "#FFFFFF",
        "name": "On Progress"
    },
    "dataAPI": {
        "body": {
            "meta": {
                "developer_message": "Couldn't find record with that ID",
                "error_code": null,
                "info": "https://developers.qontak.com/docs/api/response-codes#404",
                "log_id": "aed212c5-e479-4fef-9e02-f5efb5fcecf7",
                "message": "Not Found",
                "status": 404,
                "timestamp": "2026-01-13T04:32:32.000+00:00",
                "type": "Not Found"
            }
        },
        "status_code": 404
    },
    "environment": "DEVELOPMENT",
    "payload": {
        "endpoint": "/deals/76862461",
        "method": "PUT",
        "payload": {
            "companyId": "ed3ca1a6-158f-4050-a9de-d06c66c7105e",
            "created_at": "2026-01-13 06:24:26 +0700",
            "creator_id": 272561,
            "creator_name": "Andy Lesmana",
            "crm_lead_ids": [],
            "crm_lead_name": [],
            "crm_pipeline_id": 216882,
            "crm_pipeline_name": "Concierge - LFast Technical",
            "crm_stage_id": 1301824,
            "crm_stage_name": "Completed",
            "currency": "IDR",
            "eventType": "qontak.crm.deal.update",
            "external_company_id": 207873,
            "id": 76862461,
            "name": "25-TC-000006 - yuniaar",
            "product_association_ids": [],
            "product_association_name": [],
            "product_association_price": [],
            "product_association_quantity": [],
            "product_association_total_price": [],
            "size": "0.0",
            "slug": "5a012e93-9bce-421f-a634-bde0b077ab08",
            "start_date": "2026-01-13 06:24:25 +0700",
            "updated_at": "2026-01-13 11:32:25 +0700"
        },
        "ticket_qontak_id": 76862461
    },
    "type": "Qontak"
};


var ticket_qontak_id = req.payload.ticket_qontak_id;
var environment = req.environment;
var deal_name = req.payload.payload.name;
var pipeline_name = req.payload.payload.crm_pipeline_name;
var stage_name = req.payload.payload.crm_stage_name;
var action = req.action;

// Prep Monitoring
var status = "On Progress";
var response_message = "--";
var request = req.payload;

if (request.method === "PUT") {
    if (typeof req.dataAPI !== "object") {
        response_message = "Gagal Hit API Qontak";
        status = "Failed";
    } else if (req.dataAPI.body.meta.status === 200) {
        response_message = req.dataAPI.body.meta.message;
        status = "Success";
    } else {
        response_message = req.dataAPI.body.meta.message;
        status = "Failed";
    }
}

console.log({
    action: action,
    environment: environment,
    ticket_qontak_id: ticket_qontak_id,
    deal_name: deal_name,
    pipeline_name: pipeline_name,
    stage_name: stage_name,
    status: status,
    response_message: response_message
});