if (_field.confirmation == "Confirmed") {
  _fieldProperties.reward.disabled = true;

}
if (!_field.reward) {
  _field.reward = 0
}

// _field.total_amount_dpp_final = _field.sum_revenue +  _field.reward - _field.discount_amount_inv - _field.sum_discount_amount_awb;
// _field.total_amount_dpp_final = _field.sum_revenue +  _field.reward - _field.discount_amount_inv - _field.sum_discount_amount_awb;
// _field.total_amount_dpp_final = _field.reward - _field.discount_amount_inv
//_field.vat_invoice_header = _field.total_amount_dpp_final * (_field.vat_out_tariff_number / 100)

_field.total_amount_dpp_final = _field.total_amount_dpp + _field.reward - _field.discount_amount_inv
_field.dasar_pengenaan_pajak = _field.total_amount_dpp + _field.reward - _field.discount_amount_inv // add 08-Jan-25 17.30

var vat_out_type_vat = _hitFunction("func_get_total_paid_amount_vat_multibranch", { 'ids_parent': _field.ids });
console.log({vat_out_type_vat:vat_out_type_vat})
if ((_field.total_amount_dpp_final + _field.total_adjusted_insurance) >= 5000000) {
  _field.stamp = 10000
} else {
  _field.stamp = 0
}

if (vat_out_type_vat) {
  _field.summary_total_paid_amount = _field.total_amount_dpp_final + _field.vat_invoice_header + _field.stamp + _field.total_adjusted_insurance
} else {
  _field.summary_total_paid_amount = _field.total_amount_dpp_final + _field.stamp + _field.total_adjusted_insurance
}
