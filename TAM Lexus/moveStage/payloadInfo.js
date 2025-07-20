var payloadAPI = {
  unique_ticket_id: "1679898", // id_qontak
  status: "confirmed", // status by conditional
  type: 1, // variant
  ldms_vehicle_id: "id_vehicle_123", // ldms_customer_id
  description: "lorem ipsum dolor sit amet", // description
  pipeline_id: "1617887", // crm_pipeline_id
  pipeline_name: "SVT", // crm_pipeline_name
  stage_id: "198918", // crm_stage_id
  stage_name: "On Progress", // crm_stage_name
  dealer_code: 1, // dealer_code
};

var payloadDealerService = {
  unique_ticket_id: "mb_61c34652ebf12",
  schedule: "2021-12-22T15:40:16.816Z",
  ldms_wo_id: "ldms_wo_123",
  dealer_code: 1,
};

var payloadRequestConcierge = {
  concierge_key: "CRG/20200827/0336", // customer
  message_type: "concierge", // default
  from_name: "Melvin", // name
  from: "081320325938", // phone_number
  message: "Ini informasi tambahan", // message
  location: "lokasi", // location
  coordinate: "[-7.610950, 112.772518]", // coordinate
  ldms_cust_id: "18", // ldms_customer_id
  ldms_vehicle_id: "122", // ldms_vehicle_id
  url_lreach: "https://abc.com/def", // url_l_reach
};

var payloadRequestDealerService = {
  dealer_booking_service_id: "WO/20240531/0346",
  message_type: "book_service_dealer",
  from_name: "Melvin",
  from: "081320325938",
  message: "Ini informasi tambahan",
  location: "lokasi",
  coordinate: "[-7.610950, 112.772518]",
  ldms_cust_id: "18",
  url_lreach: "https://abc.com/def",
};
