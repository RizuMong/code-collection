var isTokenValid = null;

try {
    isTokenValid = Boolean(_user) && Boolean(_user.email);
} catch (err) {
    isTokenValid = false;
}

if (!isTokenValid) {
    res = {
        error: true,
        message: "Invalid token!",
    };

    _log(res);

    _stopAutomation();
}