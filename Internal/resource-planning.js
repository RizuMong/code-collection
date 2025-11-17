var getDatas = [
  {
    company_id: 14,
    created_at: 1763274755323,
    created_by: 163708,
    created_by_project_user: "",
    employee_email: "rizki@jojonomic.com",
    employee_id: {
      id: "-ov1xavHg",
      name: "Rizki Haddi Prayoga",
    },
    id: "N2hsRGMzUXG5",
    ids: "N2hsRGMzUXG5",
    month: 1,
    month_id: {
      id: "1",
      name: "January",
    },
    planning_id: {
      id: "rvoheFvCFli",
      name: "Planning 2025",
    },
    project_plans: [
      {
        plan: 8,
        project_id: {
          id: "0dJoYk0T5tz",
          name: "Lexus - Ticketing System Enhancement Phase 2",
        },
      },
      {
        plan: 20,
        project_id: {
          id: "We28gMWHg",
          name: "BPJS Ketenagakerjaan - HCIS",
        },
      },
    ],
    role_id: {
      id: "VtFfIZeSg",
      name: "Solution Engineer",
    },
    status: "OVER CAPACITY",
    total_capacity: 23,
    total_plan: 28,
    updated_at: 1763274755516,
    updated_by: 163708,
    updated_by_project_user: "",
    year: 2025,
  },
  {
    company_id: 14,
    created_at: 1762489026280,
    created_by: 163708,
    created_by_project_user: "",
    employee_email: "ismail.faizal@mekari.com",
    employee_id: {
      id: "n3NzxWeSg",
      name: "Ismail  Faizal",
    },
    id: "4tCzTtgOplhF",
    ids: "4tCzTtgOplhF",
    month: 1,
    month_id: {
      id: "1",
      name: "January",
    },
    planning_id: {
      id: "rvoheFvCFli",
      name: "Planning 2025",
    },
    project_plans: [],
    role_id: {
      id: "VtFfIZeSg",
      name: "Solution Engineer",
    },
    status: "UNDER CAPACITY",
    total_capacity: 23,
    total_plan: 0,
    updated_at: 1762489026405,
    updated_by: 163708,
    updated_by_project_user: "",
    year: 2025,
  },
];

var project_id = "";

var grouped = {};

for (var i = 0; i < getDatas.length; i++) {
  var item = getDatas[i];
  
  var isValid = true;

  if (project_id) {
    isValid = false;
    var projectPlans = item.project_plans || [];

    for (var j = 0; j < projectPlans.length; j++) {
      var p = projectPlans[j];
      if (p.project_id && p.project_id.id === project_id) {
        isValid = true;
        break;
      }
    }
  }

  if (isValid) {
    var month = item.month;

    if (!grouped[month]) {
      grouped[month] = {
        id: item.ids,
        month: month,
        year: item.year,
        name: item.month_id.name,
        capacity: 0,
        plan: 0,
      };
    }

    grouped[month].capacity += item.total_capacity;
    grouped[month].plan += item.total_plan;
  }
};

var datas = [];
for (var key in grouped) {
  if (grouped.hasOwnProperty(key)) {
    datas.push(grouped[key]);
  }
}

console.log(datas);
