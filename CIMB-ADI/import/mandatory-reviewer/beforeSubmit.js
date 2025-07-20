var baseUrl = "https://api-uat.smart-cimb.com/25236/";
var targetUrl = baseUrl + "adi/validate-submit";

var x = _hitExternalAPI(targetUrl, "POST", _record, {
  "Content-Type": "application/json",
  "Authorization": _user.token,
});
