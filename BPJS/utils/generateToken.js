
var TOKEN_EXPIRATION_SECONDS = 1800; // 30 menit karena belum dapet expired time dari akunnya berapa

function calculateExpirationTimestamp(customExpirationSeconds) {
  var now = Date.now();
  var expirationOffset = (customExpirationSeconds !== undefined ? customExpirationSeconds : TOKEN_EXPIRATION_SECONDS) * 1000;
  return now + expirationOffset;
}

function formatTimestampToDateTime(timestampMs) {
  var date = new Date(timestampMs);
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var seconds = ('0' + date.getSeconds()).slice(-2);
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
};

var defaultExpirationMs = calculateExpirationTimestamp();
var formattedDefaultExpiration = formatTimestampToDateTime(defaultExpirationMs);
console.log('Waktu Kadaluarsa Default (ms):', defaultExpirationMs);
console.log('Waktu Kadaluarsa Default (format):', formattedDefaultExpiration);