try {
  var params = req.query.params[0];
} catch (err) {
  _log("Exception error: " + err);
  res = {
    error: true,
    message: "Require Parameter params",
  };
  _stopAutomation();
}