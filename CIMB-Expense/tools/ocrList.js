var dataDuplicateImages = [
  {
    company_id: 25236,
    created_at: 1732526878134,
    created_by: 187490,
    duplicate_transaction_id_key: 62028,
    duplicate_transaction_ids: ["dyvvCKZHR"],
    duplicate_transaction_type: "Reimbursement",
    id: "Ptffif7HR",
    id_ocr_duplicate_image: "Ptffif7HR",
    isnative: "0",
    similarity: 93,
    transaction_id: {
      id: "NG4omf7Ng",
      name: "67343",
    },
    transaction_type: "Reimbursement",
    updated_at: 1732526878134,
    updated_by: 187490,
  },
  {
    company_id: 25236,
    created_at: 1732526878134,
    created_by: 187490,
    duplicate_transaction_id_key: 62028,
    duplicate_transaction_ids: ["dyvvCKZHR"],
    duplicate_transaction_type: "Reimbursement",
    id: "Ptffif7HR",
    id_ocr_duplicate_image: "Ptffif7HR",
    isnative: "0",
    similarity: 96,
    transaction_id: {
      id: "NG4omf7Ng",
      name: "67343",
    },
    transaction_type: "Reimbursement",
    updated_at: 1732526878134,
    updated_by: 187490,
  },
];

var OCRImageDuplicates = "";
var OCRReffId = "";
var OCRTransactionType = "";

for (var i = 0; i < dataDuplicateImages.length; i++) {
  OCRImageDuplicates += Number(dataDuplicateImages[i].similarity).toFixed(2);
  OCRReffId += dataDuplicateImages[i].duplicate_transaction_id_key;
  OCRTransactionType += dataDuplicateImages[i].transaction_type;
  if (i < dataDuplicateImages.length - 1) {
    OCRImageDuplicates += "^";
    OCRReffId += "^";
    OCRTransactionType += "^";
  }
}

console.log(OCRImageDuplicates);
console.log(OCRReffId);
console.log(OCRTransactionType);
