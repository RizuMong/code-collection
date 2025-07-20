var listHeader = [
  "code_event",
  "department_code",
  "department_org_code",
  "equipment_group",
  "jabatan_code",
  "status_kelulusan",
  "training_site",
  "year"
];

for (i in listHeader) {
  if (payload[listHeader[i]]) {
    payload[listHeader[i]] = payload[listHeader[i]].toUpperCase();
  }
}
