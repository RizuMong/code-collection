function _log(msg) {
  console.log(msg);
};

var REGEX_NUMBER_ONLY = /^[0-9]+$/;
var REGEX_ALPHANUMERIC_ONLY = /^[a-zA-Z0-9_., ]*$/;
var REGEX_DATE = /^\d{4}[-\/]\d{2}[-\/]\d{2}$/;
var REGEX_TIMESTAMP = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/;
var REGEX_SPECIAL_CHARACTER = /[`!@#$%^&*()+\-=\[\]{};':"\\|<>\/?~]/;
var REGEX_EMAIL = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isValidGUID(guidString) {
    if (guidString.length !== 32) {
        return {
            isValid: false,
            errorMsg: 'Invalid GUID!',
        }
    }

    return {
        isValid: true,
        errorMsg: '',
    }
}

function isValidText(text) {
    if (!REGEX_ALPHANUMERIC_ONLY.test(text)) {
        return {
            isValid: false,
            errorMsg: 'Field is not alphanumeric!',
        }
    }

    return {
        isValid: true,
        errorMsg: '',
    }
}

function isValidNumber(numString) {
    if (!REGEX_NUMBER_ONLY.test(numString)) {
        return {
            isValid: false,
            errorMsg: 'Field is not a number!!',
        }
    }

    return {
        isValid: true,
        errorMsg: '',
    }
}

function isValidDate(dateString) {
    if (!REGEX_DATE.test(dateString)) {
        // return false;  // Invalid format
        return {
            isValid: false,
            errorMsg: 'Invalid format'
        }
    }

    var d = new Date(dateString);
    var dNum = d.getTime();

    if (!dNum && dNum !== 0) {
        // return false; // NaN value, Invalid date
        return {
            isValid: false,
            errorMsg: 'Invalid date'
        }
    }

    if (d.toISOString().slice(0, 10) === dateString) {
        return {
            isValid: true,
            errorMsg: ''
        }
    }
}

function isValidTimestamp(timestampString) {
    if (!REGEX_TIMESTAMP.test(timestampString)) {
        return {
            isValid: false,
            errorMsg: 'Invalid timestamp!',
        }
    }

    return {
        isValid: true,
        errorMsg: '',
    }
}

function isContainSpecialChar(fieldValue) {
    if (REGEX_SPECIAL_CHARACTER.test(fieldValue)) {
        return {
            isValid: false,
            errorMsg: 'Field contains special characters!',
        }
    }

    return {
        isValid: true,
        errorMsg: '',
    }
}

function isValidSingleSelection(fieldValue, options) {
    var formattedFieldValue = fieldValue.toLowerCase()

    for (var idx = 0; idx < options.length; idx++) {
        if (formattedFieldValue === options[idx].toLowerCase()) {
            return {
                isValid: true,
                errorMsg: '',
            }
        }
    }

    return {
        isValid: false,
        errorMsg: 'Invalid value',
    }
}

function isValidSingleSelectionWithParent(fieldValue, optionsWithParent, parentFieldValue) {
    var formattedFieldValue = fieldValue.toLowerCase()
    var options = optionsWithParent[parentFieldValue];

    for (var idx = 0; idx < options.length; idx++) {
        if (formattedFieldValue === options[idx].toLowerCase()) {
            return {
                isValid: true,
                errorMsg: '',
            }
        }
    }

    return {
        isValid: false,
        errorMsg: 'Invalid value',
    }
}

function isValidEmail(fieldValue) {
    if (!REGEX_EMAIL.test(fieldValue)) {
        return {
            isValid: false,
            errorMsg: 'Invalid email!',
        }
    }

    return {
        isValid: true,
        errorMsg: '',
    }
}

var fields = [
  {
      name: 'file_id',
      validation: ['mandatory', 'value_format'],
      type: 'GUID',
  },
  {
      name: 'date',
      validation: ['mandatory', 'value_format'],
      type: 'date',
  },
  {
      name: 'time',
      validation: ['mandatory', 'value_format'],
      type: 'timestamp',
  },
  {
      name: 'source',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'target',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'status',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'data_operation',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'ndpvendor_code',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'gfmsvendor_code',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'vendor_name',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'update_tag',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'single_selection',
      options: ['A', 'Y', 'R'],
  },
  {
      name: 'bank_acc_id',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'bank_name',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'bank_account_number',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'bank_account_branch_name',
      validation: [],
  },
  {
      name: 'bank_account_holder_name',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'bank_account_currency',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'bank_country',
      validation: ['mandatory', 'value_format', 'contain_special_char'],
      type: 'text',
  },
  {
      name: 'iban',
      validation: [],
  },
];

function mandatory(fieldValue) {
  if (fieldValue.length > 0) {
    return {
      isValid: true,
      errorMsg: "",
    };
  }

  return {
    isValid: false,
    errorMsg: "Field is empty!",
  };
}

function mandatoryWithParent(
  fieldValue,
  parentFieldValue,
  requiredParentFieldValue
) {
  if (
    (parentFieldValue === requiredParentFieldValue && fieldValue.length > 0) ||
    (parentFieldValue !== requiredParentFieldValue && fieldValue.length === 0)
  ) {
    return {
      isValid: true,
      errorMsg: "",
    };
  }

  return {
    isValid: false,
    errorMsg: "Field is empty!",
  };
}

function valueDataFormat(
  fieldValue,
  dataType,
  options,
  parentFieldValue,
  requiredParentFieldValue,
  optionsWithParent
) {
  if (dataType === "text") {
    return isValidText(fieldValue);
  }

  if (dataType === "number") {
    return isValidNumber(fieldValue);
  }

  if (dataType === "GUID") {
    return isValidGUID(fieldValue);
  }

  if (dataType === "date") {
    return isValidDate(fieldValue);
  }

  if (dataType === "timestamp") {
    return isValidTimestamp(fieldValue);
  }

  if (dataType === "single_selection") {
    return isValidSingleSelection(fieldValue, options);
  }

  if (dataType === "single_selection_with_parent") {
    return isValidSingleSelectionWithParent(
      fieldValue,
      optionsWithParent,
      parentFieldValue
    );
  }

  if (dataType === "email") {
    return isValidEmail(fieldValue);
  }
}

function isContainSpecialChar(fieldValue) {
  if (REGEX_SPECIAL_CHARACTER.test(fieldValue)) {
    return {
      isValid: false,
      errorMsg: "Field contains special characters!",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
}

function containSpecialChar(fieldValue) {
  return isContainSpecialChar(fieldValue);
}

var req = {
  body: {
    "bank_acc_id": "1",
    "bank_account_branch_name": "BRANCH",
    "bank_account_currency": "IDR RUPIAH",
    "bank_account_holder_name": "Amanda",
    "bank_account_number": "21586666243",
    "bank_country": "Indonesia",
    "bank_name": "BANK CIMB Niaga",
    "content_type": "vendor_bank_update",
    "data_operation": "VENDOR_BANK_UPDATE",
    "date": "1-24-2025",
    "file_id": "14",
    "gfmsvendor_code": "20332",
    "iban": "",
    "is_last_record": true,
    "ndpvendor_code": "T3000000014",
    "source": "NDP",
    "status": "Send",
    "target": "SMART",
    "time": "9:10:10",
    "update_tag": "Y",
    "vendor_name": "PT Officeless 3 Diupdate DAYAT"
  },
};

// update_tag
// swift_code
// bank_account_number
// address_id
// ndp_vendor_code
// bank_name
// bank_initial
// bank_status

var errors = [];
var vendorBankUpdate = req.body;

fields.forEach(function (field) {
  var currentProperty = vendorBankUpdate[field.name];
  var currentPropertyParent = vendorBankUpdate[field.parent]
    ? vendorBankUpdate[field.parent]
    : null;
  var currentPropertyErrors = [];

  _log({
    // field: field,
    // currentProperty: currentProperty
  });

  field.validation.forEach(function (validationItem) {
    var currentValidation;

    if (validationItem === "mandatory") {
      currentValidation = mandatory(currentProperty);
    }

    if (validationItem === "mandatory_with_parent") {
      currentValidation = mandatoryWithParent(
        currentProperty,
        currentPropertyParent,
        field.parent_required_value
      );
    }

    if (validationItem === "value_format") {
      currentValidation = valueDataFormat(
        currentProperty,
        field.type,
        field.options,
        currentPropertyParent,
        field.parent_required_value,
        field.options_with_parent
      );
    }

    if (validationItem === "contain_special_char") {
      currentValidation = containSpecialChar(currentProperty);
    }

    if (!currentValidation.isValid) {
      currentPropertyErrors.push(currentValidation.errorMsg);
    }
  });

  if (currentPropertyErrors.length > 0) {
    errors.push(field.name + ": " + currentPropertyErrors.join(", ") + "\n");
  }
});

_log(errors);