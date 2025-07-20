var readFileFTP = [
  {
      "Amount": "10200",
      "Description": "Test Import List eBudgeting",
      "Period": "2024",
      "Profit Center": "123-0040",
      "Sub Ledger": "5310507-8886-00000-0000-000"
  }
]

// BUAT HASIL DARI DATA DIATAS JADI
// {
//   "amount": "10200",
//   "description": "Test Import List eBudgeting",
//   "period": "2024",
//   "profit_center": "123-0040",
//   "sub_ledger": "5310507-8886-00000-0000-000"
// }

var formattedData = readFileFTP.map(function(item) {
  var formattedItem = {}; 

  Object.keys(item).forEach(function(originalKey) {
      var formattedKey = originalKey.toLowerCase().replace(/\s+/g, '_');
      formattedItem[formattedKey] = item[originalKey];
  });

  return formattedItem;
});

console.log(formattedData);