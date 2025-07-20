var blastEmail = [
  {
    id: "JrFcFv8IANC4avjf",
    stage_id: "2BZK4wZFB5RTYju1",
    email: "rizki.haddi@mekari.com",
  },
  {
    id: "JrFcFv8IANC4avjf",
    stage_id: "2BZK4wZFB5RTYju1",
    email: "rizkihaddiprayoga@gmail.com",
  },
  {
    id: "JrFcFv8IANC4avjf",
    stage_id: "2BZK4wZFB5RTYju1",
    email: "rizkihaddiprayoga@gmail.com",
  },
];

function _log(msg) {
  console.log(msg);
};

// Konfigurasi
var totalData = blastEmail.length; 
var limit = 1;
var maxGroupCycle = 3;

var parameterList = [];
for (var i = 0; i < blastEmail.length; i++) {
  var item = blastEmail[i];
  var currentGroup = Math.floor(i / limit) % maxGroupCycle + 1;
  
  var newItem = {
    applicant_id: item.id,
    stage_id: item.stage_id,
    email: item.email,
    has_generate: false,
    group: currentGroup,
    limit: limit
  };
  
  parameterList.push(newItem);
};

_log(parameterList);