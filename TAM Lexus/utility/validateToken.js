var payload = {
  expired: 1, // in hours
  id_token: "lexus_reach_token",
};

var getToken = {
  company_id: 28001,
  created_at: 1730100616885,
  created_by: 0,
  id: "lexus_reach_token",
  id_token: "lexus_reach_token",
  name: "Lexus Reach Token",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  updated_at: 1730100616885, // Time in milliseconds
  updated_by: 0,
};

var tokenValid = true;
var currentTime = Date.now();
var tokenUpdatedAt = getToken.updated_at;
var expirationTimeInMilliseconds;


if (payload.expired < 1) {
  expirationTimeInMilliseconds = payload.expired * 60000;
} else {
  expirationTimeInMilliseconds = payload.expired * 3600000; 
};


if (currentTime - tokenUpdatedAt > expirationTimeInMilliseconds) {
  tokenValid = false;
}

console.log("Is the token valid?", tokenValid);
