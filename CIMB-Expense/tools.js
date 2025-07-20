var data = [];

// Saldo
var total_amount_in = 0;
var total_amount_out = 0;
var saldo = 0;
var saldo_mcx = {};

// Budget
var total_amount_in_budget = 0;
var total_amount_out_budget = 0;
var remaining_budget = 0;
var remaining_budget_mcx = {};

var budget_log =  [
  {
      "accrue_monitoring_id": {
          "id": "f5Czr1NIR",
          "name": "Link Net - Wifi WorkSpace - CAD NOV 23"
      },
      "accrue_sub_ledger": {
          "id": "kmLFccmSR",
          "name": "2722451-3035-00000-0000-000"
      },
      "budget_log": "Consume",
      "budget_remaining": -945540,
      "company_id": 25236,
      "costcenter_id": {
          "id": "BA0cHPGIg",
          "name": "1611-47077-7672-5512244-0000-00000 - 1611-47077-7672-5512244-0000-00000"
      },
      "created_at": 1701314351585,
      "created_by": 166890,
      "description": "Link Net - Wifi WorkSpace - CAD NOV 23",
      "expense_sub_ledger": {
          "id": "SMovKRZIR",
          "name": "5512244-0000-00000"
      },
      "id": "kTCk9JHSg",
      "id_accrue_monitoring_budget_log": "kTCk9JHSg",
      "id_key": "6812",
      "initiator": {
          "company_user_id": 184951,
          "email": "OGIE.TRYDIANTO@CIMBNIAGA.CO.ID",
          "name": "OGIE TRYDIANTO M.N ",
          "photo": ""
      },
      "log_activity": "Transfer In",
      "origin_currency": "IDR",
      "rc_code_owner": {
          "id": "snB1zhZIR",
          "name": "1611-47007-7104 - OPS & IT OFFICE. COST MANAGEMENT & ANALYTICS"
      },
      "request_no": "23112023AC6812",
      "title": "Link Net - Wifi WorkSpace - CAD NOV 23",
      "transaction_amount": 472770,
      "transaction_amount_mcx": {
          "convertion_amount": 472770,
          "origin_amount": 472770,
          "origin_currency": "IDR",
          "rate": 1,
          "target_currency": "IDR"
      },
      "transaction_date": 1701314351584,
      "transaction_type": "Accrue Creation",
      "updated_at": 1701314351585,
      "updated_by": 166890
  },
  {
      "accrue_monitoring_id": {
          "id": "f5Czr1NIR",
          "name": "Link Net - Wifi WorkSpace - CAD NOV 23"
      },
      "accrue_sub_ledger": {
          "id": "kmLFccmSR",
          "name": "2722451-3035-00000-0000-000"
      },
      "budget_log": "Consume",
      "company_id": 25236,
      "costcenter_id": {
          "id": "BA0cHPGIg",
          "name": "1611-47077-7672-5512244-0000-00000 - 1611-47077-7672-5512244-0000-00000"
      },
      "created_at": 1703844685985,
      "created_by": 0,
      "description": "Link Net - Wifi WorkSpace - CAD NOV 23",
      "expense_sub_ledger": {
          "id": "SMovKRZIR",
          "name": "5512244-0000-00000"
      },
      "id": "TeG229iNR",
      "id_accrue_monitoring_budget_log": "TeG229iNR",
      "id_key": "1259",
      "initiator": {
          "company_user_id": 184951,
          "email": "OGIE.TRYDIANTO@CIMBNIAGA.CO.ID",
          "name": "OGIE TRYDIANTO M.N ",
          "photo": ""
      },
      "log_activity": "Transfer out",
      "origin_currency": "IDR",
      "rc_code_owner": {
          "id": "snB1zhZIR",
          "name": "1611-47007-7104 - OPS & IT OFFICE. COST MANAGEMENT & ANALYTICS"
      },
      "request_no": "23112023AC6812",
      "title": "Link Net - Wifi WorkSpace - CAD NOV 23",
      "transaction_amount": -472771,
      "transaction_amount_mcx": {
          "convertion_amount": -472771,
          "origin_amount": -472771,
          "origin_currency": "IDR",
          "rate": 1,
          "target_currency": "IDR"
      },
      "transaction_date": 1703844685985,
      "transaction_type": "Accrue Reverse",
      "updated_at": 1729586458607,
      "updated_by": 0
  }
]

