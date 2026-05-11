var master_projects = [
  { "name": "PT Injourney Aviasi Pariwisata Indonesia" },
  { "name": "PT CIMB Niaga" },
  { "name": "CIMB - Accrue Syariah" },
  { "name":  "CIMB - Internal Pentest" }
];


function getWords(name) {
  var ignoreWords = {
    "PT": true,
    "CV": true,
    "TBK": true,
    "PERSERO": true
  };

  var rawWords = name.toUpperCase().split(" ");
  var words = [];

  for (var i = 0; i < rawWords.length; i++) {
    var clean = rawWords[i].replace(/[^A-Z]/g, "");
    if (clean && !ignoreWords[clean]) {
      words.push(clean);
    }
  }

  return words;
}

function generateUniqueCode(words, usedCodes) {
  var code = "";
  var i;

  // 1. coba dari tiap kata (4 huruf)
  for (i = 0; i < words.length; i++) {
    code = words[i].substring(0, 4);
    if (!usedCodes[code]) return code;
  }

  // 2. combine 2 kata (2+2 huruf)
  for (i = 0; i < words.length - 1; i++) {
    code = words[i].substring(0, 2) + words[i + 1].substring(0, 2);
    if (!usedCodes[code]) return code;
  }

  // 3. combine 3 kata (1+1+2)
  if (words.length >= 3) {
    code =
      words[0].charAt(0) +
      words[1].charAt(0) +
      words[2].substring(0, 2);

    if (!usedCodes[code]) return code;
  }

  return "UNKN"; // fallback
}

var result = [];
var usedCodes = {};

for (var i = 0; i < master_projects.length; i++) {
  var item = master_projects[i];

  var words = getWords(item.name);
  var code = generateUniqueCode(words, usedCodes);

  usedCodes[code] = true;

  result.push({
    name: item.name,
    code: code
  });
}

console.log(result);