var getEmployeeCompetencies = {
  data: [
    {
      competency_id: {
        id: "2YVbDqkHR",
        name: "BC-PERIODIC SERVICE-COMPETENT-TRACK EQUIPMENT GROUP-KNOWLEDGE-T",
      },
      date: 1728493200000,
      employee_id: "soeScsgNR",
      equipment_group_id: {
        id: "xPHt2PgHR",
        name: "KNOWLEDGE-T",
      },
      grade_id: {
        id: "18_ZvLRNR",
        name: "1D",
      },
      group_competency_id: {
        id: "CtvEWYRHg",
        name: "PREVENTIVE MAINTENANCE",
      },
      jabatan_id: {
        id: "i1ANDYgNg",
        name: "Mekanik 3",
      },
      name_competency: "PERIODIC SERVICE",
      proficiency_level_id: {
        id: "CFQ9Q_kHR",
        name: "COMPETENT",
      },
      result: "FAILED",
      // result: "PASS",
      section_id: {
        id: "y6PYzLgNg",
        name: "TRACK EQUIPMENT GROUP",
      },
      status_id: {
        id: "uoprQlkNR",
        name: "BASIC",
      },
      target: "CURRENT",
      type_competency: "BC",
      unit_id: {
        id: "",
        name: "",
      },
    },
    {
      competency_id: {
        id: "2YVbDqkHR",
        name: "BC-PERIODIC SERVICE-COMPETENT-TRACK EQUIPMENT GROUP-KNOWLEDGE-T",
      },
      date: 1728493200000,
      employee_id: "soeScsgNR",
      equipment_group_id: {
        id: "xPHt2PgHR",
        name: "KNOWLEDGE-T",
      },
      grade_id: {
        id: "18_ZvLRNR",
        name: "1D",
      },
      group_competency_id: {
        id: "CtvEWYRHg",
        name: "PREVENTIVE MAINTENANCE",
      },
      jabatan_id: {
        id: "i1ANDYgNg",
        name: "Mekanik 3",
      },
      name_competency: "PERIODIC SERVICE",
      proficiency_level_id: {
        id: "CFQ9Q_kHR",
        name: "COMPETENT",
      },
      // result: "FAILED",
      result: "PASS",
      section_id: {
        id: "y6PYzLgNg",
        name: "TRACK EQUIPMENT GROUP",
      },
      status_id: {
        id: "uoprQlkNR",
        name: "BASIC",
      },
      target: "CURRENT",
      type_competency: "BC",
      unit_id: {
        id: "",
        name: "",
      },
    },
  ],
  error: false,
};

var competencyGap = [];

for (var i = 0, len = getEmployeeCompetencies.data.length; i < len; i++) {
  var item = getEmployeeCompetencies.data[i];
  item.competency_result = (item.result === "PASS");
  competencyGap.push(item); 
};

console.log(competencyGap);
