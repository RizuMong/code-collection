_fieldProperties.employee_id.is_hidden = true;
_fieldProperties.position_id.is_hidden = true;

if (_field.type === "literal") {
  _fieldProperties.employee_id.is_hidden = false;
  _fieldProperties.position_id.is_hidden = false;
  _fieldProperties.position_id.is_mandatory = true;
}

if (_field.status_transaksi === "Selesai") {
  _fieldProperties.mekanisme_pembayaran.is_disable = true;
}

if (_field.jalur_otorisasi === "SEJAJAR") {
  _fieldProperties.level_otorisasi.is_hidden = true;
  _field.level_otorisasi = "";
} else if (_field.jalur_otorisasi === "BAWAH") {
  _fieldProperties.level_otorisasi.is_hidden = false;
}

if (_field.level_otorisasi === "1") {
  _fieldProperties.unit_kerja_ids_1.is_hidden = false;
} else {
  _fieldProperties.unit_kerja_ids_1.is_hidden = true;
  _fieldProperties.unit_kerja_ids_2.is_hidden = true;
  _fieldProperties.unit_kerja_ids_3.is_hidden = true;
  _fieldProperties.unit_kerja_ids_4.is_hidden = true;
  _fieldProperties.unit_kerja_ids_5.is_hidden = true;
}

if (_field.level_otorisasi === "2") {
  _fieldProperties.unit_kerja_ids_1.is_hidden = false;
  _fieldProperties.unit_kerja_ids_2.is_hidden = false;
} else {
  _fieldProperties.unit_kerja_ids_1.is_hidden = true;
  _fieldProperties.unit_kerja_ids_2.is_hidden = true;
  _fieldProperties.unit_kerja_ids_3.is_hidden = true;
  _fieldProperties.unit_kerja_ids_4.is_hidden = true;
  _fieldProperties.unit_kerja_ids_5.is_hidden = true;
}

if (_field.level_otorisasi === "3") {
  _fieldProperties.unit_kerja_ids_1.is_hidden = false;
  _fieldProperties.unit_kerja_ids_2.is_hidden = false;
  _fieldProperties.unit_kerja_ids_3.is_hidden = false;
} else {
  _fieldProperties.unit_kerja_ids_1.is_hidden = true;
  _fieldProperties.unit_kerja_ids_2.is_hidden = true;
  _fieldProperties.unit_kerja_ids_3.is_hidden = true;
  _fieldProperties.unit_kerja_ids_4.is_hidden = true;
  _fieldProperties.unit_kerja_ids_5.is_hidden = true;
}

if (_field.level_otorisasi === "4") {
  _fieldProperties.unit_kerja_ids_1.is_hidden = false;
  _fieldProperties.unit_kerja_ids_2.is_hidden = false;
  _fieldProperties.unit_kerja_ids_3.is_hidden = false;
  _fieldProperties.unit_kerja_ids_4.is_hidden = false;
} else {
  _fieldProperties.unit_kerja_ids_1.is_hidden = true;
  _fieldProperties.unit_kerja_ids_2.is_hidden = true;
  _fieldProperties.unit_kerja_ids_3.is_hidden = true;
  _fieldProperties.unit_kerja_ids_4.is_hidden = true;
  _fieldProperties.unit_kerja_ids_5.is_hidden = true;
}

if (_field.level_otorisasi === "5") {
  _fieldProperties.unit_kerja_ids_1.is_hidden = false;
  _fieldProperties.unit_kerja_ids_2.is_hidden = false;
  _fieldProperties.unit_kerja_ids_3.is_hidden = false;
  _fieldProperties.unit_kerja_ids_4.is_hidden = false;
  _fieldProperties.unit_kerja_ids_5.is_hidden = false;
} else {
  _fieldProperties.unit_kerja_ids_1.is_hidden = true;
  _fieldProperties.unit_kerja_ids_2.is_hidden = true;
  _fieldProperties.unit_kerja_ids_3.is_hidden = true;
  _fieldProperties.unit_kerja_ids_4.is_hidden = true;
  _fieldProperties.unit_kerja_ids_5.is_hidden = true;
}

