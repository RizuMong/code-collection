var amount = 13.978494623655912;

function _numberToPercentage(data) {
  if (data === null || data === '' || data === undefined) {
      return '0%';
  } else {
      return data.toFixed(2).toString() + '%';
  }
}

console.log(_numberToPercentage(amount));


var project = {
  "id_parent": "BtD4f0lSg",
  "total_all_connote": 1,
  "total_all_dpp": 0,
  "total_billed_connote": 0,
  "total_billed_dpp": 0,
  "total_unbilled_connote": 1,
  "total_unbilled_dpp": 0,
}