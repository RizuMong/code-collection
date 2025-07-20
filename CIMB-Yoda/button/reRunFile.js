var api_url = "https://api-uat.smart-cimb.com/25236/button/re-run/file-yoda";
var payload = _record;
var header = { authorization: _user.token, "content-type": "application/json" };
var api = _hitExternalAPI(api_url, "POST", payload, header);
var message = api.body.message;
var redirect = api.body.redirect;