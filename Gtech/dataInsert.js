var data = [];

for (var i = 0; i < 100; i++) {
  data.push({
    amount: i * 1000,
    approved_by: "",
    count: 1,
    created_at: 1657683960000 + i * 1000,
    created_by: 0,
    flow_status: "sent", // sent, approved, rejected, draft
    ids: "ID" + i,
    updated_at: 1657683960000 + i * 1000,
    updated_by: 0,
  });
};


console.log(data);
