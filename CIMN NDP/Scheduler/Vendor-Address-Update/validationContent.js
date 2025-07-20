function _log(msg) {
  console.log(msg);
}

var REGEX_NUMBER_ONLY = /^[0-9]+$/;
// var REGEX_ALPHANUMERIC_ONLY = /^[a-zA-Z0-9_., ]*$/;
var REGEX_ALPHANUMERIC_ONLY = /^[a-zA-Z0-9_., /]*$/;
var REGEX_DATE = /^\d{4}[-\/]\d{2}[-\/]\d{2}$/;
var REGEX_TIMESTAMP =
  /^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/;
// var REGEX_SPECIAL_CHARACTER = /[`!@#$%^&*()+\-=\[\]{};':"\\|<>\/?~]/;
var REGEX_SPECIAL_CHARACTER = /[`!@#$%^&*()+\-=\[\]{};':"\\|<>?~]/;
var REGEX_EMAIL =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function isValidGUID(guidString) {
  if (guidString.length !== 32) {
    return {
      isValid: false,
      errorMsg: "Invalid GUID!",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
}

function isValidText(text) {
  if (!REGEX_ALPHANUMERIC_ONLY.test(text)) {
    return {
      isValid: false,
      errorMsg: "Field is not alphanumeric!",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
}

function isValidNumber(numString) {
  if (!REGEX_NUMBER_ONLY.test(numString)) {
    return {
      isValid: false,
      errorMsg: "Field is not a number!!",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
}

function isValidDate(dateString) {
  if (!REGEX_DATE.test(dateString)) {
    // return false;  // Invalid format
    return {
      isValid: false,
      errorMsg: "Invalid format",
    };
  }

  var d = new Date(dateString);
  var dNum = d.getTime();

  if (!dNum && dNum !== 0) {
    // return false; // NaN value, Invalid date
    return {
      isValid: false,
      errorMsg: "Invalid date",
    };
  }

  if (d.toISOString().slice(0, 10) === dateString) {
    return {
      isValid: true,
      errorMsg: "",
    };
  }
}

function isValidTimestamp(timestampString) {
  if (!REGEX_TIMESTAMP.test(timestampString)) {
    return {
      isValid: false,
      errorMsg: "Invalid timestamp!",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
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

function isValidSingleSelection(fieldValue, options) {
  var formattedFieldValue = fieldValue.toLowerCase();

  for (var idx = 0; idx < options.length; idx++) {
    if (formattedFieldValue === options[idx].toLowerCase()) {
      return {
        isValid: true,
        errorMsg: "",
      };
    }
  }

  return {
    isValid: false,
    errorMsg: "Invalid value",
  };
}

function isValidSingleSelectionWithParent(
  fieldValue,
  optionsWithParent,
  parentFieldValue
) {
  var formattedFieldValue = fieldValue.toLowerCase();
  var options = optionsWithParent[parentFieldValue];

  for (var idx = 0; idx < options.length; idx++) {
    if (formattedFieldValue === options[idx].toLowerCase()) {
      return {
        isValid: true,
        errorMsg: "",
      };
    }
  }

  return {
    isValid: false,
    errorMsg: "Invalid value",
  };
}

function isValidEmail(fieldValue) {
  if (!REGEX_EMAIL.test(fieldValue)) {
    return {
      isValid: false,
      errorMsg: "Invalid email!",
    };
  }

  return {
    isValid: true,
    errorMsg: "",
  };
}

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
};

var fields = [
  {
    name: "file_id",
    validation: ["mandatory", "value_format"],
    type: "GUID",
  },
  {
    name: "date",
    validation: ["mandatory", "value_format"],
    type: "date",
  },
  {
    name: "time",
    validation: ["mandatory", "value_format"],
    type: "timestamp",
  },
  {
    name: "source",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "target",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "status",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "data_operation",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "ndpvendor_code",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "gfmsvendor_code",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "vendor_name",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "update_tag",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["A", "Y", "R"],
  },
  {
    name: "address_id",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "address_line1",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "address_line2",
    validation: [],
  },
  {
    name: "address_line3",
    validation: [],
  },
  {
    name: "zipcode",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "state",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "city",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "country",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "contact_person_name",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "contact_person_phone",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "contact_person_email",
    validation: ["mandatory", "value_format"],
    type: "email",
  },
  {
    name: "fax_number",
    validation: [],
  },
];

var req = {
  body: {
    address_id: "P200000032/001",
    address_line1: "Bintaro Jaya",
    address_line2: "Tangerang Selatan",
    address_line3: "",
    city: "Tangerang Selatan",
    contact_person_name: "Amanda",
    contact_person_phone: "012345678912",
    contact_person_email: "testva@mailnator.com",
    content_type: "vendor_address_update",
    country: "Indonesia",
    data_operation: "VENDOR_ADDRESS_UPDATE",
    "date": "2024-02-21",
    fax_number: "",
    "file_id": "A18666E0-0807-49AB-8845-A407CF08",
    gfmsvendor_code: "19047",
    is_last_record: true,
    ndpvendor_code: "P200000032",
    source: "NDP",
    state: "Tangerang Selatan",
    status: "Send",
    target: "SMART",
    time: "11:29:30",
    update_tag: "Y",
    vendor_name: "PT Jakarta Indo Tiga",
    zipcode: "12426",
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
// address_id

var errors = [];
var vendorAddressUpdate = req.body;

fields.forEach(function (field) {
  var currentProperty = vendorAddressUpdate[field.name];
  var currentPropertyParent = vendorAddressUpdate[field.parent]
    ? vendorAddressUpdate[field.parent]
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
