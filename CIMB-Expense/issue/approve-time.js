var getDataTravelOrder = {
  additional_info: {},
  approved_by: [166461],
  business_type: {
    id: "yT0pl9HIR",
    name: "Perjalanan Dinas Dalam Negeri - Day Trip - Flight Kurang dari 4 Jam",
  },
  category: {
    id: "l6tblrNIR",
    name: "Perjalanan Dinas Dalam Negeri - Day Trip - Flight Kurang dari 4 Jam",
  },
  company_id: 25236,
  created_at: 1736297964959,
  created_by: 166467,
  created_by_obj: {
    id: 166467,
    name: 166467,
  },
  doc: [
    {
      name: "Max 4 MB",
      url: "hVygoMDHgz",
    },
  ],
  duration_end: 1738083600000,
  duration_start: 1736269200000,
  flow_id: 173205066,
  flow_status: "approved",
  id: "6PmzoMDNg",
  id_key: 363,
  id_travel_order: "6PmzoMDNg",
  note: "",
  payment_expiration_time: 1736299570789,
  payment_expiration_time_tags: {
    background: "#dc3545",
    font_color: "#f3f3f3",
    name: "2025-01-08 08:26",
  },
  pic: {
    id: "OUjjpUQ4R",
    name: "Subandi Subandi",
  },
  position: {
    id: "IPA1J8QVR",
    name: "Business Support & Internal Control Specialist - 2",
  },
  project_code_obj: {
    id: "",
    name: "",
  },
  purpose: "testing 08/01/2025",
  ref_id: "363",
  relasi: "",
  relasi2: "",
  status: "open",
  submitted_at: 1736298388087,
  total_amount: 1149700,
  travel_type_: {
    id: "LpsrGe-VR",
    name: "Domestic",
  },
  updated_at: 1736298636644,
  updated_by: 166461,
};

var response = {};

if (!getDataTravelOrder.hasOwnProperty("payment_expiration_time")) {
  response = {
      error: true,
      message: "Approval time is missing. Please set it up or contact the admin before approving the travel order."
  };
};

var today = new Date().getTime();

if (today > getDataTravelOrder.payment_expiration_time) {
  response = {
      error: true,
      message: "Approve time is over. Please create a new travel order!"
  };
};

console.log(response);
