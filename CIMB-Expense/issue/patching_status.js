var records = [
    {
        "amount": 760000,
        "approved_date": 1775972971064,
        "category": {
            "id": "ldTwvkZIR",
            "name": "R_Parkir &Tol - Kendaraan Operasional"
        },
        "company_id": 25236,
        "created_at": 1775972971892,
        "created_by": 202384,
        "currency": {
            "convertion_amount": 760000,
            "origin_amount": 760000,
            "origin_currency": "IDR",
            "rate": 1,
            "target_currency": "IDR"
        },
        "description": "integration checkbox untuk banyak transaksi sekaligus, email rusak",
        "email": "raissa.ADARA@mailinator.com",
        "id": "BF4i9mhvg",
        "id_claim_reimbursement_parent": "BF4i9mhvg",
        "id_key": "1108",
        "payment_process_date": 1775984701657,
        "reject_reason": "",
        "status": "Payment Process",
        "sync_date": 1775973134083,
        "updated_at": 1775984701685,
        "updated_by": 202372
    },
]

var paid_date = 0;

if (
    records &&
    records.length &&
    records[0].payment_process_date
) {
    var date = new Date(records[0].payment_process_date);
    date.setHours(0, 0, 0, 0);
    paid_date = date.getTime();
}

console.log(paid_date);

// buatkan untuk paid date itu sama kayak di payment_process_date tapi di jam 00:00
