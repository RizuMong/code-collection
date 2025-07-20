// var baseUrl = "https://batchjob-lexus.azurewebsites.net"
// var urlCreateTicket = baseUrl + "/api/qontak/uat/create-ticket";
// var ApiKey = "MTw0bGMzYTE3YlYoMW83MGcxPDF0NGNWMTdwbzNyNzQxcHQxaw==";
// var token = "Bearer " + getToken.token;

var getToken = {
        "message": "Success Generate New Token",
        "status": "success",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibWVrYXJpLXFvbnRhayIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImFkbWluLXFvbnRhayIsImV4cCI6MTc0NzgyMjI2OSwiaXNzIjoiVGVjaG5vc29mdCBJbmRvbmVzaWEgZm9yIExleHVzIiwiYXVkIjoiVGhpcmQgcGFydHkgdmVuZG9yIn0.ny3g80Hn9bBveBKRE_x5uwnwrVXYDArgJQMf774CpVA"
}

// Production
var baseUrl = "https://batchjob-lexus.azurewebsites.net";
var urlCreateTicket = baseUrl + "/api/qontak/prod/create-ticket";
var ApiKey = "MTw0bGMzYTE3YlYoMW83MGcxPDF0NGNWMTdwbzNyNzQxcHQxaw==";
var token = "Bearer " + getToken.token;

function _log(msg) {
  console.log(msg);
};

var params = [
    // Mandatory
    { request_payload_name: "SubjectType", name: "SubjectType", type: "Option Set Value", mandatory: "Yes" },
    { request_payload_name: "Category", name: "Category", type: "Option Set Value", mandatory: "Yes" },
    { request_payload_name: "SubCategory", name: "SubCategory", type: "Option Set Value", mandatory: "Yes" },
    { request_payload_name: "CustomerSingleID", name: "CustomerSingleID", type: "String", mandatory: "Yes" },
    { request_payload_name: "InterfaceTicketQontak", name: "InterfaceTicketQontak", type: "Boolean", mandatory: "Yes" },
    { request_payload_name: "PICQontak", name: "PICQontak", type: "String", mandatory: "Yes" },
    { request_payload_name: "TicketQontakID", name: "TicketQontakID", type: "String", mandatory: "Yes" },
    { request_payload_name: "Remarks", name: "Remarks", type: "String", mandatory: "Yes" },
    { request_payload_name: "StatusTicketQontak", name: "StatusTicketQontak", type: "Option Set Value", mandatory: "Yes" },

    // Non Mandatory
    { request_payload_name: "CategoryComplaint", name: "CategoryComplaint", type: "Option Set Value", mandatory: "No" },
    { request_payload_name: "ServiceType", name: "ServiceType", type: "Option Set Value", mandatory: "No" },
    { request_payload_name: "Variant", name: "Variant", type: "Option Set Value", mandatory: "No" },
    { request_payload_name: "Channel", name: "Channel", type: "Option Set Value", mandatory: "No" },
    { request_payload_name: "CustomerSource", name: "CustomerSource", type: "Option Set Value", mandatory: "No" },
    { request_payload_name: "Location", name: "Location", type: "Option Set Value", mandatory: "No" },
    { request_payload_name: "Destination", name: "Destination", type: "Option Set Value", mandatory: "No" },
    { request_payload_name: "UrgencyLevel", name: "UrgencyLevel", type: "Option Set Value", mandatory: "No" },
    { request_payload_name: "InteractionType", name: "InteractionType", type: "String", mandatory: "No" },
    { request_payload_name: "StatusConcierge", name: "StatusConcierge", type: "Option Set Value", mandatory: "No" },
];

