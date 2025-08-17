function _log(msg) {
  console.log(msg);
}

var getData = [
  {
    _id: {
      id: "qT7KFff3F1yz",
      name: "QNA WITH C LEVEL",
    },
    created_at: 1754502783594,
    id_activity: "bqWULKUZan0G",
    mission_id: {
      id: "qT7KFff3F1yz",
      name: "QNA WITH C LEVEL",
    },
    total_point: 0,
  },
  {
    _id: {
      id: "0dOAUjzTmtQx",
      name: "LOGIN EVENT",
    },
    created_at: 1754502783487,
    id_activity: "s6HEhwE8PjQc",
    mission_id: {
      id: "0dOAUjzTmtQx",
      name: "LOGIN EVENT",
    },
    total_point: 2,
  },
  {
    _id: {
      id: "UKQDvSZL7WjD",
      name: "MEKARI OFFICELESS",
    },
    created_at: 1754502783564,
    id_activity: "UKQDPcDLOWjZ",
    mission_id: {
      id: "UKQDvSZL7WjD",
      name: "MEKARI OFFICELESS",
    },
    total_point: 0,
  },
];

var summary = [];

getData.forEach(function (item) {
  var found = null;

  summary.forEach(function (entry) {
    if (entry.id === item.mission_id.id) {
      found = entry;
    }
  });

  if (found) {
    found.total_point += item.total_point;
  }

  if (!found) {
    summary.push({
      // id: item.mission_id.id,
      name: item.mission_id.name,
      total_point: item.total_point
    });
  }
});


console.log(summary);
