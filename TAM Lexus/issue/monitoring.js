function _log(msg) {
    console.log(msg);
};

var hitAPILexus = null;

var responseMessage = "";
var status = "On Progress";

if (!hitAPILexus || typeof hitAPILexus !== "object") {
    responseMessage = "Gagal Hit API Update Lexus Reach";
    status = "Failed"
};

if (hitAPILexus) {
    if (hitAPILexus.hasOwnProperty("errors")) {
        responseMessage = hitAPILexus.errors.type[0];
        status = "Failed";
    };

    if (!hitAPILexus.hasOwnProperty("errors")) {
        responseMessage = hitAPILexus.message;
        status = "Failed";
    };

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

_log(responseMessage);
_log(status);
response = responseMessage;

// Prep Monitoring
var action = {
    "background": "#2152B9",
    "font_color": "#FFFFFF",
    "name": "Update Ticket"
};

var typeProcess = "Lexus Reach";