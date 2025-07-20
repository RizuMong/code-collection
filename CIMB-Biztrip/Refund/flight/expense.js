var response = {}
var messages = []

function stopAutomation(message) {
    response = {
        error: true,
        message: message
    }
    _log(response)
    _stopAutomation()
}

function setResponse(error, data, message, stop) {
    messages.push(message)

    res_message = messages.join('; ')
    if (error) {
        res_message = 'Maaf, ' + res_message
    }

    response = {
        error: error,
        message: res_message,
        data: data
    }
    if (stop) {
        _log(response)
        _stopAutomation()
    }
}

function wrapAutomation(fn) {
    try {
        fn()
    } catch (err) {
        _log(err)
        if (err.message == 'Stopping automation') {
            _stopAutomation()
        } else {
            stopAutomation('Maaf terjadi kesalahan!')
        }
    }
}

function _log(message) {
  console.log(message)
}

var data_sharing_cost = [
  {
      "accrue_closing_id": {
          "id": "TjUNi2HNg",
          "name": "CAD SEP24 Fee VIBS"
      },
      "accrue_sub_ledger": {
          "id": "3bfF55iSg",
          "name": "2722451-3503-00000-0000-000"
      },
      "amount_initiated_origin": -416581016.4,
      "amount_initiated_rupiah": -416581016.4000001,
      "amount_origin_closing": 542824010.3,
      "amount_rupiah_closing": 542824010.3,
      "company_id": 25236,
      "created_at": 1735546388745,
      "created_by": 178740,
      "currency": {
          "convertion_amount": 542824010.3,
          "origin_amount": 542824010.3,
          "origin_currency": "IDR",
          "rate": 1,
          "target_currency": "IDR"
      },
      "description": "Reversal Acc VIBS Q3 2024 ",
      "exchange_rate": 1,
      "expense_rc_code": {
          "id": "JFTKk2ZSR",
          "name": "1611-47003-1601 | Head Office - CREDIT CARD BUSINESS"
      },
      "expense_sub_ledger": {
          "id": "HdxHWZHSR",
          "name": "5903224-0000-10400"
      },
      "flow_status": "draft",
      "id": "DHQNmhHHR",
      "id_accrue_closing_sharing_cost": "DHQNmhHHR",
      "initiated_amount_mcx": {
          "convertion_amount": 542824010.3,
          "origin_amount": 542824010.3,
          "origin_currency": "IDR",
          "rate": 1,
          "target_currency": "IDR"
      },
      "origin_currency": "IDR",
      "remaining_budget": 542824010.3,
      "remaining_budget_mcx": {
          "convertion_amount": 542824010.3,
          "origin_amount": 542824010.3,
          "origin_currency": "IDR",
          "rate": 1,
          "target_currency": "IDR"
      },
      "saldo": 542824010.3,
      "saldo_mcx": {
          "convertion_amount": 542824010.3,
          "origin_amount": 542824010.3,
          "origin_currency": "IDR",
          "rate": 1,
          "target_currency": "IDR"
      },
      "target_currency": "IDR",
      "updated_at": 1735546437926,
      "updated_by": 178740
  }
]

wrapAutomation(function () {
  sharing_cost_total = 0
  data_sharing_cost.forEach(function (item) {
      amount = item.currency.origin_amount || 0
      amount_initiated_origin = item.initiated_amount_mcx.origin_amount || 0
      name = [
          item.expense_rc_code && item.expense_rc_code.name,
          item.accrue_sub_ledger && item.accrue_sub_ledger.name
      ].join(' ')
      _log(amount);
      _log(amount_initiated_origin);
      if (amount > amount_initiated_origin) {
          _log("Masuk Error");
          setResponse(true, null, 'Maksimal jumlah dana untuk ' + name + ' sebesar ' + amount)
      }

      
      sharing_cost_total += amount
  })

  _log(sharing_cost_total)    
})