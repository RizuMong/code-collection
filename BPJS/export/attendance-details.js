function safeVal(val) {
    return val !== null && val !== undefined ? val : '';
};

function _log(msg) {
  console.log(msg);
};

var data = [];
for (var m = 0; m < result.length; m++) {
    var item = result[m];
    data.push({
        id_transaction_product: safeVal(item["ID Transaction Product"]),
    });
}

_log(result)
_log("result")

// Inisiasi export Excel
var fileName = 'Report Transaction Products.xlsx';
var sheetName = 'Report Transaction Products';

var headerMap = {
    id_transaction_product: "ID Transaction Product",
    transaction_number : "Transaction Number",
    transaction_requests_id: "Transaction Request ID",
    company_name: "Customer Name",
    pic_name: "PIC Name",
    product_id: "Product ID",
    product_name: "Product Name",
    environment: "Environment",
    domain: "Domain",
    path: "Path",
    payment_type: "Payment Type",
    billing_type: "Billing Type",
    billing_period: "Billing Period",
    quota: "Quota",
    // price: "Price",
    // excess_price: "Excess Price"
};

var headerOrder = [
    "id_transaction_product",
    "transaction_number",
    "transaction_requests_id",
    "company_name",
    "pic_name",
    "product_id",
    "product_name",
    "environment",
    "domain",
    "path",
    "payment_type",
    "billing_type",
    "billing_period",
    "quota",
    // "price",
    // "excess_price"
];

// _exportExcel(fileName, sheetName, data, headerMap, headerOrder);