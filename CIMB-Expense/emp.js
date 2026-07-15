var items = {
  "accrue_creation_id": {
    "id": "pf_73c-vR",
    "name": " Accrual Poin Saving Tactical Juni 2026 Konven"
  },
  "accrue_sub_ledger": {
    "id": "b0JKccmIg",
    "name": "2722451-0101-21180-0000-000"
  },
  "amount": 4189,
  "amount_origin": 4189,
  "company_id": 25236,
  "created_at": 1782041127499,
  "created_by": 182952,
  "currency": {
    "convertion_amount": 4189,
    "origin_amount": 4189,
    "origin_currency": "IDR",
    "rate": 1,
    "target_currency": "IDR"
  },
  "description": " Accrual Poin Saving Tactical Juni 2026 Konven",
  "exchange_rate": 1,
  "expense_rc_code":  {
            "id": "dMwTmfgNg",
            "name": "1611-52003-2751 - CIMB Niaga Conventional [DL] JAKARTA - MALL GANDARIA CITY-EBL 1"
        },
  "expense_sub_ledger": {
    "id": "GEhIFRWIR",
    "name": "5020171-0101-21180"
  },
  "id": "FbaWys-vg",
  "id_accrue_creation_sharing_cost": "FbaWys-vg",
  "origin_currency": "IDR",
  "target_currency": "IDR",
  "updated_at": 1782041127499,
  "updated_by": 182952
};

var findCategory = {
  "category_layer": {
    "id": "9x-mXEiIg",
    "name": "Sub Ledger"
  },
  "company_id": 25236,
  "created_at": 1695357572804,
  "created_by": 166887,
  "description": "INTEREST/PROFIT PAID ON SAVINGS DEPOSITS POINT REWARDS FUNDING SAVING EXTRA",
  "dibuat_oleh": "R.DITARUNA@CIMBNIAGA.CO.ID",
  "diedit_oleh": "MUHAMAD.SALTONI@CIMBNIAGA.CO.ID",
  "expense_type": {
    "id": "LgmfubmVg",
    "name": "General"
  },
  "finance": {
    "id": "3ZpBYPiIRz",
    "name": "3041337-Payment Policy & Monitoring Sr Specialist"
  },
  "flow": {
    "id": "",
    "name": ""
  },
  "id": "GEhIFRWIR",
  "id_key": 100,
  "id_master_expense_category": "GEhIFRWIR",
  "jenis_pph": {},
  "mapping_activity": "",
  "max_amount_smartform": 0,
  "max_amount_transaction": 0,
  "name": "5020171-0101-21180",
  "parent_category": {
    "id": "O_nlUXmSg",
    "name": "Current year Income/Loss"
  },
  "sl_amortisasi": "1720451-0320-00000-0000-000",
  "sl_expense_activity": "5020171-0101-21180-0000-000",
  "sl_penampung": "2722855-0506-00000-0000-000",
  "status": "",
  "updated_at": 1738735646243,
  "updated_by": 166886
};

var rcCode = items.expense_rc_code.name.split(" - ");
var subledger = findCategory.sl_expense_activity


var gl = rcCode[0] + "-" + subledger;

// if(items.accrue_sub_ledger.name.substring(0, 2)=='27'){
//     // Change RC Code to RC PPX Susut
//     gl = rc_code_ppx_susut_for_accrue.value[0].value_name +"-"+sl
// }

var itemDescription = "Creation | " + items.description;

console.log(gl);

// var datas = [
//   {
//     "accrue_creation_id": {
//       "id": "pf_73c-vR",
//       "name": " Accrual Poin Saving Tactical Juni 2026 Konven"
//     },
//     "accrue_sub_ledger": {
//       "id": "b0JKccmIg",
//       "name": "2722451-0101-21180-0000-000"
//     },
//     "amount": 524,
//     "amount_origin": 524,
//     "company_id": 25236,
//     "created_at": 1781865483214,
//     "created_by": 182952,
//     "currency": {
//       "convertion_amount": 524,
//       "origin_amount": 524,
//       "origin_currency": "IDR",
//       "rate": 1,
//       "target_currency": "IDR"
//     },
//     "description": "Accrual Poin Saving Tactical Juni 2026 Konven",
//     "exchange_rate": 1,
//     "expense_rc_code": "1611-52003-2751",
//     "expense_sub_ledger": {
//       "id": "GEhIFRWIR",
//       "name": "5020171-0101-21180"
//     },
//     "id": "h3Kaox-DR",
//     "id_accrue_creation_sharing_cost": "h3Kaox-DR",
//     "target_currency": "IDR",
//     "updated_at": 1782041968851,
//     "updated_by": 182952
//   },
//   {
//     "accrue_creation_id": {
//       "id": "pf_73c-vR",
//       "name": " Accrual Poin Saving Tactical Juni 2026 Konven"
//     },
//     "accrue_sub_ledger": {
//       "id": "b0JKccmIg",
//       "name": "2722451-0101-21180-0000-000"
//     },
//     "amount": 6456,
//     "amount_origin": 6456,
//     "company_id": 25236,
//     "created_at": 1782041768323,
//     "created_by": 182952,
//     "currency": {
//       "convertion_amount": 6456,
//       "origin_amount": 6456,
//       "origin_currency": "IDR",
//       "rate": 1,
//       "target_currency": "IDR"
//     },
//     "description": " Accrual Poin Saving Tactical Juni 2026 Konven",
//     "exchange_rate": 1,
//     "expense_rc_code": {
//       "id": "STHjWxavg",
//       "name": "1611-39047-0179 - CIMB Niaga Conventional-Surabaya - Sudirman-BBF 1 COMBA"
//     },
//     "expense_sub_ledger": {
//       "id": "GEhIFRWIR",
//       "name": "5020171-0101-21180"
//     },
//     "id": "WcnsssaDg",
//     "id_accrue_creation_sharing_cost": "WcnsssaDg",
//     "origin_currency": "IDR",
//     "target_currency": "IDR",
//     "updated_at": 1782041768323,
//     "updated_by": 182952
//   }
// ];

// var results = [];

// for (var i = 0; i < datas.length; i++) {
//   var item = datas[i];

//   if (typeof item.expense_rc_code === "string") {
//     results.push(item);
//   }
// }

// console.log(results);

// hanya push yang expense_rc_code nya bukan object

// "1611-39047-0179 - CIMB Niaga Conventional-Surabaya - Sudirman-BBF 1 COMBA"