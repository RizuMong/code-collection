var baseURL = "https://apiv2-bpjs.jojonomic.com/27414";
var targetURL = baseURL + "/v1/kehadiran/validation/jawal-kehadiran";
var header = {
    "Content-Type": "application/json",
    "x-api-key": "zAq8Pw7FgNc3Rt1VbKjLp9HsYg5UeXoZ2m4iF6dW",
    "Authorization": _user.token
};

var hitAPI = _hitExternalAPI(targetURL, "POST", _field, header);
var error = hitAPI.body.error;
var message = hitAPI.body.message;
var redirect = hitAPI.body.redirect;