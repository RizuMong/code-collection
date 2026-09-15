var data_submission_parent = {
    "company_id": 28364,
    "created_at": 1788323687592,
    "created_by": 0,
    "created_by_project_user": "L5RR6EypnHYg",
    "entity_id": {
        "id": "Ks6BgE75YiQ1",
        "name": "Sintesa"
    },
    "flow_status": "draft",
    "id": "SxPzqCWIOsJW",
    "ids": "SxPzqCWIOsJW",
    "period_id": {
        "id": "Xn05TC9biby3",
        "name": 2026
    },
    "submission_type_id": {
        "id": "B9LikxdjMo0k",
        "name": "GRI - Qualitative"
    },
    "template_id": {
        "id": "DcESXTbPWsnd",
        "name": "FGD Kuisioner - Sintesa Group"
    },
    "updated_at": 1788323687592,
    "updated_by": 0,
    "updated_by_project_user": "L5RR6EypnHYg"
};

var submission_items = [
    {
        "company_id": 28364,
        "created_at": 1788323687955,
        "created_by": 0,
        "id": "eVn3wR96wBlBU",
        "ids": "eVn3wR96wBlBU",
        "parent_id": {
            "id": "SxPzqCWIOsJW",
            "name": "FGD Kuisioner - Sintesa Group - 2026"
        },
        "questions": [
            {
                "answer_follow_up": null,
                "answer_follow_up_no": null,
                "answer_follow_up_yes": "Yes, karena..",
                "answer_mode": "Conditional",
                "answer_none": null,
                "code": "GRI 303, 302, 306",
                "follow_up_no": "Jika belum, apakah ada rencana penyelenggaraan program sosialisasi?",
                "follow_up_single": null,
                "follow_up_yes": "Jika ya, jelaskan bentuk program sosialisasi, indikator keberhasilan, serta keterlibatan karyawan dalam penerapan praktik ramah lingkungan.",
                "title": "Apakah perusahaan pernah menyelenggarakan sosialisasi terkait pengelolaan limbah, sampah, energi, dan air bekerja sama dengan mitra/non profit organization?"
            },
            {
                "answer_follow_up": null,
                "answer_follow_up_no": null,
                "answer_follow_up_yes": null,
                "answer_mode": "None",
                "answer_none": "YES",
                "code": "GRI 303, 302, 306",
                "follow_up_no": null,
                "follow_up_single": null,
                "follow_up_yes": null,
                "title": "Question None?"
            },
            {
                "answer_follow_up": "ya gitu",
                "answer_follow_up_no": null,
                "answer_follow_up_yes": null,
                "answer_mode": "Single",
                "answer_none": null,
                "code": "GRI 303, 302, 306",
                "follow_up_no": null,
                "follow_up_single": "Hai gimana?",
                "follow_up_yes": null,
                "title": "Question Single?"
            }
        ],
        "topic_id": {
            "id": "wGkjD0XfQJPQ",
            "name": "Sintesa Deliverable Commitment SDG 3: Memperbaiki Kondisi Kesehatan dan Kesejahteraan Lingkungan Kerja"
        },
        "updated_at": 1788325839680,
        "updated_by": 0,
        "updated_by_project_user": "L5RR6EypnHYg"
    }
];

// Example Expected Output
// [
//     {
//         "period": 2026,
//         "flow_status": "draft",
//         "entity_id": {
//             "id": "Ks6BgE75YiQ1",
//             "name": "Sintesa"
//         },
//         "template_id": {
//             "id": "DcESXTbPWsnd",
//             "name": "FGD Kuisioner - Sintesa Group"
//         },
//         "topic_id": {
//             "id": "wGkjD0XfQJPQ",
//             "name": "Sintesa Deliverable Commitment SDG 3: Memperbaiki Kondisi Kesehatan dan Kesejahteraan Lingkungan Kerja"
//         },
//         "answer_follow_up": "ya gitu",
//         "answer_follow_up_no": null,
//         "answer_follow_up_yes": null,
//         "answer_mode": "Single",
//         "answer_none": null,
//         "code": "GRI 303, 302, 306",
//         "follow_up_no": null,
//         "follow_up_single": "Hai gimana?",
//         "follow_up_yes": null,
//         "title": "Question Single?",
//         "value": "ya gitu"
//     }
// ]

// Helper: normalisasi nilai kosong jadi null (tanpa membuang 0 / false / "")
function toNull(val) {
    if (val === undefined) {
        return null;
    }
    return val;
}

// Helper: ambil nilai jawaban berdasarkan answer_mode
function getAnswerValue(question) {
    var mode = question.answer_mode;

    if (mode === "Single") {
        return toNull(question.answer_follow_up);
    }

    if (mode === "None") {
        return toNull(question.answer_none);
    }

    if (mode === "Conditional") {
        if (question.answer_follow_up_yes !== null && question.answer_follow_up_yes !== undefined) {
            return question.answer_follow_up_yes;
        }
        if (question.answer_follow_up_no !== null && question.answer_follow_up_no !== undefined) {
            return question.answer_follow_up_no;
        }
        return null;
    }

    // fallback kalau ada mode baru yang belum di-handle
    if (question.answer_follow_up !== null && question.answer_follow_up !== undefined) {
        return question.answer_follow_up;
    }
    if (question.answer_none !== null && question.answer_none !== undefined) {
        return question.answer_none;
    }
    return null;
}

// Helper: ambil period dari parent
function getPeriod(parent) {
    if (!parent.period_id) {
        return null;
    }
    return toNull(parent.period_id.name);
};

// Declare
var report_items = [];

// Build report_items
submission_items.forEach(function (item) {
    var questions = item.questions || [];

    questions.forEach(function (q) {
        report_items.push({
            "period": getPeriod(data_submission_parent),
            "flow_status": data_submission_parent.flow_status,
            "entity_id": data_submission_parent.entity_id,
            "template_id": data_submission_parent.template_id,
            "parent_id": data_submission_parent.ids,
            "topic_id": item.topic_id,

            "answer_follow_up": toNull(q.answer_follow_up),
            "answer_follow_up_no": toNull(q.answer_follow_up_no),
            "answer_follow_up_yes": toNull(q.answer_follow_up_yes),
            "answer_mode": q.answer_mode,
            "answer_none": toNull(q.answer_none),
            "code": q.code,
            "follow_up_no": toNull(q.follow_up_no),
            "follow_up_single": toNull(q.follow_up_single),
            "follow_up_yes": toNull(q.follow_up_yes),
            "title": q.title,
            "value": getAnswerValue(q)
        });
    });
});

console.log(report_items);