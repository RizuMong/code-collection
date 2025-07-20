var getListReport = [
  {
    adjusted_amount: 22000,
    adjusted_insurance_admin: 0,
    adjusted_insurance_premi: 0,
    aging_121_180: 0,
    aging_181_360: 0,
    aging_1_30: 0,
    aging_31_60: 0,
    aging_360: 0,
    aging_61_90: 22000,
    aging_91_120: 0,
    branch_id: "CGK",
    customer_id: "12090000",
    destination_branch_id: "JOG",
    destination_urban_village_name: "12090000",
    discount_amount_awb: 0,
    id_parent: "YY3v94rSR",
    ids: "KSr5rVrIRM",
    national_parent: "--",
    national_parent_name: "--",
    origin_branch_id: "CGK",
    origin_urban_village_name: "CGK",
    original_amount: 22000,
    original_insurance_admin: 0,
    original_insurance_premi: 0,
    other_charges: 0,
    packing: 0,
    surcharge: 0,
    total_amount_after_discount_charges: 22000,
    total_connote: 1,
    total_packing_charges: 0,
  },
  {
    adjusted_amount: 22000,
    adjusted_insurance_admin: 0,
    adjusted_insurance_premi: 0,
    aging_121_180: 0,
    aging_181_360: 0,
    aging_1_30: 0,
    aging_31_60: 0,
    aging_360: 0,
    aging_61_90: 22000,
    aging_91_120: 0,
    branch_id: "CGK",
    customer_id: "12090000",
    destination_branch_id: "JOG",
    destination_urban_village_name: "12090000",
    discount_amount_awb: 0,
    id_parent: "YY3v94rSR",
    ids: "KSr5rVrIRM",
    national_parent: "--",
    national_parent_name: "--",
    origin_branch_id: "CGK",
    origin_urban_village_name: "CGK",
    original_amount: 22000,
    original_insurance_admin: 0,
    original_insurance_premi: 0,
    other_charges: 0,
    packing: 0,
    surcharge: 0,
    total_amount_after_discount_charges: 22000,
    total_connote: 1,
    total_packing_charges: 0,
  },
  {
    adjusted_amount: 52000,
    adjusted_insurance_admin: 5000,
    adjusted_insurance_premi: 2000,
    aging_121_180: 0,
    aging_181_360: 0,
    aging_1_30: 0,
    aging_31_60: 0,
    aging_360: 0,
    aging_61_90: 52000,
    aging_91_120: 0,
    branch_id: "CGK",
    customer_id: "10923000",
    destination_branch_id: "PLM",
    destination_urban_village_name: "10923000",
    discount_amount_awb: 0,
    id_parent: "YY3v94rSR",
    ids: "cIrcr4rIRm",
    national_parent: "JNEAGENK0000292",
    national_parent_name: "AGEN KELAPA GADING SQUARE",
    origin_branch_id: "CGK",
    origin_urban_village_name: "CGK",
    original_amount: 52000,
    original_insurance_admin: 5000,
    original_insurance_premi: 2000,
    other_charges: 0,
    packing: 0,
    surcharge: 0,
    total_amount_after_discount_charges: 52000,
    total_connote: 2,
    total_packing_charges: 0,
  },
  {
    adjusted_amount: 52000,
    adjusted_insurance_admin: 5000,
    adjusted_insurance_premi: 2000,
    aging_121_180: 0,
    aging_181_360: 0,
    aging_1_30: 0,
    aging_31_60: 0,
    aging_360: 0,
    aging_61_90: 52000,
    aging_91_120: 0,
    branch_id: "CGK",
    customer_id: "10923000",
    destination_branch_id: "PLM",
    destination_urban_village_name: "10923000",
    discount_amount_awb: 0,
    id_parent: "YY3v94rSR",
    ids: "eawdaswda",
    national_parent: "JNEAGENK0000292",
    national_parent_name: "AGEN KELAPA GADING SQUARE",
    origin_branch_id: "CGK",
    origin_urban_village_name: "CGK",
    original_amount: 52000,
    original_insurance_admin: 5000,
    original_insurance_premi: 2000,
    other_charges: 0,
    packing: 0,
    surcharge: 0,
    total_amount_after_discount_charges: 52000,
    total_connote: 2,
    total_packing_charges: 0,
  },

  {
    adjusted_amount: 52000,
    adjusted_insurance_admin: 5000,
    adjusted_insurance_premi: 2000,
    aging_121_180: 0,
    aging_181_360: 0,
    aging_1_30: 0,
    aging_31_60: 0,
    aging_360: 0,
    aging_61_90: 52000,
    aging_91_120: 0,
    branch_id: "CGK",
    customer_id: "10923000",
    destination_branch_id: "PLM",
    destination_urban_village_name: "10923000",
    discount_amount_awb: 0,
    id_parent: "YY3v94rSR",
    ids: "eawdaswda",
    national_parent: "--",
    national_parent_name: "AGEN KELAPA GADING SQUARE",
    origin_branch_id: "CGK",
    origin_urban_village_name: "LOG",
    original_amount: 52000,
    original_insurance_admin: 5000,
    original_insurance_premi: 2000,
    other_charges: 0,
    packing: 0,
    surcharge: 0,
    total_amount_after_discount_charges: 52000,
    total_connote: 2,
    total_packing_charges: 0,
  },
];

