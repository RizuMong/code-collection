function countStage(period_id, stage_id) {
  var query =
    "SELECT COUNT(1) as count FROM t_job_application WHERE period_id_text = '" +
    period_id +
    "' AND stage_id_text ='" +
    stage_id +
    "'";

  return query
  // var data = _queryRecord("v3_recruitment", query);
  // var totalItems = data.length > 0 ? data[0].count : 0;
  // return totalItems;
};

var period_id = "wG0RyjItlnNzfIDZ";

var stages = [
  {
    company_id: 27414,
    created_at: 1745039489634,
    created_by: 178566,
    id: "8gI0c68tzb78RgxI",
    id_stage: "8gI0c68tzb78RgxI",
    is_hired: false,
    is_rejected: false,
    is_start: false,
    name: "Seleksi Online",
    order: 2,
    pipeline_id_text: "wG0RyjItlnNzfIDZ",
    updated_at: 1745039489634,
    updated_by: 178566,
  },
];

var resData = [];

stages.forEach(function (stage) {
    console.log(stage.id_stage);
    
    var countStages = countStage(period_id, stage.id_stage);

    console.log(countStages);
  

    // resData.push({
    //   id: stage.id_stage,
    //   name: stage.name,
    //   count: countStage,
    //   order: order,
    // });
});