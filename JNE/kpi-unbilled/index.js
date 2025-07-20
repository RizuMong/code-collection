function _numberToPercentage(data) {
  if (data === null || data === '' || data === undefined) {
      return '0%';
  } else {
      return data.toFixed(2).toString() + '%';
  }
}

var target = '10%';
var unbilled_to_total_revenue_ratio_amount = _numberToPercentage(13.978494623655912);

var targetNumber = parseFloat(target) / 100;
var ratioNumber = parseFloat(unbilled_to_total_revenue_ratio_amount) / 100;

// % Achievment
var hasil = (targetNumber / ratioNumber) * 100;
hasil = hasil.toFixed(2) + '%';

console.log(hasil);


