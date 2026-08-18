// var get_indicator_items = [
//     {
//         "code": "GRI 302",
//         "company_id": 28364,
//         "created_at": 1785842259588,
//         "created_by": 0,
//         "created_by_project_user": "QRHw8oeAc4ub",
//         "gri_sdg_ids": [
//             {
//                 "id": "9L5fz5WFRqro",
//                 "name": "GRI 302-4"
//             }
//         ],
//         "id": "6XneLn2gbxAf",
//         "ids": "6XneLn2gbxAf",
//         "questions": [
//             {
//                 "answer_mode": "Conditional",
//                 "follow_up_no": "Jika belum, apakah ada rencana untuk menyusun atau memperbarui panduan efisiensi energi ke depan?",
//                 "follow_up_single": null,
//                 "follow_up_yes": "Jika ya, mohon jelaskan isi kebijakan atau panduan tersebut, tahun penerbitannya, ruang lingkup penerapan, serta contoh implementasi yang sudah berjalan.",
//                 "title": "Apakah perusahaan memiliki kebijakan atau panduan resmi untuk efisiensi energi di lingkungan perusahaan?"
//             }
//         ],
//         "topic_id": {
//             "id": "xDcm47FoeCfM",
//             "name": "Sintesa Deliverable Commitment SDG 7: Energi Bersih dan Terjangkau"
//         },
//         "topic_name": "Sintesa Deliverable Commitment SDG 7: Energi Bersih dan Terjangkau",
//         "updated_at": 1785842302204,
//         "updated_by": 0,
//         "updated_by_project_user": "QRHw8oeAc4ub"
//     },
//     {
//         "code": "GRI 302, SDG 7, 13",
//         "company_id": 28364,
//         "created_at": 1785842320904,
//         "created_by": 0,
//         "created_by_project_user": "QRHw8oeAc4ub",
//         "gri_sdg_ids": [
//             {
//                 "id": "9L5fz5WFRqro",
//                 "name": "GRI 302-4"
//             },
//             {
//                 "id": "tSx3D21yFJsD",
//                 "name": "SDG 7"
//             },
//             {
//                 "id": "hfUlKRPBNvcS",
//                 "name": "SDG 13"
//             }
//         ],
//         "id": "qT4nROF3U1SH",
//         "ids": "qT4nROF3U1SH",
//         "questions": [
//             {
//                 "answer_mode": "Conditional",
//                 "follow_up_no": "Jika belum, apakah ada rencana untuk menerapkan program efisiensi energi di operasional perusahaan?",
//                 "follow_up_single": null,
//                 "follow_up_yes": "Jika ya, mohon sebutkan jenis inisiatif atau program efisiensi energi yang telah dilakukan, beserta data capaian (misalnya penghematan listrik, penurunan konsumsi energi per unit produksi).",
//                 "title": "Apakah perusahaan melakukan upaya efisiensi energi dalam kegiatan operasional sehari-hari?"
//             },
//             {
//                 "answer_mode": "Conditional",
//                 "follow_up_no": "Jika belum, apakah ada target atau rencana jangka pendek/panjang untuk meningkatkan pemakaian energi terbarukan?",
//                 "follow_up_single": null,
//                 "follow_up_yes": "Jika ya, mohon jelaskan jenis energi terbarukan yang digunakan, kapasitas yang terpasang, serta persentase kontribusinya terhadap total kebutuhan energi perusahaan.",
//                 "title": "Apakah perusahaan sudah memanfaatkan energi bersih dan terbarukan (misalnya tenaga surya, angin, biomassa) untuk kebutuhan listrik operasional/produksi?"
//             },
//             {
//                 "answer_mode": "Conditional",
//                 "follow_up_no": "Jika belum, apakah ada rencana untuk melakukan penggantian lampu konvensional dengan lampu LED di masa mendatang?",
//                 "follow_up_single": null,
//                 "follow_up_yes": "Jika ya, mohon jelaskan jumlah titik lampu yang telah diganti, lokasi penerapan, serta penghematan energi yang diperoleh.",
//                 "title": "Apakah perusahaan telah melakukan migrasi penggunaan lampu LED sebagai upaya efisiensi energi di area kerja?"
//             }
//         ],
//         "topic_id": {
//             "id": "xDcm47FoeCfM",
//             "name": "Sintesa Deliverable Commitment SDG 7: Energi Bersih dan Terjangkau"
//         },
//         "topic_name": "Sintesa Deliverable Commitment SDG 7: Energi Bersih dan Terjangkau",
//         "updated_at": 1785842474491,
//         "updated_by": 0,
//         "updated_by_project_user": "QRHw8oeAc4ub"
//     }
// ];

// var indicatorItems = [];

// for (var i = 0; i < get_indicator_items.length; i++) {
//     var item = get_indicator_items[i];
//     var questions = item.questions || [];

//     for (var j = 0; j < questions.length; j++) {
//         var q = questions[j];

//         indicatorItems.push({
//             code: item.code || "",
//             title: q.title || "",
//             answer_mode: q.answer_mode || "",
//             follow_up_no: q.follow_up_no || null,
//             follow_up_single: q.follow_up_single || null,
//             follow_up_yes: q.follow_up_yes || null
//         });
//     }
// };

// console.log(indicatorItems);

// // var indicatorItems = [];

