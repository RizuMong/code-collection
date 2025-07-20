var payload = {
  parameterCreate: {
    awb_date_end: 1719680400000,
    awb_date_start: 1717174800000,
    awb_number: [],
    branch_id_multi: [],
    cod_flag: "",
    company_id: 230,
    connote_batching_status: {
      id: "",
      name: "",
    },
    connote_cancel: "",
    created_at: 1721453909532,
    created_by: 3059,
    customer_id: {
      id: "",
      name: "",
    },
    customer_status: "",
    customer_type: {
      id: "",
      name: "",
    },
    customer_type_name: {
      id: "",
      name: "",
    },
    destination_branch: {
      id: "",
      name: "",
    },
    destination_urban_village_name: "",
    econnote_flag: "",
    ids: "1AhfmdXSg",
    insurance_flag: "",
    invoice_number: [],
    invoice_number_cod: [],
    length_batched: 0,
    local_parent_id: "",
    management_fee_id: "",
    management_fee_name: "",
    na_principal: {
      id: "",
      name: "",
    },
    national_parent_id: "",
    origin_branch_id: {
      id: "",
      name: "",
    },
    origin_managing_entity_id: "",
    origin_managing_entity_name: "",
    origin_urban_village_name: "",
    outbound_manifest_status: "",
    payment_trf_date_ccnc_end: null,
    payment_trf_date_ccnc_start: null,
    pod_success_status: "",
    pricing_detail_combination_id: "",
    proforma_invoice_number: [],
    progress_status: "0 %",
    service_code: [],
    status_connote: [],
    status_export: "Processing",
    status_report: "Processing",
    total_connote_process: "Counting",
    total_paid_amount: 0,
    updated_at: 1721453909532,
    updated_by: 3059,
  },
};

var response = "";

var listColumn = [
  'awb_date_end', 'awb_date_start', 'branch_id_multi', 'branch_name', 'cod_flag',
  'connote_batching_status', 'connote_bms_status', 'connote_cancel', 'customer_id',
  'customer_status', 'customer_type', 'customer_type_name', 'destination_branch',
  'destination_urban_village_name', 'econnote_flag', 'insurance_flag',
  'local_parent_id', 'management_fee_id', 'management_fee_name',
  'na_principal', 'national_parent_id', 'origin_branch_id', 'origin_urban_village_name',
  'outbound_manifest_status', 'payment_trf_date_ccnc_end', 'payment_trf_date_ccnc_start',
  'pod_success_status', 'pricing_detail_combination_id', 'service_code', 'origin_managing_entity_id', 'origin_managing_entity_name'
];

function isObjectEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] !== "" && obj[key] !== null) {
      return false;
    }
  }
  return true;
}

