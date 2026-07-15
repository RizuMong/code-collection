answer_text: ""
answer_number: null
category: "Waste"
code: "306-4-a"
evidence: "None"
header: "Limbah B3 dari Cara Pengelolaan"
input_type: "Number"
title: "Diberikan ke pihak ketiga berizin"
unit: "ton"


_field.indicators.forEach(function (item, index) {
    if (_field.indicators[index].input_type === "Number") {
        _fieldPropertiesGroup.indicators[index].answer_number.is_hidden = false;
    } else if (_field.indicators[index].answer_mode === "Text") {
        _fieldPropertiesGroup.indicators[index].answer_text.is_hidden = false;
    };

    if (_field.indicators[index].unit !== "") {
        _fieldPropertiesGroup.indicators[index].unit.is_hidden = false;
    }
});