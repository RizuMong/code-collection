var req = {
    "amount": 0,
    "code_group_component": "THR",
    "company_id": 27414,
    "created_at": 1766128815061,
    "created_by": 178566,
    "id": "_CK3TCGvg",
    "ids": "_CK3TCGvg",
    "import_id": "7rFqTjMvg",
    "multiplier": 1,
    "npk": "93232323",
    "payment_date": "27-12-2025",
    "status_salary": "PENERIMAAN",
    "updated_at": 1766128815061,
    "updated_by": 178566
};

var errors = [];
var note = "";

function convertDateStringToTimestamp(dateString) {
    var dateParts = dateString.split("-");
    var day = parseInt(dateParts[0], 10);
    var month = parseInt(dateParts[1], 10) - 1;
    var year = parseInt(dateParts[2], 10);

    return new Date(year, month, day).getTime();
}


// mapping nama kolom untuk pesan error
var fieldNames = {
    "code_group_component": "KODE KELOMPOK KOMPONEN",
    "npk": "NPK",
    "payment_date": "TANGGAL PEMBAYARAN",
    "status_salary": "STATUS GAJI",
    "amount": "JUMLAH",
    "multiplier": "PENGALI"
};

// jika amount null atau undefined, set ke 0
if (req.amount == null) {
    req.amount = 0;
};

// validasi field wajib
var mandatoryFields = [
    "code_group_component",
    "npk",
    "payment_date",
    "status_salary",
];

mandatoryFields.forEach(function (field) {
    if (!req[field] || req[field].toString().trim() === "") {
        errors.push("Kolom '" + fieldNames[field] + "' wajib diisi.");
    }
});

// validasi amount
if (isNaN(req.amount) || req.amount < 0) {
    errors.push("Kolom '" + fieldNames["amount"] + "' harus berupa angka non-negatif.");
}

// validasi multiplier
if (isNaN(req.multiplier) || req.multiplier <= 0) {
    errors.push("Kolom '" + fieldNames["multiplier"] + "' harus berupa angka positif.");
}

// validasi status_salary
var validStatusSalary = ["PENERIMAAN", "POTONGAN"];
if (validStatusSalary.indexOf(req.status_salary) === -1) {
    errors.push("Kolom '" + fieldNames["status_salary"] + "' harus berupa 'PENERIMAAN' atau 'POTONGAN'.");
};

// validasi format payment_date (DD-MM-YYYY)
var datePattern = /^\d{2}-\d{2}-\d{4}$/;
if (!datePattern.test(req.payment_date)) {
    errors.push("Kolom '" + fieldNames["payment_date"] + "' harus dalam format DD-MM-YYYY.");
} else {
    var payment_date = convertDateStringToTimestamp(req.payment_date);
};

if (errors.length > 0) {
    note = errors.join(" ");
};

console.log(note);
console.log(payment_date);



