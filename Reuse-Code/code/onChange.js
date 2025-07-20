_fieldProperties.employee_id.is_hidden = true;
_fieldProperties.position_id.is_hidden = true;

if (_field.type === "literal") {
  _fieldProperties.employee_id.is_hidden = false;
  _fieldProperties.position_id.is_hidden = false;
  _fieldProperties.position_id.is_mandatory = true;
}

if (_field.type === "temporary") {
  _fieldProperties.employee_id.is_hidden = false;
  _fieldProperties.position_id.is_hidden = true;
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
};
