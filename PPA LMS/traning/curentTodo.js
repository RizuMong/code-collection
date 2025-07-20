var currentRequiredTrainings = [
  {
    "category_event": "TRN",
    "certification_id": {
        "id": "",
        "name": ""
    },
    "code_brand_id": {},
    "code_eg": "9897",
    "code_event": "TRN",
    "code_item": "MTS",
    "company_id": 25257,
    "created_at": 1729048326947,
    "created_by": 175332,
    "department_id": {
        "id": "AYCuEkkHR",
        "name": "PRODUKSI"
    },
    "duration_day": 2,
    "duration_hour": 2,
    "equipment_group_id": {
        "id": "HmPu5hkNR",
        "name": "NAME"
    },
    "event_type_id": {
        "id": "EIqHr2kHg",
        "name": "MACHINE TROUBLESHOOTING"
    },
    "generate_certificate": false,
    "id": "WQYSp5iNg",
    "id_event": "WQYSp5iNg",
    "name": "POSITIVE TEST CASE",
    "section_id": {
        "id": "aeUj1KzHg",
        "name": "OPERATOR"
    },
    "unit_id": {
        "id": "YHEWpjzHg",
        "name": "123"
    },
    "updated_at": 1729576850312,
    "updated_by": 175332
}
];

var trainingHistory = [
  {
    "approved_by": [
        175332
    ],
    "category_event": "TRN",
    "company_id": 25257,
    "created_at": 1729570916729,
    "created_by": 177739,
    "department_id": {
        "id": "2MSdyzzNR",
        "name": "Human Capital and General Affairs"
    },
    "employee_id": {
        "id": "itRTWTmNR",
        "name": "rizal"
    },
    "flow_id": 2119769466,
    "flow_status": "approved",
    "grade_id": {
        "id": "k3TZDYgNg",
        "name": "1A"
    },
    "id": "wFXa6XiNR",
    "id_training_participant": "wFXa6XiNR",
    "jabatan_id": {
        "id": "a5EjOfgHR",
        "name": "Assistant Manager"
    },
    "jobsite_id": {
        "id": "28OQBnyVg",
        "name": "HEAD OFFICE"
    },
    "mds_id": {
        "id": "Y-rtcQiHg",
        "name": "TRN3-PLT-PPA-HSM-102024"
    },
    "mds_id_text": "Y-rtcQiHg",
    "nik": "87i9123981723",
    "note": "",
    "page_id": 38526,
    "status_kelulusan": "PASS",
    "type_provider": "INTERNAL",
    "updated_at": 1729594955780,
    "updated_by": 177985
}
];

var currentTodoTrainings = [];

var trainingHistoryMap = {};
for (var i = 0; i < trainingHistory.length; i++) {
  if (trainingHistory[i].event_id && trainingHistory[i].event_id.id) {
    trainingHistoryMap[trainingHistory[i].event_id.id] = true;
  }
}

for (var i = 0; i < currentRequiredTrainings.length; i++) {
  var training = currentRequiredTrainings[i];
  if (trainingHistoryMap[training.id_event]) {
    currentTodoTrainings.push(training);
  }
}

console.log(currentTodoTrainings);
