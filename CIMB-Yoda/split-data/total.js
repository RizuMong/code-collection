var total = {
  totalData: [
    {
      _id: null,
      total_data: 20,
    },
  ],
  totalDataRejected: null,
  totalDataSuccess: [
    {
      _id: null,
      total_success: 20,
    },
  ],
};

function validateTotalData(total) {
  // Validasi totalData
  var validatedTotalData = (total.totalData && total.totalData[0] && total.totalData[0].total_data !== null) ? total.totalData[0].total_data : 0;

  // Validasi totalDataRejected
  var validatedTotalDataRejected = (total.totalDataRejected !== null) ? total.totalDataRejected : 0;

  // Validasi totalDataSuccess
  var validatedTotalDataSuccess = (total.totalDataSuccess && total.totalDataSuccess[0] && total.totalDataSuccess[0].total_success !== null) ? total.totalDataSuccess[0].total_success : 0;

  return {
      totalData: validatedTotalData,
      totalDataRejected: validatedTotalDataRejected,
      totalDataSuccess: validatedTotalDataSuccess
  };
}

var validatedData = validateTotalData(total);
console.log(validatedData);