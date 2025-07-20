function toRadian(degree) {
  return degree * (Math.PI / 180);
}

function convertMeterToKm(meter) {
  return meter / 1000;
}

function getDistanceInKm(lat1, lon1, lat2, lon2) {
  var R = 6371;
  var dLat = toRadian(lat2 - lat1);
  var dLon = toRadian(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadian(lat1)) *
      Math.cos(toRadian(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function isLocationNearby(targetLat, targetLng, location, radiusInKm) {
  var distance = getDistanceInKm(
    targetLat,
    targetLng,
    location.latitude,
    location.longitude
  );
  location.distance = distance;
  return distance <= radiusInKm;
}

// Lokasi Unit Kerja
var targetLat = -6.9206246;
var targetLng = 106.938512;
var radiusMeter = 500; // 500 meter

// Lokasi yang dicek
var attendanceLocation = {
  name: "Toko A",
  latitude: -6.2091883,
  longitude: 106.8204898,
};

var convertRadius = convertMeterToKm(radiusMeter);
var isNearby = isLocationNearby(
  targetLat,
  targetLng,
  attendanceLocation,
  convertRadius
);

if (isNearby) {
  console.log(
    attendanceLocation.name +
      " berada dalam radius " +
      radiusMeter +
      " meter (Jarak: " +
      (attendanceLocation.distance * 1000).toFixed(1) +
      " meter)"
  );
} else {
  console.log(
    attendanceLocation.name +
      " berada di luar radius " +
      radiusMeter +
      " meter (Jarak: " +
      (attendanceLocation.distance * 1000).toFixed(1) +
      " meter)"
  );
}
