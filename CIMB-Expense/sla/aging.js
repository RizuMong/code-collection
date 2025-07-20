var payload = {
  aging: [
    {
      aging: 3,
    },
    {
      aging: 5,
    },
    {
      aging: 7,
    },
  ],
};

var getLogAPI = {
  data: [
    {
      approver: "wahyu.lianto@cimbniaga.co.id",
      date: 1730712812000,
      id_log: "123443fds00",
      id_parent: "fdsafdsarwe00",
      note: "",
      status: "Submitted",
      user_company_id: 187482,
    },
    {
      approver: "maya.andini@cimbniaga.co.id",
      date: 1730919841000,
      id_log: "123443fds10",
      id_parent: "fdsafdsarwe10",
      note: "",
      status: "Waiting for Approval",
      user_company_id: 177382,
    },
    {
      approver: "rany.sitohang@cimbniaga.co.id",
      date: 1730919841000,
      id_log: "123443fds11",
      id_parent: "fdsafdsarwe11",
      note: "",
      status: "Waiting for Approval",
      user_company_id: 178388,
    },
    {
      approver: "wawanr@cimbniaga.co.id",
      date: 1730919841000,
      id_log: "123443fds12",
      id_parent: "fdsafdsarwe12",
      note: "",
      status: "Waiting for Approval",
      user_company_id: 186085,
    },
    {
      approver: "wawanr@cimbniaga.co.id",
      date: 1730919841000,
      id_log: "123443fds13",
      id_parent: "fdsafdsarwe13",
      note: "",
      status: "Waiting for Approval",
      user_company_id: 186085,
    },
    {
      approver: "winda.anggraini@cimbniaga.co.id",
      date: 1730919841000,
      id_log: "123443fds20",
      id_parent: "fdsafdsarwe20",
      note: "",
      status: "Waiting",
      user_company_id: 186901,
    },
    {
      approver: "achiro.operata@cimbniaga.co.id",
      date: 1730919841000,
      id_log: "123443fds21",
      id_parent: "fdsafdsarwe21",
      note: "",
      status: "Waiting",
      user_company_id: 175148,
    },
    {
      approver: "widodo.suryadi@cimbniaga.co.id",
      date: 1730919841000,
      id_log: "123443fds22",
      id_parent: "fdsafdsarwe22",
      note: "",
      status: "Waiting",
      user_company_id: 186142,
    },
  ],
  dataCount: 8,
};

function calculateAgeInDays(startDate, toDate) {
  var timeDifference = toDate - startDate;
  var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

var result = [];

var dataApproved = getLogAPI.data
  .filter(function (log) {
    return log.status === "Data Approved";
  })
  .sort(function (a, b) {
    return b.date - a.date;
  });

var comparisonEntry;

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

if (comparisonEntry) {
  getLogAPI.data.forEach(function (log) {
    if (log.status === "Waiting for Approval") {
      var aging = calculateAgeInDays(comparisonEntry, log.date);
      var selectedAging;

      for (var i = 0; i < payload.aging.length; i++) {
        var agingDays = payload.aging[i].aging;

        if (agingDays <= aging) {
          selectedAging = agingDays;
        }
      }

      if (selectedAging) {
        result.push({
          to_email: log.approver,
          user_company_id: log.user_company_id,
          aging: selectedAging,
        });
      }
    }
  });
}

console.log(result);
// console.log(item);
