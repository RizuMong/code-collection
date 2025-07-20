var index_currentCompetency = {
  "code_competency": "PM-2",
  "competency_id": {
      "id": "lLhct5iNg",
      "name": "BC-NEGATIVE-LEVEL 1--"
  },
  "equipment_group_id": {
      "id": "",
      "name": ""
  },
  "group_competency_id": {
      "id": "CtvEWYRHg",
      "name": "PREVENTIVE MAINTENANCE"
  },
  "name_competency": "NEGATIVE",
  "proficiency_level_id": {
      "id": "81EzllkNg",
      "name": "LEVEL 1"
  },
  "section_id": {
      "id": "",
      "name": ""
  },
  "type_competency": "BC"
};

var assessments = [
  {
      "company_id": 25257,
      "competency_id": {
          "id": "lLhct5iNg",
          "name": "BC-NEGATIVE-LEVEL 1--"
      },
      "created_at": 1729048759522,
      "created_by": 175332,
      "date": 1729011600000,
      "employee_id": {
          "id": "zUu59-RNg",
          "name": "alex"
      },
      "equipment_group_id": {
          "id": "",
          "name": ""
      },
      "grade_id": {
          "id": "NG3imyRHR",
          "name": "Grade Staff"
      },
      "id": "iSrBt5iNg",
      "id_competency_assessment": "iSrBt5iNg",
      "jabatan_id": {
          "id": "Ev4AeRzHg",
          "name": "PROJECT MANAGER"
      },
      "jobsite_id": {
          "id": "28OQBnyVg",
          "name": "HEAD OFFICE"
      },
      "proficiency_level_id": {
          "id": "81EzllkNg",
          "name": "LEVEL 1"
      },
      "result": "FAILED",
      "status_id": {
          "id": "erZk__zNR",
          "name": "UNCOMPETENT"
      },
      "type_competency": "BC",
      "unit_id": {
          "id": "",
          "name": ""
      },
      "updated_at": 1729048759674,
      "updated_by": 175332
  }
]

var competencyData_1 = {
  // employee_id: id_employee,
  // group_competency_id: index_currentCompetency.group_competency_id,
  // competency_id: index_currentCompetency.competency_id,
  // name_competency: index_currentCompetency.name_competency,
  // proficiency_level_id: index_currentCompetency.proficiency_level_id,
  // section_id: index_currentCompetency.section_id,
  // equipment_group_id: index_currentCompetency.equipment_group_id,
  // type_competency: index_currentCompetency.type_competency,
  // jabatan_id: current_jabatan,
  // grade_id: current_grade,
  // target: "CURRENT",
  // status_id: {
  //     id: "",
  //     name: "-"
  // },
  // date: "",
  // unit_id: {
  //     id: "",
  //     name: "-"
  // }
}

if (assessments.length > 0) {
  competencyData_1.status_id = assessments[0].status_id
  competencyData_1.result = assessments[0].result
  competencyData_1.date = assessments[0].date
  competencyData_1.unit_id = assessments[0].unit_id
}

if (index_currentCompetency.section_id.id === section_id.id) {
  responseData.push(competencyData_1)
};


section_id = employeeEquipmentGroup.section_id
_log(section_id);