var action_plans = [
    {
        "company_id": 28364,
        "created_at": 1783440187700,
        "created_by": 0,
        "created_by_project_user": "vlN180vmSzPm",
        "detail_action_solution": "Pemutakhiran pedoman pelaksanaan  Kesehatan dan Keselamatan Kerja (K3)",
        "id": "uhfvk0g26Yo",
        "ids": "uhfvk0g26Yo",
        "indicator_id": {
            "id": "oPuO7i5lgrZv",
            "name": "P1"
        },
        "key_business_action": "Membuat kebijakan Kesehatan dan Keselamatan Kerja (K3) untuk menciptakan lingkungan kerja yang sehat dan aman",
        "pillar_id": {
            "id": "4tSZIxTO6lzE",
            "name": "Policies"
        },
        "sdg_ambition_esg_alignment": null,
        "sdg_framework_id": {
            "id": "OyIMDpNJcsLxn",
            "name": "End poverty in all its forms everywhere"
        },
        "sdg_id": {
            "id": "kAehVqfKhTjJ",
            "name": "SDG 1"
        },
        "updated_at": 1783448144819,
        "updated_by": 0,
        "updated_by_project_user": "vlN180vmSzPm"
    }
]

var create_parent_action_plan = {
    "automation_id": "jyPkozYvR",
    "company_id": 28364,
    "created_at": 1783447215640,
    "created_by": 0,
    "entity_id": {
        "id": "HZ3kW9nVDtN0",
        "name": "PT Sintesa Argo"
    },
    "id": "Z31ArNjMuUrq",
    "ids": "Z31ArNjMuUrq",
    "period_id": {
        "id": "Xn05TC9biby3",
        "name": 2026
    },
    "status": "DRAFT",
    "updated_at": 1783447215640,
    "updated_by": 0
};

var action_items = [];

for (var i = 0; i < action_plans.length; i++) {
    var data = action_plans[i];
    action_items.push({
        sdg_id: data.sdg_id,
        pillar_id: data.pillar_id,
        indicator_id: data.indicator_id,
        key_business_action: data.key_business_action,
        detail_action_solution: data.detail_action_solution,
        sdg_ambition_esg_alignment: data.sdg_ambition_esg_alignment,
        adoption_status: "PENDING"
    });
};

for (var j = 0; j < action_items.length; j++) {
    action_items[j].parent_id = {
        id: create_parent_action_plan.id,
        name: create_parent_action_plan.name
    };
};

console.log({
    action_items: action_items
});