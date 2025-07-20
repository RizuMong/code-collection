var req = {
  body: {
    nama: "John123",
    email: "john@example",
  },
};


var REGEX_NAME = /^[a-zA-Z\s]+$/;
var REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!REGEX_NAME.test(req.body.nama)) {
  console.log("Nama tidak valid. Hanya boleh huruf dan spasi.");
}

if (!REGEX_EMAIL.test(req.body.email)) {
  console.log("Email tidak valid. Harap masukkan format email yang benar.");
}