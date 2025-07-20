var list = [
  {
    Code: "ID",
    Name: "Indonesia",
  },
  {
    Code: "ZW",
    Name: "Zimbabwe",
  },
];

var req = {
  name: {
    id: "FJWsggZ4R",
    name: "Indonesia",
  },
};

var code = "";
var country = req.name.name; 

if (country.indexOf("(") !== -1 && country.lastIndexOf(")") !== -1) {
  var text_remove = country.substring(country.indexOf("(") + 1, country.lastIndexOf(")"));
  country = country.replace("(" + text_remove + ")", "").trim();
}


for (var i = 0; i < list.length; i++) {
  if (list[i].Name.toLowerCase() === country.toLowerCase()) {
    code = list[i].Code;
    break; 
  }
}

console.log(code);

// res = code;
