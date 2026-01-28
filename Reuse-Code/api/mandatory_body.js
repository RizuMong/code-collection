var email = "";

try {
  if (!req || !req.body || !req.body.email) {
    throw new Error("Require 'email'");
  }

  email = req.body.email;
} catch (err) {
  res = {
    error: true,
    code: 400,
    message: err.message || "Unknown error",
    data: {}
  };

  _response_status_code = 400;
  _stopAutomation();
  _log(res);
};