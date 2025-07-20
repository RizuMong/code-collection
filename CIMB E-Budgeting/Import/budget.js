var req = {
  amount: 10002,
};

var getPeriod = {
  id: "vj8Yaw_4R",
  name: "Periode 2025",
};

var getBudgetExist = {
  amount_budget: 0,
  budget_non_project: [
    {
      budget: 1000,
      period: {
        id: "vj8Yaw_4R",
        name: "Periode 2025",
      },
    },
    {
      budget: 1000,
      period: {
        id: "vj8YaewR",
        name: "Periode 2024",
      },
    },
  ],
  remaining_budget: 1000,
  total_usage: 1000
};

var budgetList = getBudgetExist.budget_non_project;
var existingBudget = null;
for (var i = 0; i < budgetList.length; i++) {
  if (budgetList[i].period.id === getPeriod.id) {
    existingBudget = budgetList[i];
    break;
  }
}

if (!existingBudget) {
  existingBudget = {
    budget: req.amount,
    period: {
      id: getPeriod.id,
      name: getPeriod.name
    }
  };
  budgetList.push(existingBudget);
} else {
  existingBudget.budget = req.amount;
}

var currentYearBudget = 0;
for (var i = 0; i < budgetList.length; i++) {
  currentYearBudget += budgetList[i].budget;
};

var totalUsage = getBudgetExist.total_usage;
getBudgetExist.remaining_budget = currentYearBudget - totalUsage;

// console.log(currentYearBudget);
console.log(getBudgetExist);