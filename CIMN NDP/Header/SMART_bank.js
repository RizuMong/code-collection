var req = {
  fileHeader: {
    file_id: "123",
    date: "123",
    time: "123",
    source: "123",
    target: "123",
    status: "123",
    data_operation: "123",
    bank_id: "123",
    update_tag: "123",
    bank_name: "123",
    bank_initial: "123",
    swift_code: "123",
    bank_country: "123",
    bank_number: "123",
    bank_status: "123",
  },
};

var headers = [
  "file_id",
  "date",
  "time",
  "source",
  "target",
  "status",
  "data_operation",
  "bank_id",
  "update_tag",
  "bank_name",
  "bank_initial",
  "swift_code",
  "bank_country",
  "bank_number",
  "bank_status",
];

var fileHeader = req.fileHeader;
var fileHeaderValidity = true;

for (var idx = 0; idx < headers.length; idx++) {
  if (fileHeader[headers[idx]] === undefined) {
    fileHeaderValidity = false;
    break;
  }
}

console.log(fileHeaderValidity);



if (!_field.expense_category) {
  // Text
  _field.klasifikasi = null;
} else {
  // Text
  _fieldProperties.klasifikasi.is_hidden = false;
  _field.klasifikasi = _field.expense_category.klasifikasi;
}