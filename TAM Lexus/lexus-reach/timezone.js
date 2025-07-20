var payloadAPI = {
  unique_ticket_id: 55729027,
  schedule: "2024-09-12T00:10:00",
  ldms_reservation_id: "12345",
};

function convertToGMT7(dateString) {
  var date = new Date(dateString); // Buat objek Date dari string
  var offsetGMT7 = 7 * 60; // Offset untuk GMT+7 dalam menit

  // Dapatkan waktu UTC dalam milidetik, lalu tambahkan offset GMT+7
  var gmt7Time = new Date(date.getTime() + (offsetGMT7 * 60 * 1000));

  // Konversi ke ISO string tanpa offset (GMT+0)
  return gmt7Time.toISOString().replace('Z', '+07:00');
};

console.log(convertToGMT7(payloadAPI.schedule));