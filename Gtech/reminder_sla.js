var getReminderSettings = {
  application_name: "HR",
  company_id: 32982,
  created_at: 1760066807005,
  created_by: 22,
  detail_aging: [
    { aging: 14 },
    { aging: 7 },
    { aging: 3 },
    { aging: 2 },
    { aging: 1 },
  ],
  id: "CmlDEl2SgrPi",
  ids: "CmlDEl2SgrPi",
  updated_at: 1760066807005,
  updated_by: 22,
};

var getLogAPI = {
  data: [
    {
      approver: "pristiwan.akbar@mekari.com",
      date: 1759293645000, // 1 oKtober 2025
      id_log: "123443fds00",
      id_parent: "fdsafdsarwe00",
      note: "",
      status: "Submitted",
    },
    {
      approver: "delisimarmata@gmail.com",
      date: 1761540045000, // 27 Oktober 2025 harusnya masuk layer aging ke 2 karena 14 + 7 + 3 + 2 = 26
      id_log: "123443fds10",
      id_parent: "fdsafdsarwe10",
      note: "",
      status: "Waiting for Approval",
    },
    {
      approver: "delisimarmata@gmail.com",
      date: 1760045201000,
      id_log: "123443fds20",
      id_parent: "fdsafdsarwe20",
      note: "",
      status: "Waiting",
    },
  ],
  dataCount: 3,
};

var getLogs = [ // datanya cuman 1
  {
    aging: 3,
    application_name: "HR",
    to_email: "rizki.haddi@mekari.com",
    updated_at: 1760077967468,
  },
];

// fungsi log sederhana
function _log(msg) {
  console.log(msg);
}

// 🧠 normalize ke jam 00:00 agar hitungannya akurat antar tanggal
function normalizeToMidnight(date) {
  var d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

// 🧮 hitung selisih hari antar tanggal (full day)
function calculateAgeInDays(startDate, toDate) {
  var start = normalizeToMidnight(startDate);
  var end = normalizeToMidnight(toDate);
  return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
}

// --- MAIN LOGIC ---
var result = [];
var dataAging = getReminderSettings.detail_aging
  .map(function (x) {
    return x.aging;
  })
  .sort(function (a, b) {
    return b - a;
  });

// cari tanggal acuan (Submitted / Approved)
var dataApproved = getLogAPI.data
  .filter(function (log) {
    return log.status === "Data Approved";
  })
  .sort(function (a, b) {
    return b.date - a.date;
  });

var comparisonEntry = null;
if (dataApproved.length > 0) {
  comparisonEntry = dataApproved[0].date;
} else {
  var submitted = getLogAPI.data
    .filter(function (log) {
      return log.status === "Submitted";
    })
    .sort(function (a, b) {
      return b.date - a.date;
    });
  if (submitted.length > 0) {
    comparisonEntry = submitted[0].date;
  }
}

// ambil tanggal "now" dari Waiting for Approval (paling baru)
var waitingApprovers = getLogAPI.data.filter(function (log) {
  return log.status === "Waiting for Approval";
});

var now = null;
if (waitingApprovers.length > 0) {
  now = waitingApprovers
    .sort(function (a, b) {
      return b.date - a.date;
    })[0].date;
}

if (comparisonEntry && now) {
  if (getLogs.length === 0) {
    // belum pernah kirim reminder
    var firstAging = dataAging[0];
    var diffDays = calculateAgeInDays(comparisonEntry, now);
    _log("diffDays: " + diffDays + " >= " + firstAging);
    if (diffDays >= firstAging) {
      for (var i = 0; i < waitingApprovers.length; i++) {
        result.push({
          to_email: waitingApprovers[i].approver,
          aging: firstAging,
        });
      }
    }
  } else {
    // sudah pernah kirim reminder
    var latestLog = getLogs.sort(function (a, b) {
      return b.aging - a.aging;
    })[0];
    var latestAging = latestLog.aging;

    var indexLatest = dataAging.indexOf(latestAging);
    var nextAging = dataAging[indexLatest + 1] || latestAging;

    // total kumulatif aging dari awal hingga nextAging
    var totalAging = 0;
    for (var k = 0; k <= indexLatest + 1 && k < dataAging.length; k++) {
      totalAging += dataAging[k];
    }

    var diffDaysFromStart = calculateAgeInDays(comparisonEntry, now);
    _log("diffDaysFromStart: " + diffDaysFromStart + " >= totalAging: " + totalAging);

    if (diffDaysFromStart >= totalAging) {
      for (var j = 0; j < waitingApprovers.length; j++) {
        result.push({
          to_email: waitingApprovers[j].approver,
          aging: nextAging,
        });
      }
    }
  }
}

_log("Result:");
console.log(result);

// 1. buat kalau getLogs kosong maka pake getReminderSettings.detail_aging.aging paling besar nanti di banding dengan data comparisonEntry nya sama gak aging nya
// 2. kalau getLogs ada isinya, maka aging nya di hitung dari total aging paling gede ke paling gede kedua dan seterusnya

// contoh kalau ada getLogs kosong dan submitted nya tgl 1 oktober 2025 maka di send di tgl 14 karena masuk aging 14
// ada getLogs nya dan yang paling gede itu 14 maka di hitung dari 14 ke 7 dst
// kalau ada getLogs nya dan yang paling gede itu 7 maka di hitung dari 7 ke 3 dst
// kalau ada getLogs nya dan yang paling gede itu 1 maka di hitung dari 1 ke 1 dst


// buat layer ke 7 itu masuknya kalau dari tgl dia submit or waiting for approval itu udah lewat 14 hari + 7 (aging selanjutnya)