function validateRequest(payload) {
  var awbNumberFilled = payload.parameterCreate.awb_number && payload.parameterCreate.awb_number.length > 0;
  var invoiceNumberFilled = payload.parameterCreate.invoice_number && payload.parameterCreate.invoice_number.length > 0;
  var invoiceNumberCodFilled = payload.parameterCreate.invoice_number_cod && payload.parameterCreate.invoice_number_cod.length > 0;
  var proformaInvoiceNumberFilled = payload.parameterCreate.proforma_invoice_number && payload.parameterCreate.proforma_invoice_number.length > 0;
  var awbDateFilled = (payload.parameterCreate.awb_date_start || payload.parameterCreate.awb_date_end);
  var paymentTrfDateFilled = (payload.parameterCreate.payment_trf_date_ccnc_start || payload.parameterCreate.payment_trf_date_ccnc_end);

  // Check if only date fields are filled
  var hasOtherFields = false;
  for (var field in payload.parameterCreate) {
    if (field !== 'awb_date_start' && field !== 'awb_date_end' && field !== 'payment_trf_date_ccnc_start' && field !== 'payment_trf_date_ccnc_end') {
      if (payload.parameterCreate[field] && (Array.isArray(payload.parameterCreate[field]) ? payload.parameterCreate[field].length > 0 : !isObjectEmpty(payload.parameterCreate[field]))) {
        hasOtherFields = true;
        break;
      }
    }
  }

  if ((awbDateFilled || paymentTrfDateFilled) && !hasOtherFields) {
    return { issue: true, message: 'Please select at least one parameter other than Date' };
  }

  // Validasi 1: Kolom awb_number terisi maka kolom lain tidak boleh terisi
  if (awbNumberFilled) {
    var fieldsToCheck = listColumn;

    for (var i = 0; i < fieldsToCheck.length; i++) {
      var field = fieldsToCheck[i];

      if (field !== 'awb_date_start' && field !== 'awb_date_end' && payload.parameterCreate[field] && (Array.isArray(payload.parameterCreate[field]) ? payload.parameterCreate[field].length > 0 : !isObjectEmpty(payload.parameterCreate[field]))) {
        return { issue: true, message: 'Field ' + field + ' should be empty when AWB Number is filled.' };
      }
    }

    // Memeriksa apakah awb_date_start atau awb_date_end terisi
    if (awbDateFilled) {
      return { issue: true, message: 'Fields AWB Date should be empty when AWB Number is filled.' };
    }

    // Flagging Khusus AWB Number
    return { issue: false, message: 'Request is valid.', flagging: 'Khusus AWB Number' };
  }

  // Validasi 2: Jika invoice_number, invoice_number_cod, proforma_invoice_number terisi dengan awb_number juga terisi maka harus pilih salah satu.
  if (awbNumberFilled && (invoiceNumberFilled || invoiceNumberCodFilled || proformaInvoiceNumberFilled)) {
    return { issue: true, message: 'You can only choose one: AWB Number or Invoice Number, Invoice Number COD, Proforma Invoice Number.' };
  }

  // Validasi 3: Jika ada yang memilih invoice_number, invoice_number_cod, proforma_invoice_number maka yang terisi hanya boleh satu dan kolom lain tidak boleh terisi
  if ((invoiceNumberFilled || invoiceNumberCodFilled || proformaInvoiceNumberFilled)) {
    var invoiceNumberFields = ['invoice_number', 'invoice_number_cod', 'proforma_invoice_number'];
    var invoiceNumberCount = 0;

    for (var j = 0; j < invoiceNumberFields.length; j++) {
      var invoiceField = invoiceNumberFields[j];
      if (payload.parameterCreate[invoiceField] && payload.parameterCreate[invoiceField].length > 0) {
        invoiceNumberCount++;
      }
    }

    if (invoiceNumberCount !== 1) {
      return { issue: true, message: 'You must choose only one of Invoice Number, Invoice Number COD, Proforma Invoice Number.' };
    }

    var otherFieldsToCheck = listColumn;

    for (var k = 0; k < otherFieldsToCheck.length; k++) {
      var otherField = otherFieldsToCheck[k];
      if (payload.parameterCreate[otherField] && (Array.isArray(payload.parameterCreate[otherField]) ? payload.parameterCreate[otherField].length > 0 : !isObjectEmpty(payload.parameterCreate[otherField]))) {
        return { issue: true, message: 'Field ' + otherField + ' should be empty when using Invoice Number, Invoice Number COD, Proforma Invoice Number.' };
      }
    }

    // Flagging sesuai dengan jenis request
    if (invoiceNumberFilled) {
      return { issue: false, message: 'Request is valid.', flagging: 'Khusus Invoice Number' };
    }
    if (invoiceNumberCodFilled) {
      return { issue: false, message: 'Request is valid.', flagging: 'Khusus Invoice Number COD' };
    }
    if (proformaInvoiceNumberFilled) {
      return { issue: false, message: 'Request is valid.', flagging: 'Khusus Proforma Invoice' };
    }
  }

  // Validasi 4: Jika awb_date_start dan awb_date_end terisi, maka payment_trf_date_ccnc_start dan payment_trf_date_ccnc_end tidak boleh terisi, dan sebaliknya.
  if ((payload.parameterCreate.awb_date_start || payload.parameterCreate.awb_date_end) && (payload.parameterCreate.payment_trf_date_ccnc_start || payload.parameterCreate.payment_trf_date_ccnc_end)) {
    return { issue: true, message: 'You can only choose one: AWB Date or Payment TRF Date.' };
  }

  // Validasi 5: Jika dua-duanya terisi, munculkan pesan harus pilih salah satu antara awb date atau payment trf date.
  if ((payload.parameterCreate.awb_date_start || payload.parameterCreate.awb_date_end) && (payload.parameterCreate.payment_trf_date_ccnc_start && payload.parameterCreate.payment_trf_date_ccnc_end)) {
    return { issue: true, message: 'You must choose only one: AWB Date or Payment TRF Date.' };
  }

  // Validasi 6: Jika dua-duanya terisi, munculkan pesan harus pilih salah satu antara awb date atau payment trf date.
  if ((payload.parameterCreate.payment_trf_date_ccnc_start || payload.parameterCreate.payment_trf_date_ccnc_end) && (payload.parameterCreate.awb_date_start && payload.parameterCreate.awb_date_end)) {
    return { issue: true, message: 'You must choose only one: AWB Date or Payment TRF Date.' };
  }

  // Flagging untuk General AWB Date
  if (awbDateFilled) {
    return { issue: false, message: 'Request is valid.', flagging: 'General AWB Date' };
  }

  // Flagging untuk General Payment TRF Date
  if (paymentTrfDateFilled) {
    return { issue: false, message: 'Request is valid.', flagging: 'General Payment TRF Date' };
  }

  // Default case for undefined flagging
  return { issue: true, message: 'Please Fill Period Connote Date.' };
}

