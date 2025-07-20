/* ====== Function Before Calculate ====== */
function changeNumber(total) {
  if (
      total === '0' ||
      total === '' ||
      total === null ||
      total === undefined
  ) {
      return 0;
  } else {
      return parseFloat(total);
  }
}

/* ====== Function Calculate/Klasifikasi Aging belum (bener) ====== */
function calculateAgeInDays(startDate, toDate) {
  var timeDifference = toDate - startDate;
  var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

/* ====== Calculation Aging/Connote ====== */
function calculationAging(each_connote) {
  return (
      changeNumber(each_connote.original_amount_number) +
      changeNumber(each_connote.packing_number) +
      changeNumber(each_connote.other_charges_number) +
      changeNumber(each_connote.surcharge_number) -
      changeNumber(each_connote.discount_amount_awb_number)
  );
}

/* ====== Calculate Aging ====== */
var result_calculate_aging = [];

/* ====== Calculate Aging Per Connote ====== */
get_data_unbilled.forEach(function (each_connote) {
  var agingData = {
      aging_1_30: 0,
      aging_31_60: 0,
      aging_61_90: 0,
      aging_91_120: 0,
      aging_121_180: 0,
      aging_181_360: 0,
      aging_360: 0,
      aging_days: 0,

      /* New Variable 26 Oktober 2023 */
      total_amount_after_discount_charges: 0
  };

  var aging = calculateAgeInDays(
      each_connote.awb_date,
      payload.parameter_create.cutt_off
  );
  agingData.aging_days = aging;
  /* New Variable 26 Oktober 2023 */
  agingData.total_amount_after_discount_charges +=
      calculationAging(each_connote);

  // Klasifikasikan aging dan calculate
  if (aging >= 0 && aging <= 30) {
      agingData.aging_1_30 += calculationAging(each_connote);
  } else if (aging >= 31 && aging <= 60) {
      agingData.aging_31_60 += calculationAging(each_connote);
  } else if (aging >= 61 && aging <= 90) {
      agingData.aging_61_90 += calculationAging(each_connote);
  } else if (aging >= 91 && aging <= 120) {
      agingData.aging_91_120 += calculationAging(each_connote);
  } else if (aging >= 121 && aging <= 180) {
      agingData.aging_121_180 += calculationAging(each_connote);
  } else if (aging >= 181 && aging <= 360) {
      agingData.aging_181_360 += calculationAging(each_connote);
  } else if (aging >= 360) {
      agingData.aging_360 += calculationAging(each_connote);
  }

  /* ====== Add Another Colomn Terbaru ======= */
  _.extend(agingData, {
      branch_id: each_connote.branch_id,
      customer_id: each_connote.customer_id,
      national_parent_id: each_connote.national_parent_id,
      national_parent_name: each_connote.national_parent_name,
      origin_branch_id: each_connote.origin_branch_id,
      origin_urban_village_name: each_connote.origin_urban_village_name,
      destination_branch_id: each_connote.destination_branch_id,
      destination_urban_village_name: each_connote.destination_urban_village_name,
      original_amount: each_connote.original_amount_number,
      discount_amount_awb: each_connote.discount_amount_awb_number,
      adjusted_amount: each_connote.adjusted_amount_number,
      packing: each_connote.packing_number,
      surcharge: each_connote.surcharge_number,
      other_charges: each_connote.other_charges_number,
      total_packing_charges: each_connote.total_packing_charges_number,
      original_insurance_premi: each_connote.original_insurance_premi,
      original_insurance_admin: each_connote.original_insurance_admin,
      adjusted_insurance_admin: each_connote.adjusted_insurance_admin_number,
      adjusted_insurance_premi: each_connote.adjusted_insurance_premi_number,

      // Parent & Flagging
      id_parent: payload.parameter_create.id_parent,
      status_report: "Not Calculate",
      status_connote: each_connote.status_connote,
      awb_number: each_connote.awb_number,
      total_connote: 1,
  });

  // result_calculate_aging.push(agingData);

      // ==== Validate Aging ====
  if (payload.parameter_create.aging.indexOf('All') !== -1) {
      _log('All');
      result_calculate_aging.push(agingData);
  } else {
      if (
          /* "Aging (1-30 Days)" */
          payload.parameter_create.aging.indexOf('Aging (1-30 Days)') !==
          -1 &&
          aging >= 0 &&
          aging <= 30
      ) {
          _log('1-30');
          result_calculate_aging.push(agingData);
      } else if (
          /* "Aging (31-60 Days)" */
          payload.parameter_create.aging.indexOf('Aging (31-60 Days)') !==
          -1 &&
          aging >= 31 &&
          aging <= 60
      ) {
          _log('31-60');
          result_calculate_aging.push(agingData);
      } else if (
          /* "Aging (61-90 Days)" */
          payload.parameter_create.aging.indexOf('Aging (61-90 Days)') !==
          -1 &&
          aging >= 61 &&
          aging <= 90
      ) {
          _log('61-90');
          result_calculate_aging.push(agingData);
      } else if (
          /* "Aging (91-120 Days)" */
          payload.parameter_create.aging.indexOf('Aging (91-120 Days)') !==
          -1 &&
          aging >= 91 &&
          aging <= 120
      ) {
          _log('91-120');
          result_calculate_aging.push(agingData);
      } else if (
          /* "Aging (121-180 Days)" */
          payload.parameter_create.aging.indexOf('Aging (121-180 Days)') !==
          -1 &&
          aging >= 121 &&
          aging <= 180
      ) {
          _log('121-180');
          result_calculate_aging.push(agingData);
      } else if (
          /* "Aging (181-360 Days)" */
          payload.parameter_create.aging.indexOf('Aging (181-360 Days)') !==
          -1 &&
          aging >= 181 &&
          aging <= 360
      ) {
          _log('91-120');
          result_calculate_aging.push(agingData);
      } else if (
          /* "Aging (>360 Days)" */
          payload.parameter_create.aging.indexOf('Aging (>360 Days)') !==
          -1 &&
          aging >= 360
      ) {
          _log('91-120');
          result_calculate_aging.push(agingData);
      }
  }
});


_log({ result_calculate_aging: result_calculate_aging });