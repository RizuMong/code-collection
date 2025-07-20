var equipment_group = [
  {
    category_id: {
      id: "0vmEIe4HR",
      name: "MEKANIK",
    },
    code_equipment_group: "EG 1",
    company_id: 25257,
    created_at: 0,
    created_by: 175332,
    department_id: {
      id: "",
      name: "",
    },
    flow_status: "",
    id: "16NZ1eVNR",
    id_equipment_group: "16NZ1eVNR",
    name: "EG 1 - PLT",
    section_id: {
      id: "vepjSeVNg",
      name: "WHEEL",
    },
    updated_at: 1733988191086,
    updated_by: 175332,
  },
  {
    category_id: {
      id: "0vmEIe4HR",
      name: "MEKANIK",
    },
    code_equipment_group: "EG 2",
    company_id: 25257,
    created_at: 0,
    created_by: 175332,
    department_id: {
      id: "",
      name: "",
    },
    flow_status: "",
    id: "16NZ1eVNR",
    id_equipment_group: "16NZ1eVNR",
    name: "EG 2 - PRO",
    section_id: {
      id: "vepjSeVNg",
      name: "WHEEL",
    },
    updated_at: 1733988191086,
    updated_by: 175332,
  },
];

// {
//   code_equipment_group: "EG1"
//   id_equipment_group: "16NZ1eVNR",
//   name: "EG1 - PLT"
// }

var result = equipment_group.map(function (item) {
  var nameParts = item.name.split(" - "); 
  var prefix = nameParts[0].replace(/\s/g, "");
  var suffix = nameParts[1] || "";
  var formattedName = prefix + " - " + suffix;

  return {
    code_equipment_group: item.code_equipment_group.replace(/\s/g, ""),
    id_equipment_group: item.id_equipment_group,
    name: formattedName, 
  };
});


console.log(result);
