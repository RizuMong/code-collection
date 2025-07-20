var req = {
  body: {
    filter: {
      description: "SURVEI",
      title: "SURVEI",
    },
    filter_operator: "and",
    form_data_id: "",
    limit: 10000,
    page: 0,
    sort: {
      created_at: -1,
    },
  },
};

function _log(msg) {
  console.log(msg);
}

var result = [];
var filterData = req.body.filter || {};
var dataManagerID = "Gkd6Eg4jBoSrU5ne"; // t_survey_form
var sort = { created_at: -1 };

var filter = {
  _filter_version: 2,
};

// OR
if (filterData.title || filterData.description) {
  filter.where_like_or = {};
  if (filterData.title) {
    filter.where_like_or["judul_survei"] = filterData.title;
  };

  if (filterData.description) {
    filter.where_like_or["survey_description"] = filterData.description;
  };
};

_log({
  filterData: filterData,
  filter: filter,
});
