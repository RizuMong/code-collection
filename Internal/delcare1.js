var role_id = "123";

var filter = {
    _filter_version: 2
};

if (role_id) {
    filter.where_is_and = filter.where_is_and || {}; filter.where_is_and["company_unit.id"] = role_id;
}

console.log(filter);
