function _log(msg) {
    console.log(msg);
};


var req = {
    "query": {
        "filter": [
            "{\"status\":\"Rejected\"}"
        ],
        "limit": [
            "1000000"
        ],
        "page": [
            "1"
        ]
    }
}



var datas = JSON.parse(req.query.filter[0])
var test = Object.keys(datas)

// --- 1. Status Filter ---
var whereInAnd = {};
if (test.indexOf("status") !== -1 && datas.status) {
    whereInAnd.status = Array.isArray(datas.status)
        ? datas.status
        : [datas.status];
}

// Convert to undefined if no status was added
if (Object.keys(whereInAnd).length === 0) {
    whereInAnd = undefined;
}

// --- 2. Date Filters (where_between_and) ---
var whereBetweenAnd = {};

// Helper to check if the $between array exists before adding
if (datas.approved_date && datas.approved_date.$between) {
    whereBetweenAnd.approved_date = datas.approved_date.$between;
}
if (datas.sync_date && datas.sync_date.$between) {
    whereBetweenAnd.sync_date = datas.sync_date.$between;
}
if (datas.payment_process_date && datas.payment_process_date.$between) {
    whereBetweenAnd.payment_process_date = datas.payment_process_date.$between;
}
if (datas.paid_date && datas.paid_date.$between) {
    whereBetweenAnd.paid_date = datas.paid_date.$between;
}

if (Object.keys(whereBetweenAnd).length === 0) {
    whereBetweenAnd = undefined;
}


// --- 3. Identity Filters (where_is_and) ---
var whereIsAnd = {};
if (datas.email) whereIsAnd.email = datas.email;
if (datas.reff_id) whereIsAnd.id_key = String(datas.reff_id);
if (datas.reject_reason) whereIsAnd.reject_reason = datas.reject_reason;

if (Object.keys(whereIsAnd).length === 0) {
    whereIsAnd = undefined;
}


// --- 4. Final Object Construction ---
var filter = {
    _filter_version: 2,
    where_is_and: whereIsAnd,
    where_in_and: whereInAnd,
    where_between_and: whereBetweenAnd
};

_log({
    "whereIsAnd": whereIsAnd,
    "whereInAnd": whereInAnd,
    "whereBetweenAnd": whereBetweenAnd,
    "filter": filter
})

// var sort = {
//     created_at: -1
// };
// var idDataManager = "ynuf-HIVg";

// // karena limit dan page ini di set wajib jadinya ku gedein aja
// var page = 1;
// var limit = 999999;
// var filter0perator = 'and';

// // PANGGIL FUNGSI ADVANCE FILTER
// var records = _findRecords(
//     idDataManager,
//     page,
//     limit,
//     sort,
//     filter,
//     filter0perator
// ) || []; // kita kasih operator || [] supaya jika hasil querynya null yang direturn array kosong

// _log(records)