var req = {
  body: {
    npwp: "123",
  }
};

var NPWP_REGEX = /^\d{16}$/;

var message = "";

if (!NPWP_REGEX.test(req.body.npwp)) {
  message = "NPWP tidak 16 digit";
};

console.log(message);