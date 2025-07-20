var getListData = [
  {
    company_id: 28001,
    created_at: 1724062263201,
    created_by: 174826,
    id: "kCin_yjIg",
    ids: "kCin_yjIg",
    name: "1234123456",
    updated_at: 1724062263201,
    updated_by: 174826,
  },
  {
    company_id: 28001,
    created_at: 1724062263201,
    created_by: 174826,
    id: "kCin_yjIg",
    ids: "kCin_yjIg",
    name: "1234123456",
    updated_at: 1724062263201,
    updated_by: 174826,
  }
];

var listData = [];

for (var i = 0; i < getListData.length; i++) {
  var isDuplicate = false;

  for (var j = 0; j < listData.length; j++) {
    if (
      listData[j].id === getListData[i].id &&
      listData[j].name === getListData[i].name
    ) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    listData.push({
      id: getListData[i].id,
      name: getListData[i].name,
    });
  }
}

console.log(listData);
