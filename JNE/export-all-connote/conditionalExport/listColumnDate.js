var listColumnDate = [
  "awb_date",
  "contract_validity_period_from_date",
  "contract_validity_period_to_date",
  "creation_date_and_time",
  "connote_created_date_time",
  "approval_connote_data_entry_date_time",
  "pick_up_request_date_time",
  "pick_up_request_approved_date_time",
  "pick_up_request_ready_date_time",
  "pick_up_confirmed_date_time",
  "re_pick_up_date_time",
  "pick_up_request_cancelled_date_time",
  "pick_up_date_time",
  "pick_up_request_received_date_time",
  "sla_date",
  "receiving_checking_connote_date_time",
  "last_service_type_modified_date_and_time",
  "last_origin_code_modified_date_and_time",
  "last_destination_code_modified_date_and_time",
  "master_bag_date_time",
  "approval_bag_date_time",
  "outbound_manifest_date_time",
  "approved_outbound_manifested_date",
  "outbound_manifest_cancelled_date_time",
  "handover_outbound_date_time",
  "handover_outbound_approval_date_time",
  "smu_date_time",
  "actual_flight_date",
  "smu_approved_date_time",
  "smu_confirmed_date_time",
  "smu_cancelled_date_time",
  "transit_manifest_date_time",
  "approved_transit_date_time",
  "delivered_to_city_date_time",
  "delivered_to_warehouse_date_time",
  "handover_inbound_date_time",
  "handover_inbound_approval_date_time",
  "handover_inbound_cancelled_date_time",
  "inbound_manifest_date_time",
  "runsheet_created_date__time",
  "approved_runsheet_date_time",
  "handover_runsheet_date_time",
  "approved_handover_runsheet_date_time",
  "initial_pod_date_time",
  "undelivered_pod_date_time",
  "final_connote_pod_status_date_time",
  "connote_received_sorted_last_modified_date_time",
  "connote_ready_to_be_invoiced_last_modified_date_time",
  "proforma_invoice_initial_date_last_modified_date_time",
  "proforma_invoice_approved_date_last_modified_date_time",
  "invoice_date",
  "posting_date",
  "revised_invoice_date",
  "date_time_discount_calculation",
  "date_time_mfee_na_calculation",
  "date_time_insurance_calculation",
  "invoice_date_cod",
  "p_date",
  "import_tax_slip_date"
]

if (payload.hasOwnProperty("column_type")) {
  if (payload.column_type == "Cashless") {
      listColumnDate = [
          "awb_date",
          "final_connote_pod_status_date_time",
          "invoice_date",
          "date_time_discount_calculation"
      ]
  };

  if (payload.column_type == "Unbilled") {
      listColumnGet = [
          "awb_date",
          "connote_created_date_time",
          "outbound_manifest_date_time",
          "handover_inbound_date_time",
          "runsheet_created_date__time",
          "final_connote_pod_status_date_time"
      ]
  };

  if (payload.column_type == "Unbilled Total Revenue") {
    listColumnGet = [
      "awb_date",
      "invoice_date",
    ]
};
}