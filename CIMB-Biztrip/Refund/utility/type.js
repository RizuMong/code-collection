// var method = request.method;
// var payloadAPI = request.payload;
// var baseUrl = "";
// var type = request.type;
// var name = request.name;

var method = "POST";
var payloadAPI = {
  data: "1"
};
var baseUrl = "";
var name = "Flight";
var type = "Production";
var endpoint = "/v1/flight/refund-policy";

var baseUrlMapping = {
    "Flight": {
        "Staging": "https://affiliate-api.fpr.staging-traveloka.com",
        "Production": "https://affiliate-api.fpr.traveloka.com"
    },
    "Accomodation Content": {
        "Staging": "https://api-afica.afi.staging-traveloka.com",
        "Production": "https://api-afica.afi.traveloka.com"
    },
    "Accomodation Search": {
        "Staging": "https://api-afisa.afi.staging-traveloka.com",
        "Production": "https://api-afisa.afi.traveloka.com"
    },
    "Accomodation Booking": {
        "Staging": "https://api-afiba.afi.staging-traveloka.com",
        "Production": "https://api-afiba.afi.traveloka.com"
    }
};

if (baseUrlMapping[name] && baseUrlMapping[name][type]) {
    baseUrl = baseUrlMapping[name][type];
}

var urlTarget = baseUrl + endpoint;

console.log(urlTarget); // Memastikan urlTarget benar
