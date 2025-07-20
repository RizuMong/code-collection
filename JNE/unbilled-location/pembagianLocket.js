var listDataLocations = [
  {
    created_at: 1721190746445,
    customer_id: "80070101",
    destination_branch_id: "TGR",
    destination_urban_village_name: "SUKARASA",
    id_parent: "7raxSmXIg",
    key: "qH9Bi9RZC7-SMI|JAMPANGTENGAH|TGR|SUKARASA-80070101",
    origin_branch_id: "SMI",
    origin_urban_village_name: "JAMPANGTENGAH",
  },
  {
    created_at: 1721190746448,
    customer_id: "80070101",
    destination_branch_id: "TGR",
    destination_urban_village_name: "SUKARASA",
    id_parent: "7raxSmXIg",
    key: "BO8yOGebMH-SMI|SAGARANTEN|TGR|SUKARASA-80070101",
    origin_branch_id: "SMI",
    origin_urban_village_name: "SAGARANTEN",
  },
  {
    created_at: 1721190746448,
    customer_id: "RTC-SMI",
    destination_branch_id: "TGR",
    destination_urban_village_name: "SUKARASA",
    id_parent: "7raxSmXIg",
    key: "NX4COlTeYv-SMI|PARUNGSEAH|TGR|SUKARASA-RTC-SMI",
    origin_branch_id: "SMI",
    origin_urban_village_name: "PARUNGSEAH",
  },
];

/*
  Detail List Location
  combination: "NX4COlTeYv-SMI|PARUNGSEAH|TGR|SUKARASA-RTC-SMI"
  has_generate: true/false
*/

function paginateData(data, limit, offset, maxJob) {
  var paginatedData = [];
  var locket = 1;
  var job = 1;

  for (var i = 0; i < data.length; i += limit) {
    paginatedData.push({
      limit: limit,
      offset: i + offset,
      locket: locket,
      job: job
    });

    locket++;
    if (locket > 25) {
      locket = 1;
    }

    job++;
    if (job > maxJob) {
      job = 1;
    }
  }

  return paginatedData;
}

var result = paginateData(listDataLocations, 2, 0, 2);

var lastIndex = result.length - 1
result[lastIndex].finalData = true;

console.log(result);