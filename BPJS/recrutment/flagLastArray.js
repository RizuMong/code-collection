function _log(msg) {
  console.log(msg);
};

var getListParameters = [
  { has_generate: false, page: 1, limit: 100, group: 1 },
  { has_generate: false, page: 2, limit: 100, group: 2 },
  { has_generate: false, page: 3, limit: 100, group: 3 },
  { has_generate: false, page: 4, limit: 100, group: 4 },
];

getListParameters[getListParameters.length - 1].final_array = true;

_log(getListParameters); 