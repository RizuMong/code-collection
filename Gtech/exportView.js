var result = [
  {
    amount: 1000,
    attachment: [
      {
        name: "683e5d2a2dcb8-Screenshot_423.png",
        url: "https://oss-workflow-automation-img.oss-ap-southeast-5.aliyuncs.com/32982/683e5d2a2dcb8-Screenshot_423.png",
      },
    ],
    company: {
      id: "T4hFajb5uWIh12wA",
      name: "PT. GTECH DIGITAL ASIA",
    },
    company_id: 32982,
    conv_total: 1110,
    created_at: 1748917548464,
    created_by: 22,
    currency: "IDR",
    date: 1748883600000,
    department: {
      id: "4tfFy0YDN9PWOz3W",
      name: "ACCOUNTING",
    },
    description: "",
    due_date: 1751500800000,
    flag: false,
    flow_status: "draft",
    id: "SxKR4vfqPznvIfbi",
    invoice_id: "SxKR4vfqPznvIfbi",
    number: "123345",
    project: [
      {
        percent: 100,
        project_id: "GENERAL",
      },
    ],
    rate: 1,
    supplier: {
      id: "gbomGr57t1RdHfgu",
      name: "PT. BANDO INDONESIA",
    },
    tax: 11,
    tax_added: true,
    tax_amount: 110,
    total: 1110,
    updated_at: 1748917548464,
    updated_by: 22,
  },
];

function safeVal(val) {
  return val !== null && val !== undefined ? val : "";
};

var data = [];
for (var m = 0; m < result.length; m++) {
  var item = result[m];
  data.push({
    company: safeVal(company.name),
    department: safeVal(department.name),
    supplier: safeVal(supplier.name),
    date: safeVal(date),
    invoice_number: safeVal(number),
  });
}

// Inisiasi export Excel
var fileName = "Report.xlsx";
var sheetName = "Report";

var headerMap = {
  company: "Company",
  department: "Departement",
  supplier: "Supplier",
  date: "Invoice Date",
  number: "Invoice Number",
  amount: "Total",
};

var headerOrder = [
  "company",
  "department",
  "supplier",
  "date",
  "number",
  "amount",
];

_exportExcel(fileName, sheetName, data, headerMap, headerOrder);

console.log(data);


res = [
  "id_malas_1",
  "id_malas_2",
  "id_malas_3",
]