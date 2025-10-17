console.log(_field.id_pengajuan);

if (!_field.id_pengajuan) {
    _field.nama_cuti = null;
} else {
    _field.nama_cuti = {
        "id": _field.id_pengajuan.permission_id.id,
        "name": _field.id_pengajuan.permission_id.name,
        "label": _field.id_pengajuan.permission_id.name,
    };

    _field.master_kuota_cuti = _field.id_pengajuan.master_leave_quota;
    _field.kuota_cuti = _field.id_pengajuan.kuota_cuti;
    _field.no_handphone = _field.id_pengajuan.no_handphone;
    _field.delegasi = _field.id_pengajuan.delegasi;
    _field.tanggal_perkiraan_lahiran = _field.id_pengajuan.tanggal_perkiraan_lahiran;
    _field.tgl_mulai_cuti = _field.id_pengajuan.start_date;
    _field.tgl_selesai_cuti = _field.id_pengajuan.end_date;
    _field.total_cuti = _field.id_pengajuan.total_date;
    _field.one_request = _field.id_pengajuan.one_request;
    _field.is_allowance = _field.id_pengajuan.is_allowance;
    _field.deduct_holiday = _field.id_pengajuan.deduct_holiday;
    _field.deduct_joint_holiday = _field.id_pengajuan.deduct_joint_holiday;
    _field.allowance_take_date = _field.id_pengajuan.allowance_take_date;
    _field.alasan = _field.id_pengajuan.reason;
    _field.attachments = _field.id_pengajuan.attachments;
    _field.kadaluarsa_cuti = _field.id_pengajuan.leave_expiry_date;
    _field.workflow_id = _field.id_pengajuan.workflow_id;
    _field.kadaluarsa_pengajuan = _field.id_pengajuan.submission_exp_ts;
    // _field.is_allowance_take = _field.id_pengajuan.is_allowance_take;

    if (_field.id_pengajuan.is_allowance_take === "taken") {
        _field.is_allowance_take = "Sudah Diambil";
    }

    if (_field.id_pengajuan.is_allowance_take === "available") {
        _field.is_allowance_take = "Belum Diambil";
    }

    if (_field.id_pengajuan.is_allowance_take === "not_applicable") {
        _field.is_allowance_take = "Tidak Terdapat Tunjangan";
    }

    // console.log(_field.nama_cuti);
}