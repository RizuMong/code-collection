var sourceName = "Soekarno Hatta (Jakarta - CGK)";
var destinationName = "Juanda (Surabaya - SUB)";

function extractAirportCode(fullName) {
  // Ambil bagian setelah tanda "-" dan sebelum tanda ")" jika ada
  var parts = fullName.split("-");
  if (parts.length > 1) {
    var airportCode = parts[1].trim(); // Ambil bagian setelah "-"
    return airportCode.replace(")", "").trim(); // Hilangkan tanda ")" jika ada
  }
  return ""; // Jika format tidak sesuai, kembalikan string kosong
}

var sourceAirport = extractAirportCode(destinationName);
console.log(sourceAirport);