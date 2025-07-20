var getListArchive = [
  {
    bytesize: 279,
    createdat: 1728957696000,
    filetype: "comma separated value file",
    isfolder: false,
    name: "CIMB_PD_I_20241015090037.csv",
  },
  {
    bytesize: 279,
    createdat: 1728959063000,
    filetype: "comma separated value file",
    isfolder: false,
    name: "CIMB_PT_I_20241015092324.csv",
  },
  {
    bytesize: 279,
    createdat: 1728958318000,
    filetype: "comma separated value file",
    isfolder: false,
    name: "CIMB_SMART_YODA_202410291043.csv",
  },
  {
    bytesize: 1573323,
    createdat: 1730173606000,
    filetype: "comma separated value file",
    isfolder: false,
    name: "CIMB_SMART_YODA_202410291045.csv",
  },
];

var listFile = [];

var payload = {
  fileYoda: [
    {
      name: "CIMB_SMART_YODA_202410291045.csv",
    },
    {
      name: "CIMB_SMART_YODA_202410291046.csv",
    },
  ],
  path: "/INBOUND/ARCHIVE/",
};


var archiveNames = getListArchive.map(function(archive) {
  return archive.name;
});

var uniqueNames = {};
payload.fileYoda.forEach(function(file) {
  if (!uniqueNames[file.name]) {
    uniqueNames[file.name] = true;
    
    if (archiveNames.indexOf(file.name) === -1) {
      listFile.push(file);
    }
  }
});

console.log(listFile);