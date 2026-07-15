var start_date = 1777568400000;
var end_date = 1780160400000;

var get_users = [
    {
        "avatar_url": "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/14/6a1e2c09ed11d-profile-avatar_url-1780362247011.jpeg",
        "banner_url": "",
        "bio": "",
        "company_id": 28208,
        "created_at": 1775043820501,
        "created_by": 0,
        "data_state": "ACTIVE",
        "email": "abdul.abdullah@mekari.com",
        "id": "HZqNEGSVwt0d",
        "ids": "HZqNEGSVwt0d",
        "job_level": 2,
        "job_position_id": {
            "group": "UI Solution Engineer",
            "id": "pQ8rxYQkzlfZ",
            "level": 2,
            "name": "UI Solution Engineer"
        },
        "join_date": 1729443600000,
        "name": "Abdullah Abdullah",
        "organization_id": {
            "id": "tSmKRllyCJgg",
            "name": "Solution Implementation (VAS)"
        },
        "role_id": null,
        "squad_name": null,
        "tag": "",
        "updated_at": 1781244410763,
        "updated_by": 0,
        "updated_by_project_user": "UKA9XRNLQWI",
        "username": "abun"
    },
    {
        "company_id": 28208,
        "created_at": 1780980132768,
        "created_by": 0,
        "created_by_project_user": "UKA9XRNLQWI",
        "data_state": "ACTIVE",
        "email": "agung.gumelar@mekari.com",
        "id": "31OUNuGWxpKn",
        "ids": "31OUNuGWxpKn",
        "job_position_id": {
            "group": "Solution Engineer",
            "id": "CmlAgW1SCroQ",
            "level": 1,
            "name": "Solution Engineer"
        },
        "join_date": 1780333200000,
        "name": "Agung Gumelar",
        "organization_id": {
            "id": "tSmKRllyCJgg",
            "name": "Solution Implementation (VAS)"
        },
        "role_id": {
            "id": "daCzmPz44wJW",
            "name": "Engineer"
        },
        "squad_name": null,
        "updated_at": 1782205589401,
        "updated_by": 0,
        "updated_by_project_user": "s6Xq9RC8Gj7N"
    }
];


// filter by join date kalau masuk dari start_date end_date 

var filtered_users = [];

for (var i = 0; i < get_users.length; i++) {
    var user = get_users[i];

    if (user.join_date <= end_date) {
        filtered_users.push(user);
    }
}

console.log(filtered_users);

detail_request_task && detail_request_task.sprint_number ? detail_request_task.sprint_number : 0
detail_request_task && detail_request_task.sprint_year ? detail_request_task.sprint_year : 0