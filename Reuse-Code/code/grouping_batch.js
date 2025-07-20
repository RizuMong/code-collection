var dataEmployee = [
  {
    _id: "6822c54f813bb71b98200547",
    id_employee: "58yJalmFuPGDQdH7",
    join_date: 1210611600000,
    tmt_golongan: 1747109214013,
    tmt_grade: 1747109214013,
    tmt_kelompok_jabatan: 1747109214013,
    tmt_level_jabatan: 1747109214013,
    tmt_level_organisasi: 1747109214013,
    tmt_perusahaan: 1747109214013,
    tmt_posisi: 1747109214013,
    tmt_rumpun_jabatan: 1747109214013,
    tmt_status_jabatan: 1747109214013,
    tmt_status_pegawai: 1747109214013,
    tmt_wilayah: 1747109214013,
  },
  {
    _id: "6822c5f3813bb71b982083a2",
    id_employee: "vlQkKZ7TInaDm9Lj",
    join_date: 1273683600000,
    tmt_golongan: 1747109370226,
    tmt_grade: 1747109370226,
    tmt_kelompok_jabatan: 1747109370226,
    tmt_level_jabatan: 1747109370226,
    tmt_level_organisasi: 1747109370226,
    tmt_perusahaan: 1747109370226,
    tmt_posisi: 1747109370226,
    tmt_rumpun_jabatan: 1747109370226,
    tmt_status_jabatan: 1747109370226,
    tmt_status_pegawai: 1747109370226,
    tmt_wilayah: 1747109370226,
  },
    {
    _id: "6822c5f3813bb71b982083a2",
    id_employee: "vlQkKZ7TInaDm9Lj",
    join_date: 1273683600000,
    tmt_golongan: 1747109370226,
    tmt_grade: 1747109370226,
    tmt_kelompok_jabatan: 1747109370226,
    tmt_level_jabatan: 1747109370226,
    tmt_level_organisasi: 1747109370226,
    tmt_perusahaan: 1747109370226,
    tmt_posisi: 1747109370226,
    tmt_rumpun_jabatan: 1747109370226,
    tmt_status_jabatan: 1747109370226,
    tmt_status_pegawai: 1747109370226,
    tmt_wilayah: 1747109370226,
  },
];

var limitPerGroup = 1;
var maxGroupCycle = 2;
var totalData = dataEmployee.length;
var totalPage = limitPerGroup > 0 ? Math.ceil(totalData / limitPerGroup) : 0;

var results = [];

if (totalPage > 0 && maxGroupCycle > 0) {
  for (var i = 0; i < totalData; i++) {
    var emp = dataEmployee[i];
    var currentGroup = (i % maxGroupCycle) + 1;

    var datas = {
      has_generate: false,
      employee_id: emp.id_employee,
      join_date: emp.join_date,
      tmt_golongan: emp.tmt_golongan,
      tmt_grade: emp.tmt_grade,
      tmt_kelompok_jabatan: emp.tmt_kelompok_jabatan,
      tmt_level_jabatan: emp.tmt_level_jabatan,
      tmt_level_organisasi: emp.tmt_level_organisasi,
      tmt_perusahaan: emp.tmt_perusahaan,
      tmt_posisi: emp.tmt_posisi,
      tmt_rumpun_jabatan: emp.tmt_rumpun_jabatan,
      tmt_status_jabatan: emp.tmt_status_jabatan,
      tmt_status_pegawai: emp.tmt_status_pegawai,
      tmt_wilayah: emp.tmt_wilayah,
      group: currentGroup,
      limit: limitPerGroup,
    };

    results.push(datas);
  }
}

console.log(results);