var hypercare_start_date = 1788612444000;
var hypercare_end_date = null;

var FIELD_LABEL_START = "Hypercare Date (Start)";
var FIELD_LABEL_END = "Hypercare Date (End)";

var messages = [];

var is_edit = false;
var existing_start_date = null;
var existing_end_date = null;

var MS_EPOCH_MIN = 1e12;

function isValidMsEpoch(val) {
  if (typeof val !== "number") return false;
  if (isNaN(val) || !isFinite(val)) return false;
  if (val % 1 !== 0) return false;
  if (val < MS_EPOCH_MIN) return false;
  return true;
}

function addOneCalendarMonth(epochMs) {
  var d = new Date(epochMs);
  var day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + 1);
  var daysInMonth = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  d.setDate(day < daysInMonth ? day : daysInMonth);
  return d.getTime();
}

var start_provided = hypercare_start_date !== null && hypercare_start_date !== undefined && hypercare_start_date !== "";
var end_provided = hypercare_end_date !== null && hypercare_end_date !== undefined && hypercare_end_date !== "";

if (start_provided && !isValidMsEpoch(hypercare_start_date)) {
  messages.push(FIELD_LABEL_START + " must be a valid epoch millisecond timestamp");
}

if (end_provided && !isValidMsEpoch(hypercare_end_date)) {
  messages.push(FIELD_LABEL_END + " must be a valid epoch millisecond timestamp");
}

if (messages.length === 0) {
  var effective_start = start_provided ? hypercare_start_date : (is_edit ? existing_start_date : null);
  var effective_end = end_provided ? hypercare_end_date : (is_edit ? existing_end_date : null);

  var effective_start_exists = effective_start !== null && effective_start !== undefined;
  var effective_end_exists = effective_end !== null && effective_end !== undefined;

  if (effective_start_exists && effective_end_exists) {
    if (effective_end < effective_start) {
      messages.push(FIELD_LABEL_END + " must be greater than or equal to " + FIELD_LABEL_START);
    } else {
      hypercare_start_date = effective_start;
      hypercare_end_date = effective_end;
    }
  } else if (effective_end_exists && !effective_start_exists) {
    messages.push(FIELD_LABEL_START + " is required when " + FIELD_LABEL_END + " is set");
  } else if (effective_start_exists && !effective_end_exists) {
    hypercare_start_date = effective_start;
    hypercare_end_date = addOneCalendarMonth(effective_start);
  }
}

if (messages.length > 0) {
//   _response_status_code = 400;
}

console.log({
    messages: messages,
    hypercare_end_date: hypercare_end_date
});
