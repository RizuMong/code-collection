console.log(_field.position_id);

if (!_field.position_id) {
  _field.unit_kerja_id = null;
  _field.unit_kerja_core_id = null;
  _field.jabatan_id = null;
  _field.perusahaan_id = null;
  _field.zona_wilayah_id = null;
  _field.level_jabatan_id = null;
  _field.rumpun_jabatan_id = null;
  _field.grade_jabatan_id = null;
} else {
  var getEmployeeInform = _hitFunction(
    "get_inform_employee",
    _field.position_id
  );

  _field.unit_kerja_id = getEmployeeInform.unit_kerja_id;
  _field.grade_jabatan_id = getEmployeeInform.grade_jabatan_id;
  _field.jabatan_id = getEmployeeInform.jabatan_id;
  _field.level_jabatan_id = getEmployeeInform.level_jabatan_id;
  _field.perusahaan_id = getEmployeeInform.perusahaan_id;
  _field.rumpun_jabatan_id = getEmployeeInform.rumpun_jabatan_id;
  _field.tipe_jabatan = getEmployeeInform.tipe_jabatan;
  _field.unit_kerja_bidang_id = getEmployeeInform.unit_kerja_bidang_id;
  _field.zona_wilayah_id = getEmployeeInform.zona_wilayah_id;
}
