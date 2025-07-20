var _field = {
  effective_end_date: 1749142800000,
  effective_start_date: 1748797200000,  
};

var diffDays = 0;

if (_field.effective_start_date && _field.effective_end_date) {
    var startDate = new Date(_field.effective_start_date);
    var endDate = new Date(_field.effective_end_date);
    var diffMs = endDate - startDate;
    diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24)) + 1;
};

// var diffDays = req.diffDays;
var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
var result = [];
var maxDays = diffDays > 7 ? 7 : diffDays;

for (var i = 0; i < maxDays; i++) {
    result.push({
        day: days[i % 7], // putar ulang jika diffDays > 7
        shift: null,
        // shift2: shiftList
    });
};

console.log(result);