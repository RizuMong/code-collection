var IDPSubmissionPeriod = [
  {
      "company_id": 25257,
      "created_at": 1734513270499,
      "created_by": 175332,
      "date_end": 1734513240000,
      "date_start": 1734513240000,
      "id": "Zs0gvoSNg",
      "id_period": "Zs0gvoSNg",
      "updated_at": 1734513270499,
      "updated_by": 175332,
      "year": "2024"
  }
]


var response = {
  error: true,
  message: "Cannot Propose Revision outside of IDP Submission Period."
};

var today = new Date().getTime()

for (var i = 0; i < IDPSubmissionPeriod.length; i++) {
  var periodStart = IDPSubmissionPeriod[i].date_start
  var periodEnd = IDPSubmissionPeriod[i].date_end

  if (today >= periodStart && today <= periodEnd) {
      response.error = false
      response.message = "Success Create ADMP Revision Draft."
  };
};

console.log(response);