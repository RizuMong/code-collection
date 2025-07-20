var payload = {
  aging: 90,
  expense_type: "Reimbursement",
  transaction_status: "Draft",
};

var getData = [
  {
    created_at: 1698825861272,
    created_by: 179101,
    flow_status: "draft",
    id_key: 156,
    updated_at: 1699253933154,
    updated_by: 179101,
  },
  {
    created_at: 1698891732418,
    created_by: 184120,
    flow_status: "draft",
    id_key: 264,
    updated_at: 1699793538713,
    updated_by: 184120,
  },
  {
    created_at: 1726650569000,
    created_by: 184120,
    flow_status: "draft",
    id_key: 2642,
    updated_at: 1699793538713,
    updated_by: 184120,
  },
];


var listDeleteData = [];
var currentDate = new Date().getTime();
var agingInMillis = payload.aging * 24 * 60 * 60 * 1000;

for (var i = 0; i < getData.length; i++) {
  var createdAt = getData[i].created_at;
  if ((currentDate - createdAt > agingInMillis) && getData[i].flow_status == "draft") {
    listDeleteData.push(getData[i]);
  }
}

console.log(listDeleteData);