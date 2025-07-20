function createGroupGenerator(n) {
  return function getNextGroup() {
    var now = new Date();
    var ms = now.getMilliseconds() + now.getSeconds() * 1000;
    var group = (ms % n) + 1;
    return group;
  };
}

var grouping = createGroupGenerator(2);
console.log(grouping());
