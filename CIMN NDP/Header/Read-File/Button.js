var allInboundPendingFiles = [
  {
    ByteSize: 72,
    CreatedAt: 1737085081000,
    FileType: "comma separated value file",
    IsFolder: false,
    Name: "NDPSMART_20250117_100130.csv",
  },
  {
    ByteSize: 72,
    CreatedAt: 1737085081000,
    FileType: "comma separated value file",
    IsFolder: false,
    Name: "NDPSMART_VC_20250117_100130.csv",
  },
];

var req = {
  body: {
    // type: "All", // All files
    type: "Vendor-Create", // NDPSMART_VC
    // type: "Vendor-Info-Update", // NDPSMART_VI
    // type: "Vendor-Address-Update", // NDPSMART_VA
    // type: "Vendor-Bank-Update", // NDPSMART_VB
    // type: "Bank-Master", // NDPSMART_BM, NDPSMART_BU
  },
};

var typeFile = req.body.type;
var fileNameMapping = { 
  "Vendor-Create": /^NDPSMART_VC/,
  "Vendor-Info-Update": /^NDPSMART_VI/,
  "Vendor-Address-Update": /^NDPSMART_VA/,
  "Vendor-Bank-Update": /^NDPSMART_VB/,
  "Bank-Master": /^(NDPSMART_BM|NDPSMART_BU)/,
};
var filesWithIdx = [];

allInboundPendingFiles.forEach(function (item, index) {
  if (typeFile === "All" && /^NDPSMART_/.test(item.Name)) {
    filesWithIdx.push({ idx: index, file: item });
    return;
  };

  var pattern = fileNameMapping[typeFile];
  if (pattern && pattern.test(item.Name)) {
    filesWithIdx.push({ idx: index, file: item });
  };
});


console.log(filesWithIdx);
