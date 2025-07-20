var payload = {
  id_dedicated_job: ["CLl_9zhSg", "m3Lh9zhSg"],
  id_parent: "uHr7kK1Sg",
  type_dedicated: "Report Unbilled Customer Based",
};

var tokenJojoPilot =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2pvbm9taWMtand0LXNlcnZpY2UiLCJpYXQiOjE2ODAxNTI3MzcsImV4cCI6MTcxMTY4ODczNywic3ViIjo2NjYsInNlc3NfaWQiOjE1MjAxLCJ1c2VyIjp7ImlkIjo2NjYsImVtYWlsIjoiZ2xAam5lLmNvLmlkIiwiY29tcGFueV9pZCI6MjMwLCJ1c2VyX2NvbXBhbnlfaWQiOjc0NiwidXNlcl9yb2xlIjoyLCJ1c2VyX3JvbGVfbmFtZSI6ImltcGxlbWVudG9yIn0sImxhbmciOiJlbl9VUyIsInNlc3Npb25fc2V0dGluZyI6MX0.U61QlL2WSoZu11-d0aG7qCCy6_GlKRO4o-Paf-cZ6dI";

var dataDedicatedEror = []

payload.id_dedicated_job.forEach(function (each_job) {
  var urlAPI = "https://gateway-raise-pro.jne.co.id/v1/nocode-dedicated-job/monitor/jobs?job_id=" + each_job + "&page=1&limit=1000&status=error";
  var dedicated_job = _hitExternalAPI(urlAPI, 'POST', {
    "Content-Type": "application/json",
    "Authorization": tokenJojoPilot,
  });

  dataDedicatedEror.push(dedicated_job);
})

console.log(endpointErorDedicatedJob);