// Validasi Column
var validationResult = validateRequest(payload);

response = validationResult;

// Validasi Date
if (!validationResult.issue) {
  function validateDateRanges(payload) {
    var awbDateStart = payload.parameterCreate.awb_date_start;
    var awbDateEnd = payload.parameterCreate.awb_date_end;
    var paymentTrfDateStart = payload.parameterCreate.payment_trf_date_ccnc_start;
    var paymentTrfDateEnd = payload.parameterCreate.payment_trf_date_ccnc_end;
    var customerIdFilled = payload.parameterCreate.customer_id && payload.parameterCreate.customer_id.id !== undefined && payload.parameterCreate.customer_id.id !== "";

    // If AWB Date range is present
    if (awbDateStart && awbDateEnd) {
      if (customerIdFilled) {
        // AWB Date range with Customer ID should not exceed 3 months
        if (awbDateEnd - awbDateStart > 3 * 30 * 24 * 60 * 60 * 1000) {
          return { issue: true, message: 'Date range for AWB Date with Customer ID should not exceed 3 months.' };
        }
      } else {
        // AWB Date range without Customer ID should not exceed 1 month
        if (awbDateEnd - awbDateStart > 1 * 30 * 24 * 60 * 60 * 1000) {
          return { issue: true, message: 'Date range for AWB Date should not exceed 1 month.' };
        }
      }
    }

    // If Payment TRF Date range is present
    if (paymentTrfDateStart && paymentTrfDateEnd) {
      if (customerIdFilled) {
        // Payment TRF Date range with Customer ID should not exceed 3 months
        if (paymentTrfDateEnd - paymentTrfDateStart > 3 * 30 * 24 * 60 * 60 * 1000) {
          return { issue: true, message: 'Date range for Payment TRF Date with Customer ID should not exceed 3 months.' };
        }
      } else {
        // Payment TRF Date range without Customer ID should not exceed 1 month
        if (paymentTrfDateEnd - paymentTrfDateStart > 1 * 30 * 24 * 60 * 60 * 1000) {
          return { issue: true, message: 'Date range for Payment TRF Date should not exceed 1 month.' };
        }
      }
    }

    return { issue: false, message: 'Date range is valid.' };
  }

  var dateRangeValidationResult = validateDateRanges(payload);

  response = {
    "flagging": validationResult.flagging,
    "issue": dateRangeValidationResult.issue,
    "message": dateRangeValidationResult.message
  };
}

console.log(response);
