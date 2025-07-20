function _log(msg) {
  console.log(msg);
}

// Contoh Data
var payload = {
  count: 10,
  limit: 1,
};

var countTotal = payload.count;
var totalPage = countTotal / payload.limit + 1;

var listPageLimit = [];
for (i = 1; i < totalPage; i++) {
  var pageLimit = {
    page: i,
    limit: payload.limit,
  };
  listPageLimit.push(pageLimit);
};

_log(listPageLimit);