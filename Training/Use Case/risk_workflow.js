var req = {
    body: {
        loan_amount: 1000,
        monthly_income: 100,
    }
};

var master_levels = [
    {
        min_score: 0,
        max_score: 30,
        status: "LOW"
    },
    {
        min_score: 31,
        max_score: 60,
        status: "MEDIUM"
    },
    {
        min_score: 61,
        max_score: 100,
        status: "HIGH"
    }
];

// 1. Get data from input
var loanAmount = Number(req.body.loan_amount || 0);
var monthlyIncome = Number(req.body.monthly_income || 0);
var result = {}

// 2. Hitung risk score
var riskScore = 0;

if (monthlyIncome === 0) {
    riskScore = 100;
} else if (loanAmount > monthlyIncome * 10) {
    riskScore = 80;
} else if (loanAmount > monthlyIncome * 5) {
    riskScore = 50;
} else {
    riskScore = 20;
}

// 3. Mapping ke Master Risk Level
var levels = master_levels || [];
var selectedLevel = null;

for (var i = 0; i < levels.length; i++) {
    var min = Number(levels[i].min_score);
    var max = Number(levels[i].max_score);

    if (riskScore >= min && riskScore <= max) {
        selectedLevel = levels[i];
        break;
    }
}

// 4. Return hasil
if (selectedLevel) {
    result.risk_score = riskScore
    result.status = selectedLevel.status
} else {
    // fallback aman
    result.risk_score = riskScore
    result.status = "LOW"
};

console.log(result);