var getListData = [
  {
    ByteSize: 6714782,
    CreatedAt: 1715830913000,
    FileType: "comma separated value file",
    IsFolder: false,
    Name: "CIMB_SMART_YODA_2020405095415.csv",
  },
];

var fileYoda = [];

getListData.forEach(function (item) {
  if (/^CIMB_SMART_YODA_/.test(item.Name)) {
      fileYoda.push({ name: item.Name });
  }
});

// Add finalFile flag to the last item in the fileYoda array
if (fileYoda.length > 0) {
  fileYoda[fileYoda.length - 1].finalFile = true;
}

console.log(fileYoda);