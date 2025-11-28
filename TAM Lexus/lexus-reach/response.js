var hitAPILexus = {
  message: "Reservation ID is not valid.",
};

var responseMessage = "";
var status = "On Progress";

if (typeof hitAPILexus !== "object") {
  responseMessage = "Gagal Hit API Update Lexus Reach";
};

if (hitAPILexus) {
  if (hitAPILexus.hasOwnProperty("errors")) {
    responseMessage = hitAPILexus.errors.type[0];
    status = "Failed";
  }

  if (!hitAPILexus.hasOwnProperty("errors")) {
    responseMessage = hitAPILexus.message;
    status = "Failed";
  }

  if (hitAPILexus.hasOwnProperty("error_code")) {
    if (hitAPILexus.error_code == 0) {
      responseMessage = hitAPILexus.message;
      status = "Success";
    }

    if (hitAPILexus.error_code == 400) {
      responseMessage = hitAPILexus.error_message;
      status = "Failed";
    }
  }
}

function _log(message) {
  console.log(message);
}

_log(responseMessage);
// response = responseMessage;

// Prep Monitoring
// var action = {
//     "background": "#2152B9",
//     "font_color": "#FFFFFF",
//     "name": "Update Ticket"
// };

// var typeProcess = "Lexus Reach";
