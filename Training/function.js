// function validateEmail(email) {
//   if (email.indexOf("@") === -1) {
//     console.log("Email tidak valid");
//     return false;
//   }

//   console.log("Email valid");
//   return true;
// }

// // console.log(validateEmail("rizki.haddi@mekari.com"));
// console.log(validateEmail("rizki.haddimekari.com"));

var req = {
  company_id: 27414,
  created_at: 1752209965228,
  created_by: 181258,
  email: "twbpjs@mailinator.com",
  full_name: "Kiwi Mirae",
  // first_name: "W",
  // last_name: "Kiwi",
  id_employee: "oP8tDnRLUChVlejO",
  npk: "201062594",
  role_id: {
    id: "Z3NF8qRi9bF4MB7N",
    name: "Role",
  },
  updated_at: 1752574792722,
  updated_by: 178566,
};

if (!!req.full_name || !!req.first_name || !!req.last_name) {
  var first_name = req.first_name ? req.first_name : "";
  var last_name = req.last_name ? req.last_name : "";
  var full_name = (first_name && last_name)
    ? (first_name + " " + last_name)
    : req.full_name ? req.full_name : "";
}

// Termination Date
var terminationDate = null;

if (!!req.termination_date) {
  terminationDate = new Date(req.termination_date);
  terminationDate.setDate(terminationDate.getDate() + 1);
  terminationDate = terminationDate.getTime();
};

console.log(first_name);
console.log(last_name);
console.log(full_name);