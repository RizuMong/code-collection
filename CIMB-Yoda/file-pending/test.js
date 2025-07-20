if (_field.select_action === "Spesific") {
  _fieldProperties.filename.is_hidden = false;
  _fieldProperties.filename.is_mandatory = true;
};

if (_field.select_action === "All") {
  _fieldProperties.filename.is_hidden = true;
  _fieldProperties.filename.is_mandatory = false;
};
