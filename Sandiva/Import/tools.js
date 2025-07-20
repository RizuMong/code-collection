if (_field.category && _field.category != "Import Baru") {
  _fieldProperties.name.is_hidden = false;
  _fieldProperties.name_batch_id.is_hidden = true;
} else if (_field.category) {
  _fieldProperties.name.is_hidden = true;
  _fieldProperties.name_batch_id.is_hidden = false;
}

if (_field.category == "Import Revisi") {
  _fieldProperties.name.is_hidden = true;
  _fieldProperties.name_batch_id.is_hidden = false;
};

if (_field.category == "Import Baru") {
  _fieldProperties.name.is_hidden = false;
  _fieldProperties.name_batch_id.is_hidden = true;
};
