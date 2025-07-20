function decrypt(str, key, salt) {
  var parts = salt.split(":");
  var startIndex = parseInt(parts[0], 10);
  var lengthToCut = parseInt(parts[1], 10);

  var before = str.substring(0, startIndex);
  var after = str.substring(startIndex + lengthToCut);

  var digest = before + after;
  var decryptedData = _aes256Decrypt(key, digest)
  return decryptedData
}


var key = "12345673331234567893323433389012"
var data = "9fa81d235eee5f0ebf34a17y8gc3civoduf367069srvewngmkas7qo75pkwql2w4suy0cqo1dca0ea051c9ee9765cc0f6ec499c5770e05d4b7abd2145d8a099aaa18839";
var salt = "22:51"

var decrypted = decrypt(data, key, salt)

console.log(decrypted);