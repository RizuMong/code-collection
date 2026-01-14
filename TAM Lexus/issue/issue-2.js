var duplicate = {
    "action": {
        "background": "#2152B9",
        "font_color": "#FFFFFF",
        "name": "Move Ticket"
    },
    "company_id": 28001,
    "created_at": 1768096799000, // false
    "created_by": 0,
    "deal_name": "ID2MA71N5L0111001-E Care Warning",
    "environment": "DEVELOPMENT",
    "id": "6XMx5qegnxAm",
    "ids": "6XMx5qegnxAm",
    "response_message": "Success",
    "status": "Success",
    "ticket_qontak_id": 74856400,
    "type": "Qontak",
    "updated_at": 1764747993516,
    "updated_by": 0
};

var is_duplicate = true;

if (Object.keys(duplicate).length === 0) {
    is_duplicate = false;
};

if (duplicate && duplicate.created_at) {
    var now = new Date().getTime();
    var oneHour = 60 * 60 * 1000;

    // masih dalam 1 jam → duplicate
    if ((now - duplicate.created_at) >= oneHour) {
        is_duplicate = true;
    }
}

console.log(is_duplicate);