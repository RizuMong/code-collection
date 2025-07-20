const axios = require('axios');
const crypto = require('crypto');

require('dotenv').config();

const MEKARI_API_BASE_URL = 'https://api.mekari.com'
const MEKARI_API_CLIENT_ID= 'Pr3grAaXauPCYxj0'
const MEKARI_API_CLIENT_SECRET= '4jXR7TPmFTCz0Mwc0cnubnL2I23LeHq3'

function generate_headers(method, pathWithQueryParam) {
  let datetime = new Date().toUTCString();
  let requestLine = `${method} ${pathWithQueryParam} HTTP/1.1`;
  let payload = [`date: ${datetime}`, requestLine].join("\n");
  let signature = crypto.createHmac('SHA256', MEKARI_API_CLIENT_SECRET).update(payload).digest('base64');

  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Date': datetime,
    'Authorization': `hmac username="${MEKARI_API_CLIENT_ID}", algorithm="hmac-sha256", headers="date request-line", signature="${signature}"`
  };
}

// Set method and path for the request
let method = 'POST';
let path = '/v2/talenta';
let headers = {
  'X-Idempotency-Key': '1234'
};

const options = {
  method: method,
  url: `${MEKARI_API_BASE_URL}${path}`,
  headers: {...generate_headers(method, path), ...headers}
};

console.log(options);