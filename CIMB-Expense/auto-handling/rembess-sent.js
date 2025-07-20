var payload = {
  aging: 90,
  expense_type: "Reimbursement",
  transaction_status: "Sent",
};

var getData = [
  {
    _id: "64b0d41228dd696ea06a120b",
    dibuat_oleh: "aulia.sarah@mailinator.com",
    diedit_oleh: "aulia.sarah@mailinator.com",
    flow_status: "sent",
    id_key: 16,
    id_reimbursement: "Ist6ZOl4R",
    submitted_at: 1686021865954,
    updated_at: 1686021870465,
  },
  {
    _id: "64b0d41228dd696ea06a120b",
    dibuat_oleh: "aulia.sarah@mailinator.com",
    diedit_oleh: "aulia.sarah@mailinator.com",
    flow_status: "sent",
    id_key: 17,
    id_reimbursement: "Ist6ZOl4R",
    submitted_at: null,
    updated_at: 1686021870465,
  },
  {
    _id: "64b0d41228dd696ea06a120b",
    dibuat_oleh: "aulia.sarah@mailinator.com",
    diedit_oleh: "aulia.sarah@mailinator.com",
    flow_status: "sent",
    id_key: 18,
    id_reimbursement: "Ist6ZOl4R",
    updated_at: 1686021870465,
  },
];

var listDeleteData = [];
var currentDate = new Date().getTime();
var agingInMillis = payload.aging * 24 * 60 * 60 * 1000;

for (var i = 0; i < getData.length; i++) {
  var submittedAt = getData[i].submitted_at;

  if (!submittedAt) {
    continue;
  };

  if ((currentDate - submittedAt > agingInMillis) && getData[i].flow_status == "sent") {
    listDeleteData.push(getData[i]);
  }
}

console.log(listDeleteData);
