var baseURL = "https://gateway.jojonomic.com/v1"; // sesuaikan dengan project anda
var targetURL = baseURL + "/auth/login";
var header = {
    "Content-Type": "application/json",
};

var credentialLogin = {
  "email" : "xxxxxx",
  "password" : "xxxxxx"
};

var hitAPI = _hitExternalAPI(targetURL, "POST", _field, header);
var error = hitAPI.body.error;
var message = hitAPI.body.message;
var redirect = hitAPI.body.redirect;
