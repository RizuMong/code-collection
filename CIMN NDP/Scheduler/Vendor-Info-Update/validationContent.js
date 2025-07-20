function _log(msg) {
  console.log(msg);
}

var REGEX_NUMBER_ONLY = /^[0-9]+$/;
// var REGEX_ALPHANUMERIC_ONLY = /^[a-zA-Z0-9_., ]*$/;
var REGEX_ALPHANUMERIC_ONLY = /^[a-zA-Z0-9_,\/\.\s]*$/;
var REGEX_DATE = /^\d{4}[-\/]\d{2}[-\/]\d{2}$/;
var REGEX_TIMESTAMP =
  /^([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/;
// var REGEX_SPECIAL_CHARACTER = /[`!@#$%^&*()+\-=\[\]{};':"\\|<>\/?~]/;
// var REGEX_SPECIAL_CHARACTER = /[`!@#$%^&*()+\-=\[\]{};':"\\|<>?~]/;
var REGEX_SPECIAL_CHARACTER = /[`!@#$%^&*()+\[\]{};':"\\|<>?~]/;
var REGEX_EMAIL =
  /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
}

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
    name: "vendor_type",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "vendor_status",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Active", "Inactive"],
  },
  {
    name: "business_entity",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["PT", "CV", "Others"],
  },
  {
    name: "others_business_entity",
    validation: [
      "mandatory_with_parent",
      "value_format",
      "contain_special_char",
    ],
    type: "text",
    parent: "business_entity",
    parent_required_value: "Others",
  },
  {
    name: "vendor_name",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "vendor_description",
    validation: [],
  },
  {
    name: "typeof_business",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["IT Related", "Non IT Related"],
  },
  {
    name: "sub_typeof_business",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection_with_parent",
    parent: "typeof_business",
    options_with_parent: {
      "IT Related": [
        "Software",
        "Hardware",
        "Professional Service",
        "IT Outsourcing",
      ],

      "Non IT Related": [
        "Public Company",
        "Hotel / Restaurant",
        "Building Management",
        "Civil and Interior",
        "Travel Company",
        "Others,",
      ],
    },
  },
  {
    name: "phone_number",
    validation: [],
  },
  {
    name: "national_currency",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "text",
  },
  {
    name: "identification_number",
    validation: [],
  },
  {
    name: "npwpnumber",
    validation: ["mandatory", "contain_special_char"],
    type: "text",
  },
  {
    name: "resident_status",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Resident", "Non Resident"],
  },
  {
    name: "citizen_status",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["WNI", "WNA"],
  },
  {
    name: "corporate_government",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Corporate", "Government", "Individual", "Others"],
  },
  {
    name: "declarationwith_bank",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Y", "N"],
  },
  {
    name: "relationship_desc",
    validation: [
      "mandatory_with_parent",
      "value_format",
      "contain_special_char",
    ],
    type: "text",
    parent: "declarationwith_bank",
    parent_required_value: "Y",
  },
  {
    name: "declarationwith_bank_data",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Y", "N"],
  },
  {
    name: "bank_data_relationship_desc",
    validation: [
      "mandatory_with_parent",
      "value_format",
      "contain_special_char",
    ],
    type: "text",
    parent: "declarationwith_bank_data",
    parent_required_value: "Y",
  },
  {
    name: "request_by_bu",
    validation: ["mandatory", "contain_special_char"],
    type: "text",
  },
  {
    name: "requestor_email",
    validation: ["mandatory", "value_format"],
    type: "email",
  },
  {
    name: "vendor_registration_number",
    validation: [],
  },
  {
    name: "vendor_registration_date",
    validation: [],
  },
  {
    name: "risk_profile_level",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Low", "Medium", "High"],
  },
  {
    name: "dhntag",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Y", "N"],
  },
  {
    name: "amltag",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Y", "N"],
  },
  {
    name: "sliktag",
    validation: ["mandatory", "value_format", "contain_special_char"],
    type: "single_selection",
    options: ["Y", "N"],
  },
  {
    name: "sketpajak",
    validation: [],
  },
  {
    name: "skbpajak",
    validation: [],
  },
  {
    name: "pkpnumber",
    validation: [],
  },
  {
    name: "siujknumber",
    validation: [],
  },
  {
    name: "siujkclassification",
    validation: [],
  },
  {
    name: "dgtnumber",
    validation: [],
  },
  {
    name: "certificate_residence",
    validation: [],
  },
];

var req = {
  body: {
    amltag: "N",
    bank_data_relationship_desc: "",
    business_entity: "PT",
    certificate_residence: "",
    citizen_status: "WNI",
    content_type: "vendor_info_update",
    corporate_government: "Corporate",
    data_operation: "VENDOR_CREATE_DOWNLOAD",
    date: "2024-02-21",
    declarationwith_bank: "N",
    declarationwith_bank_data: "N",
    dgtnumber: "",
    dhntag: "Y",
    file_id: "A18666E0-0807-49AB-8845-A407CF08",
    gfmsvendor_code: "20332",
    identification_number: "",
    is_last_record: true,
    national_currency: "IDR",
    ndpvendor_code: "T3000000014",
    npwpnumber: "01.988.988.1-988.111",
    others_business_entity: "",
    phone_number: "",
    pkpnumber: "",
    relationship_desc: "",
    request_by_bu: "1611-47077-3014",
    requestor_email: "testcreate@mailinator.com",
    resident_status: "Resident",
    risk_profile_level: "Medium",
    siujkclassification: "",
    siujknumber: "",
    skbpajak: "",
    sketpajak: "",
    sliktag: "N",
    source: "NDP",
    status: "Send",
    sub_typeof_business: "Software",
    target: "SMART",
    time: "9:10:10",
    typeof_business: "IT Related",
    vendor_description: "Test Update Info yaa",
    vendor_name: "PT Officeless 3 Diupdate DAYAT",
    vendor_registration_date: "",
    vendor_registration_number: "",
    vendor_status: "Active",
    vendor_type: "Vendor Type 1 Perorangan",
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
