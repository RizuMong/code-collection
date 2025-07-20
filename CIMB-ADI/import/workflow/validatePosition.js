var paramJson = {
  _id: "6750272d28dd696ea062cb9c",
  activity: {
    id: "BCa0hKzNg",
    name: "Activity 1 (flag false)",
  },
  activity_name: "Activity 1 (flag false)",
  company_id: 25236,
  created_at: 1733306157392,
  created_by: 174795,
  description: "123",
  flow_status: "draft",
  forms: {},
  id: "GOF_DFVHR",
  id_adi_transaction: "GOF_DFVHR",
  total_converted_credit: 0,
  total_converted_debit: 0,
  total_credit: 0,
  total_debit: 0,
  updated_at: 1733306157392,
  updated_by: 174795,
};

function _log(msg) {
  return console.log(msg);
}

if (!!paramJson.request_for && !!paramJson.request_for.id) {
  var position_id = paramJson.request_for.id;
} else if (!!paramJson.position && !!paramJson.position.id) {
  var position_id = paramJson.position.id;
};



_log(position_id);
