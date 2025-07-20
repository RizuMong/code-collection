var listID = [
  "id-lx1bvqk2-k9df--CIMB_SMART_YODA_999999998.csv",
  "id324-k9df--CIMB_SMART_YODA_999999998.csv",
  "id324444-k9df--CIMB_SMART_YODA_999999998.csv",
]

var dataInsert = [
  {
    id_parent: "id-lx1bvqk2-k9df--CIMB_SMART_YODA_999999998.csv",
  },
  {
    id_parent: "id324-k9df--CIMB_SMART_YODA_999999998.csv",
  },
  {
    id_parent: "id324324-k9df--CIMB_SMART_YODA_999999998.csv",
  },
];

var dataInsertIds = {};
for (var i = 0; i < dataInsert.length; i++) {
  dataInsertIds[dataInsert[i].id_parent] = true;
};

var missingIds = [];
for (var j = 0; j < listID.length; j++) {
  if (!dataInsertIds[listID[j]]) {
    missingIds.push(listID[j]);
  }
}

console.log(missingIds);