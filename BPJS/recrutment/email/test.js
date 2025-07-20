var req = {
  body: [
    {
      company_id: 27414,
      created_at: 1745039319225,
      created_by: 178566,
      id: "wG0RyjItlnNzfIDZ",
      id_pipeline: "wG0RyjItlnNzfIDZ",
      label: "DEFAULT",
      name: "DEFAULT",
      updated_at: 1745039319225,
      updated_by: 178566,
    },
    {
      company_id: 27414,
      created_at: 1746625656991,
      created_by: 181238,
      id: "miALyTY0DRlmxaeQ",
      id_pipeline: "miALyTY0DRlmxaeQ",
      label: "Pipeline Aul",
      name: "Pipeline Aul",
      updated_at: 1746625656991,
      updated_by: 181238,
    },
    {
      company_id: 27414,
      created_at: 1747138141323,
      created_by: 181238,
      id: "W7Yc96znKxPE0SIV",
      id_pipeline: "W7Yc96znKxPE0SIV",
      label: "Rekrutmen Prohire 2025",
      name: "Rekrutmen Prohire 2025",
      updated_at: 1747138166199,
      updated_by: 181238,
    },
  ],
};

var pipelineIds = [];

req.body.forEach(function (item) {
  pipelineIds.push("'" + item.name + "'");
});

var pipeline = pipelineIds.join(", ");

var query = "SELECT * FROM master_stage WHERE pipeline_id_text IN(" + pipeline + ")";

console.log(query);
// console.log(pipeline);