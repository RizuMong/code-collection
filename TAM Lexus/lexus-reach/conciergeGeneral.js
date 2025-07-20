//buat proses data yang ada di array aditional values
var mapping_payload = {
  "variant": "variant",
  "vin": "ldms_vehicle_id",
  "description": "description",
  "dealer_code": "dealer_code"
}

var processed_payload = {};

var list_additional_fields = req.body.additional_fields;

for (i in list_additional_fields) {
  if (list_additional_fields[i].value_name) {
      processed_payload[mapping_payload[list_additional_fields[i].name]] = list_additional_fields[i].value_name
  } else {
      processed_payload[mapping_payload[list_additional_fields[i].name]] = null
  }
};

_log(processed_payload)


var type = null
if (processed_payload.variant) {
  if (processed_payload.variant.toLowerCase() === "general") {
      type = 1
  } else if (processed_payload.variant.toLowerCase() === "lfast non-technical") {
      type = 2
  } else if (processed_payload.variant.toLowerCase() === "lfast technical") {
      type = 3
  }
}


var dealer_code = null;
if (processed_payload.dealer_code) {
  if (processed_payload.dealer_code.toLowerCase() === "1. menteng") {
      dealer_code = 1
  } else if (processed_payload.dealer_code.toLowerCase() === "2. mampang") {
      dealer_code = 2
  } else if (processed_payload.dealer_code.toLowerCase() === "3. pluit") {
      dealer_code = 3
  } else if (processed_payload.dealer_code.toLowerCase() === "4. other") {
      dealer_code = 4
  }
}

var stage_name = req.body.crm_stage_name

if (stage_name.toLowerCase() === "confirmed") {
  // (!findExisting.stage_name || findExisting.stage_name.toLowerCase() === "open") && stage_name.toLowerCase() === "confirmed"
  var final_payload = {
      "unique_ticket_id": req.body.id.toString(),
      "status": "confirmed",
      "type": type,
      "ldms_vehicle_id": mapping_payload.ldms_vehicle_id,
      "description": processed_payload.description,
      "pipeline_id": req.body.crm_pipeline_id.toString(),
      "pipeline_name": req.body.crm_pipeline_name,
      "stage_id": req.body.crm_stage_id.toString(),
      "stage_name": stage_name,
      "dealer_code": dealer_code
  };

  _log("penjagaan type(variant) = 3 / LFast technical maka dealer code wajib ada")
  if (!dealer_code && type === 3) _stopAutomation()

  var hitAPILexus = _hitFunction("func_hit_api_lexus", {
      "endpoint": "/qontak/concierge/status",
      "payload": final_payload,
      "ticket_qontak_id": req.body.id
  });

}

// Case cancelled
else if (stage_name.toLowerCase() === "cancelled" || stage_name.toLowerCase() === "cancelled") {
  var final_payload = {
      "unique_ticket_id": req.body.id.toString(),
      "status": "cancelled",
      "description": processed_payload.description,
  };

  var hitAPILexus = _hitFunction("func_hit_api_lexus", {
      "endpoint": "/qontak/concierge/status",
      "payload": final_payload,
      "ticket_qontak_id": req.body.id
  });
}

// Case completed
else if ((!findExisting.stage_name || findExisting.stage_name.toLowerCase() === "confirmed") && stage_name.toLowerCase() === "completed") {
  var final_payload = {
      "unique_ticket_id": req.body.id.toString(),
      "status": "completed",
  };

  _log("Only status = confirmed, with type = 'General' / 'LFast non technical' can be updated to completed")
  if (type === 3) _stopAutomation();

  var hitAPILexus = _hitFunction("func_hit_api_lexus", {
      "endpoint": "/qontak/concierge/status",
      "payload": final_payload,
      "ticket_qontak_id": req.body.id
  });
}


