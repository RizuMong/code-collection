var template_datas = [
    {
        "code": {
            "id": "tSxMJEXyqJY5",
            "name": "306-4-a"
        },
        "company_id": 28366,
        "created_at": 1782964686671,
        "created_by": 0,
        "created_by_project_user": "tSxMqRcyCJiO",
        "gri_quantitative_id": {
            "id": "1Oygrfn79Lh",
            "name": "1Oygrfn79Lh"
        },
        "id": "bqTK1KCZY9nmy",
        "ids": "bqTK1KCZY9nmy",
        "indicators": [
            {
                "category": "Waste",
                "evidence": "None",
                "header": "Limbah Non B3 dari Cara Pengelolaan",
                "input_type": "Number",
                "title": "Digunakan Kembali",
                "unit": "ton"
            },
            {
                "category": "Waste",
                "evidence": "None",
                "header": "Limbah Non B3 dari Cara Pengelolaan",
                "input_type": "Number",
                "title": "Dijual",
                "unit": "ton"
            },
            {
                "category": "Waste",
                "evidence": "None",
                "header": "Limbah B3 dari Cara Pengelolaan",
                "input_type": "Number",
                "title": "Diberikan ke pihak ketiga berizin",
                "unit": "ton"
            },
            {
                "category": "Waste",
                "evidence": "None",
                "header": "Limbah B3 dari Cara Pengelolaan",
                "input_type": "Number",
                "title": "Jumlah yang Dialihkan dari Pembuangan",
                "unit": "ton"
            }
        ],
        "updated_at": 1782964686735,
        "updated_by": 0,
        "updated_by_project_user": "tSxMqRcyCJiO"
    },
    {
        "code": {
            "id": "cEwrNKfuQa7e",
            "name": "2-8a"
        },
        "company_id": 28366,
        "created_at": 1782964799977,
        "created_by": 0,
        "created_by_project_user": "tSxMqRcyCJiO",
        "gri_quantitative_id": {
            "id": "1Oygrfn79Lh",
            "name": "1Oygrfn79Lh"
        },
        "id": "IoPTN7zvhBsn",
        "ids": "IoPTN7zvhBsn",
        "indicators": [
            {
                "category": "General",
                "evidence": "None",
                "header": "Types of Worker",
                "input_type": "Number",
                "title": "Agency workers",
                "unit": null
            },
            {
                "category": "General",
                "evidence": "None",
                "header": "Types of Worker",
                "input_type": "Number",
                "title": "Contractors",
                "unit": null
            },
            {
                "category": "General",
                "evidence": "None",
                "header": "Types of Worker",
                "input_type": "Number",
                "title": "Interns",
                "unit": null
            }
        ],
        "updated_at": 1782964800034,
        "updated_by": 0,
        "updated_by_project_user": "tSxMqRcyCJiO"
    }
];

var indicatorTemplates = [];

for (var i = 0; i < template_datas.length; i++) {
    var indicator_data = template_datas[i];
    var indicators = indicator_data.indicators;
    var code = indicator_data.code.name;

    for (var j = 0; j < indicators.length; j++) {
        var item = indicators[j];
        indicatorTemplates.push({
            code: code,
            category: item.category,
            evidence: item.evidence,
            header: item.header,
            input_type: item.input_type,
            title: item.title,
            unit: item.unit,
            answer_text: "",
            answer_number: null
        });
    }
};


console.log(indicatorTemplates);