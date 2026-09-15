var report_realization_parent = {
    "approved_at": 1787911005087,
    "approved_by_email": "rizki.haddi@mekari.com",
    "company_id": 28364,
    "created_at": 1787910780073,
    "created_by": 0,
    "created_by_project_user": "L5RR6EypnHYg",
    "entity_id": {
        "id": "Ks6BgE75YiQ1",
        "name": "Sintesa"
    },
    "flow_status": "approved",
    "id": "6XqqsHUgOxsk",
    "ids": "6XqqsHUgOxsk",
    "period_id": {
        "id": "Xn05TC9biby3",
        "name": 2026
    },
    "submission_id": {
        "id": "PuBBxVJNNXMrQ",
        "name": "Sintesa - 2026"
    },
    "submission_type_id": {
        "id": "hfUlpmiB8vOk",
        "name": "SDG - Realization"
    },
    "submitted_at": 1787910955594,
    "submitted_by": "rizki.haddi@mekari.com",
    "updated_at": 1787911005087,
    "updated_by": 0,
    "updated_by_project_user": "L5RR6EypnHYg"
};

var realization_items = [
    {
        "baseline": "Belum ada",
        "company_id": 28364,
        "created_at": 1787910780108,
        "created_by": 0,
        "detail_action_solution": "Berinvestasi pada energi terbarukan",
        "evidence": "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/nocode/file-upload/dev/28364/qTOOb0G3c13Q-create-mki.png",
        "id": "9LQQBGNFWqFB",
        "ids": "9LQQBGNFWqFB",
        "impact": "Operation Impact",
        "indicator_id": {
            "id": "oP229ralLrzM",
            "name": "Sustainability Investment"
        },
        "key_business_action": "Kerjasama dengan mitra kerja/ non profit organization yang bergerak di bidang keselamatan kerja",
        "parent_id": {
            "id": "6XqqsHUgOxsk",
            "name": "Sintesa"
        },
        "pillar_id": {
            "id": "qT4ROSu3d1NL",
            "name": "Operation"
        },
        "plan_origin": "INITIATE",
        "sdg_ambition_esg_alignment": null,
        "sdg_id": {
            "id": "s6X9n1U8Bjl0",
            "name": "SDG 12"
        },
        "target": "Mencapai 100%",
        "target_submission_id": "SxPPaquIIYswt",
        "unit_id": null,
        "updated_at": 1787910890118,
        "updated_by": 0,
        "updated_by_project_user": "L5RR6EypnHYg",
        "value_qualitative": "12...",
        "value_quantitative": null
    },
    {
        "baseline": "Belum ada kebijakan terkait K3",
        "company_id": 28364,
        "created_at": 1787910780108,
        "created_by": 0,
        "detail_action_solution": "Pemutakhiran pedoman pelaksanaan  Kesehatan dan Keselamatan Kerja (K3)",
        "evidence": "https://officeless-production-public.oss-ap-southeast-5.aliyuncs.com/nocode/file-upload/dev/28364/YjGGzBgECTV2-create-evaluate.png",
        "id": "eVnnAgG6Elzk",
        "ids": "eVnnAgG6Elzk",
        "impact": "Investment Impact",
        "indicator_id": {
            "id": "rvl0GgPCRl7C",
            "name": "Ketersediaan SOP terkait K3 yang lengkap dan mutakhir"
        },
        "key_business_action": "Membuat kebijakan Kesehatan dan Keselamatan Kerja (K3) untuk menciptakan lingkungan kerja yang sehat dan aman",
        "parent_id": {
            "id": "6XqqsHUgOxsk",
            "name": "Sintesa"
        },
        "pillar_id": {
            "id": "4tSZIxTO6lzE",
            "name": "Policies"
        },
        "plan_origin": "HOLDING",
        "sdg_ambition_esg_alignment": null,
        "sdg_id": {
            "id": "kAehVqfKhTjJ",
            "name": "SDG 1"
        },
        "target": "Memiliki Kebijakan spesifik terkait K3",
        "target_submission_id": "0dttMB8T3mtDU",
        "unit_id": {
            "id": "xDcOuaSoeCZD",
            "name": "Kilogram"
        },
        "updated_at": 1787910816792,
        "updated_by": 0,
        "updated_by_project_user": "L5RR6EypnHYg",
        "value_qualitative": null,
        "value_quantitative": 12
    }
];

function str(v) {
    return (v === null || v === undefined) ? "" : v;
}

function ref(v) {
    return (v === null || v === undefined) ? {} : v;
}

function num(v) {
    return (v === undefined) ? null : v;
}

function normalizeSpace(v) {
    return str(v).replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");
}

var result = [];
var i;

for (i = 0; i < realization_items.length; i++) {
    var item = realization_items[i];

    result.push({
        parent_id: report_realization_parent.id,
        period: report_realization_parent.period_id ? report_realization_parent.period_id.name : null,
        flow_status: report_realization_parent.flow_status,
        entity_id: ref(report_realization_parent.entity_id),
        sdg_id: ref(item.sdg_id),
        indicator_id: ref(item.indicator_id),
        pillar_id: ref(item.pillar_id),
        unit_id: ref(item.unit_id),
        plan_origin: str(item.plan_origin),
        impact: str(item.impact),
        key_business_action: str(item.key_business_action),
        detail_action_solution: normalizeSpace(item.detail_action_solution),
        sdg_ambition_esg_alignment: str(item.sdg_ambition_esg_alignment),
        target: str(item.target),
        baseline: str(item.baseline),
        value_quantitative: num(item.value_quantitative),
        value_qualitative: str(item.value_qualitative),
        evidence: str(item.evidence)
    });
};

console.log(result);