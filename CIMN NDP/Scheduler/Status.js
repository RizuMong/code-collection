var allStatus = [
  {
    code: "success",
    company_id: 25236,
    created_at: 0,
    created_by: 157190,
    display: "",
    flow_status: "",
    id: "ZDoxoIdNg",
    id_master: "ZDoxoIdNg",
    obj_tag: {
      background: "",
      font_color: "",
      name: "",
    },
    updated_at: 0,
    updated_by: 157190,
  }
];

var allStatusObj = {};

allStatus.forEach(function (status) {
    allStatusObj[status.code] = status;
});

console.log(allStatusObj.success.code);