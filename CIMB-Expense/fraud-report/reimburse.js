function _log(msg) {
    console.log(msg);
};

function parseAmount(amountStr) {
    if (!amountStr) return null;

    amountStr = String(amountStr)
        .replace(/Rp/gi, "")
        .replace(/\s/g, "");

    if (amountStr.indexOf(",") !== -1) {
        amountStr = amountStr
            .replace(/\./g, "")
            .replace(",", ".");
    } else {
        amountStr = amountStr.replace(/,/g, "");
    }

    var result = parseFloat(amountStr);

    return isNaN(result) ? null : result;
}

function parseDate(dateStr) {
    if (!dateStr) return null;
    
    var months = {
        JANUARY: "01",
        FEBRUARY: "02",
        MARCH: "03",
        APRIL: "04",
        MAY: "05",
        JUNE: "06",
        JULY: "07",
        AUGUST: "08",
        SEPTEMBER: "09",
        OCTOBER: "10",
        NOVEMBER: "11",
        DECEMBER: "12"
    };

    var match = dateStr.toUpperCase().match(/^(\d{1,2})\s+([A-Z]+)\s+(\d{4})$/);

    if (match) {
        var day = ("0" + match[1]).slice(-2);
        var month = months[match[2]];
        var year = match[3];

        if (month) {
            return new Date(year + "-" + month + "-" + day).getTime();
        }
    }

    // fallback
    var parsed = new Date(dateStr);

    return isNaN(parsed.getTime()) ? null : parsed.getTime();
}

var ocr_blocked_contents = []

