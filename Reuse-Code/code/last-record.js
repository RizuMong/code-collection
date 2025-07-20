function _log(msg) {
  console.log(msg);
};

// Contoh Data
var listParameters = [
  {
    count: 10,
    limit: 1,
  },
];

listParameters[listParameters.length - 1].final_record = true; // example
_log(listParameters);