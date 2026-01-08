// var payload = {
//     "type": "Lexus Reach", // Qontak
//     "environment": "PRODUCTION", // DEVELOPMENT
//     "payload": {}, // request data
//     "dataAPI": {} // api data
// };


// ticket_qontak_id -> IS
// environment -> IS
// status -> IS
// deal_name -> LIKE
// response_message -> LIKE

var payload = {
    "type": "Qontak",
    "environment": "DEVELOPMENT",
    "payload": {
        "endpoint": "/deals/76543462",
        "method": "PUT",
        "payload": {
            "additional_fields": [
                {
                    "id": 17913386,
                    "name": "vin",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17913388,
                    "name": "cc_phone_number",
                    "value": " ",
                    "value_name": " "
                },
                {
                    "id": 17913573,
                    "name": "vehicle_condition",
                    "value": ""
                },
                {
                    "id": 17913586,
                    "name": "cc_full_name",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17913587,
                    "name": "cc_email",
                    "value": " ",
                    "value_name": " "
                },
                {
                    "id": 17913588,
                    "name": "cc_subscription_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17913674,
                    "name": "timestamp",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17913687,
                    "name": "gps",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17913688,
                    "name": "dealer_code",
                    "value": ""
                },
                {
                    "id": 17913786,
                    "name": "has_customer_been_responded_to",
                    "value": ""
                },
                {
                    "id": 17913787,
                    "name": "is_booking_service_for_psm",
                    "value": ""
                },
                {
                    "id": 17913788,
                    "name": "is_service_completed",
                    "value": ""
                },
                {
                    "id": 17946872,
                    "name": "ldms_customer_id",
                    "value": "25-TC-000006",
                    "value_name": "25-TC-000006"
                },
                {
                    "id": 17947013,
                    "name": "plate_no",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17947068,
                    "name": "description",
                    "value": "test description",
                    "value_name": "test description"
                },
                {
                    "id": 17947069,
                    "name": "interface_ticket_qontak",
                    "value": "5879091",
                    "value_name": "True"
                },
                {
                    "id": 17947070,
                    "name": "location",
                    "value": ""
                },
                {
                    "id": 17947071,
                    "name": "subject_type",
                    "value": "5879101",
                    "value_name": "After Sales"
                },
                {
                    "id": 17947072,
                    "name": "nama",
                    "value": "yuniar anis",
                    "value_name": "yuniar anis"
                },
                {
                    "id": 17947073,
                    "name": "customer_public_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17947074,
                    "name": "temporary_customer_id",
                    "value": "25-TC-000006",
                    "value_name": "25-TC-000006"
                },
                {
                    "id": 17952623,
                    "name": "schedule_confirmed",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17952722,
                    "name": "ldms_wo_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17952723,
                    "name": "ldms_reservation_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17952724,
                    "name": "jam_service",
                    "value": ""
                },
                {
                    "id": 17954499,
                    "name": "variant",
                    "value": "5880871",
                    "value_name": "LFast Technical"
                },
                {
                    "id": 17954500,
                    "name": "ldms_vehicle_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17955907,
                    "name": "remarks",
                    "value": "Concierge - LFast Technical",
                    "value_name": "Concierge - LFast Technical"
                },
                {
                    "id": 17955908,
                    "name": "lexus_reach_phone_number",
                    "value": " ",
                    "value_name": " "
                },
                {
                    "id": 17960492,
                    "name": "phone_number",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 17960493,
                    "name": "cc_additional_information",
                    "value": "test description",
                    "value_name": "test description"
                },
                {
                    "id": 17960495,
                    "name": "call_center_telematics_url",
                    "value": "https://lexus-telematics-cc.toyota.astra.co.id/ticket/ticket/BasicInfo?id=76543462",
                    "value_name": "https://lexus-telematics-cc.toyota.astra.co.id/ticket/ticket/BasicInfo?id=76543462"
                },
                {
                    "id": 18002579,
                    "name": "dealer_booking_service_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18002580,
                    "name": "url_l_reach",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18002581,
                    "name": "schedule",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18002582,
                    "name": "food_beverages",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18002681,
                    "name": "dealer_name",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18002973,
                    "name": "service_type",
                    "value": ""
                },
                {
                    "id": 18043591,
                    "name": "inquiry",
                    "value": ""
                },
                {
                    "id": 18043592,
                    "name": "destination",
                    "value": ""
                },
                {
                    "id": 18043593,
                    "name": "domicile",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18043788,
                    "name": "service_date",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044080,
                    "name": "ldms_cust_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044178,
                    "name": "service_type",
                    "value": ""
                },
                {
                    "id": 18044179,
                    "name": "complaint_type__sales",
                    "value": ""
                },
                {
                    "id": 18044180,
                    "name": "category",
                    "value": ""
                },
                {
                    "id": 18044181,
                    "name": "category_complaint",
                    "value": ""
                },
                {
                    "id": 18044182,
                    "name": "sub_category",
                    "value": ""
                },
                {
                    "id": 18044183,
                    "name": "customer_source",
                    "value": ""
                },
                {
                    "id": 18044184,
                    "name": "channel",
                    "value": ""
                },
                {
                    "id": 18044185,
                    "name": "urgency_level",
                    "value": ""
                },
                {
                    "id": 18044186,
                    "name": "concierge_key",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044187,
                    "name": "interaction_type",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044188,
                    "name": "status_dealer_service",
                    "value": ""
                },
                {
                    "id": 18044189,
                    "name": "status_lmcs",
                    "value": ""
                },
                {
                    "id": 18044288,
                    "name": "message",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044289,
                    "name": "l_reach_location",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044290,
                    "name": "coordinate",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044291,
                    "name": "url_l_reach",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044292,
                    "name": "dealer_booking_service_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044293,
                    "name": "lmcs_id",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044294,
                    "name": "dealer_req_key",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044295,
                    "name": "dealer_name",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044296,
                    "name": "service_type_l_reach",
                    "value": "",
                    "value_name": ""
                },
                {
                    "id": 18044297,
                    "name": "status_ticket_qontak",
                    "value": ""
                },
                {
                    "id": 18044298,
                    "name": "is_from_lexus_reach",
                    "value": ""
                },
                {
                    "id": 18044299,
                    "name": "is_telematics_emergency",
                    "value": ""
                },
                {
                    "id": 18044300,
                    "name": "is_telematics_renewal",
                    "value": ""
                },
                {
                    "id": 18044301,
                    "name": "is_telematics_disconnected",
                    "value": ""
                },
                {
                    "id": 18044302,
                    "name": "status",
                    "value": ""
                },
                {
                    "id": 18044497,
                    "name": "warning_info",
                    "value": "",
                    "value_name": ""
                }
            ],
            "companyId": "ed3ca1a6-158f-4050-a9de-d06c66c7105e",
            "created_at": "2026-01-06 09:34:13 +0700",
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
            "id": 76543462,
            "name": "25-TC-000006 - yuniar anis",
            "product_association_ids": [],
            "product_association_name": [],
            "product_association_price": [],
            "product_association_quantity": [],
            "product_association_total_price": [],
            "size": "0.0",
            "slug": "5499ec8b-0388-4bce-abc8-ac1e822786fe",
            "start_date": "2026-01-06 09:34:12 +0700",
            "updated_at": "2026-01-06 09:50:56 +0700"
        },
        "ticket_qontak_id": 76543462
    }, 
    "dataAPI": {
        "body": {
            "meta": {
                "developer_message": "Success",
                "error_code": null,
                "info": "https://developers.qontak.com/docs/api/response-codes#200",
                "log_id": "5646bd23-4926-40af-9106-5f8ed9d7f1a9rails5",
                "message": "Success",
                "status": 200,
                "timestamp": "2026-01-06T02:53:08.000+00:00",
                "type": "OK"
            },
            "response": {
                "additional_fields": [
                    {
                        "id": 17913386,
                        "name": "vin",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17913388,
                        "name": "cc_phone_number",
                        "value": " ",
                        "value_name": " "
                    },
                    {
                        "id": 17913573,
                        "name": "vehicle_condition",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 17913586,
                        "name": "cc_full_name",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17913587,
                        "name": "cc_email",
                        "value": " ",
                        "value_name": " "
                    },
                    {
                        "id": 17913588,
                        "name": "cc_subscription_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17913674,
                        "name": "timestamp",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17913687,
                        "name": "gps",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17913688,
                        "name": "dealer_code",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 17913786,
                        "name": "has_customer_been_responded_to",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 17913787,
                        "name": "is_booking_service_for_psm",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 17913788,
                        "name": "is_service_completed",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 17946872,
                        "name": "ldms_customer_id",
                        "value": "25-TC-000006",
                        "value_name": "25-TC-000006"
                    },
                    {
                        "id": 17947013,
                        "name": "plate_no",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17947068,
                        "name": "description",
                        "value": "test description",
                        "value_name": "test description"
                    },
                    {
                        "id": 17947069,
                        "name": "interface_ticket_qontak",
                        "value": "5879091",
                        "value_name": "True"
                    },
                    {
                        "id": 17947070,
                        "name": "location",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 17947071,
                        "name": "subject_type",
                        "value": "5879101",
                        "value_name": "After Sales"
                    },
                    {
                        "id": 17947072,
                        "name": "nama",
                        "value": "yuniar anis",
                        "value_name": "yuniar anis"
                    },
                    {
                        "id": 17947073,
                        "name": "customer_public_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17947074,
                        "name": "temporary_customer_id",
                        "value": "25-TC-000006",
                        "value_name": "25-TC-000006"
                    },
                    {
                        "id": 17952623,
                        "name": "schedule_confirmed",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17952722,
                        "name": "ldms_wo_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17952723,
                        "name": "ldms_reservation_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17952724,
                        "name": "jam_service",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 17954499,
                        "name": "variant",
                        "value": "5880871",
                        "value_name": "LFast Technical"
                    },
                    {
                        "id": 17954500,
                        "name": "ldms_vehicle_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17955907,
                        "name": "remarks",
                        "value": "Concierge - LFast Technical",
                        "value_name": "Concierge - LFast Technical"
                    },
                    {
                        "id": 17955908,
                        "name": "lexus_reach_phone_number",
                        "value": " ",
                        "value_name": " "
                    },
                    {
                        "id": 17960492,
                        "name": "phone_number",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 17960493,
                        "name": "cc_additional_information",
                        "value": "test description",
                        "value_name": "test description"
                    },
                    {
                        "id": 17960495,
                        "name": "call_center_telematics_url",
                        "value": "https://lexus-telematics-cc.toyota.astra.co.id/ticket/ticket/BasicInfo?id=76543462",
                        "value_name": "https://lexus-telematics-cc.toyota.astra.co.id/ticket/ticket/BasicInfo?id=76543462"
                    },
                    {
                        "id": 18002579,
                        "name": "dealer_booking_service_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18002580,
                        "name": "url_l_reach",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18002581,
                        "name": "schedule",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18002582,
                        "name": "food_beverages",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18002681,
                        "name": "dealer_name",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18002973,
                        "name": "service_type",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18043591,
                        "name": "inquiry",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18043592,
                        "name": "destination",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18043593,
                        "name": "domicile",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18043788,
                        "name": "service_date",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044080,
                        "name": "ldms_cust_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044178,
                        "name": "service_type",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044179,
                        "name": "complaint_type__sales",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044180,
                        "name": "category",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044181,
                        "name": "category_complaint",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044182,
                        "name": "sub_category",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044183,
                        "name": "customer_source",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044184,
                        "name": "channel",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044185,
                        "name": "urgency_level",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044186,
                        "name": "concierge_key",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044187,
                        "name": "interaction_type",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044188,
                        "name": "status_dealer_service",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044189,
                        "name": "status_lmcs",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044288,
                        "name": "message",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044289,
                        "name": "l_reach_location",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044290,
                        "name": "coordinate",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044291,
                        "name": "url_l_reach",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044292,
                        "name": "dealer_booking_service_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044293,
                        "name": "lmcs_id",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044294,
                        "name": "dealer_req_key",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044295,
                        "name": "dealer_name",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044296,
                        "name": "service_type_l_reach",
                        "value": "",
                        "value_name": ""
                    },
                    {
                        "id": 18044297,
                        "name": "status_ticket_qontak",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044298,
                        "name": "is_from_lexus_reach",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044299,
                        "name": "is_telematics_emergency",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044300,
                        "name": "is_telematics_renewal",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044301,
                        "name": "is_telematics_disconnected",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044302,
                        "name": "status",
                        "value": "",
                        "value_name": null
                    },
                    {
                        "id": 18044497,
                        "name": "warning_info",
                        "value": "",
                        "value_name": ""
                    }
                ],
                "channel_integration_room_id": null,
                "closed_date": null,
                "created_at": "2026-01-06T09:34:13.412+07:00",
                "creator_id": 272561,
                "creator_name": "Andy Lesmana",
                "crm_company_id": null,
                "crm_company_name": null,
                "crm_deal_status": null,
                "crm_lead_ids": [],
                "crm_lead_name": [],
                "crm_lost_reason_id": null,
                "crm_lost_reason_name": null,
                "crm_pipeline_id": 216882,
                "crm_pipeline_name": "Concierge - LFast Technical",
                "crm_priority_id": null,
                "crm_priority_name": null,
                "crm_source_id": null,
                "crm_source_name": null,
                "crm_stage_id": 1301824,
                "crm_stage_name": "Completed",
                "currency": "IDR",
                "expired_date": null,
                "id": 76543462,
                "idempotency_key": "6a23e453-76fd-444f-8f32-0eb5716786e1",
                "name": "25-TC-000006 - yuniar anis",
                "product_association_ids": [],
                "product_association_name": [],
                "product_association_price": [],
                "product_association_quantity": [],
                "product_association_total_price": [],
                "size": "0.0",
                "slug": "5499ec8b-0388-4bce-abc8-ac1e822786fe",
                "start_date": "2026-01-06T09:34:12.000+07:00",
                "unique_deal_id": "460ATERGUE",
                "updated_at": "2026-01-06T09:53:08.531+07:00"
            }
        },
        "body_raw": "[123 34 109 101 116 97 34 58 123 34 115 116 97 116 117 115 34 58 50 48 48 44 34 116 121 112 101 34 58 34 79 75 34 44 34 101 114 114 111 114 95 99 111 100 101 34 58 110 117 108 108 44 34 105 110 102 111 34 58 34 104 116 116 112 115 58 47 47 100 101 118 101 108 111 112 101 114 115 46 113 111 110 116 97 107 46 99 111 109 47 100 111 99 115 47 97 112 105 47 114 101 115 112 111 110 115 101 45 99 111 100 101 115 35 50 48 48 34 44 34 100 101 118 101 108 111 112 101 114 95 109 101 115 115 97 103 101 34 58 34 83 117 99 99 101 115 115 34 44 34 109 101 115 115 97 103 101 34 58 34 83 117 99 99 101 115 115 34 44 34 116 105 109 101 115 116 97 109 112 34 58 34 50 48 50 54 45 48 49 45 48 54 84 48 50 58 53 51 58 48 56 46 48 48 48 43 48 48 58 48 48 34 44 34 108 111 103 95 105 100 34 58 34 53 54 52 54 98 100 50 51 45 52 57 50 54 45 52 48 97 102 45 57 49 48 54 45 53 102 56 101 100 57 100 55 102 49 97 57 114 97 105 108 115 53 34 125 44 34 114 101 115 112 111 110 115 101 34 58 123 34 105 100 34 58 55 54 53 52 51 52 54 50 44 34 110 97 109 101 34 58 34 50 53 45 84 67 45 48 48 48 48 48 54 32 45 32 121 117 110 105 97 114 32 97 110 105 115 34 44 34 115 108 117 103 34 58 34 53 52 57 57 101 99 56 98 45 48 51 56 56 45 52 98 99 101 45 97 98 99 56 45 97 99 49 101 56 50 50 55 56 54 102 101 34 44 34 99 114 101 97 116 101 100 95 97 116 34 58 34 50 48 50 54 45 48 49 45 48 54 84 48 57 58 51 52 58 49 51 46 52 49 50 43 48 55 58 48 48 34 44 34 117 112 100 97 116 101 100 95 97 116 34 58 34 50 48 50 54 45 48 49 45 48 54 84 48 57 58 53 51 58 48 56 46 53 51 49 43 48 55 58 48 48 34 44 34 99 117 114 114 101 110 99 121 34 58 34 73 68 82 34 44 34 115 105 122 101 34 58 34 48 46 48 34 44 34 99 108 111 115 101 100 95 100 97 116 101 34 58 110 117 108 108 44 34 99 114 101 97 116 111 114 95 105 100 34 58 50 55 50 53 54 49 44 34 99 114 101 97 116 111 114 95 110 97 109 101 34 58 34 65 110 100 121 32 76 101 115 109 97 110 97 34 44 34 99 114 109 95 115 111 117 114 99 101 95 105 100 34 58 110 117 108 108 44 34 99 114 109 95 115 111 117 114 99 101 95 110 97 109 101 34 58 110 117 108 108 44 34 99 114 109 95 108 111 115 116 95 114 101 97 115 111 110 95 105 100 34 58 110 117 108 108 44 34 99 114 109 95 108 111 115 116 95 114 101 97 115 111 110 95 110 97 109 101 34 58 110 117 108 108 44 34 99 114 109 95 112 105 112 101 108 105 110 101 95 105 100 34 58 50 49 54 56 56 50 44 34 99 114 109 95 112 105 112 101 108 105 110 101 95 110 97 109 101 34 58 34 67 111 110 99 105 101 114 103 101 32 45 32 76 70 97 115 116 32 84 101 99 104 110 105 99 97 108 34 44 34 99 114 109 95 115 116 97 103 101 95 105 100 34 58 49 51 48 49 56 50 52 44 34 99 114 109 95 115 116 97 103 101 95 110 97 109 101 34 58 34 67 111 109 112 108 101 116 101 100 34 44 34 115 116 97 114 116 95 100 97 116 101 34 58 34 50 48 50 54 45 48 49 45 48 54 84 48 57 58 51 52 58 49 50 46 48 48 48 43 48 55 58 48 48 34 44 34 101 120 112 105 114 101 100 95 100 97 116 101 34 58 110 117 108 108 44 34 99 114 109 95 112 114 105 111 114 105 116 121 95 105 100 34 58 110 117 108 108 44 34 99 114 109 95 112 114 105 111 114 105 116 121 95 110 97 109 101 34 58 110 117 108 108 44 34 99 114 109 95 99 111 109 112 97 110 121 95 105 100 34 58 110 117 108 108 44 34 99 114 109 95 99 111 109 112 97 110 121 95 110 97 109 101 34 58 110 117 108 108 44 34 99 114 109 95 108 101 97 100 95 105 100 115 34 58 91 93 44 34 99 114 109 95 108 101 97 100 95 110 97 109 101 34 58 91 93 44 34 99 114 109 95 100 101 97 108 95 115 116 97 116 117 115 34 58 110 117 108 108 44 34 112 114 111 100 117 99 116 95 97 115 115 111 99 105 97 116 105 111 110 95 105 100 115 34 58 91 93 44 34 112 114 111 100 117 99 116 95 97 115 115 111 99 105 97 116 105 111 110 95 110 97 109 101 34 58 91 93 44 34 112 114 111 100 117 99 116 95 97 115 115 111 99 105 97 116 105 111 110 95 113 117 97 110 116 105 116 121 34 58 91 93 44 34 112 114 111 100 117 99 116 95 97 115 115 111 99 105 97 116 105 111 110 95 112 114 105 99 101 34 58 91 93 44 34 112 114 111 100 117 99 116 95 97 115 115 111 99 105 97 116 105 111 110 95 116 111 116 97 108 95 112 114 105 99 101 34 58 91 93 44 34 117 110 105 113 117 101 95 100 101 97 108 95 105 100 34 58 34 52 54 48 65 84 69 82 71 85 69 34 44 34 105 100 101 109 112 111 116 101 110 99 121 95 107 101 121 34 58 34 54 97 50 51 101 52 53 51 45 55 54 102 100 45 52 52 52 102 45 56 102 51 50 45 48 101 98 53 55 49 54 55 56 54 101 49 34 44 34 99 104 97 110 110 101 108 95 105 110 116 101 103 114 97 116 105 111 110 95 114 111 111 109 95 105 100 34 58 110 117 108 108 44 34 97 100 100 105 116 105 111 110 97 108 95 102 105 101 108 100 115 34 58 91 123 34 105 100 34 58 49 55 57 49 51 51 56 54 44 34 110 97 109 101 34 58 34 118 105 110 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 49 51 51 56 56 44 34 110 97 109 101 34 58 34 99 99 95 112 104 111 110 101 95 110 117 109 98 101 114 34 44 34 118 97 108 117 101 34 58 34 32 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 32 34 125 44 123 34 105 100 34 58 49 55 57 49 51 53 55 51 44 34 110 97 109 101 34 58 34 118 101 104 105 99 108 101 95 99 111 110 100 105 116 105 111 110 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 55 57 49 51 53 56 54 44 34 110 97 109 101 34 58 34 99 99 95 102 117 108 108 95 110 97 109 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 49 51 53 56 55 44 34 110 97 109 101 34 58 34 99 99 95 101 109 97 105 108 34 44 34 118 97 108 117 101 34 58 34 32 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 32 34 125 44 123 34 105 100 34 58 49 55 57 49 51 53 56 56 44 34 110 97 109 101 34 58 34 99 99 95 115 117 98 115 99 114 105 112 116 105 111 110 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 49 51 54 55 52 44 34 110 97 109 101 34 58 34 116 105 109 101 115 116 97 109 112 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 49 51 54 56 55 44 34 110 97 109 101 34 58 34 103 112 115 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 49 51 54 56 56 44 34 110 97 109 101 34 58 34 100 101 97 108 101 114 95 99 111 100 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 55 57 49 51 55 56 54 44 34 110 97 109 101 34 58 34 104 97 115 95 99 117 115 116 111 109 101 114 95 98 101 101 110 95 114 101 115 112 111 110 100 101 100 95 116 111 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 55 57 49 51 55 56 55 44 34 110 97 109 101 34 58 34 105 115 95 98 111 111 107 105 110 103 95 115 101 114 118 105 99 101 95 102 111 114 95 112 115 109 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 55 57 49 51 55 56 56 44 34 110 97 109 101 34 58 34 105 115 95 115 101 114 118 105 99 101 95 99 111 109 112 108 101 116 101 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 55 57 52 54 56 55 50 44 34 110 97 109 101 34 58 34 108 100 109 115 95 99 117 115 116 111 109 101 114 95 105 100 34 44 34 118 97 108 117 101 34 58 34 50 53 45 84 67 45 48 48 48 48 48 54 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 50 53 45 84 67 45 48 48 48 48 48 54 34 125 44 123 34 105 100 34 58 49 55 57 52 55 48 49 51 44 34 110 97 109 101 34 58 34 112 108 97 116 101 95 110 111 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 52 55 48 54 56 44 34 110 97 109 101 34 58 34 100 101 115 99 114 105 112 116 105 111 110 34 44 34 118 97 108 117 101 34 58 34 116 101 115 116 32 100 101 115 99 114 105 112 116 105 111 110 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 116 101 115 116 32 100 101 115 99 114 105 112 116 105 111 110 34 125 44 123 34 105 100 34 58 49 55 57 52 55 48 54 57 44 34 110 97 109 101 34 58 34 105 110 116 101 114 102 97 99 101 95 116 105 99 107 101 116 95 113 111 110 116 97 107 34 44 34 118 97 108 117 101 34 58 34 53 56 55 57 48 57 49 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 84 114 117 101 34 125 44 123 34 105 100 34 58 49 55 57 52 55 48 55 48 44 34 110 97 109 101 34 58 34 108 111 99 97 116 105 111 110 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 55 57 52 55 48 55 49 44 34 110 97 109 101 34 58 34 115 117 98 106 101 99 116 95 116 121 112 101 34 44 34 118 97 108 117 101 34 58 34 53 56 55 57 49 48 49 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 65 102 116 101 114 32 83 97 108 101 115 34 125 44 123 34 105 100 34 58 49 55 57 52 55 48 55 50 44 34 110 97 109 101 34 58 34 110 97 109 97 34 44 34 118 97 108 117 101 34 58 34 121 117 110 105 97 114 32 97 110 105 115 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 121 117 110 105 97 114 32 97 110 105 115 34 125 44 123 34 105 100 34 58 49 55 57 52 55 48 55 51 44 34 110 97 109 101 34 58 34 99 117 115 116 111 109 101 114 95 112 117 98 108 105 99 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 52 55 48 55 52 44 34 110 97 109 101 34 58 34 116 101 109 112 111 114 97 114 121 95 99 117 115 116 111 109 101 114 95 105 100 34 44 34 118 97 108 117 101 34 58 34 50 53 45 84 67 45 48 48 48 48 48 54 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 50 53 45 84 67 45 48 48 48 48 48 54 34 125 44 123 34 105 100 34 58 49 55 57 53 50 54 50 51 44 34 110 97 109 101 34 58 34 115 99 104 101 100 117 108 101 95 99 111 110 102 105 114 109 101 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 53 50 55 50 50 44 34 110 97 109 101 34 58 34 108 100 109 115 95 119 111 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 53 50 55 50 51 44 34 110 97 109 101 34 58 34 108 100 109 115 95 114 101 115 101 114 118 97 116 105 111 110 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 53 50 55 50 52 44 34 110 97 109 101 34 58 34 106 97 109 95 115 101 114 118 105 99 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 55 57 53 52 52 57 57 44 34 110 97 109 101 34 58 34 118 97 114 105 97 110 116 34 44 34 118 97 108 117 101 34 58 34 53 56 56 48 56 55 49 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 76 70 97 115 116 32 84 101 99 104 110 105 99 97 108 34 125 44 123 34 105 100 34 58 49 55 57 53 52 53 48 48 44 34 110 97 109 101 34 58 34 108 100 109 115 95 118 101 104 105 99 108 101 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 53 53 57 48 55 44 34 110 97 109 101 34 58 34 114 101 109 97 114 107 115 34 44 34 118 97 108 117 101 34 58 34 67 111 110 99 105 101 114 103 101 32 45 32 76 70 97 115 116 32 84 101 99 104 110 105 99 97 108 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 67 111 110 99 105 101 114 103 101 32 45 32 76 70 97 115 116 32 84 101 99 104 110 105 99 97 108 34 125 44 123 34 105 100 34 58 49 55 57 53 53 57 48 56 44 34 110 97 109 101 34 58 34 108 101 120 117 115 95 114 101 97 99 104 95 112 104 111 110 101 95 110 117 109 98 101 114 34 44 34 118 97 108 117 101 34 58 34 32 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 32 34 125 44 123 34 105 100 34 58 49 55 57 54 48 52 57 50 44 34 110 97 109 101 34 58 34 112 104 111 110 101 95 110 117 109 98 101 114 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 55 57 54 48 52 57 51 44 34 110 97 109 101 34 58 34 99 99 95 97 100 100 105 116 105 111 110 97 108 95 105 110 102 111 114 109 97 116 105 111 110 34 44 34 118 97 108 117 101 34 58 34 116 101 115 116 32 100 101 115 99 114 105 112 116 105 111 110 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 116 101 115 116 32 100 101 115 99 114 105 112 116 105 111 110 34 125 44 123 34 105 100 34 58 49 55 57 54 48 52 57 53 44 34 110 97 109 101 34 58 34 99 97 108 108 95 99 101 110 116 101 114 95 116 101 108 101 109 97 116 105 99 115 95 117 114 108 34 44 34 118 97 108 117 101 34 58 34 104 116 116 112 115 58 47 47 108 101 120 117 115 45 116 101 108 101 109 97 116 105 99 115 45 99 99 46 116 111 121 111 116 97 46 97 115 116 114 97 46 99 111 46 105 100 47 116 105 99 107 101 116 47 116 105 99 107 101 116 47 66 97 115 105 99 73 110 102 111 63 105 100 61 55 54 53 52 51 52 54 50 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 104 116 116 112 115 58 47 47 108 101 120 117 115 45 116 101 108 101 109 97 116 105 99 115 45 99 99 46 116 111 121 111 116 97 46 97 115 116 114 97 46 99 111 46 105 100 47 116 105 99 107 101 116 47 116 105 99 107 101 116 47 66 97 115 105 99 73 110 102 111 63 105 100 61 55 54 53 52 51 52 54 50 34 125 44 123 34 105 100 34 58 49 56 48 48 50 53 55 57 44 34 110 97 109 101 34 58 34 100 101 97 108 101 114 95 98 111 111 107 105 110 103 95 115 101 114 118 105 99 101 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 48 50 53 56 48 44 34 110 97 109 101 34 58 34 117 114 108 95 108 95 114 101 97 99 104 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 48 50 53 56 49 44 34 110 97 109 101 34 58 34 115 99 104 101 100 117 108 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 48 50 53 56 50 44 34 110 97 109 101 34 58 34 102 111 111 100 95 98 101 118 101 114 97 103 101 115 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 48 50 54 56 49 44 34 110 97 109 101 34 58 34 100 101 97 108 101 114 95 110 97 109 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 48 50 57 55 51 44 34 110 97 109 101 34 58 34 115 101 114 118 105 99 101 95 116 121 112 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 51 53 57 49 44 34 110 97 109 101 34 58 34 105 110 113 117 105 114 121 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 51 53 57 50 44 34 110 97 109 101 34 58 34 100 101 115 116 105 110 97 116 105 111 110 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 51 53 57 51 44 34 110 97 109 101 34 58 34 100 111 109 105 99 105 108 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 51 55 56 56 44 34 110 97 109 101 34 58 34 115 101 114 118 105 99 101 95 100 97 116 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 48 56 48 44 34 110 97 109 101 34 58 34 108 100 109 115 95 99 117 115 116 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 49 55 56 44 34 110 97 109 101 34 58 34 115 101 114 118 105 99 101 95 116 121 112 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 55 57 44 34 110 97 109 101 34 58 34 99 111 109 112 108 97 105 110 116 95 116 121 112 101 95 95 115 97 108 101 115 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 48 44 34 110 97 109 101 34 58 34 99 97 116 101 103 111 114 121 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 49 44 34 110 97 109 101 34 58 34 99 97 116 101 103 111 114 121 95 99 111 109 112 108 97 105 110 116 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 50 44 34 110 97 109 101 34 58 34 115 117 98 95 99 97 116 101 103 111 114 121 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 51 44 34 110 97 109 101 34 58 34 99 117 115 116 111 109 101 114 95 115 111 117 114 99 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 52 44 34 110 97 109 101 34 58 34 99 104 97 110 110 101 108 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 53 44 34 110 97 109 101 34 58 34 117 114 103 101 110 99 121 95 108 101 118 101 108 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 54 44 34 110 97 109 101 34 58 34 99 111 110 99 105 101 114 103 101 95 107 101 121 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 55 44 34 110 97 109 101 34 58 34 105 110 116 101 114 97 99 116 105 111 110 95 116 121 112 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 56 44 34 110 97 109 101 34 58 34 115 116 97 116 117 115 95 100 101 97 108 101 114 95 115 101 114 118 105 99 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 49 56 57 44 34 110 97 109 101 34 58 34 115 116 97 116 117 115 95 108 109 99 115 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 50 56 56 44 34 110 97 109 101 34 58 34 109 101 115 115 97 103 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 56 57 44 34 110 97 109 101 34 58 34 108 95 114 101 97 99 104 95 108 111 99 97 116 105 111 110 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 48 44 34 110 97 109 101 34 58 34 99 111 111 114 100 105 110 97 116 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 49 44 34 110 97 109 101 34 58 34 117 114 108 95 108 95 114 101 97 99 104 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 50 44 34 110 97 109 101 34 58 34 100 101 97 108 101 114 95 98 111 111 107 105 110 103 95 115 101 114 118 105 99 101 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 51 44 34 110 97 109 101 34 58 34 108 109 99 115 95 105 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 52 44 34 110 97 109 101 34 58 34 100 101 97 108 101 114 95 114 101 113 95 107 101 121 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 53 44 34 110 97 109 101 34 58 34 100 101 97 108 101 114 95 110 97 109 101 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 54 44 34 110 97 109 101 34 58 34 115 101 114 118 105 99 101 95 116 121 112 101 95 108 95 114 101 97 99 104 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 55 44 34 110 97 109 101 34 58 34 115 116 97 116 117 115 95 116 105 99 107 101 116 95 113 111 110 116 97 107 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 56 44 34 110 97 109 101 34 58 34 105 115 95 102 114 111 109 95 108 101 120 117 115 95 114 101 97 99 104 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 50 57 57 44 34 110 97 109 101 34 58 34 105 115 95 116 101 108 101 109 97 116 105 99 115 95 101 109 101 114 103 101 110 99 121 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 51 48 48 44 34 110 97 109 101 34 58 34 105 115 95 116 101 108 101 109 97 116 105 99 115 95 114 101 110 101 119 97 108 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 51 48 49 44 34 110 97 109 101 34 58 34 105 115 95 116 101 108 101 109 97 116 105 99 115 95 100 105 115 99 111 110 110 101 99 116 101 100 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 51 48 50 44 34 110 97 109 101 34 58 34 115 116 97 116 117 115 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 110 117 108 108 125 44 123 34 105 100 34 58 49 56 48 52 52 52 57 55 44 34 110 97 109 101 34 58 34 119 97 114 110 105 110 103 95 105 110 102 111 34 44 34 118 97 108 117 101 34 58 34 34 44 34 118 97 108 117 101 95 110 97 109 101 34 58 34 34 125 93 125 125]",
        "header": {
            "Cache-Control": [
                "max-age=0, private, must-revalidate"
            ],
            "Content-Type": [
                "application/json"
            ],
            "Date": [
                "Tue, 06 Jan 2026 02:53:08 GMT"
            ],
            "Etag": [
                "W/\"9057544e07f103c046bdb15b2782bc10\""
            ],
            "Set-Cookie": [
                "visid_incap_2992081=+9fbmZy6RQ2cweJIMvHrIhR5XGkAAAAAQUIPAAAAAACqwd80z8jznqD4LeHPsuDz; expires=Tue, 05 Jan 2027 15:45:39 GMT; HttpOnly; path=/; Domain=.qontak.com; Secure; SameSite=None",
                "nlbi_2992081=x48FXq2RoCPNI89shVPKHAAAAAAtqun9n1eeFpzgWsx4fZ1Q; HttpOnly; path=/; Domain=.qontak.com; Secure; SameSite=None",
                "incap_ses_1757_2992081=4wRYW4m642XD4KiJpR5iGBR5XGkAAAAA8N3z3Olvv/VJBcKMIv4Ygw==; path=/; Domain=.qontak.com; Secure; SameSite=None"
            ],
            "Strict-Transport-Security": [
                "max-age=31536000; includeSubDomains"
            ],
            "Vary": [
                "Accept-Encoding, Origin"
            ],
            "X-Cdn": [
                "Imperva"
            ],
            "X-Iinfo": [
                "16-300361548-300361552 NNNY CT(2 3 0) RT(1767667988356 14) q(0 0 0 -1) r(4 4) U24"
            ],
            "X-Request-Id": [
                "05335c921f881039c4550ad03c3b65cd"
            ],
            "X-Runtime": [
                "0.420392"
            ]
        },
        "status_code": 200
    }
};