var getCCEmail = [
  {
    cc_to: ["Broadcast Email Customer", "Broadcast Email Dealer"],
    company_id: 28001,
    created_at: 1730870736939,
    created_by: 174826,
    email_address: "dalva.rumania@toyota.astra.co.id",
    id: "KzSSsiMHg",
    ids: "KzSSsiMHg",
    officer_name: "Dalva Rumania",
    updated_at: 1730870736939,
    updated_by: 174826,
  },
  {
    cc_to: ["Broadcast Email Customer", "Broadcast Email Dealer"],
    company_id: 28001,
    created_at: 1730870621941,
    created_by: 174826,
    email_address: "ari.nirmalanto@toyota.astra.co.id",
    id: "YsEWsmMNg",
    ids: "YsEWsmMNg",
    officer_name: "Ari Nirmalanto",
    updated_at: 1730870695731,
    updated_by: 174826,
  },
];

var typeDealer = "Broadcast Email Dealer";
var ccEmail = "";

for (var i = 0; i < getCCEmail.length; i++) {
  var item = getCCEmail[i];
  if (item.cc_to.indexOf(typeDealer) !== -1) {
    ccEmail += (ccEmail ? ", " : "") + item.email_address;
  }
};

console.log(ccEmail);