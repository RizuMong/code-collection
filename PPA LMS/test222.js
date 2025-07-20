var hit = {
  data: {
    pagination: {
      total: 100
    }
  }
}

var totalData = 0;
var limit = 50;
var listParameter = [];

if (typeof hit === "object") {
    totalData = hit.data.pagination.total;
};

var totalPage = totalData / limit + 1;
var arrayPage = [];
for (i = 1; i < totalPage; i++) {
    var listParameter = {
        has_generate: false,
        page: i,
        limit: limit,
    };
    arrayPage.push(listParameter);
};

console.log(arrayPage)