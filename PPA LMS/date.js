function _dateFormat(item) {
  var date = new Date(item);
  return date.getTime();
}

var payload = {
  created_at: "2023-07-12",
  updated_at: "2023-10-23 21:07:12",
};

console.log(_dateFormat(payload.created_at));
console.log(_dateFormat(payload.updated_at));

