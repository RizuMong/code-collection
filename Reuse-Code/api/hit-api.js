var baseURL = "BASE_URL";
var targetURL = baseURL + "/ENDPOINT_API";
var header = {
  "Content-Type": "application/json",
  "Authorization": _user.token,
};

var hitAPI = _hitExternalAPI(targetURL, "POST", _field, header);
var error = hitAPI.body.error;
var message = hitAPI.body.message;

var redirect = hitAPI.body.redirect;
var header = {
  "Content-Type": "application/json",
  "x-api-key": "zAq8Pw7FgNc3Rt1VbKjLp9HsYg5UeXoZ2m4iF6dW",
  "Authorization": _user.token,
};