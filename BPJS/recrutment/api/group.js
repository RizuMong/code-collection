var getGroup = {
  code: "import_move_candidate",
  group: 1,
};

var group = getGroup.group;

if (group >= 1) {
  group = 1;
} else {
  group += 1;
}

var res = group;

console.log(res);
