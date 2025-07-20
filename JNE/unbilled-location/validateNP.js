var getListReport = [
  {
    "adjusted_amount": 14000,
    "adjusted_insurance_admin": 0,
    "adjusted_insurance_premi": 0,
    "aging_121_180": 0,
    "aging_181_360": 14000,
    "aging_1_30": 0,
    "aging_31_60": 0,
    "aging_360": 0,
    "aging_61_90": 0,
    "aging_91_120": 0,
    "branch_id": "BDO",
    "customer_id": "80563300",
    "destination_branch_id": "BOO",
    "destination_urban_village_name": "ATANG SENJAYA",
    "discount_amount_awb": 0,
    "id_parent": "65zmPPuSg",
    "ids": "tT5ZEEXIR",
    "is_unique": false,
    "national_parent": "JNESETIA0000001",
    "national_parent_name": "SETIAP HARI DIPAKAI",
    "origin_branch_id": "BDO",
    "origin_urban_village_name": "DAGO",
    "original_amount": 14000,
    "original_insurance_admin": 0,
    "original_insurance_premi": 0,
    "other_charges": 0,
    "packing": 0,
    "surcharge": 0,
    "total_amount_after_discount_charges": 14000,
    "total_connote": 1,
    "total_packing_charges": 0
},
{
    "adjusted_amount": 101360,
    "adjusted_insurance_admin": 0,
    "adjusted_insurance_premi": 0,
    "aging_121_180": 0,
    "aging_181_360": 101360,
    "aging_1_30": 0,
    "aging_31_60": 0,
    "aging_360": 0,
    "aging_61_90": 0,
    "aging_91_120": 0,
    "branch_id": "BDO",
    "customer_id": "80561601",
    "destination_branch_id": "BOO",
    "destination_urban_village_name": "ATANG SENJAYA",
    "discount_amount_awb": 8640,
    "id_parent": "65zmPPuSg",
    "ids": "pTcZEEXSRz",
    "is_unique": false,
    "national_parent": "JNETOKOP0000001",
    "national_parent_name": "TOKOPEDIA",
    "origin_branch_id": "BDO",
    "origin_urban_village_name": "DAGO",
    "original_amount": 110000,
    "original_insurance_admin": 0,
    "original_insurance_premi": 0,
    "other_charges": 0,
    "packing": 0,
    "surcharge": 0,
    "total_amount_after_discount_charges": 101360,
    "total_connote": 7,
    "total_packing_charges": 0
},
{
    "adjusted_amount": 90000,
    "adjusted_insurance_admin": 0,
    "adjusted_insurance_premi": 0,
    "aging_121_180": 0,
    "aging_181_360": 90000,
    "aging_1_30": 0,
    "aging_31_60": 0,
    "aging_360": 0,
    "aging_61_90": 0,
    "aging_91_120": 0,
    "branch_id": "BDO",
    "customer_id": "80070100",
    "destination_branch_id": "BOO",
    "destination_urban_village_name": "ATANG SENJAYA",
    "discount_amount_awb": 0,
    "id_parent": "65zmPPuSg",
    "ids": "tT5WEPuIRm",
    "is_unique": false,
    "national_parent": "JNELAZAD0000001",
    "national_parent_name": "LAZADA ",
    "origin_branch_id": "BDO",
    "origin_urban_village_name": "DAGO",
    "original_amount": 90000,
    "original_insurance_admin": 0,
    "original_insurance_premi": 0,
    "other_charges": 0,
    "packing": 0,
    "surcharge": 0,
    "total_amount_after_discount_charges": 90000,
    "total_connote": 2,
    "total_packing_charges": 0
},
{
    "adjusted_amount": 14000,
    "adjusted_insurance_admin": 0,
    "adjusted_insurance_premi": 0,
    "aging_121_180": 0,
    "aging_181_360": 14000,
    "aging_1_30": 0,
    "aging_31_60": 0,
    "aging_360": 0,
    "aging_61_90": 0,
    "aging_91_120": 0,
    "branch_id": "BDO",
    "customer_id": "80668700",
    "destination_branch_id": "BOO",
    "destination_urban_village_name": "ATANG SENJAYA",
    "discount_amount_awb": 0,
    "id_parent": "65zmPPuSg",
    "ids": "2TcZPEXSg",
    "is_unique": false,
    "national_parent": "JNETOKOP0000001",
    "national_parent_name": "TOKOPEDIA",
    "origin_branch_id": "BDO",
    "origin_urban_village_name": "DAGO",
    "original_amount": 14000,
    "original_insurance_admin": 0,
    "original_insurance_premi": 0,
    "other_charges": 0,
    "packing": 0,
    "surcharge": 0,
    "total_amount_after_discount_charges": 14000,
    "total_connote": 1,
    "total_packing_charges": 0
}
];

function groupData(data) {
  var result = [];
  var map = {};
  var countMap = {};

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var key = item.national_parent;

    if (!countMap[key]) {
      countMap[key] = 0;
    }
    countMap[key]++;
  }

  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var key = item.national_parent;

    if (countMap[key] > 1) {
      if (!map[key]) {
        map[key] = {
          branch_id: item.branch_id,
          customer_id: item.customer_id,
          destination_branch_id: item.destination_branch_id,
          destination_urban_village_name: item.destination_urban_village_name,
          origin_branch_id: item.origin_branch_id,
          origin_urban_village_name: item.origin_urban_village_name,
          national_parent: item.national_parent,
          national_parent_name: item.national_parent_name,
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
          is_unique: true
        };
        result.push(map[key]);
      }

      map[key].adjusted_amount += item.adjusted_amount;
      map[key].adjusted_insurance_admin += item.adjusted_insurance_admin;
      map[key].adjusted_insurance_premi += item.adjusted_insurance_premi;
      map[key].aging_121_180 += item.aging_121_180;
      map[key].aging_181_360 += item.aging_181_360;
      map[key].aging_1_30 += item.aging_1_30;
      map[key].aging_31_60 += item.aging_31_60;
      map[key].aging_360 += item.aging_360;
      map[key].aging_61_90 += item.aging_61_90;
      map[key].aging_91_120 += item.aging_91_120;
      map[key].original_amount += item.original_amount;
      map[key].original_insurance_admin += item.original_insurance_admin;
      map[key].original_insurance_premi += item.original_insurance_premi;
      map[key].other_charges += item.other_charges;
      map[key].packing += item.packing;
      map[key].surcharge += item.surcharge;
      map[key].total_amount_after_discount_charges += item.total_amount_after_discount_charges;
      map[key].total_connote += item.total_connote;
      map[key].total_packing_charges += item.total_packing_charges;
    }
  }

  return result;
}

var groupedData = groupData(getListReport);

console.log(groupedData);