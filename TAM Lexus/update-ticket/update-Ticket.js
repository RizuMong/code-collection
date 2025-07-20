var request = {
  body: {
    additional_fields: [
      {
        id: 13562284,
        name: "customer_public_id",
        value: null,
        value_name: null,
      },
      {
        id: 14168845,
        name: "ldms_wo_id",
        value: null,
        value_name: null,
      },
      {
        id: 13562529,
        name: "ldms_customer_id",
        value: "19-CP-0001158",
        value_name: "19-CP-0001158",
      },
      {
        id: 13560808,
        name: "subject_type",
        value: null,
        value_name: null,
      },
      {
        id: 13561332,
        name: "sub_category",
        value: "3837278",
        value_name: "Request",
      },
      {
        id: 13561075,
        name: "category",
        value: "3837207",
        value_name: "Request",
      },
      {
        id: 14536533,
        name: "remarks",
        value: null,
        value_name: null,
      },
      {
        id: 14181431,
        name: "description",
        value: "",
        value_name: "",
      },
    ],
    created_at: "2024-10-02T13:24:20.474+07:00",
    creator_id: 185776,
    creator_name: "Rizky Pambudi -",
    crm_pipeline_id: 151845,
    crm_pipeline_name: "LMCS",
    crm_stage_id: 914395,
    crm_stage_name: "Open",
    currency: "IDR",
    external_company_id: 836993,
    id: 56441371,
    name: "A. HERMANTO A. HERMANTO",
    slug: "c1c11a9f-ea69-4298-9f22-366ffa53ddac",
    updated_at: "2024-10-02T13:24:20.744+07:00",
  },
};

var payloadAPIQontak = request.body;
var ldms_customer_id,
  customer_public_id,
  subject_type,
  category,
  sub_category,
  remarks,
  description;

payloadAPIQontak.additional_fields.forEach(function (field) {
  switch (field.name) {
    case "ldms_customer_id":
      ldms_customer_id = field;
      break;
    case "customer_public_id":
      customer_public_id = field;
      break;
    case "subject_type":
      subject_type = field;
      break;
    case "category":
      category = field;
      break;
    case "sub_category":
      sub_category = field;
      break;
    case "remarks":
      remarks = field;
      break;
  }
});

if (ldms_customer_id && ldms_customer_id.value) {
  customer_public_id.value = ldms_customer_id.value;
  customer_public_id.value_name = ldms_customer_id.value_name;
}

if (customer_public_id && customer_public_id.value) {
  ldms_customer_id.value = customer_public_id.value;
  ldms_customer_id.value_name = customer_public_id.value_name;
}

var subjectType =
  request.body.crm_pipeline_name === "Sales" ? "Sales" : "After Sales";

if (subject_type) {
  subject_type.value = 3837161;
  subject_type.value_name = subjectType;
}

if (category) {
  category.value = 3837207; // Request
  category.value_name = "Request";
}
if (sub_category) {
  sub_category.value = 3837278; // Request
  sub_category.value_name = "Request";
}
if (remarks) {
  remarks.value = request.body.crm_pipeline_name; // LMCS
  remarks.value_name = request.body.crm_pipeline_name;
}
if (description) {
  description.value = request.body.crm_pipeline_name; // LMCS
  description.value_name = request.body.crm_pipeline_name;
}

console.log(payloadAPIQontak);
