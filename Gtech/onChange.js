var _field = {
  _amount: {
    convertion_amount: 200000000,
    origin_amount: 200000000,
    origin_currency: "IDR",
    rate: 1,
    target_currency: "IDR",
  },
  _tax_amount: {
    conversion_amount: 22000000,
    convertion_amount: 22000000,
    origin_amount: 22000000,
    origin_currency: "IDR",
    rate: 1,
    target_currency: "IDR",
  },
  _total: {
    conversion_amount: 222000000,
    convertion_amount: 222000000,
    origin_amount: 222000000,
    origin_currency: "IDR",
    rate: 1,
    target_currency: "IDR",
  },
  admin: 132,
  amount: 200000000,
  assigned: 0,
  attachment: [
    {
      name: "-",
      url: "zIT_OK8NR",
    },
    {
      name: "68787a7ab79bb-gtech.jpg",
      url: "https://oss-workflow-automation-img.oss-ap-southeast-5.aliyuncs.com/32982/68787a7ab79bb-gtech.jpg",
    },
  ],
  company: {
    id: "312kRT7FbLhDW9V4",
    name: "DEVELOPMENT",
  },
  company_id: 32982,
  conv_total: 222000000,
  created_at: 1752634565844,
  created_by: 126,
  currency: "IDR",
  current_approver: 132,
  date: 1751302800000,
  department: {
    id: "izedHk7yTXoWDEUb",
    name: "CORPORATE SOLUTIONS",
  },
  description: "",
  due_date: 1755795600000,
  flag: false,
  flow_id: 139884870,
  flow_status: "draft",
  id: "MWTj2panoyxW",
  invoice_id: "MWTj2panoyxW",
  note: '"invoice perlu direvisi ulang"',
  number: "FK XXXX",
  projects: [
    {
      percent: 40,
      project: {
        id: "Xn3uHr0bTbw",
        name: "PRO_A",
      },
    },
    {
      percent: 60,
      project: {
        id: "pQsCBJTkMl5T",
        name: "PRO_B",
      },
    },
  ],
  rate: 1,
  supplier: {
    id: "UK4D7VsdA1IELyRf",
    name: "FUTSAL KOE",
  },
  tax: 11,
  tax_added: true,
  tax_amount: 22000000,
  total: 222000000,
  updated_at: 1752809391258,
  updated_by: 20,
};

if (_field._doc) {
    _field.description = "A=" + _field._doc.supplier_id + "  :  B=" + _field.supplier.id;
    if (_field._doc.supplier_id != _field.supplier.id) {
        if (_field.date) {            
            var dd = (new Date(_field.date)).addDays(30).getTime();
            _field.due_date = dd;
            _field.description = _field.description + " Set new_dd:" + (new Date(dd)).toLocaleString() + " at " + (new Date()).toLocaleTimeString();
        }
    }
}
else {
    _field._doc = {
        supplier_id: _field.supplier.id,
        date: _field.date
    };
    _field.description = JSON.stringify(_field._doc);
}


console.log(_field.description);