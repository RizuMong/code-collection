//

function _log(msg) {
  console.log(msg);
}

var isValid = false;

if (typeof getParticipant === "undefined") {
    _log("Data not defined");
    _log("User 'portal_irse' has exceeded the 'max_connections_per_hour' resource");
    // _stopAutomation();
}

if (typeof getParticipant !== "undefined") {
    if (getParticipant && getParticipant.length > 0) {
        isValid = true;
        _log("Valid data");
    }

    if (!getParticipant || getParticipant.length === 0) {
        _log("Data is empty or invalid");
    }
}
