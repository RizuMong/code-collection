if (
    typeof payload.equipmentGroup === "string" && // Pastikan equipmentGroup adalah string
    payload.equipmentGroup.trim() !== "" && // Periksa jika tidak kosong setelah di-trim
    (payload.department === "PLT" || payload.department === "PRO" || payload.department === "FLO")
  ) {
    var nameEquipmentGroup = "EG - " + (payload.department === "FLO" ? "PRO" : payload.equipmentGroup);
  
    console.log(nameEquipmentGroup);
    console.log("Masuk kondisi valid");
  
    // Uncomment below if _hitFunction is needed
    // payloadData.equipment_group_id = _hitFunction("func_equipment_group_id", {
    //   data: payload.equipmentGroup,
    //   name: nameEquipmentGroup
    // });
  }
  