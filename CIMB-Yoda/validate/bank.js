var mappingBanks = [
  {
    feature: {
      id: "7cFIAxMNg",
      name: "bank_name_yoda",
    },
    id: "y6080bMNg",
    id_settings_parameter_yoda: "y6080bMNg",
    mapped_data: {
      id: "llZXdYwVg",
      name: "Bank CIMB Niaga",
    },
    name: "Bank",
    original_data: "CIMB Niaga",
  },
  {
    feature: {
      id: "7cFIAxMNg",
      name: "bank_name_yoda",
    },
    id: "y6080bMNg",
    id_settings_parameter_yoda: "y6080bMNg",
    mapped_data: {
      id: "llZXdYwVg",
      name: "Bank CIMB Niaga",
    },
    name: "Bank",
    original_data: "PT Bank CIMB Niaga TBK",
  },
];

var dataCreate = [
  {
    id: 1,
    bank_name: "PT Bank CIMB Niaga TBK",
    data_valid: true,
    notes: "",
  },
  {
    id: 2,
    bank_name: "CIMB Niaga",
    data_valid: true,
    notes: "",
  },
  {
    id: 3,
    bank_name: "PT Bank CIMB Niaga TBK",
    data_valid: false,
    notes: "Data tidak valid",
  },
];

var validBankNames = {};

for (var i = 0; i < mappingBanks.length; i++) {
  validBankNames[mappingBanks[i].original_data] =
    mappingBanks[i].mapped_data.name;
};

for (var j = 0; j < dataCreate.length; j++) {
  var item = dataCreate[j];

  if (validBankNames[item.bank_name]) {
    item.data_valid = true;
    item.bank_name = validBankNames[item.bank_name];
    item.notes = "";
  } else {
    item.data_valid = false;
    item.notes = "Error : Bank not valid";
  }
}

console.log(dataCreate);