// // Expected Output
// // [
// //     {
// //         "code": "GRI 302",
// //         "title": "Apakah perusahaan memiliki kebijakan atau panduan resmi untuk efisiensi energi di lingkungan perusahaan?",
// //         "answer_mode": "Conditional",
// //         "follow_up_no": "Jika belum, apakah ada rencana untuk menyusun atau memperbarui panduan efisiensi energi ke depan?",
// //         "follow_up_single": null,
// //         "follow_up_yes": "Jika ya, mohon jelaskan isi kebijakan atau panduan tersebut, tahun penerbitannya, ruang lingkup penerapan, serta contoh implementasi yang sudah berjalan.",
// //     },
// //     {
// //         "code": "GRI 302, SDG 7, 13",
// //         "answer_mode": "Conditional",
// //         "follow_up_no": "Jika belum, apakah ada rencana untuk menerapkan program efisiensi energi di operasional perusahaan?",
// //         "follow_up_single": null,
// //         "follow_up_yes": "Jika ya, mohon sebutkan jenis inisiatif atau program efisiensi energi yang telah dilakukan, beserta data capaian (misalnya penghematan listrik, penurunan konsumsi energi per unit produksi).",
// //         "title": "Apakah perusahaan melakukan upaya efisiensi energi dalam kegiatan operasional sehari-hari?"
// //     },
// //     {
// //         "code": "GRI 302, SDG 7, 13",
// //         "answer_mode": "Conditional",
// //         "follow_up_no": "Jika belum, apakah ada target atau rencana jangka pendek/panjang untuk meningkatkan pemakaian energi terbarukan?",
// //         "follow_up_single": null,
// //         "follow_up_yes": "Jika ya, mohon jelaskan jenis energi terbarukan yang digunakan, kapasitas yang terpasang, serta persentase kontribusinya terhadap total kebutuhan energi perusahaan.",
// //         "title": "Apakah perusahaan sudah memanfaatkan energi bersih dan terbarukan (misalnya tenaga surya, angin, biomassa) untuk kebutuhan listrik operasional/produksi?"
// //     },
// //     {
// //         "code": "GRI 302, SDG 7, 13",
// //         "answer_mode": "Conditional",
// //         "follow_up_no": "Jika belum, apakah ada rencana untuk melakukan penggantian lampu konvensional dengan lampu LED di masa mendatang?",
// //         "follow_up_single": null,
// //         "follow_up_yes": "Jika ya, mohon jelaskan jumlah titik lampu yang telah diganti, lokasi penerapan, serta penghematan energi yang diperoleh.",
// //         "title": "Apakah perusahaan telah melakukan migrasi penggunaan lampu LED sebagai upaya efisiensi energi di area kerja?"
// //     }
// // ]


_field.questions.forEach(function (item, index) {
    console.log(_field.questions[index]);

    if (_field.questions[index].answer_mode === "Single") {
        _fieldPropertiesGroup.questions[index].follow_up.is_hidden = false;
        _fieldPropertiesGroup.questions[index].follow_up_yes.is_hidden = true;
        _fieldPropertiesGroup.questions[index].follow_up_no.is_hidden = true;

        _fieldPropertiesGroup.questions[index].answer_follow_up_yes.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_follow_up_no.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_follow_up.is_hidden = false;
        _fieldPropertiesGroup.questions[index].answer_none.is_hidden = true;
    } else if (_field.questions[index].answer_mode === "Conditional") {
        _fieldPropertiesGroup.questions[index].follow_up.is_hidden = true;
        _fieldPropertiesGroup.questions[index].follow_up_yes.is_hidden = false;
        _fieldPropertiesGroup.questions[index].follow_up_no.is_hidden = false;

        _fieldPropertiesGroup.questions[index].answer_follow_up_yes.is_hidden = false;
        _fieldPropertiesGroup.questions[index].answer_follow_up_no.is_hidden = false;
        _fieldPropertiesGroup.questions[index].answer_follow_up.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_none.is_hidden = true;
    } else if (_field.questions[index].answer_mode === "None") {
        _fieldPropertiesGroup.questions[index].follow_up.is_hidden = true;
        _fieldPropertiesGroup.questions[index].follow_up_yes.is_hidden = true;
        _fieldPropertiesGroup.questions[index].follow_up_no.is_hidden = true;

        _fieldPropertiesGroup.questions[index].answer_follow_up_yes.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_follow_up_no.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_follow_up.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_none.is_hidden = false;
    } else {
        _fieldPropertiesGroup.questions[index].answer_none.is_hidden = true;
        _fieldPropertiesGroup.questions[index].follow_up.is_hidden = true;
        _fieldPropertiesGroup.questions[index].follow_up_yes.is_hidden = true;
        _fieldPropertiesGroup.questions[index].follow_up_no.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_follow_up_yes.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_follow_up_no.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_follow_up.is_hidden = true;
        _fieldPropertiesGroup.questions[index].answer_none.is_hidden = true;
    }
});


_fieldPropertiesGroup.questions[index].answer_follow_up_yes.is_hidden = true;
_fieldPropertiesGroup.questions[index].answer_follow_up_no.is_hidden = true;
_fieldPropertiesGroup.questions[index].answer_follow_up.is_hidden = true;
_fieldPropertiesGroup.questions[index].answer_none.is_hidden = true;