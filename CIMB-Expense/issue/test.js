var payload = {
  "type": "Reimbursement",
};

var filter = {
  _filter_version: 2,
  where_is_and: {
    id_key: Number(payload.id_key),
  },
};
var sort = { created_at: -1 };

var mappingTableId = {
  "Reimbursement": "arYtaRmVg",
  "Direct Payment": "sPgjDcGVg",
  "Cash Advance Settlement": "_cuSupG4g",
  "Prepaid Expense": "wKHxCgiVR",
  "Petty Cash Settlement": "Luosd-V4R",
};

if (mappingTableId[payload.type]) {
  var idDataManager = mappingTableId[payload.type];
};

console.log(idDataManager);

var getData = _findRecords(idDataManager, 1, 100, sort, filter, "and") || [];
var transaction = getData.length > 0 ? getData[0] : {};
