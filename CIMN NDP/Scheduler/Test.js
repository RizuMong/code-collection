var REGEX_DATE = /^\d{4}[-\/]\d{2}[-\/]\d{2}$/;

function isValidDate(dateString) {
  if (!REGEX_DATE.test) {
    // return false;  // Invalid format
    return {
      isValid: false,
      errorMsg: "Invalid format",
    };
  }

  var d = new Date(dateString);
  var dNum = d.getTime();

  if (!dNum && dNum !== 0) {
    // return false; // NaN value, Invalid date
    return {
      isValid: false,
      errorMsg: "Invalid date",
    };
  }

  if (d.toISOString().slice(0, 10) === dateString) {
    return {
      isValid: true,
      errorMsg: "",
    };
  }
}

var date1 = "2024-02-21";
var date2 = "2024/02/21";