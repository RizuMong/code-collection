var getTemplate = {
  "response": [
      {
          "additional_field": false,
          "dropdown": [
              {
                  "crm_teams": [],
                  "email": "rizkywahyu0106@gmail.com",
                  "id": 185776,
                  "name": "Rizky Pambudi -"
              },
              {
                "crm_teams": [],
                "email": "rizkihaddi@gmail.com",
                "id": 185736,
                "name": "Rizky Haddi"
            }
          ],
          "id": 12076817,
          "name": "creator_id",
          "name_alias": "Owner",
          "required_pipeline_ids": [],
          "required_stage_ids": [],
          "type": "Dropdown select"
      },
  ]
};

var emailUser = "rizkywahyu0d106@gmail.com";
var isFound = false;
var creatorID = null;

getTemplate.response.forEach(function (item) {
  if (item.name === "creator_id") {
    item.dropdown.forEach(function (data) {
      if (emailUser === data.email) {
        isFound = true;
        email = data.id;
      }
    });
  }
});

console.log(isFound); // Akan menjadi true jika ditemukan