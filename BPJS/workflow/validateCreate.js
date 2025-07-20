var getListApprovalLines = [
  {
    company_id: 27414,
    created_at: 1739529078652,
    created_by: 178566,
    id: "9ul28GcNR",
    id_approval_line: "9ul28GcNR",
    lines: [
      {
        approver_type: "BY REPORTING LINE",
        level: 1,
        position_id: {
          id: "",
          name: "",
        },
      },
      {
        approver_type: "BY POSITION",
        level: null,
        position_id: {
          id: "RTVBsMcNg",
          name: "Staff Finance",
        },
      },
      {
        approver_type: "BY REPORTING LINE",
        level: 2,
        position_id: {
          id: "",
          name: "",
        },
      },
    ],
    unit_kerja_ids: [
      {
        id: "Qp9UeW5NR",
        name: "UNIT TAMBAH ISTRI",
      },
    ],
    updated_at: 1739529196482,
    updated_by: 178566,
    workflow_id: "hs3dUMcHg",
  },
  {
    company_id: 27414,
    created_at: 1739763878817,
    created_by: 178566,
    id: "kjK5UK5HR",
    id_approval_line: "kjK5UK5HR",
    lines: [
      {
        approver_type: "BY POSITION",
        level: null,
        position_id: {
          id: "RTVBsMcNg",
          name: "Staff Finance",
        },
      },
    ],
    unit_kerja_ids: [
      {
        id: "kBhl6Z5Ng",
        name: "UNIT MBG",
      },
    ],
    updated_at: 1739763878817,
    updated_by: 178566,
    workflow_id: "hs3dUMcHg",
  },
  {
    company_id: 27414,
    created_at: 1739763900124,
    created_by: 178566,
    id: "9ERp8FcHR",
    id_approval_line: "9ERp8FcHR",
    lines: [
      {
        approver_type: "BY POSITION",
        level: null,
        position_id: {
          id: "oaNlPFcNg",
          name: "Petugas Pemeriksa Cabang",
        },
      },
    ],
    unit_kerja_ids: [
      {
        id: "Qp9UeW5NR",
        name: "UNIT TAMBAH ISTRI",
      },
    ],
    updated_at: 1739763900124,
    updated_by: 178566,
    workflow_id: "hs3dUMcHg",
  },
];  

var req = {
  body: {
    data: {
      id_approval_line: "9ERp8FcHR",
      lines: [
        {
          approver_type: "BY POSITION",
          level: null,
          position_id: {
            id: "oaNlPFcNg",
            name: "Petugas Pemeriksa Cabang",
          },
        },
      ],
      unit_kerja_ids: [
        {
          id: "Qp9UeW5NR",
          name: "UNIT TAMBAH ISTRI",
        },
      ],
      workflow_id: "hs3dUMcHg",
    },
    type: "update",
  },
};


var isDuplicate = false;
var duplicateUnits = [];

if (req.body.type === "create") {
  getListApprovalLines.forEach(function (item) {
    item.unit_kerja_ids.forEach(function (unit) {
      req.body.data.unit_kerja_ids.forEach(function (reqUnit) {
        if (unit.id === reqUnit.id) {
          isDuplicate = true;
          if (duplicateUnits.indexOf(reqUnit.name) === -1) {
            duplicateUnits.push(reqUnit.name);
          }
        }
      });
    });
  });

} else if (req.body.type === "update") {
  getListApprovalLines.forEach(function (item) {
    if (item.id_approval_line !== req.body.data.id_approval_line) {
      item.unit_kerja_ids.forEach(function (unit) {
        req.body.data.unit_kerja_ids.forEach(function (reqUnit) {
          if (unit.id === reqUnit.id) {
            isDuplicate = true;
            if (duplicateUnits.indexOf(reqUnit.name) === -1) {
              duplicateUnits.push(reqUnit.name);
            }
          }
        });
      });
    }
  });
}

if (isDuplicate) {
  console.log("Duplicate found in unit kerja: " + duplicateUnits.join(", "));
};

// {
//   "error": true,
//   "message": "Duplicate entry detected for Unit Kerja: UNIT TAMBAH ISTRI. Please ensure the unit name is unique.",
//   "statusCode": 409
// }


// const data = [
//   {
//     "id": "9ul28GcNR",
//     "name": "UNIT TAMBAH ISTRI",
//   }
// ]


// {
//   "category_layer": "Sub Ledger",
//   "sl_expense_activity": data,
// }

// getExpenseClassification && getExpenseClassification.parent_category && getExpenseClassification.parent_category.id ? getExpenseClassification.parent_category.id : "--"
// getExpenseCategory && getExpenseCategory.parent_category && getExpenseCategory.parent_category.id ? getExpenseCategory.parent_category.id : "--"