var ocr = {
    "data": {
        "anomalyData": {},
        "textDetection": {
            "textAnnotations": [
                {
                    "amountFormatDetection": {
                        "confidence": 0,
                        "detected": false,
                        "format": "not_match",
                        "matchStatus": "not_match",
                        "normalizedValue": null,
                        "originalValue": "1193115,00"
                    },
                    "amountMatch": true,
                    "bankAccountNumberMatch": false,
                    "categoryName": "r_makan_minum__nasabah_",
                    "categoryType": "Reimbursement",
                    "dateFormatDetection": {
                        "confidence": 1,
                        "detected": true,
                        "format": "YYYY-MM-DD",
                        "matchStatus": "exact_match",
                        "normalizedValue": "2026-03-31",
                        "originalValue": "2026-03-31"
                    },
                    "dates": [
                        "2031-03-26",
                        "2026-03-31",
                        "2031-03-26",
                        "2026-03-31",
                        "31/03/2026"
                    ],
                    "datesMatch": true,
                    "description": "RECEIPT\nBruule House\nBruule House\nServed by Kasir\nfl\nDine In\n2x House Blend Tea I\n62.000,00\nce\n1x Fresh Mind\n56.000,00\n1x Lychee Tea\n43.000,00\n1x Empal Gentong Dag\n87.000,00\ning\n1x Empal Gentong Cam\n84.000,00\npur\n1x Mineral 380\n36.000,00\n1x Dreamy Chocolate\n76.000,00\n1x Empal Gentong Cam\n84.000,00\npur\n1x Mie Goreng Seafoo\n70.000,00\nd\n1x Nasi Nusantara Da\n92.000,00\nging Balado + Lodeh\n1x Caesar Salad Bowl\n63.000,00\n1x Bruule Bombb Beef\n77.000,00\n1x Dreamy Tiramisu\n86.000,00\n2x Latte Hot\n78.000,00\n1x Cappucino Hot\n39.000,00\nPRICE\nSERVICE CHARGE\nRp1.033.000,00\nRp 51.650,00\nPB1 10%\nRp 108.465,00\nTOTAL\nEDC BCA\nNotes\nRp 1.193. 115,00\nRp 1,193, 115.00\nBRH/26/3/31/6781778\n31/03/2026 14:26:25",
                    "descriptionMatch": false,
                    "formatDetection": {
                        "amounts": [
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "1033000.00",
                                "originalValue": "Rp1.033.000,00\n"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "51650.00",
                                "originalValue": "Rp 51.650,00\n"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "108465.00",
                                "originalValue": "Rp 108.465,00\n"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "exact_match",
                                "normalizedValue": "1193115.00",
                                "originalValue": "Rp 1.193. 115,00\n"
                            },
                            {
                                "confidence": 0.9,
                                "detected": true,
                                "format": "US",
                                "matchStatus": "exact_match",
                                "normalizedValue": "1193115.00",
                                "originalValue": "Rp 1,193, 115.00\n"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "62000.00",
                                "originalValue": "62.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "56000.00",
                                "originalValue": "56.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "43000.00",
                                "originalValue": "43.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "87000.00",
                                "originalValue": "87.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "84000.00",
                                "originalValue": "84.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "36000.00",
                                "originalValue": "36.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "76000.00",
                                "originalValue": "76.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "70000.00",
                                "originalValue": "70.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "92000.00",
                                "originalValue": "92.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "63000.00",
                                "originalValue": "63.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "77000.00",
                                "originalValue": "77.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "86000.00",
                                "originalValue": "86.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "78000.00",
                                "originalValue": "78.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "39000.00",
                                "originalValue": "39.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "033000.00",
                                "originalValue": "033.000,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "51650.00",
                                "originalValue": "51.650,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "108465.00",
                                "originalValue": "108.465,00"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "115.00",
                                "originalValue": "115,00"
                            },
                            {
                                "confidence": 0.9,
                                "detected": true,
                                "format": "ID",
                                "matchStatus": "not_match",
                                "normalizedValue": "115.00",
                                "originalValue": "115.00"
                            }
                        ],
                        "dates": [
                            {
                                "confidence": 0.9,
                                "detected": true,
                                "format": "DD/MM/YYYY",
                                "matchStatus": "not_match",
                                "normalizedValue": "2031-03-26",
                                "originalValue": "26/3/31"
                            },
                            {
                                "confidence": 1,
                                "detected": true,
                                "format": "DD/MM/YYYY",
                                "matchStatus": "exact_match",
                                "normalizedValue": "2026-03-31",
                                "originalValue": "31/03/2026"
                            }
                        ],
                        "summary": {
                            "amountFormatDistribution": {
                                "ID": 23,
                                "US": 1
                            },
                            "dateFormatDistribution": {
                                "DD/MM/YYYY": 2
                            },
                            "totalAmountsDetected": 24,
                            "totalDatesDetected": 2
                        }
                    },
                    "intendedDescription": "",
                    "invoiceMatch": true,
                    "locale": {
                        "locale": "id"
                    },
                    "matchedAmount": "1193115,00",
                    "matchedBankAccountNumber": null,
                    "matchedDates": "2026-03-31",
                    "matchedInvoice": "BRH/26/3/31/6781778",
                    "matchedText": null,
                    "numbers": [
                        "2",
                        "262000",
                        "62000",
                        "6200000",
                        "00",
                        "001",
                        "1",
                        "156000",
                        "56000",
                        "5600000",
                        "00",
                        "001",
                        "1",
                        "143000",
                        "43000",
                        "4300000",
                        "00",
                        "001",
                        "1",
                        "187000",
                        "87000",
                        "8700000",
                        "00",
                        "001",
                        "1",
                        "184000",
                        "84000",
                        "8400000",
                        "00",
                        "001",
                        "1",
                        "1380",
                        "380",
                        "38036000",
                        "36000",
                        "3600000",
                        "00",
                        "001",
                        "1",
                        "176000",
                        "76000",
                        "7600000",
                        "00",
                        "001",
                        "1",
                        "184000",
                        "84000",
                        "8400000",
                        "00",
                        "001",
                        "1",
                        "170000",
                        "70000",
                        "7000000",
                        "00",
                        "001",
                        "1",
                        "192000",
                        "92000",
                        "9200000",
                        "00",
                        "001",
                        "1",
                        "163000",
                        "63000",
                        "6300000",
                        "00",
                        "001",
                        "1",
                        "177000",
                        "77000",
                        "7700000",
                        "00",
                        "001",
                        "1",
                        "186000",
                        "86000",
                        "8600000",
                        "00",
                        "002",
                        "2",
                        "278000",
                        "78000",
                        "7800000",
                        "00",
                        "001",
                        "1",
                        "139000",
                        "39000",
                        "3900000",
                        "00",
                        "001033000",
                        "1033000",
                        "103300000",
                        "00",
                        "0051650",
                        "51650",
                        "5165000",
                        "00",
                        "001",
                        "1",
                        "110",
                        "10",
                        "10108465",
                        "108465",
                        "10846500",
                        "00",
                        "001193",
                        "1193",
                        "1193115,00",
                        "115,00",
                        "115,00115",
                        "115",
                        "1151193",
                        "1193",
                        "1193115.00",
                        "115.00",
                        "115.00115",
                        "115",
                        "11526",
                        "26",
                        "263",
                        "3",
                        "331",
                        "31",
                        "316781778",
                        "6781778",
                        "678177831",
                        "31",
                        "3103",
                        "03",
                        "032026",
                        "2026",
                        "202614",
                        "14",
                        "1426",
                        "26",
                        "2625",
                        "25",
                        "2562000.00",
                        "62000.00",
                        "62000.0062000",
                        "62000",
                        "6200056000.00",
                        "56000.00",
                        "56000.0056000",
                        "56000",
                        "5600043000.00",
                        "43000.00",
                        "43000.0043000",
                        "43000",
                        "4300087000.00",
                        "87000.00",
                        "87000.0087000",
                        "87000",
                        "8700084000.00",
                        "84000.00",
                        "84000.0084000",
                        "84000",
                        "8400036000.00",
                        "36000.00",
                        "36000.0036000",
                        "36000",
                        "3600076000.00",
                        "76000.00",
                        "76000.0076000",
                        "76000",
                        "7600084000.00",
                        "84000.00",
                        "84000.0084000",
                        "84000",
                        "8400070000.00",
                        "70000.00",
                        "70000.0070000",
                        "70000",
                        "7000092000.00",
                        "92000.00",
                        "92000.0092000",
                        "92000",
                        "9200063000.00",
                        "63000.00",
                        "63000.0063000",
                        "63000",
                        "6300077000.00",
                        "77000.00",
                        "77000.0077000",
                        "77000",
                        "7700086000.00",
                        "86000.00",
                        "86000.0086000",
                        "86000",
                        "8600078000.00",
                        "78000.00",
                        "78000.0078000",
                        "78000",
                        "7800039000.00",
                        "39000.00",
                        "39000.0039000",
                        "39000",
                        "390001033000.00",
                        "1033000.00",
                        "1033000.001033000",
                        "1033000",
                        "103300051650.00",
                        "51650.00",
                        "51650.0051650",
                        "51650",
                        "51650108465.00",
                        "108465.00",
                        "108465.00108465",
                        "108465",
                        "108465115.00",
                        "115.00",
                        "115.00115",
                        "115",
                        "1151.19",
                        "1.19",
                        "1.19193115",
                        "193115"
                    ],
                    "original": "RECEIPT\nBruule House\nBruule House\nServed by Kasir\nfl\nDine In\n2x House Blend Tea I\n62.000,00\nce\n1x Fresh Mind\n56.000,00\n1x Lychee Tea\n43.000,00\n1x Empal Gentong Dag\n87.000,00\ning\n1x Empal Gentong Cam\n84.000,00\npur\n1x Mineral 380\n36.000,00\n1x Dreamy Chocolate\n76.000,00\n1x Empal Gentong Cam\n84.000,00\npur\n1x Mie Goreng Seafoo\n70.000,00\nd\n1x Nasi Nusantara Da\n92.000,00\nging Balado + Lodeh\n1x Caesar Salad Bowl\n63.000,00\n1x Bruule Bombb Beef\n77.000,00\n1x Dreamy Tiramisu\n86.000,00\n2x Latte Hot\n78.000,00\n1x Cappucino Hot\n39.000,00\nPRICE\nSERVICE CHARGE\nRp1.033.000,00\nRp 51.650,00\nPB1 10%\nRp 108.465,00\nTOTAL\nEDC BCA\nNotes\nRp 1.193. 115,00\nRp 1,193, 115.00\nBRH/26/3/31/6781778\n31/03/2026 14:26:25",
                    "sourceStemmed": [],
                    "targetStemmed": []
                }
            ]
        }
    },
    "error": false,
    "message": "Successfully Text Detection",
    "refId": "155225",
    "totalPages": 1
}


