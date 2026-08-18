var limit = 999999;
var sort = { created_at: -1 };
var sortUser = { name: 1 };

_log({
  start_date: start_date,
  end_date: end_date
});

// Declare
var excluded_billable_types = ["PERSONAL_LEAVE", "SICK_LEAVE"];
var statusTasks = [
  "Backlog",
  "In Progress",
  "Done",
  "Hold"
];

// Get User
var filterUser = {
  _filter_version: 2,
  where_is_and: {
    "data_state": "ACTIVE",
    "organization_id.name": organization_name
  },
  where_in_and: {
    "job_position_id.name": job_positions
  }
};

if (job_position_id) {
  filterUser = {
    _filter_version: 2,
    where_is_and: {
      "data_state": "ACTIVE",
      "job_position_id.id": job_position_id
    }
  };
}

if (user_id.length > 0) {
  filterUser = {
    _filter_version: 2,
    where_is_and: {
      "data_state": "ACTIVE"
    },
    where_in_and: {
      ids: user_id
    }
  };
};

if (pm_id.length > 0) {
  filterUser = {
    _filter_version: 2,
    where_is_and: {
      "data_state": "ACTIVE"
    },
    where_in_and: {
      ids: pm_member_ids
    }
  };
};

_log({ filterUser: filterUser });

var get_users = _findRecords("vlPp0tZmFzut", 1, 99, sortUser, filterUser, "and") || [];

// Filter user based on Resign n Join Date
var filtered_users = [];

for (var i = 0; i < get_users.length; i++) {
  var user = get_users[i];
  var resignDate = user.resign_date;

  if (resignDate) {
    var d = new Date(resignDate);
    d.setHours(23, 59, 59, 999);
    resignDate = d.getTime();
  };

  if (
    user.join_date <= end_date &&
    (!user.resign_date || resignDate >= end_date)
  ) {
    filtered_users.push(user);
  }
};

_log({
  get_users: get_users.length,
  // get_users: get_users
});

var hasOtherFilter = (
  sprint_year ||
  sprint_number
);

// Filter task
var filterTask = {
  _filter_version: 2,
};

if (!hasOtherFilter && start_date && end_date) {
  filterTask.where_gt_and = {
    estimate_start_date: start_date - 1
  };

  filterTask.where_lt_and = {
    estimate_end_date: end_date
  };
}

var where = {};
var whereIn = {};

whereIn["status_id.name"] = statusTasks; // default filter task

if (sprint_number && sprint_year) {
  where.sprint_number = sprint_number;
  where.sprint_year = sprint_year;
};

if (user_id.length > 0) {
  whereIn["assignee_id.id"] = user_id;
};

if (Object.keys(where).length > 0) {
  filterTask.where_is_and = where;
};

if (Object.keys(whereIn).length > 0) {
  filterTask.where_in_and = whereIn;
};

var get_datas = _findRecords("xDzeEsGoeC0e", 1, limit, sort, filterTask, "and") || [];

// filter task non project if leave
get_datas = _.reject(get_datas, function (data) {
  return _.contains(excluded_billable_types, data.task_billable_type);
});

_log({
  filterTask: filterTask
});

// Holiday - Non Recurring
var filterNonRecHoliday = {
  _filter_version: 2,
  where_is_and: {
    is_active: "YES",
    is_recurring: "NO"
  },
  where_gt_and: {
    holiday_date: start_date - 1
  },
  where_lt_and: {
    holiday_date: end_date + 1
  }
};

// Holiday - Recurring
var filterRecHoliday = {
  _filter_version: 2,
  where_is_and: {
    is_active: "YES",
    is_recurring: "YES"
  },
  where_gt_and: {
    holiday_date: start_date - 1
  },
  where_lt_and: {
    holiday_date: end_date + 1
  }
};

var get_non_recurring_holiday = _findRecords("jFLEuRGwLpSV", 1, limit, sort, filterNonRecHoliday, "and") || [];
var get_recurring_holiday = _findRecords("jFLEuRGwLpSV", 1, limit, sort, filterRecHoliday, "and") || [];

// Calculate Holiday Hours
var holiday_manhours = 0;
var selectedYear = new Date(start_date).getFullYear();

for (var i = 0; i < get_recurring_holiday.length; i++) {
  if (isHolidayValid(get_recurring_holiday[i], selectedYear)) {
    holiday_manhours += 8;
  }
}

for (var j = 0; j < get_non_recurring_holiday.length; j++) {
  if (isHolidayValid(get_non_recurring_holiday[j], selectedYear)) {
    holiday_manhours += 8;
  }
}

_log({
  holiday_manhours: holiday_manhours
});

// Calculate Working Hours
var working_hours = 0;

var start = new Date(start_date);
var end = new Date(end_date);

start.setHours(0, 0, 0, 0);
end.setHours(0, 0, 0, 0);

