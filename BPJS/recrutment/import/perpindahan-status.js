var errors = [];

if (Object.keys(getStage).length === 0) {
  errors.push("Urutan Tahapan Rekrutmen tidak ditemukan");
} else {
  stage_id = {
    id: getStage.id_stage,
    name: getStage.name,
  };

  _log("Default Stage");

  var pipelineId = getPipeline[0].id_pipeline;

  function getStageByFilter(filterCondition) {
    var filter = {
      _filter_version: 2,
      where_is_and: filterCondition,
    };
    var sort = { created_at: -1 };
    var result = _findRecords("vlQhpWVXteBZmHTN", 1, 10, sort, filter, "and");
    return result && result.length > 0 ? result[0] : null;
  }

  if (req.result === "LOLOS") {
    if (!getStage.is_hired && !getStage.is_rejected && !getStage.is_start) {
      _log("Next Stage");
      var nextStage = getStageByFilter({
        pipeline_id_text: pipelineId,
        order: getStage.order + 1,
      });

      if (nextStage) {
        stage_id = {
          id: nextStage.id_stage,
          name: nextStage.name,
        };

        if (nextStage.is_hired) {
          _log("Next Stage And Hired");
          var hiredStage = getStageByFilter({
            pipeline_id_text: pipelineId,
            is_hired: true,
          });

          if (hiredStage) {
            stage_id = {
              id: hiredStage.id_stage,
              name: hiredStage.name,
            };
          }
        }
      }
    } else if (getStage.is_hired) {
      _log("Hired Stage");
      var hiredStage = getStageByFilter({
        pipeline_id_text: pipelineId,
        is_hired: true,
      });

      if (hiredStage) {
        stage_id = {
          id: hiredStage.id_stage,
          name: hiredStage.name,
        };
      }
    }
  }

  if (req.result === "GAGAL") {
    _log("Gugur");

    rejected_stage_id = {
      id: getStage.id_stage,
      name: getStage.name,
    };

    _log({ rejected_stage_id: rejected_stage_id });

    var rejectedStage = getStageByFilter({
      pipeline_id_text: pipelineId,
      is_rejected: true,
    });

    if (rejectedStage) {
      stage_id = {
        id: rejectedStage.id_stage,
        name: rejectedStage.name,
      };
    }
  }

  if (getStage.is_rejected || getStage.is_hired) {
    _log(getStage.is_rejected ? "Gugur" : "Lolos");
    stage_id = {
      id: getStage.id_stage,
      name: getStage.name,
    };

    if (getStage.is_rejected) {
      rejected_stage_id = {
        id: getStage.id_stage,
        name: getStage.name,
      };
    }
  }
}
