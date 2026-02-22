var limit = 999999;
var sort = { created_at: -1 };

// Get User - All Employee
var filterUser = {
  _filter_version: 2,
  where_is_and: {
    data_state: "ACTIVE",
  }
};

var get_users = _findRecords("vlPp0tZmFzut", 1, 100, sort, filterUser, "and") || []; // user
_log({ get_users: get_users[0] });

// Get Tasks
var filter = {
  _filter_version: 2,
  where_gt_and: {
    estimate_start_date: start_date - 1
  },
  where_lt_and: {
    estimate_end_date: end_date
  },
};

if (sprint_id) {
  var filter = {
    _filter_version: 2,
    where_gte_and: {
      estimate_start_date: start_date - 1
    },
    where_lte_and: {
      estimate_end_date: end_date
    },
    where_is_and: {
      "sprint_id.id": sprint_id
    }
  };
};

var get_datas = _findRecords("xDzeEsGoeC0e", 1, limit, sort, filter, "and") || []; // task

_log({
  // get_datas: get_datas,
  filter: filter,
});

// master holiday - Non-Recurring Holiday
var filterNonRecHoliday = {
  _filter_version: 2,
  where_is_and: {
    is_active: "YES",
    is_recurring: "NO",
  },
  where_gt_and: {
    holiday_date: start_date - 1
  },
  where_lt_and: {
    holiday_date: end_date
  },
};

// Recurring Holiday yang Valid Tahun Itu
var filterRecHoliday = {
  _filter_version: 2,
  where_is_and: {
    is_active: "YES",
    is_recurring: "YES",
  },
  where_gt_and: {
    holiday_date: start_date - 1
  },
  where_lt_and: {
    holiday_date: end_date
  },
};

var get_non_recurring_holiday = _findRecords("jFLEuRGwLpSV", 1, limit, sort, filterNonRecHoliday, "and") || []; // master_holiday
var get_recurring_holiday = _findRecords("jFLEuRGwLpSV", 1, limit, sort, filterRecHoliday, "and") || []; // master_holiday

// holiday manhours
var holiday_manhours = 0;
var selectedYear = new Date(start_date).getFullYear();

// recurring holiday
for (var i = 0; i < get_recurring_holiday.length; i++) {
  var item = get_recurring_holiday[i];

  if (isHolidayValid(item, selectedYear)) {
    holiday_manhours += 8;
  }
}

// non-recurring holiday
for (var j = 0; j < get_non_recurring_holiday.length; j++) {
  var item2 = get_non_recurring_holiday[j];

  if (isHolidayValid(item2, selectedYear)) {
    holiday_manhours += 8;
  }
}

_log({
  filterNonRecHoliday: filterNonRecHoliday,
  filterRecHoliday: filterRecHoliday,
  holiday_manhours: holiday_manhours,
  // get_non_recurring_holiday: get_non_recurring_holiday,
  // get_recurring_holiday: get_recurring_holiday
});

// working hours
var working_hours = 0;

var start = new Date(start_date);
var end = new Date(end_date);
start.setHours(0, 0, 0, 0);
end.setHours(0, 0, 0, 0);

while (start <= end) {
  var day = start.getDay(); // 0 = Minggu, 6 = Sabtu

  if (day !== 0 && day !== 6) {
    working_hours += 8;
  }

  start.setDate(start.getDate() + 1);
};

// Assign and calculate
var grouped = {};

for (var i = 0; i < get_datas.length; i++) {
  var item = get_datas[i];
  var isUnassigned = !item.assignee_id || !item.assignee_id.id;

  var assigneeId = isUnassigned
    ? "UNASSIGNED"
    : item.assignee_id.id;

  // Job Position
  var job_position_id = null;
  if (item.assignee_id && item.assignee_id.id) {

    var filterJob = {
      _filter_version: 2,
      where_is_and: {
        ids: item.assignee_id.id
      },
    };

    var get_user = _findRecords("vlPp0tZmFzut", 1, 1, sort, filterJob, "and") || []; // user
    job_position_id = get_user[0].job_position_id;
  };

  if (!grouped[assigneeId]) {
    grouped[assigneeId] = {
      user_id: isUnassigned
        ? { id: "UNASSIGNED", name: "Unassigned Task" }
        : item.assignee_id,
      job_position_id: job_position_id,
      capacity_manhours: 0,
      leave_manhours: 0,
      planned_manhours: 0,
      actual_manhours: 0,
      available_manhours: 0,
      allocation_percentage: 0,
      status: ""
    };
  }

  grouped[assigneeId].planned_manhours += item.estimate_man_hour || 0;
  grouped[assigneeId].actual_manhours += item.actual_man_hour || 0;
}

var base_capacity = working_hours - holiday_manhours;
var result = [];

for (var key in grouped) {
  if (grouped.hasOwnProperty(key)) {
    var obj = grouped[key];

    // Capacity Employee
    var leave_manhours = 0;
    var capacity_manhours = 0;

    if (obj.user_id && obj.user_id.id !== "UNASSIGNED") {
      leave_manhours = _hitFunction("leave_manhours", {
        user_id: obj.user_id,
        start_date: start_date,
        end_date: end_date,
        sprint_id: sprint_id
      });
    };

    obj.leave_manhours = leave_manhours;
    obj.capacity_manhours = base_capacity - leave_manhours;
    obj.available_manhours = obj.capacity_manhours - obj.planned_manhours;

    obj.allocation_percentage = obj.capacity_manhours > 0
      ? parseFloat(((obj.planned_manhours / obj.capacity_manhours) * 100).toFixed(2))
      : 0;

    if (obj.planned_manhours < obj.capacity_manhours) {
      obj.status = "Underutilized";
    } else if (obj.planned_manhours > obj.capacity_manhours) {
      obj.status = "Overutilized";
    } else {
      obj.status = "Utilized";
    }

    result.push(obj);
  }
}

// Response
res = {
  code: 200,
  error: false,
  data: result,
  message: "Successfully get resource planning"
};