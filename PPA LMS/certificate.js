_fieldProperties.instructor_name.is_hidden = true;
_fieldProperties.vendor_id.is_hidden = true;

if (_field.type_instructor == "INTERNAL") {
  _fieldProperties.instructor_name.is_hidden = false;
  _fieldProperties.vendor_id.is_hidden = true;
}

if (_field.type_instructor == "EXTERNAL" || _field.type_instructor == "PUBLIC") {
  _fieldProperties.instructor_name.is_hidden = true;
  _fieldProperties.vendor_id.is_hidden = false;
};