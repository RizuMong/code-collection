var req = {
  "first_name": "Rizki",
  "full_name": "Rizki Test Isi",
  "last_name": "Test",
};

if (!!req.full_name) {
  var fullName = req.full_name.trim();
  var nameParts = fullName ? fullName.split(" ") : [req.first_name, req.last_name];

  var first_name = req.first_name;
  var last_name = req.last_name;
  var full_name = first_name + " " + last_name;
};

console.log(full_name);