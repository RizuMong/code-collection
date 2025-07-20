var req = {
  body: {
    nama: "123",
    nama_pemotong_pajak: "4134312",
    npwp: "12345667891011234",
    npwp_pemotong_pajak: "431431",
    provinsi: "2234124",
  },
};

// Default Response
var message = "Data posted successfully";
var statusCode = 200;
var error = false;

var NPWP_REGEX = /^\d{16}$/;

if (!NPWP_REGEX.test(req.body.npwp)) {
    error = true;
    statusCode = 401;
    message = "Failed to save data. NPWP must be exactly 16 digits."
};

if (req.body.npwp_pemotong_pajak && !NPWP_REGEX.test(req.body.npwp_pemotong_pajak)) {
    error = true;
    statusCode = 401;
    message = "Failed to save data. NPWP Pemotong Pajak must be exactly 16 digits.";
};

console.log(message);
console.log(error);