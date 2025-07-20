var currentYear = new Date().getFullYear();  // Mendapatkan tahun sekarang
var years = [];  // Array untuk menyimpan data tahun

// Menentukan jumlah tahun yang ingin dihasilkan (misalnya 5 tahun, bisa diubah sesuai kebutuhan)
var numberOfYears = 2;

for (var i = 0; i < numberOfYears; i++) {
    years.push({
        id: (currentYear + i).toString(),
        name: (currentYear + i).toString()
    });
};


console.log(years);