var payload = {
  company_id: 11769,
  created_at: 1737342369171,
  created_by: 178595,
  // expense_category: "5000-18 Biaya Operasional",
  // expense_category: "5000-14  Biaya Perdiem & 5000-18  Biaya Operasional & 5000-06  Biaya Kepengurusan & 5000-04  Jasa Konsultansi & 6203-08  Biaya ATK dan Perlengkapan Kantor & 6203-01  Biaya Perjalanan Dinas & 6203-02  Biaya Transportasi & 5000-03  Pemasaran  Publikasi & 1110-04  Pengembalian Sisa Advance & 7200-03  Biaya Adm Bank  Buku Cek/Giro",
  expense_category: "5000-18 & 6101 & 6203-08 & 6203-10 & 6106 & 6107 & 6109 & 6110 & 6111 & 6112 & 1110-04 & 7200-03",
  id: "lF8k-ZONg",
  id_import: "lF8k-ZONg",
  import_id: "9d8z-ZdNR",
  member: "All",
  project_code:
    "1001 - PT. Dhiva Intersarana (Dalam Pailit) & Richard Setiawan (Dalam Pailit)",
  // type: "Reimbursement & Cash Advance",
  type: "Reimbursement",
  updated_at: 1737342369171,
  updated_by: 178595,
};

var expenseCategories = payload.expense_category.split("&");
var expenseCategoryArray = [];

for (var i = 0; i < expenseCategories.length; i++) {
  var category = expenseCategories[i].trim().split(" ")[0];
  expenseCategoryArray.push(category);
}

var projectCode = payload.project_code.split(" - ")[0].trim();
// var expenseCategory = payload.expense_category.split(" ")[0].trim();
var typeParts = payload.type.split("&");
var type1 = typeParts[0] ? typeParts[0].trim() : "";
var type2 = typeParts[1] ? typeParts[1].trim() : "";
var typeExpense = [];

if (type1 !== "") {
  typeExpense.push(type1);
}

if (type2 !== "") {
  typeExpense.push(type2);
}

console.log({
  // projectCode: projectCode,
  // expenseCategory: expenseCategory,
  // type1: type1,
  // type2: type2,
  // typeExpense: typeExpense,
  expenseCategoryArray: expenseCategoryArray
});
