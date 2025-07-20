var data = null;

var expenseGroup = [];
var dataDuplicate = {};

if (!!data) {
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    if (!dataDuplicate[item.project_depart.id]) {
      dataDuplicate[item.project_depart.id] = true;
      expenseGroup.push({
        id: item.project_depart.id,
        name: item.project_depart.name,
      });
    }
  }
}

console.log(expenseGroup);
