var checkParameterStatus = [
  {
    created_at: 1736236025741,
    ids: "1",
  },
  {
    created_at: 1736352534000,
    ids: "2",
  },
  {
    created_at: 1736085951846,
    ids: "3",
  },
];

var twoDaysInMilliseconds = 2 * 24 * 60 * 60 * 1000; // 2 Hari
var today = Date.now();
var stuckProcess = [];

for (var i = 0, len = checkParameterStatus.length; i < len; i++) {
  var item = checkParameterStatus[i];
  if (today - item.created_at > twoDaysInMilliseconds) {
    stuckProcess[stuckProcess.length] = {
      created_at: item.created_at,
      ids: item.ids,
    };
  }
}

console.log(stuckProcess);
