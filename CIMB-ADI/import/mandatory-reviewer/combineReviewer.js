var mandatoryReviewExist = {
  adi_jurnal_id: {
    id: "9qq6apVNg",
    name: "Ref1000",
  },
  automation_id: "gRyMiU4Ng",
  company_id: 25236,
  created_at: 1733807279195,
  created_by: 0,
  id: "lmcyS_4Ng",
  id_adi_jurnal_mr_list: "lmcyS_4Ng",
  mr_ahead: [
    {
      flow_name: "flow2",
      flow_type: "order",
      minimum_action: 0,
      organigram_id: 31591,
    },
  ],
  mr_behind: [],
  updated_at: 1733807279195,
  updated_by: 0,
};

// Combine
var listMandatoryReviewersAhead = [
  {
    flow_type: "order",
    organigram_id: 31592,
    minimum_action: 0,
    flow_name: "Flow 2",
  },
];

var listMandatoryReviewersBehind = [];

var mrAhead = mandatoryReviewExist.mr_ahead.slice();
var mrBehind = mandatoryReviewExist.mr_behind.slice();

function getItemString(item) {
  return (
    item.flow_name +
    "|" +
    item.flow_type +
    "|" +
    item.organigram_id +
    "|" +
    item.minimum_action
  );
}

// Validate Duplicate Flow
listMandatoryReviewersAhead.forEach(function (newItem) {
  var itemString = getItemString(newItem);
  if (mrAhead.map(getItemString).indexOf(itemString) === -1) {
    mrAhead.push(newItem);
  }
});

listMandatoryReviewersBehind.forEach(function (newItem) {
  var itemString = getItemString(newItem);
  if (mrBehind.map(getItemString).indexOf(itemString) === -1) {
    mrBehind.push(newItem);
  }
});

console.log(mrAhead);
console.log(mrBehind);
