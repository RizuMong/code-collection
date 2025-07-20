var request = {
  update:
    "List Update:\n1. DATE OF BIRTH : -- => --\n2. LOCATION : -- => --\n3. ADDRESS : 123 => 123\n4. SUMMARY : BLA => BLA\n",
};

function isValidUpdate(update) {
  var lines = update.split("\n");

  for (var i = 0; i < lines.length; i++) {
    var parts = lines[i].split("=>");

    if (parts.length === 2) {
      var left = parts[0].trim();
      var right = parts[1].trim();

      if (left === "--" && right === "--" || left === right) {
        continue; 
      }
    }
    return true; 
  }
  return false; 
}

if (isValidUpdate(request.update)) {
  console.log("Updated Valid");
} else {
  console.log("Update Not Valid");
}
