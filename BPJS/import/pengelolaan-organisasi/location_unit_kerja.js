var req = {
  code: "W21X",
  company_id: 27414,
  created_at: 1757494373732,
  created_by: 178566,
  id: "8OGAnr9HR",
  id_import: "8OGAnr9HR",
  import_id: "uDMA799Ng",
//   location_address: "Jl. Citra Raya Cikupa",
//   location_latitude: "-6.267.513.699.999.990",
//   location_longitude: "106.525.155",
  location_address: "7RJ8+V99, Muara Jaya, Caringin, Bogor Regency, West Java 16730, Indonesia",
  location_latitude: "-6.7178695",
  location_longitude: "106.8159365",
  radius: 200,
  time_zone: "WITA",
  updated_at: 1757494373732,
  updated_by: 178566,
};

// Don't have location
// var getUnitKerja = {
//   kode: "W21X",
//   nama: "KACAB SINJAI PERSATUAN RAYA 5",
// };


// Have location
var getUnitKerja = {
  kode: "W21X",
  location_details: [
    {
      location: {
        address:
          "7RJ8+V99, Muara Jaya, Caringin, Bogor Regency, West Java 16730, Indonesia",
        latitude: -6.7178695,
        longitude: 106.8159365,
      },
      radius: 100,
      timezone: "WIB",
    },
  ],
  nama: "KACAB SINJAI PERSATUAN RAYA 5",
};

function normalizeCoordinate(value) {
  if (!value) return null;
  // Ubah ke string dulu
  var str = String(value).trim();

  // Hilangkan spasi
  str = str.replace(/\s+/g, '');

  // Jika ada lebih dari 1 titik, hanya biarkan titik pertama → sisanya gabungkan
  var parts = str.split('.');
  if (parts.length > 2) {
    str = parts.shift() + '.' + parts.join('');
  }

  // Convert ke float
  var num = parseFloat(str);

  return isNaN(num) ? null : num;
}

function createLocation(req) {
  return {
    location: {
      address: req.location_address,
      latitude: normalizeCoordinate(req.location_latitude),
      longitude: normalizeCoordinate(req.location_longitude)
    },
    radius: req.radius,
    timezone: req.time_zone
  };
}

function isSameLocation(loc, req) {
  return (
    loc.location.address === req.location_address &&
    normalizeCoordinate(loc.location.latitude) === normalizeCoordinate(req.location_latitude) &&
    normalizeCoordinate(loc.location.longitude) === normalizeCoordinate(req.location_longitude)
  );
}

var message = [];
var location_details = [];

if (Object.keys(getUnitKerja).length === 0) {
  message.push("Unit Kerja tidak ditemukan atau tidak aktif");
} else {
  location_details = getUnitKerja.location_details ? getUnitKerja.location_details : [];

  if (location_details.length > 0) {
    var foundIndex = -1;
    for (var i = 0; i < location_details.length; i++) {
      if (isSameLocation(location_details[i], req)) {
        foundIndex = i;
        break;
      }
    }

    if (foundIndex === -1) {
      // Tidak ditemukan → tambah lokasi baru
      location_details.push(createLocation(req));
    } else {
      // Lokasi sudah ada → cek radius & timezone
      var existing = location_details[foundIndex];
      if (existing.radius !== req.radius || existing.timezone !== req.time_zone) {
        existing.radius = req.radius;
        existing.timezone = req.time_zone;
      }
      // kalau semua sama → abaikan (tidak perlu update)
    }
  } else {
    // Jika kosong → langsung tambah lokasi pertama
    location_details.push(createLocation(req));
  }
}


console.log(location_details);