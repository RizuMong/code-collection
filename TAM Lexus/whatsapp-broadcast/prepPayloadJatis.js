var getDetailData =  {
  "category": "After Sales",
  "company_id": 28001,
  "created_at": 1729241088935,
  "created_by": 0,
  "destination": "",
  "id": "ICvmnbmNg",
  "ids": "ICvmnbmNg",
  "inquiry": "Customer Database",
  "location": "",
  "notes": "",
  "status": {
      "background": "#B7B7B7",
      "font_color": "#FFFFFF",
      "name": "Pending"
  },
  "status_valid": "Valid",
  "ticket_qontak_id": 57001621,
  "ticket_status": "On Progress",
  "to_phone_number": "081244005202",
  "updated_at": 1729241253753,
  "updated_by": 174826
}

function generateUniqueId() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0;
    var v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function formatPhoneNumber(to_phone_number) {
  to_phone_number = to_phone_number.replace(/^0/, "62");
  return to_phone_number;
};

var uniqueId = generateUniqueId();

var payloadAPI = {
  "messaging_product": "whatsapp",
  "xid": getDetailData.ids + uniqueId,
  "recipient_type": "individual",
  "to": formatPhoneNumber(getDetailData.to_phone_number), 
  "type": "template",
  "template": {
      "name": "ticketing_qontak",
      "language": {
          "policy": "deterministic",
          "code": "en"
      },
      "components": [
          {
              "type": "body",
              "parameters": [
                  {
                      "type": "text",
                      "text": "Fadhilah Aninda Kalisa"
                  },
                  {
                      "type": "text",
                      "text": "5454856"
                  },
                  {
                      "type": "text",
                      "text": "Sales"
                  },
                  {
                      "type": "text",
                      "text": "Closed"
                  }
              ]
          }
      ]
  }
}


console.log(payloadAPI);
