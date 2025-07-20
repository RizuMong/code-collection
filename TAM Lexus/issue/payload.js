var mapping_payload = {
    "subject_type": "SubjectType",
    "category": "Category",
    "category_complaint": "CategoryComplaint",
    "sub_category": "SubCategory",
    "service_type": "ServiceType",
    "variant": "Variant",
    "channel": "Channel",
    "customer_source": "CustomerSource",
    "location": "Location",
    "destination": "Destination",
    "urgency_level": "UrgencyLevel",
    "customer_public_id": "CustomerSingleID",
    // "status_ticket_qontak": "StatusTicketQontak",
    "interaction_type": "InteractionType",
    "interface_ticket_qontak": "InterfaceTicketQontak",
    "remarks": "Remarks",
    "status_concierge": "StatusConcierge",
    "vin":"VIN"
    // "pic_qontak": "PICQontak",
};

var req = {
        "body": {
            "additional_fields": [
                {
                    "id": 14981716,
                    "name": "inquiry",
                    "value": "4372060",
                    "value_name": "L-FAST"
                },
                {
                    "id": 13473277,
                    "name": "location",
                    "value": "3800169",
                    "value_name": "West Jakarta"
                },
                {
                    "id": 13473278,
                    "name": "destination",
                    "value": "3800174",
                    "value_name": "Lexus Pluit"
                },
                {
                    "id": 15164142,
                    "name": "domicile",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14536533,
                    "name": "remarks",
                    "value": "testing ",
                    "value_name": "testing "
                },
                {
                    "id": 14171324,
                    "name": "nama",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562284,
                    "name": "customer_public_id",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13806663,
                    "name": "temporary_customer_id",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13560722,
                    "name": "vin",
                    "value": "JTHAABAE0P1000123",
                    "value_name": "JTHAABAE0P1000123"
                },
                {
                    "id": 14181086,
                    "name": "plate_no",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14171238,
                    "name": "service_date",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14168845,
                    "name": "ldms_wo_id",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562529,
                    "name": "ldms_customer_id",
                    "value": "25-CP-001037",
                    "value_name": "25-CP-001037"
                },
                {
                    "id": 14589501,
                    "name": "ldms_reservation_id",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14439961,
                    "name": "ldms_vehicle_id",
                    "value": "JTHAABAE0P1000123",
                    "value_name": "JTHAABAE0P1000123"
                },
                {
                    "id": 13561419,
                    "name": "variant",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14181431,
                    "name": "description",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14171237,
                    "name": "service_type",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13560634,
                    "name": "phone_number",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13473449,
                    "name": "complaint_type__sales",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13560808,
                    "name": "subject_type",
                    "value": "3837161",
                    "value_name": "After Sales"
                },
                {
                    "id": 13561075,
                    "name": "category",
                    "value": "3837207",
                    "value_name": "Request"
                },
                {
                    "id": 13561331,
                    "name": "category_complaint",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13561332,
                    "name": "sub_category",
                    "value": "3837362",
                    "value_name": "Technical - Accident"
                },
                {
                    "id": 13561422,
                    "name": "customer_source",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562019,
                    "name": "channel",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562105,
                    "name": "urgency_level",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562462,
                    "name": "concierge_key",
                    "value": "CRG/20250610/0278",
                    "value_name": "CRG/20250610/0278"
                },
                {
                    "id": 13562193,
                    "name": "interaction_type",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562194,
                    "name": "interface_ticket_qontak",
                    "value": "3837580",
                    "value_name": "True"
                },
                {
                    "id": 13562300,
                    "name": "status_dealer_service",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562374,
                    "name": "status_lmcs",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562375,
                    "name": "schedule",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14620818,
                    "name": "schedule_confirmed",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14709237,
                    "name": "jam_service",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562463,
                    "name": "message",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562464,
                    "name": "l_reach_location",
                    "value": "ldKzp 15tawnZh1 K5. Zu dbV9qBJ uTmAdbd NpXklO6 ",
                    "value_name": "ldKzp 15tawnZh1 K5. Zu dbV9qBJ uTmAdbd NpXklO6 "
                },
                {
                    "id": 13562479,
                    "name": "coordinate",
                    "value": "[-6.201831262476702,106.84603042920178]",
                    "value_name": "[-6.201831262476702,106.84603042920178]"
                },
                {
                    "id": 13562723,
                    "name": "url_l_reach",
                    "value": "https://cms-lexusreach.toyota.astra.co.id/ServiceConciergeRequest/278",
                    "value_name": "https://cms-lexusreach.toyota.astra.co.id/ServiceConciergeRequest/278"
                },
                {
                    "id": 13562724,
                    "name": "dealer_booking_service_id",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562725,
                    "name": "lmcs_id",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13616060,
                    "name": "dealer_req_key",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13616061,
                    "name": "dealer_name",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13616062,
                    "name": "food_beverages",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13669344,
                    "name": "service_type_l_reach",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14184596,
                    "name": "mtoyota_phone_number",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14184597,
                    "name": "cc_phone_number",
                    "value": "QF6LGKPF0WrH",
                    "value_name": "QF6LGKPF0WrH"
                },
                {
                    "id": 14184598,
                    "name": "cc_subscription_id",
                    "value": "250400075RMjM=",
                    "value_name": "250400075RMjM="
                },
                {
                    "id": 14428309,
                    "name": "dealer_code",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14436972,
                    "name": "status_ticket_qontak",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14557520,
                    "name": "call_center_telematics_url",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14451134,
                    "name": "is_from_lexus_reach",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14451135,
                    "name": "is_telematics_emergency",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14451232,
                    "name": "is_telematics_renewal",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14451329,
                    "name": "is_telematics_disconnected",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14646435,
                    "name": "status",
                    "value": null,
                    "value_name": null
                }
            ],
            "channel_integration_room_id": null,
            "closed_date": null,
            "created_at": "2025-06-10T10:34:23.925+07:00",
            "creator_id": 185776,
            "creator_name": "Rizky Pambudi -",
            "crm_company_id": null,
            "crm_company_name": null,
            "crm_lead_ids": [],
            "crm_lead_name": [],
            "crm_lost_reason_id": null,
            "crm_lost_reason_name": null,
            "crm_pipeline_id": 168201,
            "crm_pipeline_name": "Concierge - General & LFast Non Technical",
            "crm_priority_id": null,
            "crm_priority_name": null,
            "crm_source_id": null,
            "crm_source_name": null,
            "crm_stage_id": 1119206,
            "crm_stage_name": "Move to L-Fast Technical",
            "currency": "IDR",
            "expired_date": null,
            "external_company_id": 836993,
            "id": 66528065,
            "name": "Elisabeth Pesta",
            "product_association_ids": [],
            "product_association_name": [],
            "product_association_price": [],
            "product_association_quantity": [],
            "product_association_total_price": [],
            "size": null,
            "slug": "417da46e-0ab1-491b-b1db-65b52fc60f62",
            "start_date": null,
            "updated_at": "2025-06-10T20:04:43.047+07:00"
        },}

function _log(msg) {
  console.log(msg);
};

var customer_public_id_value = null;
var ldms_customer_id_value = null;

var processed_payload = {
    "TicketQontakID": req.body.id.toString(),
    "PICQontak": req.body.creator_name,
    "StatusTicketQontak": req.body.crm_stage_name
}

var statusTicketQontak = req.body.crm_pipeline_name;

var list_additional_fields = req.body.additional_fields
for (i in list_additional_fields) {
    if (list_additional_fields[i].name === "customer_public_id") {
        customer_public_id_value = list_additional_fields[i].value_name;
    }

    if (list_additional_fields[i].name === "ldms_customer_id") {
        ldms_customer_id_value = list_additional_fields[i].value_name;
    }

    processed_payload[mapping_payload[list_additional_fields[i].name]] = list_additional_fields[i].value_name
};

// Conditional: jika customer_public_id null/kosong, gunakan ldms_customer_id
if (!customer_public_id_value && ldms_customer_id_value) {
    processed_payload["CustomerSingleID"] = ldms_customer_id_value;
}


_log(processed_payload)