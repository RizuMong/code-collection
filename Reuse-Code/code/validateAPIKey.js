// Validate Key
var validApiKey = "Z7mT9#eYp2qX6!vLgB@dR3W$Nk5*JsCfA8^MhY0oU";
var apiKey = req.header && req.header["X-Api-Key"] ? req.header["X-Api-Key"][0] : null;

if (apiKey !== validApiKey) {
    res = {
        status: "error",
        code: 401,
        message: "Unauthorized: Invalid API key provided.",
        suggestion: "Please check your API key and try again. If the issue persists, contact support for assistance."
    };

    _log(res);
    _stopAutomation();
};