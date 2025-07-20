if (_field.confirmation == "Confirmed") {
  _fieldProperties.reward.disabled = true;

}

if (!_field.discount_amount_inv) {
  _field.discount_amount_inv = 0
}

if (!_field.reward) {
  _field.reward = 0
}

// var getResponse =  _hitFunction("function_get_insurance_vat_out_tariff_active_post_change", { 'ids_parent': _field.ids });
// _field.dasar_pengenaan_pajak = _dasar_pengenaan_pajak * getResponse // add 08-Jan-25 17.30
// var _dasar_pengenaan_pajak = _field.total_amount_dpp_final * insuranceVAT.formula_dpp
_field.total_amount_dpp_final = _field.total_amount_dpp + _field.reward - _field.discount_amount_inv;

// _field.vat_invoice_header = _field.total_amount_dpp_final * (_field.vat_out_tariff_number / 100)

var vat_out_type_vat = _hitFunction("func_get_total_paid_amount_vat_multibranch", { 'ids_parent': _field.ids });

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
