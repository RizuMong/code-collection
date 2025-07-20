var payload = {
  body: {
    additional_fields: [
      {
        id: 14428309,
        name: "dealer_code",
        value: "4214780",
        value_name: "2. Mampang",
      },
    ],
  },
};

var dealerCode = null;

var statusMapping = {
  "1. Menteng": 1,
  "2. Mampang": 2,
  "3. Pluit": 3,
  "4. Other": 3,
};

payload.body.additional_fields.forEach(function (item) {
  if (item.name == "dealer_code") {
    if (statusMapping.hasOwnProperty(item.value_name)) {
      dealerCode = statusMapping[item.value_name];
    }
  }
});

console.log(dealerCode);
