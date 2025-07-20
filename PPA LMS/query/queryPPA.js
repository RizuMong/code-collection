var filterParameters = {
  business_unit_ids: ["SsadsdaOIN12"],
  category_event: ["TRN"],
  department_ids: ["SsadsdaOIN12"],
  event_ids: ["SsadsdaOIN12"],
  grade_ids: ["NG3imyRHR"],
  jabatan_ids: ["SsadsdaOIN12"],
  jobsite_ids: ["SsadsdaOIN12"],
  type_employment: "STAFF",
  year: "2024",
};

var filters = "";
var isFirstCondition = true;

function _addFilterIN(condition, values) {
  if (values && values.length > 0) {
    if (!isFirstCondition) filters += " AND";
    isFirstCondition = false;

    var uniqueValues = values
      .map(function (id) {
        return id.toUpperCase();
      })
      .filter(function (value, index, array) {
        return array.indexOf(value) === index;
      });

    filters += " " + condition + " IN ('" + uniqueValues.join("', '") + "')";
  }
}

function _addFilterIS(condition, values) {
  if (values && values.length > 0) {
    if (!isFirstCondition) filters += " AND";
    isFirstCondition = false;

    filters += " " + condition + " = '" + values + "'";
  }
};

_addFilterIS("year", filterParameters.year);
_addFilterIN("grade_id_text", filterParameters.grade_ids);
_addFilterIN("category_event", filterParameters.category_event);
_addFilterIN("department_id_text", filterParameters.department_ids);
_addFilterIN("jabatan_id_text", filterParameters.jabatan_ids);
_addFilterIN("jobsite_id_text", filterParameters.jobsite_ids);
_addFilterIN("event_id_text", filterParameters.event_ids);
_addFilterIS("type_employment", filterParameters.type_employment);

console.log(filters);
