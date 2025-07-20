var log = _hitFunction("function_concierge_status_update", {
  data: final_payload,
});

var hitAPILexus = _hitFunction("func_hit_api_lexus", {
  "endpoint": "/qontak/concierge/status",
  "payload": final_payload,
  "ticket_qontak_id": req.body.id
});