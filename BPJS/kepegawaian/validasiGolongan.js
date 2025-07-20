var req = {
  body: {
    id_golongan: "jF3P64ATLhrhwquo",
    jenis_golongan: "jenis",
    maksimal_golongan: "C",
    minimal_golongan: "X",
    pendidikan: "S1",
  },
};

// Default Response
var message = "Data posted successfully";
var statusCode = 200;
var error = false;

var REGEX_NAME = /^[a-zA-Z0-9 & () .]+$/;
var REGEX_ROMAN = /^[IVXLC]{1,10}$/;

if (!REGEX_NAME.test(req.body.jenis_golongan)) {
    error = true;
    statusCode = 401;
    message = "Failed to save data. Jenis golongan must not contain special characters."
};

if (!!req.body.maksimal_golongan) {
  if (!REGEX_ROMAN.test(req.body.maksimal_golongan)) {
    error = true;
    statusCode = 401;
    message = "Failed to save data. Maksimal golongan must only contain Roman numerals and be up to 10 characters long.";
  }
}

if (!!req.body.minimal_golongan) {
  if (!REGEX_ROMAN.test(req.body.minimal_golongan)) {
    error = true;
    statusCode = 401;
    message = "Failed to save data. Minimal golongan must only contain Roman numerals and be up to 10 characters long.";
  }
}

var res = {
  "error": error,
  "message": message,
  "statusCode": statusCode,
  "data": []
};

console.log(res);