
var req = {
    "authenticate": {
        "code": 200,
        "data": {
            "email": "rizki.haddi@mekari.com",
            "id_token": "OyIU9i8JHLDi",
            "job_position_id": {
                "id": "bq0ujKLZYXnr",
                "name": "Senior Solution Engineer"
            },
            "join_date": 1672160400000,
            "name": "Rizki Haddi Prayoga",
            "organization_id": {
                "id": "tSmKRllyCJgg",
                "name": "Solution Implementation (VAS)"
            },
            "role_id": {
                "id": "FpQnsVBGNXkL",
                "name": "Senior VAS"
            },
            "timestamp": 1779178330217,
            "user_id": "hfGTJvgBCv0g"
        },
        "error": false,
        "message": "Authentication successful."
    },
    "task_id": "58gSUIzQ2ZjQ",
    "type": "create",
    "wbs_id": "SxDpPZKISsM2"
}

console.log(req.wbs_id);