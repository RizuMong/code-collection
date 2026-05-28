var dataCollections = [
    {
        "_id": "6a17d08db44355994ca48baa",
        "amount": 110,
        "ids": "fUKJzWV90Woy",
        "planned_invoicing_month": 1,
        "planned_invoicing_week": 2,
        "planned_invoicing_year": 2027,
        "planned_sign_off_month": 10,
        "planned_sign_off_week": 1,
        "planned_sign_off_year": 2026,
        "project_id": {
            "id": "wGk8HrafpvJPd",
            "name": "Injourney Aviasi Pariwisata Indonesia"
        },
        "remarks": "",
        "status_invoicing_id": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
        },
        "status_sign_off_id": {
            "id": "tSxNmKcyFJcX",
            "name": "Backlog"
        },
        "term_of_payment": "CR_SIGN"
    }
];


var outstanding_amount = 0;
var sent_invoice_amount = 0;

dataCollections.forEach(function (collection) {
    var amount = Number(collection && collection.amount);

    if (isNaN(amount) || amount < 0) {
        amount = 0;
    };

    var invoicingStatus = collection && collection.status_invoicing_id &&
        typeof collection.status_invoicing_id.name === "string"
        ? collection.status_invoicing_id.name.trim()
        : "";

    if (invoicingStatus === "Invoice Sent to Client") {
        sent_invoice_amount += amount;
    } else {
        outstanding_amount += amount;
    };
});

console.log({
    outstanding_amount: outstanding_amount,
    sent_invoice_amount: sent_invoice_amount
});