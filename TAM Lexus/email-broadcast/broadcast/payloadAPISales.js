var getDetailData = {
  category: "After Sales",
  company_id: 28001,
  created_at: 1729829799094,
  created_by: 0,
  deal_name: "22-CP-0000134 - Ade Sanjaya [Test Broadcast Dealer]",
  destination: "Lexus Menteng",
  id: "EnO0PWWNR",
  ids: "EnO0PWWNR",
  inquiry: "Customer Database",
  location: "East Jakarta",
  remarks: "Complaint",
  status: {
    background: "#B7B7B7",
    font_color: "#FFFFFF",
    name: "Pending",
  },
  status_valid: "Valid",
  ticket_qontak_id: 57221960,
  to_email: [
    {
      id: "y4HRhmRNR",
      name: "kireyna.samantha@lexus.astra.co.id",
    },
  ],
  unique_deal_id: "556ILECOPH",
  updated_at: 1729851251661,
  updated_by: 174826,
};

var getDetailCustomer = {
  city: "KOTA JAKARTA TIMUR",
  company_id: 28001,
  created_at: 1729765860413,
  created_by: 174826,
  customer_name: "Ade Sanjaya",
  customer_receipt_date: "",
  customer_single_id: "22-CP-0000134",
  ticket_creator: "Rizky Pambudi",
  email: "adesanjaya3@gmail.com",
  domicile: "KOTA JAKARTA TIMUR",
  engine_number: "eng-5",
  id: "jziJQkZHR",
  ids: "jziJQkZHR",
  is_tmp_customer: false,
  last_mileage_date: "",
  phone_number: "081234567892",
  pipeline: {
    id: "168198",
    name: "Complaint",
  },
  plate_number: {
    id: "ePz0wzWNg",
    name: "B-1725-XXX",
  },
  product_description: "LEXUS RX 350h Luxury 4X2 A/T (AALH10R-AWXGB)",
  status_process: "Update Ticket",
  ticket_created_at: 1729765880991,
  "ticket_creator": "Rizky Pambudi -",
  ticket_qontak_id: 57221960,
  type: "Email",
  unique_deal_id: "556ILECOPH",
  updated_at: 1729765880991,
  updated_by: 174826,
  vin: {
    id: "ePz0wzWNg",
    name: "X6JHT14561271FR05",
  },
};

var getDealerMapping = {
  category: {
    id: "fPpASiRHg",
    name: "After Sales",
  },
  company_id: 28001,
  created_at: 1726566104281,
  created_by: 174803,
  destination: {
    id: "me0zNigNg",
    name: "Lexus Menteng",
  },
  email_address: "kireyna.samantha@lexus.astra.co.id",
  id: "y4HRhmRNR",
  ids: "y4HRhmRNR",
  inquiry: {
    id: "3MA8ImgHg",
    name: "Customer Database",
  },
  location: {
    id: 3800172,
    name: "Central Jakarta",
  },
  officer_name: "kireyna Samantha",
  updated_at: 1729839641903,
  updated_by: 174826,
};

var day = new Date(Date.now());
var dayOfMonth = day.getDate();
var monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];
var month = monthNames[day.getMonth()];
var year = day.getFullYear();
var formattedDate = dayOfMonth + " " + month + " " + year;

var payloadAPI = {
  date: formattedDate,
  recipientName: getDealerMapping.officer_name ? getDealerMapping.officer_name : "",
  dealName: getDetailData.deal_name ? getDetailData.deal_name : "",
  type: getDetailData.inquiry ? getDetailData.inquiry : "",
  dealerName: getDealerMapping.destination && getDealerMapping.destination.name ? getDealerMapping.destination.name : "",
  domicile: getDetailCustomer.domicile ? getDetailCustomer.domicile : "",
  phoneNumber: getDetailCustomer.phone_number ? getDetailCustomer.phone_number : "",
  email: getDetailCustomer.email ? getDetailCustomer.email : "",
  inquiry: getDetailData.inquiry ? getDetailData.inquiry : "",
  details: getDetailData.remarks ? getDetailData.remarks : "",
  pic: getDetailCustomer.ticket_creator ? getDetailCustomer.ticket_creator : "",
};

console.log(payloadAPI);
