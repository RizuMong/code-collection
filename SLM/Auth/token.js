var auth_id = "";
var type = "";

try {
  if (!req || !req.query || !req.query.auth) {
    throw new Error("Require 'auth'");
  }

  if (!req || !req.query || !req.query.type) {
    throw new Error("Require 'type'");
  }

  auth_id = req.query.auth[0];
  type = req.query.type[0];
    
  if (type !== "access_token" && type !== "refresh_token") {
    throw new Error("Invalid 'type' value");
  }
} catch (err) {
  res = {
    error: true,
    code: 400,
    message: err.message || "Unknown error",
    data: {}
  };

  _response_status_code = 400;
//   _stopAutomation();
//   _log(res);
};