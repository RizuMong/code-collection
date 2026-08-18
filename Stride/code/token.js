var token = [
    // {
    //     "company_id": 28208,
    //     "created_at": 1785923948404,
    //     "created_by": 0,
    //     "id": "mizmYD7xj3jG",
    //     "ids": "mizmYD7xj3jG",
    //     "updated_at": 1785923948404,
    //     "updated_by": 0,
    //     "user_id": "eVM5H2X6wlr8"
    // }
]

function getTimestamp1DayAgo() {
    // keep as epoch ms to match created_at's unit — do NOT convert to ISO string
    return Date.now() - 24 * 60 * 60 * 1000;
}

function _log(msg) {
    console.log(msg);
}

var res;

if (!token || token.length === 0 || !token[0]) {
    // guard: no token at all
    res = {
        code: 401,
        error: true,
        message: "Invalid or mismatched token. Please log in again.",
        data: {}
    };
    _log(res);
    _stop = true;

} else if (token[0].created_at < getTimestamp1DayAgo()) {
    // guard: token exists, now safe to check expiry
    res = {
        code: 401,
        error: true,
        message: "Session expired. Please log in again.",
        data: {}
    };
    _log(res);
    _stop = true;

} else {
    res = {
        code: 200,
        error: false,
        message: "Authentication successful.",
        data: token[0] 
    };
    _log(res);
}