var is_invalid = true;
var message = "Maaf, terjadi kesalahan saat melakukan cek OCR";

// var similarities = {};
var data_ocr = ocr.data;
var receipt_texts = [];
var detected_contents = [];

// var ocr_summary = "Not Suspected";
var status_content_blocker = "No blocked content Detected"

// #: ocr hit not error
if (!!data_ocr && ocr.error != true) {
    var ocr_amount_match = false;
    var ocr_amount_str = "";
    var ocr_invoice_date_match = false;
    var ocr_invoice_date_str = "";
    var ocr_invoice_number_match = false;
    var ocr_invoice_number_str = "";

    // #1: text detection here
    if (data_ocr.textDetection) {
        data_ocr.textDetection.textAnnotations.forEach(function (ocr_res) {
            // if (ocr_res.amountMatch) {
            //   ocr_amount_match = true;
            //   ocr_amount_str = ocr_res.matchedAmount;
            // }
            // if (ocr_res.datesMatch) {
            //   ocr_invoice_date_match = true;
            //   ocr_invoice_date_str = ocr_res.matchedDates;
            // }
            // if (ocr_res.invoiceMatch) {
            //   ocr_invoice_number_match = true;
            //   ocr_invoice_number_str = ocr_res.matchedInvoice;
            // }
            ocr_amount_str = ocr_res.matchedAmount
            if (ocr_res.amountMatch) {
                ocr_amount_match = true

            }
            ocr_invoice_date_str = ocr_res.matchedDates
            if (ocr_res.datesMatch) {
                ocr_invoice_date_match = true

            }
            ocr_invoice_number_str = ocr_res.matchedInvoice
            if (ocr_res.invoiceMatch) {
                ocr_invoice_number_match = true

            }
            receipt_texts.push(ocr_res.description);
        });
    }

    // #2: mandatory receipt validation
    // if (activity.mandatory_receipt && activity.mandatory_ocr) {
    //   var passed_amount = false;
    //   var passed_number = false;
    //   var passed_date = false;

    //   passed_amount =
    //     (activity.mandatory_ocr_amount && ocr_amount_match) ||
    //     !activity.mandatory_ocr_amount;
    //   passed_number =
    //     (activity.mandatory_ocr_number && ocr_invoice_number_match) ||
    //     !activity.mandatory_ocr_number;
    //   passed_date =
    //     (activity.mandatory_ocr_date && ocr_invoice_date_match) ||
    //     !activity.mandatory_ocr_date;

    //   if (passed_amount && passed_number && passed_date) {
    //     is_invalid = false;
    //     message = "Hasil OCR receipt transaksi match, melanjutkan transaksi";
    //   } else {
    //     is_invalid = true;
    //     message = "OCR tidak match";
    //   }
    // } else {
    is_invalid = false;
    message = "OCR match tidak diperlukan, melanjutkan transaksi";
    // }

    // #3: parse ocr blocked contents
    if (!!ocr_blocked_contents) {
        ocr_blocked_contents.forEach(function (bc) {
            if (bc.value != "") {
                var v = bc.value.toLowerCase();
                receipt_texts.forEach(function (text) {
                    text = text.toLowerCase();
                    _log(text)
                    if (text.indexOf(v) !== -1) {
                        detected_contents.push(bc.value);
                        status_content_blocker = "Blocked Content Detected"
                    }
                });
            }
        });
    }

    // #: ocr hit error
} else if (ocr.error == true) {
    is_invalid = true;
    try {
        if (typeof ocr.message == 'object') {
            message = Object.keys(ocr.message).reduce(function (carry, key) {
                if (!!ocr.message[key]) {
                    carry.push(ocr.message[key])
                }
                return carry
            }, []).join(';');
            if (!message) {
                message = "Maaf, terjadi kesalahan saat melakukan cek OCR";
            }
        } else {
            message = ocr.message;
        }
    } catch (err) {
        _log(err)
        message = "Maaf, terjadi kesalahan saat melakukan cek OCR";
    }
} else {
    is_invalid = true;
    message = "Maaf, terjadi kesalahan saat melakukan cek OCR";
}