if (_field.type === "temporary") {
  _fieldProperties.employee_id.is_hidden = false;
  _fieldProperties.position_id.is_hidden = true;
}

if (!_field.unit_kerja_id) {
  _field.kode_unit_kerja = "";
  _field.nama_unit_kerja = "";
  _field.email = "";
} else {
  _field.kode_unit_kerja = _field.unit_kerja_id.kode;
  _field.nama_unit_kerja = _field.unit_kerja_id.nama;
  _field.email = _field.unit_kerja_id.email;
}

// req.body.wfh_quota_id && req.body.wfh_quota_id.id ? req.body.wfh_quota_id.id : "--"

if (!!_field.activity) {
  _field.conference = null;
} else {
  if (_field.activity.name === "QNA") {
    _fieldProperties.conference.is_hidden = false;
  }
}

if (
  _field.nama_cuti.name === "Cuti Melahirkan" ||
  _field.nama_cuti.name === "Cuti Melahirkan Premature"
) {
  _fieldProperties.tanggal_perkiraan_lahiran.is_hidden = false;
} else {
  _fieldProperties.tanggal_perkiraan_lahiran.is_hidden = true;
  _field.tanggal_perkiraan_lahiran = null;
}

if (!_field.supervise_status) {
  _fieldProperties.struktur_parent.is_hidden = false;
  _fieldProperties.supervise_parent_id.is_hidden = false;
  _fieldProperties.top_organization.is_hidden = false;
} else {
  _fieldProperties.struktur_parent.is_hidden = true;
  _fieldProperties.supervise_parent_id.is_hidden = true;
  _fieldProperties.top_organization.is_hidden = true;

  _field.struktur_parent = null;
  _field.supervise_parent_id = null;
}

if (!_field.top_organization) {
  // _fieldProperties.struktur_parent.is_hidden = false;
  _fieldProperties.supervise_status.is_hidden = false;
} else {
  _fieldProperties.struktur_parent.is_hidden = true;
  _fieldProperties.supervise_status.is_hidden = true;

  _field.struktur_parent = null;
}

if (!_field.supervise_status) {
  _fieldProperties.top_organization.is_hidden = false;
} else {
  _fieldProperties.top_organization.is_hidden = true;
}

if (!_field.top_organization) {
  _fieldProperties.supervise_status.is_hidden = false;
  _fieldProperties.struktur_parent.is_hidden = false;
} else {
  _fieldProperties.struktur_parent.is_hidden = true;
  _fieldProperties.supervise_status.is_hidden = true;
  _field.struktur_parent = null;
}

_fieldProperties.field_name_1.is_hidden = true;
_fieldProperties.field_name_2.is_hidden = true;

if (_field.type === "Case 1") {
  _fieldProperties.field_name_1.is_hidden = false;
  _fieldProperties.field_name_2.is_hidden = true;
}

if (
  _field.billing_types_ref &&
  _field.billing_types_ref.name === "Subscription Annually"
) {
  _field.billing_period_ref = {
    id: "0dEDfQxboFCQtfAJ",
    name: "Annually",
    label: "Annually",
  };
}

if (
  _field.billing_types_ref &&
  _field.billing_types_ref.name === "Subscription Monthly"
) {
  _field.billing_period_ref = {
    id: "RHvq47Ipj7MaeiGI",
    name: "Monthly",
    label: "Monthly",
  };
}

_fieldProperties.agama_id.is_hidden = true;
_fieldProperties.unit_kerja_id.is_hidden = true;

if (_field.pengaturan_khusus) {
  _fieldProperties.agama_id.is_hidden = false;
  _fieldProperties.unit_kerja_id.is_hidden = false;
}

_fieldProperties.wfh_quota_id.is_hidden = true;
_fieldProperties.wfh_quota_days.is_hidden = true;

if (_field.is_custom_wfh) {
  _fieldProperties.wfh_quota_id.is_hidden = false;
  _fieldProperties.wfh_quota_days.is_hidden = false;
}