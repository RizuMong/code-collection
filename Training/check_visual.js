var req = {
  total_bundle: 2,
};

var check_visuals = [];

for (var i = 0; i < req.total_bundle; i++) {
  check_visuals.push({
    order: i + 1,
  });
};

console.log(check_visuals);
