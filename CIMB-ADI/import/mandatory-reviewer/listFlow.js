var getListFlow = [
  {
    company_id: 25236,
    core_flow_id: 5995,
    created_at: 1729590934426,
    created_by: 166466,
    dibuat_oleh: "R.DITARUNA@mailinator.com",
    diedit_oleh: "R.DITARUNA@mailinator.com",
    fk_id_mapping_mandatory_reviewer: "xelVk_mNR",
    flow: [
      {
        core_id: 6500,
        organigram_id: 31957,
        position: {
          id: "W8WnJ9mNg",
          name: "5011-position U4 - 1^testintegrasiuat.yoda1@mailinator.com",
        },
      },
      {
        core_id: 6537,
        organigram_id: 31966,
        position: {
          id: "yng4JriNR",
          name: "50110-position U4 - 10^testintegrasiuat.yoda10@mailinator.com",
        },
      },
      {
        core_id: 6538,
        organigram_id: 31966,
        position: {
          id: "yng4JriNR",
          name: "50110-position U4 - 10^testintegrasiuat.yoda10@mailinator.com",
        },
      },
    ],
    flow_type: "MINIMUM 1",
    id: "lrsPbriHR",
    id_flow: "lrsPbriHR",
    name: "Mandatory flow GL",
    updated_at: 1729591096549,
    updated_by: 166466,
  },
  {
    company_id: 25236,
    core_flow_id: 6041,
    created_at: 1729591186784,
    created_by: 166466,
    dibuat_oleh: "R.DITARUNA@mailinator.com",
    diedit_oleh: "SUBANDI@mailinator.com",
    fk_id_mapping_mandatory_reviewer: "xelVk_mNR",
    flow: [
      {
        core_id: 6551,
        organigram_id: 31345,
        position: {
          id: "MsjTx8gSg",
          name: "12345^fuadi@mailinator.com",
        },
      },
    ],
    flow_type: "NO ORDER",
    id: "RFh3xriHR",
    id_flow: "RFh3xriHR",
    name: "Mandatory GL 2",
    updated_at: 1730795754906,
    updated_by: 166467,
  },
  {
    company_id: 25236,
    core_flow_id: 12850,
    created_at: 1730795637902,
    created_by: 166467,
    dibuat_oleh: "SUBANDI@mailinator.com",
    diedit_oleh: "SUBANDI@mailinator.com",
    fk_id_mapping_mandatory_reviewer: "xelVk_mNR",
    flow: [
      {
        core_id: 13360,
        organigram_id: 31591,
        position: {
          id: "h-3MWisIR",
          name: "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
        },
      },
    ],
    flow_type: "ORDER",
    id: "2GcaoRGHR",
    id_flow: "2GcaoRGHR",
    name: "flow2",
    updated_at: 1730964392588,
    updated_by: 166467,
  },
  {
    company_id: 25236,
    core_flow_id: 12861,
    created_at: 1731664666445,
    created_by: 166467,
    dibuat_oleh: "SUBANDI@mailinator.com",
    diedit_oleh: "SUBANDI@mailinator.com",
    fk_id_mapping_mandatory_reviewer: "xelVk_mNR",
    flow: [
      {
        core_id: 13382,
        organigram_id: 31359,
        position: {
          id: "8NMXaIkIRz",
          name: "1212123",
        },
      },
    ],
    flow_type: "ORDER",
    id: "t_gc5lMHR",
    id_flow: "t_gc5lMHR",
    name: "flow 4",
    updated_at: 1731664667160,
    updated_by: 166467,
  },
];

var flowList = [];

for (var i = 0; i < getListFlow.length; i++) {
  var flowItems = getListFlow[i].flow;
  for (var j = 0; j < flowItems.length; j++) {
    var flowItem = flowItems[j];

    flowList.push({
      core_id: flowItem.core_id,
      organigram_id: flowItem.organigram_id,
      position: flowItem.position,
      flow_type: getListFlow[i].flow_type,
      name: getListFlow[i].name,
    });
  }
}

console.log(flowList);
