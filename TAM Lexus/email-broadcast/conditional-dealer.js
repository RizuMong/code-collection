var req = {
  body: {
    additional_fields: [
      {
        id: 13473278,
        name: "destination",
        value: "3800176",
        value_name: "Lexus Mampang",
      },
      {
        id: 13473277,
        name: "location",
        value: "3800171",
        value_name: "East Jakarta",
      },
      {
        "id": 14981716,
        "name": "inquiry",
        "value": "4372037",
        "value_name": "Customer Database"
    },
    ],
    created_at: "2024-09-13T08:42:05.841+07:00",
    creator_id: 185776,
    creator_name: "Rizky Pambudi -",
    crm_pipeline_id: 151845,
    crm_pipeline_name: "Sales",
    crm_stage_id: 914396,
    crm_stage_name: "On Progress",
    currency: "IDR",
    external_company_id: 836993,
    id: 55801139,
    name: "Mick Schumacher",
    size: "0.0",
    slug: "17974566-8ebf-42ec-9e06-b6443d0918fe",
    updated_at: "2024-09-25T09:03:08.981+07:00",
  },
};

var additionalFields = req.body.additional_fields;
var location, destination, inquiry;

var listPipelineSales = [
  "Sales"
];

var listPipelineAfterSales = [
  "After Sales",
  "Complaint",
  "e-Care Periodic",
  "e-Care Preventive",
  "LMCS",
  "Accident",
  "Device Trouble",
  "Lost Car (SVT)"
];

additionalFields.forEach(function (item) {
  if (item.name == "inquiry") inquiry = item.value_name;
  if (item.name == "location") location = item.value_name;
  if (item.name == "destination") destination = item.value_name;
});

if (listPipelineSales.indexOf(req.body.crm_pipeline_name) !== -1  && location && destination && inquiry) {
  console.log("Broadcast Email Dealer Sales");
};

if (listPipelineAfterSales.indexOf(req.body.crm_pipeline_name) !== -1 && location && destination && inquiry) {
  console.log("Broadcast Email Dealer After Sales");
};