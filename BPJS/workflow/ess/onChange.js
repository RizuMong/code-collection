var _field = {
    "nama_cuti": {
        "id": "RHvYIfIuxqOJentS",
        "jumlah_cuti": 90,
        "name": "Cuti Melahirkan",
        "timbul_cuti": 1735664400000,
        "label": "Cuti Melahirkan"
    },
    "timbul_cuti": 1735689600000,
    "kuota_cuti": "90",
    "tanggal_perkiraan_lahiran": 1750179600000,
    "tgl_mulai_cuti": null,
    "tgl_selesai_cuti": null,
    "total_cuti": "90",
    "alasan": null,
    "attachment": null,
    "workflow_id": null,
    "id": null,
    "pengajuan_terbatas": "terbatas"
}

if (_field.nama_cuti !== null && _field.nama_cuti !== undefined) {
  _field.kuota_cuti = _field.nama_cuti.jumlah_cuti;
  _field.timbul_cuti = _field.nama_cuti.timbul_cuti;

  if (
    _field.nama_cuti.name === "Cuti Melahirkan" ||  
    _field.nama_cuti.name === "Cuti Melahirkan Premature"
  ) {
    _fieldProperties.tanggal_perkiraan_lahiran.is_hidden = false;
    _field.total_cuti = _field.nama_cuti.jumlah_cuti;
    
    _fieldProperties.tgl_mulai_cuti.is_disable = true;
    _fieldProperties.tgl_selesai_cuti.is_disable = true;

  } else {
    _fieldProperties.tanggal_perkiraan_lahiran.is_hidden = true;
    _field.tgl_mulai_cuti = null;
    _field.tgl_selesai_cuti = null;
    _field.total_cuti = 0;
    _fieldProperties.tgl_mulai_cuti.is_disable = false;
    _fieldProperties.tgl_selesai_cuti.is_disable = false;
  };

  console.log(_field.nama_cuti.jumlah_cuti);
};

console.log(_field);


if (_field.tanggal_perkiraan_lahiran !== null && _field.tanggal_perkiraan_lahiran !== undefined) {
    var kuotaCuti = parseInt(_field.kuota_cuti); // pastikan angka

    if (kuotaCuti >= 30) {
        var thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
        var startDate = new Date(_field.tanggal_perkiraan_lahiran - thirtyDaysInMs);

        var sisaHari = kuotaCuti - 31;
        var sisaHariInMs = sisaHari * 24 * 60 * 60 * 1000;
        var endDate = new Date(_field.tanggal_perkiraan_lahiran + sisaHariInMs);

        _field.tgl_mulai_cuti = startDate.getTime();
        _field.tgl_selesai_cuti = endDate.getTime();
    } else {
        _field.tgl_mulai_cuti = null;
        _field.tgl_selesai_cuti = null;
    }
}