var req = {
        "body": {
            "additional_fields": [
                {
                    "id": 14981716,
                    "name": "inquiry",
                    "value": "4372067",
                    "value_name": "Sales/Produk"
                },
                {
                    "id": 13473277,
                    "name": "location",
                    "value": "3800172",
                    "value_name": "Central Jakarta"
                },
                {
                    "id": 13473278,
                    "name": "destination",
                    "value": "3800175",
                    "value_name": "Lexus Menteng"
                },
                {
                    "id": 15164142,
                    "name": "domicile",
                    "value": "Menteng",
                    "value_name": "Menteng"
                },
                {
                    "id": 14536533,
                    "name": "remarks",
                    "value": "testing",
                    "value_name": "testing"
                },
                {
                    "id": 14171324,
                    "name": "nama",
                    "value": "Ali Hanafia Lijaya",
                    "value_name": "Ali Hanafia Lijaya"
                },
                {
                    "id": 13562284,
                    "name": "customer_public_id",
                    "value": "19-CP-023530",
                    "value_name": "19-CP-023530"
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
                    "value": null,
                    "value_name": null
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
                    "value": "19-CP-023530",
                    "value_name": "19-CP-023530"
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
                    "value": null,
                    "value_name": null
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
                    "value": "LEXUS LM 350h 4x2 A/T (AAWH10R-LFXVB)",
                    "value_name": "LEXUS LM 350h 4x2 A/T (AAWH10R-LFXVB)"
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
                    "value": "082260698888",
                    "value_name": "082260698888"
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
                    "value": "3837277",
                    "value_name": "Question"
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
                    "value": null,
                    "value_name": null
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
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562479,
                    "name": "coordinate",
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 13562723,
                    "name": "url_l_reach",
                    "value": null,
                    "value_name": null
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
                    "value": null,
                    "value_name": null
                },
                {
                    "id": 14184598,
                    "name": "cc_subscription_id",
                    "value": null,
                    "value_name": null
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
            "created_at": "2025-05-21T09:26:38.519+07:00",
            "creator_id": 185776,
            "creator_name": "Rizky Pambudi -",
            "crm_company_id": null,
            "crm_company_name": null,
            "crm_lead_ids": [],
            "crm_lead_name": [],
            "crm_lost_reason_id": null,
            "crm_lost_reason_name": null,
            "crm_pipeline_id": 167229,
            "crm_pipeline_name": "Sales",
            "crm_priority_id": null,
            "crm_priority_name": null,
            "crm_source_id": null,
            "crm_source_name": null,
            "crm_stage_id": 1006641,
            "crm_stage_name": "Open",
            "currency": "IDR",
            "expired_date": null,
            "external_company_id": 836993,
            "id": 65696501,
            "name": "19-CP-023530 - Ali Hanafia Lijaya",
            "product_association_ids": [],
            "product_association_name": [],
            "product_association_price": [],
            "product_association_quantity": [],
            "product_association_total_price": [],
            "size": null,
            "slug": "fd8f0e23-4bcf-4942-96e9-9bf246cd4070",
            "start_date": "2025-05-21T09:26:38.000+07:00",
            "updated_at": "2025-05-21T16:41:07.460+07:00"
        }}


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
}

var processed_payload = {
    "TicketQontakID": req.body.id.toString(),
    "PICQontak": req.body.creator_name,
    "StatusTicketQontak": req.body.crm_stage_name
}

var list_additional_fields = req.body.additional_fields
for (i in list_additional_fields) {
    processed_payload[mapping_payload[list_additional_fields[i].name]] = list_additional_fields[i].value_name
};




_log(processed_payload)

// { request_payload_name: "ticket_qontak_id", name: "TicketQontakID", type: "String", mandatory: "Yes" },


var failed_response = {
    error: true,
    mesage: "Params Tidak Sesuai"
}

var final_payload = {}
for (i in params) {
    var temp_params = params[i]

    if (temp_params)
        // param not exist in request payload
        if (!processed_payload[temp_params.request_payload_name]) {

            // condition: params mandatory
            if (temp_params.mandatory === "Yes") {
                res = failed_response
                _log("Param " + temp_params.request_payload_name + " not exist in request payload");
                var createMonitor = _hitFunction("func_create_monitoring_data", {
                    "action": "Create Ticket",
                    "type": "LDMS",
                    "status": "Failed",
                    "ticket_qontak_id": req.body.id,
                    "deal_name": req.body.name,
                    "message": "Payload Mandatory " + temp_params.request_payload_name + " not exist in request payload"
                });
                _stopAutomation()
            }

            else if (temp_params.mandatory === "Yes, None") {
                final_payload[temp_params.name] = ""
            }

            //condition: just put null if not mandatory
            else {
                final_payload[temp_params.name] = null
            }

        }

        //if exist 
        else {
            //kondisional jika string atau boolean
            if (temp_params.type === 'String') {
                final_payload[temp_params.name] = processed_payload[temp_params.request_payload_name]
                continue
            } else if (temp_params.type === 'Boolean') {
                final_payload[temp_params.name] = (processed_payload[temp_params.request_payload_name]) ? 1 : 0
                continue
            }



            //search in data manager
            // var tempFindParams = findRecord(processed_payload[temp_params.request_payload_name], temp_params.name)

            //if record is found in data manager
            if (tempFindParams.length > 0) {
                final_payload[temp_params.name] = tempFindParams[0].value
            }


            //if record is not found in data manager
            else {
                // condition: params mandatory
                if (temp_params.mandatory === "Yes") {
                    res = failed_response
                    _log("err2");
                    // var createMonitor = _hitFunction("func_create_monitoring_data", {
                    //     "action": "Create Ticket",
                    //     "type": "LDMS",
                    //     "status": "Failed",
                    //     "ticket_qontak_id": req.body.id,
                    //     "deal_name": req.body.name,
                    //     "message": "Payload Mandatory not exist in request payload"
                    // });
                    // _stopAutomation()
                }

                //condition: just put null if not mandatory
                else {
                    final_payload[temp_params.name] = null
                }
            }
        }
}

var params_vin = { request_payload_name: "VIN", name: "VIN", type: "String", mandatory: "YES NO" }

if (processed_payload[params[0].request_payload_name] === "After Sales") {

    if (processed_payload[params_vin.request_payload_name]) {
        final_payload[params_vin.name] = processed_payload[params_vin.request_payload_name]
    } else {
        res = failed_response
        _log("err3");
        // var createMonitor = _hitFunction("func_create_monitoring_data", {
        //     "action": "Create Ticket",
        //     "type": "LDMS",
        //     "status": "Failed",
        //     "ticket_qontak_id": req.body.id,
        //     "deal_name": req.body.name,
        //     "message": "Payload Mandatory not exist in request payload"
        // });
        // _stopAutomation()
    }
} else {
    if (processed_payload[params_vin.request_payload_name]) {
        final_payload[params_vin.name] = processed_payload[params_vin.request_payload_name]
    } else {
        final_payload[params_vin.name] = null
    }
}

// final_payload["PICQontak"]= "Rizky Pambudi"
_log(final_payload)