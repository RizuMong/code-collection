var getListJurnals = [
  {
    amount: 23,
    company_id: 25236,
    converted_amount: 23,
    created_at: 1732522660359,
    created_by: 166467,
    currency_code: {
      id: "IDR",
      name: "IDR",
    },
    customer_account_number: "23",
    drcr: "DR",
    exchange_rate: 1,
    fk_id_adi_transaction: "QdIucDnHR",
    id_adi_jurnal: "9qq6apVNg",
    line_description: "23",
    line_number: 22,
    nomor_tiket: "23"
  },
];

var listMandatoryReviewers = [];
var listMandatoryApproverAhead = [];
var listMandatoryApproverBehind = [];

getListJurnals.forEach(function (item) {
  console.log(item);
  var payloadFunc = {
    id: item.id_adi_jurnal
  };

  var hit = _hitFunction("func_get_list_mr_jurnal", payloadFunc);

  if (hit.data.length != 0) {
    
  };
});