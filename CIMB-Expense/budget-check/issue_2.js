function _log(msg) {
    console.log(msg);
};

var filter = {
  _filter_version: 2
};

var where = {};


if (project_id && isPM) {
  filter.where_is_and = {
    "project_id.id": project_id
  };
  _log(1);
} else if (!project_id & isPMMulti) {
  filter.where_in_and = {
    "project_id.id": project_ids
  };
   _log(2);
} else if (!isAdmin && !isPM && !isPMMulti) {
  filter.where_is_or = where;
   _log(3);
}