function groupData(data) {
  var groupedData = {};

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var key = item.branch_id + '|' + item.national_parent + '|' + item.origin_branch_id + '|' + item.destination_branch_id;

    if (!groupedData[key]) {
      groupedData[key] = {
        branch_id: item.branch_id,
        national_parent: item.national_parent,
        national_parent_name: item.national_parent_name,
        origin_branch_id: item.origin_branch_id,
        destination_branch_id: item.destination_branch_id,
        adjusted_amount: 0,
        adjusted_insurance_admin: 0,
        adjusted_insurance_premi: 0,
        aging_121_180: 0,
        aging_181_360: 0,
        aging_1_30: 0,
        aging_31_60: 0,
        aging_360: 0,
        aging_61_90: 0,
        aging_91_120: 0,
        original_amount: 0,
        original_insurance_admin: 0,
        original_insurance_premi: 0,
        other_charges: 0,
        packing: 0,
        surcharge: 0,
        total_amount_after_discount_charges: 0,
        total_connote: 0,
        total_packing_charges: 0,
        count: 0
      };
    }

    groupedData[key].adjusted_amount += item.adjusted_amount;
    groupedData[key].adjusted_insurance_admin += item.adjusted_insurance_admin;
    groupedData[key].adjusted_insurance_premi += item.adjusted_insurance_premi;
    groupedData[key].aging_121_180 += item.aging_121_180;
    groupedData[key].aging_181_360 += item.aging_181_360;
    groupedData[key].aging_1_30 += item.aging_1_30;
    groupedData[key].aging_31_60 += item.aging_31_60;
    groupedData[key].aging_360 += item.aging_360;
    groupedData[key].aging_61_90 += item.aging_61_90;
    groupedData[key].aging_91_120 += item.aging_91_120;
    groupedData[key].original_amount += item.original_amount;
    groupedData[key].original_insurance_admin += item.original_insurance_admin;
    groupedData[key].original_insurance_premi += item.original_insurance_premi;
    groupedData[key].other_charges += item.other_charges;
    groupedData[key].packing += item.packing;
    groupedData[key].surcharge += item.surcharge;
    groupedData[key].total_amount_after_discount_charges += item.total_amount_after_discount_charges;
    groupedData[key].total_connote += item.total_connote;
    groupedData[key].total_packing_charges += item.total_packing_charges;
    groupedData[key].count += 1;
  }

  var result = [];
  for (var key in groupedData) {
    if (groupedData.hasOwnProperty(key) && groupedData[key].count > 1) {
      result.push(groupedData[key]);
    }
  }

  return result;
}

var groupedResult = groupData(getListReport);
console.log(groupedResult);