while (start <= end) {
  var day = start.getDay();

  if (day !== 0 && day !== 6) {
    working_hours += 8;
  }

  start.setDate(start.getDate() + 1);
}

var base_capacity = working_hours - holiday_manhours;

_log({
  working_hours: working_hours,
  base_capacity: base_capacity
});

// Group User
var grouped = {};

for (var u = 0; u < filtered_users.length; u++) {
  var user = filtered_users[u];

  grouped[user.id] = {
    user_id: {
      id: user.id,
      name: user.name
    },
    job_position_id: user.job_position_id || {},
    avatar_url: user.avatar_url || "",
    task_ids: [],
    capacity_manhours: 0,
    leave_manhours: 0,
    planned_manhours: 0,
    actual_manhours: 0,
    available_manhours: 0,
    allocation_percentage: 0,
    status_summary: {
      "Backlog": 0,
      "In Progress": 0,
      "Done": 0,
      "Hold": 0
    },
    status: ""
  };
}

// Inject Task
for (var x = 0; x < get_datas.length; x++) {
  var item = get_datas[x];

  var assigneeId = (
    item.assignee_id &&
    item.assignee_id.id
  )
    ? item.assignee_id.id
    : "UNASSIGNED";

  // Create UNASSIGNED only if needed
  if (
    assigneeId === "UNASSIGNED" &&
    !grouped.UNASSIGNED
  ) {
    grouped.UNASSIGNED = {
      user_id: {
        id: "UNASSIGNED",
        name: "Unassigned Task",
      },
      job_position_id: {
        id: "UNASSIGNED",
        name: "Unassigned Task",
        group: "Unassigned Task",
        level: 1
      },
      avatar_url: "",
      task_ids: [],
      capacity_manhours: 0,
      leave_manhours: 0,
      planned_manhours: 0,
      actual_manhours: 0,
      available_manhours: 0,
      allocation_percentage: 0,
      status: "",
      status_summary: {
        "Backlog": 0,
        "In Progress": 0,
        "Done": 0,
        "Hold": 0
      },
    };
  }

  if (!grouped[assigneeId]) {
    continue;
  }

  if (item.id) {
    grouped[assigneeId].task_ids.push(item.id);

    if (item.status_id && item.status_id.name) {
      grouped[assigneeId].status_summary[item.status_id.name]++
    }
  }

  grouped[assigneeId].planned_manhours += item.estimate_man_hour || 0;
  grouped[assigneeId].actual_manhours += item.actual_man_hour || 0;
}

// Summary
var summary = {
  planned_mandays: 0,
  assigned_mandays: 0,
  actual_mandays: 0,
  actual_utilization_percentage: 0
};

// Final Result
var result = [];

for (var key in grouped) {
  if (!grouped.hasOwnProperty(key)) {
    continue;
  }

  var obj = grouped[key];

  var leave_manhours = 0;

  if (key !== "UNASSIGNED") {
    leave_manhours = _hitFunction("leave_manhours", {
      user_id: obj.user_id,
      start_date: start_date,
      end_date: end_date,
      sprint_year: sprint_year,
      sprint_number: sprint_number
    }) || 0;
  }

  obj.leave_manhours = leave_manhours;

  // Reduce capacity because leave
  obj.capacity_manhours = base_capacity - leave_manhours;

  if (obj.capacity_manhours < 0) {
    obj.capacity_manhours = 0;
  }

  obj.available_manhours =
    obj.capacity_manhours -
    obj.planned_manhours;

  obj.allocation_percentage =
    obj.capacity_manhours > 0
      ? parseFloat(
        (
          (obj.planned_manhours / obj.capacity_manhours) * 100
        ).toFixed(2)
      )
      : 0;

  if (key === "UNASSIGNED") {
    obj.status = "Unassigned";
  } else if (obj.planned_manhours < obj.capacity_manhours) {
    obj.status = "Underutilized";
  } else if (obj.planned_manhours > obj.capacity_manhours) {
    obj.status = "Overutilized";
  } else {
    obj.status = "Utilized";
  }

  // Summary accumulator
  summary.planned_mandays += obj.capacity_manhours;
  summary.assigned_mandays += obj.planned_manhours;
  summary.actual_mandays += obj.actual_manhours;

  result.push(obj);
}

// Convert to Mandays
summary.planned_mandays = parseFloat(
  (summary.planned_mandays / 8).toFixed(2)
);

summary.assigned_mandays = parseFloat(
  (summary.assigned_mandays / 8).toFixed(2)
);

summary.actual_mandays = parseFloat(
  (summary.actual_mandays / 8).toFixed(2)
);

// Actual Utilization %
summary.actual_utilization_percentage =
  summary.planned_mandays > 0
    ? parseFloat(
      (
        (summary.actual_mandays / summary.assigned_mandays) * 100
      ).toFixed(2)
    )
    : 0;

// Response
res = {
  code: 200,
  error: false,
  data: {
    summary: summary,
    items: result
  },
  message: "Successfully get resource planning"
};

// _log(res);