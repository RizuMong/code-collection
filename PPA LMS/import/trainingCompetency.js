function _log(item) {
  console.log(item);
}

var eventDevelopment = {
  category_event: "SRT",
  code_brand_id: {
    id: "H7H2CneSR",
    name: "CAT",
  },
  code_eg: "9897",
  code_event: "ABN-CRTF",
  code_item: "SIO",
  company_id: 25257,
  created_at: 1731640726535,
  created_by: 178378,
  department_id: {
    id: "2MSdyzzNR",
    name: "Human Capital and General Affairs",
  },
  duration_day: 3,
  duration_hour: 3,
  equipment_group_id: {
    id: "HmPu5hkNR",
    name: "NAME",
  },
  event_type_id: {
    id: "_Fyd92kHR",
    name: "SERTIFIKASI",
  },
  generate_certificate_text: "NO",
  id: "_6pJYwMNR",
  id_event: "_6pJYwMNR",
  name: "TEST CREATE CERTIFICATION",
  quantity_sasaran_competency: 0,
  sasaran_grade: [
    {
      id: "k3TZDYgNg",
      name: "1A",
    },
    {
      id: "6GfZDLRHR",
      name: "1B",
    },
    {
      id: "WPyZvLRHg",
      name: "1C",
    },
  ],
  sasaran_jabatan: [
    {
      id: "a5EjOfgHR",
      name: "Assistant Manager",
    },
    {
      id: "pxWuHKzHR",
      name: "HC ADMIN",
    },
  ],
  section_id: {
    id: "aeUj1KzHg",
    name: "OPERATOR",
  },
  unit_id: {
    id: "RXmoqviHg",
    name: "773 CAT",
  },
  updated_at: 1731640788321,
  updated_by: 178378,
};

var competency = {
  category_id: {
    id: "CfXbBbMNg",
    name: "TEST",
  },
  code_competency: "PROEG1-C06017",
  company_id: 25257,
  created_at: 1732526816119,
  created_by: 175332,
  department_id: {
    id: "UAV9PzkHR",
    name: "PLANT",
  },
  description: "TEST 17",
  equipment_group_id: {
    id: "4-pgxKzNg",
    name: "PC SMALL.",
  },
  group_competency_id: {
    id: "bfylWLgHR",
    name: "MACHINE TROUBLESHOOTING POWER TRAIN & ELECTRIC",
  },
  id: "yXsbmBnNg",
  id_competency: "yXsbmBnNg",
  key_behavior_ids: [
    {
      id: "XdU_-tzNg",
      name: "FTHA",
    },
  ],
  name: "TEST 17",
  proficiency_level_id: {
    id: "8cSz7WGHR",
    name: "LEEE",
  },
  section_id: {
    id: "aeUj1KzHg",
    name: "OPERATOR",
  },
  type_competency: "BC",
  unit_id: {
    id: "Y_4EBBMNg",
    name: "TEST-ABUN-1",
  },
  updated_at: 1732526816119,
  updated_by: 175332,
};

var errorMessageArray = [];
var importNotes = "";

if (!eventDevelopment.id) {
  errorMessageArray.push("Event Development Not Found");
} else {
  var department_id = {
    id: eventDevelopment.id,
    name: eventDevelopment.name,
  };
}

if (!competency.id) {
  errorMessageArray.push("Competency Not Found");
} else {
  var department_id = {
    id: competency.id,
    name: competency.name,
  };
}

var isImportSuccess = errorMessageArray.length === 0;
importNotes = isImportSuccess ? "Merged Success" : errorMessageArray.join(", ");

// _log(importNotes);

var data = {
  category_event: eventDevelopment.category_event,
  competency_id: {
    id: competency.id_competency,
    name: competency.name,
  },
  code_competency: competency.code_competency,
  equipment_group_id: competency.equipment_group_id,
  event_id_text: eventDevelopment.id_event,
  group_competency_id: competency.group_competency_id,
  name_competency: competency.name,
  proficiency_level_id: competency.proficiency_level_id,
  section_id: competency.section_id,
  type_competency: competency.type_competency,
};