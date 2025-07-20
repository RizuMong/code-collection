var getFlows = {
  company_id: 25236,
  core_flow_id: 5045,
  created_at: 1698053182281,
  created_by: 166467,
  dibuat_oleh: "SUBANDI@mailinator.com",
  diedit_oleh: "SUBANDI@mailinator.com",
  flow: [
    {
      core_id: 5588,
      organigram_id: 30611,
      position: {
        id: "IPA1J8QVR",
        name: "Business Support & Internal Control Specialist - 2^SUBANDI@mailinator.com",
      },
    },
    {
      core_id: 5589,
      organigram_id: 30613,
      position: {
        id: "o2Sf1UQ4R",
        name: "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2^R.DITARUNA@mailinator.com",
      },
    },
  ],
  flow_old: [
    {
      core_id: 5588,
      organigram_id: 30611,
      position: {
        id: "IPA1J8QVR",
        name: "Business Support & Internal Control Specialist - 2^SUBANDI@mailinator.com",
      },
    },
    {
      core_id: 5589,
      organigram_id: 30613,
      position: {
        id: "o2Sf1UQ4R",
        name: "3030050-ERP & FAH Analyst and Maintenance Sr Specialist - 2^R.DITARUNA@mailinator.com",
      },
    },
  ],
  flow_type: "ORDER",
  id: "D_CqY07SR",
  id_flow: "D_CqY07SR",
  name: "BIZTRIP CUSTOM",
  updated_at: 1721789379352,
  updated_by: 166467,
};

var newFlow = [];

for (var i = 0; i < getFlows.flow.length; i++) {
  var data = {
    organigram_id: getFlows.flow[i].organigram_id
  };
  
  var getPosition = _hitFunction("func_get_position_temporary", data);
  console.log(getPosition);
};



getFlows.flow = newFlow;

// console.log(getFlows);