const conceptContact = {
    "code": 200,
    "data": [
        {
            "name": "Survey Form", // grouping by activity name
            "id": 1, // id activity
            "status": "COMPLETED", // status of items if all is completed then is COMPLETED else INCOMPLETED
            "items": [
                {
                    "name": "Survey Form", // name of mission
                    "status": "COMPLETED", // status mission
                    "id": 1, // id mission
                    "start_date": timestamp, // misstion creation date
                    "end_date": timestamp // mission updated at, show if mission is completed
                },
                {
                    "name": "Survey Form 2",
                    "status": "INCOMPLETED",
                    "id": 2,
                    "start_date": timestamp, // misstion creation date
                    "end_date": timestamp // mission updated at, show if mission is completed
                }
            ]
        }
    ],
    "error": false,
    "message": "Mission retrieved successfully"
}


// Final
const finalContact = {
  "code": 200,
  "message": "Mission retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Survey Form",
      "status": "INCOMPLETE",
      "missions": [
        {
          "id": 1,
          "name": "Survey Form",
          "status": "COMPLETED",
          "point": 1,
          "start_date": "2025-08-17T10:00:00Z",
          "end_date": "2025-08-18T15:00:00Z" // show if mission is completed
        },
        {
          "id": 2,
          "name": "Survey Form 2",
          "status": "INCOMPLETE",
          "point": 5,
          "start_date": "2025-08-17T10:00:00Z",
          "end_date": null 
        }
      ]
    }
  ]
}



