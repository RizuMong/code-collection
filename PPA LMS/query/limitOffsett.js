// var totalData = 100;
// var limit = 10;

// var result = [];
// var totalPages = Math.ceil(totalData / limit);

// for (var i = 0; i < totalPages; i++) {
//   var offset = i * limit;
//   var isLastPage = i === totalPages - 1;

//   result.push({
//     limit: limit,
//     offset: offset,
//     last_page: isLastPage
//   });
// }

// console.log(result);

var payloadData = {
  division: null,
};

console.log(payloadData.division ? payloadData.division : "--");