// #: parse amount and invoice date
// ocr_amount_str =
//     ocr_amount_str && ocr_amount_str != "" ? Number(ocr_amount_str) : null;

ocr_amount_str = parseAmount(ocr_amount_str);

ocr_invoice_date_str =
    ocr_invoice_date_str && ocr_invoice_date_str != ""
        ? new Date(ocr_invoice_date_str).getTime()
        : null;

res = {
    error: is_invalid,
    is_invalid: is_invalid,
    message: message,
};


// #: generate status tags
var ocr_amount_status_tags = {
    background: ocr_amount_match ? "#00ff11" : "#ff0000",
    font_color: ocr_amount_match ? "#ffffff" : "#ffffff",
    name: ocr_amount_match ? "Match" : "Not Match",
};
var ocr_invoice_date_status_tags = {
    background: ocr_invoice_date_match ? "#00ff11" : "#ff0000",
    font_color: ocr_invoice_date_match ? "#ffffff" : "#ffffff",
    name: ocr_invoice_date_match ? "Match" : "Not Match",
};
var ocr_invoice_number_status_tags = {
    background: ocr_invoice_number_match ? "#00ff11" : "#ff0000",
    font_color: ocr_invoice_number_match ? "#ffffff" : "#ffffff",
    name: ocr_invoice_number_match ? "Match" : "Not Match",
};

_log(res);
_log({
    ocr_amount_status_tags: ocr_amount_status_tags,
    ocr_amount_str: ocr_amount_str,
    ocr_invoice_date_status_tags: ocr_invoice_date_status_tags,
    ocr_invoice_date_str: ocr_invoice_date_str,
    ocr_invoice_number_status_tags: ocr_invoice_number_status_tags,
    ocr_invoice_number_str: ocr_invoice_number_str
});