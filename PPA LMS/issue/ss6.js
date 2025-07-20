var payload = {
  data: {
    company_id: 25257,
    created_at: 1735802488794,
    created_by: 0,
    has_generate: false,
    id: "_qOAPLNNgm",
    ids: "_qOAPLNNgm",
    limit: 50,
    offset: 100,
    updated_at: 1735802488794,
    updated_by: 0,
  },
  employee: {
    atasanNama: null,
    atasanNrp: null,
    atasanTitle: null,
    company: "PPA",
    currentGradeDuration: null,
    currentPosisiDuration: null,
    dateOfBirth: "1989-09-25",
    department: "PLT",
    division: null,
    effectiveCurrentGrade: null,
    effectiveCurrentPosition: null,
    email: "SUKOSETIAWANCLP@GMAIL.COM",
    equipmentGroup: "EG1",
    final_record: true,
    gender: "Male",
    grade: "2A",
    hiringDate: "2024-12-26",
    job_code: null,
    jobsite: "BIB",
    jobsiteType: "TYPE A",
    level: "MECHANIC",
    name: "SUKO SETIAWAN",
    nrp: "24006158",
    phone: "081338548456",
    placeOfBirth: "CILACAP",
    status: "Active",
    title: "MECHANIC WHEEL",
    workDuration: 0.08,
  },
};

function _log(message) {
  console.log(message);
}

if (
  !!payload.employee.equipmentGroup &&
  (payload.employee.department === "PLT" ||
    payload.employee.department === "PRO")
) {
  // _log("Equipment Group");
  var codeEquipmentGroup = payload.employee.equipmentGroup;
  var nameEquipmentGroup =
    payload.employee.equipmentGroup + " - " + payload.employee.department;

  _log(nameEquipmentGroup);
  _log(codeEquipmentGroup);

  // payloadData.equipment_group_id = _hitFunction("func_equipment_group_id", {
  //     "code": codeEquipmentGroup,
  //     "name": nameEquipmentGroup
  // });
}
