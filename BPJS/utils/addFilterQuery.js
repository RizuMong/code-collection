var req = {
  query: {
    filter: ['{"title":"SURVEI","description":"SURVEI"}'],
    limit: ["1000000"],
    page: ["1"],
  },
};

function _log(msg) {
  console.log(msg);
};

var dataManagerID = "Gkd6Eg4jBoSrU5ne"; // t_survey_form
var sort = { created_at: -1 };

var rawFilter = req.query && req.query.filter && req.query.filter[0];
var filterData = rawFilter ? JSON.parse(rawFilter) : {};

var filter = {
  _filter_version: 2,
};

// OR logic
if (filterData.title || filterData.description) {
  filter.where_like_or = {};

  if (filterData.title) {
    filter.where_like_or["judul_survei"] = filterData.title;
  };

  if (filterData.description) {
    filter.where_like_or["survey_description"] = filterData.description;
  }
}

_log({
  filterData: filterData,
  filter: filter
});
