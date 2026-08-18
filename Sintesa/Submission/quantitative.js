var get_template_items = [
    {
        "additional_indicators": [
            {
                "category": "General",
                "header": "Describe Type Worker",
                "input_type": "Text"
            }
        ],
        "code": {
            "id": "L589oSZp3Hps",
            "name": "Types of Worker"
        },
        "company_id": 28364,
        "created_at": 1785310371933,
        "created_by": 0,
        "created_by_project_user": "vlN180vmSzPm",
        "gri_quantitative_id": {
            "id": "cEwPbFzulazR",
            "name": "cEwPbFzulazR"
        },
        "id": "daCTfmI45IwMe",
        "ids": "daCTfmI45IwMe",
        "indicators": [
            {
                "category": "General",
                "header": "Types of Worker",
                "input_type": "Number",
                "title": "Perempuan",
                "unit_id": null
            },
            {
                "category": "General",
                "header": "Types of Worker",
                "input_type": "Number",
                "title": "Perempuan",
                "unit_id": null
            }
        ],
        "updated_at": 1785310371998,
        "updated_by": 0,
        "updated_by_project_user": "vlN180vmSzPm"
    },
    {
        "additional_indicators": [
            {
                "category": "General",
                "header": null,
                "input_type": null
            }
        ],
        "code": {
            "id": "B9L2yTHjLFoSK",
            "name": "Jumlah Karyawan Berdasarkan Jenis Kelamin"
        },
        "company_id": 28364,
        "created_at": 1785311475248,
        "created_by": 0,
        "created_by_project_user": "vlN180vmSzPm",
        "gri_quantitative_id": {
            "id": "cEwPbFzulazR",
            "name": "cEwPbFzulazR"
        },
        "id": "PuhlHHUNnMhG",
        "ids": "PuhlHHUNnMhG",
        "indicators": [
            {
                "category": "General",
                "header": "Types of Gender",
                "input_type": "Number",
                "title": "Perempuan",
                "unit_id": null
            },
            {
                "category": "General",
                "header": "Types of Gender",
                "input_type": "Number",
                "title": "Laki-laki",
                "unit_id": null
            }
        ],
        "updated_at": 1785311475317,
        "updated_by": 0,
        "updated_by_project_user": "vlN180vmSzPm"
    }
];



// // EXPECTED OUTPUT
// var indicators = [
//     {
//         "category": "General",
//         "header": "Types of Worker",
//         "input_type": "Number",
//         "title": "Perempuan",
//         "unit_id": "", // if null
//         "answer": "" // default string kosong
//     },
//     {
//         "category": "General",
//         "header": "Types of Worker",
//         "input_type": "Number",
//         "title": "Perempuan",
//         "unit_id": "", // if null 
//         "answer": "" // default string kosong
//     },
//     {
//         "category": "General",
//         "header": "Types of Gender",
//         "input_type": "Number",
//         "title": "Perempuan",
//         "unit_id": "", // if null
//         "answer": "" // default string kosong
//     },
//     {
//         "category": "General",
//         "header": "Types of Gender",
//         "input_type": "Number",
//         "title": "Laki-laki",
//         "unit_id": "", // if null
//         "answer": "" // default string kosong
//     }
// ];

// var additional_indicators = [
//     {
//         "category": "General",
//         "header": "Describe Type Worker",
//         "input_type": "Text",
//         "answer": "" // default string kosong
//     }
// ];

var indicators = [];
var additional_indicators = [];

for (var i = 0; i < get_template_items.length; i++) {
    var item = get_template_items[i];
    var itemIndicators = item.indicators;

    if (!itemIndicators) continue;

    for (var j = 0; j < itemIndicators.length; j++) {
        var ind = itemIndicators[j];

        indicators.push({
            category: ind.category,
            header: ind.header,
            input_type: ind.input_type,
            title: ind.title,
            unit_id: ind.unit_id === null || ind.unit_id === undefined ? "" : ind.unit_id,
            answer: ""
        });
    }
}

for (var k = 0; k < get_template_items.length; k++) {
    var item2 = get_template_items[k];
    var itemAdditional = item2.additional_indicators;

    if (!itemAdditional) continue;

    for (var l = 0; l < itemAdditional.length; l++) {
        var addInd = itemAdditional[l];

        if (!addInd.header || !addInd.input_type) continue;

        additional_indicators.push({
            category: addInd.category,
            header: addInd.header,
            input_type: addInd.input_type,
            answer: ""
        });
    }
};

console.log({
    additional_indicators: additional_indicators,
    indicators: indicators
});
