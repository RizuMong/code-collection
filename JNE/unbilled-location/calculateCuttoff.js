var payload = {
  dataParameter: {
    cutt_off: 1722798233000, // 16 July Cut Off Date
  },
};

var connotes = [
  {
    adjusted_amount_number: 46170,
    adjusted_insurance_admin_number: 0,
    adjusted_insurance_premi_number: 0,
    awb_date: 1714917622000, // 5 Mei
    awb_number: "JT74856591976",
    branch_id: "CGK",
    customer_id: "80514305",
    destination_branch_id: "AMI",
    destination_urban_village_name: "PAGESANGAN",
    discount_amount_awb_number: 10830,
    invoice_date: 1721149200000, // 16 Jul
    national_parent_id: "JNESHOPE0000002",
    origin_branch_id: "CGK",
    origin_urban_village_name: "CENGKARENG BARAT",
    original_amount_number: 57000,
    original_insurance_admin: "0",
    original_insurance_premi: "0",
    other_charges_number: 0,
    packing_number: 0,
    status_connote: "Invoiced, FP not Generated",
    surcharge_number: 0,
    total_packing_charges_number: 0,
  },
  {
    adjusted_amount_number: 46170,
    adjusted_insurance_admin_number: 0,
    adjusted_insurance_premi_number: 0,
    awb_date: 1714917622000, // 5 Mei
    awb_number: "JT74856591976",
    branch_id: "CGK",
    customer_id: "80514305",
    destination_branch_id: "AMI",
    destination_urban_village_name: "PAGESANGAN",
    discount_amount_awb_number: 10830,
    invoice_date: 1721149200000, // 16 Jul
    national_parent_id: "JNESHOPE0000002",
    origin_branch_id: "CGK",
    origin_urban_village_name: "CENGKARENG BARAT",
    original_amount_number: 57000,
    original_insurance_admin: "0",
    original_insurance_premi: "0",
    other_charges_number: 0,
    packing_number: 1721149200000,
    status_connote: "Invoiced, FP not Generated",
    surcharge_number: 0,
    total_packing_charges_number: 0,
  },
];

var cutOff = payload.dataParameter.cutt_off;

var dataConnote = [];

connotes.forEach(function (item) {
    if (!item.invoice_date) {
        dataConnote.push(item);
    } else if (item.invoice_date > cutOff) {
        dataConnote.push(item);
    } else if (item.invoice_date <= cutOff) {
        if (item.status_connote == "Open" ||
            item.status_connote == "Ready to be Invoiced" ||
            item.status_connote == "Received & Sorted" ||
            item.status_connote == "Invoiced, FP not Generated" ||
            item.status_connote == "Invoiced, FP Generated") {
            dataConnote.push(item);
        }
    }
});

console.log(dataConnote.length);
