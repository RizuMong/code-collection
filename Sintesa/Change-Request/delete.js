// var action_plan_realization = {
//     "baseline": null,
//     "company_id": 28364,
//     "created_at": 1786558359386,
//     "created_by": 0,
//     "detail_action_solution": "Pemutakhiran pedoman pelaksanaan  Kesehatan dan Keselamatan Kerja (K3)",
//     "id": "vlzoS6SmVzLA",
//     "ids": "vlzoS6SmVzLA",
//     "impact": "Investment Impact",
//     "indicator_id": {
//         "id": "oPuO7i5lgrZv",
//         "name": "P1"
//     },
//     "key_business_action": "Membuat kebijakan Kesehatan dan Keselamatan Kerja (K3) untuk menciptakan lingkungan kerja yang sehat dan aman",
//     "parent_id": {
//         "id": "FpALftfGGXt6",
//         "name": "Sintesa"
//     },
//     "pillar_id": {
//         "id": "4tSZIxTO6lzE",
//         "name": "Policies"
//     },
//     "sdg_ambition_esg_alignment": null,
//     "sdg_id": {
//         "id": "kAehVqfKhTjJ",
//         "name": "SDG 1"
//     },
//     "target": null,
//     "target_submission_id": "uhfiWM1210YLa",
//     "updated_at": 1786558453011,
//     "updated_by": 0,
//     "updated_by_project_user": "vlN180vmSzPm",
//     "value_qualitative": "Ganti target",
//     "value_quantitative": null
// };

// var errors = [];
// var status_message = "success";
// var message = "";

// var hasQualitative = action_plan_realization.value_qualitative !== null && action_plan_realization.value_qualitative !== undefined && action_plan_realization.value_qualitative !== "";
// var hasQuantitative = action_plan_realization.value_quantitative !== null && action_plan_realization.value_quantitative !== undefined && action_plan_realization.value_quantitative !== "";

// if (action_plan.action_type === "DELETE") {
//   if (hasQualitative || hasQuantitative) {
//     errors.push("Cannot delete: realization data has already been entered for this action plan");
//   }
// }

// if (errors.length > 0) {
//   status_message = "error";
//   message = errors.join(", ");
// };

// console.log(message);


var report_realization_parent = {
    // "data": 1
};

var hasReportRealization = Object.keys(report_realization_parent).length > 0

console.log(hasReportRealization);