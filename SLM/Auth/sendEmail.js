var req = {
    body: {
        // email: "rizki@mekari"
    }
};

var email = "";
var res = {};

try {
    if (!req || !req.body || !req.body.email) {
        throw new Error("Require 'email'");
    }

    email = req.body.email;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        throw new Error("Invalid email format");
    }

    if (email.indexOf("@mekari.com") === -1 || email.slice(-11) !== "@mekari.com") {
        throw new Error("Only mekari email is allowed");
    }

} catch (err) {
    res = {
        error: true,
        code: 400,
        message: err.message || "Unknown error",
        data: {}
    };
};

console.log(res);
