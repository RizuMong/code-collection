var req = {
  body: {
    amltag: "N",
    bank_data_relationship_desc: "",
    business_entity: "PT",
    certificate_residence: "",
    citizen_status: "WNI",
    content_type: "vendor_info_update",
    corporate_government: "Corporate",
    data_operation: "VENDOR_CREATE_DOWNLOAD",
    date: "2024-02-21",
    declarationwith_bank: "N",
    declarationwith_bank_data: "N",
    dgtnumber: "",
    dhntag: "Y",
    file_id: "A18666E0-0807-49AB-8845-A407CF08",
    gfmsvendor_code: "20332",
    identification_number: "",
    is_last_record: true,
    national_currency: "IDR",
    ndpvendor_code: "T3000000014",
    npwpnumber: "01.988.988.1-988.111",
    others_business_entity: "",
    phone_number: "",
    pkpnumber: "",
    relationship_desc: "",
    request_by_bu: "1611-47077-3014",
    requestor_email: "testcreate@mailinator.com",
    resident_status: "Resident",
    risk_profile_level: "Medium",
    siujkclassification: "",
    siujknumber: "",
    skbpajak: "",
    sketpajak: "",
    sliktag: "N",
    source: "NDP",
    status: "Send",
    sub_typeof_business: "Software",
    target: "SMART",
    time: "9:10:10",
    typeof_business: "IT Related",
    vendor_description: "Test Update Info yaa",
    vendor_name: "PT Officeless 3 Diupdate DAYAT",
    vendor_registration_date: "",
    vendor_registration_number: "",
    vendor_status: "Active",
    vendor_type: "Vendor Type 1 Perorangan",
  },
};

var data = {
  address: [],
  aml: "",
  attachment: [],
  bank_account: [],
  business_entity: {},
  business_permit_attachment: "",
  business_permit_number: "",
  business_type: "",
  certificate_attachment: "",
  certificate_date: null,
  certificate_number: "",
  citizen_status: "",
  classification: "",
  code: "",
  cor: false,
  cor_attachment: "",
  cor_expired_date: null,
  cor_number: "",
  corporate_government: "",
  cross_checking: "",
  ctbc: "",
  customer_data_transfer: false,
  customer_data_transfer_note: "",
  deed_of_establishment_attachment: "",
  deed_of_establishment_date: null,
  deed_of_establishment_number: "",
  description: "",
  dgt_attachment: "",
  dgt_number: "",
  dhn: "",
  director_commissioner_attachment: "",
  director_commissioner_email: "",
  director_commissioner_name: "",
  director_commissioner_nik: "",
  employee_relationship: false,
  employee_relationship_note: "",
  have_dgt: false,
  have_npwp: true,
  have_pkp: false,
  have_skb: false,
  have_sket: false,
  identification_number: "",
  implementation_service: "",
  is_ep: false,
  it_business_type: [],
  mapping_division: false,
  name: "Bangun Loka ",
  national_currency: "",
  non_it_business_type: [],
  npwp: "",
  npwp_attachment: "",
  other_classification: "",
  other_implementation_service: "",
  phone_number: "",
  pic_name: {},
  pkp_attachment: "",
  pkp_number: "",
  requested_by: {},
  resident_status: "",
  risk_profile: "",
  siup_attachment: "",
  siup_date: null,
  siup_number: "",
  skb_attachment: "",
  skb_number: "",
  sket_attachment: "",
  sket_expired_date: null,
  sket_number: "",
  slik: "",
  state: "",
  status: "",
  tdp_attachment: "",
  tdp_date: null,
  tdp_number: "",
  vendor_id: "", //
  vendor_type: {}, //
  visit_date: null,
};

data.vendor_id = req.data.body.ndpvendor_code;
data.status = req.data.body.vendor_status;
data.aml = req.data.body.amltag;
data.business_entity = req.data.body.business_entity;
data.corporate_government = req.data.body.corporate_government;
data.dgt_number = req.data.body.dgtnumber;
data.dhn = req.data.body.dhntag;
data.dhn = req.data.body.dhntag;
data.identification_number = req.data.body.identification_number;
data.npwp = req.data.body.npwpnumber;
data.phone_number = req.data.body.phone_number;
data.pkp_number = req.data.body.pkpnumber;
data.requested_by = req.data.body.request_by_bu;
data.resident_status = req.data.body.resident_status;
data.risk_profile = req.data.body.risk_profile_level;
data.siup_date = req.data.body.vendor_registration_date;
data.siup_number = req.data.body.vendor_registration_number;
data.skb_number = req.data.body.skbpajak;
data.sket_number = req.data.body.sketpajak;
data.slik = req.data.body.sliktag;

/*
  - Kalau ada kebutuhan Upsert -
  data.vendor_type = _hitFunction("func_upsert_vendor_type_ndp", { // Soon
    "data": req.data.body.VendorType
  });
*/
