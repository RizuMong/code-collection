var getEmployeeCompetencies = {
  data: [
    {
      competency_id: {
        id: "3ZT1n9iNR",
        name: "BC-1D-1 POSITIVE TEST CASE-BASIC-TRACK EQUIPMENT GROUP-PC BIGDIGGER",
      },
      date: "",
      employee_id: "soeScsgNR",
      equipment_group_id: {
        id: "9N-NiYRHg",
        name: "PC BIGDIGGER",
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
      name_competency: "1D-1 POSITIVE TEST CASE",
      proficiency_level_id: {
        id: "uoprQlkNR",
        name: "BASIC",
      },
      section_id: {
        id: "y6PYzLgNg",
        name: "TRACK EQUIPMENT GROUP",
      },
      status_id: {
        id: "",
        name: "-",
      },
      target: "CURRENT",
      result: "PASS",
      type_competency: "BC",
      unit_id: {
        id: "",
        name: "-",
      },
    },
    {
      competency_id: {
        id: "3ZT1n9iNR",
        name: "BC-1D-1 POSITIVE TEST CASE-BASIC-TRACK EQUIPMENT GROUP-PC BIGDIGGER",
      },
      date: "",
      employee_id: "soeScsgNR",
      equipment_group_id: {
        id: "9N-NiYRHg",
        name: "PC BIGDIGGER",
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
      name_competency: "1D-1 POSITIVE TEST CASE",
      proficiency_level_id: {
        id: "uoprQlkNR",
        name: "BASIC",
      },
      section_id: {
        id: "y6PYzLgNg",
        name: "TRACK EQUIPMENT GROUP",
      },
      status_id: {
        id: "",
        name: "-",
      },
      target: "DEVELOPMENT",
      type_competency: "BC",
      unit_id: {
        id: "",
        name: "-",
      },
    }
  ],
  error: false,
};

var competencyGapCurrent = [];
var competencyGapNext = [];
var currentTargetNotPassed = false;

for (var i = 0; i < getEmployeeCompetencies.data.length; i++) {
  var item = getEmployeeCompetencies.data[i];

  if (!item.hasOwnProperty('result') || item.result !== "PASS" || item.result === "") {
    if (item.target === "CURRENT") {
      competencyGapCurrent.push(item);
      currentTargetNotPassed = true;
    }
  }
}

for (var i = 0; i < getEmployeeCompetencies.data.length; i++) {
  var item = getEmployeeCompetencies.data[i];

  if (!item.hasOwnProperty('result') || item.result !== "PASS" || item.result === "") {
    if (item.target === "DEVELOPMENT" && !currentTargetNotPassed) {
      competencyGapNext.push(item);
    }
  }
};

console.log("Total competencyGapCurrent: " + competencyGapCurrent.length);
console.log("Total competencyGapNext: " + competencyGapNext.length);
console.log("CompetencyGapCurrent:", competencyGapCurrent);
console.log("CompetencyGapNext:", competencyGapNext);
