var payload = {
  address: "CIMB Niaga",
  bank_account_holder_name: "Andi",
  bank_account_number: 6088122129,
  bank_branch_name: "BRANCH",
  bank_name: "PT Bank CIMB Niaga TBK",
  company_id: 25236,
  country: "Indonesia",
  created_at: 1716367089502,
  created_by: 166466,
  date_of_birth: "30/09/1966",
  direct_supervisor_email: "sendmail-test-discard@oracle.com",
  direct_supervisor_employee_code: "3008499",
  direct_supervisor_name: "Liyana Abd Majid",
  direct_supervisor_position_name: "Office Support Head - HO & Branches",
  directorate: "Strategy, Finance & SPAPM ID",
  email: "tuwir@mailinator.com",
  employee_code: "700021",
  employee_status: "Active",
  employment_type: "Permanent",
  filename: "CIMB_SMART_YODA_20230206115124.csv",
  first_name: "Tuwire",
  gender: "Male",
  grade: "U10",
  id: "3_RoTxPSR",
  identity_number: "712121211121",
  ids: "3_RoTxPSR",
  last_name: "Andia",
  marital_status: "Married",
  officebase_location: "Kantor Pusat - Griya Niaga 1",
  place_of_birth: "Sukabumi",
  position_code: "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
  position_layer: "D4",
  position_name: "3004174-Office Support Officer - HO & Branches - GN1 Bintaro",
  post_code: 13720,
  rc_code: "1-611-470-773-008",
  state: "DKI Jakarta",
  status_record: "Ready to Validate Position",
  sub_directorate: "Strategic Procurement & Admin Property Management ID",
  tax_identification_number: "7212121211",
  updated_at: 1716370089164,
  updated_by: 166468,
};

var parts = payload.position_name.split('-');
var nik_karyawan = parts.shift().trim();
var position_name = parts.join('-').trim();
payload.nik_karyawan = nik_karyawan;
payload.position_name = position_name;

console.log(payload);
