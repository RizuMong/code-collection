var birth_date = 416966400000;

// "birth_date": "1983-03-20",

function formatBirthDate(timestamp) {
  var date = new Date(timestamp);
  return (
    date.getUTCFullYear() +
    "-" +
    ("0" + (date.getUTCMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getUTCDate()).slice(-2)
  );
}

var birth_date = 416966400000;
console.log(formatBirthDate(birth_date));

var data = {
  data: {
    findClaimers: findReimbursement,
    getSubmit: getSubmit,
  },
};
