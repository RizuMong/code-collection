var req = {
  filename: "NDPSMART_BM_O_20250122556645.csv",
};

var REGEX_FILE_NAME_SMART_BANK = /^NDPSMART_BM_O_/;

var fileName = req.filename;
var fileNameValidity = REGEX_FILE_NAME_SMART_BANK.test(fileName);

console.log(fileNameValidity);