var item = {
  "accrue_code": "23112023AC6812",
  "accrue_monitoring_id": {
      "id": "f5Czr1NIR",
      "name": "Link Net - Wifi WorkSpace - CAD NOV 23"
  },
  "accrue_sub_ledger": {
      "id": "kmLFccmSR",
      "name": "2722451-3035-00000-0000-000"
  },
  "amount": 0,
  "amount_origin": 0,
  "company_id": 25236,
  "created_at": 1704167068934,
  "created_by": 0,
  "currency": {
      "convertion_amount": "-1.00",
      "origin_amount": "-1.00",
      "origin_currency": "IDR",
      "rate": 1,
      "target_currency": "IDR"
  },
  "description": "Link Net - Wifi WorkSpace - CAD NOV 23",
  "dibuat_oleh": "MOH.HIDAYAT@CIMBNIAGA.CO.ID",
  "exchange_rate": 1,
  "expense_rc_code": {
      "id": "S0M1z2WSR",
      "name": "1611-47077-7672 - CORPORATE BANKING RISK CONTROL UNIT"
  },
  "expense_sub_ledger": {
      "id": "SMovKRZIR",
      "name": "5512244-0000-00000"
  },
  "id": "NoCk91HIR",
  "id_accrue_monitoring_sharing_cost": "NoCk91HIR",
  "id_key": 6812,
  "origin_currency": "IDR",
  "rc_code_owner": {
      "id": "snB1zhZIR",
      "name": "1611-47007-7104 - OPS & IT OFFICE. COST MANAGEMENT & ANALYTICS"
  },
  "remaninig_budget": 472770,
  "target_currency": "IDR",
  "title": "Link Net - Wifi WorkSpace - CAD NOV 23",
  "updated_at": 1734950767936,
  "updated_by": 187730
}

function _log(message) {
    console.log(message);
};

var transaction_amount_out = 0;
var transaction_amount_mcx_out = {
    convertion_amount : 0,
    origin_amount : 0,
};
var transaction_amount_in = 0;
var transaction_amount_mcx_in = {
    convertion_amount : 0,
    origin_amount : 0,
};


budget_log.forEach(function(item){
    if (item.budget_log !== "Reserve") {
        if (item.budget_log !== "Release") {
            _log(item.transaction_amount)
            if (item.log_activity.toUpperCase() == "TRANSFER IN") {
                transaction_amount_in = transaction_amount_in + item.transaction_amount
                transaction_amount_mcx_in = {
                    convertion_amount: (typeof (transaction_amount_mcx_in.convertion_amount) !== 'undefined' ? parseFloat(transaction_amount_mcx_in.convertion_amount) : 0) + (typeof (item.transaction_amount_mcx.convertion_amount) !== 'undefined' ? parseFloat(item.transaction_amount_mcx.convertion_amount) : 0),
                    origin_amount: transaction_amount_mcx_in.origin_amount + item.transaction_amount_mcx.origin_amount,
                    origin_currency: item.transaction_amount_mcx.origin_currency,
                    rate: item.transaction_amount_mcx.rate,
                    target_currency: item.transaction_amount_mcx.target_currency
                }
                _log("transaction_amount_in " + transaction_amount_in)
            }

            if (item.log_activity == "Transfer out") {
                transaction_amount_out = transaction_amount_out + parseFloat(item.transaction_amount)
                transaction_amount_mcx_out = {
                    convertion_amount: (typeof (transaction_amount_mcx_out.convertion_amount) !== 'undefined' ? parseFloat(transaction_amount_mcx_out.convertion_amount) : 0) + (typeof (item.transaction_amount_mcx.convertion_amount) !== 'undefined' ? parseFloat(item.transaction_amount_mcx.convertion_amount) : 0),
                    origin_amount: transaction_amount_mcx_out.origin_amount + item.transaction_amount_mcx.origin_amount,
                    origin_currency: item.transaction_amount_mcx.origin_currency,
                    rate: item.transaction_amount_mcx.rate,
                    target_currency: item.transaction_amount_mcx.target_currency
                }
                _log("transaction_amount_out " + transaction_amount_out)
            }
        }
    }

    
});

_log('in convertion amount : ' + transaction_amount_mcx_in.convertion_amount);
_log(transaction_amount_mcx_in.convertion_amount);
_log('out convertion amount : ' + transaction_amount_mcx_out.convertion_amount);
_log(transaction_amount_mcx_out.convertion_amount);
_log('in origin amount : ' + transaction_amount_mcx_in.origin_amount);
_log( transaction_amount_mcx_in.origin_amount);
_log('out convertion amount : ' + transaction_amount_mcx_out.origin_amount);
_log(transaction_amount_mcx_out.origin_amount);

var transaction_amount_result = transaction_amount_in + transaction_amount_out;
var transaction_amount_mcx_result = {
            convertion_amount : (transaction_amount_mcx_in.convertion_amount + transaction_amount_mcx_out.convertion_amount).toFixed(2) ,
            origin_amount : (parseFloat(transaction_amount_mcx_in.origin_amount) + transaction_amount_mcx_out.origin_amount).toFixed(2) ,
            origin_currency : transaction_amount_mcx_in.origin_currency,
            rate : transaction_amount_mcx_in.rate,
            target_currency : transaction_amount_mcx_in.target_currency
        }

_log('transaction amount result : ' + transaction_amount_result)
_log(transaction_amount_result)

data.push({
    result : {
         transaction_amount_result : transaction_amount_result.toFixed(2),
        transaction_amount_mcx_result : transaction_amount_mcx_result
    },
   
    in: {
        transaction_amount_in: transaction_amount_in,
        transaction_amount_mcx_in: transaction_amount_mcx_in
    },
    out: {
        transaction_amount_out: transaction_amount_out,
        transaction_amount_mcx_out: transaction_amount_mcx_out
    }

})

// total_amount_in = total_amount_in + transaction_amount_in;
// total_amount_out = total_amount_out + transaction_amount_out;
