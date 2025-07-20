function getStartDate() {
  var date = new Date(Date.now());
  var timeZoneOffset = '+07:00';

  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);

  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var seconds = ('0' + date.getSeconds()).slice(-2);

  var startDate = year + '-' + month + '-' + day + 'T' + hours + ':' + minutes + ':' + seconds + '.000' + timeZoneOffset;
  return startDate;
};

console.log(getStartDate());