var req = {
  body: {
    filter: {
      "material_id.id": "miPdRd0xO3K2",
      "store_id.id": "Xn3KdaJbHbg5",
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

var filter = {
  _filter_version: 2,
  where_is_and: {}
};

// var where = {};

if (req.body.filter["material_id.id"]) {
  filter.where_is_and["material_id.id"] = req.body.filter["material_id.id"];
};

// if (req.body.filter["store_id.id"]) {
//   where["store_id.id"] = req.body.filter["store_id.id"];
// }

// if (Object.keys(where).length > 0) {
//   filter.where_is_and = where;
// }

console.log(filter);


// // if material_id.id found
// filter = {
//   _filter_version: 2,
//   where_is_and: {
//     "material_id.id": "miPdRd0xO3K2",
//   },
// };

// // if store_id.id found
// filter = {
//   _filter_version: 2,
//   where_is_and: {
//     "store_id.id": "miPdRd0xO3K2",
//   },
// };

// // if store_id.id found and material_id.id found
// filter = {
//   _filter_version: 2,
//   where_is_and: {
//     "store_id.id": "miPdRd0xO3K2",
//     "material_id.id": "miPdRd0xO3K2",
//   },
// };

// // if both data not found
// filter = {
//   _filter_version: 2,
// };