var req = {
  "termination_date": 1743613200000, // Apr 03, 2025
};


// Termination Date
var terminationDate = null;

if (!!req.termination_date) {
    terminationDate =  new Date(req.termination_date);
    terminationDate.setDate(terminationDate.getDate() + 1); 
    terminationDate = terminationDate.getTime();
};

console.log(terminationDate);