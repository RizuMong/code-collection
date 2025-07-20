var getConfig = {
  company_id: 27414,
  created_at: 1744536240000,
  created_by: 178566,
  email: "mekariofficeless@integration.mekari.com",
  expired_at: 1744540263014,
  flow_status: "",
  id: "dawmd7i86z3E4ljc",
  ids: "dawmd7i86z3E4ljc",
  integration_name: "Mekari Officeless",
  login_url: "https://gateway-bpjs.jojonomic.com/v1/auth/login",
  password: "M3kari@2025!",
  token:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2pvbm9taWMtand0LXNlcnZpY2UiLCJpYXQiOjE3NDQ1Mzg0NjIsImV4cCI6MTc3NjA3NDQ2Miwic3ViIjoyMTU1MjQsInNlc3NfaWQiOjE0OCwidXNlciI6eyJpZCI6MjE1NTI0LCJlbWFpbCI6Im1la2FyaW9mZmljZWxlc3NAaW50ZWdyYXRpb24ubWVrYXJpLmNvbSIsImNvbXBhbnlfaWQiOjI3NDE0LCJ1c2VyX2NvbXBhbnlfaWQiOjE4NzQ1MywidXNlcl9yb2xlIjoyLCJ1c2VyX3JvbGVfbmFtZSI6ImltcGxlbWVudG9yIn0sImxhbmciOiJlbl9VUyIsInNlc3Npb25fc2V0dGluZyI6MX0.PcMQYb2YdzwZdLWv8G6yIjkhmjTiCwUrWcLUKEoFj6U",
  updated_at: 1744538463196,
  updated_by: 0,
};

var nowTimestamp = Date.now();
var expirationTimestamp = getConfig.expired_at;

if (nowTimestamp > expirationTimestamp) {
  console.log("Token Kadaluarsa");
};
