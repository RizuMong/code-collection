var maiServiceAPI = "{BASE_URL}/v2/mail-service/sendV2";

var bodyEmail = {
  to_email: ["rizki.haddi@mekari.com"], // array
  to_name: ["Rizki Haddi"], // array
  subject: "Test Subject", // text
  body: convertBody, // custom html harus di convert ke base 64
  type: "custom_html", // default flagging
};

// Hit External API