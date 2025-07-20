var req = {
  company_id: 27414,
  created_at: 1752072108822,
  created_by: 178566,
  employee_ids: [
    {
      id: "QRrPQSHnu46sA07d",
      name: "100642081 - ariesty integration",
    },
  ],
  end_date: 1752339600000,
  ids: "rvpTBqbHZKMsCZ4W",
  name: "Laporan Kehadiran",
  progres_bar: 0,
  start_date: 1751994000000,
  status: "PROSES",
  updated_at: 1752072108822,
  updated_by: 178566,
};

function getDatePartsInRange(startTimestamp, endTimestamp) {
  var result = {
      day: [],
      month: [],
      year: []
  };

  var currentDate = new Date(startTimestamp);
  var endDate = new Date(endTimestamp);

  while (currentDate <= endDate) {
      var day = currentDate.getDate();
      var month = currentDate.getMonth() + 1;
      var year = currentDate.getFullYear();

      if (result.day.indexOf(day) === -1) {
          result.day.push(day);
      }
      if (result.month.indexOf(month) === -1) {
          result.month.push(month);
      }
      if (result.year.indexOf(year) === -1) {
          result.year.push(year);
      }

      currentDate.setDate(currentDate.getDate() + 1);
  }

  return result;
};

function _log(msg) {
  console.log(msg);
};

var output = getDatePartsInRange(req.start_date, req.end_date);
_log(output);

